interface Container<
  T extends Record<string, unknown>,
  K extends keyof T = keyof T
> {
  get: <GetKey extends K>(key: GetKey) => T[GetKey];
  provide: <ProvideKey extends K>(
    key: ProvideKey,
    value: T[ProvideKey]
  ) => void;
}

export function createContainer<
  T extends Record<string, unknown>,
  K extends keyof T = keyof T
>() {
  const tokens = {} as T;
  const container: Container<T, K> = {
    get: <GetKey extends K>(key: GetKey) => tokens[key],
    provide: (key: K, value: T[K]) => {
      tokens[key] = value;
    },
  };
  return container;
}
