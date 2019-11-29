<template>
  <div :class="$style.footer">
    <div :class="$style['footer-main']">
      <div :class="$style['footer-link']">
        <a href="#" target="_blank">关于ANTCP｜</a>
        <a href="#" target="_blank">联系我们｜</a>
        <a href="#" target="_blank">友情链接</a>
      </div>
      <br />
      <p>All Rights Reserved. © 2016</p>
      <p>
        网站内容来自网络整理或网友投稿如有侵权行为请邮件:738912168@qq.com
        我们将在24小时内处理。
      </p>
      <p>联系地址：北京市朝阳区东三环XXXXXXXXXXXXX</p>
      <p>ANTCP网站前端工程师 - 鄂ICP备16005435号-1</p>
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
  padding: 20px 0 30px 0;
  min-width: 980px;
  .footer-main {
    width: 980px;

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
