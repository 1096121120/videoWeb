<template>
  <div class="media-video">
    <common-header></common-header>
    <div class="videoBox">
      <div class="video-control">
        <d-player ref="player" :options="options" class="vue-d-player"></d-player>
      </div>
      <div class="media_recommond">

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CommonHeader from "./common/CommonHeader.vue";
import DPlayer from "vue-dplayer";
import "../../node_modules/vue-dplayer/dist/vue-dplayer.css";
export default {
  name: "media-from-dashboard",
  components: { CommonHeader, DPlayer },
  data() {
    return {
      options: {
        video: {
          url: "",
          type: "auto"
        },
        autoplay: true
      },
      videoInfo: {}
    };
  },
  computed: {
    ...mapGetters(["video"])
  },
  methods: {
    /**
     * @description 初始化当前视频详情
     */
    initVideoDetails() {
      //如果vuex中有值，则不用请求数据啊啊啊
      //如果为空   通过vId重新获取数据
      if (Object.keys(this.video.videoInfo).length === 0) {
        let url = `video?vId=${this.$route.query.vId}`;
        this.$get(url)
          .then(result => {
            result.playLink = JSON.parse(result.playLink);
            this.videoInfo = result;
            let player = this.$refs.player.dp;
            this.$set(
              this.options.video,
              "url",
              this.videoInfo.playLink[0].videoSrcInfo[0].videoSrc
            );
            player.switchVideo({
              url: this.options.video.url
            });
            player.play();
          })
          .catch(error => {});
      } else {
        //不为空则取出vuex中的视频详情
        this.videoInfo = this.$Tools.cloneObj(this.video.videoInfo);
        this.videoInfo.playLink = JSON.parse(this.videoInfo.playLink);
        this.initOptions();
      }
    },
    /**
     * @description 初始化视频播放参数
     */
    initOptions() {
      /* const player = this.$refs.player.dp;
      this.$set(this.options.video,"url",this.videoInfo.playLink[0].videoSrcInfo[0].videoSrc)
      player.switchVideo(
        {
          url: this.options.video.url
        }
      );
      player.play(); */
      this.options.video.url = this.videoInfo.playLink[0].videoSrcInfo[0].videoSrc;
      //可添加对当前视频点赞功能！！！！！！！！！！根据点赞数量进行排序   出10个销量好的
    }
  },
  created() {
    // this.options.video.url = this.$route.params.url;
    this.initVideoDetails();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.media-video {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.videoBox {
  width: 1200px;
  margin: 30px auto 0;
  display: flex;
  justify-content: space-between;
  .video-control {
    width: 860px;
    height: 600px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    .vue-d-player {
      width: 100%;
      height: 480px;
      background: #fff;
      box-sizing: border-box;
    }
  }
  .media_recommond {
    width: 320px;
    height: 600px;
    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }
}
</style>
