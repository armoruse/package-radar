// Clean Icon-based Chronological Journey
const DEFAULT_PACKAGES = [
  {
    "id": "pkg-coupang",
    "name": "AHOYE 透氣可調護膝 2件組 (加強款)",
    "subtitle": "明天清晨醒來門口簽收 · 先擋著用",
    "icon_type": "knee_brace",
    "icon_color": "text-emerald-600 bg-emerald-50 border-emerald-200",
    "icon_svg": "<svg class=\"w-8 h-8 text-emerald-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <path d=\"M7 4c0 3 2 5 2 8s-2 5-2 8h10c0-3-2-5-2-8s2-5 2-8H7z\"/>\n      <circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"currentColor\" fill-opacity=\"0.2\"/>\n      <path d=\"M9 7h6M9 17h6\"/>\n    </svg>",
    "platform": "酷澎 Coupang",
    "order_id": "2026.9.7 訂購",
    "shipping_type": "🚀 火箭WOW 清晨達",
    "eta": "明天 (二) 清晨 07:00 前送達",
    "eta_highlight": true,
    "status_text": "酷澎物流中心急速備貨中，夜間專車發出",
    "official_url": "https://mc.coupang.com/ssr/desktop/order/list"
  },
  {
    "id": "pkg-shopee-bag",
    "name": "SONY / 漫步者 頭戴式耳機硬殼收納包",
    "subtitle": "耳機防壓抗震收納盒 (無登山扣)",
    "icon_type": "headphone_case",
    "icon_color": "text-amber-600 bg-amber-50 border-amber-200",
    "icon_svg": "<svg class=\"w-8 h-8 text-amber-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <rect x=\"3\" y=\"5\" width=\"18\" height=\"15\" rx=\"5\" fill=\"currentColor\" fill-opacity=\"0.1\"/>\n      <path d=\"M8 5V3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/>\n      <line x1=\"3\" y1=\"12\" x2=\"21\" y2=\"12\" stroke-dasharray=\"2 2\"/>\n      <circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\"/>\n    </svg>",
    "platform": "蝦皮購物",
    "order_id": "訂單 #260906ARJSSG7P",
    "shipping_type": "⚡ 蝦皮隔日達",
    "eta": "預估 9 月 7 日 - 9 月 8 日到店",
    "eta_highlight": true,
    "status_text": "賣家備貨包裝中，準備交寄隔日達專線",
    "official_url": "https://spx.tw/#/detail?tracking_number=260906ARJSSG7P"
  },
  {
    "id": "pkg-costco",
    "name": "EDIFIER W820NB Plus 降噪耳機 (海軍藍)",
    "subtitle": "好市多線上宅配 · 耳機本體 $1,999",
    "icon_type": "headphones",
    "icon_color": "text-blue-700 bg-blue-50 border-blue-200",
    "icon_svg": "<svg class=\"w-8 h-8 text-blue-700\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <path d=\"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3\"/>\n      <path d=\"M8 12V9a4 4 0 0 1 8 0v3\" stroke-width=\"1.2\"/>\n    </svg>",
    "platform": "Costco 好市多",
    "order_id": "訂單 #645076852",
    "shipping_type": "線上宅配 (黑貓/宅配通)",
    "eta": "預估 9 月 8 日 - 9 月 9 日送達",
    "eta_highlight": false,
    "status_text": "好市多倉儲開工揀貨處理中",
    "official_url": "https://www.costco.com.tw/my-account/orders"
  },
  {
    "id": "pkg-shopee-cover",
    "name": "漫步者 W820NB 耳罩矽膠保護套 (藏青色)",
    "subtitle": "【藏青色耳帽】防塵軟殼替換配件",
    "icon_type": "silicone_earpads",
    "icon_color": "text-orange-600 bg-orange-50 border-orange-200",
    "icon_svg": "<svg class=\"w-8 h-8 text-orange-600\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <circle cx=\"8\" cy=\"12\" r=\"5\" fill=\"currentColor\" fill-opacity=\"0.1\"/>\n      <circle cx=\"8\" cy=\"12\" r=\"2\"/>\n      <circle cx=\"16\" cy=\"12\" r=\"5\" fill=\"currentColor\" fill-opacity=\"0.1\"/>\n      <circle cx=\"16\" cy=\"12\" r=\"2\"/>\n    </svg>",
    "platform": "蝦皮購物",
    "order_id": "訂單 #260906ARM5QKBM",
    "shipping_type": "蝦皮店到店",
    "eta": "預估 9 月 9 日 - 9 月 10 日到店",
    "eta_highlight": false,
    "status_text": "賣家確認訂單備貨中",
    "official_url": "https://spx.tw/#/detail?tracking_number=260906ARM5QKBM"
  },
  {
    "id": "pkg-apple",
    "name": "Apple 13 吋 MacBook Air (天藍色客製版)",
    "subtitle": "送達五股鈊象電子 · 教育優惠減免 -NT$3,200",
    "icon_type": "laptop",
    "icon_color": "text-sky-700 bg-sky-50 border-sky-200",
    "icon_svg": "<svg class=\"w-8 h-8 text-sky-700\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <rect x=\"4\" y=\"4\" width=\"16\" height=\"11\" rx=\"2\" fill=\"currentColor\" fill-opacity=\"0.1\"/>\n      <path d=\"M2 18h20a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1z\"/>\n      <circle cx=\"12\" cy=\"9.5\" r=\"1.5\" fill=\"currentColor\"/>\n    </svg>",
    "platform": "Apple 官方直營",
    "order_id": "訂單 #W1529074157",
    "shipping_type": "原廠標準運送 (順豐直寄)",
    "eta": "送達 2026/09/17 - 2026/09/24",
    "eta_highlight": false,
    "status_text": "正在處理中 (Apple 原廠客製化配裝組裝)",
    "official_url": "https://www.apple.com/tw/shop/order/list"
  },
  {
    "id": "pkg-amazon",
    "name": "Amazon 專業運動護膝 x 2 (Health Care)",
    "subtitle": "美國直寄 $409.66 · 收件人：Jiayong 新北",
    "icon_type": "pro_knee_brace",
    "icon_color": "text-indigo-700 bg-indigo-50 border-indigo-200",
    "icon_svg": "<svg class=\"w-8 h-8 text-indigo-700\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n      <path d=\"M6 3c0 4 2 6 2 9s-2 5-2 9h12c0-4-2-5-2-9s2-5 2-9H6z\"/>\n      <circle cx=\"12\" cy=\"12\" r=\"3\" stroke-width=\"2\"/>\n      <path d=\"M8 8l8 8M16 8l-8 8\" stroke-width=\"1\" stroke-dasharray=\"1 2\"/>\n    </svg>",
    "platform": "Amazon 美國",
    "order_id": "訂單 #112-9464569-8250632",
    "shipping_type": "Amazon Global (國際航空直寄)",
    "eta": "送達 9 月 15 日 - 9 月 22 日 (預計 9/22 前)",
    "eta_highlight": false,
    "status_text": "已下單，Amazon 倉庫調撥打包中",
    "official_url": "https://www.amazon.com/gp/css/order-history?ref_=fed_yo_default"
  }
];

