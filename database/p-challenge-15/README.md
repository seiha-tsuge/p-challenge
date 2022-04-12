# 課題 15

## 課題 1

### 問題 1

#### 問 1

```SQL
SELECT
  CustomerID,
  COUNT(CustomerID) as number_of_orders
FROM
  orders
WHERE
  OrderDate LIKE "1996%"
GROUP BY
  CustomerID
HAVING number_of_orders >= 3
ORDER BY
  number_of_orders DESC
```

#### 問 2

```SQL
SELECT
  C.CustomerID,
  C.CustomerName,
  COUNT(C.CustomerID) as number_of_orders
FROM
  Customers C,
  Orders O
WHERE
  C.CustomerID = O.CustomerID
AND O.OrderDate LIKE "1996%"
GROUP BY
  C.CustomerID
HAVING COUNT(C.CustomerID) >= 3
ORDER BY
  number_of_orders DESC
```

Rattlesnake Canyon Grocery, QUICK-Stop, Ernst Handel

### 問題 2

```SQL
SELECT
  OrderID,
  count(OrderID) as order_details_count
FROM
  OrderDetails
GROUP BY
  OrderID
ORDER BY
  order_details_count DESC
;
```

A: 5

### 問題 3

```SQL
SELECT
  ShipperID,
  count(ShipperID) as shipper_count
FROM
  Orders
GROUP BY
  ShipperID
ORDER BY
  shipper_count DESC
```

A: United Package

### 問題 4

```SQL
SELECT
  C.Country,
  round(sum(P.Price * OD.Quantity)) as sales
FROM
  Customers as C
  JOIN
    Orders as O
  ON  C.CustomerID = O.CustomerID
  JOIN
    OrderDetails as OD
  ON  O.OrderID = OD.OrderID
  JOIN
    products as P
  ON  OD.ProductID = P.ProductID
GROUP BY
  C.Country
ORDER BY
  sales DESC
```

### 問題 5

```SQL
SELECT
  C.Country,
  strftime('%Y', OrderDate) AS order_year,
  round(sum(P.Price * OD.Quantity)) as sales
FROM
  Customers as C
  JOIN
    Orders as O
  ON  C.CustomerID = O.CustomerID
  JOIN
    OrderDetails as OD
  ON  O.OrderID = OD.OrderID
  JOIN
    products as P
  ON  OD.ProductID = P.ProductID
GROUP BY
  C.Country,
  order_year
```

### 問題 6

```SQL
ALTER TABLE Employees ADD Junior boolean
```

```SQL
UPDATE
  Employees
SET
  Junior = CASE
    WHEN BirthDate > '1960-12-31' THEN True
    ELSE False
  END
;
```

### 問題 7

```SQL
ALTER TABLE Shippers ADD long_relation boolean
```

```SQL
UPDATE
  Shippers
SET
  long_relation = CASE
      WHEN ShipperID IN(
        SELECT
          ShipperID
        FROM
          ORDERS
        GROUP BY
          ShipperID
        HAVING count(ShipperID) >= 70
      ) THEN True
      ELSE False
  END
```

### 問題 8

```SQL
SELECT
  O.OrderID,
  O.EmployeeID,
  max(O.OrderDate)
FROM
  Orders AS O
  JOIN
    Employees AS E
  ON  E.EmployeeID = O.EmployeeID
GROUP BY
  O.EmployeeID
```

### 問題 9

#### 問 1

```SQL
UPDATE
  Customers
SET
  CustomerName = NULL
WHERE
  CustomerID = 1
```

```SQL
SELECT
  *
FROM
  Customers
WHERE
  CustomerName IS NOT NULL
;
```

```SQL
SELECT
  *
FROM
  Customers
WHERE
  CustomerName IS NULL
;
```

#### 問 2

