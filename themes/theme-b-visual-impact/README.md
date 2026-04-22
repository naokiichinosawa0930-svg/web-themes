# テーマB「Visual Impact」カスタマイズガイド

> 読む人: コーディング経験なし・Claude Codeで作業する方向け
> このガイドを読みながら、Claude Codeに「〇〇を変更して」と指示すると作業が完了します

---

## このテーマについて

**テーマの特徴:**
- ダーク系・重厚感のあるデザイン
- ゴールドアクセントで高級感を演出
- 全画面パララックスヒーロー・フルスクリーンメニュー
- 創作料理・鮨・フレンチ・高級レストランに最適

**プレースホルダー店舗（このテーマの架空モデル）:**
- 創作料理 燈（あかり）— 麻布十番の創作和食レストラン

---

## ファイル構成（各ファイルの役割）

```
theme-b-visual-impact/
├── index.html    ← トップページ（最初に開くページ）
├── about.html    ← シェフ・店舗紹介（プロフィール・経歴・アクセス）
├── service.html  ← コースメニュー（タブ切替・コース一覧・FAQ）
├── works.html    ← ギャラリー（カテゴリフィルター付き）
├── news.html     ← お知らせ一覧
├── contact.html  ← ご予約・お問い合わせフォーム
├── privacy.html  ← プライバシーポリシー
│
├── css/
│   ├── reset.css       ← ブラウザの初期スタイルをリセット（触らなくてOK）
│   ├── variables.css   ← ★色・フォント・サイズの一元管理（最初に変更する）
│   ├── style.css       ← 各セクションのスタイル
│   ├── components.css  ← ボタン・カード等の部品スタイル
│   └── responsive.css  ← スマホ・タブレット対応
│
├── js/
│   ├── main.js             ← メニュー・パララックス・タブ・フィルター等
│   ├── scroll-animation.js ← スクロール時のフェードインアニメーション
│   └── form-validation.js  ← お問い合わせフォームの入力チェック
│
├── images/         ← 画像ファイルをここに入れる
├── robots.txt      ← 検索エンジン向け設定（URLを変更する）
├── sitemap.xml     ← サイトマップ（URLと日付を変更する）
└── README.md       ← このファイル
```

---

## カスタマイズ方法

### ① カラー変更（最重要）

**変更ファイル:** `css/variables.css`

ここを変更するだけでサイト全体の色が一括変更されます。

```css
/* ★ 変更例: 和食店なら深い赤をメインに */
--color-primary: #8b1a2b;   /* メインゴールド → 深紅 */
--color-accent:  #c9a227;   /* アクセント赤 → ゴールド */
--color-bg-dark: #0d0d0d;   /* 背景の黒（変えなくてOK） */
```

**Claude Codeへの指示例:**
```
css/variables.css の --color-primary を #8b1a2b に変えてください
```

---

### ② 店名・キャッチコピーの変更

HTMLファイル内の `★` コメントが変更箇所の目印です。

**主な変更箇所:**
- `index.html` の `<title>` タグ（ブラウザタブに表示される名前）
- `index.html` の `<meta name="description">` （検索結果に表示される説明文）
- ヘッダーの `.site-logo` 内 `logo-en`（英語店名）と `logo-ja`（日本語店名）
- ヒーローの `h1`・`p`（キャッチコピー）

**Claude Codeへの指示例:**
```
すべてのHTMLファイルの店名「創作料理 燈（あかり）」を
「鮨 一心（いっしん）」に変更してください
```

---

### ③ 画像の変更

**方法1: placehold.co の仮画像を実際の写真に変える**

```html
<!-- 変更前 -->
<img src="https://placehold.co/1600x900/..." alt="...">

<!-- 変更後: images/ フォルダに写真を入れてパスを指定 -->
<img src="images/hero.jpg" alt="実際の写真の説明">
```

**推奨画像サイズ（ピクセル）:**

| 使用箇所 | 推奨サイズ | 備考 |
|----------|-----------|------|
| ヒーロー背景 | 1920×1080px | JPEG, 300KB以下 |
| OGP画像 | 1200×630px | SNSシェア用 |
| ギャラリー（通常） | 800×800px | 正方形推奨 |
| ギャラリー（大） | 1200×800px | 横長カード |
| シェフ写真 | 800×1000px | 縦長推奨 |

