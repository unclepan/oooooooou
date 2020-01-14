<template>
  <div>
    <el-card shadow="hover">
      <topics />
    </el-card>

    <strip-title>
      <span slot="default">期刊推荐</span>
    </strip-title>
    <recommend-card />
  </div>
</template>

<script>
import recommendCard from '~/components/recommend/card'
import stripTitle from '~/components/strip-title'
import topics from '~/components/topics'
export default {
  components: {
    topics,
    stripTitle,
    recommendCard
  },
  // props: {
  //   popularList: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     }
  //   }
  // },
  data() {
    return {}
  },

  methods: {}
}
</script>
