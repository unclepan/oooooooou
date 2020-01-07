<template>
  <el-card :class="$style.card" shadow="hover">
    <item :test="true" />
  </el-card>
</template>

<script>
import item from './item'
export default {
  components: {
    item
  }
}
</script>
<style lang="scss" module>
.card {
  margin-bottom: 30px;
}
</style>
