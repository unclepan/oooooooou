<template>
  <el-card shadow="hover">
    <el-tabs v-model="activeName">
      <el-tab-pane label="简介" name="first">
        <info :topicDataInfo="topicDataInfo" />
      </el-tab-pane>
      <el-tab-pane label="期刊" name="second">
        <periodical :popularList="topicPeriodicalsDataList" />
        <p :class="$style.more" @click="$emit('perimore')">加载更多</p>
      </el-tab-pane>
      <el-tab-pane label="问题" name="fourth">
        <question :questionList="topicQuestionsDataList" />
        <p :class="$style.more" @click="$emit('quesmore')">加载更多</p>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import question from './question'
import info from './info'
import periodical from './periodical'
export default {
  components: {
    periodical,
    question,
    info
  },
  props: {
    topicDataInfo: {
      type: Object,
      default: () => {
        return {}
      }
    },
    topicPeriodicalsDataList: {
      type: Array,
      default: () => {
        return {}
      }
    },
    topicQuestionsDataList: {
      type: Array,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style lang="scss" module>
.more {
  margin: 20px auto 0;
  width: 120px;
  padding: 10px;
  font-size: 14px;
  color: #666666;
  border: 1px solid #666666;
  cursor: pointer;
  text-align: center;
  &:hover {
    color: #409eff;
    border: 1px solid #409eff;
    background: #ffffff;
  }
}
</style>
