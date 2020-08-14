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
  props: {
    topicsList: {
      type: Array,
      default: () => {
        return []
      }
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
      color: #95a6d0;
    }
  }
}
</style>
