<template>
  <div>
    <calendar :tip="['2019-11-23']" />
    <recommend-periodical :popularList="popularList" />
    <recommend-advertisement :advertisementData="advertisementData" />
  </div>
</template>

<script>
import calendar from '../../calendar'
import recommendPeriodical from '../../recommend/periodical'
import recommendAdvertisement from '../../recommend/advertisement'

export default {
  components: {
    calendar,
    recommendPeriodical,
    recommendAdvertisement
  },
  props: {
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
