import Vue from "vue";
import request from '@/lib/axios'; // eslint-disable-line
import App from "./App.vue";
import "@/assets/css/index.scss";
// import { DatetimePicker } from "vant";
import { Style, Picker, DatePicker, Toast, Dialog, Upload } from "cube-ui";
Vue.use(DatePicker)
  .use(Toast)
  .use(Dialog)
  .use(Upload)
  .use(Picker);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
