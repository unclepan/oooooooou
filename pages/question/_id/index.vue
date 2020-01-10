<template>
  <div :class="$style['question-detail']">
    <el-row :gutter="20">
      <el-col :span="16">
        <question-detail-header />
        <answers v-for="(item, index) in 10" :key="index" />
      </el-col>
      <el-col :span="8">
        <side />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import questionDetailHeader from '~/components/question/detail-header'
import answers from '~/components/question/answers'
import side from '~/components/question/side/index'
export default {
  components: {
    side,
    answers,
    questionDetailHeader
  },
  head() {
    return {
      title: '问题详情'
    }
  },
  methods: {}
}
</script>

<style lang="scss" module>
.question-detail {
  width: 980px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
