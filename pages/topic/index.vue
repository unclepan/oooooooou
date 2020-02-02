<template>
  <div :class="$style.topic">
    <el-row :gutter="20">
      <el-col :span="17">
        <answers :questionIdTitle="true" :reqData="reqData" />
      </el-col>
      <el-col :span="7">
        <side
          :topicsPopularList="topicsPopularList"
          :recommendQuestionsList="recommendQuestionsList"
        />
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
  data() {
    return {
      reqData: {
        method: 'get',
        url: '/api/answers/popular',
        params: {
          page: 1,
          per_page: 50
        }
      }
    }
  },
  head() {
    return {
      title: '话题'
    }
  },
  async asyncData(ctx) {
    const topicsPopularRes = await ctx.$axios({
      method: 'get',
      url: '/api/topics',
      params: {
        page: 1,
        per_page: 100,
        popular: true
      }
    })
    const recommendQuestionsRes = await ctx.$axios({
      method: 'get',
      url: '/api/questions',
      params: {
        page: 1,
        per_page: 5,
        auditStatus: 1,
        popular: true
      }
    })
    return {
      topicsPopularList: topicsPopularRes.data,
      recommendQuestionsList: recommendQuestionsRes.data
    }
  }
}
</script>
<style lang="scss" module>
.topic {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
