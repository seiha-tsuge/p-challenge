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
  "data": "hello world",  // ここが重要！
}
```

上記課題を満たすために以下のcurlコマンドを実行しました。

```
curl -☆ ☆hoge.txt -H "Content-Type: text/plain" https://httpbin.org/post
```

☆に入る値はなんでしょう（☆は２つあります）

## curl クイズ2

HTTP ヘッダを出力に含めるオプションは？

1. -i
2. --head
3. -I

## curl クイズ3

curlでCookieをhttpbinに送信してください

- Cookieの値は、"name=hoge"
- methodはGet
- URLはhttps://httpbin.org/cookies

以下のようなレスポンスを得られるはずです

```
{
  "cookies": {
    "name": "hoge"
  }
}
```

上記課題を満たすために以下のcurlコマンドを実行しました。

```
curl -☆ "name=hoge" https://httpbin.org/cookies
```

☆に入る値はなんでしょう（☆は１つあります）

## postman クイズ1

Postmanのリクエストが実行される前にJavascriptを実行できる機能の名前は？

## postman クイズ2

Postmanで、課題1のレスポンスステータスコードが200であるテストを書くには、
Testsでどのように書けばよいでしょう。  
以下の☆に入る言葉を教えてください！

```
pm.test("Status code is 200", function () {
    pm.response.to.have.☆☆☆☆☆☆(200);
});
```

参考：[Writing tests](https://learning.postman.com/docs/writing-scripts/test-scripts/)

## postman クイズ3

Postmanで、課題1のレスポンスに「"X-Test": "hello"'」が含まれているテストを書くには、
Testsでどのように書けばよいでしょう。  
以下の☆に入る言葉を教えてください！

```
pm.test("Body matches string", function () {
    pm.expect(pm.☆☆☆☆☆☆☆☆.text()).to.include('"X-Test": "hello"');
});
```
