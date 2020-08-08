<template>
  <div :class="$style['question-detail']">
    <el-row :gutter="20">
      <el-col :span="17">
        <question-detail-header
          :questionDataInfo="questionDataInfo"
          :informationStatisticsData="informationStatisticsData"
        />
        <answers
          :answersRecommendList="answersRecommendList"
          :showLinkQuestion="false"
        />
        <p :class="$style.more" @click="more">加载更多</p>
      </el-col>
      <el-col :span="7">
        <side :informationStatisticsData="informationStatisticsData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import questionDetailHeader from '~/components/question/detail-header'
import answers from '~/components/answers/index'
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
  data() {
    return {
      loading: false,
      page: 2
    }
  },
  async asyncData(ctx) {
    const { params } = ctx
    const questionDataRes = await ctx.$axios({
      method: 'get',
      url: `/api/questions/${params.id}`,
      params: {
        fields: 'questioner;topics'
      }
    })
    const informationStatisticsRes = await ctx.$axios({
      method: 'get',
      url: `/api/questions/${params.id}/information/statistics`
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
    const answersRecommendListRes = await ctx.$axios({
      method: 'get',
      url: `/api/questions/${params.id}/answers/detailed/info`,
      params: {
        page: 1,
        per_page: 5
      }
    })
    return {
      questionDataInfo: questionDataRes.data,
      informationStatisticsData: informationStatisticsRes.data,
      recommendQuestionsList: recommendQuestionsRes.data,
      answersRecommendList: answersRecommendListRes.data
    }
  },
  methods: {
    async more() {
      const { params } = this.$route
      if (this.loading === false) {
        this.loading = true
        const res = await this.$axios({
          method: 'get',
          url: `/api/questions/${params.id}/answers/detailed/info`,
          params: {
            page: this.page,
            per_page: 5
          }
        })
        this.page = this.page + 1
        if (res.data.length) {
          if (res.data.length === 5) {
            this.loading = false
          }
          this.answersRecommendList = this.answersRecommendList.concat(res.data)
        } else {
          this.$message('此问题下没有更多的答案啦，你也可以来回答一个哦！')
        }
      } else {
        this.$message('此问题下没有更多的答案啦，你也可以来回答一个哦！')
      }
    }
  }
}
</script>

<style lang="scss" module>
.question-detail {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
  .more {
    margin: 20px auto 0;
    width: 120px;
    padding: 10px;
    font-size: 14px;
    color: #666666;
    border: 1px solid #666666;
    cursor: pointer;
    text-align: center;
    &:hover {
      color: #409eff;
      border: 1px solid #409eff;
      background: #ffffff;
    }
  }
}
</style>
