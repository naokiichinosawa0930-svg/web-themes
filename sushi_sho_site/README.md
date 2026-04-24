# 日本料理 すし昭 ウェブサイト

ValueBind Web制作サービスで制作したウェブサイト一式です。

---

## ファイル構成

```
sushi_sho_site/
├── index.html        # トップページ
├── about.html        # 店舗情報・アクセス・こだわり
├── menu.html         # メニュー全品一覧（タブ切り替え・51品）
├── photo.html        # フォトギャラリー
├── news.html         # お知らせ一覧
├── contact.html      # ご予約・お問い合わせフォーム
├── privacy.html      # プライバシーポリシー
├── robots.txt
├── sitemap.xml
├── css/
│   ├── reset.css
│   ├── variables.css  # ← カラー・フォント設定（ここを変更でデザイン変更可）
│   ├── components.css
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── scroll-animation.js
│   └── form-validation.js
└── images/            # お客様提供の画像を配置してください
```

---

## 初期設定が必要な項目

| 項目 | 対象ファイル | 内容 |
|------|------------|------|
| 料理・店内写真 | 全ページ | Unsplashプレースホルダーをお客様提供の実写真に差し替え |
| お問い合わせフォーム | contact.html | `action=""` をFormspree等のURLに変更 |
| Googleマップ埋め込み | about.html | 「Googleマップで見る」外部リンクをiframe埋め込みに変更（任意） |
| OGP画像 | 全ページ | `images/ogp.jpg` に1200×630pxの画像を配置 |
| favicon | 全ページ | `favicon.ico` を配置 |
| Google Analytics | 全ページ | GA4タグを `<head>` 内に追加（取得後） |

---

## よく変更する箇所

- **電話番号**：`0294-39-3231` を検索して変更
- **住所**：`茨城県日立市十王町友部東2-2-18` を検索して変更
- **営業時間・定休日**：各ページのフッターとhero-info-bar

---

## Formspree設定手順

1. https://formspree.io で無料アカウントを作成
2. 「New Form」でフォームを作成
3. 発行されたフォームIDをコピー
4. `contact.html` の `action=""` を `action="https://formspree.io/f/[フォームID]"` に変更

---

## カラー変更

`css/variables.css` の以下の変数を変更するだけでサイト全体の色が変わります。

```css
--color-primary: #C9A96E;   /* ゴールドアクセント */
--color-bg: #1A1A1A;        /* メイン背景 */
--color-bg-dark: #0D0D0D;   /* ヒーロー・ダークセクション */
```

---

## AUTO-GENERATEDコメントについて

HTMLファイル内に `<!-- AUTO-GENERATED: お客様確認後に差し替えてください -->` とコメントがある箇所は、画像プレースホルダーが設定されています。お客様提供の実写真に差し替えてください。

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-04-24 | 初版作成 |
