import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import { get, post, patch, put } from "./utils/http";
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
