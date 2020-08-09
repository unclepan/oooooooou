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
      title: '个人中心'
    }
  },
  async asyncData(ctx) {
    const cuserDataRes = await ctx.$axios({
      method: 'get',
      url: '/api/users/login/info',
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
