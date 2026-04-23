# アザース合同会社（ValueBind）ウェブサイト

ValueBind Web制作サービスで制作したウェブサイト一式です。

---

## ファイル構成

```
azas_site/
├── index.html        # トップページ
├── about.html        # 会社概要・代表メッセージ
├── service.html      # サービス紹介（4サービス詳細）
├── works.html        # 制作実績
├── news.html         # お知らせ
├── contact.html      # お問い合わせフォーム
├── privacy.html      # プライバシーポリシー
├── robots.txt        # 検索エンジン向け設定
├── sitemap.xml       # サイトマップ
├── css/
│   ├── reset.css     # ブラウザリセット（編集不要）
│   ├── variables.css # カラー・フォント設定（ここを変更でデザイン変更可）
│   ├── components.css# ボタン・カード等の共通部品
│   ├── style.css     # メインスタイル
│   └── responsive.css# スマホ・タブレット対応
├── js/
│   ├── main.js           # メニュー・ヘッダー・スムーズスクロール等
│   ├── scroll-animation.js # スクロールフェードイン
│   └── form-validation.js  # お問い合わせフォームバリデーション
└── images/           # 画像フォルダ（お客様提供画像を配置してください）
```

---

## 納品後にお客様がすぐ変更できる箇所

### テキストの変更
各HTMLファイルをメモ帳で開き、変更したい文字を検索して書き換えてください。

よく変更する箇所：
- 電話番号：`029-284-1219` を検索して変更
- 住所：`茨城県水戸市` を検索して変更
- メールアドレス：`naokiichinosawa0930@gmail.com` を検索して変更

### 画像の変更
`images/` フォルダに新しい画像を入れて、HTMLのimgタグのsrc属性を変更してください。

---

## 初期設定が必要な項目（納品後に実施してください）

| 項目 | 対象ファイル | 内容 |
|------|------------|------|
| ドメイン設定 | 全HTMLファイル・robots.txt・sitemap.xml | `https://example.com` を実際のドメインに変更 |
| Googleマップ | about.html | `<!-- Googleマップ埋め込みの例 -->` のコメントを外しiframe srcを設定 |
| お問い合わせフォーム | contact.html | `action="mailto:..."` をFormspree等のサービスURLに変更 |
| OGP画像 | 全HTMLファイル | `images/ogp.jpg` に1200×630pxの画像を配置 |
| 代表写真 | about.html | `<!-- AUTO-GENERATED: 代表写真に差し替えてください -->` の箇所を変更 |
| Google Analytics | 全HTMLファイル | GAタグのコメントを外してトラッキングIDを設定 |

---

## Formspreeを使ったお問い合わせフォームの設定方法

1. https://formspree.io で無料アカウントを作成
2. 「New Form」でフォームを作成
3. 発行されたフォームID（例：`xyzabc12`）をコピー
4. `contact.html` の `action="mailto:..."` を `action="https://formspree.io/f/xyzabc12"` に変更

---

## AUTO-GENERATEDコメントについて

HTMLファイル内に `<!-- AUTO-GENERATED: お客様確認後に差し替えてください -->` とコメントがある箇所は、
実績数値・代表写真・料金などを仮の内容で自動生成しています。
確定した情報に差し替えてください。

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-04-23 | 初版作成 |
