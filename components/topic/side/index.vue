<template>
  <div>
    <el-card shadow="hover">
      <topics />
    </el-card>
    <recommend-periodical />
    <recommend-questions />
    <recommend-advertisement />
  </div>
</template>

<script>
import recommendAdvertisement from '~/components/recommend/advertisement'
import recommendQuestions from '~/components/recommend/questions'
import recommendPeriodical from '~/components/recommend/periodical'
import topics from '~/components/topics'
export default {
  components: {
    topics,
    recommendAdvertisement,
    recommendQuestions,
    recommendPeriodical
  },
  data() {
    return {}
  },

  methods: {}
}
</script>
