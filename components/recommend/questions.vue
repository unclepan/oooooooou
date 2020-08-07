<template>
  <div>
    <strip-title>
      <span slot="default">问题推荐</span>
    </strip-title>
    <el-card shadow="never">
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
  props: {
    recommendQuestionsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      moment
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
