<template>
  <div class="media-video">
    <d-player ref="player" :options="options" class="vue-d-player"></d-player>
  </div>
</template>

<script>
import DPlayer from "vue-dplayer";
import "../../node_modules/vue-dplayer/dist/vue-dplayer.css";
export default {
  name: "media-from-dashboard",
  components: { DPlayer },
  data() {
    return {
      options: {
        video: {
          url: "",
          type: "hls"
        },
        autoplay: true
      }
    };
  },
  methods: {},
  created() {
    console.log("带过来的参数", this.$route.params);
    this.options.video.url = this.$route.params.url;
  },
  mounted() {}
};
</script>

<style>
.media-video {
  width: 600px;
  height: 350px;
  margin: 100px auto 0;
  box-sizing: border-box;
}
.vue-d-player {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
</style>
