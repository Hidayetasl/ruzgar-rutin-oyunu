const STORAGE_KEY = "ruzgar-gorev-treni-state-v1";
const MIGRATION_BACKUP_KEY = "ruzgar-gorev-treni-pre-v3-backup";
const SCHEMA_VERSION = 3;
const MAX_DAILY_TASK_POINTS = 7;
const MAX_DAILY_BONUS_POINTS = 3;
const MAX_DAILY_TOTAL_POINTS = 10;
const ADULT_SESSION_MS = 10 * 60 * 1000;

const TASK_ICONS = ["🧼", "🪥", "👏", "🍽️", "🧸", "🚽", "🌙", "⭐", "🚂", "🏠", "🌳"];

const DEFAULT_TASKS = [
  { id: "wash-face", title: "Sabah elimi ve yüzümü yıkadım", icon: "🧼", reward: 1, active: true },
  { id: "morning-teeth", title: "Sabah dişlerimi fırçaladım", icon: "🪥", reward: 1, active: true },
  { id: "wash-hands", title: "Gerektiğinde ellerimi yıkadım", icon: "👏", reward: 1, active: true },
  {
    id: "meal-time",
    title: "Yemek düzenine uydum",
    description: "Yemeğe zamanında geldim, yemeği denedim, yeterli ölçüde yedim ve doyduğumu söyledim.",
    icon: "🍽️",
    reward: 1,
    active: true
  },
  { id: "tidy-toys", title: "Oyuncaklarımı topladım", icon: "🧸", reward: 1, active: true },
  { id: "evening-toilet", title: "Akşam tuvalete gittim", icon: "🚽", reward: 1, active: true },
  { id: "evening-ready", title: "Dişlerimi fırçalayıp yatağa hazırlandım", icon: "🌙", reward: 1, active: true }
];

const DEFAULT_SHOP_ITEMS = [
  { id: "decor", title: "Ağaç, çiçek veya tabela", icon: "🌳", price: 1, type: "decor", active: true },
  { id: "rail", title: "Kısa ray parçası", icon: "🛤️", price: 2, type: "rail", active: true },
  { id: "signal", title: "Sinyal lambası", icon: "🚦", price: 3, type: "signal", active: true },
  { id: "home", title: "Küçük ev veya hayvan", icon: "🏠", price: 3, type: "decor", active: true },
  { id: "switch", title: "Demiryolu makası", icon: "🔀", price: 5, type: "switch", active: true },
  { id: "cargo", title: "Yük vagonu", icon: "📦", price: 6, type: "wagon", active: true },
  { id: "passenger", title: "Yolcu vagonu", icon: "🚃", price: 7, type: "wagon", active: true },
  { id: "bridge", title: "Köprü", icon: "🌉", price: 8, type: "bridge", active: true },
  { id: "tunnel", title: "Tünel", icon: "⛰️", price: 10, type: "tunnel", active: true },
  { id: "small-station", title: "Küçük istasyon", icon: "🚉", price: 12, type: "station", active: true },
  { id: "big-station", title: "Büyük istasyon", icon: "🏫", price: 20, type: "station", active: true }
];

const DEFAULT_ADULT_PROFILES = [
  { id: "mother", name: "Anne", pinHash: "", active: true },
  { id: "grandmother", name: "Anneanne", pinHash: "", active: true },
  { id: "grandfather", name: "Dede", pinHash: "", active: true }
];

const DEFAULT_BONUSES = [
  {
    id: "care-toys",
    title: "Oyuncaklarıma özen gösterdim",
    shortTitle: "Oyuncaklarıma özen",
    adultDescription: "Oyuncaklarını güvenli ve dikkatli kullandı.",
    childMessage: "Oyuncaklarına özen gösterdiğin için bir Tren Parası kazandın!",
    icon: "🧸",
    active: true
  },
  {
    id: "listened",
    title: "Dinledim ve uyguladım",
    shortTitle: "Dinledim ve uyguladım",
    adultDescription: "Kendisine açıkça söylenen, yaşına uygun ve güvenli bir isteği dinleyip uyguladı.",
    childMessage: "Söyleneni dinleyip uyguladığın için bir Tren Parası kazandın!",
    icon: "👂",
    active: true
  },
  {
    id: "table-kind",
    title: "Sofrada güzel davrandım",
    shortTitle: "Sofrada güzel davrandım",
    adultDescription: "Yemeğe zamanında geldi, sunulan yemeği denedi, yeterli ölçüde yedi ve sofrada düzenli davrandı.",
    childMessage: "Sofrada güzel davrandığın için bir Tren Parası kazandın!",
    icon: "🍽️",
    active: true
  },
  {
    id: "rules",
    title: "Kurallarımıza uydum",
    shortTitle: "Kurallarımıza uydum",
    adultDescription: "Önceden açıklanan aile veya güvenlik kurallarına uydu.",
    childMessage: "Kurallarımıza uyduğun için bir Tren Parası kazandın!",
    icon: "🛟",
    active: true
  },
  {
    id: "kind-action",
    title: "İyi bir davranış gösterdim",
    shortTitle: "İyi davranış gösterdim",
    adultDescription: "Yardım etti, paylaştı, sırasını bekledi, özür diledi veya hatasını düzeltmeye çalıştı.",
    childMessage: "Güzel davranışın için bir Tren Parası kazandın!",
    icon: "⭐",
    active: true
  }
];

const MAP_POINTS = [
  { id: "rail-1", type: "rail", x: 240, y: 250 },
  { id: "rail-2", type: "rail", x: 350, y: 250 },
  { id: "river", type: "bridge", x: 470, y: 250 },
  { id: "rail-3", type: "rail", x: 590, y: 250 },
  { id: "mountain", type: "tunnel", x: 720, y: 250 },
  { id: "rail-4", type: "rail", x: 850, y: 250 },
  { id: "station-1", type: "station", x: 1000, y: 205 },
  { id: "switch-1", type: "switch", x: 1085, y: 250 },
  { id: "decor-1", type: "decor", x: 205, y: 170 },
  { id: "decor-2", type: "decor", x: 390, y: 165 },
  { id: "decor-3", type: "decor", x: 630, y: 160 },
  { id: "decor-4", type: "decor", x: 905, y: 160 },
  { id: "decor-5", type: "decor", x: 1160, y: 166 },
  { id: "signal-1", type: "signal", x: 305, y: 198 },
  { id: "signal-2", type: "signal", x: 895, y: 198 }
];

let state = loadState();
let selectedInventoryId = null;
let parentUnlocked = false;
let activeAdultId = "";
let adultSessionExpiresAt = 0;
let pendingToastTimer = null;
let pendingPurchaseInventoryId = null;
let refreshing = false;
let reviewLocks = new Set();
let selectedBonusIds = new Set();
let bonusCommitLock = false;
let lastBonusInfoButton = null;

const $ = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  migrateToSingleParentPin();
  migrateForToday();
  bindEvents();
  render();
  registerServiceWorker();
  maybeShowMorning();
});

function emptyState() {
  const today = istanbulDateKey();
  return {
    schemaVersion: SCHEMA_VERSION,
    profile: { name: "Rüzgar" },
    parentPinHash: "",
    settings: { sounds: true, reduceMotion: false },
    tasks: clone(DEFAULT_TASKS),
    dailyCompletions: {},
    dailyBonuses: {},
    balance: 0,
    transactions: [],
    approvalHistory: [],
    shopItems: clone(DEFAULT_SHOP_ITEMS),
    bonuses: clone(DEFAULT_BONUSES),
    adultProfiles: clone(DEFAULT_ADULT_PROFILES),
    inventory: [],
    map: {
      placed: [],
      unlockedBranch: false
    },
    train: {
      locomotive: "🚂",
      wagons: []
    },
    lastDailyReset: today,
    lastMorningAnimation: "",
    undoHistory: []
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw);
    if ((Number(parsed.schemaVersion) || 1) < SCHEMA_VERSION && !localStorage.getItem(MIGRATION_BACKUP_KEY)) {
      localStorage.setItem(MIGRATION_BACKUP_KEY, raw);
    }
    return normalizeState(parsed);
  } catch {
    return emptyState();
  }
}

