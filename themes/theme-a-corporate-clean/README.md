# テーマA「Corporate Clean」カスタマイズガイド

> 読む人: コーディング経験なし・Claude Codeで作業する方向け
> このガイドを読みながら、Claude Codeに「〇〇を変更して」と指示すると作業が完了します

---

## このテーマについて

**テーマの特徴:**
- ミニマルでシンプルなデザイン
- 余白を多めにとった、知的・信頼感のある見た目
- 企業・士業・コンサル・IT・BtoBサービスに最適

**プレースホルダー企業（このテーマの架空モデル）:**
- 株式会社サンプルカンパニー（ITコンサルティング会社）

---

## ファイル構成（各ファイルの役割）

```
theme-a-corporate-clean/
├── index.html    ← トップページ（最初に開くページ）
├── about.html    ← 会社概要（代表挨拶・会社情報・アクセス）
├── service.html  ← サービス紹介（詳細・料金・流れ・FAQ）
├── works.html    ← 導入実績（カテゴリフィルター付き）
├── news.html     ← お知らせ一覧
├── contact.html  ← お問い合わせフォーム
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
│   ├── main.js            ← メニュー・アコーディオン・フィルター等の動作
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
/* 変更前（ネイビー系） */
--color-primary: #1a5276;

/* 変更後の例（グリーン系） */
--color-primary: #1a7a4a;
```

**主要な色の役割:**

| 変数名 | 役割 | 変更タイミング |
|--------|------|--------------|
| `--color-primary` | メインカラー（見出し・ヘッダー） | 必ず変更 |
| `--color-primary-light` | ホバー時・リンク色 | primaryに合わせて変更 |
| `--color-primary-dark` | ヘッダー背景・フッター | primaryに合わせて変更 |
| `--color-accent` | ボタン・CTA（目立つ箇所） | 必ず変更 |

**カラー変更の例（業種別）:**

```css
/* 医療・クリニック系（緑） */
--color-primary: #1a7a4a;
--color-primary-light: #27ae60;
--color-primary-dark: #0e4a2d;
--color-accent: #e67e22;

/* 法律・会計系（濃紺） */
--color-primary: #1a237e;
--color-primary-light: #3949ab;
--color-primary-dark: #0d1557;
--color-accent: #c0392b;

/* IT・スタートアップ系（青紫） */
--color-primary: #5b2d8e;
--color-primary-light: #8e44ad;
--color-primary-dark: #2e1545;
--color-accent: #16a085;
```

---

### ② テキスト変更

**変更箇所:** 各HTMLファイルの中のテキスト

HTMLファイルにはコメントが書かれています。変更箇所がわかりやすくなっています。

**Claude Codeへの指示例:**
```
index.html のキャッチコピー「中小企業のDX推進を伴走型で支援する」を
「水戸市の税務・会計をトータルサポート」に変更してください
```

**全ページ共通で変更が必要な情報:**

| 項目 | 変更場所 | 説明 |
|------|---------|------|
| 会社名 | 全HTMLのヘッダー・フッター | 「株式会社サンプルカンパニー」を変更 |
| 住所 | 全HTMLのフッター `.footer-nap` | NAP情報 |
| 電話番号 | 全HTMLのフッター `.nap-tel` | NAP情報 |
| 営業時間 | 全HTMLのフッター `.nap-hours` | NAP情報 |

---

### ③ 画像差し替え

**imagesフォルダに画像を追加して、HTMLのsrc属性を変更します。**

**Claude Codeへの指示例:**
```
index.html のヒーロー画像を images/hero-new.jpg に変更してください
```

**推奨画像サイズ:**

| 画像 | ファイル名（例） | 推奨サイズ |
|------|--------------|----------|
| ヒーロー（メイン） | hero.jpg | 1200×900px |
| 強みセクション | strengths.jpg | 600×450px |
| サービス画像 | service-consulting.jpg | 600×450px（各サービス） |
| 代表者写真 | president.jpg | 400×500px |
| 実績画像 | work-01.jpg | 600×450px（各実績） |
| OGP（SNS共有用） | ogp.png | 1200×630px |

**写真がきれいでない場合のテクニック:**

HTMLのclassに以下を追加するだけで見た目を改善できます:

