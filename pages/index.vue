<template>
  <div :class="$style.index">
    <carousel :carouselList="carouselList" />
    <div :class="$style.container">
      <el-row :gutter="20">
        <el-col :span="16">
          <topics />
          <card :cardItem="item" v-for="item in cardList" :key="item._id" />
        </el-col>
        <el-col :span="8">
          <recommend :popularList="popularList" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/periodical/carousel'
import topics from '~/components/topics'
import card from '~/components/periodical/card'
import recommend from '~/components/periodical/recommend/index'

export default {
  components: {
    carousel,
    topics,
    card,
    recommend
  },
  data() {
    return {}
  },
  async asyncData(ctx) {
    const cardListRes = await ctx.$axios({
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
      cardList: cardListRes.data,
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
