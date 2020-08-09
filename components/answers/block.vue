<template>
  <div :class="$style['recommend-answers']">
    <el-card shadow="never">
      <nuxt-link
        v-if="showLinkQuestion"
        :to="{ name: 'question-id', params: { id: blockData.questionId._id } }"
        :class="$style.title"
      >
        {{ blockData.questionId.title }}
      </nuxt-link>
      <div :class="$style.answerer" v-if="blockData.answerer">
        <nuxt-link
          :to="{ name: 'user-id', params: { id: blockData.answerer._id } }"
        >
          <el-avatar
            :src="blockData.answerer.avatar_url"
            shape="square"
            size="medium"
          >
            {{ blockData.answerer.name[0] }}
          </el-avatar>
        </nuxt-link>
        <div :class="$style.info">
          <nuxt-link
            :to="{ name: 'user-id', params: { id: blockData.answerer._id } }"
          >
            <h5 :class="$style.name">{{ blockData.answerer.name }}</h5>
          </nuxt-link>
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

        <el-button
          @click="addAnswerComment(blockData)"
          plain
          size="small"
          type="primary"
          icon="el-icon-edit"
        >
          评论
        </el-button>

        <div :class="$style['test-button']">
          <el-button
            @click="showAnswerComments(blockData)"
            :class="$style.chosen"
            type="text"
            icon="el-icon-chat-dot-square"
          >
            {{
              blockData.showComments
                ? '收起评论'
                : `${blockData.commentNum}个评论`
            }}
          </el-button>
          <el-button
            @click="collectAnswer(blockData)"
            :class="{ [$style.chosen]: !blockData.isCollect }"
            icon="el-icon-star-off"
            type="text"
          >
            {{ blockData.isCollect ? '已收藏' : '收藏' }}
          </el-button>
        </div>
      </div>

      <template v-if="blockData.showComments">
        <comments-item
          :class="$style.comments"
          v-for="(item, index) in blockData.commentsListData"
          :key="index"
          :commentItem="item"
          @reply="reply"
          @discussMore="discussMore"
        />
      </template>
    </el-card>
  </div>
</template>
<script>
import commentsItem from '~/components/comments/item'
export default {
  components: {
    commentsItem
  },
  props: {
    blockData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    showLinkQuestion: {
      type: Boolean,
      default: () => {
        return true
      }
    }
  },
  methods: {
    likingAnswer(val) {
      this.$emit('likingAnswer', val)
    },
    dislikingAnswer(val) {
      this.$emit('dislikingAnswer', val)
    },
    collectAnswer(val) {
      this.$emit('collectAnswer', val)
    },
    showAnswerComments(val) {
      this.$emit('showAnswerComments', val)
    },
    reply(val) {
      this.$emit('reply', val)
    },
    discussMore(val) {
      this.$emit('discussMore', { commentItem: val, blockData: this.blockData })
    },
    addAnswerComment(val) {
      this.$emit('addAnswerComment', this.blockData)
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
  .comments {
    border-bottom: 1px solid #ebeef5;
  }
}
</style>
