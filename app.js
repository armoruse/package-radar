// Clean Chronological Schedule Engine
const SCHEDULE_DATA = [
  {
    "group_title": "明天 · 9月8日 (週二)",
    "group_badge": "最快送達",
    "group_badge_color": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "items": [
      {
        "id": "pkg-coupang",
        "name": "AHOYE 透氣可調護膝 2件組 (加強款)",
        "subtitle": "明天一早醒來門口簽收 · 先擋著用",
        "platform": "酷澎 Coupang",
        "order_id": "2026.9.7 訂購",
        "shipping_type": "🚀 火箭WOW 清晨達",
        "eta": "明天清晨 07:00 前",
        "eta_tag": "清晨送達",
        "status_badge": "專車配送中",
        "status_color": "text-emerald-700 bg-emerald-50 border-emerald-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-emerald-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 4c0 3 2 5 2 8s-2 5-2 8h10c0-3-2-5-2-8s2-5 2-8H7z\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"currentColor\" fill-opacity=\"0.2\"/><path d=\"M9 7h6M9 17h6\"/></svg>",
        "icon_bg": "bg-emerald-50 border-emerald-200",
        "current_status": "酷澎物流中心急速備貨，夜間專車即將發出",
        "official_url": "https://mc.coupang.com/ssr/desktop/order/list"
      },
      {
        "id": "pkg-shopee-bag",
        "name": "SONY / 漫步者 頭戴式耳機硬殼收納盒",
        "subtitle": "耳機防壓抗震收納硬殼包 (無登山扣)",
        "platform": "蝦皮購物",
        "order_id": "訂單 #260906ARJSSG7P",
        "shipping_type": "⚡ 蝦皮隔日達",
        "eta": "預估 9/7 晚間 - 9/8",
        "eta_tag": "即將到店",
        "status_badge": "出貨配送中",
        "status_color": "text-amber-700 bg-amber-50 border-amber-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-amber-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"15\" rx=\"5\" fill=\"currentColor\" fill-opacity=\"0.1\"/><path d=\"M8 5V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/><line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\" stroke-dasharray=\"2 2\"/><circle cx=\"12\" cy=\"1.5\" r=\"1.5\" fill=\"currentColor\"/></svg>",
        "icon_bg": "bg-amber-50 border-amber-200",
        "current_status": "賣家備貨包裝中，準備交寄隔日達專線",
        "official_url": "https://spx.tw/#/detail?tracking_number=260906ARJSSG7P"
      },
      {
        "id": "pkg-costco",
        "name": "EDIFIER W820NB Plus 降噪耳機 (海軍藍)",
        "subtitle": "好市多線上宅配 · 耳機本體 $1,999",
        "platform": "Costco 好市多",
        "order_id": "訂單 #645076852",
        "shipping_type": "線上宅配 (黑貓/宅配通)",
        "eta": "預估 9/8 - 9/9 送達",
        "eta_tag": "宅配到府",
        "status_badge": "倉儲處理中",
        "status_color": "text-blue-700 bg-blue-50 border-blue-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-blue-700\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3\"/><path d=\"M8 12V9a4 4 0 0 1 8 0v3\" stroke-width=\"1.2\"/></svg>",
        "icon_bg": "bg-blue-50 border-blue-200",
        "current_status": "好市多倉儲正式揀貨打包中，即將移交快遞",
        "official_url": "https://www.costco.com.tw/my-account/orders"
      }
    ]
  },
  {
    "group_title": "本週三~週四 · 9月9日 - 9月10日",
    "group_badge": "本週陸續到達",
    "group_badge_color": "bg-zinc-100 text-zinc-700 border-zinc-200",
    "items": [
      {
        "id": "pkg-shopee-cover",
        "name": "漫步者 W820NB 耳罩矽膠保護套 (藏青色)",
        "subtitle": "【藏青色耳帽】防塵軟殼替換配件",
        "platform": "蝦皮購物",
        "order_id": "訂單 #260906ARM5QKBM",
        "shipping_type": "蝦皮店到店",
        "eta": "預估 9/9 - 9/10 到店",
        "eta_tag": "超商取件",
        "status_badge": "賣家備貨中",
        "status_color": "text-orange-700 bg-orange-50 border-orange-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-orange-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"8\" cy=\"12\" r=\"5\" fill=\"currentColor\" fill-opacity=\"0.1\"/><circle cx=\"8\" cy=\"12\" r=\"2\"/><circle cx=\"16\" cy=\"12\" r=\"5\" fill=\"currentColor\" fill-opacity=\"0.1\"/><circle cx=\"16\" cy=\"12\" r=\"2\"/></svg>",
        "icon_bg": "bg-orange-50 border-orange-200",
        "current_status": "賣家確認訂單打包中，等待交寄門市轉運",
        "official_url": "https://spx.tw/#/detail?tracking_number=260906ARM5QKBM"
      }
    ]
  },
  {
    "group_title": "下週送達 · 9月15日 - 9月24日",
    "group_badge": "旗艦大件 & 跨國件",
    "group_badge_color": "bg-sky-100 text-sky-800 border-sky-200",
    "items": [
      {
        "id": "pkg-apple",
        "name": "Apple 13 吋 MacBook Air (天藍色客製版)",
        "subtitle": "送達五股鈊象電子 · 教育優惠減免 -NT$3,200",
        "platform": "Apple 官方直營",
        "order_id": "訂單 #W1529074157",
        "shipping_type": "原廠標準運送 (順豐直寄)",
        "eta": "送達 09/17 - 09/24",
        "eta_tag": "專車直寄公司",
        "status_badge": "原廠處理中",
        "status_color": "text-sky-700 bg-sky-50 border-sky-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-sky-700\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"4\" y=\"4\" width=\"16\" height=\"11\" rx=\"2\" fill=\"currentColor\" fill-opacity=\"0.1\"/><path d=\"M2 18h20a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z\"/><circle cx=\"12\" cy=\"9.5\" r=\"1.5\" fill=\"currentColor\"/></svg>",
        "icon_bg": "bg-sky-50 border-sky-200",
        "current_status": "正在處理 (Apple 原廠產線客製組裝生產中)",
        "official_url": "https://www.apple.com/tw/shop/order/list"
      },
      {
        "id": "pkg-amazon",
        "name": "Amazon 專業運動護膝 x 2 (Health Care)",
        "subtitle": "美國直寄 $409.66 · 收件人：Jiayong 新北",
        "platform": "Amazon 美國",
        "order_id": "訂單 #112-9464569-8250632",
        "shipping_type": "Amazon Global (國際航空直寄)",
        "eta": "預估 9/22 (二) 前送達",
        "eta_tag": "跨國清關送達",
        "status_badge": "已下單備貨",
        "status_color": "text-indigo-700 bg-indigo-50 border-indigo-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-indigo-700\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 3c0 4 2 6 2 9s-2 5-2 9h12c0-4-2-5-2-9s2-5 2-9H6z\"/><circle cx=\"12\" cy=\"12\" r=\"3\" stroke-width=\"2\"/><path d=\"M8 8l8 8M16 8l-8 8\" stroke-width=\"1\" stroke-dasharray=\"1 2\"/></svg>",
        "icon_bg": "bg-indigo-50 border-indigo-200",
        "current_status": "已完成下單，Amazon 美國物流中心調撥理貨中",
        "official_url": "https://www.amazon.com/gp/css/order-history?ref_=fed_yo_default"
      }
    ]
  },
  {
    "group_title": "近期已配達 · momo 購物",
    "group_badge": "已送達",
    "group_badge_color": "bg-pink-100 text-pink-800 border-pink-200",
    "items": [
      {
        "id": "pkg-momo-charger",
        "name": "【u-ta】頂規 65W 全能快充伸縮線充電器 IC13",
        "subtitle": "內建 Type-C 伸縮線 1A1C · 白色 65W 摺疊充電頭",
        "platform": "momo 購物網",
        "order_id": "訂單 #26082621456511",
        "shipping_type": "momo 快速出貨 (宅配)",
        "eta": "已送達 (8/27 配達)",
        "eta_tag": "已簽收",
        "status_badge": "已順利送達",
        "status_color": "text-emerald-700 bg-emerald-50 border-emerald-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-pink-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"5\" y=\"7\" width=\"14\" height=\"14\" rx=\"3\" fill=\"currentColor\" fill-opacity=\"0.1\"/><path d=\"M9 7V3M15 7V3M12 11v3l2-1-2 4\"/></svg>",
        "icon_bg": "bg-pink-50 border-pink-200",
        "current_status": "包裹已由專人宅配送達簽收完畢！",
        "official_url": "https://www.momoshop.com.tw/order/orderList.momo"
      },
      {
        "id": "pkg-momo-camera",
        "name": "【TP-Link】4K 800萬 AI智慧人臉偵測 旋轉監視器",
        "subtitle": "Tapo C260 · 支援 512GB 記憶卡 居家安全監控",
        "platform": "momo 購物網",
        "order_id": "訂單 #26081921287203",
        "shipping_type": "momo 快速出貨 (宅配)",
        "eta": "已送達 (8/20 配達)",
        "eta_tag": "已簽收",
        "status_badge": "已順利送達",
        "status_color": "text-emerald-700 bg-emerald-50 border-emerald-200",
        "icon_svg": "<svg class=\"w-6 h-6 text-pink-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"10\" r=\"7\" fill=\"currentColor\" fill-opacity=\"0.1\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/><path d=\"M7 21h10M12 17v4\"/></svg>",
        "icon_bg": "bg-pink-50 border-pink-200",
        "current_status": "包裹已完成送達簽收！",
        "official_url": "https://www.momoshop.com.tw/order/orderList.momo"
      }
    ]
  }
];

