<template>
  <div :class="$style['topic-detail']">
    <el-row :gutter="20">
      <el-col :span="16">
        <topic-detail-header />
        <tabs />
      </el-col>
      <el-col :span="8">
        <side />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import topicDetailHeader from '~/components/topic/detail/detail-header'
import tabs from '~/components/topic/detail/tabs'
import side from '~/components/topic/detail/side/index'
export default {
  components: {
    tabs,
    topicDetailHeader,
    side
  },
  head() {
    return {
      title: '话题详情'
    }
  },
  methods: {}
}
</script>

<style lang="scss" module>
.topic-detail {
  width: 980px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