function normalizeState(raw) {
  const base = emptyState();
  const merged = { ...base, ...raw };
  merged.profile = { ...base.profile, ...(raw.profile || {}) };
  merged.settings = { ...base.settings, ...(raw.settings || {}) };
  merged.tasks = Array.isArray(raw.tasks) ? raw.tasks : base.tasks;
  merged.dailyCompletions = normalizeCompletions(raw.dailyCompletions || {});
  merged.dailyBonuses = normalizeDailyBonuses(raw.dailyBonuses || {});
  merged.transactions = normalizeTransactions(Array.isArray(raw.transactions) ? raw.transactions : []);
  merged.approvalHistory = Array.isArray(raw.approvalHistory) ? raw.approvalHistory : [];
  merged.shopItems = Array.isArray(raw.shopItems) ? raw.shopItems : base.shopItems;
  merged.bonuses = Array.isArray(raw.bonuses) ? mergeById(base.bonuses, raw.bonuses) : base.bonuses;
  merged.bonuses = merged.bonuses.map((bonus) => ({
    ...bonus,
    shortTitle: bonus.shortTitle || shortBonusTitle(bonus)
  }));
  merged.adultProfiles = Array.isArray(raw.adultProfiles)
    ? mergeById(base.adultProfiles, raw.adultProfiles)
    : base.adultProfiles;
  merged.inventory = Array.isArray(raw.inventory) ? raw.inventory : [];
  merged.map = { ...base.map, ...(raw.map || {}) };
  merged.map.placed = Array.isArray(merged.map.placed) ? merged.map.placed : [];
  merged.train = { ...base.train, ...(raw.train || {}) };
  merged.train.wagons = Array.isArray(merged.train.wagons) ? merged.train.wagons : [];
  merged.undoHistory = Array.isArray(raw.undoHistory) ? raw.undoHistory : [];
  merged.balance = Math.max(0, Number(raw.balance) || 0);
  merged.parentPinHash = raw.parentPinHash || "";
  merged.schemaVersion = SCHEMA_VERSION;
  return merged;
}

function normalizeCompletions(rawCompletions) {
  const normalized = {};
  Object.entries(rawCompletions).forEach(([date, day]) => {
    normalized[date] = {};
    Object.entries(day || {}).forEach(([taskId, record]) => {
      if (record && typeof record === "object" && record.status) {
        normalized[date][taskId] = {
          ...record,
          status: normalizeTaskStatus(record.status),
          reward: Math.max(0, Number(record.reward) || 0)
        };
        return;
      }
      if (record) {
        normalized[date][taskId] = {
          status: "approved",
          requestedAt: record.at || "",
          reviewedAt: record.at || "",
          approvedBy: "Eski kayıt",
          reviewResult: "completed",
          reward: Math.max(0, Number(record.reward) || 0)
        };
      }
    });
  });
  return normalized;
}

function normalizeTaskStatus(status) {
  return ["available", "pendingApproval", "approved"].includes(status) ? status : "available";
}

function normalizeDailyBonuses(rawBonuses) {
  const normalized = {};
  Object.entries(rawBonuses).forEach(([date, day]) => {
    normalized[date] = {};
    Object.entries(day || {}).forEach(([bonusId, record]) => {
      if (!record || typeof record !== "object") return;
      normalized[date][bonusId] = {
        ...record,
        amount: Math.max(0, Number(record.amount) || 0)
      };
    });
  });
  return normalized;
}

function normalizeTransactions(rawTransactions) {
  return rawTransactions.map((tx) => {
    const type = tx.type || mapLegacyTransactionType(tx.kind);
    const timestamp = tx.timestamp || tx.at || new Date().toISOString();
    return {
      ...tx,
      transactionId: tx.transactionId || tx.id || uid(),
      type,
      date: tx.date || istanbulDateKey(new Date(timestamp)),
      timestamp,
      amount: Number(tx.amount) || 0,
      taskId: tx.taskId || "",
      bonusId: tx.bonusId || "",
      caregiverId: tx.caregiverId || tx.approvedByAdultId || "",
      description: tx.description || tx.label || ""
    };
  });
}

function mapLegacyTransactionType(kind) {
  return {
    completed: "task_approved",
    incomplete: "task_reopened_incomplete",
    accidental: "task_reopened_accidental",
    bonus: "behavior_bonus",
    spend: "purchase",
    earn: "task_approved",
    adjust: "manual_adjustment"
  }[kind] || kind || "manual_adjustment";
}

function mergeById(defaults, current) {
  const map = new Map(defaults.map((item) => [item.id, clone(item)]));
  current.forEach((item) => {
    if (!item || !item.id) return;
    map.set(item.id, { ...(map.get(item.id) || {}), ...item });
  });
  return Array.from(map.values());
}

function shortBonusTitle(bonus) {
  return {
    "care-toys": "Oyuncaklarıma özen",
    listened: "Dinledim ve uyguladım",
    "table-kind": "Sofrada güzel davrandım",
    rules: "Kurallarımıza uydum",
    "kind-action": "İyi davranış gösterdim"
  }[bonus.id] || bonus.title || "";
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function snapshotState() {
  const copy = clone(state);
  copy.undoHistory = [];
  return copy;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function uid() {
  if (crypto.randomUUID) return crypto.randomUUID();
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0"));
  return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
}

function pushUndo(label) {
  state.undoHistory.unshift({
    at: new Date().toISOString(),
    label,
    state: snapshotState()
  });
  state.undoHistory = state.undoHistory.slice(0, 20);
}

function undoLast() {
  const last = state.undoHistory.shift();
  if (!last) {
    showToast("Geri alınacak işlem yok.");
    return;
  }
  const remaining = state.undoHistory;
  state = normalizeState(last.state);
  state.undoHistory = remaining;
  addTransaction("undo", "İşlem geri alındı", 0, { source: "admin" });
  saveState();
  selectedInventoryId = null;
  reviewLocks.clear();
  render();
  showToast("İşlem geri alındı.");
}

function addTransaction(type, description, amount, extra = {}) {
  const timestamp = new Date().toISOString();
  state.transactions.unshift({
    transactionId: uid(),
    type,
    timestamp,
    date: istanbulDateKey(),
    amount,
    taskId: extra.taskId || "",
    bonusId: extra.bonusId || "",
    caregiverId: extra.caregiverId || extra.approvedByAdultId || "",
    description,
    balanceAfter: state.balance,
    ...extra
  });
  state.transactions = state.transactions.slice(0, 240);
}

function istanbulDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type).value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

function istanbulTimeText(date = new Date()) {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function migrateForToday() {
  const today = istanbulDateKey();
  if (state.lastDailyReset !== today) {
    expirePendingApprovals(state.lastDailyReset, today);
    state.lastDailyReset = today;
    saveState();
  }
}

function expirePendingApprovals(previousDate, today) {
  if (!previousDate || previousDate === today) return;
  const previous = state.dailyCompletions[previousDate] || {};
  Object.entries(previous).forEach(([taskId, record]) => {
    if (!record || record.status !== "pendingApproval" || record.reviewResult === "expired") return;
    record.status = "available";
    record.reviewResult = "expired";
    record.expiredAt = new Date().toISOString();
    record.reward = 0;
    const task = state.tasks.find((item) => item.id === taskId);
    state.approvalHistory.push({
      id: uid(),
      taskId,
      date: previousDate,
      result: "expired",
      timestamp: record.expiredAt,
      description: `${task ? task.title : taskId} süresi doldu`
    });
  });
}

function todayCompletions() {
  const today = istanbulDateKey();
  if (!state.dailyCompletions[today]) state.dailyCompletions[today] = {};
  return state.dailyCompletions[today];
}

function todayBonuses() {
  const today = istanbulDateKey();
  if (!state.dailyBonuses[today]) state.dailyBonuses[today] = {};
  return state.dailyBonuses[today];
}

function taskRecord(taskId) {
  return todayCompletions()[taskId] || { status: "available" };
}

function taskPointsToday() {
  return Object.values(todayCompletions()).reduce((sum, record) => {
    if (!record || record.status !== "approved") return sum;
    return sum + Math.max(0, Number(record.reward) || 0);
  }, 0);
}

function bonusPointsToday() {
  return Object.values(todayBonuses()).reduce((sum, record) => sum + Math.max(0, Number(record.amount) || 0), 0);
}

function totalPointsToday() {
  return taskPointsToday() + bonusPointsToday();
}

function remainingTaskPoints() {
  return Math.max(0, Math.min(MAX_DAILY_TASK_POINTS - taskPointsToday(), MAX_DAILY_TOTAL_POINTS - totalPointsToday()));
}

function remainingBonusPoints() {
  return Math.max(0, Math.min(MAX_DAILY_BONUS_POINTS - bonusPointsToday(), MAX_DAILY_TOTAL_POINTS - totalPointsToday()));
}

function bindEvents() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });
  $("parentTopButton").addEventListener("click", () => switchView("parent"));

  $("speakTitle").addEventListener("click", () => speak("Rüzgar'ın Görev Treni"));
  $("replayTrain").addEventListener("click", () => animateTrain(true));
  $("replayTrainSmall").addEventListener("click", () => {
    switchView("world");
    window.setTimeout(() => animateTrain(true), 80);
  });
  $("cancelPlacement").addEventListener("click", clearPlacement);
  $("placeNowButton").addEventListener("click", () => {
    if (pendingPurchaseInventoryId) beginPlacement(pendingPurchaseInventoryId);
  });
  $("pinSubmit").addEventListener("click", handlePinSubmit);
  $("resetPinButton").addEventListener("click", resetParentPin);
  $("pinInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handlePinSubmit();
    }
  });
  $("adultPinSubmit").addEventListener("click", handleAdultPinSubmit);
  $("adultPinInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAdultPinSubmit();
    }
  });
  ["pinInput", "adultPinInput", "bonusConfirmPinInput"].forEach((id) => {
    $(id).addEventListener("input", (event) => {
      event.target.value = event.target.value.replace(/\D/g, "").slice(0, 4);
    });
  });
  $("adultLockButton").addEventListener("click", lockAdult);
  $("parentLockButton").addEventListener("click", () => {
    parentUnlocked = false;
    renderParent();
  });
  $("taskForm").addEventListener("submit", saveTaskFromForm);
  $("newTaskButton").addEventListener("click", clearTaskForm);
  $("deleteTaskButton").addEventListener("click", deleteTaskFromForm);
  $("adultProfileForm").addEventListener("submit", saveAdultProfileFromForm);
  $("newAdultProfileButton").addEventListener("click", clearAdultProfileForm);
  $("deactivateAdultProfileButton").addEventListener("click", deactivateAdultProfileFromForm);
  $("bonusDefinitionForm").addEventListener("submit", saveBonusDefinitionFromForm);
  $("clearBonusDefinitionButton").addEventListener("click", clearBonusDefinitionForm);
  $("confirmBonusesButton").addEventListener("click", confirmSelectedBonuses);
  $("bonusConfirmPinInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") confirmSelectedBonuses();
  });
  $("closeBonusInfo").addEventListener("click", closeBonusInfo);
  $("bonusInfoDialog").addEventListener("close", () => {
    if (lastBonusInfoButton && typeof lastBonusInfoButton.focus === "function") lastBonusInfoButton.focus();
  });
  $("soundsToggle").addEventListener("change", (event) => {
    pushUndo("Ses ayarı");
    state.settings.sounds = event.target.checked;
    saveState();
    render();
  });
  $("reduceMotionToggle").addEventListener("change", (event) => {
    pushUndo("Animasyon ayarı");
    state.settings.reduceMotion = event.target.checked;
    saveState();
    render();
  });
  $("balanceAdjustButton").addEventListener("click", adjustBalance);
  $("undoAdminButton").addEventListener("click", undoLast);
  $("exportButton").addEventListener("click", exportJson);
  $("importInput").addEventListener("change", importJson);
  $("resetButton").addEventListener("click", resetAllData);
  $("closeMorning").addEventListener("click", () => $("morningDialog").close());
  $("refreshApp").addEventListener("click", refreshForUpdate);
}

