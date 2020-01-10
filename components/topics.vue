<template>
  <div :class="$style.topics">
    <el-tag
      :class="$style.tag"
      v-for="(item, index) in tagList"
      :key="index"
      type="info"
      effect="plain"
    >
      {{ item }}
    </el-tag>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: [
        '全部',
        '音乐',
        '日本',
        '电影',
        '生活',
        '风物',
        '设计所',
        '日本',
        '电影',
        '生活',
        '风物',
        '设计所'
      ]
    }
  }
}
</script>

<style lang="scss" module>
.topics {
  .tag {
    margin-right: 20px;
    margin-bottom: 12px;
  }
}
</style>
