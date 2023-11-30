# 課題 20

## 課題 1

### 問題 1

ビューは、データベース内で「仮想テーブル」として機能します。ビューはデータそのものを保存せず、問い合わせの方法（SELECT文）を保存します。データをビューから取り出そうとすると、この問い合わせが実行され、一時的に仮想テーブルが作られます。この仮想テーブルを通じてデータへのアクセスが可能になります。

### 問題 2

ビューを使うと、複雑なクエリを単純化し、再利用可能な形で整理できます。れにより、クエリの管理がしやすくなり、作業の効率化が図れます。

また、ビューはデータのセキュリティを強化します。ビューを通じて、ユーザーには必要なデータの一部だけを表示させることができます。たとえば、個人情報や機密情報を含むデータベースで、ビューを使うことで、必要最小限の情報だけをユーザーに公開する設定ができます。この方法で、データの安全性が増し、情報共有が安全に行えます。

[SQL 第2版 ゼロからはじめるデータベース操作](https://www.shoeisha.co.jp/book/detail/9784798144450)  
[（データベース）viewの使い所](https://zenn.dev/praha/articles/480ab855916962)

### 問題 3

Materialized Viewとは、データベースにおいて、あらかじめ計算したクエリの結果を保存しておくことで、データを速く取り出せるようにする仕組みです。普通のViewがデータを取り出すたびに計算をするのに対し、Materialized Viewは計算済みのデータをすぐに提供できるため、読み込みが速くなります。

しかし、Materialized Viewを利用する際は、元のデータが変わったときに、その変更をViewにどう反映させるかが重要です。保存されたデータは変わらないため、最新の情報に更新するには、定期的に内容をリフレッシュする必要があります。

また、Materialized Viewは計算結果を保存するため、そのサイズが大きいとストレージを多く使うことになります。そのため、ストレージの容量にも注意しなければなりません。さらに、データを最新の状態に更新する「リフレッシュ」には時間がかかることがあり、このプロセスもシステムのリソースを使います。これらの点を考慮してMaterialized Viewを設計する必要があります。

[[PostgreSQL]複雑なクエリや集計処理に対する参照のパフォーマンスを向上させることのできるマテリアライズドビューについてまとめてみ](https://zenn.dev/chiki0320/articles/materiarized_view)  
[3分でわかるマテリアライズド・ビュー -使い所と問題点を考える-](https://qiita.com/wanko5296/items/61c3e6ec4561b26beb5c)

## 課題 2

**課題２（実装）**

``` SQL
CREATE VIEW view_name AS select_statement
```

``` SQL
CREATE VIEW high_avg_salary_departments AS
SELECT d.dept_no, d.dept_name, AVG(s.salary) as avg_salary_per_dept
FROM departments d
JOIN dept_emp de ON d.dept_no = de.dept_no
JOIN salaries s ON de.emp_no = s.emp_no
WHERE s.to_date = '9999-01-01'
GROUP BY d.dept_no, d.dept_name
HAVING AVG(s.salary) > (
    SELECT AVG(salary) FROM salaries WHERE to_date = '9999-01-01'
);
```

``` SQL
SELECT * FROM high_avg_salary_departments;
```

ビューは基本的に保存されたクエリであり、実行時にそのクエリがデータベースに対して実行される。したがって、元のクエリとビューを使用したクエリとの間に大きなパフォーマンスの違いが生じることは無い。