**画像を暗くしてテキストを読みやすくするクラス（CSSで調整済み）:**

```html
<div class="img-darken">  <!-- 全体を暗くする (opacity:0.5 overlay) -->
<div class="img-overlay"> <!-- グラデーションオーバーレイ -->
<div class="img-mono">    <!-- モノクロ化 (filter: grayscale) -->
```

---

### ④ NAP情報の変更（MEO対策・重要）

**NAP = Name（店名）/ Address（住所）/ Phone（電話番号）**

MEO（Googleマップ上位表示）のために、ウェブサイトの NAP 情報を
**Googleビジネスプロフィールと完全一致**させる必要があります。

**変更ファイル:** 全HTMLファイルのフッター `<footer>` 内

```html
<!-- ★ 以下をGoogleビジネスプロフィールと一致させてください -->
<p class="footer-name">【店名】</p>
<p>〒000-0000 【住所】</p>
<p><a href="tel:00-0000-0000">00-0000-0000</a></p>
<p>営業時間：【時間】</p>
<p>定休日：【曜日】</p>
```

**Claude Codeへの指示例:**
```
全ファイルのフッターのNAP情報を以下に変更してください:
店名: 鮨 一心
住所: 〒100-0001 東京都千代田区○○1-1-1
電話: 03-1234-5678
営業時間: 17:30〜23:00（L.O. 21:30）
定休日: 日曜日・月曜日
```

---

### ⑤ Googleレビューボタンの設定（MEO対策）

フッターに「Googleで口コミを書く」ボタンが設置されています。
`place_id` をお店のものに変更してください。

**place_idの確認方法:**
1. Google マップでお店を検索
2. URLの `place/` 以降の文字列をコピー
3. または [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder) で検索

```html
<!-- ★ ChIJXXXXXXXXXXXXXXXXXXXX を実際のplace_idに変更 -->
<a href="https://search.google.com/local/writereview?placeid=【place_id】">
  ★ Googleで口コミを書く
</a>
```

---

### ⑥ Googleマップの埋め込み

**変更ファイル:** `about.html`・`contact.html`の `<iframe>` タグ

**手順:**
1. Google マップでお店を検索
2. 「共有」をクリック →「地図を埋め込む」を選択
3. 「HTMLをコピー」でコードをコピー
4. HTMLの `<iframe ... >` タグ全体を差し替え

---

### ⑦ コースメニューの変更

**変更ファイル:** `service.html`

タブ切替でコースが切り替わります。4タブ構成（おまかせ/季節/ペアリング/個室）。

```html
<!-- コース名の変更 -->
<button class="course-tab-btn" data-tab="omakase">おまかせコース</button>

<!-- 料理・価格の変更 -->
<tr>
  <td class="course-list__name">先付</td>
  <td class="course-list__desc">本日の小鉢</td>
  <td class="course-list__price">—</td>
</tr>
```

**Claude Codeへの指示例:**
```
service.html のおまかせコースの価格を1名 ¥28,000（税込）に変更し、
コース内容に「旬魚の造り」「土鍋ご飯」「水菓子」を追加してください
```

---

### ⑧ ギャラリー写真の追加・変更

**変更ファイル:** `works.html`

写真カードを追加する場合は、同じ構造でHTMLを追加してください。

```html
<!-- 通常サイズカード -->
<article class="gallery-card fade-in" data-category="cuisine">
  <div class="gallery-card__img-wrap">
    <img src="images/dish-01.jpg" alt="料理の説明">
    <div class="gallery-card__overlay">
      <span class="gallery-card__label">Cuisine</span>
      <p class="gallery-card__caption">料理のタイトル</p>
    </div>
  </div>
</article>

<!-- 横長大カード -->
<article class="gallery-card gallery-card--large fade-in" data-category="interior">
  ...
</article>
```

**カテゴリの変更:**
`data-category` の値とフィルターボタンの `data-filter` の値を一致させてください。

---

### ⑨ Formspree（お問い合わせフォーム）の設定

**変更ファイル:** `contact.html`

現在フォームの送信先は仮のIDになっています。実際のメールに届くよう設定します。

