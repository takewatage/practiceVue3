# コーディングテスト
# 課題
**都道府県別の不動産取引価格グラフを表示するSPA(Single Page Application)を構築してください**

![ワイヤーフレーム](./wireframe.pdf)
## 内容
- 「取引時期From」及び「取引時期To」、「都道府県」を選択
- [不動産取引価格情報取得API](https://www.land.mlit.go.jp/webland/api.html)の「都道府県内市区町村一覧取得API」から市区町村名の一覧を取得
- APIレスポンスから市区町村一覧のリストボックスを動的に生成する
- 市区町村を選択すると、不動産取引価格情報取得APIから選択された条件を元に「不動産取引価格情報」を取得する
- 不動産取引価格情報取得APIレスポンスから、X軸:面積(平方メートル)、Y軸:取引価格（総額）の散布図を動的に生成して表示する
## 制約
- [vue.js](https://jp.vuejs.org/index.html)もしくは[react](https://ja.reactjs.org/)を用いてSPAを構築すること（バージョンはできるだけ最新版をご使用ください）
    - [nuxt.js](https://nuxtjs.org/ja/), [next.js](https://nextjs.org/)などのフレームワークを利用いただいても問題ありません
- グラフは[Highcharts](https://www.highcharts.com/)や[Rechart.js](https://recharts.org/en-US/)などのサードパーティ製のグラフライブラリを使用して描画すること
- リンターやフォーマッターを適切に設定すること
    - リンター：ESLint、フォーマッター：Prettierを使用
- CSS・UIフレームワークなどは使用しないこと
    - ただし、chartライブラリ内包のstyleなどについてはこの限りではありません
- Google Chrome最新版で動作すること
- レスポンシブデザイン対応すること
    - Google Chromeの検証ツールで確認できれば問題ありません
## 任意（以下、可能であれば対応してください）
- [TypeScript](https://www.typescriptlang.org/)で記述すること
- テストケース/テストコードを作成すること
## 注意事項
- mainブランチからブランチを作成して実装を進めてください
- 課題の実装が完了しましたら以下を実行し、課題を終了してください
    - 作成したブランチからmainブランチへのPull Requestを出す
    - 弊社採用担当に課題が完了したことを連絡する
- 本課題の内容は、次回の面接の際に説明していただきます
    - なお、課題の完了を確認次第、GitHubへのアクセス権限を遮断しますのでご注意ください
