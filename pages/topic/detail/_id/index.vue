<template>
  <div :class="$style['topic-detail']">
    <el-row :gutter="20">
      <el-col :span="16">
        详情
      </el-col>
      <el-col :span="8">
        124
      </el-col>
    </el-row>
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
.topic-detail {
  width: 980px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
