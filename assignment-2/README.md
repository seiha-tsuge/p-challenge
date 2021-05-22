# 課題2

## 問題１

```
curl -H "X-Test:hello" https://httpbin.org/headers
```

![1](https://user-images.githubusercontent.com/49358142/119220479-bb91a300-bb25-11eb-94ed-f68e5647a503.png)

## 問題2

```
curl -X POST -H "Content-Type:application/json" -d '{"name": "hoge"}' https://httpbin.org/post
```

![2](https://user-images.githubusercontent.com/49358142/119220488-c2b8b100-bb25-11eb-8ad4-734d6c78c87d.png)

## 問題3

```
curl -X POST -H "Content-Type:application/json" -d '{"userA": {"name": "hoge", "age": 29}}' https://httpbin.org/post
```

![3](https://user-images.githubusercontent.com/49358142/119220491-c64c3800-bb25-11eb-9dc5-9a4d23c651e4.png)

## 問題4

```
curl -X POST -H "Content-Type:application/x-www-form-urlencoded" -d 'name=hoge' https://httpbin.org/post
```

![4](https://user-images.githubusercontent.com/49358142/119220495-c9dfbf00-bb25-11eb-999c-e83f7b2811a9.png)

## curl クイズ1

hoge.txtをcurlコマンドでhttpbinに送信してください

- Content-Typeは"text/plain"
- methodはPOST
- ファイルの内容はhello world
- URLはhttps://httpbin.org/post

以下のようなレスポンスを得られるはずです

```
{
  "args": {},
  "data": "hello world",  // ここが重要！
  "files": {},
  "form": {},
  "headers": {
    "Accept": "*/*",
    "Content-Length": "11",
    "Content-Type": "text/plain",
    "Host": "httpbin.org",
    "User-Agent": "curl/7.64.1",
    "X-Amzn-Trace-Id": "Root=1-60a930e4-7d427bfd4723e56402c5c569"
  },
  "json": null,
  "origin": "xxxxxxxxxxx", 
  "url": "https://httpbin.org/post"
}
```

## curl クイズ2

HTTP ヘッダを出力に含めるオプションは？

1. -i
2. --head
3. -I

## curl クイズ3

## postman クイズ1

## postman クイズ2

## postman クイズ3
