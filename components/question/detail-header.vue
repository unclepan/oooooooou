<template>
  <div :class="$style['question-detail']">
    <input-answers ref="inputAnswers" @determine="determineInputAnswers" />
    <el-card shadow="hover">
      <topics :topicsList="questionDataInfo.topics" />
      <h3 :class="$style.title">
        {{ questionDataInfo.title }}
      </h3>
      <p :class="$style.describe">
        {{ questionDataInfo.description }}
      </p>
      <div :class="$style.handler">
        <!-- <el-button size="small" type="primary">
          关注问题
        </el-button>
        <el-button size="small" type="primary" plain icon="el-icon-edit">
          写回答
        </el-button> -->
        <el-button
          @click="handlerFollowing(informationStatistics.followingQuestion)"
          :type="informationStatistics.followingQuestion ? 'info' : 'primary'"
          size="small"
        >
          {{
            informationStatistics.followingQuestion ? '取消关注' : '关注问题'
          }}
        </el-button>
        <el-button
          @click="handlerInputAnswers"
          size="small"
          type="primary"
          plain
          icon="el-icon-edit"
        >
          写回答
        </el-button>

        <!-- <div :class="$style['test-button']">
          <el-button type="text" icon="el-icon-document">
            12234个回答
          </el-button>
        </div> -->
      </div>
    </el-card>
  </div>
</template>

<script>
import inputAnswers from './input-answers'
import topics from '~/components/topics'
export default {
  components: {
    topics,
    inputAnswers
  },
  props: {
    questionDataInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    informationStatistics: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    async handlerFollowing(val) {
      if (val) {
        await this.$axios({
          method: 'delete',
          url: `/api/users/followQuestions/${this.$route.params.id}`
        })
      } else {
        await this.$axios({
          method: 'put',
          url: `/api/users/followQuestions/${this.$route.params.id}`
        })
      }
      this.$emit('follow')
    },
    determineInputAnswers(val) {
      const data = { content: val.content }
      this.$axios({
        method: 'post',
        url: `/api/questions/${this.$route.params.id}/answers`,
        data: {
          ...data
        }
      }).then((res) => {
        this.$message({
          message: '恭喜你，回答成功，请等待管理员审核！',
          type: 'success'
        })
      })
    },
    handlerInputAnswers() {
      this.$refs.inputAnswers.open()
    }
  }
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
    // .test-button {
    //   padding-left: 30px;
    //   :global(.el-button--text) {
    //     color: #aaaaaa;
    //   }
    // }
  }
}
</style>
