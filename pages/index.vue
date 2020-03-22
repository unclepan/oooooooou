<template>
  <div :class="$style.index">
    <carousel :carouselList="carouselList" />
    <div :class="$style.container">
      <el-row :gutter="20">
        <el-col :span="17">
          <el-card shadow="hover">
            <h3 :class="$style['topics-title']">相关话题</h3>
            <topics />
          </el-card>
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
          <side />
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
    return {
      page: 2
    }
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
    return {
      periodicalList: periodicalListRes.data,
      carouselList: carouselListRes.data
    }
  },
  beforeDestroy() {
    window.onscroll = null
  },
  mounted() {
    this.scroll()
  },
  methods: {
    scroll() {
      let isLoading = false
      window.onscroll = async () => {
        const bottomOfWindow =
          document.documentElement.offsetHeight -
            document.documentElement.scrollTop -
            window.innerHeight <=
          360
        if (bottomOfWindow && isLoading === false) {
          isLoading = true
          const res = await this.$axios({
            method: 'get',
            url: '/api/periodical',
            params: {
              page: this.page,
              per_page: 5
            }
          })
          this.page = this.page + 1
          if (res.data.length) {
            isLoading = false
            this.periodicalList = this.periodicalList.concat(res.data)
          }
        }
      }
    }
  },
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
    .topics-title {
      margin-top: 0;
    }
    .card-block {
      margin-top: 20px;
    }
  }
}
</style>
