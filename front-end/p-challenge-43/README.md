# 課題 43

## 課題 1

### 問題 1

- Custom Hookを活用することで、ロジックの再利用性が向上します。このアプローチにより、コードの重複を削減し、メンテナンスを容易にすることができます。結果として、開発プロセスが加速します。
  - 既存のCustom Hookライブラリを利用することで、開発スピードをさらに高めることが可能です。
  - Custom Hookにより、関連するロジックを集約し、コードベース全体の可読性と整理を改善することができます。
    - これにより、コンポーネント内のロジックがより明瞭かつ集中的に扱えるようになります。
- Custom Hookの導入により、コンポーネントのテストが容易になります。
  - カスタムフックは独立してテスト可能であり、コンポーネントのロジックをより小さな、テストしやすい単位に分割できます。これにより、テストの効率と品質が向上します。

[React hooksが何故うれしいのか、Reactの今までを含めて解説](https://qiita.com/_muraham/items/d31628e15ed6ff6e3f58)  
[React Hooksとカスタムフックが実現する世界 - ロジックの分離と再利用性の向上](https://qiita.com/sonatard/items/617f324228f75b9c802f)

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
