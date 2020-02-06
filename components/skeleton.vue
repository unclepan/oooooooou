<template>
  <div>
    <div
      :style="{ width: widthrandom() }"
      :class="$style.skeleton"
      v-for="(item, index) in num"
      :key="index"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: () => {
        return 4
      }
    }
  },
  data() {
    return {}
  },
  watch: {},
  methods: {
    widthrandom() {
      let r = Math.random() * 100
      if (r < 20) {
        r = 50
      }
      return `${r}%`
    }
  }
}
</script>

<style lang="scss" module>
.skeleton {
  background: #dcdcdc;
  height: 20px;
  margin-bottom: 5px;
  border-radius: 5px;
}
</style>
