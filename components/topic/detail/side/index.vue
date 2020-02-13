<template>
  <div>
    <el-card shadow="hover">
      <topics />
    </el-card>
    <recommend-periodical />
    <recommend-advertisement />
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
  data() {
    return {}
  },

  methods: {}
}
</script>
