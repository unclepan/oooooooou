<template>
  <div :class="$style.side">
    <el-card shadow="hover">
      <el-tag
        :class="$style.tag"
        v-for="(item, index) in topicsPopularList"
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
    </el-card>

    <strip-title>
      <span slot="default">期刊推荐</span>
    </strip-title>
    <recommend-card />
  </div>
</template>

<script>
import recommendCard from '~/components/recommend/card'
import stripTitle from '~/components/strip-title'
export default {
  components: {
    stripTitle,
    recommendCard
  },
  props: {
    topicsPopularList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" module>
.side {
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
