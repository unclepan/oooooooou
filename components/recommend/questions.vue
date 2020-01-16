<template>
  <el-card shadow="hover">
    <div
      :class="$style.item"
      v-for="(item, index) in recommendQuestionsList"
      :key="index"
    >
      <h4 :class="$style.title">
        {{ item.question.title }}
      </h4>
      <div :class="$style.info">
        <span>
          {{ moment(item.question.updatedAt).format('YYYY-MM-DD HH:mm') }}
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
import moment from 'moment'
export default {
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
  },

  methods: {}
}
</script>

<style lang="scss" module>
.item {
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
  .title {
    margin: 0;
    padding-bottom: 12px;
    cursor: pointer;
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
