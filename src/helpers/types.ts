export const isEven = (value: number): boolean => !Boolean(value & 1);
export const isOdd = (value: number): boolean => Boolean(value & 1);
export const isStringEmpty = (value?: string): boolean => value === "";
export const isObjectEmpty = (obj: object): boolean =>
  Object.keys(obj).length === 0;
