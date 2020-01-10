<template>
  <div :class="$style.index">
    <carousel :carouselList="carouselList" />
    <div :class="$style.container">
      <el-row :gutter="20">
        <el-col :span="16">
          <topics />
          <answers
            :answersData="item"
            v-for="item in answersList"
            :key="item._id"
          />
        </el-col>
        <el-col :span="8">
          <side :popularList="popularList" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/carousel'
import topics from '~/components/topics'
import answers from '~/components/periodical/answers'
import side from '~/components/periodical/side/index'

export default {
  components: {
    carousel,
    topics,
    answers,
    side
  },
  data() {
    return {}
  },
  async asyncData(ctx) {
    const answersListRes = await ctx.$axios({
      method: 'get',
      url: '/api/periodical',
      params: {
        page: 1,
        per_page: 5
      }
    })
    const carouselListRes = await ctx.$axios({
      method: 'get',
      url: '/api/carousel',
      params: {
        page: 1,
        per_page: 5
      }
    })
    const popularListRes = await ctx.$axios({
      method: 'get',
      url: '/api/periodical/popular/index'
    })
    return {
      answersList: answersListRes.data,
      carouselList: carouselListRes.data,
      popularList: popularListRes.data
    }
  },
  mounted() {},
  methods: {},
  head() {
    return {
      title: '首页'
    }
  }
}
</script>

<style lang="scss" module>
.index {
  .container {
    width: 980px;
    margin: 0 auto;
    padding: 26px 0;
  }
}
</style>
