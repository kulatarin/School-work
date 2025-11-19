console.log("Global settings.js loaded");

// --------------------------------------
// APPLY SETTINGS EVERYWHERE
// --------------------------------------
function applyGlobalSettings() {
    const theme = localStorage.getItem("app_theme") || "dark";
    const lang = localStorage.getItem("app_language") || "en";
    const font = localStorage.getItem("app_font") || "3ds";

    // Apply theme
    if (theme === "dark") {
        document.body.style.background = "#111";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "#eee";
        document.body.style.color = "black";
    }

    // Apply font globally
    document.body.style.fontFamily = `'${font}', sans-serif`;

    console.log("Applied:", { theme, lang, font });
}

applyGlobalSettings();


// --------------------------------------------------
// LOGIC ONLY FOR settings.html
// --------------------------------------------------
if (window.location.pathname.includes("settings.html")) {

    console.log("Settings page detected.");

    const saveButton = document.getElementById("saveBtn");
    const languageSelect = document.getElementById("language");
    const themeSelect = document.getElementById("theme");
    const fontSelect = document.getElementById("font");

    // Load saved settings into dropdowns
    function loadSettings() {
        const savedLang = localStorage.getItem("app_language");
        const savedTheme = localStorage.getItem("app_theme");
        const savedFont = localStorage.getItem("app_font");

        if (savedLang) languageSelect.value = savedLang;
        if (savedTheme) themeSelect.value = savedTheme;
        if (savedFont) fontSelect.value = savedFont;
    }

    // Save settings to localStorage
    function saveSettings() {
        localStorage.setItem("app_language", languageSelect.value);
        localStorage.setItem("app_theme", themeSelect.value);
        localStorage.setItem("app_font", fontSelect.value);

        animateSaveButton();
        applyGlobalSettings();
    }

    // Animation for save button
    function animateSaveButton() {
        saveButton.style.transform = "scale(1.1)";
        saveButton.style.background = "#39ff14";
        setTimeout(() => {
            saveButton.style.transform = "scale(1)";
            saveButton.style.background = "";
        }, 300);
    }

    // Live font preview
    fontSelect.addEventListener("change", () => {
        document.body.style.fontFamily = `'${fontSelect.value}', sans-serif`;
    });

    saveButton.addEventListener("click", saveSettings);

    loadSettings();
}