function switchView(viewName) {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === viewName);
  });
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("is-active"));
  $(`${viewName}View`).classList.add("is-active");
  if (viewName === "world") window.setTimeout(() => animateTrain(false), 80);
}

function render() {
  saveState();
  $("balanceText").textContent = state.balance;
  $("shopBalance").textContent = state.balance;
  document.body.classList.toggle("reduce-motion", state.settings.reduceMotion);
  renderTasks();
  renderShop();
  renderWorld();
  renderParent();
}

function renderTasks() {
  const grid = $("taskGrid");
  grid.innerHTML = "";
  const activeTasks = state.tasks.filter((task) => task.active);
  activeTasks.forEach((task) => {
    const record = taskRecord(task.id);
    const status = normalizeTaskStatus(record.status);
    const card = document.createElement("article");
    card.className = `task-card task-${status}${status === "approved" ? " done" : ""}${isRetryRecord(record) ? " retry" : ""}`;
    card.innerHTML = `
      <button class="task-icon" type="button" aria-label="${escapeHtml(task.title)} seslendir">${task.icon}</button>
      <h3>${escapeHtml(task.title)}</h3>
      <p class="task-status">${taskStatusIcon(record)} ${escapeHtml(taskStatusText(record))}</p>
      <button class="complete-button" type="button" ${status !== "available" ? "disabled" : ""}>${taskButtonText(record)}</button>
    `;
    card.querySelector(".task-icon").addEventListener("click", () => speak(task.description || task.title));
    card.querySelector(".complete-button").addEventListener("click", () => requestTaskApproval(task.id, card));
    grid.appendChild(card);
  });

  // Yedi görevli telefonda son satırda kalan boşluğu günün durumunu gösteren
  // yararlı bir kartla doldurur. Bu kart veri değiştirmez.
  if (activeTasks.length % 2 === 1) {
    const records = activeTasks.map((task) => taskRecord(task.id));
    const approved = records.filter((record) => normalizeTaskStatus(record.status) === "approved").length;
    const pending = records.filter((record) => normalizeTaskStatus(record.status) === "pendingApproval").length;
    const available = activeTasks.length - approved - pending;
    const summary = document.createElement("article");
    summary.className = "task-card task-summary-card";
    summary.setAttribute("aria-label", "Bugünün görev özeti");
    summary.innerHTML = `
      <div class="summary-icon" aria-hidden="true">📋</div>
      <h3>Bugünün Özeti</h3>
      <p class="task-status">✅ ${approved} tamamlandı<br>🔎 ${pending} kontrol bekliyor<br>⭐ ${available} yapılabilir</p>
      <p class="summary-balance">🪙 ${state.balance} Tren Parası</p>
    `;
    grid.appendChild(summary);
  }
}

function isRetryRecord(record) {
  return record && record.status === "available" && ["incomplete", "accidental"].includes(record.reviewResult);
}

function taskStatusIcon(record) {
  if (record.status === "pendingApproval") return "🔎";
  if (record.status === "approved") return "✅";
  if (record.reviewResult === "incomplete") return "↩️";
  if (record.reviewResult === "accidental") return "↩️";
  return "⭐";
}

function taskStatusText(record) {
  if (record.status === "pendingApproval") return "Kontrol bekliyor";
  if (record.status === "approved") return "Onaylandı";
  if (record.reviewResult === "incomplete") return "Birlikte tamamlayıp yeniden deneyebilirsin";
  if (record.reviewResult === "accidental") return "Hazır olduğunda tekrar yapabilirsin";
  return "Yapılabilir";
}

function taskButtonText(record) {
  if (record.status === "pendingApproval") return "Kontrol bekliyor";
  if (record.status === "approved") return "Onaylandı";
  if (isRetryRecord(record)) return "Yeniden dene";
  return "Yaptım";
}

function requestTaskApproval(taskId, card) {
  const task = state.tasks.find((item) => item.id === taskId);
  const completions = todayCompletions();
  const existing = completions[taskId];
  if (!task || existing?.status === "pendingApproval" || existing?.status === "approved") return;
  pushUndo(`${task.title} kontrol bekliyor`);
  completions[taskId] = {
    status: "pendingApproval",
    requestedAt: new Date().toISOString(),
    reward: 0
  };
  addTransaction("task_submitted", `${task.title} kontrol için gönderildi`, 0, {
    source: "task",
    taskId,
    result: "pendingApproval"
  });
  saveState();
  card.classList.add("sparkle");
  speak("Görevin kontrol için gönderildi.");
  render();
  showToast("Görev kontrol için gönderildi.");
}

