// Scheme 2: Chronological Journey Engine
const DEFAULT_PACKAGES = [
  {
    "id": "pkg-coupang",
    "name": "AHOYE 透氣可調護膝 2件組 (加強款)",
    "subtitle": "亞馬遜護膝到貨前先擋著用",
    "image": "images/coupang_knee.png",
    "platform": "酷澎 Coupang",
    "platform_color": "bg-sky-50 text-sky-700 border-sky-200",
    "order_id": "2026.9.7 訂購",
    "shipping_type": "🚀 火箭WOW 清晨達",
    "eta": "明天 (二) 清晨 7:00 前送達",
    "eta_highlight": true,
    "status_text": "酷澎備貨包裝中，夜間專車發出",
    "current_step": 2,
    "steps": [
      "已下單",
      "備貨打包",
      "清晨派送",
      "送達門口"
    ],
    "official_url": "https://mc.coupang.com/ssr/desktop/order/list"
  },
  {
    "id": "pkg-costco",
    "name": "EDIFIER W820NB Plus 降噪耳機 (海軍藍)",
    "subtitle": "耳機本體 (搭配蝦皮耳機包與耳罩套)",
    "image": "images/costco_edifier.png",
    "platform": "Costco 好市多",
    "platform_color": "bg-blue-50 text-blue-800 border-blue-200",
    "order_id": "訂單 #645076852",
    "shipping_type": "線上宅配 (黑貓/宅配通)",
    "eta": "預估 9 月 8 日 - 9 月 9 日",
    "eta_highlight": true,
    "status_text": "好市多倉儲開工揀貨處理中",
    "current_step": 2,
    "steps": [
      "已付款",
      "倉儲處理",
      "宅配配送",
      "已送達"
    ],
    "official_url": "https://www.costco.com.tw/my-account/orders"
  },
  {
    "id": "pkg-shopee-bag",
    "name": "SONY / 漫步者 頭戴式耳機硬殼收納包",
    "subtitle": "耳機防壓抗震收納盒 (無登山扣)",
    "image": "images/shopee_bag.png",
    "platform": "蝦皮購物",
    "platform_color": "bg-orange-50 text-orange-700 border-orange-200",
    "order_id": "訂單 #260906ARJSSG7P",
    "shipping_type": "⚡ 蝦皮隔日達",
    "eta": "預估 9 月 7 日 - 9 月 8 日到店",
    "eta_highlight": true,
    "status_text": "賣家備貨包裝中，即將交寄隔日達專線",
    "current_step": 2,
    "steps": [
      "已付款",
      "賣家寄件",
      "隔日達幹線",
      "門市待取"
    ],
    "official_url": "https://spx.tw/#/detail?tracking_number=260906ARJSSG7P"
  },
  {
    "id": "pkg-shopee-cover",
    "name": "漫步者 W820NB 耳機耳罩矽膠保護套",
    "subtitle": "【藏青色耳帽】防塵軟殼替換套",
    "image": "images/shopee_silicone.png",
    "platform": "蝦皮購物",
    "platform_color": "bg-orange-50 text-orange-700 border-orange-200",
    "order_id": "訂單 #260906ARM5QKBM",
    "shipping_type": "蝦皮店到店",
    "eta": "預估 9 月 9 日 - 9 月 10 日到店",
    "eta_highlight": false,
    "status_text": "賣家確認訂單備貨中",
    "current_step": 2,
    "steps": [
      "已付款",
      "賣家寄件",
      "店到店轉運",
      "門市待取"
    ],
    "official_url": "https://spx.tw/#/detail?tracking_number=260906ARM5QKBM"
  },
  {
    "id": "pkg-apple",
    "name": "Apple 13 吋 MacBook Air (天藍色客製版)",
    "subtitle": "教育優惠減免 -NT$3,200 | 送達五股鈊象電子",
    "image": "images/apple_macbook.png",
    "platform": "Apple 官方直營",
    "platform_color": "bg-gray-100 text-gray-800 border-gray-300",
    "order_id": "訂單 #W1529074157",
    "shipping_type": "原廠標準運送 (順豐速運直寄)",
    "eta": "送達 2026/09/17 - 2026/09/24",
    "eta_highlight": false,
    "status_text": "正在處理中 (原廠客製組裝生產)",
    "current_step": 2,
    "steps": [
      "下達訂單",
      "正在處理",
      "準備出貨",
      "航班送達"
    ],
    "official_url": "https://www.apple.com/tw/shop/order/list"
  },
  {
    "id": "pkg-amazon",
    "name": "Amazon 專業運動護膝 x 2 (Health Care)",
    "subtitle": "美國直寄 $409.66 | 收件人：Jiayong 新北",
    "image": "images/amazon_knee.png",
    "platform": "Amazon 美國",
    "platform_color": "bg-amber-50 text-amber-900 border-amber-200",
    "order_id": "訂單 #112-9464569-8250632",
    "shipping_type": "Amazon Global (國際航空直寄)",
    "eta": "送達 9 月 15 日 - 9 月 22 日 (預計 9/22 前)",
    "eta_highlight": false,
    "status_text": "已下單，Amazon 倉儲調撥打包中",
    "current_step": 2,
    "steps": [
      "已下單",
      "倉儲出庫",
      "國際航班清關",
      "已送達"
    ],
    "official_url": "https://www.amazon.com/gp/css/order-history?ref_=fed_yo_default"
  }
];

