# 課題 12

## 課題 1

### 問題 1

#### Square の中身（o,x）を赤色に変えてください

#### ビジュアルリグレッションテストが変更を検知していることを確認してください

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147850914-6889b48d-3818-4d78-9774-e9a8c9a02c4e.png">

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147851074-aefa63b7-81cd-41e2-a10a-a84614b400be.png">

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147851079-ad11a775-7828-4e0f-b101-04dba5106922.png">

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147851088-18735be4-20a2-47b5-baf5-ece5ae4d2b60.png">

#### 変更を受け入れて、スクリーンショットを更新しましょう

```
yarn test --updateSnapshot
```

#### 間違って 3x3 ではなく、4x3 の board を作成してみてください

#### ビジュアルリグレッションテストが変更を検知していることを確認してください

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147851452-cc3be671-c256-4b20-98fc-fea4862ecacf.png">

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147851471-6d7ffd47-5c1b-44a2-9e34-43835ec8110b.png">

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147851474-1005d2af-a604-4717-8e0c-60c8edcddfeb.png">

<img width="320" alt="" src="https://user-images.githubusercontent.com/49358142/147851476-baaaf1f9-edae-4e83-830a-289a97fe816e.png">

## 課題 2

### 問題 1

#### ビジュアルリグレッションテストとスナップショットテストを比較した時、それぞれにどのようなメリット・デメリットがあると感じましたか？

<table>
<tr>
  <th></th>
  <th>メリット</th>
  <th>デメリット</th>
</tr>
<tr>
  <td rowspan=2>ビジュアルリグレッションテスト</td>
  <td>1 ピクセル単位で比較するため、「見た目」をテストすることが可能 </td>
  <td rowspan=2>見た目に表れない HTML 属性のテストすることができない</td>
</tr>
<tr>
  <td>スタイルに関してもテストすることができる</td>
</tr>
<tr>
  <td rowspan=2>スナップショットテスト</td>
  <td rowspan=2>見た目に表れない HTML 属性をテストすることが可能</td>
  <td>HTML の差分を比較するため、「見た目」をテストすることができない</td>
</tr>
<tr>
  <td>CSS 周りの差分を比較しないため、スタイルに関してのテストができない</td>
</tr>
</table>

[ABEMA でスナップショットテストをやめて Visual Regression Testing に移行する話](https://developers.cyberagent.co.jp/blog/archives/29784/)  
[制作現場におけるビジュアルリグレッションテストの導入 – 「LINE のお年玉」4 年目の挑戦](https://engineering.linecorp.com/ja/blog/visual-regression-otoshidama/)

## 課題 3

### クイズ 1

ビジュアルリグレッションテストで確認できないのは次のうちどれ？

1. ページのレイアウトが正しく表示されているか
1. スタイルが保たれているか
1. シリアライズされた HTML に変更が加えられていないか

### クイズ 2

ビジュアルリグレッションテストで確認できるのは次のうちどれ？

1. お気に入りボタンが表示されない
1. 画像の alt 属性が設定されていない
1. お気に入りボタンがクリックできない
1. 2 ページ目移行へ遷移できない

<details>
<summary>ヒント</summary>

[1px の変化も見逃さない！ビジュアルリグレッションテスト導入で快適フロントエンド開発](https://tech.dely.jp/entry/vis_reg_test)

</details>

### クイズ 3

ビジュアルリグレッションテストのライブラリでは無いのは次のうちどれ？

1. [wraith](https://github.com/bbc/wraith)
1. [reg-suit](https://github.com/reg-viz/reg-suit)
1. [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)
1. [wraith](https://github.com/bbc/wraith)
