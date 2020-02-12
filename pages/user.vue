<template>
  <div :class="$style.user">
    <el-row :gutter="20" v-if="userData">
      <el-col :span="7">
        <el-card shadow="hover">
          <el-avatar :src="userData.avatar_url" :size="120" shape="square">
            <img src="~/assets/images/bitmap.png" alt="bitmap" />
          </el-avatar>
          <p>姓名：{{ userData.name }}</p>
          <p>邮箱：{{ userData.email }}</p>
          <p>简介：{{ userData.introduce }}</p>
        </el-card>
      </el-col>
      <el-col :span="17">
        <el-card shadow="hover">
          <el-tabs v-model="activeName">
            <el-tab-pane label="关注的话题" name="1">
              <topics :topicsList="userData.followingTopics" />
            </el-tab-pane>
            <el-tab-pane label="收藏的期刊" name="2">
              <periodical-block
                :class="$style['periodical-block']"
                v-for="item in userData.likingPeriodicals"
                :key="item._id"
                :periodicalData="item"
              />
            </el-tab-pane>
            <el-tab-pane label="关注的问题" name="3">
              <div
                :class="$style['item-questions']"
                v-for="(item, index) in userData.followingQuestions"
                :key="index"
              >
                <nuxt-link
                  :to="{ name: 'question-id', params: { id: item._id } }"
                  :class="$style.title"
                >
                  {{ item.title }}
                </nuxt-link>
                <div :class="$style.info">
                  <span>
                    {{ moment(item.updatedAt).format('YYYY-MM-DD HH:mm') }}
                  </span>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import moment from 'moment'
import topics from '~/components/topics'
import periodicalBlock from '~/components/periodical/block'
export default {
  components: {
    topics,
    periodicalBlock
  },
  head() {
    return {
      title: '个人中心'
    }
  },
  data() {
    return {
      activeName: '2',
      userData: null,
      moment
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const userDataRes = await this.$axios({
        method: 'get',
        url: '/api/users/login/info',
        params: {
          fields:
            'locations;business;employments;educations;following;followingTopics;followingQuestions;likingAnswers;dislikingAnswers;collectingAnswers;likingPeriodicals'
        }
      })
      this.userData = userDataRes.data
    }
  }
}
</script>
<style lang="scss" module>
.user {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
  .item-questions {
    padding: 10px 0;
    border-bottom: 1px solid #ebeef5;
    .title {
      color: #3c3b4a;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 12px;
      cursor: pointer;
      display: block;
      &:hover {
        color: #409eff;
      }
    }
    .info {
      font-size: 12px;
      color: #aaaaaa;
      span {
        padding-right: 10px;
      }
    }
  }
  .item-questions:last-of-type {
    border: none;
  }
}
</style>
