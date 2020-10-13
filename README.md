# 11ty-sample-nunjucks
11tyの学習用リポジトリ 
## 始め方
### 1.ダウンロードしたフォルダ内で以下のコマンドを実行
```
$ yarn install
```
### 2.jsonファイルの情報を更新します。
対象のjsonファイル  
・seo.json（メタ情報関連が管理されています）  
・site.json（サイト内のテキスト情報が管理されています）  
  
### 3.Eleventyを開発モードで立ち上げる
```
$ yarn eleventy --serve
```
### 4.htmlをビルドして完成
```
$ yarn eleventy
```
distディレクトリにビルドしたindex.htmlが生成されます。
