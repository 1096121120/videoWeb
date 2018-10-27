<template>
  <div class="cof_surround">
    <div class="cof_interlink">
      <h3>友情链接：</h3>
      <ul class="cof_friendLink">
        <li>
          <a href="">百度一下</a>
        </li>
        <li>
          <a href="">淘宝一下</a>
        </li>
        <li>
          <a href="http://">京东一下</a>
        </li>
        <li>
          <a href="http://">开心一下</a>
        </li>
        <li>
          <a href="http://">皮一下</a>
        </li>
        <li>
          <a href="http://">优惠券哦</a>
        </li>
        <li>
          <a href="http://">搞笑十分</a>
        </li>
        <li>
          <a href="http://">精彩视频 </a>
        </li>
      </ul>
    </div>
    <div class="cof_companyinfo">
      <p>本站影视资源均系收集于各大视频网站,本站只提供web页面服务,并不提供影片资源存储,也不参与录制、上传。<br> 若本站收录的节目无意侵犯了贵司版权，请给网页底部邮箱地址来信,我们会及时处理和回复,谢谢。<br>
      htmlcs@163.com
      </p>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  created() {}
};
</script>
<style lang='scss' scoped>
.cof_surround {
  width: 100%;
  background: #313131;
  color: #a5a5a5;
  display: flex;
  flex-direction: column;
  // 友链字体#bebebe 文字a4a4a4
  .cof_interlink {
    width: 1200px;
    margin: 0 auto;
    height: 130px;
    h3 {
      margin-top: 30px;
      margin-bottom: 20px;
      font-size: 14px;
      font-weight: normal;
    }
    .cof_friendLink {
      width: 1200px;
      height: 50px;
      margin: 0 auto;
      background: #424242;
      display: flex;
      align-items: center;
      li {
        padding: 0 20px;
        color: #bebebe;
        a {
          color: #bebebe;
        }
      }
    }
  }
  .cof_companyinfo {
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    p {
      text-align: center;
    }
  }
}
</style>