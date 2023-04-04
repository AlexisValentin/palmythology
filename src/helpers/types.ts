export const isStringEmpty = (value?: string): boolean => value === "";
export const isObjectEmpty = (obj: object): boolean =>
  Object.keys(obj).length === 0;
