import Vue from "vue";
import Router from "vue-router";
import Form from "./views/form";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Form
    }
  ]
});
