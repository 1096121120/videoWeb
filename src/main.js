import ElementUI from "element-ui";
import Vue from "vue";
import VueLazyload from "vue-lazyload"; //图片懒加载
import App from "./App";
import router from "./router";
import { get, post, patch, put } from "./utils/http"; //http请求
import utils from "./utils/utils"; //工具包

import store from "./vuex/index";

import "element-ui/lib/theme-chalk/index.css";

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: "/static/img/loading.gif",
  // loading: "/static/img/loading.gif",
  attempt: 1,
});
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.prototype.$Tools = utils;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  components: {
    App,
  },
  template: "<App/>",
});
