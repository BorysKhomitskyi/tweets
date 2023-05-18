export const saveToStorage = (key, value) => {
  try {
    const defaultValue = JSON.stringify(value);
    localStorage.setItem(key, defaultValue);
  } catch (error) {
    console.error('Error', error.message);
  }
};

export const loadFromStorage = key => {
  try {
    const defaultValue = localStorage.getItem(key);
    return defaultValue === null ? undefined : JSON.parse(defaultValue);
  } catch (error) {
    console.error('Error: ', error.message);
  }
};
