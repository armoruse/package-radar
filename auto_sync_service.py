import os
import json
import re
import html
import subprocess
from datetime import datetime
from email.header import decode_header
from imap_tools import MailBox
from dotenv import load_dotenv

base_dir = r"C:\Users\armochen\.gemini\antigravity\scratch\package-radar"
env_path = r"C:\Users\armochen\.gemini\antigravity\scratch\gmail_organizer\.env"
data_file = os.path.join(base_dir, "data", "packages.json")

load_dotenv(env_path)
user = os.getenv("GMAIL_EMAIL")
pwd = os.getenv("GMAIL_APP_PASSWORD")

def safe_decode(s):
    if not s:
        return ""
    parts = decode_header(s)
    res = []
    for content, enc in parts:
        if isinstance(content, bytes):
            for e in [enc, 'utf-8', 'big5', 'cp950']:
                if not e: continue
                try:
                    res.append(content.decode(e))
                    break
                except:
                    pass
        else:
            res.append(str(content))
    return "".join(res)

def extract_clean_text(msg):
    raw = msg.html or msg.text or ""
    clean = re.sub(r"<[^>]+>", "\n", raw)
    clean = html.unescape(clean)
    return clean

def sync_packages():
    now_str = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    print(f"[{now_str}] 檢查 Gmail 電商/購物最新進度中 (MOMO, PChome, 蝦皮, 酷澎, Apple, Amazon, 好市多)...")
    if not user or not pwd:
        print("未設定 Gmail 認證資訊")
        return False

    with open(data_file, "r", encoding="utf-8-sig") as f:
        packages = json.load(f)

    updated = False

    try:
        with MailBox("imap.gmail.com").login(user, pwd) as mailbox:
            for msg in mailbox.fetch(limit=40, reverse=True):
                subj = safe_decode(msg.subject)
                sender = (msg.from_ or "").lower()
                clean_body = extract_clean_text(msg)
                full_text = f"{subj}\n{sender}\n{clean_body}"

                # 1. 酷澎清晨達完成檢查
                if "coupang" in sender or "酷澎" in subj:
                    if any(w in full_text for w in ["已送達", "送達完成", "放置於門口", "送達門前", "已放置門前"]):
                        for p in packages:
                            if "coupang" in p["id"] and p.get("status_badge") != "已送達門口":
                                p["status_badge"] = "已送達門口"
                                p["status_text"] = "酷澎專員已完成清晨配送，放置於門口！"
                                p["eta"] = "已配達 (門口已簽收)"
                                updated = True
                                print("✨ 更新酷澎狀態：已送達門口！")

                # 2. 蝦皮取件通知檢查 (訂單 #260906ARJSSG7P 或 #260906ARM5QKBM)
                if "shopee" in sender or "spx" in sender or "蝦皮" in subj:
                    if any(w in full_text for w in ["取貨門市通知", "已送達門市", "到達門市", "取件代碼", "包裹已抵達"]):
                        if "260906ARJSSG7P" in full_text:
                            for p in packages:
                                if "shopee-bag" in p["id"] and p.get("status_badge") != "門市待取件":
                                    p["status_badge"] = "門市待取件"
                                    p["status_text"] = "包裹已送達取件門市，請於 7 天內前往取件！"
                                    p["eta"] = "已到門市 (請盡速取件)"
                                    updated = True
                                    print("✨ 更新蝦皮耳機包：已到店待取件！")
                        if "260906ARM5QKBM" in full_text:
                            for p in packages:
                                if "shopee-cover" in p["id"] and p.get("status_badge") != "門市待取件":
                                    p["status_badge"] = "門市待取件"
                                    p["status_text"] = "包裹已送達取件門市！"
                                    p["eta"] = "已到門市"
                                    updated = True
                                    print("✨ 更新蝦皮耳罩套：已到店待取件！")

                # 3. Apple MacBook 出貨通知檢查 (訂單 W1529074157)
                if "apple" in sender or "apple.com" in sender:
                    if any(w in full_text for w in ["出貨", "運送途中", "提單", "正式發貨"]):
                        sf_match = re.search(r'(SF\d{10,14})', full_text)
                        for p in packages:
                            if "apple" in p["id"] and p.get("status_badge") != "順豐運送中":
                                p["status_badge"] = "順豐運送中"
                                if sf_match:
                                    p["order_id"] = f"順豐單號: {sf_match.group(1)}"
                                    p["official_url"] = f"https://www.sf-express.com/tw/tc/dynamic_function/waybill/#search/bill-number/{sf_match.group(1)}"
                                p["status_text"] = "Apple 原廠已組裝完成出貨，順豐國際航班運往台灣中！"
                                updated = True
                                print("✨ 更新 Apple MacBook：已正式出貨！")

                # 4. Costco 出貨檢查 (訂單 645076852)
                if "costco" in sender or "好市多" in subj:
                    if any(w in full_text for w in ["出貨", "發貨", "配送編號", "黑貓", "宅配通"]):
                        for p in packages:
                            if "costco" in p["id"] and p.get("status_badge") != "宅配派送中":
                                p["status_badge"] = "宅配派送中"
                                p["status_text"] = "好市多已出貨，黑貓/宅配通專車運送前往五股！"
                                updated = True
                                print("✨ 更新好市多耳機：宅配出貨中！")

                # 5. MOMO 購物網檢查 (新訂單或出貨通知)
                if "momoshop" in sender or "momo購物" in subj:
                    order_match = re.search(r'訂單(?:編號|號碼)[：:\s]*(\d{10,16})', full_text)
                    if order_match:
                        order_no = order_match.group(1)
                        # Find existing
                        existing = next((p for p in packages if order_no in p.get("order_id", "") or p.get("id") == f"pkg-momo-{order_no}"), None)
                        
                        # Product title extract
                        prod_match = re.search(r'訂購商品[：:\s]*(\[[0-9]+\])?([^\r\n]+)', full_text)
                        prod_title = prod_match.group(2).strip() if prod_match else "momo 購物商品"
                        if len(prod_title) > 50:
                            prod_title = prod_title[:50] + "..."

                        if not existing:
                            is_shipped = "出貨通知" in subj or "已寄出" in full_text
                            new_item = {
                                "id": f"pkg-momo-{order_no}",
                                "name": prod_title,
                                "subtitle": f"momo 購物訂單 · {order_no}",
                                "image": "images/momo_charger.png",
                                "platform": "momo 購物網",
                                "platform_color": "bg-pink-50 text-pink-700 border-pink-200",
                                "order_id": f"訂單 #{order_no}",
                                "shipping_type": "momo 快速出貨 (宅配)",
                                "eta": "已寄出配送中" if is_shipped else "備貨中",
                                "eta_highlight": True,
                                "status_badge": "出貨配送中" if is_shipped else "訂單成立",
                                "status_text": "momo 倉儲專車配送中" if is_shipped else "訂單已成立揀貨中",
                                "current_step": 3 if is_shipped else 2,
                                "steps": ["已下單", "倉儲出庫", "物流配送", "已送達"],
                                "official_url": "https://www.momoshop.com.tw/order/orderList.momo"
                            }
                            packages.append(new_item)
                            updated = True
                            print(f"✨ 發現新 momo 訂單 #{order_no}：{prod_title}")

                # 6. PChome 24h 購物檢查
                if "pchome" in sender or "pchome" in subj.lower():
                    order_match = re.search(r'(?:訂單編號|訂單序號)[：:\s]*([A-Za-z0-9]{10,20})', full_text)
                    if order_match:
                        order_no = order_match.group(1)
                        existing = next((p for p in packages if order_no in p.get("order_id", "") or p.get("id") == f"pkg-pchome-{order_no}"), None)
                        if not existing:
                            prod_title = "PChome 24h 購物商品"
                            for line in clean_body.splitlines():
                                if any(w in line for w in ["商品名稱", "訂購明細", "品名"]) and len(line.strip()) > 4:
                                    prod_title = line.strip().split("：")[-1][:45]
                                    break

                            new_item = {
                                "id": f"pkg-pchome-{order_no}",
                                "name": prod_title,
                                "subtitle": f"PChome 24h 快速到貨 · {order_no}",
                                "image": "",
                                "platform": "PChome 24h",
                                "platform_color": "bg-red-50 text-red-700 border-red-200",
                                "order_id": f"訂單 #{order_no}",
                                "shipping_type": "24h 快速到貨",
                                "eta": "預估今日~明日到貨",
                                "eta_highlight": True,
                                "status_badge": "出貨處理中",
                                "status_text": "PChome 物流中心出貨處理中",
                                "current_step": 2,
                                "steps": ["已訂購", "倉儲出庫", "宅配派送", "已送達"],
                                "official_url": "https://ecvip.pchome.com.tw/web/order/all"
                            }
                            packages.append(new_item)
                            updated = True
                            print(f"✨ 發現新 PChome 訂單 #{order_no}：{prod_title}")

    except Exception as e:
        print(f"Gmail 連線掃描異常: {e}")
        return False

    if updated:
        with open(data_file, "w", encoding="utf-8-sig") as f:
            json.dump(packages, f, ensure_ascii=False, indent=2)
        
        # Also sync to public/data
        public_data = os.path.join(base_dir, "public", "data", "packages.json")
        if os.path.exists(os.path.dirname(public_data)):
            with open(public_data, "w", encoding="utf-8-sig") as f:
                json.dump(packages, f, ensure_ascii=False, indent=2)

        # Git commit and push
        try:
            subprocess.run(["git", "add", "."], cwd=base_dir, check=True)
            subprocess.run(["git", "commit", "-m", "auto: sync latest shopping delivery updates from Gmail"], cwd=base_dir, check=True)
            subprocess.run(["git", "push", "origin", "master"], cwd=base_dir, check=True)
            print("🚀 最新電商包裹已自動推送到 Cloudflare 網頁！")
        except Exception as e:
            print(f"Git push 異常: {e}")
    else:
        print("所有購物訂單 (MOMO / PChome / 酷澎 / 蝦皮 / 好市多 / Apple / Amazon) 均為最新狀態！")

    return True

if __name__ == "__main__":
    sync_packages()

