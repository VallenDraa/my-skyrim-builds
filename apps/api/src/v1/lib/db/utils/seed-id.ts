export type SeedWithId<T> = T & {
  id: number;
};

export const setSeedId = <T>(data: T, id: number): SeedWithId<T> => ({
  id,
  ...data,
});

export const setManySeedId = <T>(data: T[]): SeedWithId<T>[] =>
  data.map((item, i) => setSeedId(item, i + 1));