let groups = [];

document.addEventListener('DOMContentLoaded', () => {
  loadSchedule();
});

function loadSchedule() {
  try {
    const local = localStorage.getItem('package_schedule_v5');
    if (local && JSON.parse(local).length > 0) {
      groups = JSON.parse(local);
    } else {
      groups = SCHEDULE_DATA;
      saveToStorage();
    }
  } catch (e) {
    groups = SCHEDULE_DATA;
  }
  updateHeaderStats();
  renderSchedule();
}

function updateHeaderStats() {
  const subtitle = document.getElementById('header-subtitle');
  if (!subtitle) return;
  let inTransit = 0;
  let delivered = 0;
  groups.forEach(g => {
    g.items.forEach(item => {
      if (item.status_badge.includes('已') || item.eta.includes('已送達') || item.eta.includes('已配達')) {
        delivered++;
      } else {
        inTransit++;
      }
    });
  });
  subtitle.textContent = `獨立包裹按到貨日期依序呈現 · ${inTransit} 件在途中 · ${delivered} 件已配達`;
}

function saveToStorage() {
  try {
    localStorage.setItem('package_schedule_v5', JSON.stringify(groups));
  } catch (e) {}
}

function renderSchedule() {
  const container = document.getElementById('schedule-container');
  if (!container) return;

  container.innerHTML = groups.map(group => `
    <section class="space-y-3">
      <!-- Date Header with Subtle Status Badge -->
      <div class="flex items-center justify-between pb-1">
        <h2 class="text-sm sm:text-base font-bold text-zinc-900 flex items-center gap-2">
          <i class="fa-regular fa-calendar-days text-zinc-400 text-xs"></i>
          <span>${group.group_title}</span>
        </h2>
        <span class="text-xs px-2.5 py-0.5 rounded-full font-medium border ${group.group_badge_color}">
          ${group.group_badge}
        </span>
      </div>

      <!-- Items in this date group -->
      <div class="space-y-3">
        ${group.items.map(item => `
          <div class="item-card p-4 sm:p-5">
            <div class="flex items-start gap-4">
              <!-- Crisp Vector Icon Badge -->
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex-shrink-0 flex items-center justify-center border shadow-xs ${item.icon_bg}">
                ${item.icon_svg}
              </div>

              <!-- Product & Delivery Details -->
              <div class="flex-1 min-w-0">
                <!-- Top Row: Platform & ETA Tag -->
                <div class="flex items-center justify-between gap-2 mb-1 flex-wrap">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="font-semibold text-zinc-800">${item.platform}</span>
                    <span class="text-zinc-300">•</span>
                    <span class="text-zinc-400 font-mono text-[11px]">${item.order_id}</span>
                  </div>
                  <!-- ETA Highlight -->
                  <span class="text-xs font-bold ${item.status_badge.includes('已') ? 'text-zinc-600 bg-zinc-100 border-zinc-200' : 'text-emerald-600 bg-emerald-50 border-emerald-100'} px-2 py-0.5 rounded-md border">
                    ${item.eta}
                  </span>
                </div>

                <!-- Product Name -->
                <h3 class="text-base font-bold text-zinc-900 leading-snug">
                  ${item.name}
                </h3>
                <p class="text-xs text-zinc-500 mt-0.5">${item.subtitle}</p>

                <!-- Current Real Status & Direct Link -->
                <div class="mt-3 pt-3 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div class="flex items-center gap-2 text-zinc-600">
                    <span class="px-2 py-0.5 rounded font-medium border text-[11px] ${item.status_color}">
                      ${item.status_badge}
                    </span>
                    <span class="text-zinc-600 text-[11px] truncate">${item.current_status}</span>
                  </div>

                  ${item.official_url ? `
                    <a href="${item.official_url}" target="_blank" rel="noopener noreferrer" class="font-semibold text-zinc-700 hover:text-emerald-600 inline-flex items-center gap-1 transition flex-shrink-0">
                      <span>查看訂單</span>
                      <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                  ` : ''}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `).join('');
}

function refreshData() {
  const icon = document.getElementById('refresh-icon');
  if (icon) icon.classList.add('fa-spin');
  // clear cache to force latest server state
  try {
    localStorage.removeItem('package_schedule_v5');
  } catch(e) {}
  loadSchedule();
  setTimeout(() => {
    if (icon) icon.classList.remove('fa-spin');
  }, 500);
}
