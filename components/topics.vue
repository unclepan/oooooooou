<template>
  <div :class="$style.topics">
    <el-tag
      :class="$style.tag"
      v-for="(item, index) in topicsList"
      :key="index"
      type="info"
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
  props: {
    topicsList: {
      type: Array,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" module>
.topics {
  .tag {
    margin-right: 20px;
    margin-bottom: 12px;
    a {
      font-size: 12px;
      color: #aaaaaa;
    }
  }
}
</style>
