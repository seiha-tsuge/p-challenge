# 課題 8

## 課題 1

### 問題 1

#### クロスサイトスクリプティング

【脆弱性の仕組み】  
クロスサイトスクリプティング脆弱性が生じる原因は、HTML 生成の際に、HTML の文法上特別な意味を持つ特殊記号（メタ文字）を正しく扱っていないことであり、それにより、開発者の意図しない形で HTML や JavScript を注入・変形される。

【発生し得る被害】

- 偽の入力フォームなどによってユーザーの個人情報が盗まれる
- スクリプトによってユーザーの Cookie の値が盗まれたり、被害者が意図しないリクエストの送信が行われる
- 偽の文章や画像などが表示される

【対処法】  
クロスサイトスクリプティングが発生する主要因は、HTML を生成する際のエスケープ漏れ。したがって、エスケープすることが重要な対策になる。

- 要素内容については「<」と「&」をエスケープする
- 属性値については、ダブルクォートで囲って、「<」「"」「&」をエスケープする

Web アプリケーションの中には、JavaScript の文字列リテラルを動的生成する場合がある。その場合の対策は以下になる。

1. JavaScript の文法から、引用符（「"」または「'」）と「\」や改行をエスケープする

| 文字 | エスケープ後 |
| ---- | ------------ |
| \    | \\           |
| '    | \'           |
| "    | \"           |
| 改行 | \n           |

2-1.　イベントハンドラ中の場合は、1 の結果を文字参照により HTML エスケープして、ダブルクォートで囲む  
2-2.　 script 要素内の場合は、1 の結果に「</script」という文字列が出現しないようにする

---

#### OS コマンドインジェクション

【脆弱性の仕組み】  
OS コマンドインジェクション脆弱性が発生するケースには、以下の 2 通りがある。

- シェル経由で OS コマンドを呼び出す際に、シェルのメタ文字がエスケープされていない場合
- シェル機能を呼び出せる関数を使用している場合

シェルには、1 行の指定で複数のプログラムを起動する方法が用意されている。Unix シェルの場合は、以下の記法が使える。

<img width="401" alt="OS コマンドインジェクション" src="https://user-images.githubusercontent.com/49358142/138070725-e54fffea-446b-4798-9f51-29de1bbeae57.png">

Windows の cmd.exe の場合は、「&」により複数のコマンドを続けて実行できる。また、| や、&&, || も Unix 同様利用可能。シェルの利用時に特別な意味を持つ記号文字をメタ文字と呼ぶ。
OS コマンドのパラメーターとして指定する文字列に、シェルのメタ文字を混入させることにより、開発者の意図とは異なる OS コマンドが実行可能となることが OS コマンドインジェクション脆弱性の原因。

Perl の open 関数は、ファイルをオープンする機能ですが、呼び出し方によってはシェル経由で OS コマンドを実行できる。open 関数により Linux の pwd コマンドを起動するには、以下のプログラムのようにパイプ記号をコマンド名の後ろにつけて open 関数を呼び出す。

```Perl
#! /usr/bin/perl
print "Content-Type: text/plain\n\n";
open FL '/bin/pwd|' or die $!;
print <FL>;
close FL;
```

このプログラムを実行すると、pwd コマンドによりカレントディレクトリ名が表示される。Perl の open 関数を用いて開発されたプログラムが、ファイル名を外部から指定できる場合、ファイル名の前後にパイプ記号を追加することで、OS コマンド・インジェクション攻撃ができる場合がある。

【発生し得る被害】  
OS コマンドインジェクションは、Windows や Linux などのコマンドラインからプログラムを起動するシェルに対してコマンドを送ることができる。
つまり、OS 上で動作するさまざまなプログラムを実行することができる。例えば、以下のような攻撃シナリオが考えられる。

- 攻撃用ツールを外部からダウンロードする
- ダウンロードしたツールに実行権限を与える
- OS の脆弱性を内部から攻撃して管理者権限を得る
- Web サーバーは攻撃者の思いのままになる

【対処法】

- OS コマンド呼び出しを使わない実装方法を選択する
- シェル呼び出し機能のある関数の利用を避ける
- 外部から入力された文字列をコマンドラインのパラメーターに渡さない
- OS コマンドに渡すパラメーターを安全な関数によりエスケープする

---

#### SQL インジェクション

【脆弱性の仕組み】  
SQL インジェクション脆弱性が発生する典型的な原因はリテラルの扱いにある。SQL には、型ごとのリテラル形式が用意されているが、文字列リテラルと数値リテラルが頻繁に利用される。

SQL の標準規格では、文字列リテラルはシングルクォートで囲む。文字列リテラル中にシングルクォートを含めたい場合は、シングルクォートを重ねる。
例えば、「O'Reilly」を SQL の文字列リテラルにすると「'O''Reilly'」になる。

