<template>
  <div :class="$style.question">
    <h3 :class="$style.title">
      想养只狗或者猫。智力高一点，不掉毛的。请问有哪些合适？
    </h3>
    <div :class="$style.handler">
      <el-button size="small" type="primary">
        关注问题
      </el-button>
      <el-button size="small" type="primary" plain icon="el-icon-edit">
        写回答
      </el-button>

      <div :class="$style['test-button']">
        <el-button type="text" icon="el-icon-chat-dot-square">
          123条评论
        </el-button>
        <el-button type="text" icon="el-icon-document">
          12234个回答
        </el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {}
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
    padding-bottom: 20px;
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
