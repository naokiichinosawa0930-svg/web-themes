/**
 * main.js - Cテーマ「Friendly Soft」メインスクリプト
 * ハンバーガーメニュー・ヘッダーCSSスクロール・アコーディオン・カテゴリフィルター
 */

(function () {
  'use strict';

  /* ============================================
     ヘッダー: スクロールで影を追加
     ============================================ */
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }


  /* ============================================
     ハンバーガーメニュー（スライドメニュー）
     ============================================ */
  var hamburger = document.getElementById('hamburger-btn');
  var slideMenu = document.getElementById('slide-menu');
  var overlay   = document.getElementById('slide-overlay');
  var closeBtn  = document.getElementById('slide-menu-close');

  function openMenu() {
    if (!slideMenu) return;
    slideMenu.classList.add('is-open');
    if (overlay) overlay.classList.add('is-open');
    if (hamburger) {
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!slideMenu) return;
    slideMenu.classList.remove('is-open');
    if (overlay) overlay.classList.remove('is-open');
    if (hamburger) {
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (closeBtn)  closeBtn.addEventListener('click', closeMenu);
  if (overlay)   overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* スライドメニュー内のリンクをクリックしたらメニューを閉じる */
  if (slideMenu) {
    slideMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }


  /* ============================================
     aria-current の自動設定（アクティブページ）
     ============================================ */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-list a, .slide-menu__list a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });


  /* ============================================
     アコーディオン（FAQ用）
     ============================================ */
  document.querySelectorAll('.accordion-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.accordion-item');
      var isOpen = item.classList.contains('is-open');

      /* 同じグループ内の他を閉じる */
      var group = item.closest('.accordion-group');
      if (group) {
        group.querySelectorAll('.accordion-item.is-open').forEach(function (other) {
          if (other !== item) {
            other.classList.remove('is-open');
            other.querySelector('.accordion-btn').setAttribute('aria-expanded', 'false');
          }
        });
      }

      item.classList.toggle('is-open', !isOpen);
      btn.setAttribute('aria-expanded', (!isOpen).toString());
    });
  });


  /* ============================================
     カテゴリフィルター（ギャラリー・お知らせ）
     data-filter ボタン / data-category カード
     ============================================ */
  document.querySelectorAll('.gallery-filter').forEach(function (filterBar) {
    var btns  = filterBar.querySelectorAll('.gallery-filter-btn');
    var grid  = filterBar.nextElementSibling;
    if (!grid) return;
    var items = grid.querySelectorAll('[data-category]');

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');
        var filter = btn.getAttribute('data-filter');
        items.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.remove('is-hidden');
          } else {
            item.classList.add('is-hidden');
          }
        });
      });
    });
  });


  /* ============================================
     スムーススクロール（ページ内アンカー）
     ============================================ */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      var headerEl = document.getElementById('site-header');
      var offset   = headerEl ? headerEl.offsetHeight + 16 : 80;
      var top      = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  /* ============================================
     フォーム送信完了表示
     URL: ?success=1 のときにメッセージを表示
     ============================================ */
  var successMsg = document.getElementById('form-success');
  var contactForm = document.getElementById('contact-form');
  if (successMsg && contactForm) {
    if (new URLSearchParams(window.location.search).get('success') === '1') {
      contactForm.hidden = true;
      successMsg.hidden  = false;
    }
  }

  /* 文字数カウンター */
  var textarea = document.getElementById('message');
  var counter  = document.getElementById('message-count');
  if (textarea && counter) {
    textarea.addEventListener('input', function () {
      counter.textContent = textarea.value.length + ' / 1000文字';
    });
  }

})();
