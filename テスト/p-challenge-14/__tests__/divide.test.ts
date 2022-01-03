import { divide } from '../src/main';

describe('divide', () => {
  test('6 と 2 を引数に渡し計算結果の 3 が返却される', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('引数を 30 個受け取れる', () => {
    const mock = { divide };
    jest.spyOn(mock, 'divide');

    const numbers: number[] = [...Array(30).keys()];

    mock.divide(...numbers);
    expect(mock.divide).toHaveBeenCalledWith(...numbers);
  });

  test('引数を 31 個受け取った場合エラー', () => {
    const numbers: number[] = [...Array(31).keys()];

    expect(() => divide(...numbers)).toThrow(
      new Error('30を超える引数は指定できません')
    );
  });

  // eslint-disable-next-line
  test.skip('引数が数字以外だとエラー', () => {});
});
