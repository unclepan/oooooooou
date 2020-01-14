<template>
  <el-card shadow="hover">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="简介" name="first">
        <info />
      </el-tab-pane>
      <el-tab-pane label="期刊" name="second">
        <periodical-block
          :periodicalData="item"
          v-for="item in list"
          :key="item._id"
        />
      </el-tab-pane>
      <el-tab-pane label="精华" name="third">
        <block v-for="(item, index) in 10" :key="index" />
      </el-tab-pane>
      <el-tab-pane label="问题" name="fourth">
        <question v-for="(item, index) in 10" :key="index" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>
<script>
import block from '../block'
import question from '../question'
import info from './info'
import periodicalBlock from '~/components/periodical/block'

export default {
  components: {
    periodicalBlock,
    question,
    block,
    info
  },
  data() {
    return {
      activeName: 'fourth',
      list: [
        {
          pv: 22,
          voteCount: 2,
          _id: '5e12e1805b0912173815471b',
          pic: '/periodical/2019112/91273/1575258485788.png',
          title: '「吃茶」EP20：是什么让她决定辞职，去留学？',
          content: '<h5>1231</h5>',
          author: 'Host_ More Tong& Nikki, Guest_Momoshou& Mebuki',
          describe:
            '插画师momoshou工作了10+年，职业和生活路径已经很清晰了，可是这位“撞车型”选手，很知道自己要什么,究竟是什么让她决定辞职，去留学？',
          createdAt: '2020-01-06T07:28:00.988Z',
          updatedAt: '2020-01-10T10:01:16.812Z'
        }
      ]
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
