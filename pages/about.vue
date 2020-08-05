<template>
  <div :class="$style.about">
    <el-card shadow="never">
      <p :class="$style.motto">从来处来，到来处去！</p>
      <h3>关于我</h3>
      <p>Hi，我是杨盼，web前端，现在使用并擅长的编程语言，javascript，dart</p>
      <p>最近使用最多web前端框架是vue。深入了解与vue相关的技能树</p>
      <p><a href="https://github.com/unclepan/">GitHub UnclePan</a></p>

      <h3>关于此网站</h3>
      <p>
        此网站无任何实际的业务意义，数据来源于网络，自己写的爬虫，如有不当请联系删除
      </p>
      <p>
        是用来技能总结的一个平台，包括UI设计、前端（nuxt）、后端(typescript)、后台(vue)
      </p>
      <p>
        可能某个业务没变，但里面代码根据平常工作的总结，经过了多次思考与重构。
      </p>
      <p>
        网站系统管理的前端：依据仿（vue-element-admin）的一个项目开发
        <a href="https://github.com/unclepan/uncle-vue-element-admin">
          https://github.com/unclepan/uncle-vue-element-admin
        </a>
      </p>
      <p>
        埋点：自研包
        <a href="https://github.com/unclepan/zui-monitor">
          https://github.com/unclepan/zui-monitor
        </a>
      </p>
      <p>后端：node的koa、typescript</p>
      <p>数据库：mongodb，redis</p>
      <p>服务器：阿里云香港，Nginx</p>
      <p>进程管理：pm2</p>
      <p>代码管理：git</p>

      <h3>未来</h3>
      <p>flutter接入</p>
      <p>小程序接入</p>
    </el-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '关于'
    }
  }
}
</script>

<style lang="scss" module>
.about {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
  .motto {
    color: #aaaaaa;
    font-style: italic;
    border-left: 3px solid #aaaaaa;
    padding-left: 10px;
  }
}
</style>
