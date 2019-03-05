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

export function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
