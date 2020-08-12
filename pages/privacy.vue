<template>
  <div :class="$style.privacy">
    <simple-header>
      <span :style="{ fontSize: '14px' }">没有账号？</span>
      <nuxt-link to="/register">
        <el-button type="primary" size="mini">注册</el-button>
      </nuxt-link>
    </simple-header>

    <section>
      <div :class="$style.main">
        <div v-html="privacy"></div>
      </div>
    </section>
  </div>
</template>

<script>
import simpleHeader from '~/components/header/simple'
export default {
  components: {
    simpleHeader
  },
  async asyncData(ctx) {
    const res = await ctx.$axios({
      method: 'get',
      url: '/api/privacy'
    })
    return {
      privacy: res.data[0].content
    }
  },
  layout: 'blank',
  head() {
    return {
      title: 'ANTCP隐私保护指引',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'hi，我是ANTCP网站的作者杨盼，请仔细阅读ANTCP隐私保护指引'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
.privacy {
  > section {
    margin: 0 auto;
    margin-top: 20px;
    width: 1024px;
    background: #ffffff;
    .main {
      padding: 30px;
      min-height: 520px;
    }
  }
}
</style>
