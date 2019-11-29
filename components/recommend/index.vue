<template>
  <div>
    <pan-calendar :tip="['2019-11-23']" />
    <strip-title>热门文章</strip-title>
    <item v-for="(item, index) in list" :key="index" :item="item" />
  </div>
</template>

<script>
import panCalendar from '../pan-calendar'
import stripTitle from '../strip-title'
import item from './item'
export default {
  components: {
    panCalendar,

    item,
    stripTitle
  },
  data() {
    return {
      list: [
        {
          src: 'http://localhost:3001/carousel/1499593583742.jpg',
          title:
            '每集走进一个设计师的世界，用极其生动的拍摄方式“解剖”他们的大脑。',
          describe:
            '第二季来拯救我们了！每集走进一个设计师的世界，用极其生动的拍摄方式“解剖”他们的大脑，让观众在创造力爆表的脑回路中经历一次漫游。',
          updateAt: '2019-01-01',
          author: 'UNCLE',
          pv: '120'
        },
        {
          src: 'http://localhost:3001/carousel/1499593583742.jpg',
          title: '高分纪录片，即将拯救你无聊的大脑',
          describe:
            '第二季来拯救我们了！每集走进一个设计师的世界，用极其生动的拍摄方式“解剖”他们的大脑，让观众在创造力爆表的脑回路中经历一次漫游。',
          updateAt: '2019-01-01',
          author: 'UNCLE',
          pv: '120'
        },
        {
          src: 'http://localhost:3001/carousel/1499593583742.jpg',
          title: '高分纪录片，即将拯救你无聊的大脑',
          describe:
            '第二季来拯救我们了！每集走进一个设计师的世界，用极其生动的拍摄方式“解剖”他们的大脑，让观众在创造力爆表的脑回路中经历一次漫游。',
          updateAt: '2019-01-01',
          author: 'UNCLE',
          pv: '120'
        }
      ]
    }
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
