<template>
  <div :class="$style['question-detail']">
    <el-card shadow="hover">
      <classification />
      <h3 :class="$style.title">
        想养只狗或者猫。智力高一点，不掉毛的。请问有哪些合适？
      </h3>
      <p :class="$style.describe">
        对于不爱护小动物这样的担心就没有必要了，本人小的时候家里养了四条大狗，只不过对于沾毛之类的事情实在是麻烦，并且找智力相对高的训练起来容易的，谢谢啦！
      </p>
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
    </el-card>
  </div>
</template>

<script>
import classification from '~/components/classification'
export default {
  components: {
    classification
  },
  methods: {}
}
</script>

<style lang="scss" module>
.question-detail {
  margin-bottom: 20px;
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
  }
  .describe {
    margin: 0;
    color: #3c3b4a;
    font-size: 14px;
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
</style>
