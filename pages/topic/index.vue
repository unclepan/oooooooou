<template>
  <div :class="$style.topic">
    <el-row :gutter="20">
      <el-col :span="16">
        <answers v-for="(item, index) in 10" :key="index" />
      </el-col>
      <el-col :span="8">
        <side />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import answers from '~/components/topic/answers'
import side from '~/components/topic/side/index'
export default {
  components: {
    answers,
    side
  },
  head() {
    return {
      title: '话题'
    }
  },
  methods: {}
}
</script>
<style lang="scss" module>
.topic {
  width: 980px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
