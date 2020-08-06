<template>
  <div>
    <input-comment ref="inputComment" @determine="determineInputComment" />
    <block
      @addAnswerComment="handlerAddAnswerComment"
      @discussMore="handlerDiscussMore"
      @reply="handlerInputComment"
      @likingAnswer="handlerLikingAnswer"
      @dislikingAnswer="handlerdDislikingAnswer"
      @collectAnswer="handlerCollectAnswer"
      @showAnswerComments="handlerShowAnswerComments"
      v-for="(item, index) in answersRecommendList"
      :key="index"
      :blockData="item"
    />
  </div>
</template>
<script>
import _ from 'lodash'
import block from './block'
import inputComment from '~/components/comments/input-comment'
export default {
  components: {
    block,
    inputComment
  },
  props: {
    answersRecommendListRes: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      addAnswerComment: null,
      answersRecommendList: _.cloneDeep(this.answersRecommendListRes)
    }
  },
  methods: {
    async handlerLikingAnswer(val) {
      if (val.isLike) {
        // 取消赞答案
        await this.$axios({
          method: 'delete',
          url: `/api/users/likingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isLike: false }
          }
          return { ...item }
        })
      } else {
        // 赞答案
        await this.$axios({
          method: 'put',
          url: `/api/users/likingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isLike: true, isDislike: false }
          }
          return { ...item }
        })
      }
    },
    async handlerdDislikingAnswer(val) {
      if (val.isDislike) {
        // 取消踩答案
        await this.$axios({
          method: 'delete',
          url: `/api/users/dislikingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isDislike: false }
          }
          return { ...item }
        })
      } else {
        // 踩答案
        await this.$axios({
          method: 'put',
          url: `/api/users/dislikingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isDislike: true, isLike: false }
          }
          return { ...item }
        })
      }
    },
    async handlerCollectAnswer(val) {
      if (val.isCollect) {
        // 取消收藏
        await this.$axios({
          method: 'delete',
          url: `/api/users/collectingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isCollect: false }
          }
          return { ...item }
        })
      } else {
        // 收藏
        await this.$axios({
          method: 'put',
          url: `/api/users/collectingAnswers/${val.id}`
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return { ...item, isCollect: true }
          }
          return { ...item }
        })
      }
    },
    async handlerShowAnswerComments(val) {
      const answerCommentsListRes = await this.$axios({
        method: 'get',
        url: `/api/questions/${val.questionId._id}/answers/${val.id}/comments`
      })
      this.answersRecommendList = this.answersRecommendList.map((item) => {
        if (item.id === val.id) {
          return { ...item, commentsListData: answerCommentsListRes.data }
        }
        return { ...item, commentsListData: [] }
      })
    },
    handlerInputComment(val) {
      this.$refs.inputComment.open(val)
    },
    handlerAddAnswerComment(val) {
      this.addAnswerComment = val
      this.$refs.inputComment.open()
    },
    handlerDiscussMore(val) {
      // 找到属于某一个答案的评论
      if (val.commentItem.replys && val.commentItem.replys.length) {
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.blockData.id) {
            const com = item.commentsListData.map((ci) => {
              return { ...ci, replys: [] }
            })
            return { ...item, commentsListData: com }
          }
          return { ...item }
        })
      } else {
        this.$axios({
          method: 'get',
          url: `/api/questions/${val.commentItem.questionId}/answers/${val.commentItem.answerId}/comments`,
          params: {
            rootCommentId: val.commentItem._id
          }
        }).then((res) => {
          if (res.data.length) {
            this.answersRecommendList = this.answersRecommendList.map(
              (item) => {
                if (item.id === val.blockData.id) {
                  const com = item.commentsListData.map((ci) => {
                    if (ci._id === val.commentItem._id) {
                      return { ...ci, replys: res.data }
                    } else {
                      return { ...ci }
                    }
                  })
                  return {
                    ...item,
                    commentsListData: com
                  }
                }
                return { ...item }
              }
            )
          } else {
            this.$message('该评论下暂无讨论')
          }
        })
      }
    },
    determineInputComment(val) {
      const data = { content: val.content }
      let questionId
      let answerId
      if (val.replyDate) {
        data.rootCommentId = val.replyDate.rootCommentId || val.replyDate._id
        data.replyTo = val.replyDate.commentator._id
        questionId = val.replyDate.questionId
        answerId = val.replyDate.answerId
      }
      if (this.addAnswerComment) {
        questionId = this.addAnswerComment.questionId._id
        answerId = this.addAnswerComment.id
      }

      this.$axios({
        method: 'post',
        url: `/api/questions/${questionId}/answers/${answerId}/comments`,
        data: {
          ...data
        }
      }).then((res) => {
        this.$message({
          message: '恭喜你，评论成功，请等待管理员审核！',
          type: 'success'
        })
      })
    }
  }
}
</script>
<style lang="scss" module></style>
