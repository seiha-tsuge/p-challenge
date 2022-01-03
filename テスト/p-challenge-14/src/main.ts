const MAX_ARGS = 30;

export const multiply = (...args: number[]): number | string => {
  if (args.length > MAX_ARGS) {
    throw new Error('30を超える引数は指定できません');
  }

  const result = args.reduce((a, b) => a * b);

  if (result > 1000) {
    return 'big big number';
  }

  return result;
};

export const add = (...args: number[]): number | string => {
  if (args.length > MAX_ARGS) {
    throw new Error('30を超える引数は指定できません');
  }

  const result = args.reduce((a, b) => a + b);

  if (result > 1000) {
    return 'too big';
  }

  return result;
};

export const subtract = (...args: number[]): number | string => {
  if (args.length > MAX_ARGS) {
    throw new Error('30を超える引数は指定できません');
  }

  const result = args.reduce((a, b) => a - b);

  if (result < 0) {
    return 'negative number';
  }

  return result;
};

export const divide = (...args: number[]): number => {
  if (args.length > MAX_ARGS) {
    throw new Error('30を超える引数は指定できません');
  }

  const result = args.reduce((a, b) => a / b);
  return result;
};
