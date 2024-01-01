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

- 「useEffect」を使用することで、Reactコンポーネントがレンダリングされた後に、特定の副作用（side effects）を実行できます。
- ただし、副作用を実行するだけでは不十分です。コンポーネントが画面からアンマウントされる際に、開始した処理を適切に停止しなければ、メモリリークや予期しない挙動のリスクが生じます。
- この問題に対応するため、useEffectはクリーンアップ関数を提供します。これはコンポーネントがアンマウントされる時や、useEffectが再実行される前に、特定の後始末処理を行うために使用されます。
- Reactでは、エフェクトが再実行される前に、毎回このクリーンアップ関数を呼び出します。また、コンポーネントがアンマウントされる（削除される）際にも、最後に一度この関数が呼び出されます。

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
