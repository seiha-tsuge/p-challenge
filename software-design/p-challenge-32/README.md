# 課題32

## 課題1

### SOLID原則

SOLID原則は、オブジェクト指向設計でよく知られている5つの原則を表している。

- 単一責任（Single Responsibility）
- オープン・クローズド（Open-Closed）
- リスコフの置換（Liskov Substitution）
- インターフェース分離（Interface Segregation）
- 依存性逆転（Dependency Inversion）

#### 単一責任

クラスはできる限り最小で有用なことをするべき、つまり、単一の責任を持つべきである。  
なぜ、単一責任が重要なのか。  
変更が容易なアプリケーションは、再利用が容易なクラスから構成される。  
2つ以上の責任を持つクラスは、容易に再利用できない。多岐にわたる責任がクラス内部に絡み合い、再利用する際に必要な部分だけ手に入れることが難しくなる。

#### オープン・クローズド

ソフトウェアを構成する要素（モジュール、クラス、関数など）は、拡張に対しては開かれており（Open）、修正に対しては閉じてなければならない（Closed）。つまり、新機能を追加するとき、既存のコードを修正せず新しくコードを追加するだけで住むようにいておくべきである。  
なぜ、オープン・クローズドが重要なのか。  
すでに動作している既存コードに変更を加えると、バグを発生させる可能性があり、バグを発生させないために動作確認を行うなどのコストを支払う必要がある。一方で、既存のコードを変更せずに機能を追加できる設計にしておくことで、すでに動作している機能を壊すこと無く、新機能を追加できる。

