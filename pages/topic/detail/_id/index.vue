<template>
  <div :class="$style['topic-detail']">
    <el-row :gutter="20">
      <el-col :span="16">
        <topic-detail-header :topicDataInfo="topicDataInfo" />
        <tabs
          :topicDataInfo="topicDataInfo"
          :topicPeriodicalsDataList="topicPeriodicalsDataList"
        />
      </el-col>
      <el-col :span="8">
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
    return {
      topicDataInfo: topicDataRes.data,
      topicPeriodicalsDataList: topicPeriodicalsRes.data
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
