# 課題 44

## 課題1

### 問題1

- [useEffect](https://ja.react.dev/reference/react/useEffect)
- [エフェクトを使って同期を行う](https://ja.react.dev/learn/synchronizing-with-effects)
- [エフェクトは必要ないかもしれない](https://ja.react.dev/learn/you-might-not-need-an-effect)
- [リアクティブなエフェクトのライフサイクル](https://ja.react.dev/learn/lifecycle-of-reactive-effects)
- [イベントとエフェクトを切り離す](https://ja.react.dev/learn/separating-events-from-effects)
- [エフェクトから依存値を取り除く](https://ja.react.dev/learn/removing-effect-dependencies)

### 問題2

- `useEffect`フックを利用することで、React コンポーネントのレンダリングサイクル後に定義された副作用を実行することができます。これにより、コンポーネントの描画後に必要な動作を実行することができます。
- 重要なのは、これらの副作用に関連した適切なクリーンアップ（後始末）ロジックを実装することです。これにより、副作用によって生じる可能性のあるメモリリークやリソースの不適切な使用を防ぐことができます。
- 特定のエフェクトは、その実行を停止し、元の状態に戻す、あるいはその他のクリーンアップ処理を行うためのロジックを含む必要があります。
  - 具体例として、外部APIへの「接続」エフェクトは、不要になった際に「切断」処理を要し、「イベントの登録」は、それを必要としなくなった時に「解除」を要し、「データの取得」は、その必要がなくなった場合に「キャンセル」または「無視」する処理が必要です。
- Reactでは、エフェクトが再実行される前に、毎回クリーンアップ関数が呼び出されます。さらに、コンポーネントがアンマウント（削除）される際にも、最後にこのクリーンアップ関数が実行されることで、リソースの適切な解放が保証されます。

### 問題3

- useEffectの第2引数に
    - 何も指定しなかった場合
    - 空の配列（[]）を指定した場合
    - それぞれ、いつuseEffectの第1引数に定義した処理が実行されるでしょうか？

## 課題2

### 問題1

- [こちらのプロジェクト](https://codesandbox.io/s/use-effect-demo-yw3e5?file=/src/App.js)をcodesandbox上でforkして、SomeComponent（**自身がレンダリングされた回数を表示するコ**ンポーネント）を完成させてください
    - ヒント：コンポーネントの中にcountなどのカウンターを持ち、useEffectでレンダリングの度にカウンターを加算すると良いでしょう
    - ヒント：カウンターをuseStateで作成してレンダリングの度にuseEffectから更新するようにすると、**無限ループになってしまうでしょう。**なぜでしょうか？解決するには「useRef」が役立つかもしれません！

### 問題2

- 上記のコンポーネントを更に改善して「**someFlagがtrueになった時だけ加算する**」ようにしてみましょう
    - ボタンを押しても2回に1回しか加算されなくなったら成功です

## 課題3

- 先ほどのプロジェクトに含まれていたFetchComponentを完成させてください
    - FetchComponentの中で**GitHubのAPIと通信して、特定のレポジトリのスター数を描画**してみましょう
    - [このレポジトリ](https://github.com/facebook/react)のstar数を取得して表示するコンポーネントを作成してください
        - **ただし再レンダリングの度にAPIとの通信が発生しないように気をつけましょう！**初回表示の時に一度だけ通信が発生するようにしてください
            - ヒント：codesandboxだと開発者コンソールのnetworkタブが正しく動かないことがあるようなので、console.logで確認する程度で問題ありません
        - ヒント：`https://api.github.com/repos/facebook/react`を呼び出してみましょう！[fetch](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API)を使うと良いかもしれません
        - ヒント：再レンダリングの度にリクエストが飛ばないようにするためには、useEffectの第2引数に何かを指定する必要があるはずです！
