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
  async asyncData({ $axios }) {
    const resPromise = $axios({
      method: 'get',
      url: '/api/privacy'
    }).catch(() => Promise.resolve({ data: [] }))

    const apiData = await new Promise((resolve) => {
      Promise.all([resPromise]).then((dataGather) => {
        resolve({
          privacy: dataGather[0].data[0].content
        })
      })
    })
    return apiData
  },
  layout: 'blank',
  head() {
    return {
      title: 'UOOOOOOOO隐私保护指引',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '请仔细阅读UOOOOOOOO隐私保护指引'
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
