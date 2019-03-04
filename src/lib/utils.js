export function saveToLocal(key, value) {
  window.localStorage.setItem(key, value);
}

export function loadFromLocal(key) {
  let data = window.localStorage.getItem(key);
  return data;
}

export function clearLocalStorage() {
  window.localStorage.clear();
}
