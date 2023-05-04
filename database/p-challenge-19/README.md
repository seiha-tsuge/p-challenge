# 課題 19

## 課題 1

### 問題 1

``` SQL
SELECT * FROM Issue WHERE assigned_to_id = 0;
```

assigned_to_idがNullではないレコードが見つかる。

### 問題 2

``` SQL
SELECT * FROM Issue WHERE assigned_to_id = NULL;
```

何も見つからない。

### 問題 3

``` SQL
SELECT * FROM Issue WHERE assigned_to_id <> NULL;
```

何も見つからない。

### 問題 4

``` SQL
SELECT * FROM Issue WHERE assigned_to_id AND TRUE;
```

何も見つからない。

### 問題 5

``` SQL
SELECT * FROM Issue WHERE assigned_to_id AND FALSE;
```

何も見つからない。

### 問題 6

``` SQL
SELECT * FROM Issue WHERE assigned_to_id OR TRUE;
```

全てのレコードが見つかるする。

### 問題 7

``` SQL
SELECT * FROM Issue WHERE assigned_to_id IS NULL;
```

assigned_to_idがNULLのレコードが見つかる。

## 課題 2

## 課題 3

## 課題 4


