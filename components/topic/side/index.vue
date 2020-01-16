<template>
  <div :class="$style.side">
    <el-card shadow="hover">
      <el-tag
        :class="$style.tag"
        v-for="(item, index) in topicsPopularList"
        :key="index"
        type="info"
        effect="plain"
      >
        <nuxt-link
          :to="{
            name: 'topic-detail-id',
            params: { id: item._id }
          }"
        >
          {{ item.name }}
        </nuxt-link>
      </el-tag>
    </el-card>

    <strip-title>
      <span slot="default">期刊推荐</span>
    </strip-title>
    <recommend-card />

    <strip-title>
      <span slot="default">问题推荐</span>
    </strip-title>

    <recommend-questions :recommendQuestionsList="recommendQuestionsList" />
  </div>
</template>

<script>
import stripTitle from '../../strip-title'
import recommendCard from '../../recommend/card'
import recommendQuestions from '../../recommend/questions'
export default {
  components: {
    stripTitle,
    recommendCard,
    recommendQuestions
  },
  props: {
    topicsPopularList: {
      type: Array,
      default: () => {
        return []
      }
    },
    recommendQuestionsList: {
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

<style lang="scss" module>
.side {
  .tag {
    margin-right: 20px;
    margin-bottom: 12px;
  }
}
</style>
