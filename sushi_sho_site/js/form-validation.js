/**
 * form-validation.js - お問い合わせ・ご予約フォームのバリデーション
 * contact.html のフォームに適用されます
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  const form = document.querySelector('.contact-form');
  if (!form) return;

  // バリデーションルール
  const rules = {
    name: {
      required: true,
      maxLength: 50,
      message: { required: 'お名前を入力してください', maxLength: '50文字以内で入力してください' }
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: { required: 'メールアドレスを入力してください', pattern: '正しいメールアドレスを入力してください' }
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
      message: { required: 'プライバシーポリシーへの同意が必要です' }
    }
  };

  function validateField (name, value, isCheckbox) {
    const rule = rules[name];
    if (!rule) return null;

    if (rule.required) {
      if (isCheckbox ? !value : value.trim() === '') return rule.message.required;
    }

    if (!isCheckbox && value.trim() !== '') {
      if (rule.minLength && value.trim().length < rule.minLength) return rule.message.minLength;
      if (rule.maxLength && value.trim().length > rule.maxLength) return rule.message.maxLength;
      if (rule.pattern && !rule.pattern.test(value.trim())) return rule.message.pattern;
    }

    return null;
  }

  function showError (field, message) {
    field.classList.add('is-error');
    const existing = field.parentElement.querySelector('.form-error-msg');
    if (existing) existing.remove();
    const msg = document.createElement('span');
    msg.className = 'form-error-msg';
    msg.textContent = message;
    field.parentElement.appendChild(msg);
  }

  function clearError (field) {
    field.classList.remove('is-error');
    const existing = field.parentElement.querySelector('.form-error-msg');
    if (existing) existing.remove();
  }

  // リアルタイムバリデーション
  form.querySelectorAll('input, textarea, select').forEach(function (field) {
    const evt = field.type === 'checkbox' ? 'change' : 'blur';
    field.addEventListener(evt, function () {
      const isCheck = field.type === 'checkbox';
      const err = validateField(field.name, isCheck ? field.checked : field.value, isCheck);
      if (err) showError(field, err);
      else clearError(field);
    });
    if (field.type !== 'checkbox') {
      field.addEventListener('input', function () {
        if (field.classList.contains('is-error')) clearError(field);
      });
    }
  });

  // 送信時バリデーション
  form.addEventListener('submit', function (e) {
    let hasError = false;

    form.querySelectorAll('input[name], textarea[name], select[name]').forEach(function (field) {
      const isCheck = field.type === 'checkbox';
      const err = validateField(field.name, isCheck ? field.checked : field.value, isCheck);
      if (err) { showError(field, err); hasError = true; }
      else clearError(field);
    });

    if (hasError) {
      e.preventDefault();
      const firstErr = form.querySelector('.is-error');
      if (firstErr) {
        const header = document.querySelector('.site-header');
        const offset = header ? header.offsetHeight : 0;
        const top = firstErr.getBoundingClientRect().top + window.scrollY - offset - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
        firstErr.focus();
      }
    }
  });

});
