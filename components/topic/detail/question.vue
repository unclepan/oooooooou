<template>
  <div :class="$style.question">
    <h3 :class="$style.title">
      {{ questionData.title }}
    </h3>
    <p :class="$style.description">{{ questionData.description }}</p>
    <div :class="$style.handler">
      <el-button
        @click="writeAnswer(questionData.id)"
        size="small"
        type="primary"
        plain
      >
        问题详情
      </el-button>

      <div :class="$style['test-button']">
        <el-button type="text" icon="el-icon-document">
          {{ questionData.answerNum }}个回答
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    questionData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    writeAnswer(id) {
      this.$router.push({
        name: 'question-id',
        params: { id }
      })
    }
  }
}
</script>
<style lang="scss" module>
.question {
  border-bottom: 1px solid #ebeef5;
  padding-bottom: 20px;
  margin-bottom: 20px;
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
    padding-bottom: 16px;
  }
  .description {
    font-size: 14px;
    color: #666666;
    margin: 0;
    padding-bottom: 16px;
  }

  .handler {
    display: flex;
    align-items: center;
    .test-button {
      padding-left: 30px;
      :global(.el-button--text) {
        color: #aaaaaa;
      }
    }
  }
}
.question:last-of-type {
  border: none;
  margin: 0;
}
</style>
