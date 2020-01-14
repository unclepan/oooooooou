<template>
  <div :class="$style.topic">
    <el-row :gutter="20">
      <el-col :span="16">
        <block
          @likingAnswer="handlerLikingAnswer"
          @dislikingAnswer="handlerdDislikingAnswer"
          v-for="(item, index) in answersRecommendList"
          :key="index"
          :blockData="item"
        />
      </el-col>
      <el-col :span="8">
        <side />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import block from '~/components/topic/block'
import side from '~/components/topic/side/index'
export default {
  components: {
    block,
    side
  },
  data() {
    return {
      answersRecommendList: []
    }
  },
  head() {
    return {
      title: '话题'
    }
  },
  mounted() {
    this.init()
  },
  // async asyncData(ctx) {
  //   const answersRecommendListRes = await ctx.$axios({
  //     method: 'get',
  //     url: '/api/answers/recommend',
  //     params: {
  //       page: 1,
  //       per_page: 5
  //     }
  //     // headers: { 'X-Requested-With': localStorage.getItem('userToken') }
  //   })
  //   return {
  //     answersRecommendList: answersRecommendListRes.data
  //   }
  // },
  methods: {
    async init() {
      const answersRecommendListRes = await this.$axios({
        method: 'get',
        url: '/api/answers/recommend',
        params: {
          page: 1,
          per_page: 5
        }
      })
      this.answersRecommendList = answersRecommendListRes.data
    },
    async handlerLikingAnswer(val) {
      if (val.isLike) {
        // 取消赞答案
        await this.$axios({
          method: 'delete',
          url: `/api/users/likingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isLike: false }
          }
          return { ...item }
        })
      } else {
        // 赞答案
        await this.$axios({
          method: 'put',
          url: `/api/users/likingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isLike: true, isDislike: false }
          }
          return { ...item }
        })
      }
    },
    async handlerdDislikingAnswer(val) {
      if (val.isDislike) {
        // 取消踩答案
        await this.$axios({
          method: 'delete',
          url: `/api/users/dislikingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isDislike: false }
          }
          return { ...item }
        })
      } else {
        // 踩答案
        await this.$axios({
          method: 'put',
          url: `/api/users/dislikingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isDislike: true, isLike: false }
          }
          return { ...item }
        })
      }
    }
  }
}
</script>
<style lang="scss" module>
.topic {
  width: 980px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
