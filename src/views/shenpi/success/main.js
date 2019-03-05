import Vue from "vue";
import "@/assets/css/index.scss";
import request from "@/lib/axios"; // eslint-disable-line
// import {
//   /* eslint-disable no-unused-vars */
//   Style,
//   Button,
//   Dialog
// } from "cube-ui";
import App from "./App.vue";

// Vue.use(Dialog);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
