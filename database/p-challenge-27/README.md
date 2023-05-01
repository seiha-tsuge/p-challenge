# 課題 27

## 課題 1

- 利用可能な値を知るためには、データベースのカラムを調べる必要がある。
- ENUM型の修正が煩雑で手間がかかる。
    - 例として、customerテーブルのあるカラムがENUM型で 'admin', 'member', 'guest' となっている場合を考える。
        - 'guest' を 'customer' に変更したい場合、以下の手順が必要になる。
            - ENUMに 'customer' を追加する。
            - すべての 'guest' を 'customer' に更新する。
            - 最後にENUMから 'guest' を削除する。

[SQLアンチパターン：ENUMは使わない方がいいよ](https://shiro-secret-base.com/?p=928)

## 課題 22

[https://dbdiagram.io/d/64258b355758ac5f172577d6](https://dbdiagram.io/d/64258b355758ac5f172577d6)
