import Vue from "vue";
// import router from "@/router";
import { Toast } from "vant";
import Axios from "axios";
import { loadFromLocal } from "./utils";

Axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
// Axios.defaults.baseURL = "";
Axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
Axios.defaults.timeout = 30000;

const postMethods = ["post", "put", "del"];
const handleMethodName = method => {
  return method === "del" ? "delete" : method;
};
postMethods.map(method => {
  Axios.defaults.headers[handleMethodName(method)]["Content-Type"] =
    "application/json;charset=UTF-8";
});

const loadingWhiteList = [];

Axios.interceptors.request.use(
  config => {
    // const token = store.state.token || loadFromLocal("token");
    // if (token) {
    //   config.headers = { Authorization: token };
    // }

    // loading start
    if (!loadingWhiteList.includes(config.url)) {
      // Toast.loading({
      //   mask: true,
      //   message: "加载中..."
      // });
    }

    // TODO 根据url设置提示语

    return config;
  },
  error => Promise.reject(error)
);

Axios.interceptors.response.use(
  response => {
    // loading end
    Toast.clear();
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const checkStatus = res => {
  const { headers } = res;
  const paginationTotal = headers["x-pagination-total-count"];
  const paginationPerPage = headers["x-pagination-per-page"];

  if (res.status === 200 || res.status === 201 || res.status === 304) {
    if (paginationTotal) {
      return {
        data: res.data,
        status: res.status,
        size: Number.parseInt(paginationPerPage),
        total: Number.parseInt(paginationTotal)
      };
    }
    return { data: res.data, status: res.status };
  }

  if (res.status === 204) {
    return {};
  }

  if (res.data.message) {
    Toast(res.data.message);
  }

  return Promise.reject({
    status: res.status,
    code: res.data.code,
    message: res.data.message,
    data: res.data
  });
};

const handleError = error => {
  const response = error.response;

  let msg = "";

  if (response) {
    msg =
      response && response.data.message
        ? response.data.message
        : response && response.data.length
        ? response.data[0].message
        : "服务端未响应，或者网络有问题";

    if (response.status === 401) {
      // localStorage.removeItem("token");
      // return redirectWxAuth();
    }
  } else {
    msg = error.message;
  }

  Toast(msg);

  return Promise.reject({
    code: response.status,
    message: msg
  });
};

const request = postMethods.reduce((ret, method) => {
  ret[method] = (url, data, headers) => {
    return Axios({
      method: handleMethodName(method),
      url,
      headers,
      data
    }).then(checkStatus, handleError);
  };

  return ret;
}, {});

request.get = (url, params, headers) => {
  return Axios({
    method: "get",
    url,
    headers,
    params
  }).then(checkStatus, handleError);
};

postMethods.concat(["get"]).forEach(method => {
  Vue.prototype[method] = request[method];
});

export default request;
