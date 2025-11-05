// Inject settings HTML dynamically
document.getElementById("settings-panel").innerHTML = `
  <div class="settings">
    <h3>⚙️ Settings</h3>
    <label>Theme:</label>
    <select id="themeSelect">
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>

    <label>Font:</label>
    <select id="fontSelect">
      <option value="'3ds', sans-serif">3DS</option>
      <option value="Arial, sans-serif">Default</option>
    </select>

    <label>Language:</label>
    <select id="langSelect">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  </div>
`;

// Settings logic
const themeSelect = document.getElementById('themeSelect');
const fontSelect = document.getElementById('fontSelect');
const langSelect = document.getElementById('langSelect');

themeSelect.addEventListener('change', () => {
  if (themeSelect.value === 'light') {
    document.documentElement.style.setProperty('--bg-color', '#f2f2f2');
    document.documentElement.style.setProperty('--text-color', '#000');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#1e1e1e');
    document.documentElement.style.setProperty('--text-color', '#fff');
  }
});

fontSelect.addEventListener('change', () => {
  document.body.style.fontFamily = fontSelect.value;
});

langSelect.addEventListener('change', () => {
  const header = document.querySelector('header');
  if (langSelect.value === 'fr') {
    header.textContent = '🌟 Bienvenue sur mon site 🌟';
  } else {
    header.textContent = '🌟 Welcome to My Website 🌟';
  }
});
