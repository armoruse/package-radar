// State Management
let allPackages = [];
let currentFilter = 'all';
let searchQuery = '';
let autoRefreshTimer = null;

// Carrier list for quick detection
const CARRIER_PATTERNS = {
  sf_express: /^SF|^1[0-9]{11,14}$/i,
  ecms: /^APX|^ECMS/i,
  shopee_spx: /^TW[0-9A-Z]+S$|^SPX/i,
  coupang: /^CPG|^ROCKET/i,
  t_cat: /^[689][0-9]{9,11}$/,
  dhl: /^[0-9]{10}$/
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  fetchPackages();
  checkNotificationPermission();
  loadCloudSettings();

  // Auto refresh every 60 seconds
  autoRefreshTimer = setInterval(() => {
    fetchPackages(true);
  }, 60000);
});

// Fetch packages and stats from backend
async function fetchPackages(isBackground = false) {
  try {
    const res = await fetch('/api/packages');
    if (!res.ok) throw new Error('API 回應錯誤');
    const data = await res.json();
    allPackages = data.packages || [];

    updateStats(data.stats);
    renderPackages();

    if (!isBackground) {
      showToast('資料已同步更新', 'info');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    if (!isBackground) showToast('載入資料失敗，請確認伺服器運作', 'error');
  }
}

// Update Top Stat Numbers
function updateStats(stats) {
  if (!stats) return;
  document.getElementById('stat-total').innerText = stats.total ?? 0;
  document.getElementById('stat-in-transit').innerText = stats.in_transit ?? 0;
  document.getElementById('stat-arriving').innerText = stats.arriving_today ?? 0;
  document.getElementById('stat-delivered').innerText = stats.delivered ?? 0;
}

// Render Package Cards
function renderPackages() {
  const container = document.getElementById('package-list');
  const emptyState = document.getElementById('empty-state');

  // Filter logic
  let filtered = allPackages.filter(pkg => {
    // Tab filter
    if (currentFilter === 'transit' && !['in_transit', 'customs'].includes(pkg.status_code)) return false;
    if (currentFilter === 'arriving' && !['out_for_delivery', 'ready_for_pickup'].includes(pkg.status_code)) return false;
    if (currentFilter === 'delivered' && pkg.status_code !== 'delivered') return false;

    // Search query
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

// Generate HTML for a single package card
function createPackageCardHtml(pkg) {
  const isDelivered = pkg.status_code === 'delivered';
  const isArriving = ['out_for_delivery', 'ready_for_pickup'].includes(pkg.status_code);
  const isCustoms = pkg.status_code === 'customs';

  // Status Badge styling
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

  // Generate 5-step timeline HTML
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
      <!-- Background subtle gradient glow -->
      <div class="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none"></div>

      <!-- Top Row: Name, Status, Quick Actions -->
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

        <!-- Right Side Action Buttons -->
        <div class="flex items-center space-x-2 self-end sm:self-center">
          ${pkg.official_url ? `
            <a href="${pkg.official_url}" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 transition flex items-center gap-1.5">
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i> 官網查件
            </a>
          ` : ''}

          <!-- Advance step simulation button -->
          <button onclick="advanceStep('${pkg.id}')" title="模擬推進下一階段" class="px-2.5 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 text-xs transition flex items-center gap-1">
            <i class="fa-solid fa-forward-step"></i> <span class="hidden md:inline">推進進度</span>
          </button>

          <!-- Edit button -->
          <button onclick="openEditModal('${pkg.id}')" title="編輯包裹" class="p-1.5 text-slate-400 hover:text-slate-200 transition">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>

          <!-- Delete button -->
          <button onclick="deletePackage('${pkg.id}')" title="刪除包裹" class="p-1.5 text-slate-400 hover:text-rose-400 transition">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </div>

      <!-- Middle: Visual Timeline Stepper -->
      <div class="py-5 overflow-x-auto">
        <div class="flex items-center justify-between min-w-[500px] px-4">
          ${timelineHtml}
        </div>
      </div>

      <!-- Bottom Meta Row: Location, ETA, Note -->
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

// Copy tracking number to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('已複製單號：' + text, 'success');
  }).catch(() => {
    showToast('複製失敗，請手動反白複製', 'error');
  });
}

// Filter switching
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  renderPackages();
}

// Search handler
function handleSearch() {
  searchQuery = document.getElementById('search-input').value.trim();
  renderPackages();
}

// Advance package step (Simulation / real refresh)
async function advanceStep(id) {
  try {
    const res = await fetch(`/api/packages/${id}/advance`, { method: 'POST' });
    if (!res.ok) throw new Error('推進失敗');
    const data = await res.json();
    showToast(`包裹進度已更新：${data.package.status_text}`, 'success');

    // Trigger local desktop notification if permitted
    sendDesktopNotification(`📦 包裹進度更新`, `${data.package.name}：${data.package.status_text}`);

    fetchPackages(true);
  } catch (err) {
    showToast('推進失敗', 'error');
  }
}

// Refresh all packages
async function refreshAll() {
  const icon = document.getElementById('refresh-icon');
  icon.classList.add('fa-spin');
  try {
    await fetch('/api/refresh-all', { method: 'POST' });
    await fetchPackages(true);
    showToast('已完成全量物流狀態同步', 'success');
  } catch (err) {
    showToast('刷新發生錯誤', 'error');
  } finally {
    setTimeout(() => icon.classList.remove('fa-spin'), 600);
  }
}

// Add / Edit Modal Controls
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

// Auto detect carrier on typing tracking number
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

// Save (Create or Update) package
async function savePackage(e) {
  e.preventDefault();
  const pkgId = document.getElementById('modal-pkg-id').value;
  const name = document.getElementById('modal-name').value.trim();
  const category = document.getElementById('modal-category').value;
  const carrier = document.getElementById('modal-carrier').value;
  const tracking_number = document.getElementById('modal-tracking').value.trim();
  const estimated_delivery = document.getElementById('modal-eta').value.trim();
  const note = document.getElementById('modal-note').value.trim();

  const payload = { name, category, carrier, tracking_number, estimated_delivery, note };

  try {
    let res;
    if (pkgId) {
      res = await fetch(`/api/packages/${pkgId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      res = await fetch('/api/packages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    if (!res.ok) throw new Error('儲存失敗');
    closeModal();
    showToast(pkgId ? '包裹更新成功' : '新增包裹成功！已開始追蹤', 'success');
    fetchPackages(true);
  } catch (err) {
    showToast('儲存失敗，請檢查格式', 'error');
  }
}

// Delete Package
async function deletePackage(id) {
  const pkg = allPackages.find(p => p.id === id);
  if (!confirm(`確定要取消追蹤「${pkg?.name || '此包裹'}」嗎？`)) return;

  try {
    const res = await fetch(`/api/packages/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('刪除失敗');
    showToast('已移除包裹追蹤', 'info');
    fetchPackages(true);
  } catch (err) {
    showToast('刪除失敗', 'error');
  }
}

// Desktop Notification Permission & Handling
function checkNotificationPermission() {
  const btn = document.getElementById('btn-notify');
  const icon = document.getElementById('notify-icon');
  const label = document.getElementById('notify-label');

  if (!('Notification' in window)) {
    btn.style.display = 'none';
    return;
  }

  if (Notification.permission === 'granted') {
    icon.className = 'fa-solid fa-bell text-emerald-400';
    label.innerText = '推播已啟用';
  } else {
    icon.className = 'fa-regular fa-bell text-slate-400';
    label.innerText = '開啟桌面推播';
  }
}

function toggleNotifications() {
  if (!('Notification' in window)) {
    showToast('您的瀏覽器不支援桌面通知', 'error');
    return;
  }

  if (Notification.permission === 'granted') {
    sendDesktopNotification('Package Radar 雲端雷達', '推播通知功能正常運作中！');
    showToast('桌面推播已開啟', 'success');
  } else {
    Notification.requestPermission().then(permission => {
      checkNotificationPermission();
      if (permission === 'granted') {
        sendDesktopNotification('Package Radar 雲端雷達', '感謝授權！包裹有重大進展將立即提醒您！');
        showToast('推播權限已授權！', 'success');
      }
    });
  }
}

function sendDesktopNotification(title, body) {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      body: body,
      icon: 'https://cdn-icons-png.flaticon.com/512/684/684908.png'
    });
  }
}

