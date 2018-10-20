<template>
  <div class="ind_surround">
    <common-header></common-header>
    <div class="ind_content">
      <div class="ind_videoCont">
        <router-link class="ind_item" :to="{ name: 'Video', query: { vId: item.id }}" v-for="(item,index) in videoData" :key="index" @click.native="goPlay(item)">
          <img v-lazy="item.imagePic">
          <span>{{item.name}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import CommonHeader from "./common/CommonHeader.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      videoData: []
    };
  },
  components: { CommonHeader },
  computed: {
    ...mapGetters(["video"])
  },
  methods: {
    ...mapActions(["_setVideoInfo"]),
    /**
     * @description 初始化数据
     */
    initData() {
      this.$get("list").then(result => {
        this.videoData = result;
      });
    },
    /**
     * @description 向vuex中添加当前点击视频详情
     */
    goPlay(item) {
      this._setVideoInfo(item);
    }
  },
  created() {
    this.initData();
  }
};
</script>
<style lang='scss' scoped>
.ind_surround {
  width: 100%;
  height: 100%;
  .ind_content {
    margin: 50px auto 0;
    width: 1200px;
    height: 600px;
    .ind_videoCont {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      .ind_item {
        width: 18%;
        height: 300px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        margin-bottom: 30px;
        margin-right: 20px;
        transition: all 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        &:hover {
          transform: translateY(-10px);
        }
        img {
          width: 100%;
          height: 90%;
        }
        span {
          flex: 1;
          display: flex;
          align-items: center;
          font-size: 12px;
        }
      }
    }
  }
}
</style>