function reviewTask(taskId, result, button) {
  if (!isAdultSessionActive()) {
    lockAdult();
    showToast("Yetişkin PIN'i gerekir.");
    return;
  }
  if (reviewLocks.has(taskId)) return;
  const task = state.tasks.find((item) => item.id === taskId);
  const completions = todayCompletions();
  const record = completions[taskId];
  if (!task || !record || record.status !== "pendingApproval") return;
  reviewLocks.add(taskId);
  if (button) button.disabled = true;

  const adult = currentAdult();
  pushUndo(`${task.title} değerlendirildi`);
  if (result === "completed") {
    const reward = Math.min(Math.max(0, Number(task.reward) || 0), remainingTaskPoints());
    record.status = "approved";
    record.reviewResult = "completed";
    record.reviewedAt = new Date().toISOString();
    record.approvedByAdultId = adult.id;
    record.approvedBy = adult.name;
    record.reward = reward;
    state.balance += reward;
    addTransaction("task_approved", `${task.title} onaylandı`, reward, {
      source: "task",
      taskId,
      result: "completed",
      caregiverId: adult.id,
      approvedBy: adult.name,
      time: istanbulTimeText()
    });
    addApprovalHistory(taskId, "completed", adult, reward, `${task.title} onaylandı`);
    speak(reward > 0 ? "Görev tamamlandı. Bir Tren Parası kazandın!" : "Görev tamamlandı.");
    showToast(reward > 0 ? `${task.title}: ${reward} Tren Parası` : `${task.title}: onaylandı`);
    playSuccess();
  } else {
    const isAccidental = result === "accidental";
    completions[taskId] = {
      status: "available",
      requestedAt: record.requestedAt,
      reviewedAt: new Date().toISOString(),
      reviewResult: result,
      approvedByAdultId: adult.id,
      approvedBy: adult.name,
      reward: 0
    };
    addTransaction(isAccidental ? "task_reopened_accidental" : "task_reopened_incomplete", `${task.title} yeniden denenebilir`, 0, {
      source: "task",
      taskId,
      result,
      caregiverId: adult.id,
      approvedBy: adult.name,
      time: istanbulTimeText()
    });
    addApprovalHistory(taskId, result, adult, 0, `${task.title} yeniden denenebilir`);
    speak(isAccidental
      ? "İşaret kaldırıldı. Hazır olduğunda tekrar yapabilirsin."
      : "Birlikte tamamlayıp yeniden deneyebilirsin.");
    showToast("Görev yeniden denenebilir.");
  }
  saveState();
  render();
  window.setTimeout(() => reviewLocks.delete(taskId), 500);
}

function addApprovalHistory(taskId, result, adult, amount, description) {
  state.approvalHistory.push({
    id: uid(),
    taskId,
    date: istanbulDateKey(),
    timestamp: new Date().toISOString(),
    result,
    amount,
    caregiverId: adult ? adult.id : "",
    caregiverName: adult ? adult.name : "",
    description
  });
}

function renderShop() {
  const grid = $("shopGrid");
  grid.innerHTML = "";
  state.shopItems.filter((item) => item.active).forEach((item) => {
    const button = document.createElement("button");
    button.className = "shop-item";
    button.type = "button";
    button.disabled = state.balance < item.price;
    button.innerHTML = `
      <span class="big">${item.icon}</span>
      <span><strong>${escapeHtml(item.title)}</strong><br><small>${item.price} Tren Parası</small></span>
    `;
    button.addEventListener("click", () => buyItem(item.id));
    grid.appendChild(button);
  });
}

function buyItem(itemId) {
  const item = state.shopItems.find((shopItem) => shopItem.id === itemId);
  if (!item || !item.active) return;
  if (state.balance < item.price) {
    showToast("Bunun için biraz daha Tren Parası lazım.");
    speak("Bunun için biraz daha Tren Parası lazım.");
    return;
  }
  pushUndo(`${item.title} satın alındı`);
  state.balance -= item.price;
  const inventoryItem = {
    id: uid(),
    shopItemId: item.id,
    title: item.title,
    icon: item.icon,
    type: item.type,
    placed: false
  };
  state.inventory.push(inventoryItem);
  if (item.type === "wagon") {
    state.train.wagons.push(inventoryItem.icon);
    inventoryItem.placed = true;
  }
  addTransaction("purchase", item.title, -item.price, { source: "shop", shopItemId: item.id });
  saveState();
  render();
  speak(`${item.title} alındı.`);
  showPurchaseDialog(inventoryItem);
}

function showPurchaseDialog(item) {
  pendingPurchaseInventoryId = item.placed ? null : item.id;
  $("purchaseTitle").textContent = `${item.icon} Alındı`;
  $("purchaseText").textContent = item.placed
    ? "Vagon trenin arkasına eklendi."
    : "Bu parçayı şimdi haritaya yerleştirebilirsin.";
  $("placeNowButton").classList.toggle("is-hidden", item.placed);
  if (!$("purchaseDialog").open) $("purchaseDialog").showModal();
}

function renderWorld() {
  renderMap();
  renderInventory();
  $("selectedPieceText").textContent = selectedInventoryId
    ? "Parçanın parlayan uygun yerine dokun."
    : "Yerleştirmek için envanterden parça seç.";
  $("cancelPlacement").classList.toggle("is-hidden", !selectedInventoryId);
}

function renderMap() {
  const map = $("worldMap");
  map.innerHTML = "";
  addWorldDecoration(map);
  addTracks(map);
  MAP_POINTS.forEach((point) => addPlacementPoint(map, point));
  addPlacedPieces(map);
  addTrain(map);
}

function addWorldDecoration(map) {
  [
    ["cloud", 105, 52],
    ["cloud", 520, 38],
    ["cloud", 1010, 60]
  ].forEach(([className, x, y]) => {
    const el = document.createElement("div");
    el.className = className;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    map.appendChild(el);
  });
  [
    [660, 126],
    [1110, 106]
  ].forEach(([x, bottom]) => {
    const hill = document.createElement("div");
    hill.className = "hill";
    hill.style.left = `${x}px`;
    hill.style.bottom = `${bottom}px`;
    map.appendChild(hill);
  });
  const river = document.createElement("div");
  river.className = "river";
  river.style.left = "475px";
  map.appendChild(river);
  const station = document.createElement("div");
  station.className = "station-zone";
  station.style.left = "985px";
  station.style.top = "185px";
  map.appendChild(station);
}

function addTracks(map) {
  const routeEnd = 180 + validRouteSegments() * 110;
  const line = document.createElement("div");
  line.className = "track-line";
  line.style.left = "50px";
  line.style.top = "268px";
  line.style.width = `${Math.max(260, routeEnd)}px`;
  map.appendChild(line);
  for (let x = 65; x < Math.max(310, routeEnd + 35); x += 35) {
    const sleeper = document.createElement("div");
    sleeper.className = "sleeper";
    sleeper.style.left = `${x}px`;
    sleeper.style.top = "256px";
    map.appendChild(sleeper);
  }
}

function addPlacementPoint(map, point) {
  const filled = state.map.placed.some((item) => item.pointId === point.id);
  const selected = selectedInventoryId ? state.inventory.find((item) => item.id === selectedInventoryId) : null;
  const valid = selected && !filled && canPlaceTypeAt(selected.type, point.type);
  const button = document.createElement("button");
  button.className = `placement${valid ? " is-valid" : ""}${filled ? " is-filled" : ""}`;
  button.type = "button";
  button.style.left = `${point.x}px`;
  button.style.top = `${point.y}px`;
  button.textContent = filled ? "" : pointHint(point.type);
  button.disabled = !valid;
  button.setAttribute("aria-label", `${point.type} yerleştirme noktası`);
  button.addEventListener("click", () => placeSelectedAt(point.id));
  map.appendChild(button);
}

function addPlacedPieces(map) {
  state.map.placed.forEach((placed) => {
    const point = MAP_POINTS.find((item) => item.id === placed.pointId);
    if (!point) return;
    const el = document.createElement("div");
    el.className = `placed-piece ${placed.type}`;
    el.style.left = `${point.x - 2}px`;
    el.style.top = `${point.y - 2}px`;
    el.textContent = placed.icon;
    map.appendChild(el);
  });
}

