
// /assets/js/app-zoom.js
(function () {
  const root = document.getElementById('app-zoom-root');
  if (!root) return;

  let scale = 1;                           // 최소 1배
  const clamp = s => Math.max(1, Math.min(3, s)); // 1x ~ 3x

  function apply() {
    root.style.setProperty('--scale', scale);
  }

  // 브라우저 기본 줌을 막고, 우리 스케일로만 동작
  window.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
      e.preventDefault();
      scale *= (e.deltaY < 0) ? 1.1 : 1/1.1;  // 확대/축소
      scale = clamp(scale);                   // 1 미만 금지 → 축소 불가
      apply();
    }
  }, { passive: false });

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
})();
