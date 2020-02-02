<template>
  <div>
    <calendar :tip="['2019-11-23']" />
    <strip-title>
      <span slot="default">热门期刊</span>
    </strip-title>
    <recommend-periodical :popularList="popularList" />
    <strip-title>
      <span slot="default">问题推荐</span>
      <!-- <span slot="more">
        <nuxt-link to="/">更多话题</nuxt-link>
      </span> -->
    </strip-title>

    <recommend-card />
  </div>
</template>

<script>
import calendar from '../../calendar'
import stripTitle from '../../strip-title'
import recommendCard from '../../recommend/card'
import recommendPeriodical from './periodical'
export default {
  components: {
    calendar,
    recommendCard,
    recommendPeriodical,
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
