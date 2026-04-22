/**
 * scroll-animation.js - スクロール時のフェードインアニメーション
 * .fade-in クラスが付いた要素が画面内に入ったときに表示される
 */

(function () {
  'use strict';

  // IntersectionObserver が使えないブラウザでは全て表示
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // 一度表示したら監視を解除
        }
      });
    },
    {
      threshold: 0.1,    // 10%見えたら発火
      rootMargin: '0px 0px -40px 0px'  // 画面下端から40px手前で発火
    }
  );

  // fade-in クラスを持つ全要素を監視
  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });

})();
