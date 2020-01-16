<template>
  <div :class="$style.topic">
    <el-row :gutter="20">
      <el-col :span="17">
        <recommend />
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
import recommend from '~/components/topic/recommend'
import side from '~/components/topic/side/index'
export default {
  components: {
    recommend,
    side
  },
  data() {
    return {}
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
      url: '/api/questions/popular/index',
      params: {
        page: 1,
        per_page: 5
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
