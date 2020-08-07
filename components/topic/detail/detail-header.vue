<template>
  <div :class="$style['detail-header']">
    <el-card shadow="hover">
      <el-row :class="$style.main" :gutter="20">
        <el-col :span="5">
          <img :class="$style.pic" :src="topicDataInfo.pic" />
        </el-col>
        <el-col :span="19">
          <h3 :class="$style.title">
            {{ topicDataInfo.name }}
          </h3>
          <p :class="$style.describe">
            {{ topicDataInfo.introduction }}
          </p>
        </el-col>
      </el-row>

      <div :class="$style.handler">
        <el-button
          @click="handlerFollowingTopic(informationStatistics.followingTopic)"
          :type="informationStatistics.followingTopic ? 'info' : 'primary'"
          size="small"
        >
          {{ informationStatistics.followingTopic ? '取消关注' : '关注话题' }}
        </el-button>

        <div :class="$style['test-button']">
          <el-button type="text" icon="el-icon-chat-dot-square">
            关注人数：{{ informationStatistics.followingTopicNum }}
          </el-button>
          <el-button type="text" icon="el-icon-document">
            问题数：{{ informationStatistics.questionsNum }}
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  components: {},
  props: {
    topicDataInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    informationStatisticsData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      addAnswerComment: null,
      informationStatistics: _.cloneDeep(this.informationStatisticsData)
    }
  },
  methods: {
    async handlerFollowingTopic(val) {
      const { followingTopic } = this.informationStatistics
      if (val) {
        await this.$axios({
          method: 'delete',
          url: `/api/users/followingTopics/${this.$route.params.id}`
        })
        this.informationStatistics.followingTopicNum -= 1
      } else {
        await this.$axios({
          method: 'put',
          url: `/api/users/followingTopics/${this.$route.params.id}`
        })
        this.informationStatistics.followingTopicNum += 1
      }
      this.informationStatistics.followingTopic = !followingTopic
    }
  }
}
</script>

<style lang="scss" module>
.detail-header {
  margin-bottom: 20px;
  .main {
    padding-bottom: 16px;
    .pic {
      width: 100%;
    }
    .title {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
    }
    .describe {
      margin-top: 16px;
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