// Settings Modal & Cloud Integration
async function loadCloudSettings() {
  try {
    const res = await fetch('/api/settings');
    const data = await res.json();
    if (data.has_telegram || data.has_line) {
      const channelLabel = [data.has_line ? 'LINE' : '', data.has_telegram ? 'Telegram' : ''].filter(Boolean).join(' & ');
      console.log('雲端通知已串接:', channelLabel);
    }
  } catch (e) {}
}

function openSettingsModal() {
  document.getElementById('settings-modal').classList.remove('hidden');
}

function closeSettingsModal() {
  document.getElementById('settings-modal').classList.add('hidden');
}

async function saveCloudSettings(e) {
  e.preventDefault();
  const lineToken = document.getElementById('cfg-line-token').value.trim();
  const tgToken = document.getElementById('cfg-tg-token').value.trim();
  const tgChat = document.getElementById('cfg-tg-chat').value.trim();

  try {
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        line_token: lineToken,
        telegram_bot_token: tgToken,
        telegram_chat_id: tgChat,
        notify_on_step: true
      })
    });
    if (!res.ok) throw new Error('儲存失敗');
    showToast('通知金鑰已安全保存至雲端！', 'success');
    closeSettingsModal();
  } catch (err) {
    showToast('保存設定失敗', 'error');
  }
}

async function testPushNotification() {
  try {
    showToast('發送測試推播中...', 'info');
    const res = await fetch('/api/notify-test', { method: 'POST' });
    const data = await res.json();
    showToast('測試訊息已發出，請查看您的 LINE / Telegram！', 'success');
  } catch (e) {
    showToast('測試發送失敗', 'error');
  }
}

// Toast Alert System
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

  // Trigger animation
  setTimeout(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  }, 10);

  // Auto dismiss after 3 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-2', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
