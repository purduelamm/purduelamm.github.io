---
title: "Home"
layout: single
permalink: /home/
header: 
  overlay_image: /assets/images/wall/wall01.png
  overlay_filter: 0.4
  caption: "Photo credit: LAMM"
toc: false
toc_sticky: false
author_profile: true
classes: home-left tight-hero
---

<!-- 이 페이지 전용: 히어로 아래 여백/겹침 제거 -->
<style>
  /* 히어로 바로 아래 래퍼에 BFC 생성 → 마진 겹침 방지 */
  .page__hero--overlay + .page__inner-wrap {
    display: flow-root;
    padding-top: 0 !important;
  }
  /* 첫 콘텐츠 블록 위 여백 제거 */
  .page__content > *:first-child { margin-top: 0 !important; }
  /* 히어로 하단 간격도 살짝 타이트하게(원치 않으면 주석처리) */
  .page__hero--overlay { margin-bottom: 12px !important; }
</style>

<!-- 오른쪽 배너: aside는 하나만 두고 banner-only 클래스 부여 -->
<aside class="sidebar__right sticky banner-only" role="complementary" aria-label="External links">
  <div class="right-badges">
    <a class="badge" href="https://www.purdue.edu" target="_blank" rel="noopener">
      <img src="https://github.com/purduelamm/purduelamm.github.io/blob/master/assets/images/pictures/logos/Purdue_H.png?raw=true" alt="Purdue University">
    </a>
    <a class="badge" href="https://engineering.purdue.edu/MMRL" target="_blank" rel="noopener">
      <img src="https://github.com/purduelamm/purduelamm.github.io/blob/master/assets/images/pictures/logos/MMRL.jpg?raw=true" alt="MMRL">
    </a>
    <a class="badge" href="https://engineering.purdue.edu/CORIA" target="_blank" rel="noopener">
      <img src="https://github.com/purduelamm/purduelamm.github.io/blob/master/assets/images/pictures/logos/CORIA.png?raw=true" alt="CORIA">
    </a>
  </div>
</aside>

<!-- 메인 큰 이미지 -->
<figure class="align-center" style="margin: 8px 0 24px;">
  <img
    src="{{ '/assets/images/research/Home_main.png' | relative_url }}?v={{ site.assets_version | default: 1 }}"
    alt="LAMM – JUN LAB overview"
    loading="lazy" decoding="async"
    style="width:100%; height:auto; max-width:1100px; border-radius:12px; box-shadow:0 6px 24px rgba(0,0,0,.12);"
  />
</figure>