let packages = [];

document.addEventListener('DOMContentLoaded', () => {
  loadPackages();
});

function loadPackages() {
  try {
    const local = localStorage.getItem('package_journey_v1');
    if (local && JSON.parse(local).length > 0) {
      packages = JSON.parse(local);
    } else {
      packages = DEFAULT_PACKAGES;
      saveToStorage();
    }
  } catch (e) {
    packages = DEFAULT_PACKAGES;
  }
  renderJourney();
}

function saveToStorage() {
  try {
    localStorage.setItem('package_journey_v1', JSON.stringify(packages));
  } catch (e) {}
}

function renderJourney() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = packages.map((p, idx) => {
    const isFirst = idx === 0;

    return `
      <div class="journey-node pb-10">
        <!-- Node Dot (Green checked circle for first/active, neutral ring for upcoming) -->
        <div class="journey-dot ${isFirst ? 'active' : ''}">
          ${isFirst ? '<i class="fa-solid fa-check text-white text-[10px]"></i>' : ''}
        </div>

        <!-- Header: Arrival Timing Flag & Platform -->
        <div class="flex items-baseline gap-2.5 mb-2 flex-wrap">
          <span class="text-sm font-black tracking-tight ${
            p.eta_highlight ? 'text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200' : 'text-zinc-800 font-bold'
          }">
            ${p.eta}
          </span>
          <span class="text-xs text-zinc-400 font-medium">
            ${p.platform} · ${p.shipping_type || ''}
          </span>
          <span class="text-zinc-300">•</span>
          <span class="text-[11px] font-mono text-zinc-400">${p.order_id || ''}</span>
        </div>

        <!-- Content Row: Pure Transparent Cutout Photo + Story Details -->
        <div class="flex items-start gap-5 pt-1.5">
          <!-- 100% Transparent Cutout Product Photo (Clean, NO Box Frame) -->
          <div class="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center product-cutout">
            <img src="${p.image}" alt="${p.name}" class="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-md">
          </div>

          <!-- Story Details (Human, zero AI redundancy) -->
          <div class="flex-1 min-w-0">
            <h3 class="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
              ${p.name}
            </h3>
            <p class="text-xs text-zinc-500 mt-1">${p.subtitle || ''}</p>

            <div class="mt-2 text-xs text-zinc-600 flex items-center gap-1.5 font-medium">
              <span class="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
              <span>當前進度：<strong class="text-zinc-800">${p.status_text}</strong></span>
            </div>

            <div class="mt-2.5 flex items-center gap-3">
              ${p.official_url ? `
                <a href="${p.official_url}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-zinc-800 hover:text-emerald-600 underline underline-offset-4 transition">
                  查閱官方即時訂單進度 →
                </a>
              ` : ''}
              <button onclick="removePackage('${p.id}')" class="text-xs text-zinc-300 hover:text-rose-500 transition" title="取消追蹤">
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function refreshData() {
  const icon = document.getElementById('refresh-icon');
  if (icon) icon.classList.add('fa-spin');
  loadPackages();
  setTimeout(() => {
    if (icon) icon.classList.remove('fa-spin');
  }, 500);
}

function removePackage(id) {
  if (!confirm('確定要移除此筆包裹紀錄嗎？')) return;
  packages = packages.filter(p => p.id !== id);
  saveToStorage();
  renderJourney();
}

function openAddModal() {
  document.getElementById('add-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('add-modal').classList.add('hidden');
}

function addNewPackage(e) {
  e.preventDefault();
  const name = document.getElementById('new-name').value.trim();
  const platform = document.getElementById('new-platform').value.trim() || '網購包裹';
  const eta = document.getElementById('new-eta').value.trim();
  const status_text = document.getElementById('new-status').value.trim() || '已建立追蹤，等待出貨配送';

  const newP = {
    id: 'pkg-' + Date.now().toString(36),
    name,
    subtitle: '',
    image: 'images/shopee_bag.png',
    platform,
    order_id: '',
    shipping_type: '標準運送',
    eta,
    eta_highlight: false,
    status_text,
    official_url: ''
  };

  packages.push(newP);
  saveToStorage();
  renderJourney();
  closeModal();
}
