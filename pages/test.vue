<template>
  <div :class="$style.root">
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    // console.log(window) // 服务端报错
  },
  fetch() {
    // console.log(window) // 服务端报错
  },
  created() {
    // console.log(window) // undefined
  },
  mounted() {
    this.init()
    // console.log(window) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  },
  methods: {
    init() {}
  },
  head() {
    return {
      title: '测试页面',
      meta: [
        {
          name: 'keywords',
          content: '最强王者,今晚吃鸡'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
.root {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
