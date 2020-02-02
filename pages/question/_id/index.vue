<template>
  <div :class="$style['question-detail']">
    <el-row :gutter="20">
      <el-col :span="17">
        <question-detail-header
          :questionDataInfo="questionDataInfo"
          :informationStatistics="informationStatistics"
          @follow="init()"
        />
        <answers :reqData="reqData" />
      </el-col>
      <el-col :span="7">
        <side
          :recommendQuestionsList="recommendQuestionsList"
          :informationStatistics="informationStatistics"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import questionDetailHeader from '~/components/question/detail-header'
import answers from '~/components/topic/answers'
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
      informationStatistics: {},
      answersDataList: [],
      // 此问题下的答案
      reqData: {
        method: 'get',
        url: `/api/questions/${this.$route.params.id}/answers/detailed/info`,
        params: {
          page: 1,
          per_page: 50
        }
      }
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
      questionDataInfo: questionDataRes.data,
      recommendQuestionsList: recommendQuestionsRes.data
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const informationStatisticsRes = await this.$axios({
        method: 'get',
        url: `/api/questions/${this.$route.params.id}/information/statistics`
      })
      this.informationStatistics = informationStatisticsRes.data
    }
  }
}
</script>

<style lang="scss" module>
.question-detail {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
