(() => {
  const root = document.documentElement;
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('aula-theme'); } catch (_) { /* Preferencia opcional. */ }
  if (savedTheme === 'light' || savedTheme === 'dark') root.dataset.theme = savedTheme;

  const themeButton = document.querySelector('[data-theme-toggle]');
  const setThemeLabel = () => {
    const dark = root.dataset.theme === 'dark';
    if (themeButton) {
      themeButton.setAttribute('aria-label', dark ? 'Activar modo claro' : 'Activar modo oscuro');
      themeButton.setAttribute('aria-pressed', String(dark));
    }
  };
  setThemeLabel();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('aula-theme', root.dataset.theme); } catch (_) { /* El tema permanece activo en esta página. */ }
    setThemeLabel();
  });

  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#primary-nav');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
  });
})();

