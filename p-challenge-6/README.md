# 課題6

## 問題１

Wev APIを利用したアプリケーションではよく、フロントエンドとバックエンドが別々のオリジンで配信される。
しかし、画面生成元のオリジンとリクエスト先のオリジンが異なる場合、同一オリジンポリシーによりレスポンスを処理することができない。
外部サイトからの不適切なAPIの利用を防ぐには都合がよいが、異なるオリジンにある正規サイトから利用する際には不都合が生じる。
そこで、正規のサイトのオリジンを許可することで制限を限定的に解除できる仕組みが「CORS（Cross-Origin Resource Sharing: オリジン間リソース共有）」と言う。  

異なるオリジンのAPIサーバーに対してリクエストを送信するとき、ブラウザはOriginリクエストヘッダーに現在のオリジンを付与する。
APIサーバーはOriginリクエストヘッダーを確認することで、どのオリジンからのリクエストか把握することができ、そのオリジンからのアクセスを許可する場合は、Access-Control-Allow-Originレスポンスヘッダーに許可するOriginを付与して返す。
レスポンスを受信したブラウザは、Access-Control-Allow-Originレスポンスヘッダーを確認し、アクセスが許可されているオリジンであれば、レスポンスを処理する。  

さきほど、APIサーバーはOriginリクエストヘッダーを確認すると述べたが、サーバー側は確認するために異なるオリジンであれ、リクエストを受け取っている。
つまり、サーバー側でリクエストに対する処理が行われることを意味する。
例えば、APIサーバーにDELETEリクエストを送信したとする。
もし、APIサーバーがCORSに対応しておらず、Originリクエストヘッダーを制限する実装になっていなかったら、このDELETEリクエストを受け入れ削除を実行してしまう。
ただし、CORSに対応していないためレスポンスにAccess-Control-Allow-Originレスポンスヘッダーは無い。
すると、ブラウザはレスポンスを確認してCORS違反と判断しエラーにするが、サーバー側での削除処理は実行されてしまう。
そのため、サービスに重大な影響を及ぼす恐れのある操作は、Access-Control-Allow-Originレスポンスヘッダーを確認したブラウザが処理を実行する前に、リクエストそのものを止めなければならない。
これを解決するために、今から送ろうとしているCORSリクエストをAPIサーバーが許可しているのか確認するために、Preflight Requestが考案された。  

Preflight Requestはサーバーに事前確認を行うために、ブラウザによって自動で送信される。
例えば、DELETEのリクエストを送信しようとすると、ブラウザは次のようなPreflight Requestのリクエストを送信する。

```
OPTIONS /resource/foo
Access-Control-Request-Method: DELETE
Access-Control-Request-Headers: origin, x-requested-with
Origin: https://foo.bar.org
```

[参考](https://developer.mozilla.org/ja/docs/Glossary/Preflight_request)  

ブラウザは、OPTIONSメソッドでAccess-Control-Request-Methodリクエストヘッダーにこれから送信するメソッドを付与し、リクエストを送信する。
サーバーが許可している場合は、次のようなPreflight Requestへのレスポンスを返す。

```
HTTP/1.1 204 No Content
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Max-Age: 86400
```

[参考](https://developer.mozilla.org/ja/docs/Glossary/Preflight_request)

そして、サーバーはAccess-Control-Allow-Methodsレスポンスヘッダーに許可しているメソッドをブラウザに伝える。
受け取ったブラウザは、「このサーバーはCORSに対応しており、このOriginからのDELETEを許可している」と判断し、実際のリクエストを送信する。
これにより、CORSが許可されていない場合でも、実際のDELETEリクエストを送らず、サービスに意図しない影響が発生するのを防ぐことができる。

一方で、Preflight Requestが不要なリクエストをSimple Requestと呼ぶ。
Simple Requestについては後述する。

## 問題2

## クイズ1
