<template>
  <div>
    <el-card shadow="never">
      <topics :topicsList="topicsList" />
    </el-card>
    <recommend-periodical :popularList="popularList" />
    <recommend-questions :recommendQuestionsList="recommendQuestionsList" />
    <recommend-advertisement :advertisementData="advertisementData" />
  </div>
</template>

<script>
import topics from '~/components/topics'
import recommendAdvertisement from '~/components/recommend/advertisement'
import recommendQuestions from '~/components/recommend/questions'
import recommendPeriodical from '~/components/recommend/periodical'
export default {
  components: {
    topics,
    recommendAdvertisement,
    recommendQuestions,
    recommendPeriodical
  },
  props: {
    topicsList: {
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
    },
    popularList: {
      type: Array,
      default: () => {
        return []
      }
    },
    advertisementData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
