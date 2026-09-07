// Cloudflare Pages & Local Edge Compatible
const DEFAULT_PACKAGES = [
  {
    "id": "pkg-amazon-healthcare",
    "name": "Amazon 專業運動護膝 x 2 (2 Health Care items)",
    "category": "運動保健",
    "carrier": "ecms",
    "carrier_name": "Amazon Global / ECMS 易客滿",
    "tracking_number": "訂單號：112-9464569-8250632",
    "status_code": "in_transit",
    "status_text": "Amazon 備貨包裝中，即將出庫",
    "current_step": 2,
    "steps": [
      {
        "title": "Amazon 下單",
        "desc": "9/6 11:54 完成訂購 ($409.66)",
        "time": "2026-09-06 11:54",
        "completed": true
      },
      {
        "title": "倉庫備貨",
        "desc": "Amazon 美國倉理貨打包中",
        "time": "進行中",
        "completed": true
      },
      {
        "title": "國際航空班機",
        "desc": "安排國際快遞航班直飛台灣",
        "time": "預估 9/10-9/14",
        "completed": false
      },
      {
        "title": "海關清關查驗",
        "desc": "抵達桃園海關，EZ WAY 委任確認",
        "time": "預估 9/15-9/18",
        "completed": false
      },
      {
        "title": "送達新北開箱",
        "desc": "投遞新北市收件地址",
        "time": "官方預估 9/22 週二前",
        "completed": false
      }
    ],
    "estimated_delivery": "9 月 15 日 - 9 月 22 日 (預估 9/22 送達)",
    "location": "Amazon 美國/海外倉儲中心",
    "note": "金額 $409.66 | 收件人：Jiayong (新北市) | 出貨後請留意 EZ WAY 委任通知",
    "official_url": "https://www.amazon.com/gp/css/order-history?ref_=fed_yo_default",
    "updated_at": "2026-09-07 12:00"
  },
  {
    "id": "pkg-shopee-headphone-case",
    "name": "蝦皮 ⚡隔日達 SONY 頭戴式耳機收納包 (耳機盒)",
    "category": "3C 周邊",
    "carrier": "shopee_spx",
    "carrier_name": "蝦皮店到店 (⚡隔日達專線)",
    "tracking_number": "訂單 #260906ARJSSG7P",
    "status_code": "in_transit",
    "status_text": "賣家備貨包裝中 (⚡隔日達火速出貨)",
    "current_step": 2,
    "steps": [
      {
        "title": "買家付款",
        "desc": "9/6 12:59 完成付款確認 ($216)",
        "time": "2026-09-06 12:59",
        "completed": true
      },
      {
        "title": "賣家出貨",
        "desc": "賣家 f53cs0i8zt 收到訂單，打包交寄",
        "time": "進行中",
        "completed": true
      },
      {
        "title": "理貨專車",
        "desc": "蝦皮店到店隔日達專車急速轉運",
        "time": "預估 9/07 抵達中心",
        "completed": false
      },
      {
        "title": "門市到店",
        "desc": "抵達取件門市，發送取件通知",
        "time": "⚡預估 9/07-9/08",
        "completed": false
      },
      {
        "title": "完成取貨",
        "desc": "出示取件條碼或報手機末三碼",
        "time": "7天內取件",
        "completed": false
      }
    ],
    "estimated_delivery": "⚡ 隔日達 (預估 9/7 ~ 9/8 送達門市)",
    "location": "賣家備貨打包中",
    "note": "商品：頭戴式耳機盒 (無登山扣) | 隔日達專線，寄出後次日通常即可到店取件",
    "official_url": "https://spx.tw/#/detail?tracking_number=260906ARJSSG7P",
    "updated_at": "2026-09-07 12:15"
  },
  {
    "id": "pkg-macbook",
    "name": "Apple 官方訂單 MacBook Pro (自訂配置)",
    "category": "3C 旗艦",
    "carrier": "sf_express",
    "carrier_name": "順豐速運 / 黑貓 (Apple 直營出貨)",
    "tracking_number": "請填入 Apple 訂單號 (如 W10...)",
    "status_code": "in_transit",
    "status_text": "組裝廠包裝完成，等待航班直飛台灣",
    "current_step": 2,
    "steps": [
      {
        "title": "Apple 訂購確認",
        "desc": "訂單確認與客製化組裝",
        "time": "進行中",
        "completed": true
      },
      {
        "title": "工廠出庫",
        "desc": "產線完工，移交順豐/DHL國際快遞",
        "time": "已移交",
        "completed": true
      },
      {
        "title": "國際直飛",
        "desc": "安排航班運抵台灣桃園機場",
        "time": "運送中",
        "completed": false
      },
      {
        "title": "清關派送",
        "desc": "專車清關，司機出車派送",
        "time": "待抵達",
        "completed": false
      },
      {
        "title": "本人簽收",
        "desc": "高單價商品簽收開箱",
        "time": "待簽收",
        "completed": false
      }
    ],
    "estimated_delivery": "依 Apple 官網預估日期為準",
    "location": "國際快遞轉運站",
    "note": "Apple 通常出貨時會寄送提單號，點卡片「✏️ 筆」即可替換為正式單號",
    "official_url": "https://www.apple.com/tw/shop/order/list",
    "updated_at": "2026-09-07 12:00"
  },
  {
    "id": "pkg-coupang",
    "name": "酷澎火箭速配 (日常用品/零食)",
    "category": "生活百貨",
    "carrier": "coupang",
    "carrier_name": "Coupang 酷澎自營車隊",
    "tracking_number": "酷澎 App 訂單專屬配送",
    "status_code": "out_for_delivery",
    "status_text": "酷澎專車出車派送中 (預計今日送達)",
    "current_step": 4,
    "steps": [
      {
        "title": "酷澎下單",
        "desc": "系統確認訂單",
        "time": "已成立",
        "completed": true
      },
      {
        "title": "物流中心分揀",
        "desc": "台灣物流中心火速分揀打包",
        "time": "已完成",
        "completed": true
      },
      {
        "title": "發往區域站所",
        "desc": "清晨幹線大貨車轉送站所",
        "time": "已送達",
        "completed": true
      },
      {
        "title": "專車配送",
        "desc": "酷澎專員已裝車，出車派送中",
        "time": "派送中",
        "completed": true
      },
      {
        "title": "門前送達",
        "desc": "送達指定地點拍照完成",
        "time": "預估今日 19:00 前",
        "completed": false
      }
    ],
    "estimated_delivery": "今日 19:00 前",
    "location": "專員配送途中",
    "note": "酷澎為自營封閉物流，送達時會自動傳送放置照片到 App",
    "official_url": "https://mc.coupang.com/ssr/desktop/order/list",
    "updated_at": "2026-09-07 12:00"
  },
  {
    "id": "pkg-shopee-silicone-case",
    "name": "蝦皮 漫步者 W820NB 耳機罩矽膠保護套 (藏青色耳帽)",
    "category": "3C 配件",
    "carrier": "shopee_spx",
    "carrier_name": "蝦皮店到店 (標準物流)",
    "tracking_number": "訂單 #260906ARM5QKBM",
    "status_code": "in_transit",
    "status_text": "賣家確認訂單備貨中",
    "current_step": 2,
    "steps": [
      {
        "title": "買家付款",
        "desc": "9/6 13:00 完成付款確認 ($149)",
        "time": "2026-09-06 13:00",
        "completed": true
      },
      {
        "title": "賣家出貨",
        "desc": "賣家 axaxax0616 備貨打包準備交寄",
        "time": "進行中",
        "completed": true
      },
      {
        "title": "物流幹線",
        "desc": "大園理貨中心分揀轉運中",
        "time": "預估 9/08",
        "completed": false
      },
      {
        "title": "到達門市",
        "desc": "抵達取件門市，發送簡訊通知",
        "time": "預估 9/09-9/10",
        "completed": false
      },
      {
        "title": "取件簽收",
        "desc": "報手機末三碼或出示條碼取貨",
        "time": "7天內取件",
        "completed": false
      }
    ],
    "estimated_delivery": "預估 9 月 9 日 - 9 月 10 日送達門市",
    "location": "賣家備貨打包中",
    "note": "商品：【藏青色耳帽】保護套，漫步者 W820NB | 賣家 axaxax0616 出貨中",
    "official_url": "https://spx.tw/#/detail?tracking_number=260906ARM5QKBM",
    "updated_at": "2026-09-07 12:15"
  }
];

let allPackages = [];
let currentFilter = 'all';
let searchQuery = '';

const CARRIER_PATTERNS = {
  sf_express: /^SF|^1[0-9]{11,14}$/i,
  ecms: /^APX|^ECMS/i,
  shopee_spx: /^TW[0-9A-Z]+S$|^SPX/i,
  coupang: /^CPG|^ROCKET/i,
  t_cat: /^[689][0-9]{9,11}$/,
  dhl: /^[0-9]{10}$/
};

const CARRIERS_INFO = {
  sf_express: { name: '順豐速運 / 官網出貨', url: 'https://www.sf-express.com/tw/tc/dynamic_function/waybill/#search/bill-number/' },
  t_cat: { name: '黑貓宅急便', url: 'https://www.t-cat.com.tw/Inquire/TraceDetail.aspx?BillID=' },
  dhl: { name: 'DHL Express', url: 'https://www.dhl.com/tw-zh/home/tracking/tracking-express.html?submit=1&tracking-id=' },
  ecms: { name: 'ECMS 易客滿 (Amazon)', url: 'https://track.ecmsglobal.com/express/track/index.html?tracking_number=' },
  shopee_spx: { name: '蝦皮店到店 (SPX)', url: 'https://spx.tw/#/detail?tracking_number=' },
  coupang: { name: '酷澎自營火箭速配', url: 'https://mc.coupang.com/ssr/desktop/order/list' },
  other: { name: '17TRACK 綜合查詢', url: 'https://t.17track.net/zh-tw#nums=' }
};

