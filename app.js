const PACKAGES = [
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

let currentTheme = 1;

document.addEventListener('DOMContentLoaded', () => {
  // Restore user chosen theme if stored
  const saved = localStorage.getItem('user_chosen_theme');
  if (saved) {
    currentTheme = parseInt(saved, 10);
  }
  applyTheme(currentTheme);
});

function switchTheme(num) {
  currentTheme = num;
  localStorage.setItem('user_chosen_theme', num);
  applyTheme(num);
}

function applyTheme(num) {
  const body = document.getElementById('app-body');
  const container = document.getElementById('view-container');

  // Update navbar buttons
  document.querySelectorAll('.theme-btn').forEach((btn, i) => {
    btn.classList.toggle('active-theme', i + 1 === num);
  });

  // Reset body classes
  body.className = 'min-h-screen transition-colors duration-300 antialiased ';

  if (num === 1) {
    body.classList.add('theme-ios-body');
    renderTheme1(container);
  } else if (num === 2) {
    body.classList.add('theme-timeline-body');
    renderTheme2(container);
  } else if (num === 3) {
    body.classList.add('theme-lookbook-body');
    renderTheme3(container);
  }
}

/* =========================================================================
   RENDERER 1: iOS Dynamic Island / Live Activity (大焦點卡 + 膠囊流)
   ========================================================================= */
function renderTheme1(container) {
  const heroPkg = PACKAGES[0]; // 酷澎護膝 (明天清晨最早到！)
  const otherPkgs = PACKAGES.slice(1);

  container.innerHTML = `
    <div class="space-y-6">
      <!-- Title -->
      <div class="flex items-center justify-between pb-2 border-b border-white/10">
        <div>
          <h2 class="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <i class="fa-brands fa-apple text-lg"></i> 即時動態 (Live Activities)
          </h2>
          <p class="text-xs text-slate-400 mt-0.5">依照送達迫近感排程 · 6 件包裹運送中</p>
        </div>
        <span class="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          即時監控中
        </span>
      </div>

      <!-- HERO LIVE ACTIVITY (最迫近的包裹：酷澎護膝) -->
      <div class="ios-hero-card p-6 relative overflow-hidden">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <!-- Standalone Cutout Product (Transparent, No Box!) -->
          <div class="w-32 h-32 flex-shrink-0 flex items-center justify-center relative">
            <div class="absolute inset-0 rounded-full bg-emerald-500/10 blur-xl"></div>
            <img src="${heroPkg.image}" alt="${heroPkg.name}" class="w-28 h-28 object-contain relative z-10 filter drop-shadow-2xl">
          </div>

          <!-- Hero Info -->
          <div class="flex-1 text-center md:text-left">
            <div class="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <span class="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30">
                ${heroPkg.shipping_type}
              </span>
              <span class="text-xs text-slate-400 font-mono">${heroPkg.order_id}</span>
            </div>
            <h3 class="text-xl font-bold text-white tracking-wide">${heroPkg.name}</h3>
            <p class="text-xs text-slate-300 mt-1">${heroPkg.subtitle} · ${heroPkg.status_text}</p>

            <!-- Huge Arrival ETA Countdown -->
            <div class="mt-4 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
              <div>
                <span class="text-[11px] uppercase tracking-wider text-slate-400 block">預計送達</span>
                <span class="text-lg sm:text-2xl font-black text-emerald-400 tracking-tight">${heroPkg.eta}</span>
              </div>
              <a href="${heroPkg.official_url}" target="_blank" class="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-slate-200 transition flex items-center gap-1.5 shadow-md">
                查看訂單 ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Subtitle for upcoming -->
      <div class="pt-2">
        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">後續抵達包裹 (已依抵達順序排列)</h4>
        <div class="space-y-3">
          ${otherPkgs.map(p => `
            <div class="ios-capsule-card p-4 sm:p-5 flex items-center gap-4">
              <!-- Transparent Cutout Image (80x80) -->
              <div class="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
                <img src="${p.image}" alt="${p.name}" class="w-16 h-16 object-contain filter drop-shadow-md">
              </div>

              <!-- Content -->
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 text-xs mb-0.5">
                  <span class="font-medium text-slate-300">${p.platform}</span>
                  <span class="text-slate-500">•</span>
                  <span class="text-slate-400 font-mono text-[11px] truncate">${p.order_id}</span>
                </div>
                <h4 class="text-sm sm:text-base font-bold text-white truncate">${p.name}</h4>
                <p class="text-xs text-slate-400 mt-0.5 truncate">${p.status_text}</p>
              </div>

              <!-- ETA & Link -->
              <div class="text-right flex-shrink-0">
                <span class="text-xs sm:text-sm font-bold ${p.eta_highlight ? 'text-emerald-400' : 'text-sky-400'} block">
                  ${p.eta}
                </span>
                <a href="${p.official_url}" target="_blank" class="text-xs text-slate-400 hover:text-white mt-1 inline-block">
                  詳情 ↗
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/* =========================================================================
   RENDERER 2: Chronological Journey Timeline (零方塊、收禮旅行路線)
   ========================================================================= */
function renderTheme2(container) {
  container.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-6">
      <!-- Title -->
      <div class="pb-4 border-b border-zinc-200">
        <span class="text-xs uppercase tracking-widest text-emerald-600 font-bold font-mono">CHRONOLOGICAL JOURNEY</span>
        <h2 class="text-2xl font-bold text-zinc-900 mt-1">包裹抵達時間軸</h2>
        <p class="text-sm text-zinc-500">沒有方格子，純粹按照物品走進你生活的時間順序展開。</p>
      </div>

      <!-- Continuous Timeline Stream -->
      <div class="relative pt-2">
        ${PACKAGES.map((p, idx) => `
          <div class="journey-node pb-10">
            <!-- Node Dot -->
            <div class="journey-dot ${idx === 0 ? 'active' : ''}">
              ${idx === 0 ? '<i class="fa-solid fa-check text-white text-[10px]"></i>' : ''}
            </div>

            <!-- Header Date Flag -->
            <div class="flex items-baseline gap-2 mb-2">
              <span class="text-sm font-black tracking-tight ${p.eta_highlight ? 'text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200' : 'text-zinc-800'}">
                ${p.eta}
              </span>
              <span class="text-xs text-zinc-400 font-medium">${p.platform} · ${p.shipping_type}</span>
            </div>

            <!-- Content Area (Clean Floating, NO Rigid Boxes) -->
            <div class="flex items-start gap-5 pt-1">
              <!-- Pure Transparent Cutout Photo (No Frame) -->
              <div class="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center">
                <img src="${p.image}" alt="${p.name}" class="w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-md">
              </div>

              <!-- Story Details -->
              <div class="flex-1 min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-zinc-900 leading-snug">${p.name}</h3>
                <p class="text-xs text-zinc-500 mt-1">${p.subtitle}</p>
                <div class="mt-2 text-xs text-zinc-600 flex items-center gap-1.5 font-medium">
                  <span class="w-1.5 h-1.5 rounded-full bg-zinc-400"></span>
                  <span>當前動態：<strong>${p.status_text}</strong></span>
                </div>
                <div class="mt-2">
                  <a href="${p.official_url}" target="_blank" class="text-xs font-semibold text-zinc-800 hover:text-emerald-600 underline underline-offset-4">
                    查閱官方即時訂單進度 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* =========================================================================
   RENDERER 3: Editorial Minimal Lookbook (日系無印 / 蔦屋生活誌風)
   ========================================================================= */
function renderTheme3(container) {
  container.innerHTML = `
    <div class="max-w-3xl mx-auto space-y-8 font-serif">
      <!-- Title -->
      <div class="text-center pb-8 border-b border-gray-100">
        <span class="text-xs uppercase tracking-widest text-gray-400 font-sans">Autumn 2026 Collection</span>
        <h2 class="text-3xl sm:text-4xl font-light text-gray-900 tracking-wide mt-2">私物到着記錄</h2>
        <p class="text-xs text-gray-400 font-sans mt-2">靜候六件生活良品送達 · 漫步五股生活誌</p>
      </div>

      <!-- Minimal Rows (Zero borders, generous breathing space) -->
      <div class="divide-y divide-gray-100 font-sans">
        ${PACKAGES.map((p, idx) => `
          <div class="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 lookbook-row">
            <!-- Large Pure Cutout Image (28x28 = 112px, Transparent, Breathing Room) -->
            <div class="w-28 h-28 flex-shrink-0 flex items-center justify-center">
              <img src="${p.image}" alt="${p.name}" class="w-24 h-24 object-contain filter drop-shadow-sm">
            </div>

            <!-- Elegant Typography Description -->
            <div class="flex-1 text-center sm:text-left space-y-1">
              <div class="text-xs text-gray-400 uppercase tracking-wider font-mono">
                No. 0${idx + 1} · ${p.platform}
              </div>
              <h3 class="text-lg font-medium text-gray-900 tracking-tight font-serif">
                ${p.name}
              </h3>
              <p class="text-xs text-gray-500 font-sans">${p.subtitle}</p>
              <p class="text-xs text-gray-400 font-sans">${p.status_text}</p>
            </div>

            <!-- Arrival Date Indicator -->
            <div class="text-center sm:text-right flex-shrink-0 space-y-1">
              <span class="text-xs text-gray-400 block font-mono">ESTIMATED ARRIVAL</span>
              <span class="text-base font-semibold text-gray-900 block font-serif">
                ${p.eta}
              </span>
              <a href="${p.official_url}" target="_blank" class="text-xs text-gray-400 hover:text-black underline underline-offset-4">
                官網追蹤
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
