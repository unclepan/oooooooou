<template>
  <div :class="$style['question-detail']">
    <el-row :gutter="20">
      <el-col :span="17">
        <question-detail-header
          :questionDataInfo="questionDataInfo"
          :informationStatistics="informationStatistics"
        />
        <answers
          ref="answers"
          :answersRecommendListData="answersRecommendListData"
          :showLinkQuestion="false"
        />
        <more @more="more()" />
      </el-col>
      <el-col :span="7">
        <side
          :popularList="popularList"
          :recommendQuestionsList="recommendQuestionsList"
          :advertisementData="advertisementData"
          :informationStatistics="informationStatistics"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import questionDetailHeader from '~/components/question/detail-header'
import answers from '~/components/answers/index'
import side from '~/components/question/side/index'
import more from '~/components/button/more'
export default {
  components: {
    side,
    answers,
    questionDetailHeader,
    more
  },
  head() {
    return {
      title: this.questionDataInfo.title || '问题详情',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `hi，我是UOOOOOOOO网站的作者杨盼，您正在查看问题 - ${this.questionDataInfo.title}`
        }
      ]
    }
  },
  data() {
    return {
      loading: false,
      page: 2
    }
  },
  async asyncData({ $axios, params }) {
    const questionDataPromise = $axios({
      method: 'get',
      url: `/api/questions/${params.id}`,
      params: {
        fields: 'questioner;topics'
      }
    }).catch(() => Promise.resolve({ data: {} }))

    const informationStatisticsPromise = $axios({
      method: 'get',
      url: `/api/questions/${params.id}/information/statistics`
    }).catch(() => Promise.resolve({ data: {} }))

    const recommendQuestionsPromise = $axios({
      method: 'get',
      url: '/api/questions',
      params: {
        page: 1,
        per_page: 5,
        auditStatus: 1,
        popular: true
      }
    }).catch(() => Promise.resolve({ data: [] }))

    const answersRecommendListPromise = $axios({
      method: 'get',
      url: `/api/questions/${params.id}/answers/detailed/info`,
      params: {
        page: 1,
        per_page: 10
      }
    }).catch(() => Promise.resolve({ data: [] }))

    const popularListPromise = $axios({
      method: 'get',
      url: '/api/periodical',
      params: {
        current: 1,
        size: 5,
        auditStatus: 1,
        popular: true
      }
    }).catch(() => Promise.resolve({ data: { data: [] } }))

    const advertisementListPromise = $axios({
      method: 'get',
      url: '/api/advertisement',
      params: {
        page: 1,
        per_page: 1
      }
    }).catch(() => Promise.resolve({ data: [] }))

    const apiData = await new Promise((resolve) => {
      Promise.all([
        questionDataPromise,
        informationStatisticsPromise,
        recommendQuestionsPromise,
        answersRecommendListPromise,
        popularListPromise,
        advertisementListPromise
      ]).then((dataGather) => {
        resolve({
          questionDataInfo: dataGather[0].data,
          informationStatistics: dataGather[1].data,
          recommendQuestionsList: dataGather[2].data,
          answersRecommendListData: dataGather[3].data,
          popularList: dataGather[4].data.data,
          advertisementData: dataGather[5].data[0]
        })
      })
    })
    return apiData
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
            per_page: 10
          }
        })
        this.page = this.page + 1
        if (res.data.length) {
          if (res.data.length === 10) {
            this.loading = false
          }
          this.$refs.answers.add(res.data)
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
}
</style>
