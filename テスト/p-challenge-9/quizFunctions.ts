export const cloneArray = (array: any[]): any[] => {
  return [...array];
};

export const isNumber = (number: number): boolean => {
  return typeof number === 'number';
};

export const max = (numbers: number[]): number | undefined => {
  if (numbers.length === 0) return undefined

  return Math.max(...numbers)
};