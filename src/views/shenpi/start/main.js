import Vue from "vue";
import request from '@/lib/axios'; // eslint-disable-line
import App from "./App.vue";
import "@/assets/css/index.scss";
import { DatetimePicker } from "vant";
Vue.use(DatetimePicker);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
