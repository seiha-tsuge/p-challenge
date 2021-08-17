# p-challenge−5

## 使用方法

### 依存関係の構築

``` yarn
yarn install
```

### ローカルサーバーの起動

``` yarn
yarn serve
```

### ローカルサーバーを公開

``` ngrok
ngrok http 8080
ngrok http 8081
```

### Cookieの確認

1. public-1/index.htmlに記述されている以下の`port8081`を先程`ngrok http 8081`で公開したhttpsのURLに置き換える

``` html
<img src="https://port8081.ngrok.io/splatoon.png"/>
```

2. 先程`ngrok http 8080`で公開したhttpsのURLを表示。`third-cookie: fuga`が設定されていることを確認
