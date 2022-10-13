/* Returns if a number is even */
export const isEven = (value: number): boolean => !Boolean(value & 1);

/* Returns if a number is odd */
export const isOdd = (value: number): boolean => Boolean(value & 1);

/* Returns if a string is empty */
export const isStringEmpty = (value: string): boolean => value === "";