[TypeScriptでSOLID原則〜開放閉鎖の原則〜](https://www.membersedge.co.jp/blog/typescript-solid-open-closed-principle/)  
[SOLID原則】オープン・クローズドの原則 - OCP](https://zenn.dev/chida/articles/d859839928a39d)

#### リスコフの置換

リスコフの置換は次のように表せる。

> 型がTであるオブジェクトxについて証明できる属性をq(x)と表す。このとき、型がSであるオブジェクトyについてq(y)が真となる。ただし、型Sは型Tの派生型であるとする。

つまり、親クラスと子クラスがある場合に、親クラスと子クラスは異なる振る舞いを起こさず、互換性を持っている。  
なぜ、リスコフの置換が重要なのか。  
この原則に従うことで、スーパークラスが使えるところではサブクラスが使えるアプリケーションを作ることができる。また、モジュールをインクルードするオブジェクト同士であれば、互いに入れ替えてもモジュールのロールを担えると信頼できる。

[オブジェクト指向設計実践ガイド～Rubyでわかる 進化しつづける柔軟なアプリケーションの育て方](https://gihyo.jp/book/2016/978-4-7741-8361-9)

#### インターフェース分離

インターフェース分離は、「クライアントにとって不要なインターフェースへの依存を強要してはならない」と述べられる。インターフェースを正しく分割することでクライアントのニーズを正確に満たすことを意味する。  
なぜ、インターフェース分離が重要なのか。  
インタフェースを小さい単位に分離することで、各クライアントは実際に自分が利用するメソッドだけに依存するようになり、他のクライアントの変更の影響を最小限に抑えることができる。

[【SOLID原則】インタフェース分離の原則 - ISP](https://zenn.dev/chida/articles/882aad07effa5c)

#### 依存性逆転

依存性逆転は2つの重要なことがある。

> a.上位のモジュールは下位のモジュールに依存してはならない。どちらのモジュールも「抽象」に依存すべきである。
> b.「抽象」は実装の詳細に依存してはならない。実装の詳細が「抽象」に依存すべきである

なぜ、依存性逆転が重要なのか。  
依存性逆転を適用させると、上位モジュールは下位モジュールの変更の影響を受けなくなる。

[【SOLID原則】依存性逆転の原則 - DIP](https://zenn.dev/chida/articles/e46a66cd9d89d1)

### 単一責任の原則と、単純にファイルを細かなファイルに分解することには、どのような違いがあるでしょうか？

単一責任の原則は、各クラスが細かなファイルに分割されていないことを意味するものでは無い。各クラスは明確に定義された振る舞いからなり、全てのメソッドとプロパティは、同じ目標に向かって動作する必要がある。つまり、一つのクラスは単一の責任を持つべきであり、複数の目的や責任を果たす場合は、新しいクラスを作成する必要がある。

### Open-Closed-Principleの実例を一つ考えて、作成してみてください

https://www.typescriptlang.org/ja/play?#code/MYGwhgzhAEBKCmwAuYB2BzE9oG8BQ00A7gJYAmSAFgFzSoCuAtgEbwBOA3AdJfCepSS0GLdl27AA9qghI29ZJLYAKUhRp0mrNgBoefAUM2i2ASlzdCVEhAB0aqtAC8xclS6ErlG7d79Bzvr+SB7QAL54EXigkDAAwiRsoNj4hGxgZCT0EMJaYngS0rLyiirpmdm5JuapntZ25VkwLo3ZoRFRMVDQcZKyALJoYOjsFoTAYCDA9OBI8MoQlGAADvC0CMhomNgAPj2JyTWW0FhI0GBs8GCh40VnUrIACuwAqqgkZy4AjLYArDfQEgAM2gCyWq0BMhQqGA8EkII20O2R08nguV0CixW8Hsbko0AAVNAsatfAZBACwtB4CAICljoR0WBMeCca0YESSWyMk1CdBBlRbI8AJKUgqoy5IehsVDQB5IZ5sN4fPlM9qRApSKFyg5YQKoeBEfZJLDKX6mLha2TQS7IfWGuCIJGmgAcenNlru0EkzAAVvajb0BkMRioLZqipIsLYQJJ0Mofb7bBMpjMwHNlMBdfBTOGgA

https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgIJQnAkua8nIDeAUMsgnADYICulck6mAFAJQBcyINAtgEbQA3MQC+xYgnoBnKcgBKEBGDggA5pRTAeABw08I4WU2y5YiFCTIB3YABMwAC07d+Q0sgcRgqh2Ge8BKGF3BAB7ECkwKBolUKhmG3snLgDoABoPLx8-FNcoViJ3MkdgKQA6RMdkAF5kSodhMmKHUrLPb18azI6wRuQxEKpaekYMODZCpvJwyOQ4Ma6S8vbs5AAqZCWKu0ci5AwwGigQObG+sQHJOBlkAGFgKElNHT0DMCMxnEgzAkt9uFswBoUn8eWCZDCESiMTAcWYUABQJBuUCBT+zVaCMBwK6WKR53EEKGdAYEGME3R+wgh2Omxa5TxOI2W0Zsg2AFkGA4ygAFLAEy7SWS3UKRTkgOCqaCTcjEkYQZhSBxwbQQTjGL54cxovaQ2ZhSI86AAVRAwDAXQAjGUAKx9CEzC2w5SUEWzWoGsBGqCm83rZBKlUQMoUagk0YsVj2qk0k7Oqhu3ruC7iPUWhAPJ5dEAQKx3TMaZg2qMSR3IUJ8ABW2dzd1FYHFkugbGEetCGjKlFCqmYFcrIblpOYGceGlYJaAA

### リスコフの置換原則に違反した場合、どのような不都合が生じるか

正方形と長方形の例で説明する。数学的に正方形は長方形だが、継承による「is-a」関係を使いモデル化すると、問題が発生しやすくなる。

Bad:

```Typescript
class Rectangle {
  constructor(
    protected width: number = 0,
    protected height: number = 0) {

  }

  setColor(color: string): this {
    // ...
  }

  render(area: number) {
    // ...
  }

  setWidth(width: number): this {
    this.width = width;
    return this;
  }

  setHeight(height: number): this {
    this.height = height;
    return this;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width: number): this {
    this.width = width;
    this.height = width;
    return this;
  }

  setHeight(height: number): this {
    this.width = height;
    this.height = height;
    return this;
  }
}

function renderLargeRectangles(rectangles: Rectangle[]) {
  rectangles.forEach((rectangle) => {
    const area = rectangle
      .setWidth(4)
      .setHeight(5)
      .getArea(); // BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);
```

Good:

```Typescript
abstract class Shape {
  setColor(color: string): this {
    // ...
  }

  render(area: number) {
    // ...
  }

  abstract getArea(): number;
}

class Rectangle extends Shape {
  constructor(
    private readonly width = 0,
    private readonly height = 0) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(private readonly length: number) {
    super();
  }

  getArea(): number {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes: Shape[]) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
```

[clean-code-typescript](https://msakamaki.github.io/clean-code-typescript/#solid)

### インターフェースを用いる事で、設計上どのようなメリットがあるでしょうか？

interfaceを使うと、分岐ロジックを書かずに分岐と同じことが実現可能になる。そのため、条件分岐が大幅に減り、ロジックがシンプルになる。
https://www.typescriptlang.org/play?#code/MYGwhgzhAEBKCmwAuYB2BzE9oG8BQ00wA9qhEgE4CuyxFAFAA5UBGIAlsNAO7sAmSABYAuaKioBbFvAoAaaMzadog+O3SCko8VJkBKXAULQh7CADpeAwdAC8PfkIDcRwqYur1muyrUakLoQAvnhGYBTwYPR62pLSFIbG0BFIVBSoJoJmlo42AFSZ2Z7+gdAhIXigkDAAwpxYiUSk5NS0DIocXBRgfOxUELG6FAb4Se7m3b39PpN9EKUVhOGR0YPxjYQpaRkAsmBC5gAKAJLQBeOz0+dZFpfzRuWhAGZUqMjspNAQgsTcAIIRKLfMCMeCiBDINCYbAAH2gdVA8BGRnYT2g9GBoOg7DIKDe8GIaIheOhyKSJDIxCw5hAxHQ9AABsSoQ1lmBsTAACQ4THwcxs6JBBl6BahQio9G87G4tDAAlohFYMnGCkQKl82n0hmK7BsjnQbm8-mAwXC0UVVVIZKIK32VDwbhwG0s+D0ADM8gALCLKs11TS6fQIshjSs9D7fbiiPVsHaHfCY-QAKw+1X+zX0YAx0NRcMuIA

### どんな時に依存性の逆転を用いる必要が生じるのでしょうか？

### デメトルの法則とは何でしょうか？業務経験1年目のITエンジニアに伝わるように説明してください。この法則を守ることで、どのようなメリットがあるのでしょうか？

#### これだけでは特にコードの保守性に対して効果が無いことを説明してあげてください

## 任意課題

### 凝集度

凝集度とは、モジュールの要素がどの程度そのモジュールに収まっているかの度合いを指す。言い換えれば、凝集度とはモジュール内の要素同士の関連度を示す指標。関連する要素が全て一箇所にまとまっている状態が、凝集したモジュールの理想。まとまりをそれよりも細かくしてしまうと、モジュール間の呼び出しによって要素を結合しないと、有益な結果が得られなくなってしまう。

[ソフトウェアアーキテクチャの基礎――エンジニアリングに基づく体系的アプローチ](https://www.oreilly.co.jp/books/9784873119823/)  
[良いコードとは何か - エンジニア新卒研修 スライド公開](https://note.com/cyberz_cto/n/n26f535d6c575)

#### 偶発的凝集

モジュール内の要素は、同じソースファイル内にある以外には関連性がない。これは最も最悪な形での凝集を表している。

``` Scala
fun main() {
    val data = getData() // データの取得
    println("Hello World") // 出力
    calcPrimeNumber(10) // 素数の計算
}
```

- 適当（無作為）に集められたものがモジュールとなっている
- モジュール内の各部分には特に関連性はない

#### 論理的凝集

モジュール内のデータは論理的に関連しているものの、機能的には関連していない。たとえば、テキストやシリアライズされたオブジェクト、またはストリームを情報へ変換するモジュールを考えてみよう。この場合、これらは操作の上では関連があるものの、機能はまったく異なる。この種の凝集の典型的な例が、ほぼすべてのJavaプロジェクトに存在するStringUtilsクラスだ。ほとんどの場合、StringUtilsクラスは、Stringを操作するということでは関連しているものの、互いには関連していない静的メソッドの集まりだ。

``` Scala
fun sample(isA: Boolean) {
    if (isA) {
        sampleA()
    } else {
        sampleB()
    }
}
```

- 論理的に似たようなことをするものを集めたモジュール
- 例えば：フラグによって動作を変える

#### 時間的凝集

モジュール間に時間的な依存関係がある。たとえば、多くのシステムには、システム起動時に初期化しなければならない一見無関係な処理群が存在している。これらの異なる処理には時間的な凝集があるといえる。

``` Scala
// 初期化処理
fun initApp(isA: Boolean) {
    initConfig() // 設定の初期化
    initLogger() // Loggerの初期化
    initDB() // DBの初期化処理
}
```

- 時間的に近く動作するものを集めたモジュール
- 実行順序を入れ替えても動作する
- 例えば：初期化処理や、UIのファグラウンド時の処理など

#### 手続き的凝集（手順的凝集）

2つのモジュールは、特定の順序でコードを実行する必要がある。

``` Scala
// アクセス権を確認してファイルに書き込む
fun outputFile(file: File) {
    checkPermission() // 権限確認
    writeFile(file) // ファイル出力
}
```

- 順番に実行する必要があるものを集めたモジュール
- 共通したデータは使わない
- 例えば：アクセス権を確認してファイルに書き込む

#### 通信的凝集

2つのモジュールが通信の連鎖を形成し、それぞれの情報を操作したり、何らかの出力に貢献したりする。たとえば、データベースにレコードを追加し、その情報に基づいて電子メールを生成するといった具合だ。

``` Scala
// 変更をABCに通知する
funchangeAll(data: Data) {
    changeA(data)
    changeB(data)
    changeC(data)
}
```

- 同じデータを扱う部分を集めたモジュール

#### 逐次的凝集

一方が出力したデータを、もう一方が入力とする形で、2つのモジュールが相互に作用している。

``` Scala
fun sample() {
    val file = getFile() // ファイルを取得する
    val transfromed = transform(file) // ファイルを変更する
    saveFile(transfromed) // ファイルを保存する
}
```

- ある部分の出力が別の部分の入力となるような部分を集めたモジュール
- 例えば：ファイルを取得して変換して保存する

#### 機能的凝集

関連する要素だけでモジュールが構成され、モジュールが機能するために必要不可欠なものがすべて含まれている。

``` Scala
// 2点間の距離を計算する
func calcLength(a: Point, b: Point): Int {
    val dx = a.x - b.x
    val dy = a.y - b.y
    val length = aqrt(dx * dx + dy + dy)
    return length.toInt()
}
```

- 単一に定義されたタスクを実現するモジュール
- 例えば：2点間の距離を計算する

### 結合度

モジュール間で、呼び出し関係にあるメソッドの結び付きの強さを表す指標。結合度が高くなると複数のモジュール間で依存度が上がってしまうため、保守やメンテナンス、仕様変更などの対応がしづらくなる。

[モジュール結合度を理解する](https://zenn.dev/taiga533/articles/e08ad4f4af5577079b5b)  
[良いコードとは何か - エンジニア新卒研修 スライド公開](https://note.com/cyberz_cto/n/n26f535d6c575)

#### 内部結合

あるモジュールが別のモジュールの内部実装に依存している状態を指す。

``` Java
public String getEmployeeFullNameById(int employeeId) {
   Employee emp = employeeRepository.findById(employeeId);
   return emp.getFirstName() + emp.getLastName();
}
```

仕様変更でEmployeeクラスにmiddleNameが追加された場合、getEmplopeeFullNameByIdは名前通りの役目を果たせない。

``` Java
public String getEmployeeFullNameById(int employeeId) {
   Employee emp = employeeRepository.findById(employeeId);
   return emp.getFullName();
}
```

Employeeクラス側にフルネームを取得するためのメソッドを設ける。

#### 共通結合

複数のモジュールが同じ上書き可能なグローバル変数を参照している状態を指す。

``` Scala
val data: Data = Data()

fun updateA() {
    data.value = "a"
}

fun updateB() {
    data.value = "b"
}
```

- そもそもグローバル変数を参照しない
- 変数をグローバルに公開せず、外部から変更を受け付ける際はメソッド経由とする

#### 外部結合

外部ライブラリや外部デバイスへの接続手段を複数のモジュールで共有している状態を指す。

```Java
public int getServerStatus() {
 // HttpClinetは外部ライブラリのクラス
 HttpClient client = HttpClient.newHttpClient();
 HttpResponse&lt;String&gt; response = client.send(
     HttpRequest
         .newBuilder(new URI("http://development.local/"))
         .GET()
         .build(),
     BodyHandler.asString()
 );
 return response.statusCode();
}
```

getServerStatus()を各所から参照するだけならいい。しかし、HttpClient（外部ライブラリに含まれるクラス）を様々な場所で参照している場合は、外部ライブラリに依存している。

#### 制御結合

あるモジュールに情報を渡すことで、別のモジュールの処理を制御している状態を指す。論理的凝集が発生する。

```Java
public void registerUser(User user) {
 if(user.getCountry() == Country.JP) {
   // 国内ユーザーの登録処理
   return;
 }
 // 海外ユーザーの登録処理
}
```

国ごとに違う登録処理をregisterUser()が知っていなければならない。

```Java
public void registerUser(User user) {
 UserRegisterService userRegisterService = user.getCountry() == Country.JP
     ? this.japaneseUserRegisterService() : this.foreignUserRegisterService();

 userRegisterService.register(user);
}
```

登録処理の詳細は別クラスに隠蔽し、registerUserはどの国のユーザー登録処理においても同じ処理を実行するだけにするのが対策となる。

#### スタンプ結合

モジュールに引数として渡されたオブジェクトの一部しか使わない状態を指す。

```Java
public String findUserEmailAddress(User user) {
 return UserEmailManageService.findByUserId(user.getId());
}
```

Userインスタンスのデータ構造に依存している。Userクラスからidが消えた場合、機能しなくなる。

```Java
public String findUserEmailAddress(int userId) {
 return UserEmailManageService.findByUserId(userId);
}
```

- 必要な値を全て個々の引数として渡す
- 引数に必要な機能を定義したinterfaceだけ渡す

ある程度の妥協は必要。例えば、関数に渡す引数が4個以上の場合は、構造体を渡す等。

#### データ結合

参照するモジュールで必要ば最小限のデータを、個々の引数で受け渡ししている状態を指す。

```Java
public findBuyableProduct(int userId, CountryType countryType) {
 ResourceQuery query = new ResourceQuery();
 query.addIntFilter(userId);
 query.addStringFilter(countryType.value());
 return productRepository.findByQuery(query);
}
```

スタンプ結合よりは結合度が低くなる。

#### メッセージ結合

- 引数のないやり取り
- データのやり取りは存在しない

```Javascript

function hoge() {
    fuga()
}
```

[SOLID Principles - simple and easy explanation](https://github.com/nahidulhasan/solid-principles)
[clean-code-typescript](https://msakamaki.github.io/clean-code-typescript/#solid)
