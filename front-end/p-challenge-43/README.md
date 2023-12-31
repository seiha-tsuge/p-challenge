# 課題 43

## 課題 1

### 問題 1

- フックを使うことで、どのようなメリットがあるのでしょうか？

関数コンポーネントの強化: 以前は、関数コンポーネントはステートレスでシンプルなものに限られていましたが、フックによりステートやライフサイクル機能を持つようになりました。

コードの再利用と分離: カスタムフックを作成することで、コンポーネント間で状態ロジックを再利用できます。これにより、コードの重複を減らし、テストやメンテナンスが容易になります。

クラス構文からの脱却: フックを使うことで、クラスコンポーネントでのみ利用可能だった機能を関数コンポーネント内で使えるようになります。これにより、thisキーワードの複雑さやクラス特有の振る舞いから解放されます。

コンポーネントロジックの明瞭化: フックを使用すると、関連するコードを一緒にまとめることができます。例えば、ある特定のデータに関連するuseStateとuseEffectを一緒に配置することができ、コードの可読性が向上します。

ライフサイクルメソッドの簡素化: useEffectフックを使用することで、componentDidMount, componentDidUpdate, および componentWillUnmount のようなライフサイクルメソッドを一つのAPIで扱えるようになります。

より良いテスト性: フックを使用すると、コンポーネントのテストが簡単になります。カスタムフックは独立してテストすることが可能で、コンポーネントのロジックをより小さな、テスト可能な部分に分割できます。


[React hooksが何故うれしいのか、Reactの今までを含めて解説](https://qiita.com/_muraham/items/d31628e15ed6ff6e3f58)

### 問題 2

- [use-event-listener](https://mantine.dev/hooks/use-event-listener/)
- [use-hover](https://mantine.dev/hooks/use-hover/)
- [use-scroll-into-view](https://mantine.dev/hooks/use-scroll-into-view/)
- [use-window-event](https://mantine.dev/hooks/use-window-event/)
- [use-debounced-state](https://mantine.dev/hooks/use-debounced-state/)
- [use-debounced-value](https://mantine.dev/hooks/use-debounced-value/)
- [use-toggle](https://mantine.dev/hooks/use-toggle/)
- [use-clipboard](https://mantine.dev/hooks/use-clipboard/)

## 課題 2

### 問題 1

- 以下のtodoアプリを開いてください
- https://codepen.io/philmayfield/full/MwRgyN
- 上記アプリをリファクタリングしてください
    - 上記アプリのコードを読み解いていくと、「data」と呼ばれる変数にtodoリストの情報が格納されているようです
    - フックを使ってdataを管理するようにリファクタリングしてみましょう！
        - ヒント：useDataといった名前のカスタムフックを作成して、その中でuseStateを使いdataを管理してみましょう
        - ヒント：useDataは「data（todoリストの情報）」や、「addData（todoを追加する関数）」「removeData（todoを削除する関数）」などを公開すると良いかもしれません

### 問題 2

- 今回の課題ではtodoの追加と削除はあっても「更新」がなかったのでさほど問題にはならなかったのですが、もしdataから一部のtodoのプロパティのみ更新したいケースが生じた時は、意外と実装が手間です。
    - そんな状況を解決してくれるのが[Immer](https://immerjs.github.io/immer/)です。こちらのライブラリが開発された[背景](https://medium.com/hackernoon/introducing-immer-immutability-the-easy-way-9d73d8f71cb3)を学び、どのような有用性があるのか話し合ってみましょう

## 課題 3

以下の課題が未完了なため、一旦保留

課題39