function addTrain(map) {
  const train = document.createElement("div");
  train.className = "train";
  train.id = "train";
  train.style.setProperty("--train-x", "0px");
  const wagons = state.train.wagons.slice(0, 5).map((wagon) => `<span>${wagon}</span>`).join("");
  train.innerHTML = `<span>${state.train.locomotive}</span>${wagons}`;
  map.appendChild(train);
}

function validRouteSegments() {
  let segments = 2;
  const required = ["rail-1", "rail-2", "river", "rail-3", "mountain", "rail-4", "station-1", "switch-1"];
  for (const pointId of required) {
    const placed = state.map.placed.find((item) => item.pointId === pointId);
    if (!placed) break;
    segments += 1;
  }
  return segments;
}

function animateTrain(force) {
  if (state.settings.reduceMotion && !force) return;
  const train = $("train");
  if (!train) return;
  train.style.transitionDuration = state.settings.reduceMotion ? "900ms" : "2600ms";
  train.style.setProperty("--train-x", "0px");
  window.setTimeout(() => {
    train.style.setProperty("--train-x", `${validRouteSegments() * 105}px`);
  }, 80);
}

function renderInventory() {
  const list = $("inventoryList");
  const unplaced = state.inventory.filter((item) => !item.placed);
  list.innerHTML = "";
  if (unplaced.length === 0) {
    list.innerHTML = `<p class="helper-text">Yerleştirilecek parça yok. Mağazadan parça alabilirsin.</p>`;
    return;
  }
  unplaced.forEach((item) => {
    const button = document.createElement("button");
    button.className = "inventory-item";
    button.type = "button";
    button.innerHTML = `<span class="big">${item.icon}</span><span><strong>${escapeHtml(item.title)}</strong><br><small>Yerleştir</small></span>`;
    button.addEventListener("click", () => beginPlacement(item.id));
    list.appendChild(button);
  });
}

function beginPlacement(inventoryId) {
  const item = state.inventory.find((inventoryItem) => inventoryItem.id === inventoryId && !inventoryItem.placed);
  if (!item) return;
  selectedInventoryId = item.id;
  if ($("purchaseDialog").open) $("purchaseDialog").close();
  switchView("world");
  renderWorld();
}

function clearPlacement() {
  selectedInventoryId = null;
  renderWorld();
}

function placeSelectedAt(pointId) {
  const item = state.inventory.find((inventoryItem) => inventoryItem.id === selectedInventoryId && !inventoryItem.placed);
  const point = MAP_POINTS.find((mapPoint) => mapPoint.id === pointId);
  if (!item || !point || !canPlaceTypeAt(item.type, point.type)) return;
  if (state.map.placed.some((placed) => placed.pointId === pointId)) return;
  pushUndo(`${item.title} yerleştirildi`);
  item.placed = true;
  state.map.placed.push({
    id: uid(),
    inventoryId: item.id,
    pointId,
    type: item.type,
    icon: item.icon,
    title: item.title,
    at: new Date().toISOString()
  });
  if (item.type === "switch") state.map.unlockedBranch = true;
  selectedInventoryId = null;
  saveState();
  render();
  showToast("Parça yerleştirildi.", true);
  playSuccess();
}

function canPlaceTypeAt(itemType, pointType) {
  if (itemType === "decor") return pointType === "decor";
  if (itemType === "signal") return pointType === "signal";
  return itemType === pointType;
}

function pointHint(type) {
  return {
    rail: "🛤️",
    bridge: "🌉",
    tunnel: "⛰️",
    station: "🚉",
    switch: "🔀",
    decor: "＋",
    signal: "🚦"
  }[type] || "＋";
}

async function handlePinSubmit() {
  const value = $("pinInput").value.trim();
  if (!/^\d{4}$/.test(value)) {
    showToast("PIN tam olarak 4 rakam olmalı.");
    return;
  }
  const hash = await hashPin(value);
  if (!state.parentPinHash) {
    pushUndo("Ebeveyn PIN'i belirlendi");
    state.parentPinHash = hash;
    saveState();
    parentUnlocked = true;
    const mother = state.adultProfiles.find((adult) => adult.id === "mother");
    if (mother) unlockAdult(mother.id);
    $("pinInput").value = "";
    renderParent();
    showToast("Ebeveyn PIN'i belirlendi.");
    return;
  }
  if (acceptAndPromoteLegacyPin(hash)) {
    parentUnlocked = true;
    const mother = state.adultProfiles.find((adult) => adult.id === "mother" && adult.active);
    if (mother) unlockAdult(mother.id);
    $("pinInput").value = "";
    renderParent();
  } else {
    showToast("PIN yanlış.");
  }
}

async function handleAdultPinSubmit() {
  const profileId = $("adultProfileSelect").value;
  const profile = state.adultProfiles.find((adult) => adult.id === profileId && adult.active);
  const value = $("adultPinInput").value.trim();
  if (!profile) {
    showToast("Aktif yetişkin profili seçin.");
    return;
  }
  if (!/^\d{4}$/.test(value)) {
    showToast("PIN tam olarak 4 rakam olmalı.");
    return;
  }
  if (!state.parentPinHash) {
    showToast("Önce Ebeveyn PIN'ini belirleyin.");
    return;
  }
  const hash = await hashPin(value);
  if (acceptAndPromoteLegacyPin(hash)) {
    unlockAdult(profile.id);
  } else {
    showToast("PIN yanlış.");
  }
}

function acceptAndPromoteLegacyPin(hash) {
  if (hash === state.parentPinHash) return true;
  const legacyProfile = state.adultProfiles.find((adult) => adult.pinHash && adult.pinHash === hash);
  if (!legacyProfile) return false;
  // Eski uygulamadaki profil PIN'i ilk başarılı girişte tek Ebeveyn PIN'i olur.
  state.parentPinHash = hash;
  state.settings = { ...state.settings, singleParentPinMigration: 1 };
  saveState();
  return true;
}

function resetParentPin() {
  if (window.prompt("PIN'i sıfırlamak için PIN SIFIRLA yazın.") !== "PIN SIFIRLA") return;
  state.parentPinHash = "";
  state.adultProfiles.forEach((adult) => { adult.pinHash = ""; });
  parentUnlocked = false;
  lockAdult();
  saveState();
  showToast("Ebeveyn PIN'i sıfırlandı. Görev ve puanlar korundu.");
}

function migrateToSingleParentPin() {
  if (state.settings?.singleParentPinMigration === 1) return;
  if (!state.parentPinHash) {
    const legacyProfile = state.adultProfiles.find((adult) => adult.pinHash);
    if (legacyProfile) state.parentPinHash = legacyProfile.pinHash;
  }
  state.settings = { ...state.settings, singleParentPinMigration: 1 };
  saveState();
}

function unlockAdult(profileId) {
  activeAdultId = profileId;
  adultSessionExpiresAt = Date.now() + ADULT_SESSION_MS;
  $("adultPinInput").value = "";
  renderParent();
}

function lockAdult() {
  activeAdultId = "";
  adultSessionExpiresAt = 0;
  reviewLocks.clear();
  selectedBonusIds.clear();
  bonusCommitLock = false;
  renderParent();
}

function isAdultSessionActive() {
  if (!activeAdultId || Date.now() > adultSessionExpiresAt) return false;
  return Boolean(currentAdult());
}

function currentAdult() {
  return state.adultProfiles.find((adult) => adult.id === activeAdultId && adult.active) || null;
}

async function hashPin(pin) {
  const value = `ruzgar-gorev-treni:${pin}`;
  if (globalThis.crypto?.subtle) {
    try {
      const data = new TextEncoder().encode(value);
      const digest = await crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
    } catch {
      // Yerel HTTP adreslerinde subtle mevcut görünüp işlem başarısız olabilir.
    }
  }
  return sha256Fallback(value);
}

