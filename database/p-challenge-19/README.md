# 課題 19

## 課題 1

### 問題 1

``` SQL
SELECT NULL = 0;
```

(null)

NULLと他の値との比較は常にNULL

### 問題 2

``` SQL
SELECT NULL = NULL;
```

(null)

NULLとNULLとの比較もNULL

NULLの値が未知であるため、2つのNULL値が等しいかどうかは未知

### 問題 3

``` SQL
SELECT NULL <> NULL;
```

(null)

同上の理由から、NULLとNULLの不等価比較もNULL

### 問題 4

``` SQL
SELECT NULL AND TRUE;
```

(null)

### 問題 5

``` SQL
SELECT NULL AND FALSE;
```

0

### 問題 6

``` SQL
SELECT NULL OR TRUE;
```

1

### 問題 7

``` SQL
SELECT NULL IS NULL;
```

1

## 課題 2

中間テーブルを使用する

https://dbdiagram.io/d/64d8a0a802bd1c4a5eb15f88
