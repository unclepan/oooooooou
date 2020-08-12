<template>
  <user :userData="userData" />
</template>

<script>
import user from '~/components/user/index'
export default {
  components: {
    user
  },
  head() {
    return {
      title: this.userData.name || '用户详情',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `hi，我是ANTCP网站的作者杨盼，您正在查看用户 - ${this.userData.name}`
        }
      ]
    }
  },
  async asyncData(ctx) {
    const { params } = ctx
    const cuserDataRes = await ctx.$axios({
      method: 'get',
      url: `/api/users/${params.id}`,
      params: {
        fields:
          'locations;business;employments;educations;following;followingTopics;followingQuestions;likingAnswers;dislikingAnswers;collectingAnswers;likingPeriodicals'
      }
    })
    return {
      userData: cuserDataRes.data
    }
  }
}
</script>