// Web Crypto yalnızca güvenli bağlamlarda kullanılabilir. Bu küçük SHA-256
// yedeği aynı hex çıktıyı üretir; böylece daha önce Web Crypto ile kaydedilen
// PIN hash'leri yerel HTTP sunucularında da doğrulanabilir.
function sha256Fallback(text) {
  const bytes = new TextEncoder().encode(text);
  const bitLength = bytes.length * 8;
  const paddedLength = (((bytes.length + 9 + 63) >> 6) << 6);
  const data = new Uint8Array(paddedLength);
  data.set(bytes);
  data[bytes.length] = 0x80;
  const view = new DataView(data.buffer);
  view.setUint32(paddedLength - 4, bitLength >>> 0);
  view.setUint32(paddedLength - 8, Math.floor(bitLength / 0x100000000));
  const hash = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  const constants = [0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const rotate = (value, amount) => (value >>> amount) | (value << (32 - amount));
  for (let offset = 0; offset < paddedLength; offset += 64) {
    const words = new Uint32Array(64);
    for (let index = 0; index < 16; index += 1) words[index] = view.getUint32(offset + index * 4);
    for (let index = 16; index < 64; index += 1) {
      const a = words[index - 15], b = words[index - 2];
      words[index] = (((rotate(a, 7) ^ rotate(a, 18) ^ (a >>> 3)) + words[index - 7]) + ((rotate(b, 17) ^ rotate(b, 19) ^ (b >>> 10)) + words[index - 16])) >>> 0;
    }
    let [a,b,c,d,e,f,g,h] = hash;
    for (let index = 0; index < 64; index += 1) {
      const s1 = rotate(e, 6) ^ rotate(e, 11) ^ rotate(e, 25);
      const choice = (e & f) ^ (~e & g);
      const temp1 = (h + s1 + choice + constants[index] + words[index]) >>> 0;
      const s0 = rotate(a, 2) ^ rotate(a, 13) ^ rotate(a, 22);
      const majority = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (s0 + majority) >>> 0;
      h=g; g=f; f=e; e=(d + temp1) >>> 0; d=c; c=b; b=a; a=(temp1 + temp2) >>> 0;
    }
    hash[0]=(hash[0]+a)>>>0; hash[1]=(hash[1]+b)>>>0; hash[2]=(hash[2]+c)>>>0; hash[3]=(hash[3]+d)>>>0;
    hash[4]=(hash[4]+e)>>>0; hash[5]=(hash[5]+f)>>>0; hash[6]=(hash[6]+g)>>>0; hash[7]=(hash[7]+h)>>>0;
  }
  return hash.map((value) => value.toString(16).padStart(8, "0")).join("");
}

function renderParent() {
  const hasPin = Boolean(state.parentPinHash);
  const adultActive = isAdultSessionActive();
  $("pinPanel").classList.toggle("is-hidden", parentUnlocked);
  $("parentControls").classList.toggle("is-hidden", !parentUnlocked);
  $("parentLockButton").classList.toggle("is-hidden", !parentUnlocked);
  // Yeni bir telefonda önce tek Ebeveyn PIN'i kurulmalıdır. Onay girişi
  // PIN oluşmadan görünürse iki ayrı PIN varmış gibi anlaşılabiliyordu.
  $("adultLoginPanel").classList.toggle("is-hidden", !hasPin || adultActive);
  $("adultControls").classList.toggle("is-hidden", !adultActive);
  $("adultLockButton").classList.toggle("is-hidden", !adultActive);
  $("pinTitle").textContent = hasPin ? "Ebeveyn PIN'i" : "Ebeveyn PIN'i belirle";
  $("pinHint").textContent = hasPin
    ? "Ebeveyn alanını açmak için 4 haneli PIN'i girin."
    : "İlk kullanım için 4 haneli Ebeveyn PIN'i belirleyin.";
  renderAdultProfileSelect();
  if (parentUnlocked) {
    renderIconOptions();
    renderTaskAdminList();
    renderShopAdminList();
    renderAdultProfileAdminList();
    renderBonusDefinitionAdminList();
    renderSettings();
    renderTransactions();
  }
  if (adultActive) {
    renderApprovalSummary();
    renderPendingApprovals();
    renderBonuses();
  }
}

function renderAdultProfileSelect() {
  const select = $("adultProfileSelect");
  const activeProfiles = state.adultProfiles.filter((adult) => adult.active);
  const previous = select.value;
  select.innerHTML = "";
  activeProfiles.forEach((adult) => {
    const option = document.createElement("option");
    option.value = adult.id;
    option.textContent = adult.pinHash ? adult.name : `${adult.name} - PIN belirle`;
    select.appendChild(option);
  });
  if (activeProfiles.some((adult) => adult.id === previous)) select.value = previous;
}

function renderApprovalSummary() {
  const adult = currentAdult();
  $("activeAdultName").textContent = adult ? adult.name : "";
  $("dailyLimitText").textContent = `Görev ${taskPointsToday()}/${MAX_DAILY_TASK_POINTS} · Bonus ${bonusPointsToday()}/${MAX_DAILY_BONUS_POINTS} · Toplam ${totalPointsToday()}/${MAX_DAILY_TOTAL_POINTS}`;
}

function renderPendingApprovals() {
  const list = $("pendingApprovalList");
  const pending = state.tasks.filter((task) => task.active && taskRecord(task.id).status === "pendingApproval");
  list.innerHTML = "";
  if (pending.length === 0) {
    list.innerHTML = `<p class="helper-text">Bekleyen görev yok.</p>`;
    return;
  }
  pending.forEach((task) => {
    const record = taskRecord(task.id);
    const row = document.createElement("div");
    row.className = "approval-row";
    row.innerHTML = `
      <div>
        <strong>${task.icon} ${escapeHtml(task.title)}</strong>
        <small>${istanbulDateKey(new Date(record.requestedAt || Date.now()))} · ${istanbulTimeText(new Date(record.requestedAt || Date.now()))}</small>
      </div>
      <div class="review-actions">
        <button class="primary-button" type="button" data-result="completed" aria-label="Görevi tamamlandı olarak onayla">✓ Onayla</button>
        <button class="secondary-button" type="button" data-result="incomplete" aria-label="Görevi eksik olarak yeniden aç">↻ Eksik</button>
        <button class="secondary-button" type="button" data-result="accidental" aria-label="Yanlışlıkla işaretlenen görevi yeniden aç">○ Yanlış</button>
      </div>
    `;
    row.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => reviewTask(task.id, button.dataset.result, button));
    });
    list.appendChild(row);
  });
}

function renderBonuses() {
  const list = $("bonusList");
  const dayBonuses = todayBonuses();
  const remaining = remainingBonusPoints();
  selectedBonusIds = new Set(Array.from(selectedBonusIds).filter((id) => {
    const bonus = state.bonuses.find((item) => item.id === id && item.active);
    return bonus && !dayBonuses[id];
  }).slice(0, remaining));
  $("selectedBonusText").textContent = `${bonusPointsToday() + selectedBonusIds.size}/${MAX_DAILY_BONUS_POINTS} bonus seçildi`;
  $("confirmBonusesButton").disabled = selectedBonusIds.size === 0 || remaining <= 0 || bonusCommitLock;
  list.innerHTML = "";
  state.bonuses.filter((bonus) => bonus.active).forEach((bonus) => {
    const granted = dayBonuses[bonus.id];
    const selected = selectedBonusIds.has(bonus.id);
    const disabled = Boolean(granted) || (!selected && selectedBonusIds.size >= remaining) || remaining <= 0;
    const row = document.createElement("div");
    row.className = `bonus-row${granted ? " is-granted" : ""}${selected ? " is-selected" : ""}`;
    row.innerHTML = `
      <button class="bonus-select" type="button" ${disabled ? "disabled" : ""} aria-pressed="${selected ? "true" : "false"}">
        <span class="bonus-icon">${bonus.icon}</span>
        <strong>${escapeHtml(bonus.shortTitle || shortBonusTitle(bonus))}</strong>
        <span class="bonus-plus">${granted ? "Verildi" : "+1"}</span>
        <span class="bonus-check" aria-hidden="true">${selected || granted ? "✓" : ""}</span>
      </button>
      <button class="bonus-info-button" type="button" aria-label="${escapeHtml(bonus.title)} açıklamasını göster">i</button>
      ${granted ? `<em>Verildi: ${escapeHtml(granted.approvedBy || "")}</em>` : ""}
    `;
    row.querySelector(".bonus-select").addEventListener("click", () => toggleBonusSelection(bonus.id));
    row.querySelector(".bonus-info-button").addEventListener("click", (event) => {
      event.stopPropagation();
      openBonusInfo(bonus, event.currentTarget);
    });
    list.appendChild(row);
  });
}