```SQL
SELECT * FROM books WHERE author='O''Reilly'
```

ところが、SQL インジェクション脆弱性のあるプログラムでは、シングルクォートを重ねる処理が抜けているため、次のような SQL 文が組み立てられる。

```SQL
SELECT * FROM books WHERE author='O'Reilly'
```

「'O'」で文字列リテラルが終了され、後続の「Reilly'」が文字列リテラルをはみ出した状態になる。この部分は SQL 文として意味を持たないので構文エラーになる。  
では、「Reilly'」の代わりに、SQL 文として意味を持つ文字列が挿入(インジェクション)されたらどうなるか。これが、SQL インジェクション脆弱性が発生する仕組みになる。シングルクォートなどを用いてリテラルからはみ出した文字列を SQL 文として認識させ、アプリケーションが呼び出す SQL 文を変更させる手法が SQL インジェクションである。

数値リテラルでも SQL インジェクションは発生する。Web アプリケーション開発に広く用いられるスクリプト系の言語は変数に型の制約がないため、数値を想定した変数に数値以外の文字が入る場合がある。
例えば、age は整数型で、社員の年齢が入っていると想定する。

```SQL
SELECT * FROM employees WHERE age < $age
```

ここで、変数$age に以下のような文字列が入力された場合、SQL インジェクション攻撃となる。

```SQL
1;DELETE FROM employees
```

この場合に組み立てられる SQL 文は以下になる。

```SQL
SELECT * FROM employees WHERE age < 1;DELETE FROM employees
```

これを実行すると社員情報はすべて削除される。数値リテラルはシングルクォートで囲まないため、数値でない文字が現れた時点で数値リテラルは終了する。先ほどの例では、セミコロン「;」は数値ではないため、セミコロン以降が数値リテラルをはみ出し、SQL 文の一部として解釈される。

【発生し得る被害】

- データベース内のデータの不正な閲覧や改竄
- 認証の回避
- データベースサーバーを経由したプログラムの実行など

【対処法】  
SQL インジェクションの根本原因は、パラメータとして指定した文字列の一部がリテラルをはみ出すことにより、SQL 文が変更されることである。そのため、SQL インジェクションを防ぐためには、SQL 文を組み立てる際に SQL 文の変更を防ぐ必要がある。

- プレースホルダにより SQL 文を組み立てる
- アプリケーション側で SQL 文を組み立てる際に、リテラルを正しく構成するなど、SQL 文が変更されないようにする

---

#### クロスサイトリクエストフォージェリ

【脆弱性の仕組み】  
クロスサイトリクエストフォージェリ脆弱性が発生する背景としては以下の Web の性質がある

1. form 要素の action 属性にはどのドメインの URL でも指定できる
1. クッキーに保管されたセッション ID は、対象サイトに自動的に送信される

1 は、罠などのサイトからでも、攻撃対象サイトにリクエストを送信できる。  
2 は、罠経由のリクエストに対しても、セッション ID のクッキー値が送信されるので、認証された状態で攻撃リクエストが送信される。

【発生し得る被害】

- 認証済みのユーザーの権限で設定情報などの更新
- 認証済みのユーザーの権限で利用可能なサービスの悪用

【対処法】  
クロスサイトリクエストフォージェリ攻撃を防ぐためには、「重要な処理」に対するリクエストが正規利用者の意図したものであることを確認する必要がある。
そのために、以下の 2 点を実施する。

- クロスサイトリクエストフォージェリ対策の必要なページを区別する
- 正規利用者の意図したリクエストを確認できるよう実装する
  - 秘密情報(トークン)の埋め込み
  - パスワード再入力
  - Referer のチェック

