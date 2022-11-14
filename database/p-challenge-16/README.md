# 課題 15

## 課題 1

### 問題 1

ある本から特定の単語を見つけ出したいとき、最初のページから一枚一枚ページをめくって探すのは時間がかかってしまう。
本の索引はこの手間を省略し、目的の単語が何ページ目にあるのかを示してくれるので、直接該当ページに飛ぶことができる。  
インデックスをプログラミング言語的な表現をすると(x: a)の連想配列になる。xはキーで、aはそれに結びつく実データあるいはポインタを意味する。
実際のデーターベースでは、aはデータへのポインタであることが多い。  
索引もキーとなる単語とページ番号の連想配列となっている。  

[参考: 達人に学ぶDB設計 徹底指南書 ～初級者で終わりたくないあなたへ](https://www.shoeisha.co.jp/book/detail/9784798124704)

### 問題 2

インデックスを使うかどうかは、DBMSが自動的に判断する。
ゆえに、作成したインデックスが、必ずしも使われるわけではない。
また、手当たり次第に作成しても効果が出るわけではなく、正しい指針を理解した上で使って初めて効果が得られる。
そのため、スロークエリーログを使用して、インデックスの成果を確かめる必要がある。

[参考: 達人に学ぶDB設計 徹底指南書 ～初級者で終わりたくないあなたへ](https://www.shoeisha.co.jp/book/detail/9784798124704)

### 問題 3

インデックスを作成する列の適否を判断するために、最も重要な情報が「カーディナリティ」である。
カーディナリティは、あるカラムの値が、どのぐらいの種類の多さを持つか、ということを表す概念になる。  
例えば、「性別」を表すカラムが持つ値として、次のようなものが考えられる。

1. 男性
1. 女性
1. 不詳

この場合、カーディナリティは「3」になる。

インデックスを作るときは、カーディナリティの高い列を選ぶことが基本となる。
例えば、「顧客の口座番号」や「誕生日」のカーディナリティは、非常にたくさんの種類があると想定される。
目安としては、特定のキー値を指定した時に、全体のレコード数の5%程度に絞り込めるだけのカーディナリティがあること。
365日のうち1日を指定するSELECT文を考えると、0.3%に絞り込めるため、「誕生日」にインデックスを作る意味はある、と判断できる。

[参考: 達人に学ぶDB設計 徹底指南書 ～初級者で終わりたくないあなたへ](https://www.shoeisha.co.jp/book/detail/9784798124704)

### 問題 4

インデックスのはたらきによって、テーブルアクセスしなくても良かった場合のことを、 カバリングインデックスと言う。  
[インデックスのみのスキャン: テーブルアクセスを 避ける](https://use-the-index-luke.com/ja/sql/clustering/index-only-scan-covering-index)

クエリを処理するのに必要なデータを全て含んでいるようなインデックスをカバリングインデックスと呼ぶ。  
[MySQL カバリングインデックス](https://qiita.com/riita10069/items/29953f51126ed4e0cf82)

インデックスに結果セットに必要なすべてのカラムが含まれている (カバリングインデックスと呼ばれます) 場合、クエリーはテーブルデータをまったく読み取らなくても済む可能性がある。  
[8.5.5 InnoDB クエリーの最適化](https://dev.mysql.com/doc/refman/5.6/ja/optimizing-innodb-queries.html)

## 課題 2

- WHERE句を1つだけ含むSELECTクエリを3つ考えてください
  - クエリを実行して、取得に要した時間を測定してください

``` SQL
SELECT * FROM salaries WHERE from_date = '1986-06-26';
```

``` SQL
SELECT * FROM titles WHERE title = 'Senior Engineer';
```

``` SQL
SELECT * FROM employees WHERE first_name = 'Georgi';
```

| EVENT_ID | Duration | SQL_TEXT                                               |
| -------- | -------- | ------------------------------------------------------ |
| 122      | 0.868718 | SELECT \* FROM salaries WHERE from_date = '1986-06-26' |
| 178      | 0.651761 | SELECT \* FROM titles WHERE title = 'Senior Engineer'  |
| 234      | 0.578365 | SELECT \* FROM employees WHERE first_name = 'Georgi'   |

[Query Profiling Using Performance Schema](https://dev.mysql.com/doc/refman/8.0/en/performance-schema-query-profiling.html)

- 上記のSELECTクエリを高速化するインデックスを作成してください

``` SQL
ALTER TABLE salaries ADD INDEX index_from_date(from_date);
```

``` SQL
ALTER TABLE titles ADD INDEX index_title(title);
```

``` SQL
ALTER TABLE employees ADD INDEX index_first_name(first_name);
```

- インデックスを使って検索した場合どれだけ検索速度に差が出るか、測定してください
- EXPLAINを使って、ちゃんとインデックスが使われていることを証明してください

| EVENT_ID | Duration | SQL_TEXT                                               |
| -------- | -------- | ------------------------------------------------------ |
| 162      | 0.000821 | SELECT \* FROM salaries WHERE from_date = '1986-06-26' |
| 432      | 0.320211 | SELECT \* FROM titles WHERE title = 'Senior Engineer'  |
| 460      | 0.001398 | SELECT \* FROM employees WHERE first_name = 'Georgi'   |

| id  | select_type | table     | partitions | type | possible_keys    | key              | key_len | ref   | rows   | filtered | Extra |
| --- | ----------- | --------- | ---------- | ---- | ---------------- | ---------------- | ------- | ----- | ------ | -------- | ----- |
| 1   | SIMPLE      | salaries  | null       | ref  | index_from_date  | index_from_date  | 3       | const | 88     | 100      | null  |
| 1   | SIMPLE      | titles    | null       | ref  | index_title      | index_title      | 52      | const | 184986 | 100      | null  |
| 1   | SIMPLE      | employees | null       | ref  | index_first_name | index_first_name | 16      | const | 253    | 100      | null  |
