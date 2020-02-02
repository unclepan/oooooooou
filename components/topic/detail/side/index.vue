<template>
  <div>
    <el-card shadow="hover">
      <topics :topicsList="topicsPopularList" />
    </el-card>

    <strip-title>
      <span slot="default">期刊推荐</span>
    </strip-title>
    <recommend-card />
  </div>
</template>

<script>
import topics from '~/components/topics'
import recommendCard from '~/components/recommend/card'
import stripTitle from '~/components/strip-title'
export default {
  components: {
    topics,
    stripTitle,
    recommendCard
  },
  props: {
    topicsPopularList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },

  methods: {}
}
</script>
