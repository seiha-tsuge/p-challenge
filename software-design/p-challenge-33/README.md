# 課題 33

## 課題 1

### 問題 1

![onio-architecture](https://user-images.githubusercontent.com/49358142/182028858-0acc7f99-131e-47c9-b8b9-bc15dc2fb52e.png)

### 問題 2

どの層にも依存していないため、他の層の変更の影響を受けない。また、このレイヤーを対象にした単体テストを記述するのが容易になる。

### 問題 3

interfaceの方が実装より変更されにくい。依存先が変更されれば、依存元にも変更の影響が波及するため、できるだけ依存先は変わりにくいものが良い。  
interfaceに依存することで、具体的な実装に影響されることが無くなる。

[プログラミングで Interface がどんな時に使われるのかを簡単に解説](https://www.youtube.com/watch?v=XzEZ1M8PsH4&t)

### 問題 4

ドメイン層がインフラ層に依存しないように、依存性の逆転を用いている。

![20181210192908](https://user-images.githubusercontent.com/49358142/183245614-f0fa13f5-d159-44d2-a1b5-e8a3b75d3265.png)
![20181210193156](https://user-images.githubusercontent.com/49358142/183245622-ba568f53-5857-415c-9043-5ee9bd902c1e.png)

[新卒にも伝わるドメイン駆動設計のアーキテクチャ説明 オニオンアーキテクチャ(DDD)](https://little-hands.hatenablog.com/entry/2018/12/10/ddd-architecture)

### 問題 5

- 特定のユーザにしかリソースの追加や更新を許さないようなアクセス制限機能を実装したいとします。どの層に記述するのが適切でしょうか？（これは開発者によって意見が割れると思いますので、様々な観点から根拠を集めてみてください！）

- アプリケーション層

> Security is an application specific concern, it belongs to the interactors. The controllers would access the current user's credentials and pass that information to the interactors. The interactors would use an authorization service to ensure that their particular interaction was authorized. The business objects wouldn't know anything about it.
[Clean Code Discussion](https://groups.google.com/g/clean-code-discussion/c/wHzmboOEHzo)

権限はアプリケーションの関心ごとであり、ビジネスオブジェクトはこのことについて意識しない。権限は、アプリケーション上の操作制御の問題であり、アプリケーションがあるからこそ存在する概念である。例えば、管理者ではない一般ユーザーが管理画面に訪れた際の制御は、ビジネスルールの関心ごとではないと言える。

- ドメイン層

特定のユーザーにしかリソースの追加や更新を許さないようなアクセス制御機能は、アプリケーションが無くても存在するドメインのルールに当てはまる可能性がある。

https://github.com/little-hands/ddd-q-and-a/issues/68  
https://github.com/little-hands/ddd-q-and-a/issues/220  
https://github.com/little-hands/ddd-q-and-a/issues/787  
[アプリケーションにおける権限設計の課題](https://kenfdev.hateblo.jp/entry/2020/01/13/115032)

### 問題 6

インフラ層
