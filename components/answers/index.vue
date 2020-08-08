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
      :showLinkQuestion="showLinkQuestion"
    />
  </div>
</template>
<script>
import block from './block'
import inputComment from '~/components/comments/input-comment'
export default {
  components: {
    block,
    inputComment
  },
  props: {
    answersRecommendList: {
      type: Array,
      default: () => {
        return []
      }
    },
    showLinkQuestion: {
      type: Boolean,
      default: () => {
        return true
      }
    }
  },
  data() {
    return {
      addAnswerComment: null
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
    // 查看评论或者收起评论
    async handlerShowAnswerComments(val) {
      if (val.showComments) {
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          return { ...item, showComments: false }
        })
      } else {
        const answerCommentsListRes = await this.$axios({
          method: 'get',
          url: `/api/questions/${val.questionId._id}/answers/${val.id}/comments`
        })
        const commentsListData = answerCommentsListRes.data.map((item) => {
          return { ...item, more: true }
        })
        this.answersRecommendList = this.answersRecommendList.map((item) => {
          if (item.id === val.id) {
            return {
              ...item,
              commentsListData,
              showComments: true
            }
          }
          return { ...item, commentsListData: [] }
        })
      }
    },
    // 回复
    handlerInputComment(val) {
      this.$refs.inputComment.open(val)
    },
    // 新增评论
    handlerAddAnswerComment(val) {
      this.addAnswerComment = val
      this.$refs.inputComment.open()
    },
    // 加载该评论下的讨论
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
          this.answersRecommendList = this.answersRecommendList.map((item) => {
            if (item.id === val.blockData.id) {
              const com = item.commentsListData.map((ci) => {
                if (ci._id === val.commentItem._id) {
                  return { ...ci, replys: res.data, more: !!res.data.length }
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
          })
          if (!res.data.length) {
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
