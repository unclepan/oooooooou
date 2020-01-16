<template>
  <el-card shadow="hover">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="简介" name="first">
        <info :topicDataInfo="topicDataInfo" />
      </el-tab-pane>
      <el-tab-pane label="期刊" name="second">
        <periodical-block
          v-for="item in topicPeriodicalsDataList"
          :key="item._id"
          :periodicalData="item"
        />
      </el-tab-pane>
      <el-tab-pane label="精华" name="third">
        <!-- <block v-for="(item, index) in 10" :key="index" /> -->
      </el-tab-pane>
      <el-tab-pane label="问题" name="fourth">
        <question v-for="(item, index) in 10" :key="index" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
// import block from '../block'
import question from '../question'
import info from './info'
import periodicalBlock from '~/components/periodical/block'

export default {
  components: {
    periodicalBlock,
    question,
    // block,
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
    }
  },
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    }
  }
}
</script>
<style lang="scss" module></style>
