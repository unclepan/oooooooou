<template>
  <div :class="$style.footer">
    <div :class="$style['footer-main']">
      <div :class="$style['footer-link']">
        <a href="http://uoooooooo.com/about" target="_blank">关于UOOOOOOOO｜</a>
        <a href="http://www.yangpan.work:3006/" target="_blank">联系我们｜</a>
        <a href="http://www.yangpan.work:3005/#/" target="_blank">友情链接</a>
      </div>
      <br />
      <p>All Rights Reserved. © 2020</p>
      <p>
        网站内容来自网络整理或网友投稿如有侵权行为请邮件:738912168@qq.com
        我们将在24小时内处理。
      </p>
      <p>联系地址：北京市朝阳区东三环北路19号</p>
      <p>UOOOOOOOO分享创意和生活的美学 - 京ICP备20013886号-2</p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="scss" module>
.footer {
  background: #3c3b4a;
  padding: 20px 0;
  min-width: 1024px;
  .footer-main {
    width: 1024px;

    margin: 0 auto;
    .footer-link a {
      color: #ffffff;
      font-size: 14px;
      height: 21px;
      line-height: 21px;
    }
    p {
      color: #ffffff;
      font-size: 12px;
    }
  }
}
</style>
