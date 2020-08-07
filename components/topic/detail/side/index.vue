<template>
  <div>
    <el-card shadow="never">
      <topics :topicsList="topicsList" />
    </el-card>
    <recommend-periodical :popularList="popularList" />
    <recommend-advertisement :advertisementData="advertisementData" />
  </div>
</template>

<script>
import recommendAdvertisement from '~/components/recommend/advertisement'
import recommendPeriodical from '~/components/recommend/periodical'
import topics from '~/components/topics'
export default {
  components: {
    topics,
    recommendAdvertisement,
    recommendPeriodical
  },
  props: {
    topicsList: {
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
