import { hasOwnProperty } from "./index";

export const setItem = (key, value) => window.localStorage.setItem(key, value);

export const getItem = (key) => window.localStorage.getItem(key);

export const removeItem = (key) => window.localStorage.removeItem(key);

export const clearStorage = () => window.localStorage.clear();

export const clearSessionStorage = () => window.sessionStorage.clear();

export const clearKeys = (keys = []) => keys.map(removeItem);

export const getDataFromLocalStorage = (storagekey, defaultData = {}) => {
  try {
    return JSON.parse(getItem(storagekey)) || defaultData;
  } catch (e) {
    return defaultData;
  }
};

export const setDataToLocalStorage = (storagekey, storageHash) => {
  setItem(storagekey, JSON.stringify(storageHash));
};

export const removeFromStorage = (storagekey, id) => {
  const storageHash = getDataFromLocalStorage(storagekey);

  if (hasOwnProperty(storageHash, id)) {
    delete storageHash[id];
    setDataToLocalStorage(storagekey, storageHash);
  }
};

export const addToStorage = (storagekey, id, datum) => {
  const storageHash = getDataFromLocalStorage(storagekey);
  if (id) {
    storageHash[id] = datum;
    setDataToLocalStorage(storagekey, storageHash);
  }
};
