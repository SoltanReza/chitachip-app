function put(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function read<T>(
  key: string,
  defaultValue: any = null,
): T | typeof defaultValue {
  const value = localStorage.getItem(key);

  if (value !== null) {
    try {
      return JSON.parse(value as string);
    } catch (error) {
      console.warn(error);
    }
  }

  return defaultValue;
}

function remove(key: string) {
  localStorage.removeItem(key);
}

export const Storage = {
  put,
  read,
  remove,
};

(window as any)._Storage = Storage;
