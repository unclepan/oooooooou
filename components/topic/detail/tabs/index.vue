<template>
  <el-card shadow="never">
    <el-tabs v-model="activeName">
      <el-tab-pane label="简介" name="first">
        <info :topicDataInfo="topicDataInfo" />
      </el-tab-pane>
      <el-tab-pane label="期刊" name="second">
        <periodical :popularList="topicPeriodicalsDataList" />
        <more @more="$emit('perimore')" />
      </el-tab-pane>
      <el-tab-pane label="问题" name="fourth">
        <question :questionList="topicQuestionsDataList" />
        <more @more="$emit('quesmore')" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import info from './info'
import question from '~/components/common/question/item'
import periodical from '~/components/common/periodical'
import more from '~/components/button/more'
export default {
  components: {
    periodical,
    question,
    info,
    more
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
      activeName: 'fourth'
    }
  }
}
</script>
