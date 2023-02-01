export type PartialWithNull<T> = {
  [P in keyof T]?: T[P] | null;
};
