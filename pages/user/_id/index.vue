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
  async asyncData({ $axios, params }) {
    const cuserDataPromise = $axios({
      method: 'get',
      url: `/api/users/${params.id}`,
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
