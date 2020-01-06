<template>
  <div :class="$style.detail">
    <img :class="$style['head-image']" :src="periodicalData.pic" />
    <el-row :gutter="30" :class="$style.main">
      <el-col :span="6">
        <calendar-card
          :class="$style.calendar"
          :updatedAt="periodicalData.updatedAt"
        />
        <div :class="$style.info">
          <p :class="$style.author">作者：{{ periodicalData.author }}</p>
          <p :class="$style.pv">阅读：{{ periodicalData.pv }}</p>
          <div>
            <el-tag
              :class="$style.tag"
              v-for="(item, index) in periodicalData.topics"
              :key="index"
              type="info"
              size="mini"
              effect="plain"
            >
              {{ item }}
            </el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div>
          <h1 :class="$style.title">
            {{ periodicalData.title }}
          </h1>
          <div :class="$style['text-box']">
            <div v-html="periodicalData.content"></div>
          </div>
          <div :class="$style.operation">
            <el-button icon="el-icon-star-off" circle type="danger"></el-button>
            <el-button icon="el-icon-edit-outline" circle></el-button>
            <el-button icon="el-icon-apple" circle></el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <comments v-for="(item, index) in 2" :key="index" />
  </div>
</template>

<script>
import calendarCard from '~/components/calendar-card'
import comments from '~/components/comments/index'
export default {
  components: {
    calendarCard,
    comments
  },
  data() {
    return {}
  },
  async asyncData(ctx) {
    const { params } = ctx
    const res = await ctx.$axios({
      method: 'get',
      url: `/api/periodical/${params.id}`,
      params: {
        fields: 'topics'
      }
    })
    return { periodicalData: res.data }
  },
  mounted() {},
  methods: {},
  head() {
    return {
      title: '详情'
    }
  }
}
</script>

<style lang="scss" module>
.detail {
  width: 980px;
  margin: 0 auto;
  padding-bottom: 30px;
  .head-image {
    width: 100%;
  }
  .main {
    padding: 30px 0;
    .calendar {
      width: 120px;
    }
    .info {
      padding: 20px 0;
      .author {
        font-size: 14px;
        color: #3c3b4a;
      }
      .pv {
        font-size: 12px;
        color: #aaaaaa;
      }
      .tag {
        margin: 0 10px 10px 0;
      }
    }
    .title {
      margin: 0;
      line-height: 38px;
    }
    .text-box {
      font-size: 14px;
      color: #3c3b4a;
      line-height: 21px;
      padding: 30px 0;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
