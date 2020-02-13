<template>
  <div>
    <strip-title>
      <span slot="default">问题推荐</span>
    </strip-title>
    <el-card shadow="hover">
      <div
        :class="$style.item"
        v-for="(item, index) in recommendQuestionsList"
        :key="index"
      >
        <nuxt-link
          :to="{ name: 'question-id', params: { id: item._id } }"
          :class="$style.title"
        >
          {{ item.title }}
        </nuxt-link>
        <div :class="$style.info">
          <span>
            {{ moment(item.updatedAt).format('YYYY-MM-DD HH:mm') }}
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import moment from 'moment'
import stripTitle from '~/components/strip-title'
export default {
  components: {
    stripTitle
  },
  data() {
    return {
      moment,
      recommendQuestionsList: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const recommendQuestionsListRes = await this.$axios({
        method: 'get',
        url: '/api/questions',
        params: {
          page: 1,
          per_page: 5,
          popular: true
        }
      })
      this.recommendQuestionsList = recommendQuestionsListRes.data
    }
  }
}
</script>

<style lang="scss" module>
.item {
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
  .title {
    color: #3c3b4a;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
    cursor: pointer;
    display: block;
    &:hover {
      color: #409eff;
    }
  }
  .info {
    font-size: 12px;
    color: #aaaaaa;
    span {
      padding-right: 10px;
    }
  }
}
.item:last-of-type {
  border: none;
}
</style>
