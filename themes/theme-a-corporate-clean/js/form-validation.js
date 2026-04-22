/**
 * form-validation.js - お問い合わせフォームのバリデーション
 * contact.html のフォームに適用されます
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const form = document.querySelector('.contact-form');
  if (!form) return;

  // ============================================
  // バリデーションルール定義
  // ============================================
  const rules = {
    name: {
      required: true,
      maxLength: 50,
      message: {
        required: 'お名前を入力してください',
        maxLength: '50文字以内で入力してください'
      }
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: {
        required: 'メールアドレスを入力してください',
        pattern: '正しいメールアドレスを入力してください'
      }
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      message: {
        required: 'お問い合わせ内容を入力してください',
        minLength: '10文字以上で入力してください',
        maxLength: '1000文字以内で入力してください'
      }
    },
    privacy: {
      required: true,
      message: {
        required: 'プライバシーポリシーへの同意が必要です'
      }
    }
  };


  // ============================================
  // 単一フィールドのバリデーション
  // ============================================
  function validateField (name, value, isCheckbox) {
    const rule = rules[name];
    if (!rule) return null; // ルールがなければ通過

    if (rule.required) {
      const isEmpty = isCheckbox ? !value : value.trim() === '';
      if (isEmpty) return rule.message.required;
    }

    if (!isCheckbox && value.trim() !== '') {
      if (rule.minLength && value.trim().length < rule.minLength) {
        return rule.message.minLength;
      }
      if (rule.maxLength && value.trim().length > rule.maxLength) {
        return rule.message.maxLength;
      }
      if (rule.pattern && !rule.pattern.test(value.trim())) {
        return rule.message.pattern;
      }
    }

    return null; // エラーなし
  }


  // ============================================
  // エラー表示・クリア
  // ============================================
  function showError (fieldEl, message) {
    fieldEl.classList.add('is-error');

    // 既存のエラーメッセージを削除
    const existingMsg = fieldEl.parentElement.querySelector('.form-error-msg');
    if (existingMsg) existingMsg.remove();

    // エラーメッセージを追加
    const msgEl    = document.createElement('span');
    msgEl.className = 'form-error-msg';
    msgEl.textContent = message;
    fieldEl.parentElement.appendChild(msgEl);
  }

  function clearError (fieldEl) {
    fieldEl.classList.remove('is-error');
    const existingMsg = fieldEl.parentElement.querySelector('.form-error-msg');
    if (existingMsg) existingMsg.remove();
  }


  // ============================================
  // リアルタイムバリデーション（入力中）
  // ============================================
  form.querySelectorAll('input, textarea, select').forEach(function (field) {
    const eventType = field.type === 'checkbox' ? 'change' : 'blur';

    field.addEventListener(eventType, function () {
      const name      = field.name;
      const isCheckbox = field.type === 'checkbox';
      const value     = isCheckbox ? field.checked : field.value;
      const error     = validateField(name, value, isCheckbox);

      if (error) {
        showError(field, error);
      } else {
        clearError(field);
      }
    });

    // 入力開始でエラー解除
    if (field.type !== 'checkbox') {
      field.addEventListener('input', function () {
        if (field.classList.contains('is-error')) {
          clearError(field);
        }
      });
    }
  });


  // ============================================
  // フォーム送信時のバリデーション
  // ============================================
  form.addEventListener('submit', function (e) {
    let hasError = false;

    form.querySelectorAll('input[name], textarea[name], select[name]').forEach(function (field) {
      const name       = field.name;
      const isCheckbox = field.type === 'checkbox';
      const value      = isCheckbox ? field.checked : field.value;
      const error      = validateField(name, value, isCheckbox);

      if (error) {
        showError(field, error);
        hasError = true;
      } else {
        clearError(field);
      }
    });

    if (hasError) {
      e.preventDefault();

      // 最初のエラーフィールドにスクロール
      const firstError = form.querySelector('.is-error');
      if (firstError) {
        const header = document.querySelector('.site-header');
        const headerH = header ? header.offsetHeight : 0;
        const top = firstError.getBoundingClientRect().top + window.scrollY - headerH - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
        firstError.focus();
      }
    }

    // ============================================
    // Formspreeを使わずにajaxで送信する場合はここを編集
    // デフォルトはformspreeのaction属性でそのまま送信されます
    // ============================================
  });

});
