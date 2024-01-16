import { add } from '../src/main';

describe('add', () => {
  test('1 と 2 を引数に渡し計算結果の 3 が返却される', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('引数を 30 個受け取れる', () => {
    const mock = { add };
    jest.spyOn(mock, 'add');

    const numbers: number[] = [...Array(30).keys()];

    mock.add(...numbers);
    expect(mock.add).toHaveBeenCalledWith(...numbers);
  });

  test('引数を 31 個受け取った場合エラー', () => {
    const numbers: number[] = [...Array(31).keys()];

    expect(() => add(...numbers)).toThrow(
      new Error('30を超える引数は指定できません')
    );
  });

  // eslint-disable-next-line
  test.skip('引数が数字以外だとエラー', () => {});

  test('計算結果が 1000 を超える場合は「too big」と文字列が返却される', () => {
    expect(add(1, 1000)).toBe('too big');
  });

  test('計算結果が 1000 の時は 1000 が返却される', () => {
    expect(add(1, 999)).toBe(1000);
  });
});