function openBonusInfo(bonus, trigger) {
  lastBonusInfoButton = trigger;
  $("bonusInfoTitle").textContent = bonus.title;
  $("bonusInfoText").textContent = bonus.adultDescription;
  const dialog = $("bonusInfoDialog");
  if (!dialog.open) dialog.showModal();
  $("closeBonusInfo").focus();
}

function closeBonusInfo() {
  const dialog = $("bonusInfoDialog");
  if (dialog.open) dialog.close();
}

function toggleBonusSelection(bonusId) {
  if (!isAdultSessionActive()) {
    lockAdult();
    showToast("Yetişkin PIN'i gerekir.");
    return;
  }
  const bonus = state.bonuses.find((item) => item.id === bonusId && item.active);
  const dayBonuses = todayBonuses();
  if (!bonus || dayBonuses[bonusId]) return;
  if (selectedBonusIds.has(bonusId)) selectedBonusIds.delete(bonusId);
  else if (selectedBonusIds.size < remainingBonusPoints()) selectedBonusIds.add(bonusId);
  renderBonuses();
}

async function confirmSelectedBonuses() {
  if (bonusCommitLock) return;
  bonusCommitLock = true;
  if (!isAdultSessionActive()) {
    bonusCommitLock = false;
    lockAdult();
    showToast("Yetişkin PIN'i gerekir.");
    return;
  }
  const adult = currentAdult();
  const pin = $("bonusConfirmPinInput").value.trim();
  if (!/^\d{4}$/.test(pin)) {
    bonusCommitLock = false;
    showToast("Bonus onayı için 4 haneli PIN'i girin.");
    return;
  }
  if (!acceptAndPromoteLegacyPin(await hashPin(pin))) {
    bonusCommitLock = false;
    showToast("Bonus onayı için PIN doğru değil.");
    return;
  }
  const selected = Array.from(selectedBonusIds)
    .map((id) => state.bonuses.find((bonus) => bonus.id === id && bonus.active))
    .filter(Boolean)
    .filter((bonus) => !todayBonuses()[bonus.id])
    .slice(0, remainingBonusPoints());
  if (selected.length === 0) {
    bonusCommitLock = false;
    showToast("Onaylanacak bonus seçilmedi.");
    return;
  }
  pushUndo("Bonuslar onaylandı");
  const awarded = [];
  selected.forEach((bonus) => {
    if (remainingBonusPoints() <= 0 || todayBonuses()[bonus.id]) return;
    const amount = Math.min(1, remainingBonusPoints());
    state.balance += amount;
    todayBonuses()[bonus.id] = {
      id: uid(),
      bonusId: bonus.id,
      amount,
      at: new Date().toISOString(),
      approvedByAdultId: adult.id,
      approvedBy: adult.name
    };
    addTransaction("behavior_bonus", bonus.title, amount, {
      source: "bonus",
      bonusId: bonus.id,
      caregiverId: adult.id,
      approvedBy: adult.name,
      time: istanbulTimeText()
    });
    awarded.push(bonus);
  });
  saveState();
  selectedBonusIds.clear();
  $("bonusConfirmPinInput").value = "";
  bonusCommitLock = false;
  render();
  narrateBonusMessages(awarded);
  if (awarded.length) {
    showToast(`${awarded.length} bonus onaylandı.`);
    playSuccess();
  }
}

function narrateBonusMessages(bonuses) {
  bonuses.forEach((bonus, index) => {
    window.setTimeout(() => {
      showToast(bonus.childMessage);
      speak(bonus.childMessage);
    }, index * 1800);
  });
}

function renderIconOptions() {
  const select = $("taskIconInput");
  if (select.childElementCount) return;
  TASK_ICONS.forEach((icon) => {
    const option = document.createElement("option");
    option.value = icon;
    option.textContent = icon;
    select.appendChild(option);
  });
}

function renderTaskAdminList() {
  const list = $("taskAdminList");
  list.innerHTML = "";
  state.tasks.forEach((task) => {
    const row = document.createElement("div");
    row.className = "admin-row";
    row.innerHTML = `
      <div><strong>${task.icon} ${escapeHtml(task.title)}</strong><br><small>${task.active ? "Aktif" : "Pasif"} · ${task.reward} Tren Parası</small></div>
      <div class="admin-actions"><button class="secondary-button" type="button">Düzenle</button></div>
    `;
    row.querySelector("button").addEventListener("click", () => fillTaskForm(task.id));
    list.appendChild(row);
  });
}

function fillTaskForm(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  $("taskId").value = task.id;
  $("taskTitleInput").value = task.title;
  $("taskIconInput").value = task.icon;
  $("taskRewardInput").value = task.reward;
  $("taskActiveInput").checked = task.active;
}

function clearTaskForm() {
  $("taskId").value = "";
  $("taskTitleInput").value = "";
  $("taskIconInput").value = TASK_ICONS[0];
  $("taskRewardInput").value = "1";
  $("taskActiveInput").checked = true;
}

function saveTaskFromForm(event) {
  event.preventDefault();
  const title = $("taskTitleInput").value.trim();
  if (!title) return;
  pushUndo("Görev kaydedildi");
  const id = $("taskId").value || uid();
  const existing = state.tasks.find((task) => task.id === id);
  const next = {
    id,
    title,
    icon: $("taskIconInput").value,
    reward: Math.max(0, Number($("taskRewardInput").value) || 0),
    active: $("taskActiveInput").checked
  };
  if (existing) Object.assign(existing, next);
  else state.tasks.push(next);
  clearTaskForm();
  render();
  showToast("Görev kaydedildi.");
}

function deleteTaskFromForm() {
  const id = $("taskId").value;
  if (!id) return;
  pushUndo("Görev silindi");
  state.tasks = state.tasks.filter((task) => task.id !== id);
  clearTaskForm();
  render();
  showToast("Görev silindi.");
}

function renderShopAdminList() {
  const list = $("shopAdminList");
  list.innerHTML = "";
  state.shopItems.forEach((item) => {
    const row = document.createElement("div");
    row.className = "admin-row";
    row.innerHTML = `
      <div><strong>${item.icon} ${escapeHtml(item.title)}</strong><br><small>${item.active ? "Aktif" : "Pasif"}</small></div>
      <div class="admin-actions">
        <input aria-label="${escapeHtml(item.title)} fiyatı" min="0" type="number" value="${item.price}" />
        <button class="secondary-button" type="button">${item.active ? "Pasif" : "Aktif"}</button>
      </div>
    `;
    row.querySelector("input").addEventListener("change", (event) => {
      pushUndo("Ürün fiyatı değişti");
      item.price = Math.max(0, Number(event.target.value) || 0);
      saveState();
      render();
    });
    row.querySelector("button").addEventListener("click", () => {
      pushUndo("Ürün durumu değişti");
      item.active = !item.active;
      saveState();
      render();
    });
    list.appendChild(row);
  });
}

function renderAdultProfileAdminList() {
  const list = $("adultProfileAdminList");
  list.innerHTML = "";
  state.adultProfiles.forEach((adult) => {
    const row = document.createElement("div");
    row.className = "admin-row";
    row.innerHTML = `
      <div><strong>${escapeHtml(adult.name)}</strong><br><small>${adult.active ? "Aktif" : "Pasif"} · ${adult.pinHash ? "PIN var" : "PIN yok"}</small></div>
      <div class="admin-actions"><button class="secondary-button" type="button">Düzenle</button></div>
    `;
    row.querySelector("button").addEventListener("click", () => fillAdultProfileForm(adult.id));
    list.appendChild(row);
  });
}

function fillAdultProfileForm(profileId) {
  const adult = state.adultProfiles.find((item) => item.id === profileId);
  if (!adult) return;
  $("adultProfileId").value = adult.id;
  $("adultProfileNameInput").value = adult.name;
  $("adultProfilePinInput").value = "";
  $("adultProfileActiveInput").checked = adult.active;
}

function clearAdultProfileForm() {
  $("adultProfileId").value = "";
  $("adultProfileNameInput").value = "";
  $("adultProfilePinInput").value = "";
  $("adultProfileActiveInput").checked = true;
}

