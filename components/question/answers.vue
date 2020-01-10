<template>
  <div :class="$style['question-answers']">
    <el-card shadow="hover">
      <div :class="$style.answerer">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          icon="el-icon-user-solid"
          shape="square"
          size="medium"
        >
          user
        </el-avatar>
        <div :class="$style.info">
          <h5 :class="$style.name">海温凯勒</h5>
          <p :class="$style.introduce">房事洞明皆学问，色情练达即文章。</p>
        </div>
      </div>

      <div :class="$style.main">
        <el-button type="text">
          123人赞同了该回答
        </el-button>
        <div>
          是的，有的时候刺激过头会发现狗狗弓着背想要趴大腿，很明显的性冲动。我觉得不是，应该是一种类似人被按摩的快感吧，你被按摩的时候会感受到性刺激吗
        </div>
        <p :class="$style.time">发布于 2019-10-01</p>
      </div>

      <div :class="$style.handler">
        <el-button size="small" type="primary" icon="el-icon-caret-top">
          赞同3k
        </el-button>

        <el-button
          size="small"
          type="primary"
          icon="el-icon-caret-bottom"
          plain
        >
        </el-button>

        <div :class="$style['test-button']">
          <el-button type="text" icon="el-icon-chat-dot-square">
            231评论
          </el-button>
          <el-button type="text" icon="el-icon-star-off">收藏</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {}
}
</script>

<style lang="scss" module>
.question-answers {
  margin-bottom: 20px;
  .answerer {
    display: flex;
    justify-content: flex-start;
    .info {
      padding-left: 20px;
      .name {
        font-size: 14px;
        color: #3c3b4a;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .introduce {
        font-size: 12px;
        color: #666666;
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .main {
    .time,
    :global(.el-button--text) {
      color: #aaaaaa;
      font-size: 12px;
    }
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