```html
<!-- 元のコード -->
<div class="hero-image-main">

<!-- カラーオーバーレイを追加（ブランドカラーを重ねる） -->
<div class="hero-image-main img-overlay">

<!-- モノクロにする -->
<div class="hero-image-main img-mono">

<!-- 暗くしてテキストを読みやすくする -->
<div class="hero-image-main img-darken">
```

---

### ④ フォーム送信先の設定（Formspree）

**Formspree（フォームスプリー）とは:** フォームの内容をメールで受け取れる無料サービスです。

**手順:**

1. **アカウント作成:** https://formspree.io/ にアクセスしてサインアップ
2. **フォーム作成:** ログイン後「+ New Form」をクリック
3. **メールアドレス設定:** フォームの送信先メールアドレスを入力
4. **IDをコピー:** 作成されたフォームのIDをコピー（例: `xrgvpwqz`）
5. **HTMLを編集:** `contact.html` の以下の部分を変更

```html
<!-- 変更前 -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

<!-- 変更後（YOUR_FORM_IDを実際のIDに変更） -->
<form action="https://formspree.io/f/xrgvpwqz" method="POST">
```

---

## SEO設定の変更方法

### meta title / description の編集

各HTMLファイルの `<head>` 内に以下のコードがあります。ここを変更します。

```html
<!-- 変更前（サンプル） -->
<title>株式会社サンプルカンパニー | ITコンサルティング・DXソリューション</title>
<meta name="description" content="中小企業のDX推進を専門とする...">

<!-- 変更後（お客様の情報に） -->
<title>山田税理士事務所 | 水戸市の税務・会計・相続サポート</title>
<meta name="description" content="水戸市の山田税理士事務所。法人税・相続・事業継承まで...">
```

**タイトルは60文字以内、descriptionは120文字以内に収めてください。**

### 構造化データの編集

`index.html` の `<script type="application/ld+json">` の部分を変更します。

```json
{
  "@type": "Organization",
  "name": "ここをお客様の会社名に変更",
  "url": "https://お客様のサイトURLに変更",
  "telephone": "+81-ここを電話番号に変更"
}
```

**店舗・飲食店の場合:** `"@type": "Organization"` を `"@type": "LocalBusiness"` に変更してください。
index.html のコメント内にLocalBusiness版のサンプルがあります。

### OGP画像の設定

1. `images/ogp.png` という名前で1200×630pxの画像を用意
2. 全HTMLの `og:image` と `twitter:image` のURLを変更:
```html
<meta property="og:image" content="https://お客様のURL/images/ogp.png">
```

---

## GA4トラッキングコードの設置

**Google Analytics 4（GA4）でアクセス数を計測する方法**

1. https://analytics.google.com/ にアクセス
2. 「プロパティを作成」→ サイトのURLを設定
3. 「ウェブストリームを追加」でトラッキングIDを取得（例: `G-ABC123XYZ0`）
4. 全HTMLの以下のコメントを外してIDを変更:

```html
<!-- コメントを外す（<!--と-->を削除） -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX'); ← ここをG-ABC123XYZ0に変更
</script>
```

---

## Search Console所有権確認

1. https://search.google.com/search-console/ にアクセス
2. 「プロパティを追加」→ サイトのURLを入力
3. 「HTMLタグ」の確認方法を選択してコードをコピー
4. 全HTMLの以下のコメントを外してコードを変更:

```html
<!-- コメントを外す -->
<meta name="google-site-verification" content="コピーしたコードをここに">
```

---

## Googleマップ埋め込みの変更方法

**手順:**

1. https://www.google.com/maps にアクセス
2. 検索バーにお客様の住所または会社名を入力
3. 表示されたスポットをクリック → 「共有」アイコン（または右クリックメニュー）をクリック
4. 「地図を埋め込む」タブをクリック
5. サイズを選択（「カスタムサイズ」推奨）
6. 「HTMLをコピー」をクリック
7. `about.html` の地図部分のコードを貼り替え:

```html
<!-- 変更前（プレースホルダー削除してから） -->
<div class="map-placeholder">...</div>

<!-- 変更後（コピーしたコードを貼り付け） -->
<iframe
  src="https://www.google.com/maps/embed?pb=コピーしたコード..."
  width="100%"
  height="100%"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="会社名 アクセスマップ">
</iframe>
```

---

## 口コミ誘導ボタンの設定方法

**Google Place IDの取得方法:**

