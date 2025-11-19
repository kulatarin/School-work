console.log("settings.js loaded globally");

// ------------------------------
// APPLY ALL SETTINGS GLOBALLY
// ------------------------------
function applyGlobalSettings() {
    const theme = localStorage.getItem("app_theme") || "dark";
    const font = localStorage.getItem("app_font") || "3ds";
    const soundToggle = localStorage.getItem("app_sound") || "on";
    const soundVolume = localStorage.getItem("app_volume") || "70";

    // Apply font
    document.body.style.fontFamily = `'${font}', sans-serif`;

    // Apply theme
    if (theme === "dark") {
        document.body.style.background = "#111";
        document.body.style.color = "white";
    }
    else if (theme === "light") {
        document.body.style.background = "#eee";
        document.body.style.color = "black";
    }
    else if (theme === "cyberpunk") {
        document.body.style.background = "#050014";
        document.body.style.color = "#00f2ff";
        document.body.style.textShadow = "0 0 5px #00f2ff";
    }
    else if (theme === "retro") {
        document.body.style.background = "#0d1b2a";
        document.body.style.color = "#ff4c4c";
    }
    else if (theme === "neon") {
        document.body.style.background = "black";
        document.body.style.color = "#39ff14";
        document.body.style.textShadow = "0 0 10px #39ff14";
    }

    console.log("Global settings applied:", { theme, font, soundToggle, soundVolume });
}

applyGlobalSettings();

// -------------------------------------------
// SETTINGS PAGE LOGIC ONLY
// -------------------------------------------
if (window.location.pathname.includes("settings.html")) {

    console.log("Settings page active.");

    const fontSelect = document.getElementById("font");
    const themeSelect = document.getElementById("theme");
    const soundToggle = document.getElementById("soundToggle");
    const soundVolume = document.getElementById("soundVolume");
    const saveButton = document.getElementById("saveBtn");
    const fontPreview = document.getElementById("fontPreview");

    // Load saved values
    function loadSettings() {
        if (localStorage.getItem("app_font")) {
            fontSelect.value = localStorage.getItem("app_font");
        }

        if (localStorage.getItem("app_theme")) {
            themeSelect.value = localStorage.getItem("app_theme");
        }

        if (localStorage.getItem("app_sound")) {
            soundToggle.value = localStorage.getItem("app_sound");
        }

        if (localStorage.getItem("app_volume")) {
            soundVolume.value = localStorage.getItem("app_volume");
        }

        updateFontPreview();
    }

    // Save settings
    function saveSettings() {
        localStorage.setItem("app_font", fontSelect.value);
        localStorage.setItem("app_theme", themeSelect.value);
        localStorage.setItem("app_sound", soundToggle.value);
        localStorage.setItem("app_volume", soundVolume.value);

        applyGlobalSettings();
        animateSaveButton();
    }

    // Button animation
    function animateSaveButton() {
        saveButton.style.transform = "scale(1.1)";
        saveButton.style.background = "#39ff14";
        setTimeout(() => {
            saveButton.style.transform = "scale(1)";
            saveButton.style.background = "";
        }, 300);
    }

    // Font preview updates instantly
    function updateFontPreview() {
        fontPreview.style.fontFamily = `'${fontSelect.value}', sans-serif`;
    }

    // Event listeners
    fontSelect.addEventListener("change", updateFontPreview);
    saveButton.addEventListener("click", saveSettings);

    loadSettings();
}

