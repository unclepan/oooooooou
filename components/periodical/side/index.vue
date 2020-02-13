<template>
  <div>
    <calendar :tip="['2019-11-23']" />
    <recommend-periodical />
    <recommend-advertisement />
  </div>
</template>

<script>
import calendar from '../../calendar'
import recommendAdvertisement from '../../recommend/advertisement'
import recommendPeriodical from '../../recommend/periodical'
export default {
  components: {
    calendar,
    recommendAdvertisement,
    recommendPeriodical
  }
}
</script>
