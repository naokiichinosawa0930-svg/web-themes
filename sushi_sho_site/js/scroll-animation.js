/**
 * scroll-animation.js - スクロール連動フェードインアニメーション
 * .fade-in / .fade-in-left / .fade-in-right クラスを持つ要素に適用
 */

(function () {
  'use strict';

  const targets = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if (!targets.length) return;

  // IntersectionObserver非対応ブラウザでは即座に表示
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -48px 0px'
    }
  );

  targets.forEach(function (el) { observer.observe(el); });

})();
