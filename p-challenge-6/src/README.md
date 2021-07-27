# p-challenge−5

## 使用方法

### 依存関係の構築

```yarn
yarn install
```

### ローカルサーバーの起動

```yarn
yarn serve
```

### 仕様 1 の確認

> 特定のオリジンからの POST リクエストのみ許可して、

1. `yarn serve`で公開した http://localhost:3000/を表示。
2. 「POST Request」ボタンをクリック。
3. HTTP レスポンスステータスコード 200 が返ってくることを確認。
4. 「PUT Request」ボタンをクリック。
5. CORS error になることを確認。

> それ以外のオリジンから POST リクエストを受けた時は、CORS 制約によりアクセスが制限されるようなサーバを作成してください

1. `ngrok http 3000`でサーバーを公開し、https の URL を表示。
2. 「POST Request」ボタンをクリック。
3. CORS error になることを確認。

### 仕様 2 の確認

> 「Simple request」の時は preflight が行われないこと

1. `yarn serve`で公開した http://localhost:3000/を表示。
2. 「Simple Request」ボタンをクリック。
3. preflight が行われないことを確認

### 仕様 3 の確認

> 「Simple request」に該当しないときは preflight が行われることを証明してください

1. `yarn serve`で公開した http://localhost:3000/を表示。
2. 「POST Request」ボタンをクリック。
3. preflight が行われることを確認
4. 「POST Simple Request」ボタンをクリック。
5. preflight が行われないことを確認
