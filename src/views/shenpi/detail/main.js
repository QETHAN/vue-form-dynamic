import Vue from "vue";
import "@/assets/css/index.scss";
import request from "@/lib/axios"; // eslint-disable-line
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
