<template>
  <div :class="$style['topic-detail']">
    <el-row :gutter="20">
      <el-col :span="16">
        <topic-detail-header :topicDataInfo="topicDataInfo" />
        <tabs
          :topicDataInfo="topicDataInfo"
          :topicPeriodicalsDataList="topicPeriodicalsDataList"
          :topicQuestionsDataList="topicQuestionsDataList"
        />
      </el-col>
      <el-col :span="8">
        <side :topicsPopularList="topicsPopularList" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topicDetailHeader from '~/components/topic/detail/detail-header'
import tabs from '~/components/topic/detail/tabs'
import side from '~/components/topic/detail/side/index'
export default {
  components: {
    tabs,
    topicDetailHeader,
    side
  },
  async asyncData(ctx) {
    const { params } = ctx
    const topicDataRes = await ctx.$axios({
      method: 'get',
      url: `/api/topics/${params.id}`,
      params: {
        fields: 'introduction;moreInformation'
      }
    })

    const topicPeriodicalsRes = await ctx.$axios({
      method: 'get',
      url: `/api/topics/${params.id}/periodicals`
    })

    const topicQuestionsRes = await ctx.$axios({
      method: 'get',
      url: `/api/topics/${params.id}/questions`
    })

    const topicsPopularRes = await ctx.$axios({
      method: 'get',
      url: '/api/topics',
      params: {
        page: 1,
        per_page: 100,
        popular: true
      }
    })
    return {
      topicDataInfo: topicDataRes.data,
      topicPeriodicalsDataList: topicPeriodicalsRes.data,
      topicQuestionsDataList: topicQuestionsRes.data,
      topicsPopularList: topicsPopularRes.data
    }
  },
  head() {
    return {
      title: '话题详情'
    }
  },
  methods: {}
}
</script>

<style lang="scss" module>
.topic-detail {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
