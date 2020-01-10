<template>
  <div :class="$style.topic">
    话题详情
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: '话题详情'
    }
  },
  methods: {}
}
</script>

<style lang="scss" module>
.topic {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