**手順:**
1. [https://formspree.io/](https://formspree.io/) でアカウント作成（無料）
2. 「New Form」を作成
3. 受け取りたいメールアドレスを設定
4. 発行された フォームID（例: `xyzabc12`）をコピー
5. `contact.html` の以下を変更:

```html
<!-- ★ xyzabc12 を実際のフォームIDに変更 -->
<form action="https://formspree.io/f/xyzabc12" method="POST">
```

**無料プランの制限:** 月50件まで（超過後は有料プランへ）

---

### ⑩ Google Analytics 4（GA4）の設定（任意）

アクセス解析を始める場合に設定します。

**手順:**
1. [Google Analytics](https://analytics.google.com/) でアカウント・プロパティを作成
2. 測定ID（`G-XXXXXXXXXX` 形式）を取得
3. 全HTMLファイルの `<head>` 内のコメントを外して測定IDを入力:

```html
<!-- ★ G-XXXXXXXXXX を実際の測定IDに変更してコメントを外してください -->
<!--
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
-->
```

**Claude Codeへの指示例:**
```
全HTMLファイルにGA4タグ G-ABC123456 を設定してください
```

---

### ⑪ Google Search Console の設定（任意）

検索順位・クリック数を確認するツールです。

**手順:**
1. [Google Search Console](https://search.google.com/search-console/) でプロパティ追加
2. 「HTMLタグ」の確認方法を選択
3. `<meta name="google-site-verification" content="XXXXX">` のような確認タグを取得
4. 全HTMLファイルの `<head>` 内のコメント箇所に追加

---

### ⑫ サイトマップ・robots.txtの設定

**変更ファイル:** `sitemap.xml`・`robots.txt`

すべての `https://example.com` を実際のサイトURLに変更してください。

```xml
<!-- sitemap.xml: example.com を実際のURLに変更 -->
<loc>https://【実際のドメイン】/</loc>
```

```
# robots.txt: Sitemapの行を変更
Sitemap: https://【実際のドメイン】/sitemap.xml
```

---

## アップロード方法

### Netlify（おすすめ・無料）

1. [https://netlify.com](https://netlify.com) でアカウント作成
2. 「Add new site」→「Deploy manually」
3. テーマのフォルダ（`theme-b-visual-impact/`）全体をドラッグ＆ドロップ
4. 独自ドメインを設定する場合は「Domain settings」から

### FTP / レンタルサーバー

1. FTPクライアント（FileZilla等）でサーバーに接続
2. `public_html/` または `www/` フォルダに全ファイルをアップロード
3. ファイル構成はそのまま保持してください（フォルダ構造を崩さない）

---

## よくある質問

**Q: スマホで見たときにメニューが崩れる**
A: `css/responsive.css` の設定が効いています。Claude Codeに「スマホで○○が崩れている」と報告してください。

**Q: 写真を変えたのに反映されない**
A: ブラウザのキャッシュが残っています。`Ctrl + Shift + R`（Mac: `Cmd + Shift + R`）で強制リロードしてください。

**Q: フォームを送信しても届かない**
A: Formspreeのフォームidが正しく設定されているか確認してください。Formspreeのダッシュボードでテスト送信できます。

**Q: ヒーロー画像が暗すぎる / 明るすぎる**
A: `css/style.css` の `.hero-overlay` の `opacity` 値を変えてください（0.0〜1.0）。
Claude Codeに「ヒーローの暗さを調整して」と依頼できます。

**Q: ギャラリーのカテゴリを追加したい**
A: `works.html` のフィルターボタンに `data-filter="newcat"` を追加し、カードに `data-category="newcat"` を追加してください。

**Q: 営業時間が変わった**
A: フッターと `contact.html` の営業時間、`about.html` の店舗情報表、`index.html` の構造化データ（JSON-LD）の3箇所を変更してください。
Claude Codeへ「全ファイルの営業時間を変更して」と依頼するのが確実です。

---

## サポート・カスタマイズ依頼

このテンプレートのカスタマイズでご不明な点は、Claude Codeに自由に質問してください。

例:
- 「ロゴ画像をヘッダーに表示させたい」
- 「instagramのフィードを埋め込みたい」
- 「予約フォームに項目を追加したい」
- 「トップページのコース紹介を3つから4つに増やしたい」
