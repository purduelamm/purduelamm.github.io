document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app-zoom-root');
  if (!root) return;

  let user = 1;                          // 우리 확대(최소 1배)
  const clampUser = v => Math.max(1, Math.min(3, v)); // 1x~3x

  const baseDPR = window.devicePixelRatio || 1;

  function getBrowserZoom() {
    // 데스크톱 대부분에서 visualViewport.scale이 페이지 줌을 반영
    if (window.visualViewport && typeof window.visualViewport.scale === 'number') {
      return window.visualViewport.scale || 1;
    }
    // 폴백: DPR 비율로 추정
    return (window.devicePixelRatio || 1) / baseDPR;
  }

  function apply() {
    const z = getBrowserZoom();   // 브라우저 현재 줌(예: 0.9, 1.0, 1.25)
    const comp = 1 / z;           // 역스케일로 **브라우저 줌 상쇄**
    root.style.setProperty('--comp', comp.toFixed(5));
    root.style.setProperty('--user', user.toFixed(5));
  }

  // 브라우저 줌(화면배율) 변할 때마다 상쇄 갱신
  const updateComp = () => apply();
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateComp);
  }
  window.addEventListener('resize', updateComp);

  // Ctrl + 휠: **우리 확대만** 제어 (브라우저 줌은 막음)
  window.addEventListener('wheel', (e) => {
    if (!e.ctrlKey) return;
    e.preventDefault();                     // 기본 줌 막기
    user = clampUser(user * (e.deltaY < 0 ? 1.1 : 1/1.1));
    apply();
  }, { passive: false });

  // 키보드 단축키: +/=/- 를 우리 확대에 매핑
  window.addEventListener('keydown', (e) => {
    if (!e.ctrlKey) return;
    if (e.key === '+' || e.key === '=') {   // 확대
      e.preventDefault();
      user = clampUser(user * 1.1);
      apply();
    } else if (e.key === '-') {             // (원하면 축소 막기: 아래 두 줄 주석 처리)
      e.preventDefault();
      user = clampUser(user / 1.1);
      apply();
    } else if (e.key === '0') {             // 리셋
      e.preventDefault();
      user = 1;
      apply();
    }
  });

  apply();
});