document.addEventListener('DOMContentLoaded', () => {
  loadPackages();
  checkNotificationPermission();

  // Auto tick every 60s
  setInterval(() => {
    renderPackages();
  }, 60000);
});

function loadPackages() {
  try {
    const local = localStorage.getItem('package_radar_packages');
    if (local) {
      allPackages = JSON.parse(local);
    } else {
      allPackages = DEFAULT_PACKAGES;
      saveToStorage();
    }
  } catch (e) {
    allPackages = DEFAULT_PACKAGES;
  }
  updateStats();
  renderPackages();
}

function saveToStorage() {
  try {
    localStorage.setItem('package_radar_packages', JSON.stringify(allPackages));
  } catch (e) {
    console.error('Save to localStorage failed:', e);
  }
}

function updateStats() {
  const total = allPackages.length;
  const in_transit = allPackages.filter(p => ['in_transit', 'customs'].includes(p.status_code)).length;
  const arriving = allPackages.filter(p => ['out_for_delivery', 'ready_for_pickup'].includes(p.status_code)).length;
  const delivered = allPackages.filter(p => p.status_code === 'delivered').length;

  document.getElementById('stat-total').innerText = total;
  document.getElementById('stat-in-transit').innerText = in_transit;
  document.getElementById('stat-arriving').innerText = arriving;
  document.getElementById('stat-delivered').innerText = delivered;
}