1. https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder にアクセス
2. 検索ボックスにお客様のお店・会社名を入力
3. 表示された候補を選択
4. 「Place ID」に表示された文字列をコピー（例: `ChIJN1t_tDeuEmsRUsoyG83frY4`）

**または簡単な方法:**
1. Googleマップでお店を検索
2. URLに含まれる `place/` の後ろの文字列、またはURLをそのまま確認
3. 共有URLを開いてURLパラメータを確認

**HTMLへの設置方法（index.htmlの例）:**

```html
<!-- コメントを外して、PLACE_IDを実際のIDに変更 -->
<div class="review-cta">
  <a href="https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4"
     class="btn btn-review" target="_blank" rel="noopener">
    Googleで口コミを書く
  </a>
</div>
```

---

## サーバーへのアップロード手順

### 方法A: FTPでアップロード（レンタルサーバー）

**よく使われるFTPソフト:** FileZilla（無料）https://filezilla-project.org/

**手順:**
1. FileZillaをインストール・起動
2. 「ファイル」→「サイトマネージャー」→「新しいサイト」をクリック
3. レンタルサーバーの管理画面からFTP情報を確認:
   - ホスト名（例: `sv1234.xserver.jp`）
   - ユーザー名
   - パスワード
4. 接続後、右側のサーバー画面で `public_html`（または `htdocs`）フォルダを開く
5. 左側のパソコン画面でこのフォルダを開く
6. フォルダ内のファイルを全選択して右側にドラッグ＆ドロップ
7. ブラウザでサイトのURLにアクセスして確認

### 方法B: Netlifyでアップロード（無料・簡単）

**Netlify（ネットリファイ）とは:** 無料でウェブサイトを公開できるサービスです。

**手順:**
1. https://www.netlify.com/ にアクセスしてサインアップ（無料）
2. ダッシュボードの「Add new site」→「Deploy manually」をクリック
3. このフォルダ（`theme-a-corporate-clean`）全体をドラッグ＆ドロップ
4. 数秒で公開完了。`.netlify.app`というURLが発行されます
5. 独自ドメインを設定する場合は「Domain settings」から追加

---

## よくある質問

### Q: 文字を変えたいがどこを編集すればいい？

**A:** 各HTMLファイルをテキストエディタで開くと、`<!-- コメント -->` で変更箇所が説明されています。

Claude Codeに「〇〇ページのキャッチコピーを変更して」と指示するのが一番簡単です。

### Q: 色を変えたい場合は？

**A:** `css/variables.css` の `--color-primary` と `--color-accent` を変更してください。
16進数カラーコードは https://colorpicker.me/ で調べられます。

### Q: ページを増やしたい場合は？

**A:** 既存のページ（例: `news.html`）をコピーして新しいファイル名で保存し、
ヘッダーとフッターのナビゲーションにリンクを追加してください。

Claude Codeに「ブログページを追加して」と指示するのが最も効率的です。

### Q: スマホで確認する方法は？

**A:** ブラウザで開発者ツール（F12キー）→ 左上のスマホアイコンをクリックすると、
スマホ表示のシミュレーションができます。

または、実際のスマホで直接ファイルを確認するには、
PCとスマホを同じWi-Fiに接続した上でPCのIPアドレスをスマホのブラウザに入力します。

### Q: お問い合わせフォームが動かない

**A:** `contact.html` の `action` 属性にFormspreeのIDが設定されているか確認してください。
`YOUR_FORM_ID` のまま残っている場合は未設定です。本ガイドの「フォーム送信先の設定」を参照してください。

---

## カスタマイズの流れ（まとめ）

1. `css/variables.css` のカラーを変更
2. 全ページのロゴ・会社名・ナビゲーションを変更
3. `index.html` のキャッチコピー・サービス内容を変更
4. `about.html` の代表挨拶・会社情報を変更
5. `service.html` のサービス内容・料金を変更
6. `works.html` の実績を差し替え
7. 全ページのフッターNAP情報を変更
8. 画像を差し替え
9. 全ページのmeta title / descriptionを変更
10. GA4・Search Consoleを設定
11. Formspreeを設定
12. robots.txt・sitemap.xmlのURLを変更
13. サーバーにアップロード

---

*このガイドを読んでわからないことがあれば、Claude Codeに質問してください。*