[参考書籍: 体系的に学ぶ 安全な Web アプリケーションの作り方 第 2 版](https://www.sbcr.jp/product/4797393163/)

## 課題 2

### クイズ 1

Web API の CSRF 対策として、OWASP が挙げていないものは次のうちどれ？  
OWASP が対策としてあげているものは以下のサイトから確認することができます  
[参考資料: Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

- シンクロナイザートークンパターン（CSRF トークン）
- 二重送信クッキー
- カスタムリクエストヘッダによる対策
- 入力データの MIME タイプを検証

> OWASP（Open Web Application Security Project）（読み方：オワスプ）とは、ソフトウェアや Web アプリケーションのセキュリティ分野の研究やガイドラインの作成、脆弱性診断ツールの開発、イベント開催など多岐にわたる活動をしているオープンソース・ソフトウェアコミュニティです。アメリカ合衆国メリーランド州に本部が存在し NPO（非営利）団体である
> https://www.itmanage.co.jp/column/about-owasp/

### クイズ 2

クロスサイトスクリプティング攻撃を防ぐためとは関係が無いレスポンスヘッダーはどれ？

- Content-Security-Policy
- X-XSS-Protection
- Strict-Transport-Security

### クイズ 3

エスケープの不備による脆弱性では無いものはどれ？

- クロスサイトスクリプティング
- クロスサイトリクエストフォージェリ
- OS コマンドインジェクション

## 課題 3

### Command Injection

<img width="675" alt="Command Injection" src="https://user-images.githubusercontent.com/49358142/138423700-07a65ff6-706e-4d62-b9d9-b50dd931f512.png">

#### 防御手段

> チェック方法には、その引数に許可する文字の組み合わせを洗い出し、その組み合わせ以外は許可しない「ホワイトリスト方式」をお勧めします。  
> チェック方法には、OS コマンド・インジェクション攻撃に悪用される記号文字（「|」、「<」、「>」等）等、問題となりうる文字を洗い出し、これを許可しない「ブラックリスト方式」もありますが、この方法はチェックに漏れが生じる可能性があるため、お勧めできません。  
> [安全なウェブサイトの作り方 - 1.2 OS コマンド・インジェクション](https://www.ipa.go.jp/security/vuln/websecurity-HTML-1_2.html)

【ブラックリスト方式】  
シェルのメタ文字をエスケープする

<img width="565" alt="Command Injection" src="https://user-images.githubusercontent.com/49358142/138427626-69ecaaa6-ffa2-4dc4-8670-1cb878fe22a3.png">

【ホワイトリスト方式】  
IP アドレスの入力のみ受け付ける

<img width="682" alt="Command Injection" src="https://user-images.githubusercontent.com/49358142/138428919-5126f059-2c1b-4137-b38b-181d57e2987f.png">

<img width="1066" alt="Command Injection" src="https://user-images.githubusercontent.com/49358142/138428739-7ab57a1a-0341-4ce1-8033-b9590ea6c896.png">

### Cross Site Request Forgery (CSRF)

今すぐモテたい方はこちらを[クリック](http://localhost/vulnerabilities/csrf/?password_new=test&password_conf=test&Change=Change)

クリックし、パスワードが変更された結果が以下

<img width="1405" alt="Cross Site Request Forgery" src="https://user-images.githubusercontent.com/49358142/138434986-1e6aa707-88b4-4bf6-a91e-2cb313c14466.png">

#### 防御手段

- Referer のチェック

Referer のチェックには欠点がある。パーソナルファイヤーウォールやブラウザのアドオンなどで、Referer が送信されないように設定している利用者は、ページを実行できなくなる。

<img width="617" alt="Cross Site Request Forgery" src="https://user-images.githubusercontent.com/49358142/138449129-ce9dfc1a-fa57-41ce-b4bf-ff254a0a3c36.png">

- CSRF トークンを含める
- 確認用パスワードの入力を求める

<img width="685" alt="Cross Site Request Forgery" src="https://user-images.githubusercontent.com/49358142/138449172-1b16614b-a889-4a7a-9b02-bce6bfa29528.png">

<img width="607" alt="Cross Site Request Forgery" src="https://user-images.githubusercontent.com/49358142/138449663-160bc9f0-6b19-452a-8acb-4fff676c1298.png">

### SQL Injection

<img width="675" alt="SQL Injection" src="https://user-images.githubusercontent.com/49358142/138451709-aa802873-c97d-4f53-8ecb-d69e6be857d1.png">

#### 防御手段

- トークンのチェック
- 数値でなければ SQL を実行しない
- プレースホルダとバインド機構により SQL 文を組み立てる
- エスケープ処理を施す

<img width="705" alt="SQL Injection" src="https://user-images.githubusercontent.com/49358142/138462408-334ee6ca-fa44-48ae-9948-ee642f8fa93a.png">

[参考: 【PHP】PDO の静的プレースホルダと動的プレースホルダの違いを確認する](https://qiita.com/7968/items/7ddd59b94eb5a4fb6eaf)

### Reflected Cross Site Scripting (XSS)

> ?name=<script>alert(document.cookie)</script>

<img width="466" alt="Reflected Cross Site Scripting" src="https://user-images.githubusercontent.com/49358142/138475814-4a6598e4-822c-4343-84a3-7c194974b5a2.png">

#### 防御手段

- 特殊文字をエスケープする

<img width="593" alt="Reflected Cross Site Scripting" src="https://user-images.githubusercontent.com/49358142/138479651-685c32c7-9ff9-4ce8-9824-e74d77559b78.png">

<img width="837" alt="Reflected Cross Site Scripting" src="https://user-images.githubusercontent.com/49358142/138480540-48b1b63e-729a-47f9-bd75-d70bdf3530f9.png">

[htmlspecialchars](https://www.php.net/manual/ja/function.htmlspecialchars.php)
