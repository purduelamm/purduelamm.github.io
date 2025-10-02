document.addEventListener('DOMContentLoaded', function () {
  const root = document.getElementById('app-zoom-root');
  if (!root) return;

  let scale = 1;                          // 최소 1x
  const clamp = s => Math.max(1, Math.min(3, s));

  function apply() {
    root.style.setProperty('--scale', scale);
  }

  // Ctrl + 휠
  window.addEventListener('wheel', (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    scale *= (e.deltaY < 0) ? 1.1 : 1/1.1;
    scale = clamp(scale);
    apply();
  }, { passive: false });

  // Ctrl + / Ctrl -
  window.addEventListener('keydown', (e) => {
    if (!e.ctrlKey) return;
    if (e.key === '+' || e.key === '=' || e.key === '-') {
      e.preventDefault();
      scale *= (e.key === '-') ? 1/1.1 : 1.1;
      scale = clamp(scale);
      apply();
    }
  });

  apply();
});

