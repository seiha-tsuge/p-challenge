# 課題 17

## 課題 1

### 問題 1

複合インデックスは、複数の列にまたがるひとつのインデックスのことです。

例えば、旅行会社を運営していて、顧客の名前（姓、名）と旅行の目的地をデータベースに保存しているとします。あるとき、特定の姓と目的地を持つ顧客をすばやく見つける必要が出てきたとします。このような時、姓と目的地の2つの列を結びつけてインデックス化すると、探しやすくなります。これが複合インデックスです。

複合インデックスは、特定の姓と目的地を結びつけて索引化します。つまり、「田中さんが訪れたバリ島」というようなデータを速やかに見つけ出すことができます。このように、複合インデックスは、特定の組み合わせの情報を検索する際に非常に役立ちます。

[複合インデックス](https://use-the-index-luke.com/ja/sql/where-clause/the-equals-operator/concatenated-keys)

### 問題 2

`CREATE INDEX employees_name ON employees (first_name, last_name)`は、first_nameとlast_nameの列の組み合わせに対してインデックスを作成します。しかし、このインデックスでは、last_nameのみで検索を行うとインデックスが使用されません。なぜなら、インデックスは左から順に機能し、first_nameがクエリに含まれていない場合、その後ろの列のインデックスは使用されないからです。電話帳を例にすると、名前だけで電話帳を引くことができないように、2列のインデックスは、2番目の列だけでの検索はできません。つまり、このインデックスはfirst_nameとlast_nameが共にクエリに存在する場合、またはfirst_nameだけでの検索に対しては効率的ですが、last_nameだけでの検索ではフルテーブルスキャン（全レコードを調査）が必要となります。


[複合インデックス](https://use-the-index-luke.com/ja/sql/where-clause/the-equals-operator/concatenated-keys)

## 課題 2

### 問題 1

- 先の課題で使った「従業員データ」をこの課題でも使いましょう！

### 問題 2
- 2つ以上のwhere句を組み合わせたSELECTクエリを3つ考えてください
    - クエリを実行して、取得に要した時間を測定してください
    - 上記のSELECTクエリを高速化する複合インデックスを作成してください
    - 複合インデックスを使って検索した場合、どれだけ検索速度に差が出るか、測定してください
    - EXPLAINを使って、ちゃんと複合インデックスが使われていることを証明してください

``` SQL
SELECT * FROM employees WHERE first_name = "Georgi" AND last_name = "Facello";
```

32.91 ms
    
``` SQL
CREATE INDEX index_first_name_last_name ON employees(first_name, last_name);
```

``` SQL
SELECT * FROM employees WHERE first_name = "Georgi" AND last_name = "Facello";
```

2.3 ms

``` SQL
EXPLAIN SELECT * FROM employees WHERE first_name = "Georgi" AND last_name = "Facello";
```

| id  | select_type | table     | partitions | type | possible_keys              | key                        | key_len | ref         | rows | filtered | Extra |
| --- | ----------- | --------- | ---------- | ---- | -------------------------- | -------------------------- | ------- | ----------- | ---- | -------- | ----- |
| 1   | SIMPLE      | employees | null       | ref  | index_first_name_last_name | index_first_name_last_name | 34      | const,const | 2    | 100      | null  |
