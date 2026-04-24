/**
 * main.js - Bテーマ「Visual Impact」メイン動作
 * フルスクリーンメニュー・ヘッダー透過切り替え・パララックス
 * タブ切り替え・アコーディオン・カテゴリフィルター
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // ============================================
  // フルスクリーンメニューの開閉
  // ============================================
  const hamburgerBtn    = document.querySelector('.hamburger-btn');
  const fullscreenMenu  = document.querySelector('.fullscreen-menu');

  if (hamburgerBtn && fullscreenMenu) {

    hamburgerBtn.addEventListener('click', function () {
      const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';

      hamburgerBtn.setAttribute('aria-expanded', String(!isOpen));
      fullscreenMenu.classList.toggle('is-open', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // メニュー内リンククリックで閉じる
    fullscreenMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        fullscreenMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && fullscreenMenu.classList.contains('is-open')) {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        fullscreenMenu.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }


  // ============================================
  // ヘッダー: スクロールで透過 → 暗い背景に切り替え
  // ============================================
  const header = document.querySelector('.site-header');

  if (header) {
    function updateHeader () {
      if (window.scrollY > 80) {
        header.classList.remove('is-transparent');
        header.classList.add('is-scrolled');
      } else {
        header.classList.add('is-transparent');
        header.classList.remove('is-scrolled');
      }
    }

    // ヒーローがある（トップ・下層共通）場合は透過開始
    header.classList.add('is-transparent');
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }


  // ============================================
  // パララックス効果（ヒーロー背景）
  // パフォーマンスに問題が出る場合はコメントアウトしてください
  // ============================================
  const heroBg = document.querySelector('.hero-bg');

  if (heroBg && window.matchMedia('(min-width: 768px)').matches) {
    let ticking = false;

    function updateParallax () {
      const scrollY = window.scrollY;
      heroBg.style.transform = 'translateY(' + (scrollY * 0.4) + 'px)';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }


  // ============================================
  // アコーディオン（FAQ等）
  // ============================================
  document.querySelectorAll('.accordion-trigger').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      const body       = trigger.nextElementSibling;

      // 同じアコーディオン内の他を閉じる
      const accordion = trigger.closest('.accordion');
      if (accordion) {
        accordion.querySelectorAll('.accordion-trigger').forEach(function (other) {
          if (other !== trigger) {
            other.setAttribute('aria-expanded', 'false');
            const otherBody = other.nextElementSibling;
            if (otherBody) otherBody.classList.remove('is-open');
          }
        });
      }

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      if (body) body.classList.toggle('is-open', !isExpanded);
    });
  });


  // ============================================
  // コースタブ切り替え（service.html）
  // ============================================
  const tabBtns   = document.querySelectorAll('.course-tab-btn');
  const tabPanels = document.querySelectorAll('.course-tab-panel');

  if (tabBtns.length && tabPanels.length) {
    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const target = btn.getAttribute('data-tab');

        tabBtns.forEach(function (b) { b.classList.remove('is-active'); });
        tabPanels.forEach(function (p) { p.classList.remove('is-active'); });

        btn.classList.add('is-active');
        const panel = document.querySelector('.course-tab-panel[data-tab="' + target + '"]');
        if (panel) panel.classList.add('is-active');
      });
    });
  }


  // ============================================
  // カテゴリフィルター（works.html / ギャラリー）
  // ============================================
  const filterBtns  = document.querySelectorAll('.filter-btn');
  const workItems   = document.querySelectorAll('.work-item, .gallery-item[data-category]');

  if (filterBtns.length && workItems.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const filter = btn.getAttribute('data-filter');

        filterBtns.forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        workItems.forEach(function (item) {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.classList.remove('is-hidden');
            item.style.display = '';
          } else {
            item.classList.add('is-hidden');
            item.style.display = 'none';
          }
        });
      });
    });
  }


  // ============================================
  // スムーズスクロール
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      e.preventDefault();
      const headerH = header ? header.offsetHeight : 0;
      const top = targetEl.getBoundingClientRect().top + window.scrollY - headerH - 20;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  // ============================================
  // 現在ページのナビリンクにaria-current設定
  // ============================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.fullscreen-nav a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

});
