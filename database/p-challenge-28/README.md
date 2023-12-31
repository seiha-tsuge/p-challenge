# 課題 28

## 課題 1

### 問題 1

https://dbdiagram.io/d/658cd2d389dea62799a56914

- 注文は「～する」と表現される行為で、「注文する」が一例です。これらの行為は「イベント（出来事）系」テーブルに記録されます。
    - イベント系には出荷や入金などが含まれ、これらも「～する」と表現されます。
- 注文を処理する際には、「誰が」注文するかと「何を」注文するかを知る必要があります。これらの情報は、用紙に「お名前」と商品名として記載されています。
    - これに基づいて、「顧客」テーブルと「商品」テーブルを作成します。しかし、「顧客する」や「商品する」という表現は日本語として不適切です。
    - これらはイベントではなく、ビジネスにおける重要な「リソース（資産）系」として扱われます。

[楽々ERDレッスン 第1回：「お持ち帰りご注文用紙」編](https://codezine.jp/article/detail/154)  
[楽々ERDレッスン 第2回：「図書館の予約申込書」編](https://codezine.jp/article/detail/175)  
[SQLで消費税の処理](https://sikushima.hatenablog.com/entry/2020/06/09/113306)  

## 課題 2

### 問題 1

https://dbdiagram.io/d/65911419ac844320ae060d70

- 将来的にはお寿司だけでなく、ポテトなどのサイドメニューも持ち帰りが可能になると想定しました。
- さまざまなサイズ（大・中・小など）を提供し、サイズに応じて価格が異なることを想定しました。
- ただし、すべての商品がサイズに応じて同じ割合で価格が変わるわけではありません。
- 当初は商品ごとに異なるサイズに応じた価格設定を検討しましたが、最終的にはすべての商品にサイズ別の価格を設定することはしませんでした。
- その代わりに、商品をカテゴリーごとに分類し、各カテゴリーに対してサイズ別の価格設定を行うことにしました。

### 問題 2

データを整理しやすくするために、お好み寿司とセットメニューの注文をそれぞれ独立したテーブルで管理します。さらに、セットメニューに含まれる具体的な寿司ネタを追跡しやすくするため、セットメニュー内の寿司ネタに含まれる寿司ネタを管理するテーブルを用意します。

## 課題 3

店舗ごとお持ち帰りのメニューが異なります。