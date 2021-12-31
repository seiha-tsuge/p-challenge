# 課題 12

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
