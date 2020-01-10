<template>
  <div>
    <el-card shadow="hover">
      <el-row>
        <el-col :span="12">
          <div :class="$style.info">
            <p :class="$style.label">关注者</p>
            <p :class="$style.num">1243214</p>
          </div>
        </el-col>
        <el-col :span="12">
          <div :class="$style.info">
            <p :class="$style.label">被浏览</p>
            <p :class="$style.num">1243214</p>
          </div>
        </el-col>
      </el-row>
    </el-card>

    <strip-title>
      <span slot="default">期刊推荐</span>
    </strip-title>
    <recommend-card />

    <strip-title>
      <span slot="default">问题推荐</span>
    </strip-title>

    <recommend-questions />
  </div>
</template>

<script>
import stripTitle from '../../strip-title'
import recommendCard from '../../recommend-card'
import recommendQuestions from '../../recommend-questions'
export default {
  components: {
    stripTitle,
    recommendCard,
    recommendQuestions
  },
  // props: {
  //   popularList: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     }
  //   }
  // },
  data() {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" module>
.info {
  text-align: center;
  .label {
    font-size: 14px;
    color: #aaaaaa;
    margin: 0;
  }
  .num {
    font-size: 16px;
    color: #3c3b4a;
    font-weight: 600;
    margin: 20px 0 0 0;
  }
}
</style>
