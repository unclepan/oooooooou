<template>
  <div :class="$style['recommend-answers']">
    <el-card shadow="hover">
      <nuxt-link :class="$style.title" to="/">
        你看过哪些超可爱的宠物视频，可以分享一下吗？
      </nuxt-link>

      <el-row :class="$style.main" :gutter="20">
        <el-col :span="7">
          <img :class="$style.pic" src="/2019112/91273/1575258485788.png" />
        </el-col>
        <el-col :span="17">
          <span :class="$style.answer">
            洛洛里啦：
            剧情反转的很有看头，演员演技完全在线，就是这一段表演所传递出来的价值观不知道该怎么说…
          </span>
          <el-button type="text">
            阅读全文<i class="el-icon-arrow-right el-icon--right"></i>
          </el-button>
        </el-col>
      </el-row>

      <div :class="$style.handler">
        <el-button-group>
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
        </el-button-group>
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
.recommend-answers {
  margin-bottom: 20px;
  .title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
  }
  .main {
    padding: 16px 0;
    .pic {
      width: 100%;
    }
    .answer {
      margin: 0;
      color: #3c3b4a;
      font-size: 14px;
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
