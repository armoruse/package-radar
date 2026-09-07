// Clean, Pure & Minimal Package Tracker
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
    const local = localStorage.getItem('package_tracker_v3');
    if (local && JSON.parse(local).length > 0) {
      packages = JSON.parse(local);
    } else {
      packages = DEFAULT_PACKAGES;
      saveToStorage();
    }
  } catch (e) {
    packages = DEFAULT_PACKAGES;
  }
  renderPackages();
}

function saveToStorage() {
  try {
    localStorage.setItem('package_tracker_v3', JSON.stringify(packages));
  } catch (e) {}
}

function renderPackages() {
  const container = document.getElementById('package-list');
  const countSpan = document.getElementById('header-subtitle');
  if (countSpan) {
    countSpan.innerText = `共 ${packages.length} 件包裹運送中`;
  }

  if (!container) return;

  container.innerHTML = packages.map(pkg => {
    const steps = pkg.steps || ['已下單', '備貨中', '運送中', '已送達'];
    const current = pkg.current_step || 2;

    const stepperHtml = steps.map((s, idx) => {
      const stepNum = idx + 1;
      const isDone = stepNum < current;
      const isCurrent = stepNum === current;
      const lineClass = isDone ? 'done' : (isCurrent ? 'current' : '');

      return `
        <div class="step-line ${lineClass} flex flex-col items-center">
          <div class="step-dot"></div>
          <span class="text-[11px] mt-1.5 ${isCurrent ? 'text-blue-600 font-semibold' : isDone ? 'text-gray-700' : 'text-gray-400'}">${s}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="clean-card p-5 sm:p-6">
        <!-- Top Row: Thumbnail + Details + Action -->
        <div class="flex items-start gap-4">
          <!-- Standardized Product Photo (88x88px) -->
          <div class="w-20 h-20 sm:w-22 sm:h-22 rounded-xl bg-white border border-gray-100 p-1 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <img src="${pkg.image || 'images/shopee_bag.png'}" alt="${pkg.name}" class="w-full h-full object-contain" onerror="this.src='https://cdn-icons-png.flaticon.com/512/684/684908.png'">
          </div>

          <!-- Middle Info -->
          <div class="flex-1 min-w-0">
            <!-- Platform badge & order id -->
            <div class="flex items-center gap-2 text-xs text-gray-500 mb-1 flex-wrap">
              <span class="px-2 py-0.5 rounded-md border font-medium ${pkg.platform_color || 'bg-gray-50 text-gray-700 border-gray-200'}">
                ${pkg.platform}
              </span>
              <span>${pkg.shipping_type || ''}</span>
              <span class="text-gray-400">•</span>
              <span class="font-mono text-gray-500">${pkg.order_id}</span>
            </div>

            <!-- Product Title -->
            <h2 class="text-base sm:text-lg font-bold text-gray-900 truncate">
              ${pkg.name}
            </h2>

            <!-- Delivery ETA -->
            <div class="mt-1.5 flex items-baseline gap-1.5 flex-wrap">
              <span class="text-xs text-gray-500">預計送達：</span>
              <span class="text-sm sm:text-base font-bold ${pkg.eta_highlight ? 'text-emerald-600' : 'text-blue-600'}">
                ${pkg.eta}
              </span>
            </div>

            <!-- Concise Current Status Note -->
            <p class="text-xs text-gray-500 mt-1">
              ${pkg.status_text}
            </p>
          </div>

          <!-- Right Action: Clean Direct Link -->
          <div class="flex flex-col items-end space-y-2 flex-shrink-0">
            ${pkg.official_url ? `
              <a href="${pkg.official_url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 transition">
                訂單詳情 ↗
              </a>
            ` : ''}
            <button onclick="advance('${pkg.id}')" title="更新進度" class="text-xs text-gray-400 hover:text-blue-600 px-2 py-1">
              推進一步 ›
            </button>
          </div>
        </div>

        <!-- Bottom: Clean 4-step Progress Stepper -->
        <div class="mt-5 pt-4 border-t border-gray-100">
          <div class="flex items-center justify-between px-2">
            ${stepperHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function advance(id) {
  const p = packages.find(x => x.id === id);
  if (!p) return;
  const max = (p.steps || []).length || 4;
  if (p.current_step < max) {
    p.current_step += 1;
    saveToStorage();
    renderPackages();
  } else {
    alert('此包裹已順利送達！');
  }
}

function refreshAll() {
  loadPackages();
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
  const order_id = document.getElementById('new-tracking').value.trim();
  const eta = document.getElementById('new-eta').value.trim() || '運送中';

  const newP = {
    id: 'pkg-' + Date.now().toString(36),
    name,
    subtitle: '',
    image: 'images/shopee_bag.png',
    platform,
    platform_color: 'bg-gray-50 text-gray-700 border-gray-200',
    order_id,
    shipping_type: '標準運送',
    eta,
    eta_highlight: false,
    status_text: '已建立追蹤，等待出貨配送',
    current_step: 1,
    steps: ['已下單', '備貨中', '運送中', '已送達'],
    official_url: ''
  };

  packages.unshift(newP);
  saveToStorage();
  renderPackages();
  closeModal();
}
