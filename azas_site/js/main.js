/**
 * main.js - メニュー開閉・ヘッダー制御等の基本動作
 */

document.addEventListener('DOMContentLoaded', function () {

  // ============================================
  // ハンバーガーメニューの開閉
  // ============================================
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileMenu   = document.querySelector('.mobile-menu');

  if (hamburgerBtn && mobileMenu) {

    hamburgerBtn.addEventListener('click', function () {
      const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';

      hamburgerBtn.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('is-open', !isOpen);

      // メニューが開いている間はbodyのスクロールを止める
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // モバイルメニュー内のリンクをクリックしたらメニューを閉じる
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // メニュー外をクリックしたら閉じる
    document.addEventListener('click', function (e) {
      if (
        mobileMenu.classList.contains('is-open') &&
        !mobileMenu.contains(e.target) &&
        !hamburgerBtn.contains(e.target)
      ) {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }


  // ============================================
  // ヘッダー: スクロールで縮小 / 影を追加
  // ============================================
  const header = document.querySelector('.site-header');

  if (header) {
    function updateHeader () {
      if (window.scrollY > 40) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader(); // 初期状態にも適用
  }


  // ============================================
  // アコーディオン（FAQなど）
  // ============================================
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const body       = trigger.nextElementSibling;

      // 同じアコーディオン内の他のアイテムを閉じる
      const accordion = trigger.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-trigger').forEach(function (otherTrigger) {
          if (otherTrigger !== trigger) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            const otherBody = otherTrigger.nextElementSibling;
            if (otherBody) {
              otherBody.classList.remove('is-open');
            }
          }
        });
      }

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (body) {
        body.classList.toggle('is-open', !isExpanded);
      }
    });
  });


  // ============================================
  // スムーズスクロール（ページ内リンク #anchor）
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const headerH = header ? header.offsetHeight : 0;
      const top     = targetEl.getBoundingClientRect().top + window.scrollY - headerH - 20;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  // ============================================
  // カテゴリフィルター（works.htmlで使用）
  // ============================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workItems     = document.querySelectorAll('.work-item');

  if (filterButtons.length && workItems.length) {

    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filterValue = btn.getAttribute('data-filter');

        // ボタンのアクティブ状態を切り替え
        filterButtons.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        // アイテムの表示・非表示を切り替え
        workItems.forEach(function (item) {
          const itemCategory = item.getAttribute('data-category');

          if (filterValue === 'all' || itemCategory === filterValue) {
            item.classList.remove('is-hidden');
          } else {
            item.classList.add('is-hidden');
          }
        });
      });
    });
  }


  // ============================================
  // 現在のページのナビリンクにaria-current="page"を設定
  // ============================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.global-nav a, .mobile-nav a').forEach(function (link) {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

});
