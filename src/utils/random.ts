export const getRandomArbitrary = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const suffleArray = (array: any[]) =>
  array.sort(() => Math.random() - 0.5);
