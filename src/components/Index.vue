<template>
  <div class="ind_surround">
    <common-header></common-header>
    <div class="ind_other">
      <div class="ind_content" v-loading="loading" element-loading-text="拼命加载中，冲鸭！！！" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.9)">
        <div class="mobileSearch">
          <div class="indh_search">
            <input type="text" placeholder="调皮的搜索框。BiuBiuBiu~">
            <button>搜你所想</button>
          </div>
        </div>
        <div class="ind_videoCont">
          <router-link class="ind_item" :to="{ name: 'Video', query: { vId: item.id }}" v-for="(item,index) in videoData" :key="index" @click.native="goPlay(item)">
            <img :src="item.imagePic">
            <p class="ind_name">{{item.name}}</p>
          </router-link>
        </div>
        <div class="paging">
          <div class="paging_btn">
            <button class="prev_page_btn" @click="prevPage">上一页</button>
            <button class="next_page_btn" @click="nextPage">下一页</button>
          </div>
          <span>
            第
            <em> 1 </em>页 / 共
            <i> 123 </i>页
          </span>
        </div>
      </div>
      <common-footer></common-footer>
    </div>
  </div>
</template>

<script>
import CommonHeader from "./common/CommonHeader.vue";
import CommonFooter from "./common/CommonFooter.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      videoData: [],
      nowPage: 1,
      allPage: 127,
      loading: false,
      newVideoData: []
    };
  },
  components: { CommonHeader, CommonFooter },
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
    },
    /**
     * @description 下一页
     */
    nextPage() {
      let that = this;
      this.loading = true;
      this.nowPage = this.nowPage + 1;
      this.$get(`list?page=${this.nowPage}`).then(result => {
        // this.videoData = result;
        that.newVideoData = result;
        if (this.newVideoData.length !== 0) {
          this.videoData = this.$Tools.cloneObj(this.newVideoData);
          that.loading = false;
        }
      });
    },
    /**
     * @description 上一页
     */
    prevPage() {}
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
  .ind_other {
    width: 100%;
    .ind_content {
      margin: 50px auto 0;
      width: 1200px;
      .mobileSearch {
        display: none;
        .indh_search {
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          input {
            width: 200px;
            height: 38px;
            background: #fff;
            border: none;
            outline: none;
            border: 1px solid #e3e3e3;
            border-right: none;
            font-size: 14px;
            text-indent: 20px;
            color: #999999;
            border-radius: 20px 0 0 20px;
            float: left;
            vertical-align: middle;
          }
          button {
            width: 100px;
            height: 40px;
            outline: none;
            border: none;
            cursor: pointer;
            color: #fff;
            background-image: linear-gradient(
              135deg,
              #fab2ff 10%,
              #1904e5 100%
            );
            border-radius: 0 20px 20px 0;
            float: left;
          }
        }
      }
      .ind_videoCont {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        .ind_item {
          width: 18%;
          height: 300px;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
          margin-bottom: 30px;
          margin-right: 20px;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          &:hover {
            transform: translateY(-10px);
            box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
          }
          img {
            width: 100%;
            height: 90%;
            border-radius: 10px 10px 0 0;
          }
          .ind_name {
            width: 100%;
            flex: 1;
            font-size: 12px; // padding: 10px 0 10px 5px;
            padding-left: 5px;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #333;
          }
        }
      }
      .paging {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        .paging_btn {
          button {
            width: 120px;
            height: 35px;
            outline: none;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            color: #fff;
          }
          .prev_page_btn {
            margin-right: 10px;
            background-image: linear-gradient(
              135deg,
              #ce9ffc 10%,
              #7367f0 100%
            );
            transition: all 0.3s;
            &:hover {
              background-image: linear-gradient(
                135deg,
                #43cbff 10%,
                #9708cc 100%
              );
            }
          }
          .next_page_btn {
            margin-left: 10px;
            background-image: linear-gradient(
              135deg,
              #43cbff 10%,
              #9708cc 100%
            );
            transition: all 0.3s;
            &:hover {
              background-image: linear-gradient(
                135deg,
                #ce9ffc 10%,
                #7367f0 100%
              );
            }
          }
        }
        span {
          margin-left: 50px;
          em {
            font-style: normal;
            font-size: 18px;
            background-image: linear-gradient(
              135deg,
              #fdd819 10%,
              #e80505 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          i {
            background-image: linear-gradient(
              135deg,
              #fdd819 10%,
              #e80505 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-style: normal;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>