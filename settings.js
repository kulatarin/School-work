// 🌍 SETTINGS.JS — by Kula Bashir
// Handles theme, font, and language settings with full persistence and animation

// === ELEMENTS ===
const themeSelect = document.getElementById("themeSelect");
const fontSelect = document.getElementById("fontSelect");
const langSelect = document.getElementById("langSelect");
const preview = document.getElementById("preview") || createPreview();
const saveBtn = document.getElementById("saveBtn") || createSaveButton();

// === INITIAL LOAD ===
document.addEventListener("DOMContentLoaded", () => {
  loadSettings();
  addEventListeners();
});

// === LOAD SETTINGS FROM LOCAL STORAGE ===
function loadSettings() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  const savedFont = localStorage.getItem("font") || "3ds";
  const savedLang = localStorage.getItem("language") || "en";

  themeSelect.value = savedTheme;
  fontSelect.value = savedFont;
  langSelect.value = savedLang;

  applyTheme(savedTheme);
  applyFont(savedFont);
  applyLanguage(savedLang);
}

// === APPLY THEME ===
function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "light") {
    root.style.setProperty("--bg-color", "#ffffff");
    root.style.setProperty("--text-color", "#000000");
    root.style.setProperty("--accent-red", "#ff3333");
    root.style.setProperty("--accent-blue", "#0077ff");
  } else if (theme === "custom") {
    root.style.setProperty("--bg-color", "#0e1026");
    root.style.setProperty("--text-color", "#e2e2ff");
    root.style.setProperty("--accent-red", "#ff66b2");
    root.style.setProperty("--accent-blue", "#66ccff");
  } else {
    root.style.setProperty("--bg-color", "#1e1e1e");
    root.style.setProperty("--text-color", "#ffffff");
    root.style.setProperty("--accent-red", "#ff4d4d");
    root.style.setProperty("--accent-blue", "#4da6ff");
  }

  animateMessage(`Theme set to: ${theme.toUpperCase()}`);
}

// === APPLY FONT ===
function applyFont(font) {
  document.body.style.fontFamily = `'${font}', sans-serif`;
  animateMessage(`Font: ${font}`);
}

// === APPLY LANGUAGE ===
// 50 most common global languages
const translations = {
  en: "Welcome to Settings",
  zh: "欢迎使用设置",
  es: "Bienvenido a la configuración",
  hi: "सेटिंग्स में आपका स्वागत है",
  ar: "مرحبًا بالإعدادات",
  bn: "সেটিংসে স্বাগতম",
  pt: "Bem-vindo às configurações",
  ru: "Добро пожаловать в настройки",
  ja: "設定へようこそ",
  de: "Willkommen in den Einstellungen",
  fr: "Bienvenue dans les paramètres",
  ur: "سیٹنگز میں خوش آمدید",
  id: "Selamat datang di Pengaturan",
  sw: "Karibu kwenye Mipangilio",
  mr: "सेटिंग्जमध्ये स्वागत आहे",
  te: "సెట్టింగ్స్‌కు స్వాగతం",
  tr: "Ayarlar'a hoş geldiniz",
  ta: "அமைப்புகளில் வரவேற்கிறோம்",
  vi: "Chào mừng đến Cài đặt",
  ko: "설정에 오신 것을 환영합니다",
  it: "Benvenuto nelle impostazioni",
  fa: "به تنظیمات خوش آمدید",
  pl: "Witamy w ustawieniach",
  uk: "Ласкаво просимо до налаштувань",
  ro: "Bine ai venit la setări",
  nl: "Welkom bij instellingen",
  el: "Καλώς ήρθατε στις ρυθμίσεις",
  th: "ยินดีต้อนรับสู่การตั้งค่า",
  ms: "Selamat datang ke Tetapan",
  ha: "Barka da zuwa Saituna",
  am: "እንኳን ወደ ቅንብሮች መጡ",
  yo: "Kaabo si Eto",
  zu: "Siyakwamukela kuzilungiselelo",
  he: "ברוך הבא להגדרות",
  sv: "Välkommen till inställningar",
  fi: "Tervetuloa asetuksiin",
  no: "Velkommen til innstillinger",
  da: "Velkommen til indstillinger",
  hu: "Üdv a beállításokban",
  cs: "Vítejte v nastavení",
  bg: "Добре дошли в настройките",
  sr: "Добродошли у подешавања",
  hr: "Dobrodošli u postavke",
  sk: "Vitajte v nastaveniach",
  sl: "Dobrodošli v nastavitvah",
  ps: "د ترتیباتو ته ښه راغلاست",
  km: "សូមស្វាគមន៍មកកាន់ការកំណត់",
  lo: "ຍິນດີຕ້ອນຮັບສູ່ການຕັ້ງຄ່າ",
  my: "ဆက်တင်‌များ‌မှ‌ကြိုဆိုပါသည်",
  ne: "सेटिङ्समा स्वागत छ"
};

function applyLanguage(lang) {
  const message = translations[lang] || "Language set!";
  animateMessage(message);
}

// === ANIMATION FEEDBACK ===
function animateMessage(msg) {
  preview.textContent = msg;
  preview.style.opacity = "1";
  preview.style.transform = "scale(1.05)";
  preview.style.textShadow = "0 0 20px var(--accent-blue)";
  setTimeout(() => {
    preview.style.opacity = "0.9";
    preview.style.transform = "scale(1)";
    preview.style.textShadow = "none";
  }, 800);
}

// === SAVE SETTINGS ===
saveBtn.addEventListener("click", () => {
  localStorage.setItem("theme", themeSelect.value);
  localStorage.setItem("font", fontSelect.value);
  localStorage.setItem("language", langSelect.value);
  animateMessage("✅ Settings saved successfully!");
});

// === LIVE PREVIEW ON CHANGE ===
function addEventListeners() {
  themeSelect.addEventListener("change", e => applyTheme(e.target.value));
  fontSelect.addEventListener("change", e => applyFont(e.target.value));
  langSelect.addEventListener("change", e => applyLanguage(e.target.value));
}

// === CREATE ELEMENT HELPERS ===
function createPreview() {
  const p = document.createElement("div");
  p.id = "preview";
  p.style.textAlign = "center";
  p.style.marginTop = "20px";
  p.style.fontSize = "1.2em";
  document.body.appendChild(p);
  return p;
}

function createSaveButton() {
  const btn = document.createElement("button");
  btn.id = "saveBtn";
  btn.textContent = "💾 Save Settings";
  btn.style.marginTop = "20px";
  btn.style.padding = "10px 20px";
  btn.style.background = "var(--accent-blue)";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "10px";
  btn.style.cursor = "pointer";
  btn.addEventListener("click", () => {
    localStorage.setItem("theme", themeSelect.value);
    localStorage.setItem("font", fontSelect.value);
    localStorage.setItem("language", langSelect.value);
    animateMessage("✅ Settings saved successfully!");
  });
  document.body.appendChild(btn);
  return btn;
}
