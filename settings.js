console.log("Global settings.js loaded");

// ------------------------------
// APPLY SETTINGS GLOBALLY
// ------------------------------
function applyGlobalSettings() {
    const lang = localStorage.getItem("app_language") || "en";
    const theme = localStorage.getItem("app_theme") || "dark";

    // Apply theme everywhere
    if (theme === "dark") {
        document.body.style.background = "#111";
        document.body.style.color = "white";
    } else {
        document.body.style.background = "#eee";
        document.body.style.color = "black";
    }

    // Display language in console for debugging
    console.log("Language applied:", lang);
    console.log("Theme applied:", theme);
}

applyGlobalSettings();


// --------------------------------------------------
// SETTINGS PAGE LOGIC (only runs inside settings.html)
// --------------------------------------------------
if (window.location.pathname.includes("settings.html")) {

    console.log("Settings page detected.");

    const saveButton = document.getElementById("saveBtn");
    const languageSelect = document.getElementById("language");
    const themeSelect = document.getElementById("theme");

    // Load settings when entering settings page
    function loadSettings() {
        const savedLang = localStorage.getItem("app_language");
        const savedTheme = localStorage.getItem("app_theme");

        if (savedLang) languageSelect.value = savedLang;
        if (savedTheme) themeSelect.value = savedTheme;

        console.log("Loaded settings:", { savedLang, savedTheme });
    }

    // Save settings
    function saveSettings() {
        const lang = languageSelect.value;
        const theme = themeSelect.value;

        localStorage.setItem("app_language", lang);
        localStorage.setItem("app_theme", theme);

        animateSaveButton();

        // Re-apply everywhere instantly
        applyGlobalSettings();

        console.log("Settings saved globally:", { lang, theme });
    }

    // Save button animation
    function animateSaveButton() {
        saveButton.style.transform = "scale(1.1)";
        saveButton.style.background = "#39ff14"; // neon green glow

        setTimeout(() => {
            saveButton.style.transform = "scale(1)";
            saveButton.style.background = "";
        }, 300);
    }

    saveButton.addEventListener("click", saveSettings);
    themeSelect.addEventListener("change", applyGlobalSettings);

    loadSettings();
}

