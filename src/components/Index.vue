<template>
    <div class="ind_surround">
        <div class="ind_header">
            <h3>在线电影院-简约版</h3>
        </div>
        <div class="ind_content">
            <div class="ind_videoCont">
                <div class="ind_item" v-for="(item,index) in videoData" :key="index" @click="goPlay(item)">
                    <img :src="item.pic">
                    <span>{{item.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      videoData: []
    };
  },
  components: {},
  methods: {
    /**
     * @description 初始化数据
     */
    initData() {
      this.$http
        .get("http://localhost:3000/video")
        .then(result => {
          console.log("------", result);
          this.videoData = result.data.video;
        })
        .catch(error => {});
    },
    /**
     * @description 跳转到播放页面
     */
    goPlay(item) {
      this.$router.push({
        name: "Video",
        params: item
      });
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
  .ind_header{
      width:1200px;
      height:100px;
      line-height: 100px;
      margin:0 auto;
  }
  .ind_content {
    margin: 0 auto;
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