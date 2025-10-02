document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app-zoom-root');
  if (!root) return;

  // 고정 스케일: data-fixed-scale="0.9" 이면 0.9로 잠금
  const fixed = (() => {
    const v = parseFloat(root.dataset.fixedScale || '');
    return Number.isFinite(v) && v > 0 ? v : null;
  })();

  let user = fixed ?? 1; // 고정 아니면 1부터 시작
  const baseDPR = window.devicePixelRatio || 1;

  function browserZoom() {
    if (window.visualViewport && typeof window.visualViewport.scale === 'number') {
      const vv = window.visualViewport.scale || 1;
      const dprRatio = (window.devicePixelRatio || 1) / baseDPR;
      return Math.max(vv, dprRatio);
    }
    return (window.devicePixelRatio || 1) / baseDPR;
  }

  function apply() {
    const z = browserZoom();           // 브라우저 현재 줌
    const comp = 1 / z;                // 역스케일 → 줌 상쇄
    root.style.setProperty('--comp', comp.toFixed(5));
    root.style.setProperty('--user', (fixed ?? user).toFixed(5));
  }

  // 브라우저 줌 변하면 계속 상쇄값 갱신
  if (window.visualViewport) window.visualViewport.addEventListener('resize', apply);
  window.addEventListener('resize', apply);

  // 고정 모드가 아니면 Ctrl+휠/키보드로 우리 확대 허용
  if (!fixed) {
    window.addEventListener('wheel', (e) => {
      if (!e.ctrlKey) return;
      e.preventDefault();
      user = Math.max(1, Math.min(3, user * (e.deltaY < 0 ? 1.1 : 1/1.1)));
      apply();
    }, { passive: false });

    window.addEventListener('keydown', (e) => {
      if (!e.ctrlKey) return;
      if (e.key === '+' || e.key === '=') { e.preventDefault(); user = Math.min(3, user * 1.1); apply(); }
      else if (e.key === '-')            { e.preventDefault(); user = Math.max(1, user / 1.1); apply(); }
      else if (e.key === '0')            { e.preventDefault(); user = 1; apply(); }
    });
  } else {
    // 고정 모드에서는 브라우저 기본 줌만 상쇄하고 사용자 입력은 무시
    window.addEventListener('wheel', (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });
