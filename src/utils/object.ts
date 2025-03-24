export const isObjectEmpty = (obj: object): boolean =>
  obj ? Object.keys(obj).length === 0 : true
