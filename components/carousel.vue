<template>
  <el-carousel :class="$style.carousel" height="360px">
    <el-carousel-item v-for="(item, index) in carouselList" :key="index">
      <a :href="item.link" target="_blank">
        <img :src="`/carousel/${item.pic}`" :alt="item.title" />
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: {
    carouselList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
<style lang="scss" module>
.carousel {
  min-width: 980px;
}
</style>
