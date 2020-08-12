<template>
  <div :class="$style.term">
    <simple-header>
      <span :style="{ fontSize: '14px' }">没有账号？</span>
      <nuxt-link to="/register">
        <el-button type="primary" size="mini">注册</el-button>
      </nuxt-link>
    </simple-header>

    <section>
      <div :class="$style.main">
        <div v-html="term"></div>
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
      url: '/api/term'
    })
    return {
      term: res.data[0].content
    }
  },
  layout: 'blank',
  head() {
    return {
      title: '注册'
    }
  }
}
</script>

<style lang="scss" module>
.term {
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
