import { subtract } from '../src/main';

describe('subtract', () => {
  test('3 と 2 を引数に渡し計算結果の 1 が返却される', () => {
    expect(subtract(3, 2)).toBe(1);
  });

  test('引数を 30 個受け取れる', () => {
    const mock = { subtract };
    jest.spyOn(mock, 'subtract');

    const numbers: number[] = [...Array(30).keys()];

    mock.subtract(...numbers);
    expect(mock.subtract).toHaveBeenCalledWith(...numbers);
  });

  test('引数を 31 個受け取った場合エラー', () => {
    const numbers: number[] = [...Array(31).keys()];

    expect(() => subtract(...numbers)).toThrow(
      new Error('30を超える引数は指定できません')
    );
  });

  // eslint-disable-next-line
  test.skip('引数が数字以外だとエラー', () => {});

  test('計算結果が マイナスの場合は「negative number」と文字列が返却される', () => {
    expect(subtract(1, 2)).toBe('negative number');
  });

  test('計算結果が 0 の時は 0 が返却される', () => {
    expect(subtract(1, 1)).toBe(0);
  });
});
