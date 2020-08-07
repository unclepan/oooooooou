<template>
  <div :class="$style['topic-detail']">
    <el-row :gutter="20">
      <el-col :span="17">
        <topic-detail-header
          :topicDataInfo="topicDataInfo"
          :informationStatisticsData="informationStatisticsData"
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
import tabs from '~/components/topic/detail/tabs/index'
import side from '~/components/topic/detail/side/index'
export default {
  components: {
    tabs,
    topicDetailHeader,
    side
  },
  data() {
    return {
      page: 2
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
      url: `/api/topics/${params.id}/periodicals`,
      params: {
        page: 1,
        per_page: 5
      }
    })
    const topicQuestionsRes = await ctx.$axios({
      method: 'get',
      url: `/api/topics/${params.id}/questions`
    })
    const informationStatisticsRes = await ctx.$axios({
      method: 'get',
      url: `/api/topics/${params.id}/information/statistics`
    })
    return {
      topicDataInfo: topicDataRes.data,
      topicPeriodicalsDataList: topicPeriodicalsRes.data,
      topicQuestionsDataList: topicQuestionsRes.data,
      informationStatisticsData: informationStatisticsRes.data
    }
  },
  head() {
    return {
      title: this.topicDataInfo.name || '话题详情'
    }
  },
  methods: {
    // async init() {
    //   const informationStatisticsRes = await this.$axios({
    //     method: 'get',
    //     url: `/api/topics/${this.$route.params.id}/information/statistics`
    //   })
    //   this.informationStatistics = informationStatisticsRes.data
    // },
    // scroll() {
    //   let isLoading = false
    //   window.onscroll = async () => {
    //     // 距离底部200px时加载一次
    //     const bottomOfWindow =
    //       document.documentElement.offsetHeight -
    //         document.documentElement.scrollTop -
    //         window.innerHeight <=
    //       360
    //     if (bottomOfWindow && isLoading === false) {
    //       isLoading = true
    //       const res = await this.$axios({
    //         method: 'get',
    //         url: `/api/topics/${this.$route.params.id}/periodicals`,
    //         params: {
    //           page: this.page,
    //           per_page: 5
    //         }
    //       })
    //       this.page = this.page + 1
    //       if (res.data.length) {
    //         isLoading = false
    //         this.topicPeriodicalsDataList = this.topicPeriodicalsDataList.concat(
    //           res.data
    //         )
    //       }
    //     }
    //   }
    // }
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
