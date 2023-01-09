# 課題39

## 課題1

### アトミックデザインとは何でしょうか？

アトミックデザインは、複雑なユーザーインターフェースを再利用可能な小さなパーツに分解し、スケーラブルで保守性の高いデザインシステムを構築するための方法論です。アトミックデザインは、Atom、Molecule、Organism、Template、Pagesの5つの分類から構成されます。ユーザーインターフェースは、再利用可能な小さな「Atom」から構成されていると考え、そのAtomを組み合わせることでより複雑な「Molecule」を作り出し、それを使ってより大きく複雑な「Organism」を作ることができるという考え方がベースになっています。

#### Atom

ボタンやフォームなど、デザインを構成する最も基本的な要素です。Atomは、すべての要素の構成要素となります。

#### Molecule

検索フォームなど、特定の機能を実行するためのAtomのグループ。

#### Organism

AtomとMoleculeからなる構造体。ヘッダーやフッターなどがこれに該当する。

#### Template

ページやアプリケーションの構造を作成するために使用されるOrganismのグループ。

#### Pages

OrganismとTemplateを使用して作成された、デザインの完成形。

### 関数コンポーネントとクラスコンポーネントの違い

#### レンダリング

関数コンポーネントは、JSXを返すための関数です。一方、クラスコンポーネントはReactコンポーネントを拡張するためのJavaScriptクラスです。クラスコンポーネントは、React要素をレンダリングするために使用されます。

関数 [codesandbox](https://codesandbox.io/s/wandering-fog-x414zj)

クラス [codesandbox](https://codesandbox.io/s/bold-meadow-wx50mv)

#### props

関数コンポーネントは、関数の引数としてpropsを受け取ります。一方、クラスコンポーネントは、this.propsを使用してpropsを受け取ります。

関数 [codesandbox](https://codesandbox.io/s/objective-maria-0ilk45)

クラス [codesandbox](https://codesandbox.io/s/beautiful-hill-2cthcd)

#### state

クラスコンポーネントと関数コンポーネントのstateの違いは、関数コンポーネントが状態を持たない純粋な関数であるのに対して、クラスコンポーネントは状態を持つことができるということです。関数コンポーネントで状態を持ちたい場合は、`useState`を使用することで、状態を持つことができます。

関数 [codesandbox](https://codesandbox.io/s/determined-lederberg-mm00kk)

クラス [codesandbox](https://codesandbox.io/s/tender-easley-lv8ewc)

#### ライフサイクル

関数コンポーネントとクラスコンポーネントのライフサイクルの違いは、関数コンポーネントは単純な関数なので、ライフサイクルメソッドを使用できません。一方、クラスコンポーネントはライフサイクルメソッドを使用できます。ライフサイクルメソッドを使うと、コンポーネントがマウント(`componentDidMount`)されたり、更新(`componentDidUpdate`)、アンマウント(`componentWillUnmount`)されたりするときに、処理を実行できます。

関数コンポーネントにはライフサイクルメソッドはありませんが、`useEffect`を使用することで、関数コンポーネントにライフサイクルの機能を持たせることができます。`useEffect`を使用すると、関数コンポーネントのマウント、更新、アンマウント時に処理を実行することができます。

[Reactライフサイクルと紐づけて、useEffectのデメリットとその対応策を整理してみた](https://zenn.dev/rinda_1994/articles/6752d2baa7b2d8)

[参考 React:関数コンポーネントとクラスコンポーネントの違い](https://www.twilio.com/blog/react-choose-functional-components-jp)

## 課題2

### position: absolute

position: absolute;は、ある要素を別の要素の上に重ねる場合に有効です。しかし、position: absolute;を使用するとレイアウトを保持するのが難しくなる可能性があります。特に、レスポンシブデザインでは、サイト全体のレイアウトに合わせて自動的に調整する必要があります。しかし、position: absolute;を使用すると、スクリーンサイズやデバイスに関係なく、確定した位置に配置されるため、デバイスによっては見づらくなる可能性があります。要素を重ねる必要がなければ、FlexやGridを使用するのが望ましいです。

[モダンCSSによる絶対配置（position: absolute;）の削減](https://coliss.com/articles/build-websites/operation/css/less-absolute-positioning-modern-css.html)

## 課題3

### atomic design 問題点

分類の基準が曖昧なため、どの分類に該当するのか悩むことがあります。そのため、Atomic Designを採用する場合、明確な基準を設定する必要があります。しかし、明確な基準を設定するのは難しく、さらにチーム内で浸透させるのは困難です。それにより、長期的に破綻してしまう可能性があります。

また、機能を変更したい場合、UIを確認し、変更が必要な場所を特定します。しかし、UIの構造とディレクトリの構造が対応しないため、変更が必要なファイルを特定することが困難になります。

[【Atomic Designに懐疑的なあなたへ】改めて考えたい React / Next.js のデザインパターン](https://zenn.dev/mutex_inc/articles/beca85dd7fdcae)

### ディレクトリ構造
