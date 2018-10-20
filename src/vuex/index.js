import Vue from "vue";
import Vuex from "vuex";
import * as getters from "./getters";

import video from "./modules/video";
Vue.use(Vuex);

// Vue.use(Vuex)

// 创建 store 实例
export default new Vuex.Store({
  getters,
  modules: {
    video,
  },
  strict: process.env.NODE_ENV !== "production", //在非生产环境下，使用严格模式
});
