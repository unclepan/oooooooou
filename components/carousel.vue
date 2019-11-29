<template>
  <el-carousel :class="$style.carousel">
    <el-carousel-item v-for="item in 4" :key="item">
      <img
        src="http://localhost:3001/carousel/1498398237685.jpg"
        alt="banner"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {}
</script>
<style lang="scss" module>
.carousel {
  min-width: 980px;
}
</style>