通常のプログラミング言語が真と偽の 2 つだけの真理値を使う`2値論理`に対し、SQL は第 3 の値「不明（UNKNOWN）」を持つ`3値論理`を採用している。NULL に比較述語を適用した結果は、常に第 3 の値 UNKNOWN になる。クエリの結果として選択されるのは、WHERE 句の条件評価が TRUE になる行のみで、UNKNOWN の行は選択されない。

### 問題 10

```SQL
DELETE
FROM
  Employees
WHERE
  EmployeeID = 1
```

```SQL
SELECT
  *
FROM
  Employees AS E
  JOIN
    Orders AS O
  ON  E.EmployeeID = O.EmployeeID
ORDER BY
  E.EmployeeID DESC
```

```SQL
SELECT
  *
FROM
  Employees AS E
  LEFT JOIN
    Orders AS O
  ON  E.EmployeeID = O.EmployeeID
ORDER BY
  E.EmployeeID DESC
```

[【INNER JOIN, LEFT JOIN , RIGHT JOIN】テーブル結合の挙動をまとめてみた【SQL】](https://qiita.com/ngron/items/db4947fb0551f21321c0#%E3%81%96%E3%81%A3%E3%81%8F%E3%82%8A%E3%81%BE%E3%81%A8%E3%82%81)

## 課題 2

### 問題 1

#### 「WHERE」と「HAVING」二つのクエリを使えますが、それぞれの違いを教えてください。

| 〜句             | 内容             |
| :--------------- | :--------------- |
| from             | テーブル指定     |
| join             | テーブルの結合   |
| where            | 条件指定         |
| group by         | グループ化       |
| sum,avg など     | 関数             |
| having           | 集計後の絞り込み |
| select, distinct | 検索             |
| order by         | 並べ替え         |
| limit            | 取得件数の指定   |

where と having の実行順序は以下になっている。

| 〜句   | 実行順序    |
| :----- | :---------- |
| where  | group by 前 |
| having | group by 後 |

つまり、group by の前に抽出するのが where 句で、group by の後に抽出するのが having 句になる。

#### どのような時にどちらを使うべきでしょうか？

select 句の結果から抽出したい時は、where 句を使用する。  
group by 句でグルーピングした結果から抽出したい時は、having 句を使用する。

[[SQL] Where 句と Having 句の違い](https://dev.classmethod.jp/articles/difference-where-and-having/)  
[[SQL] SQL 文の書き順 〜PostgreSQL Tutorial を使いながら解説〜](https://dev.classmethod.jp/articles/sql-sequence/)  
[【SQL】実行の順序](https://qiita.com/yurina0402/items/78ae1f536b6755d6221a)

### 問題 2

#### DDL

`Data Definition Language` の略で、テーブルなどの作成や削除、各種設定など命令の総称

- CREATE
- ALTER
- DROP
- TRUNCATE

などが該当する。

#### DML

`Data Manipulation Language` の略で、データの格納や取り出し、更新、削除などの命令の総称。

- SELECT
- INSERT
- UPDATE
- DELETE
- EXPLAIN
- LOCK TABLE

などが該当する。

#### DCL

`Data Definition Language` の略で、DML や DDL の利用に関する許可や禁止を設定する命令の総称。

- GRANT
- REVOKE

などが該当する。

#### TCL

`Transaction Control Language` の略で、トランザクションの開始や終了の命令の総称。

- COMMIT
- ROLLBACK
- SET TRANSACTION
- SAVEPOINT

などが該当する。

[【DB 基礎】4 種類の SQL 命令(DML, DDL, TCL, DCL)とは](https://kirohi.com/sql_4_languages)  
[SQL の種類(DDL, DML, DCL, TCL)](https://www.wakuwakubank.com/posts/806-mysql-sql-ddl-dml-dcl-tcl/)

## 課題 3

### クイズ 1

NOT IN のサブクエリで使用されるテーブルの選択列に `NULL` が存在する場合、SQL 全体の結果は常にどうなる？

<details>
<summary>ヒント</summary>

[NOT IN を使う時は NULL に特に注意！](https://sql55.com/column/not-in-and-null.php)

</details>

### クイズ 2

`NULL`が存在する NOT IN のサブクエリで正しい結果を得るには、◯◯◯◯◯◯ 述語を使って書きます。◯◯◯◯◯◯ に入る言葉は？

<details>
<summary>ヒント</summary>

[NOT IN を使う時は NULL に特に注意！](https://sql55.com/column/not-in-and-null.php)

</details>

### クイズ 3

NULL を数えるのはどっちで、NULL を除外して数えるのはどっちでしょう？

1. COUNT(\*)
1. COUNT(列名)

<details>
<summary>ヒント</summary>

[【SQL】【基礎】COUNT 関数と NULL の関係　(COUNT でレコード件数を調べる)　](https://auroralights.jp/entry/2020/06/09/180000)

</details>

## 任意課題

### 0 SELECT basics

<details>
<summary>回答</summary>

#### ドイツ(Germany)の人口(population)を表示するように修正する。

```SQL
SELECT population FROM world WHERE name = 'Germany';
```

#### Sweden と Norway と Denmark の国名 name と人口 population を表示する

```SQL
SELECT name, population FROM world WHERE name IN ('Sweden', 'Norway', 'Denmark');
```

#### 丁度いいサイズ

```SQL
SELECT name, area FROM world WHERE area BETWEEN 200000 AND 250000;
```

</details>

### 1 SELECT name

<details>
<summary>回答</summary>

#### Y で始まる国名を見つける

```SQL
SELECT name FROM world WHERE name LIKE 'Y%';
```

#### y で終わる国名を見つける

```SQL
SELECT name FROM world WHERE name LIKE '%y';
```

#### x を含む国名を見つける

```SQL
SELECT name FROM world WHERE name LIKE '%x%';
```

#### land で終わる国名を検索する

```SQL
SELECT name FROM world WHERE name LIKE '%land';
```

#### C で始まり ia で終わる国を見つける

```SQL
SELECT name FROM world WHERE name LIKE 'C%ia';
```

#### oo を名前に含む国を見つける

```SQL
SELECT name FROM world WHERE name LIKE '%oo%';
```

#### a を３つ以上含む国名を見つける

```SQL
SELECT name FROM world WHERE name LIKE '%a%a%a%';
```

#### "t" を第２文字目に持つ国名を見つける

```SQL
SELECT name FROM world WHERE name LIKE '_t%' ORDER BY name;
```

#### 複数の"o"が他の２文字で隔てられている国名を見つける

```SQL
SELECT name FROM world WHERE name LIKE '%o__o%';
```

#### ちょうど４文字の国名を見つける

```SQL
SELECT name FROM world WHERE name LIKE '____';
```

#### 首都と国名が同じ国を見つける

```SQL
SELECT name FROM world WHERE name = capital;
```

#### 国名 ＋ "City" が首都の国を見つける。

```SQL
SELECT name FROM world WHERE capital = concat(name,' City');
```

#### 国名を首都名に含む国の、首都と国名を表示する

```SQL
SELECT capital,name FROM world WHERE capital LIKE concat('%',name,'%');
```

#### 国名を拡張した首都名を持つ国の、首都と国名を見つける

```SQL
SELECT capital,name FROM world WHERE capital LIKE concat('%',name,'%') AND name <> capital;
```

#### 国名と首都の拡張部分を見つける

```SQL
SELECT name,MID(capital,LENGTH(name)+1) as ext FROM world WHERE capital LIKE concat('%',name,'%') AND name <> capital;
```

</details>

### 2 SELECT FROM World

<details>
<summary>回答</summary>

#### 導入

```SQL
SELECT name, continent, population FROM world;
```

#### 人口が２億人（200000000 ゼロが８個ある）以上の国の名前を表示

```SQL
SELECT name FROM world WHERE population >= 200000000;
```

#### 人口 population ２億人以上の国の国名 name と国民一人当たりの国内総生産を表示

```SQL
SELECT name, gdp/population as gdp_per_capita FROM world WHERE population >= 200000000;
```

#### 大陸 continent が South America の国の name と population を百万人単位に変換して表示する。

```SQL
SELECT name, population/1000000 FROM world WHERE continent = 'South America';
```

#### 国名 name と人口 population を France, Germany, Italy について表示する。

```SQL
SELECT name, population FROM world WHERE name IN ('France', 'Germany', 'Italy');
```

#### 国名に'United'を含む国の国名を特定する。

```SQL
SELECT name FROM world WHERE name LIKE '%United%';
```

#### 面積か人口がビッグな国を表示する。国名 人口 面積（name, population , area）を表示する。

```SQL
SELECT name, population, area FROM world WHERE  population >= 250000000 OR area >= 3000000;
```

#### 面積か人口のどちらかだけ（両方は除く）が大きな国を表示する。国名 人口 面積を表示する(name, population, area)。

```SQL
SELECT name, population, area FROM world WHERE population >= 250000000 XOR area >= 3000000;
```

#### 南アメリカ大陸にある国の国名と人口（100 万人単位）と GDP（10 億ドル単位）を小数点以下２桁に丸めて表示する。

```SQL
SELECT name, ROUND(population/1000000, 2), ROUND(gdp/1000000000, 2) FROM world WHERE continent = 'South America';
```

#### GDP が 1 兆ドル以上の国の国名と国民一人当たりの GDP を 1000 ドル単位に丸めて表示する。

```SQL
SELECT name, ROUND(gdp/population, -3) FROM world WHERE gdp >= 1000000000000;
```

#### 国名 name と首都 capital が同じ長さの国の、国名と首都を表示する。

```SQL
SELECT name, capital FROM world WHERE LENGTH(name) = LENGTH(capital);
```

#### 国名と首都の先頭の文字が同じである国の、国名と首都名を表示する。ただし、国名と首都名が同じ場合は除く。

```SQL
SELECT name, capital FROM world WHERE LEFT(name,1) = LEFT(capital,1) AND name <> capital;
```

#### 国名に全ての母音を含む国で、空白を含まない単語１つの国名を検索する。

```SQL
SELECT name FROM world WHERE name LIKE '%a%' AND name LIKE '%i%' AND name LIKE '%u%' AND name LIKE '%e%' AND name LIKE '%o%' AND name NOT LIKE '% %';
```

</details>

### 5 SUM and COUNT

<details>
<summary>回答</summary>

#### 世界の総人口を表示。（各国の人口を合計）。

```SQL
SELECT SUM(population) FROM world;
```

#### 大陸名を重複しないように表示。

```SQL
SELECT DISTINCT continent FROM world;
```

#### アフリカ Africa の各国の gdp の合計を求める。

```SQL
SELECT SUM(gdp) FROM world WHERE continent = 'Africa';
```

#### 面積が少なくとも 1000000 以上の国の数を求める。

```SQL
SELECT COUNT(name) FROM world WHERE area >= 1000000;
```

#### 'Estonia', 'Latvia', 'Lithuania' の人口合計を求める。

```SQL
SELECT SUM(population) FROM world WHERE name IN ('Estonia', 'Latvia', 'Lithuania');
```

#### 各大陸 continent ごとに大陸名 continent とそこの国の数を表示する。

```SQL
SELECT continent, COUNT(name) FROM world GROUP BY continent;
```

#### 各大陸 continent ごとに大陸名 continent とそこの国の数を表示する。

```SQL
SELECT continent, COUNT(name) FROM world WHERE population >= 10000000 GROUP BY continent;
```

#### その大陸の各国の人口の合計が１ 00000000 人以上の大陸のリストを表示する

```SQL
SELECT continent FROM world GROUP BY continent HAVING SUM(population) >= 100000000;
```

</details>