let packages = [];

document.addEventListener('DOMContentLoaded', () => {
  loadPackages();
});

function loadPackages() {
  try {
    const local = localStorage.getItem('package_journey_icon_v2');
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
    localStorage.setItem('package_journey_icon_v2', JSON.stringify(packages));
  } catch (e) {}
}

function renderJourney() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = packages.map((p, idx) => {
    const isFirst = idx === 0;

    return `
      <div class="journey-node pb-10">
        <!-- Node Dot on Timeline -->
        <div class="journey-dot ${isFirst ? 'active' : ''}">
          ${isFirst ? '<i class="fa-solid fa-check text-white text-[10px]"></i>' : ''}
        </div>

        <!-- Timing Header Flag -->
        <div class="flex items-baseline gap-2.5 mb-2.5 flex-wrap">
          <span class="text-sm font-black tracking-tight ${
            p.eta_highlight ? 'text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200' : 'text-zinc-800 font-bold'
          }">
            ${p.eta}
          </span>
          <span class="text-xs text-zinc-500 font-medium">
            ${p.platform} · ${p.shipping_type || ''}
          </span>
          <span class="text-zinc-300">•</span>
          <span class="text-[11px] font-mono text-zinc-400">${p.order_id || ''}</span>
        </div>

        <!-- Content Row: Vector Icon Container + Story Details -->
        <div class="flex items-start gap-4 pt-1">
          <!-- Sleek Clean Vector Icon Badge (No blurry cutouts!) -->
          <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex-shrink-0 flex items-center justify-center border shadow-xs transition-transform hover:scale-105 ${p.icon_color || 'text-zinc-700 bg-zinc-50 border-zinc-200'}">
            ${p.icon_svg}
          </div>

          <!-- Product Story Info -->
          <div class="flex-1 min-w-0 pt-0.5">
            <h3 class="text-base sm:text-lg font-bold text-zinc-900 leading-snug">
              ${p.name}
            </h3>
            <p class="text-xs text-zinc-500 mt-1 leading-relaxed">${p.subtitle || ''}</p>

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
    icon_color: 'text-zinc-700 bg-zinc-50 border-zinc-200',
    icon_svg: `<svg class="w-8 h-8 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
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
