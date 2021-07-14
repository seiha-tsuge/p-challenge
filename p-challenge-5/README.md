# 課題5

## 問題１

サードパーティークッキーは、現在アクセスしているWebサイトとは、異なるドメインが発行したCookieのことである。一方、同一のドメインから発行されたCookieをファーストパーティクッキーという。

## 問題2

ユーザーが最初にWebサイトを訪問した際に、サーバーから送られたCookieをブラウザが保持する。その後、そのWebサイトを再度訪問すると、ブラウザはサーバーにCookieを送信するため、サーバーは送られたCookieを見ることで、同じユーザーが訪問したことを確認できる。この仕組みを利用することで、広告事業者はユーザーの訪問履歴を把握することができる。  
例えば、WebサイトAと広告事業者Xが提携し、AがWebサイト上にJavaScriptを設置し、Aを訪問したブラウザに対して、「Xのサーバーにアクセスして広告の画像を取得してこい」などの指示を出すと、ブラウザはXのサーバーにアクセスする。すると、ブラウザとサーバーの間で通信が発生するため、Xのサーバーもこのブラウザに対してCookieを発行する。  
さらに、広告事業者Xは、WebサイトAだけではなく、WebサイトBやWebサイトC、WebサイトDとも連携し、これらのサイトに同じようにJavaScriptを設置してもらうことで、ユーザーがそれらのWebサイトにアクセスする都度、Xのサーバーにアクセスさせることができる。その結果、XはユーザーがAのみならず、BやCやDを訪問したことも把握できる。広告事業者Xが多くのサイトと提携すればするほど、Xは、ユーザーのWeb上の様々な訪問履歴を、Cookieを介して把握することができる。

## 問題3

- iframeにサードパーティサイトを読み込ませ、サードパーティサイトにて生成されたサードパーティCookieをブラウザに保持させる
- サードパーティサイトの画像を埋め込み、画像取得時にサードパーティのサーバーでCookieが生成され、サードパーティCookieをブラウザに保持させる
- サードパーティのサーバーにリクエストさせるスクリプトを埋め込み、リクエスト時に生成されたサードパーティCookieをブラウザに保持させる

[参考](https://kimagureneet.hatenablog.com/entry/2016/02/11/104614)

## 問題4

- Safariでは、Intelligent Tracking Protection (ITP) と呼ばれるプライバシー保護機能が導入されており、サードパーティCookieをブロックしている
- Firefoxでは、デフォルトでサードパーティCookieをブロックしている
- Chrome, Edge, Firefox, IEは、サードパーティCookieをブロックまたは許可するかユーザーが選択できる
- Chromeは2023年にサードパーティCookieを廃止すると宣言している

[参考:サードパーティの Cookie がブロックされている Safari やその他のブラウザーで ITP を扱う](https://docs.microsoft.com/ja-jp/azure/active-directory/develop/reference-third-party-cookies-spas)  
[参考:サードパーティ Cookie を禁止する](https://support.mozilla.org/ja/kb/disable-third-party-cookies)  
[参考:Microsoft Edge で一時的に Cookie とサイト データを許可](https://support.microsoft.com/ja-jp/microsoft-edge/microsoft-edge-%E3%81%A7%E4%B8%80%E6%99%82%E7%9A%84%E3%81%AB-cookie-%E3%81%A8%E3%82%B5%E3%82%A4%E3%83%88-%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E8%A8%B1%E5%8F%AF-597f04f2-c0ce-f08c-7c2b-541086362bd2)  
[参考:Windows 10のInternet Explorer 11でCookieを有効にする方法](https://faq.nec-lavie.jp/qasearch/1007/app/servlet/relatedqa?QID=019168)
[参考:Chrome で Cookie の削除、有効化、管理を行う](https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=ja#zippy=%2C%E7%89%B9%E5%AE%9A%E3%81%AE%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AE-cookie-%E3%82%92%E8%A8%B1%E5%8F%AF%E3%81%BE%E3%81%9F%E3%81%AF%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B%2Cchrome-%E3%82%92%E7%B5%82%E4%BA%86%E3%81%97%E3%81%9F%E5%BE%8C%E3%81%AB-cookie-%E3%82%92%E5%89%8A%E9%99%A4%E3%81%99%E3%82%8B%2Ccookie-%E3%82%92%E8%A8%B1%E5%8F%AF%E3%81%BE%E3%81%9F%E3%81%AF%E3%83%96%E3%83%AD%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B)  
[参考:サードパーティ Cookie 廃止に関するタイムラインの変更について](https://japan.googleblog.com/2021/06/cookie.html)

## 問題5

ファーストパーティクッキーである。  
すべてのCookieには、ドメインが関連付けられている。ポートが異なっていても、関連付けられたドメインが同一の場合はファーストパーティークッキーになる。
