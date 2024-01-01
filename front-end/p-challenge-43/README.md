# 課題 43

## 課題 1

### 問題 1

- Custom Hook を活用することで、ロジックの再利用性が向上します。このアプローチにより、コードの重複を削減し、メンテナンスを容易にすることができます。結果として、開発プロセスが加速します。
  - 既存の Custom Hook ライブラリを利用することで、開発スピードをさらに高めることが可能です。
  - Custom Hook により、関連するロジックを集約し、コードベース全体の可読性と整理を改善することができます。
    - これにより、コンポーネント内のロジックがより明瞭かつ集中的に扱えるようになります。
- Custom Hook の導入により、コンポーネントのテストが容易になります。
  - カスタムフックは独立してテスト可能であり、コンポーネントのロジックをより小さな、テストしやすい単位に分割できます。これにより、テストの効率と品質が向上します。

[React hooks が何故うれしいのか、React の今までを含めて解説](https://qiita.com/_muraham/items/d31628e15ed6ff6e3f58)  
[React Hooks とカスタムフックが実現する世界 - ロジックの分離と再利用性の向上](https://qiita.com/sonatard/items/617f324228f75b9c802f)

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

src/hooks/useData.ts

### 問題 2

- 今回の課題では todo の追加と削除はあっても「更新」がなかったのでさほど問題にはならなかったのですが、もし data から一部の todo のプロパティのみ更新したいケースが生じた時は、意外と実装が手間です。
  - そんな状況を解決してくれるのが[Immer](https://immerjs.github.io/immer/)です。こちらのライブラリが開発された[背景](https://medium.com/hackernoon/introducing-immer-immutability-the-easy-way-9d73d8f71cb3)を学び、どのような有用性があるのか話し合ってみましょう

## 課題 3

以下の課題が未完了なため、一旦保留

課題 39
