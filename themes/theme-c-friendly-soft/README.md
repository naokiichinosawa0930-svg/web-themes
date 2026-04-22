# Cテーマ「Friendly Soft」— 使い方ガイド

にこにこ歯科クリニック向けWebサイトテンプレートです。
プログラムの知識がなくても、このガイドに沿って編集できます。

---

## 1. ファイル構成

```
theme-c-friendly-soft/
├── index.html        トップページ
├── about.html        クリニック紹介
├── service.html      診療内容
├── works.html        症例・ギャラリー
├── news.html         お知らせ
├── contact.html      ご予約・お問い合わせ
├── privacy.html      プライバシーポリシー
├── robots.txt        検索エンジン向け設定
├── sitemap.xml       サイトマップ
├── css/              スタイルシート（デザイン）
├── js/               JavaScript（動作）
└── images/           画像フォルダ（ここに画像を置く）
```

---

## 2. 院名・クリニック情報の変更

**変更が必要な箇所にはすべて `★` マークのコメントが付いています。**

### 院名
全ページの `<title>` タグ、ヘッダー、フッターに記載されています。  
`にこにこ歯科クリニック` を実際の院名に置換（7ファイル × 複数箇所）。  
テキストエディタの「一括置換」機能が便利です。

### 電話番号
`029-000-0000` → 実際の電話番号に変更。

### 住所・郵便番号
`〒310-0000 茨城県水戸市○○町1-1-1` → 実際の住所に変更。  
**MEO対策のため、Googleビジネスプロフィールと1文字も違わず同じ表記にしてください。**

---

## 3. カラーの変更（テーマカラー一括変更）

`css/variables.css` を開き、上部の変数を変更するだけで全ページのカラーが変わります。

```css
--color-primary: #3ec4b0;       /* メインカラー（ミントグリーン） */
--color-accent:  #ff8fa3;       /* アクセントカラー（ソフトピンク） */
```

---

## 4. 画像の差し替え

1. 画像ファイルを `images/` フォルダにコピー
2. HTMLファイル内の `src="https://placehold.co/..."` を `src="images/ファイル名.jpg"` に変更

### 推奨画像サイズ
| 用途 | 推奨サイズ |
|------|-----------|
| OGP画像 | 1200 × 630 px |
| ヒーロー背景 | 1600 × 900 px 以上 |
| 院長写真 | 400 × 500 px |
| 診療詳細 | 600 × 450 px |
| ギャラリーカード | 480 × 360 px |
| こだわり・哲学 | 600 × 480 px |

---

## 5. 診療時間の変更

`about.html` と `contact.html` の `<table class="hours-table">` を編集します。  
`○`（診療あり）・`△`（午前のみなど）・`休`（休診）を書き換えてください。  
フッターの診療時間テキストも合わせて変更してください。

---

## 6. お知らせの追加・更新

`news.html` の `<!-- ★ お知らせ: 新しいものを上に追加してください -->` の直後に、以下のブロックをコピーして追加します。

```html
<div class="news-item fade-in">
  <div class="news-item__meta">
    <time class="news-item__date" datetime="2024-12-25">2024.12.25</time>
    <span class="news-badge news-badge--info">お知らせ</span>
  </div>
  <h2 class="news-item__title">
    <a href="#">タイトルをここに入力</a>
  </h2>
  <p class="news-item__excerpt">本文をここに入力します。</p>
</div>
```

### バッジの種類
| クラス | 見た目 | 用途 |
|--------|--------|------|
| `news-badge--info` | グレー | 通常のお知らせ |
| `news-badge--service` | ミント | 新サービス・変更 |
| `news-badge--event` | 黄色 | イベント・キャンペーン |
| `news-badge--alert` | ピンク | 重要・緊急 |
| `news-badge--holiday` | 薄グレー | 休診・臨時休業 |

---

## 7. ギャラリー症例の追加

`works.html` の `.gallery-grid` 内に以下のブロックを追加します。  
`data-category` の値はフィルターボタンの `data-filter` と一致させてください。

```html
<article class="gallery-card fade-in" data-category="general">
  <div class="gallery-card__img-wrap">
    <img class="gallery-card__img"
      src="images/case-01.jpg"
      alt="症例の説明（alt属性はSEO・アクセシビリティに重要）"
      width="480" height="360" loading="lazy">
  </div>
  <div class="gallery-card__body">
    <span class="gallery-card__category">一般歯科</span>
    <p class="gallery-card__title">症例のタイトル</p>
  </div>
</article>
```

**カテゴリ値対応表**
| data-category | 表示名 |
|---------------|--------|
| `general` | 一般歯科 |
| `children` | 小児歯科 |
| `prevention` | 予防 |
| `whitening` | ホワイトニング |
| `orthodontics` | 矯正 |

---

## 8. ネット予約フォーム（Formspree）の設定

1. [Formspree.io](https://formspree.io/) でアカウントを作成（無料プランあり）
2. 「New Form」でフォームを作成 → フォームIDを取得（例: `xyzabc12`）
3. `contact.html` の `action="https://formspree.io/f/xyzabc12"` の `xyzabc12` を変更
4. Formspreeの管理画面で送信先メールアドレスを設定

---

## 9. Googleマップの埋め込み

1. Google マップで院名を検索
2. 「共有」→「地図を埋め込む」→「HTMLをコピー」
3. `contact.html` と `about.html` の `<iframe src="https://www.google.com/maps/embed?pb=...` を丸ごと置き換え

---

## 10. Googleレビューボタンの設定

1. Googleビジネスプロフィールにログイン
2. 「クチコミを取得」→「クチコミのリクエスト」でリンクURLを取得
3. 全ページのフッターにある `placeid=ChIJXXXXXXXXXXXXXXXXXXXX` を実際のplace_idに変更

---

## 11. Google Analytics 4（GA4）の設定

全ページの `<head>` 内にコメントアウトされたGA4コードがあります。

```html
<!--
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
...
-->
```

1. Google Analytics でGA4プロパティを作成
2. 測定ID（`G-XXXXXXXXXX` の形式）を取得
3. コメント（`<!--` と `-->`）を外し、`G-XXXXXXXXXX` を実際のIDに変更
4. 全7ページに適用してください

---

## 12. Google Search Console の設定

全ページの `<head>` 内にコメントアウトされた確認コードがあります。

```html
<!-- <meta name="google-site-verification" content="XXXXX"> -->
```

1. Google Search Console で「プロパティを追加」
2. 「HTMLタグ」方式を選択 → `content="XXXXX"` の値をコピー
3. コメントを外し、`XXXXX` を実際の値に変更（index.html のみでOK）

---

## 13. サイトマップの更新

`sitemap.xml` の `https://example.com` を実際のドメインに変更してください。  
Google Search Console でサイトマップを送信することで、Googleへのインデックス促進ができます。

---

## 14. アップロード方法

| 方法 | 手順 |
|------|------|
| **FTP** | FTPソフト（FileZillaなど）でサーバーのpublic_htmlにアップロード |
| **cPanel** | ホスティング管理画面のファイルマネージャーで一括アップロード |
| **GitHub Pages** | GitHubリポジトリにプッシュ → Settings → Pages で公開 |

**注意:** `css/`・`js/`・`images/` フォルダごとアップロードしてください。フォルダ構造が崩れるとデザインが壊れます。
