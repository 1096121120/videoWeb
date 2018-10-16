import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/Index";
import Video from "@/components/Video";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/video/",
      name: "Video",
      component: Video
    }
  ]
});
