import { multiply } from '../src/main';

describe('multiply', () => {
  test('2 と 2 を引数に渡し計算結果の 4 が返却される', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  test('引数を 30 個受け取れる', () => {
    const mock = { multiply };
    jest.spyOn(mock, 'multiply');

    const numbers: number[] = [...Array(30).keys()];

    mock.multiply(...numbers);
    expect(mock.multiply).toHaveBeenCalledWith(...numbers);
  });

  test('引数を 31 個受け取った場合エラー', () => {
    const numbers: number[] = [...Array(31).keys()];

    expect(() => multiply(...numbers)).toThrow(
      new Error('30を超える引数は指定できません')
    );
  });

  // eslint-disable-next-line
  test.skip('引数が数字以外だとエラー', () => {});

  test('計算結果が 1000 を超える場合は「big big number」と文字列が返却される', () => {
    expect(multiply(7, 11, 13)).toBe('big big number');
  });

  test('計算結果が 1000 の時は 1000 が返却される', () => {
    expect(multiply(500, 2)).toBe(1000);
  });
});
