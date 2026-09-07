import re
import datetime
from typing import Dict, Any, Tuple

CARRIERS = {
    'sf_express': {
        'name': '順豐速運',
        'category': '宅配快遞',
        'url_template': 'https://www.sf-express.com/tw/tc/dynamic_function/waybill/#search/bill-number/{tn}',
        'icon': '📦'
    },
    't_cat': {
        'name': '黑貓宅急便',
        'category': '宅配快遞',
        'url_template': 'https://www.t-cat.com.tw/Inquire/TraceDetail.aspx?BillID={tn}',
        'icon': '🐈'
    },
    'dhl': {
        'name': 'DHL Express',
        'category': '國際快遞',
        'url_template': 'https://www.dhl.com/tw-zh/home/tracking/tracking-express.html?submit=1&tracking-id={tn}',
        'icon': '✈️'
    },
    'ecms': {
        'name': 'ECMS 易客滿 (Amazon)',
        'category': '跨境物流',
        'url_template': 'https://track.ecmsglobal.com/express/track/index.html?tracking_number={tn}',
        'icon': '🌐'
    },
    'shopee_spx': {
        'name': '蝦皮店到店 (SPX)',
        'category': '超商/店到店',
        'url_template': 'https://spx.tw/#/detail?tracking_number={tn}',
        'icon': '🦐'
    },
    'coupang': {
        'name': '酷澎自營火箭速配',
        'category': '電商專車',
        'url_template': 'https://mc.coupang.com/ssr/desktop/order/list',
        'icon': '🚀'
    },
    'post_tw': {
        'name': '中華郵政',
        'category': '郵局包裹',
        'url_template': 'https://postserv.post.gov.tw/pst/home.html',
        'icon': '📮'
    },
    'hct': {
        'name': '新竹物流',
        'category': '宅配快遞',
        'url_template': 'https://www.hct.com.tw/Search/SearchGoods_n.aspx?no={tn}',
        'icon': '🚛'
    },
    'seven_eleven': {
        'name': '7-ELEVEN 交貨便',
        'category': '超商取貨',
        'url_template': 'https://eservice.7-11.com.tw/e-tracking/search.aspx',
        'icon': '🏪'
    },
    'family_mart': {
        'name': '全家店到店',
        'category': '超商取貨',
        'url_template': 'https://www.family.com.tw/Marketing/Integration/index',
        'icon': '🏪'
    },
    'other': {
        'name': '17TRACK 全球追蹤',
        'category': '綜合查詢',
        'url_template': 'https://t.17track.net/zh-tw#nums={tn}',
        'icon': '🔍'
    }
}

def guess_carrier(tracking_number: str) -> str:
    tn = tracking_number.strip().upper()
    if not tn:
        return 'other'
    if tn.startswith('SF') or (tn.isdigit() and len(tn) in [12, 15] and tn.startswith('1')):
        return 'sf_express'
    if tn.startswith('APX') or tn.startswith('ECMS'):
        return 'ecms'
    if tn.startswith('TW') and ('S' in tn or 'SPX' in tn):
        return 'shopee_spx'
    if tn.startswith('CPG') or 'COUPANG' in tn or 'ROCKET' in tn:
        return 'coupang'
    if tn.isdigit() and len(tn) in [10, 12] and (tn.startswith('6') or tn.startswith('9') or tn.startswith('8')):
        return 't_cat'
    if tn.isdigit() and len(tn) == 10:
        return 'dhl'
    return 'other'

def get_official_url(carrier: str, tracking_number: str) -> str:
    carrier_info = CARRIERS.get(carrier, CARRIERS['other'])
    template = carrier_info.get('url_template', CARRIERS['other']['url_template'])
    return template.replace('{tn}', tracking_number.strip())

def advance_step(pkg: Dict[str, Any]) -> Dict[str, Any]:
    current = pkg.get('current_step', 1)
    steps = pkg.get('steps', [])
    now_str = datetime.datetime.now().strftime('%Y-%m-%d %H:%M')
    
    if current < len(steps):
        next_step = current + 1
        pkg['current_step'] = next_step
        steps[next_step - 1]['completed'] = True
        steps[next_step - 1]['time'] = now_str
        
        # update status text based on step
        step_title = steps[next_step - 1]['title']
        step_desc = steps[next_step - 1]['desc']
        pkg['status_text'] = f'{step_title} - {step_desc}'
        pkg['updated_at'] = now_str
        
        if next_step == len(steps):
            pkg['status_code'] = 'delivered'
            pkg['status_text'] = '已簽收 / 完成取件'
        elif next_step == len(steps) - 1:
            pkg['status_code'] = 'out_for_delivery'
        else:
            pkg['status_code'] = 'in_transit'
            
    return pkg
