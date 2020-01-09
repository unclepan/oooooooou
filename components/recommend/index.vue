<template>
  <div>
    <pan-calendar :tip="['2019-11-23']" />
    <strip-title>
      <span slot="default">热门期刊</span>
      <!-- <span slot="more">
        <nuxt-link to="/">更多文章</nuxt-link>
      </span> -->
    </strip-title>
    <item v-for="(item, index) in popularList" :key="index" :item="item" />
    <strip-title>
      <span slot="default">话题推荐</span>
      <span slot="more">
        <nuxt-link to="/">更多话题</nuxt-link>
      </span>
    </strip-title>

    <r-card />
  </div>
</template>

<script>
import panCalendar from '../pan-calendar'
import stripTitle from '../strip-title'
import item from './item'
import rCard from './r-card'
export default {
  components: {
    panCalendar,
    rCard,
    item,
    stripTitle
  },
  props: {
    popularList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },
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
    // console.log(window) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  },
  methods: {}
}
</script>