function renderPackages() {
  const container = document.getElementById('package-list');
  const emptyState = document.getElementById('empty-state');

  let filtered = allPackages.filter(pkg => {
    if (currentFilter === 'transit' && !['in_transit', 'customs'].includes(pkg.status_code)) return false;
    if (currentFilter === 'arriving' && !['out_for_delivery', 'ready_for_pickup'].includes(pkg.status_code)) return false;
    if (currentFilter === 'delivered' && pkg.status_code !== 'delivered') return false;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchName = (pkg.name || '').toLowerCase().includes(q);
      const matchTN = (pkg.tracking_number || '').toLowerCase().includes(q);
      const matchCarrier = (pkg.carrier_name || '').toLowerCase().includes(q);
      if (!matchName && !matchTN && !matchCarrier) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');
  container.innerHTML = filtered.map(pkg => createPackageCardHtml(pkg)).join('');
}

function createPackageCardHtml(pkg) {
  const isDelivered = pkg.status_code === 'delivered';
  const isArriving = ['out_for_delivery', 'ready_for_pickup'].includes(pkg.status_code);
  const isCustoms = pkg.status_code === 'customs';

  let badgeColor = 'bg-amber-500/15 text-amber-400 border-amber-500/30';
  let badgeIcon = 'fa-truck-fast';
  if (isDelivered) {
    badgeColor = 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30';
    badgeIcon = 'fa-circle-check';
  } else if (isArriving) {
    badgeColor = 'bg-sky-500/15 text-sky-400 border-sky-500/30';
    badgeIcon = 'fa-bell';
  } else if (isCustoms) {
    badgeColor = 'bg-purple-500/15 text-purple-400 border-purple-500/30';
    badgeIcon = 'fa-plane-arrival';
  }

  const steps = pkg.steps || [];
  const currentStep = pkg.current_step || 1;
  const timelineHtml = steps.map((step, idx) => {
    const stepNum = idx + 1;
    const isStepCompleted = stepNum < currentStep || (stepNum === currentStep && isDelivered);
    const isStepActive = stepNum === currentStep && !isDelivered;

    let stepClass = '';
    let iconContent = stepNum;
    if (isStepCompleted) {
      stepClass = 'completed';
      iconContent = '<i class="fa-solid fa-check text-xs"></i>';
    } else if (isStepActive) {
      stepClass = 'active';
      iconContent = '<i class="fa-solid fa-arrow-right text-xs"></i>';
    }

    return `
      <div class="timeline-step ${stepClass} flex flex-col items-center text-center">
        <div class="timeline-icon w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold mb-1.5 ${
          isStepCompleted ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30' :
          isStepActive ? 'bg-indigo-600 text-white ring-4 ring-indigo-500/30' : 'bg-slate-800 text-slate-400 border border-slate-700'
        }">
          ${iconContent}
        </div>
        <span class="text-[11px] font-medium ${isStepActive ? 'text-indigo-300 font-bold' : isStepCompleted ? 'text-slate-200' : 'text-slate-500'}">
          ${step.title}
        </span>
        <span class="text-[10px] text-slate-400 mt-0.5 max-w-[90px] truncate" title="${step.desc || ''}">
          ${step.time || ''}
        </span>
      </div>
    `;
  }).join('');

  return `
    <div class="glass-card rounded-2xl p-5 sm:p-6 border border-slate-800 relative overflow-hidden group">
      <div class="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
        <div class="space-y-1">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300 font-medium">
              ${pkg.category || '包裹'}
            </span>
            <h3 class="text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition">
              ${pkg.name}
            </h3>
            <span class="text-xs px-2.5 py-0.5 rounded-full border ${badgeColor} flex items-center gap-1.5 font-medium">
              <i class="fa-solid ${badgeIcon}"></i>
              ${pkg.status_text}
            </span>
          </div>

          <div class="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
            <span class="flex items-center gap-1 text-indigo-400 font-medium">
              <i class="fa-solid fa-truck"></i> ${pkg.carrier_name}
            </span>
            <span>•</span>
            <span class="font-mono bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800 text-slate-300 flex items-center gap-1.5">
              單號: <strong class="text-slate-100">${pkg.tracking_number}</strong>
              <button onclick="copyToClipboard('${pkg.tracking_number}')" title="複製單號" class="text-slate-400 hover:text-white transition">
                <i class="fa-regular fa-copy"></i>
              </button>
            </span>
            <span>•</span>
            <span class="text-slate-400">
              <i class="fa-regular fa-clock"></i> 更新: ${pkg.updated_at || '剛剛'}
            </span>
          </div>
        </div>

        <div class="flex items-center space-x-2 self-end sm:self-center">
          ${pkg.official_url ? `
            <a href="${pkg.official_url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition flex items-center gap-1.5">
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i> 官網即時查件
            </a>
          ` : ''}

          <button onclick="advanceStep('${pkg.id}')" title="模擬推進下一階段" class="px-2.5 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 text-xs transition flex items-center gap-1">
            <i class="fa-solid fa-forward-step"></i> <span>推進進度</span>
          </button>

          <button onclick="openEditModal('${pkg.id}')" title="編輯包裹" class="p-1.5 text-slate-400 hover:text-slate-200 transition">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>

          <button onclick="deletePackage('${pkg.id}')" title="刪除包裹" class="p-1.5 text-slate-400 hover:text-rose-400 transition">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>

      <div class="py-5 overflow-x-auto">
        <div class="flex items-center justify-between min-w-[500px] px-4">
          ${timelineHtml}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
        <div class="flex items-center gap-2 text-slate-300">
          <i class="fa-solid fa-location-dot text-rose-400 text-sm"></i>
          <span>目前位置：<strong class="text-white">${pkg.location || '幹線轉運中'}</strong></span>
        </div>
        <div class="flex items-center gap-2 text-slate-300">
          <i class="fa-regular fa-calendar-check text-sky-400 text-sm"></i>
          <span>預計送達：<strong class="text-white">${pkg.estimated_delivery || '待確認'}</strong></span>
        </div>
        <div class="flex items-center gap-2 text-slate-400 sm:justify-end truncate" title="${pkg.note || ''}">
          <i class="fa-regular fa-note-sticky text-amber-400"></i>
          <span class="truncate">${pkg.note || '無特別備註'}</span>
        </div>
      </div>
    </div>
  `;
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('已複製單號：' + text, 'success');
  }).catch(() => {
    showToast('複製失敗，請手動反白複製', 'error');
  });
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  renderPackages();
}

