export const isEven = (nbr: number) => nbr % 2 === 0;
export const isOdd = (nbr: number) => !isEven(nbr);

export const shuffleNumber = (max: number) => Math.floor(Math.random() * max);
