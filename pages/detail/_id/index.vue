<template>
  <div :class="$style.detail">
    <input-comment ref="inputComment" @determine="determineInputComment" />
    <img :class="$style['head-image']" :src="periodicalData.pic" />
    <el-row :gutter="30" :class="$style.main">
      <el-col :span="6">
        <calendar-card
          :class="$style.calendar"
          :updatedAt="periodicalData.updatedAt"
        />
        <div :class="$style.info">
          <p :class="$style.author">作者：{{ periodicalData.author }}</p>
          <p :class="$style.pv">阅读：{{ periodicalData.pv }}</p>
          <p :class="$style.voteCount">
            收藏数：{{ periodicalData.voteCount }}
          </p>
          <div>
            <el-tag
              :class="$style.tag"
              v-for="(item, index) in periodicalData.topics"
              :key="index"
              type="info"
              size="mini"
              effect="plain"
            >
              {{ item }}
            </el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="18">
        <div>
          <h1 :class="$style.title">
            {{ periodicalData.title }}
          </h1>
          <p :class="$style.describe">{{ periodicalData.describe }}</p>
          <div :class="$style['text-box']">
            <div v-html="periodicalData.content"></div>
          </div>
          <div :class="$style.operation">
            <el-button
              @click="handlerCollection()"
              :type="likeData ? 'success' : 'info'"
              icon="el-icon-star-off"
              circle
            >
            </el-button>

            <el-button
              @click="handlerInputComment()"
              icon="el-icon-edit-outline"
              circle
              type="primary"
            >
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <comments
      @discussMore="handlerDiscussMore"
      @reply="handlerInputComment"
      :commentItem="item"
      v-for="(item, index) in commentsData"
      :key="index"
    />
  </div>
</template>

<script>
import calendarCard from '~/components/calendar-card'
import comments from '~/components/comments/index'
import inputComment from '~/components/comments/input-comment'
export default {
  components: {
    inputComment,
    calendarCard,
    comments
  },
  data() {
    return {
      likeData: false
    }
  },
  async asyncData(ctx) {
    const { params } = ctx
    const periodicalRes = await ctx.$axios({
      method: 'get',
      url: `/api/periodical/${params.id}`,
      params: {
        fields: 'topics'
      }
    })
    const commentsRes = await ctx.$axios({
      method: 'get',
      url: `/api/periodical/${params.id}/comments`
    })
    return {
      periodicalData: periodicalRes.data,
      commentsData: commentsRes.data
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const likeRes = await this.$axios({
        method: 'get',
        url: `/api/users/whetherLikingPeriodical/${this.$route.params.id}`
      })
      this.likeData = likeRes.data.like
    },
    handlerDiscussMore(val) {
      // 展开收起
      const v = this.commentsData.find((item) => {
        return item._id === val._id
      })
      if (v.replys && v.replys.length) {
        const arr = this.commentsData.map((item) => {
          return { ...item, replys: [] }
        })
        this.commentsData = arr
      } else {
        this.$axios({
          method: 'get',
          url: `/api/periodical/${this.$route.params.id}/comments`,
          params: {
            rootCommentId: val._id
          }
        }).then((res) => {
          if (res.data.length) {
            const arr = this.commentsData.map((item) => {
              if (item._id === val._id) {
                return { ...item, replys: res.data }
              } else {
                return item
              }
            })
            this.commentsData = arr
          } else {
            this.$message('该评论下暂无讨论')
          }
        })
      }
    },
    handlerInputComment(val) {
      this.$refs.inputComment.open(val)
    },
    determineInputComment(val) {
      const data = { content: val.content }
      if (val.replyDate) {
        data.rootCommentId = val.replyDate.rootCommentId || val.replyDate._id
        data.replyTo = val.replyDate.commentator._id
      }
      this.$axios({
        method: 'post',
        url: `/api/periodical/${this.$route.params.id}/comments`,
        data: {
          ...data
        }
      }).then((res) => {
        this.$message({
          message: '恭喜你，评论成功，请等待管理员审核！',
          type: 'success'
        })
      })
    },
    handlerCollection() {
      if (this.likeData) {
        this.$confirm('确认取消收藏?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.$axios({
              method: 'delete',
              url: `/api/users/likingPeriodical/${this.$route.params.id}`
            }).then((res) => {
              this.likeData = false
              this.$message({
                type: 'info',
                message: '已取消收藏'
              })
            })
          })
          .catch(() => {})
      } else {
        this.$axios({
          method: 'put',
          url: `/api/users/likingPeriodical/${this.$route.params.id}`
        }).then((res) => {
          this.likeData = true
          this.$message({
            type: 'success',
            message: '收藏成功!'
          })
        })
      }
    }
  },
  head() {
    return {
      title: '详情'
    }
  }
}
</script>

<style lang="scss" module>
.detail {
  width: 980px;
  margin: 0 auto;
  padding-bottom: 30px;
  .head-image {
    width: 100%;
  }
  .main {
    padding: 30px 0;
    .calendar {
      width: 120px;
    }
    .info {
      padding: 20px 0;
      .author {
        font-size: 14px;
        color: #3c3b4a;
      }
      .pv,
      .voteCount {
        font-size: 12px;
        color: #aaaaaa;
      }
      .tag {
        margin: 0 10px 10px 0;
      }
    }
    .title {
      margin: 0;
      line-height: 38px;
    }
    .describe {
      font-style: italic;
      color: #aaaaaa;
      font-size: 14px;
      line-height: 21px;
    }
    .text-box {
      font-size: 14px;
      color: #3c3b4a;
      line-height: 21px;
      padding: 10px 0 30px;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
