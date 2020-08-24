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
  async asyncData({ $axios }) {
    // const answersRecommendListRes = await ctx.$axios({
    //   method: 'get',
    //   url: '/api/answers/popular',
    //   params: {
    //     page: 1,
    //     per_page: 10
    //   }
    // })
    // const topicsListRes = await ctx.$axios({
    //   method: 'get',
    //   url: '/api/topics',
    //   params: {
    //     page: 1,
    //     per_page: 18,
    //     popular: true
    //   }
    // })
    // const popularListRes = await ctx.$axios({
    //   method: 'get',
    //   url: '/api/periodical',
    //   params: {
    //     current: 1,
    //     size: 5,
    //     auditStatus: 1,
    //     popular: true
    //   }
    // })
    // const recommendQuestionsListRes = await ctx.$axios({
    //   method: 'get',
    //   url: '/api/questions',
    //   params: {
    //     page: 1,
    //     per_page: 5,
    //     popular: true
    //   }
    // })
    // const advertisementListRes = await ctx.$axios({
    //   method: 'get',
    //   url: '/api/advertisement',
    //   params: {
    //     page: 1,
    //     per_page: 1
    //   }
    // })
    // return {
    //   answersRecommendList: answersRecommendListRes.data,
    //   topicsList: topicsListRes.data,
    //   popularList: popularListRes.data.data,
    //   recommendQuestionsList: recommendQuestionsListRes.data,
    //   advertisementData: advertisementListRes.data[0]
    // }
    // 1、增加catch处理，是为了让服务端，客户端运行时不报错，特别是防止服务端运行时不报错，不然页面就挂了
    // 2、catch函数返回一个resolve空字面量对象的Promise，表明dataPromise1的状态未来始终是resolved状态

    const answersRecommendListPromise = $axios({
      method: 'get',
      url: '/api/answers/popular',
      params: {
        page: 1,
        per_page: 10
      }
    }).catch(() => Promise.resolve({ data: [] }))

    const topicsListPromise = $axios({
      method: 'get',
      url: '/api/topics',
      params: {
        page: 1,
        per_page: 18,
        popular: true
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

    const recommendQuestionsListPromise = $axios({
      method: 'get',
      url: '/api/questions',
      params: {
        page: 1,
        per_page: 5,
        popular: true
      }
    }).catch(() => Promise.resolve({ data: [] }))

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
        answersRecommendListPromise,
        topicsListPromise,
        popularListPromise,
        recommendQuestionsListPromise,
        advertisementListPromise
      ]).then((dataGather) => {
        resolve({
          answersRecommendList: dataGather[0].data,
          topicsList: dataGather[1].data,
          popularList: dataGather[2].data.data,
          recommendQuestionsList: dataGather[3].data,
          advertisementData: dataGather[4].data[0]
        })
      })
    })
    return apiData
  },
  head() {
    return {
      title: 'ANTCP话题',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'hi，我是ANTCP网站的作者杨盼'
        }
      ]
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
