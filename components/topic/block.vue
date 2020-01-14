<template>
  <div :class="$style['recommend-answers']">
    <el-card shadow="hover">
      <nuxt-link :class="$style.title" to="/">
        {{ blockData.questionId.title }}
      </nuxt-link>
      <div :class="$style.answerer" v-if="blockData.answerer">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          icon="el-icon-user-solid"
          shape="square"
          size="medium"
        >
          {{ blockData.answerer.name[0] }}
        </el-avatar>
        <div :class="$style.info">
          <h5 :class="$style.name">{{ blockData.answerer.name }}</h5>
          <p :class="$style.introduce">
            {{ blockData.answerer.introduce || '暂无简介' }}
          </p>
        </div>
      </div>

      <el-row :class="$style.main" :gutter="20">
        <el-col v-if="blockData.pic" :span="7">
          <img :class="$style.pic" :src="blockData.pic" />
        </el-col>
        <el-col :span="blockData.pic ? 17 : 24">
          <span :class="$style.answer">
            {{ blockData.content }}
          </span>
          <!-- <el-button :class="$style.whole" type="text">
            阅读全文<i class="el-icon-arrow-right el-icon--right"></i>
          </el-button> -->
        </el-col>
      </el-row>

      <div :class="$style.handler">
        <el-button
          @click="likingAnswer(blockData)"
          :plain="!blockData.isLike"
          size="small"
          type="primary"
          icon="el-icon-caret-top"
        >
          {{ blockData.isLike ? '已赞同' : '赞同' }}
          {{ blockData.likeNum || '' }}
        </el-button>
        <el-button
          @click="dislikingAnswer(blockData)"
          :plain="!blockData.isDislike"
          size="small"
          type="primary"
          icon="el-icon-caret-bottom"
        >
          {{ blockData.isDislike ? '已踩' : '踩' }}
        </el-button>

        <div :class="$style['test-button']">
          <el-button
            :class="$style.chosen"
            type="text"
            icon="el-icon-chat-dot-square"
          >
            231评论
          </el-button>
          <el-button
            :class="{ [$style.chosen]: !blockData.isCollect }"
            icon="el-icon-star-off"
            type="text"
          >
            {{ blockData.isCollect ? '已收藏' : '收藏' }}
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    blockData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    likingAnswer(val) {
      this.$emit('likingAnswer', val)
    },
    dislikingAnswer(val) {
      this.$emit('dislikingAnswer', val)
    }
  }
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
  .answerer {
    display: flex;
    justify-content: flex-start;
    padding-top: 12px;
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
        margin: 0;
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .main {
    padding: 12px 0;
    .pic {
      width: 100%;
    }
    .answer {
      margin: 0;
      color: #3c3b4a;
      font-size: 14px;
    }
    .whole {
      padding: 0;
    }
  }
  .handler {
    display: flex;
    align-items: center;
    .test-button {
      padding-left: 30px;
      .chosen {
        color: #aaaaaa;
      }
    }
  }
}
</style>
