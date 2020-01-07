<template>
  <div :class="$style.index">
    <carousel />
    <div :class="$style.container">
      <el-row :gutter="20">
        <el-col :span="16">
          <classification />
          <card :cardItem="item" v-for="item in cardList" :key="item._id" />
        </el-col>
        <el-col :span="8">
          <recommend />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/carousel'
import classification from '~/components/classification'
import card from '~/components/card'
import recommend from '~/components/recommend/index'

export default {
  components: {
    carousel,
    classification,
    card,
    recommend
  },
  data() {
    return {}
  },
  async asyncData(ctx) {
    const res = await ctx.$axios({
      method: 'get',
      url: '/api/periodical',
      params: {
        page: 1,
        per_page: 5
      }
    })
    return { cardList: res.data }
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
    padding: 30px 0;
  }
}
</style>
