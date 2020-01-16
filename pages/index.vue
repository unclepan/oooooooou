<template>
  <div :class="$style.index">
    <carousel :carouselList="carouselList" />
    <div :class="$style.container">
      <el-row :gutter="20">
        <el-col :span="17">
          <topics />
          <el-card
            :class="$style['card-block']"
            v-for="item in periodicalList"
            :key="item._id"
            shadow="hover"
          >
            <block :periodicalData="item" />
          </el-card>
        </el-col>
        <el-col :span="7">
          <side :popularList="popularList" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/carousel'
import topics from '~/components/topics'
import block from '~/components/periodical/block'
import side from '~/components/periodical/side/index'

export default {
  components: {
    carousel,
    topics,
    block,
    side
  },
  data() {
    return {}
  },
  async asyncData(ctx) {
    const periodicalListRes = await ctx.$axios({
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
      periodicalList: periodicalListRes.data,
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
    width: 1024px;
    margin: 0 auto;
    padding: 26px 0;
    .card-block {
      margin-bottom: 20px;
    }
  }
}
</style>
