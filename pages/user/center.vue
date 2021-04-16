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
      title: '个人中心',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'hi，我是UOOOOOOOO网站的作者杨盼，这是您的个人中心'
        }
      ]
    }
  },
  async asyncData({ $axios }) {
    const cuserDataPromise = $axios({
      method: 'get',
      url: '/api/users/login/info',
      params: {
        fields:
          'locations;business;employments;educations;following;followingTopics;followingQuestions;likingAnswers;dislikingAnswers;collectingAnswers;likingPeriodicals'
      }
    }).catch(() => Promise.resolve({ data: {} }))

    const apiData = await new Promise((resolve) => {
      Promise.all([cuserDataPromise]).then((dataGather) => {
        resolve({
          userData: dataGather[0].data
        })
      })
    })
    return apiData
  }
}
</script>
