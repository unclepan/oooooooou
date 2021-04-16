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
  async asyncData({ $axios }) {
    const resPromise = $axios({
      method: 'get',
      url: '/api/term'
    }).catch(() => Promise.resolve({ data: [] }))

    const apiData = await new Promise((resolve) => {
      Promise.all([resPromise]).then((dataGather) => {
        resolve({
          term: dataGather[0].data[0].content
        })
      })
    })
    return apiData
  },
  layout: 'blank',
  head() {
    return {
      title: 'UOOOOOOOO协议',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'hi，我是UOOOOOOOO网站的作者杨盼，请仔细阅读协议'
        }
      ]
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
