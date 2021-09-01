export const storage_get = (key) => {
  try {
    const serializedValue = sessionStorage.getItem(key);

    if (serializedValue === null) {
      return undefined;
    }

    return JSON.parse(serializedValue);

  } catch (error) {
    return undefined;
  }
};

export const storage_set = (key, value) => {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (error) {}
};
