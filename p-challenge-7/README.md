# 課題7

## 課題1

### 問題1

キャッシュを使うことで、リソースを持ったサーバーへのアクセスを減らすことができるため、通信量や通信時間などを節約することができる。

### 問題2

#### ローカルキャッシュ

ローカルキャッシュは、端末のストレージやメモリを利用するキャッシュで、
スマートフォンで端末にダウンロードしたデータを利用するのもローカルキャッシュの一種といえる。
主なローカルキャッシュはブラウザキャッシュで、多くの場合、
HTML/CSS/JavaScript/画像などをキャッシュすることで、これらの共通するコンテンツを毎回ネットワーク越しに取得する必要がなくなる。

#### 配信経路上のキャッシュ

配信経路上に配置されたキャッシュは、Proxy/CDN（主にCDN）を用いる。
CDNとはContent Delivery Networkの略で、グローバルにキャッシュサーバーを分散配置し、エンドユーザーに最も近い経路にあるキャッシュサーバーからコンテンツを配信する仕組み。
キャッシュサーバーを用いることで、リソースを持ったオリジンサーバーへのアクセスを減らすことができるため、通信量や通信時間などを節約することができる。

[CDN](https://www.otsuka-shokai.co.jp/words/cdn.html)  
[Webサイトの表⽰速度をCDN・キャッシュで改善して顧客を逃さない](https://www.ntt.com/bizon/network-ict_website-response.html)

#### プロキシキャッシュ

プロキシキャッシュは、プロキシサーバーを用いる。
基本的なプロキシサーバーの動作は、クライアントから受け取ったリクエストをオリジンサーバーに転送し、オリジンサーバーからのレスポンスをクライアントに転送する。
プロキシサーバーにキャッシュを保持することで、プロキシサーバーに再度同じリソース宛のリクエストがきた場合、キャッシュをレスポンスすることでオリジンサーバーへのアクセスを減らすことができる。  

プロキシキャッシュは、複数のクライアントに対してキャッシュされたコンテンツを配信する点は、前述したCDNを用いる経路上のキャッシュとほとんど同一である。
そのため、プロキシキャッシュは経路上のキャッシュとしても考えられる。
CDNとプロキシによるキャッシュの大きな違いは、ユーザーの近くに存在する可能性の高低である。
プロキシサーバーは構成的にオリジンサーバーの近くに展開することが多いため、たとえば、オリジンサーバーが日本にあると、プロキシサーバーにキャッシュしていても海外からのアクセスなどはそこまで効果的に処理できない。
一方、CDNはクライアントに近い場所でレスポンスすることができるため、プロキシサーバーより通信時間を節約できる可能性がある。

[Web配信の技術―HTTPキャッシュ・リバースプロキシ・CDNを活用する](https://gihyo.jp/book/2021/978-4-297-11925-6)

### 問題3

#### Vary
> キャッシュからページを配信するかどうかを決定する際にユーザー エージェントを考慮する必要があることを、ISP などで使用されるキャッシュ サーバーに知らせます。Vary HTTP ヘッダーがないと、モバイル ユーザーにパソコン用 HTML ページのキャッシュが誤って配信される場合（またはその逆の場合）があります。

[動的な配信](https://developers.google.com/search/mobile-sites/mobile-seo/dynamic-serving?hl=ja#the-vary-http-header)

#### Cache-Control

ディレクティブと呼ばれるコマンドを指定することで、キャッシュの動作を指定する。
指定するディレクティブにはパラメータがあるものとないものがあり、複数のディレクティブを指定する場合には、カンマで区切る。

[Cache-Control](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Cache-Control)

#### Expires

リソースの有効期限の日時を伝える。キャッシュサーバーが、Expiresを含んだレスポンスを受け取った場合、指定された日時までレスポンスのコピーを保持しておいて、リクエストにはキャッシュで応える。
指定日時を過ぎた場合には、リクエストが来た段階でオリジンサーバーにリソースを取得しに行く。

### 問題4

> キャッシュサイズの容量上限を超えると何が起きるでしょうか？

#### Chrome

キャッシュサイズの容量から自動で必要なときに削除する

[Google Chrome のキャッシュのサイズを設定する](https://www.tipsfound.com/chrome/01003)

#### Firefox

- LRU ポリシーによりもっとも古く使用されたものから削除される
- オリジン立ち退き (origin eviction) と呼ばれる処理を実行して、ストレージの総量が再び上限を下回るまで、オリジン全体に相当するデータを削除する

[ブラウザーのストレージ制限と削除基準](https://www.tipsfound.com/chrome/01003)

#### Internet Explorer 10 以降

10MBを超えた場合、ユーザーに通知される

[Storage for the web](https://web.dev/storage-for-the-web/)

> 容量上限はどの程度でしょうか？

#### Chrome

キャッシュのサイズ上限は、利用可能なディスク容量の割合を計算し設定する。たとえば、ディスク容量が 10 GB であれば、キャッシュの上限は 1 GB に設定する。
また、2GBを超える値は無視される。

[管理者の皆様へ: Chrome のパフォーマンスを強化する改良点とポリシーをご確認ください](https://cloud.google.com/blog/ja/products/chrome-enterprise/improvements-and-polices-make-chrome-more-performant)  
[Max disk cache size in google chrome](https://stackoverflow.com/questions/22280326/max-disk-cache-size-in-google-chrome)  
[What is Chrome default cache size limit?](https://newbedev.com/what-is-chrome-default-cache-size-limit)

#### Firefox

- ブラウザーのストレージの最大容量は動的であり、ハードディスクドライブのサイズに応じて変わる。
- グローバルリミットはディスクの空き量量の 50%

[ブラウザーのストレージ制限と削除基準](https://www.tipsfound.com/chrome/01003)

#### Internet Explorer 10 以降

最大250MB

[Storage for the web](https://web.dev/storage-for-the-web/)

#### Safari

約1GB

[Storage for the web](https://web.dev/storage-for-the-web/)

### 問題5

> 「動的なサイトをキャッシュするなら、expiresは使わない方が良いよ」と言われました。なぜでしょうか？

Expires ヘッダをつけてコンテンツを返却すると、指定された日時を過ぎるまでキャッシュを利用するため、オリジンサーバー上のコンテンツが更新されたとしても、更新内容を反映することができない。 
よって更新頻度が高い動的コンテンツにはExpiresは使わない方が良い

[HTTPレスポンスヘッダ Expires とは？](https://weblabo.oscasierra.net/http-header-response-expires/)

> どうすれば良いのでしょうか？

- Last-Modified レスポンスヘッダーとIf-Modified-Since リクエストヘッダーを使用する

If-Modified-Since リクエストヘッダーは、条件付きリクエストの1つで、リソースの更新日時がフィールド値より新しいならばリクエストを受け付けて欲しいとサーバーに伝えることができる。フィールド値に指定した日時以降に、指定したリソースが更新されていない場合には、ステータスコード304 Not Modifiedレスポンスを返す。取得したリソースの更新日時は、Last-Modified レスポンスヘッダーを確認することで知ることができる。

- If-None-Match リクエストヘッダーとETag レスポンスヘッダーを使用する

If-None-Match リクエストヘッダーは、条件付きリクエストの1つで、If-None-Matchのフィールド値に指定したEtag値が、指定したリソースのEtag値と一致しないならリクエストを受け付けて欲しいとサーバーに伝えることができる。一致する場合には、ステータスコード304 Not Modifiedレスポンスを返す。

[仕組みから理解するブラウザキャッシュ](https://satoyan419.com/post/browser-caching/)  
[If-Modified-Since](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/If-Modified-Since)  
[If-None-Match](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/If-None-Match)

### 問題6

#### GitHub

<img width="1346" alt="スクリーンショット 2021-09-20 2 29 13" src="https://user-images.githubusercontent.com/49358142/133937120-8b8b8ac4-a79e-4f38-9267-361ee68e2aa1.png">

サーバーからStatus Code 200を受け取っているので、 コンテンツを取得している。  
cache-control: max-age=0が設定されているため、キャッシュは即時に古くなる。  
また、must-revalidateが設定されているため、サーバーに問い合わせてコンテンツが変更されていないことが確認できた場合のみ、キャッシュを利用する。  
コンテンツが変更されていないことを確認するために、Response Headersにetag: W/"05310d956120c3971f6068e43d92fb20"　が含まれている。

<img width="1273" alt="スクリーンショット 2021-09-20 2 30 55" src="https://user-images.githubusercontent.com/49358142/133937098-b217b0d7-9717-462d-9987-83e0fa62bead.png">

サーバーからStatus Code 304を受け取っているので、 ブラウザはローカルキャッシュを利用している。  
Request Headersのif-none-matchにetag: W/"05310d956120c3971f6068e43d92fb20"の値を渡して、コンテンツが変わって変更されていないことを確認している。

#### スプラトゥーン2 任天堂

サーバーからStatus Code 200を受け取っているので、 コンテンツを取得している。 
コンテンツが更新されていないことを確認するために、Response Headersにlast-modified: Wed, 18 Aug 2021 14:58:47 GMTが含まれている。  

サーバーからStatus Code 304を受け取っているので、 ブラウザはローカルキャッシュを利用している。  
Request Headersのif-modified-since: Wed, 18 Aug 2021 14:58:47 GMTの値を渡して、コンテンツが変わって変更されていないことを確認している。

- ブラウザのキャッシュがWEBサービスに用いられている実例を、3つ以上見つけて共有してください。どのような仕組みで対象がキャッシュされているのか、技術的な流れを説明してみてください
  - chromeの開発者コンソールの「ネットワーク」タブを使って探すのがオススメです
  - こんなスクリーンショットを撮ってみてください
  - https://drive.google.com/file/d/1OmrwTdmkMCA9cmbfWNyQKWJiJCsTQWuF/view

## 課題３

## 課題4

### クイズ1

### クイズ2

### クイズ3