async function saveAdultProfileFromForm(event) {
  event.preventDefault();
  const name = $("adultProfileNameInput").value.trim();
  const pin = $("adultProfilePinInput").value.trim();
  if (!name) return;
  if (pin && (pin.length < 4 || !/^\d+$/.test(pin))) {
    showToast("Yetişkin PIN'i en az 4 rakam olsun.");
    return;
  }
  pushUndo("Yetişkin profili kaydedildi");
  const id = $("adultProfileId").value || uid();
  const existing = state.adultProfiles.find((adult) => adult.id === id);
  const next = {
    id,
    name,
    active: $("adultProfileActiveInput").checked
  };
  if (pin) next.pinHash = await hashPin(pin);
  if (existing) Object.assign(existing, next);
  else state.adultProfiles.push({ pinHash: "", ...next });
  clearAdultProfileForm();
  render();
  showToast("Yetişkin profili kaydedildi.");
}

function deactivateAdultProfileFromForm() {
  const id = $("adultProfileId").value;
  const adult = state.adultProfiles.find((item) => item.id === id);
  if (!adult) return;
  pushUndo("Yetişkin profili pasifleştirildi");
  adult.active = false;
  if (activeAdultId === adult.id) lockAdult();
  clearAdultProfileForm();
  render();
  showToast("Yetişkin profili pasifleştirildi.");
}

function renderBonusDefinitionAdminList() {
  const list = $("bonusDefinitionAdminList");
  list.innerHTML = "";
  state.bonuses.forEach((bonus) => {
    const row = document.createElement("div");
    row.className = "admin-row";
    row.innerHTML = `
      <div><strong>${bonus.icon} ${escapeHtml(bonus.title)}</strong><br><small>${bonus.active ? "Aktif" : "Pasif"} · ${escapeHtml(bonus.adultDescription)}</small></div>
      <div class="admin-actions"><button class="secondary-button" type="button">Düzenle</button></div>
    `;
    row.querySelector("button").addEventListener("click", () => fillBonusDefinitionForm(bonus.id));
    list.appendChild(row);
  });
}

function fillBonusDefinitionForm(bonusId) {
  const bonus = state.bonuses.find((item) => item.id === bonusId);
  if (!bonus) return;
  $("bonusDefinitionId").value = bonus.id;
  $("bonusTitleInput").value = bonus.title;
  $("bonusAdultDescriptionInput").value = bonus.adultDescription;
  $("bonusChildMessageInput").value = bonus.childMessage;
  $("bonusActiveInput").checked = bonus.active;
}

function clearBonusDefinitionForm() {
  $("bonusDefinitionId").value = "";
  $("bonusTitleInput").value = "";
  $("bonusAdultDescriptionInput").value = "";
  $("bonusChildMessageInput").value = "";
  $("bonusActiveInput").checked = true;
}

function saveBonusDefinitionFromForm(event) {
  event.preventDefault();
  const id = $("bonusDefinitionId").value;
  const bonus = state.bonuses.find((item) => item.id === id);
  if (!bonus) return;
  const title = $("bonusTitleInput").value.trim();
  const adultDescription = $("bonusAdultDescriptionInput").value.trim();
  const childMessage = $("bonusChildMessageInput").value.trim();
  if (!title || !adultDescription || !childMessage) {
    showToast("Bonus başlığı ve açıklamaları dolu olmalı.");
    return;
  }
  pushUndo("Bonus kategorisi kaydedildi");
  bonus.title = title;
  bonus.shortTitle = title;
  bonus.adultDescription = adultDescription;
  bonus.childMessage = childMessage;
  bonus.active = $("bonusActiveInput").checked;
  clearBonusDefinitionForm();
  render();
  showToast("Bonus kategorisi kaydedildi.");
}

function renderSettings() {
  $("soundsToggle").checked = state.settings.sounds;
  $("reduceMotionToggle").checked = state.settings.reduceMotion;
  $("balanceAdjustInput").value = state.balance;
}

function adjustBalance() {
  const next = Math.max(0, Number($("balanceAdjustInput").value) || 0);
  pushUndo("Bakiye düzeltildi");
  state.balance = next;
  addTransaction("manual_adjustment", "Yönetici bakiye düzeltmesi", 0, { source: "admin" });
  render();
  showToast("Bakiye ayarlandı.");
}

function renderTransactions() {
  const log = $("transactionLog");
  log.innerHTML = "";
  if (state.transactions.length === 0) {
    log.innerHTML = `<p class="helper-text">Henüz işlem yok.</p>`;
    return;
  }
  state.transactions.slice(0, 80).forEach((tx) => {
    const item = document.createElement("div");
    item.className = "log-item";
    const sign = tx.amount > 0 ? "+" : "";
    const adult = tx.approvedBy ? ` · ${tx.approvedBy}` : tx.caregiverId ? ` · ${tx.caregiverId}` : "";
    const time = tx.time ? ` · ${tx.time}` : "";
    item.textContent = `${tx.date}${time}${adult} · ${tx.type} · ${tx.description} · ${sign}${tx.amount} · Bakiye ${tx.balanceAfter}`;
    log.appendChild(item);
  });
}

function exportJson() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ruzgar-gorev-treni-yedek-${istanbulDateKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function importJson(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      pushUndo("JSON geri yüklendi");
      state = normalizeState(JSON.parse(reader.result));
      saveState();
      parentUnlocked = true;
      lockAdult();
      render();
      showToast("Yedek geri yüklendi.");
    } catch {
      showToast("JSON dosyası okunamadı.");
    } finally {
      event.target.value = "";
    }
  };
  reader.readAsText(file);
}

async function resetAllData() {
  const pin = window.prompt("Sıfırlamak için yönetici PIN'ini girin.");
  if (!pin || (await hashPin(pin)) !== state.parentPinHash) {
    showToast("PIN doğrulanmadı.");
    return;
  }
  const confirmText = window.prompt("İkinci onay için SIFIRLA yazın.");
  if (confirmText !== "SIFIRLA") {
    showToast("Sıfırlama iptal edildi.");
    return;
  }
  state = emptyState();
  saveState();
  parentUnlocked = false;
  lockAdult();
  render();
  showToast("Tüm veriler sıfırlandı.");
}

function speak(text) {
  if (!state.settings.sounds || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "tr-TR";
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices.find((voice) => voice.lang.toLowerCase().startsWith("tr")) || null;
  utterance.rate = 0.92;
  window.speechSynthesis.speak(utterance);
}

function playSuccess() {
  if (!state.settings.sounds || state.settings.reduceMotion) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const context = new AudioContext();
    [523, 659, 784].forEach((frequency, index) => {
      const osc = context.createOscillator();
      const gain = context.createGain();
      osc.frequency.value = frequency;
      osc.type = "sine";
      gain.gain.setValueAtTime(0.0001, context.currentTime + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.12, context.currentTime + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + index * 0.08 + 0.18);
      osc.connect(gain).connect(context.destination);
      osc.start(context.currentTime + index * 0.08);
      osc.stop(context.currentTime + index * 0.08 + 0.2);
    });
  } catch {
    // Audio is optional and can be blocked by the browser.
  }
}

function showToast(message, withUndo = false) {
  const toast = $("toast");
  clearTimeout(pendingToastTimer);
  toast.innerHTML = `<span>${escapeHtml(message)}</span>${withUndo ? `<button type="button">Geri Al</button>` : ""}`;
  toast.classList.remove("is-hidden");
  const button = toast.querySelector("button");
  if (button) button.addEventListener("click", undoLast);
  pendingToastTimer = window.setTimeout(() => toast.classList.add("is-hidden"), withUndo ? 7000 : 3500);
}

function maybeShowMorning() {
  const today = istanbulDateKey();
  if (state.lastMorningAnimation === today) return;
  state.lastMorningAnimation = today;
  saveState();
  if (!$("morningDialog").open) $("morningDialog").showModal();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("sw.js").then((registration) => {
    if (registration.waiting) showUpdateBanner(registration.waiting);
    registration.addEventListener("updatefound", () => {
      const worker = registration.installing;
      if (!worker) return;
      worker.addEventListener("statechange", () => {
        if (worker.state === "installed" && navigator.serviceWorker.controller) {
          showUpdateBanner(worker);
        }
      });
    });
  });
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });
}

function showUpdateBanner(worker) {
  $("updateBanner").classList.remove("is-hidden");
  $("refreshApp").dataset.workerReady = "true";
  $("refreshApp").onclick = () => worker.postMessage({ type: "SKIP_WAITING" });
}

function refreshForUpdate() {
  if (!$("refreshApp").dataset.workerReady) window.location.reload();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}