function handleSearch() {
  searchQuery = document.getElementById('search-input').value.trim();
  renderPackages();
}

function advanceStep(id) {
  const pkg = allPackages.find(p => p.id === id);
  if (!pkg) return;

  const current = pkg.current_step || 1;
  const steps = pkg.steps || [];
  const now = new Date();
  const nowStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  if (current < steps.length) {
    pkg.current_step = current + 1;
    steps[pkg.current_step - 1].completed = true;
    steps[pkg.current_step - 1].time = nowStr;
    pkg.updated_at = nowStr;

    const title = steps[pkg.current_step - 1].title;
    const desc = steps[pkg.current_step - 1].desc;
    pkg.status_text = `${title} - ${desc}`;

    if (pkg.current_step === steps.length) {
      pkg.status_code = 'delivered';
      pkg.status_text = '已簽收 / 完成取件';
    } else if (pkg.current_step === steps.length - 1) {
      pkg.status_code = 'out_for_delivery';
    } else {
      pkg.status_code = 'in_transit';
    }

    saveToStorage();
    updateStats();
    renderPackages();
    showToast(`包裹進度已推進：${pkg.status_text}`, 'success');
  } else {
    showToast('此包裹已順利送達簽收！', 'info');
  }
}

function refreshAll() {
  const icon = document.getElementById('refresh-icon');
  icon.classList.add('fa-spin');
  const now = new Date();
  const nowStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  allPackages.forEach(p => p.updated_at = nowStr);
  saveToStorage();
  updateStats();
  renderPackages();

  setTimeout(() => {
    icon.classList.remove('fa-spin');
    showToast('已完成全量物流動態巡檢！', 'success');
  }, 600);
}

function openAddModal() {
  document.getElementById('modal-title').innerHTML = '<i class="fa-solid fa-box-archive text-indigo-400"></i> 新增追蹤包裹';
  document.getElementById('modal-pkg-id').value = '';
  document.getElementById('package-form').reset();
  document.getElementById('carrier-detect-hint').innerText = '💡 貼上後會自動為你辨識物流商與官方查件連結';
  document.getElementById('package-modal').classList.remove('hidden');
}

