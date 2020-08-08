<template>
  <div :class="$style.topic">
    <el-row :gutter="20">
      <el-col :span="17">
        <answers :answersRecommendListData="answersRecommendList" />
      </el-col>
      <el-col :span="7">
        <side
          :popularList="popularList"
          :topicsList="topicsList"
          :recommendQuestionsList="recommendQuestionsList"
          :advertisementData="advertisementData"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import answers from '~/components/answers/index'
import side from '~/components/topic/side/index'
export default {
  components: {
    answers,
    side
  },
  async asyncData(ctx) {
    const answersRecommendListRes = await ctx.$axios({
      method: 'get',
      url: '/api/answers/popular',
      params: {
        page: 1,
        per_page: 10
      }
    })
    const topicsListRes = await ctx.$axios({
      method: 'get',
      url: '/api/topics',
      params: {
        page: 1,
        per_page: 18,
        popular: true
      }
    })
    const popularListRes = await ctx.$axios({
      method: 'get',
      url: '/api/periodical',
      params: {
        page: 1,
        per_page: 5,
        popular: true
      }
    })
    const recommendQuestionsListRes = await ctx.$axios({
      method: 'get',
      url: '/api/questions',
      params: {
        page: 1,
        per_page: 5,
        popular: true
      }
    })
    const advertisementListRes = await ctx.$axios({
      method: 'get',
      url: '/api/advertisement',
      params: {
        page: 1,
        per_page: 1
      }
    })
    return {
      answersRecommendList: answersRecommendListRes.data,
      topicsList: topicsListRes.data,
      popularList: popularListRes.data,
      recommendQuestionsList: recommendQuestionsListRes.data,
      advertisementData: advertisementListRes.data[0]
    }
  },
  head() {
    return {
      title: '话题'
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
