<template>
  <div>
    <strip-title>
      <span slot="default">问题推荐</span>
    </strip-title>
    <el-card shadow="never">
      <question :recommendQuestionsList="recommendQuestionsList" />
    </el-card>
  </div>
</template>

<script>
import moment from 'moment'
import stripTitle from '~/components/strip-title'
import question from '~/components/common/question/simple'
export default {
  components: {
    stripTitle,
    question
  },
  props: {
    recommendQuestionsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      moment
    }
  }
}
</script>
