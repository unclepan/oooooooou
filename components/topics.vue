<template>
  <div :class="$style.topics">
    <el-tag
      :class="$style.tag"
      v-for="(item, index) in topicsList"
      :key="index"
      effect="plain"
    >
      <nuxt-link
        :to="{
          name: 'topic-detail-id',
          params: { id: item._id }
        }"
      >
        {{ item.name }}
      </nuxt-link>
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topicsList: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const topicsListRes = await this.$axios({
        method: 'get',
        url: '/api/topics',
        params: {
          page: 1,
          per_page: 100,
          popular: true
        }
      })
      this.topicsList = topicsListRes.data
    }
  }
}
</script>

<style lang="scss" module>
.topics {
  .tag {
    margin-right: 20px;
    margin-bottom: 10px;
    a {
      font-size: 12px;
      color: #409eff;
    }
  }
}
</style>
