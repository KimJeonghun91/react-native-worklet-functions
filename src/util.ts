export const sample = <T>(arr: T[]) => {
  'worklet';

  return arr[Math.floor(Math.random() * arr.length)];
};

export const sampleSize = <T>(arr: T[], n: number) => {
  'worklet';

  if (n <= 0) {
    return [];
  }

  return shuffle(arr).slice(0, n);
};

export const random = (min: number, max: number) => {
  'worklet';

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const clamp = (value: number, lower: number, upper: number) => {
  'worklet';

  return Math.min(Math.max(lower, value), upper);
};

export const nth = <T>(arr: T[], index: number) => {
  'worklet';

  if (index < 0 || index >= arr.length) {
    return undefined;
  }

  return arr[index];
};

export const head = <T>(arr: T[]) => {
  'worklet';

  if (arr.length === 0) {
    return undefined;
  }

  return arr[0];
};

export const tail = <T>(arr: T[]) => {
  'worklet';

  if (arr.length === 0) {
    return undefined;
  }

  return arr[arr.length - 1];
};

export const zip = <T, U>(arr1: T[], arr2: U[]) => {
  'worklet';

  const result = [];
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
};

export const zipObject = <T extends string | number | symbol, U>(props: T[], values: U[]) => {
  'worklet';

  const result: Record<T, U> = {} as Record<T, U>;

  for (let i = 0; i < props.length; i++) {
    result[props[i]] = values[i];
  }

  return result;
};

export const chunk = <T>(arr: T[], size: number) => {
  'worklet';

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

export const take = <T>(arr: T[], n: number) => {
  'worklet';

  if (n <= 0) {
    return [];
  }

  return arr.slice(0, n);
};

export const without = <T>(arr: T[], ...values: T[]) => {
  'worklet';

  return arr.filter((item) => !values.includes(item));
};

export const shuffle = <T>(arr: T[]) => {
  'worklet';

  return arr.slice().sort(() => Math.random() - 0.5);
};

export const debounce = <T extends (...args: any[]) => any>(worklet: T, wait = 0) => {
  'worklet';

  const value = {
    time: 0,
  };

  return (...args: any[]) => {
    'worklet';

    const t = Date.now();
    const now = t - value.time;
    if (now < wait) {
      value.time = t;
      return;
    }

    worklet(...args);
    value.time = t;
  };
};

export const throttle = <T extends (...args: any[]) => any>(worklet: T, wait = 0) => {
  'worklet';

  const value = {
    time: 0,
  };

  return (...args: any[]) => {
    'worklet';

    const t = Date.now();
    const now = t - value.time;
    if (now > wait) {
      value.time = t;
      worklet(...args);
    }
  };
};

export const isNull = (value: any) => {
  'worklet';

  return value === null;
};

export const isUndefined = (value: any) => {
  'worklet';

  return value === undefined;
};

export const isEqual = (a: any, b: any) => {
  'worklet';

  return a === b;
};

export const isNil = <T>(value: T | null | undefined): value is null | undefined => {
  'worklet';

  return value === null || value === undefined;
};

export const range = (start: number, end: number, step = 1) => {
  'worklet';

  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }

  return result;
};

export const groupBy = <T>(arr: Array<T>, iteratee: (v: T) => any): Record<keyof T[], T[]> => {
  'worklet';

  if (isNil(arr)) {
    return {} as Record<keyof T[], T[]>;
  }

  const result = {} as Record<keyof T[], T[]>;
  for (let i = 0; i < arr.length; i++) {
    const key = iteratee(arr[i]);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(arr[i]);
  }
  return result;
};

export const times = <T>(n: number, iteratee: (index: number) => T) => {
  'worklet';

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(iteratee(i));
  }

  return result;
};

export const find = <T>(arr: T[], predicate: (v: T) => boolean) => {
  'worklet';

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return arr[i];
    }
  }

  return undefined;
};

export const findIndex = <T>(arr: T[], predicate: (v: T) => boolean) => {
  'worklet';

  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }

  return -1;
};

export const concat = (...args: any[][]) => {
  'worklet';

  return args.flat();
};

export const count = (arr: any[]) => {
  'worklet';

  return arr.length;
};

export const isEmpty = (arr: any[]) => {
  'worklet';

  return arr.length === 0;
};

export const keys = <T extends Record<string, any>>(obj: T) => {
  'worklet';

  return Object.keys(obj) as (keyof T)[];
};

export const values = <T extends Record<string, any>>(obj: T) => {
  'worklet';

  return Object.values(obj) as T[keyof T][];
};
