<template>
  <div :class="$style['topic-detail']">
    <el-row :gutter="20">
      <el-col :span="17">
        <topic-detail-header
          :topicDataInfo="topicDataInfo"
          :informationStatistics="informationStatistics"
          @follow="init()"
        />
        <tabs
          :topicDataInfo="topicDataInfo"
          :topicPeriodicalsDataList="topicPeriodicalsDataList"
          :topicQuestionsDataList="topicQuestionsDataList"
        />
      </el-col>
      <el-col :span="7">
        <side />
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
  data() {
    return {
      informationStatistics: {}
    }
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
    return {
      topicDataInfo: topicDataRes.data,
      topicPeriodicalsDataList: topicPeriodicalsRes.data,
      topicQuestionsDataList: topicQuestionsRes.data
    }
  },
  head() {
    return {
      title: '话题详情'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const informationStatisticsRes = await this.$axios({
        method: 'get',
        url: `/api/topics/${this.$route.params.id}/information/statistics`
      })
      this.informationStatistics = informationStatisticsRes.data
    }
  }
}
</script>

<style lang="scss" module>
.topic-detail {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
