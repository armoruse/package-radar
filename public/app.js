// Cloudflare Pages & Local Edge Compatible
const DEFAULT_PACKAGES = [
  {
    "id": "pkg-macbook-pro",
    "name": "Apple 14 吋 MacBook Pro (太空黑)",
    "category": "3C 旗艦",
    "carrier": "sf_express",
    "carrier_name": "順豐速運 (Apple 直營發貨)",
    "tracking_number": "SF1688829031",
    "status_code": "in_transit",
    "status_text": "已安排航班，飛往台灣轉運中",
    "current_step": 3,
    "steps": [
      {
        "title": "Apple 訂單確認",
        "desc": "訂單編號 W108829031",
        "time": "2026-03-04 09:45",
        "completed": true
      },
      {
        "title": "原廠出庫",
        "desc": "上海/深圳組裝中心已移交順豐",
        "time": "2026-03-05 11:20",
        "completed": true
      },
      {
        "title": "航班轉運",
        "desc": "順豐國際幹線航班飛往台灣中",
        "time": "2026-03-06 06:10",
        "completed": true
      },
      {
        "title": "本地清關派件",
        "desc": "抵達桃園機場清關，司機專車出車",
        "time": "預估 2026-03-08",
        "completed": false
      },
      {
        "title": "本人簽收開箱",
        "desc": "高單價商品，司機將提前電話聯絡",
        "time": "預計 3/8-3/10",
        "completed": false
      }
    ],
    "estimated_delivery": "2026-03-08 ~ 03-10",
    "location": "國際轉運航班中",
    "note": "高單價 3C，配送前司機通常會電話聯絡，請保持手機暢通",
    "official_url": "https://www.sf-express.com/tw/tc/dynamic_function/waybill/#search/bill-number/SF1688829031",
    "updated_at": "2026-03-06 06:10"
  },
  {
    "id": "pkg-amazon-zamst",
    "name": "Amazon.co.jp ZAMST 專業防護膝サポーター (左右一組)",
    "category": "運動護具",
    "carrier": "ecms",
    "carrier_name": "ECMS 易客滿 (日亞直寄)",
    "tracking_number": "APX00982314TW",
    "status_code": "customs",
    "status_text": "台灣海關清關中 (EZ WAY 已申報)",
    "current_step": 3,
    "steps": [
      {
        "title": "日亞發貨",
        "desc": "Amazon 日本倉庫出庫",
        "time": "2026-03-05 14:12",
        "completed": true
      },
      {
        "title": "國際航空件",
        "desc": "已搭乘國際航班抵達台灣桃園",
        "time": "2026-03-05 23:40",
        "completed": true
      },
      {
        "title": "海關查驗",
        "desc": "關貿網路 EZ WAY 實名委任確認中",
        "time": "2026-03-06 08:30",
        "completed": true
      },
      {
        "title": "末端配送",
        "desc": "清關完成轉交台灣中華郵政/宅配通",
        "time": "預估 2026-03-08",
        "completed": false
      },
      {
        "title": "配達簽收",
        "desc": "投遞成功",
        "time": "預計 2026-03-09 前",
        "completed": false
      }
    ],
    "estimated_delivery": "2026-03-09 前送達",
    "location": "桃園機場海關清關所",
    "note": "收到 EZ WAY 申報通知，記得確認申報相符加速通關",
    "official_url": "https://track.ecmsglobal.com/express/track/index.html?tracking_number=APX00982314TW",
    "updated_at": "2026-03-06 08:30"
  },
  {
    "id": "pkg-coupang-rocket",
    "name": "酷澎火箭速配 (日常用品生活包)",
    "category": "生活百貨",
    "carrier": "coupang",
    "carrier_name": "Coupang 酷澎火箭速配",
    "tracking_number": "CPG-20260305-88219",
    "status_code": "out_for_delivery",
    "status_text": "酷澎專車派送中 (預計今晚配達)",
    "current_step": 4,
    "steps": [
      {
        "title": "完成付款",
        "desc": "訂單 CPG-20260305-88219 已成立",
        "time": "2026-03-05 18:25",
        "completed": true
      },
      {
        "title": "夜間分揀",
        "desc": "酷澎台灣物流中心火速理貨",
        "time": "2026-03-06 01:40",
        "completed": true
      },
      {
        "title": "出發站所",
        "desc": "已送抵所在配送站所",
        "time": "2026-03-06 06:30",
        "completed": true
      },
      {
        "title": "專車配送",
        "desc": "酷澎專員已裝車，出車派送中",
        "time": "2026-03-06 10:15",
        "completed": true
      },
      {
        "title": "門前送達",
        "desc": "放置指定位置拍照上傳",
        "time": "預計今晚 19:00 前",
        "completed": false
      }
    ],
    "estimated_delivery": "今晚 19:00 前",
    "location": "已裝車，專員配送途中",
    "note": "司機送達後會將門前照片推播至 Coupang App",
    "official_url": "https://mc.coupang.com/ssr/desktop/order/list",
    "updated_at": "2026-03-06 10:15"
  },
  {
    "id": "pkg-shopee-pickup",
    "name": "蝦皮購物 (電腦周邊配件)",
    "category": "3C 周邊",
    "carrier": "shopee_spx",
    "carrier_name": "蝦皮店到店 (台北信義店)",
    "tracking_number": "TW26030488129S",
    "status_code": "ready_for_pickup",
    "status_text": "已抵達門市，待取件 (7天取貨期)",
    "current_step": 4,
    "steps": [
      {
        "title": "賣家出貨",
        "desc": "賣家已到店寄件",
        "time": "2026-03-04 20:30",
        "completed": true
      },
      {
        "title": "理貨中心",
        "desc": "包裹收回大園理貨中心分檢",
        "time": "2026-03-05 04:00",
        "completed": true
      },
      {
        "title": "門市調撥",
        "desc": "物流專車配送往門市中",
        "time": "2026-03-05 15:30",
        "completed": true
      },
      {
        "title": "到達門市",
        "desc": "包裹已到達【台北信義店】",
        "time": "2026-03-06 08:20",
        "completed": true
      },
      {
        "title": "完成取貨",
        "desc": "報手機末3碼或出示取件條碼取貨",
        "time": "最晚需於 03-13 前取件",
        "completed": false
      }
    ],
    "estimated_delivery": "已在門市 (7天內取件)",
    "location": "蝦皮店到店 台北信義店",
    "note": "請攜帶身分證件備查，取件條碼可在蝦皮 App 查看",
    "official_url": "https://spx.tw/#/detail?tracking_number=TW26030488129S",
    "updated_at": "2026-03-06 08:20"
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
