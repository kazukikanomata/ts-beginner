# ts-beginner
TypeScriptのコンパイル方法...
Tsは、Jsにコンパイルしてから実行する。
```
$ tsc hello.ts
```

実行してみる...
```
$ node hello.js
```

コンパイルのインストールにはいくつかの手段がある。
OSを問わず最も汎用的に利用できるのはnode.jsに入っているnpmコマンドを使うのがbetter


ts-loader（Ts読み込み）→typescript（コンパイラ）→Jsにする！
コマンドプロンプト　→　webpack-cli → Webpack（モジュールバンドラー）を起動
webpack-dev-server→ ビルド、サーバー。検知とか色々やってくれるやつ。

# 参考
https://qiita.com/ochiochi/items/efdaa0ae7d8c972c8103