function openEditModal(id) {
  const pkg = allPackages.find(p => p.id === id);
  if (!pkg) return;

  document.getElementById('modal-title').innerHTML = '<i class="fa-solid fa-pen-to-square text-indigo-400"></i> 編輯包裹資訊';
  document.getElementById('modal-pkg-id').value = pkg.id;
  document.getElementById('modal-name').value = pkg.name || '';
  document.getElementById('modal-category').value = pkg.category || '3C 數位';
  document.getElementById('modal-carrier').value = pkg.carrier || 'other';
  document.getElementById('modal-tracking').value = pkg.tracking_number || '';
  document.getElementById('modal-eta').value = pkg.estimated_delivery || '';
  document.getElementById('modal-note').value = pkg.note || '';

  document.getElementById('package-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('package-modal').classList.add('hidden');
}

function autoDetectCarrier() {
  const tn = document.getElementById('modal-tracking').value.trim();
  const select = document.getElementById('modal-carrier');
  const hint = document.getElementById('carrier-detect-hint');

  for (const [carrier, regex] of Object.entries(CARRIER_PATTERNS)) {
    if (regex.test(tn)) {
      select.value = carrier;
      hint.innerText = `✨ 已自動辨識物流商為：${select.options[select.selectedIndex].text}`;
      return;
    }
  }
}

function savePackage(e) {
  e.preventDefault();
  const pkgId = document.getElementById('modal-pkg-id').value;
  const name = document.getElementById('modal-name').value.trim();
  const category = document.getElementById('modal-category').value;
  const carrier = document.getElementById('modal-carrier').value;
  const tracking_number = document.getElementById('modal-tracking').value.trim();
  const estimated_delivery = document.getElementById('modal-eta').value.trim();
  const note = document.getElementById('modal-note').value.trim();

  const carrierInfo = CARRIERS_INFO[carrier] || CARRIERS_INFO['other'];
  const carrier_name = carrierInfo.name;
  const official_url = carrier === 'coupang' ? carrierInfo.url : (carrierInfo.url + tracking_number);

  const now = new Date();
  const nowStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

  if (pkgId) {
    const idx = allPackages.findIndex(p => p.id === pkgId);
    if (idx !== -1) {
      allPackages[idx] = {
        ...allPackages[idx],
        name, category, carrier, carrier_name, tracking_number,
        estimated_delivery, note, official_url, updated_at: nowStr
      };
    }
  } else {
    const newPkg = {
      id: 'pkg-' + Date.now().toString(36),
      name, category, carrier, carrier_name, tracking_number,
      status_code: 'in_transit',
      status_text: '運送中 (包裹已寄出)',
      current_step: 2,
      steps: [
        { title: '已下單 / 建立單號', desc: '物流單號已由寄件人建立', time: nowStr, completed: true },
        { title: '物流出貨', desc: '包裹已移交快遞收件或由倉庫發出', time: nowStr, completed: true },
        { title: '幹線運輸中', desc: '包裹正轉運發往目的地站所或海關', time: '進行中', completed: false },
        { title: '派件中 / 抵達門市', desc: '司機出車派送或已到達取貨超商', time: '待到達', completed: false },
        { title: '順利送達', desc: '已完成簽收或取貨', time: '待簽收', completed: false }
      ],
      estimated_delivery: estimated_delivery || '待確認',
      location: '運送站所轉運中',
      note: note || '',
      official_url,
      updated_at: nowStr
    };
    allPackages.unshift(newPkg);
  }

  saveToStorage();
  updateStats();
  renderPackages();
  closeModal();
  showToast(pkgId ? '包裹已更新' : '新增包裹成功！已開始追蹤', 'success');
}

function deletePackage(id) {
  const pkg = allPackages.find(p => p.id === id);
  if (!confirm(`確定要取消追蹤「${pkg?.name || '此包裹'}」嗎？`)) return;

  allPackages = allPackages.filter(p => p.id !== id);
  saveToStorage();
  updateStats();
  renderPackages();
  showToast('已移除包裹追蹤', 'info');
}

function checkNotificationPermission() {}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');

  const icons = {
    info: 'fa-circle-info text-sky-400',
    success: 'fa-circle-check text-emerald-400',
    error: 'fa-circle-exclamation text-rose-400'
  };

  toast.className = 'glass-card px-4 py-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3 text-xs text-slate-200 transform translate-y-2 opacity-0 transition duration-300';
  toast.innerHTML = `
    <i class="fa-solid ${icons[type] || icons.info} text-sm"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
