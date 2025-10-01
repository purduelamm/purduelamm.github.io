---
---
/* assets/js/random-hero.js
   모든 페이지의 Minimal Mistakes 헤더(overlay) 배경을 연구 이미지 10장 중 랜덤으로 교체
*/
(function () {
  // 페이지에 헤더 오버레이가 없으면 종료
  var hero = document.querySelector('.page__hero--overlay');
  if (!hero) return;

  // 교체 대상 이미지(10장) - baseurl 안전 반영
  var images = [
    '{{ "/assets/images/wall/wall01.png" | relative_url }}',
    '{{ "/assets/images/wall/wall02.png" | relative_url }}',
    '{{ "/assets/images/wall/wall03.png" | relative_url }}',
    '{{ "/assets/images/wall/wall04.png" | relative_url }}',
    '{{ "/assets/images/wall/wall05.png" | relative_url }}',
    '{{ "/assets/images/wall/wall06.png" | relative_url }}',
    '{{ "/assets/images/wall/wall07.png" | relative_url }}',
    '{{ "/assets/images/wall/wall08.png" | relative_url }}',
    '{{ "/assets/images/wall/wall09.png" | relative_url }}',
    '{{ "/assets/images/wall/wall10.png" | relative_url }}'
  ];

  var pick = images[Math.floor(Math.random() * images.length)];

  // overlay_filter 값(없으면 0.4)
  var filter = {{ page.header.overlay_filter | default: 0.4 }};

  // 배경이미지 교체(필터 유지)
  hero.style.backgroundImage =
    'linear-gradient(rgba(0,0,0,' + filter + '), rgba(0,0,0,' + filter + ')), url("' + pick + '")';

  // 내부 <img>도 있으면 src 동기화(테마 레이아웃 호환용)
  var img = hero.querySelector('img');
  if (img) img.src = pick;

  // 캡션도 연구실 표기로
  var cap = hero.querySelector('.page__hero-caption');
  if (cap) cap.innerHTML = 'Photo credit: <strong>CORIA / MMRL</strong>';
})();
