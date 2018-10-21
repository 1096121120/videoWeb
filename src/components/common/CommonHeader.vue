<template>
  <div class="ind_header">
    <div class="indh_headerCon">
      <div class="logo">
        <h1>
          <a href="/"><img src="/static/img/logo.png" alt="悠悠影视网"></a>
        </h1>
      </div>
      <ul>
        <li class="router-li">
          <router-link class="routerLink" to="/">Home</router-link>
          <div class="route_line"></div>
        </li>
        <li>
          <router-link class="routerLink" to="/">Welfare</router-link>
          <div class="route_line"></div>
        </li>
        <li>
          <router-link class="routerLink" to="/">Blog</router-link>
          <div class="route_line"></div>
        </li>
        <li>
          <router-link class="routerLink" to="/">Today Biu~</router-link>
          <div class="route_line"></div>
        </li>
        <!-- <li><router-link to="/">Good Morning</router-link></li> -->
        <!-- <router-link><router-link to="/">Good Afternoon</router-link></router-link> -->
        <li>
          <router-link class="routerLink" to="/story">Morning</router-link>
          <div class="route_line"></div>
        </li>
      </ul>
      <div class="indh_search">
        <input type="text" placeholder="调皮的搜索框。BiuBiuBiu~">
        <button>搜你所想</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowDate: "" //现在的时间，根据时间显示导航栏
    };
  },
  components: {},
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.ind_header {
  width: 100%;
  height: 80px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  line-height: 80px;
  border-bottom: 1px solid #e3e3e3;
  background: #fff;
  margin: 0 auto;
  .indh_headerCon {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    ul {
      display: flex;
      flex: 1;
      margin-left: 50px;
      align-items: center;
      font-size: 16px;
      li {
        position: relative;
        width: 100px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 80px;
        cursor: pointer;
        margin: 0 5px;
        background-image: linear-gradient(
          45deg,
          #ff36a5 25%,
          #0060ff 50%,
          #43008f 70%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        .routerLink {
          display: block;
          padding: 0 5px;
          text-align: center;
          width: 100%;
        }
        &:hover {
          background-image: linear-gradient(135deg, #fd6585 10%, #0d25b9 100%);
          .route_line {
            width: 100%;
          }
        }
        .route_line {
          transition: all 0.5s;
          position: absolute;
          bottom: 0;
          width: 0;
          height: 4px;
          background-image: linear-gradient(135deg, #fab2ff 10%, #1904e5 100%);
        }
      }
    }
  }
  .indh_search {
    input {
      width: 200px;
      height: 38px;
      background: rgba(255, 255, 255, 0);
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
      background-image: linear-gradient(135deg, #fab2ff 10%, #1904e5 100%);
      border-radius: 0 20px 20px 0;
      float: left;
    }
  }
}
</style>