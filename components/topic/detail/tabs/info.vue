<template>
  <div :class="$style.info">
    <h3 :class="$style.title">简介</h3>
    <p :class="[$style.text]">
      {{ topicDataInfo.introduction }}
    </p>
    <template v-if="topicDataInfo.moreInformation.length">
      <h3 :class="[$style.title, $style.intro]">更多信息</h3>
      <el-row
        v-for="(item, index) in topicDataInfo.moreInformation"
        :key="index"
      >
        <el-col :span="6">
          <h5>{{ item.name }}</h5>
        </el-col>
        <el-col :span="18">
          <p :class="$style.text">{{ item.value }}</p>
        </el-col>
      </el-row>
    </template>
  </div>
</template>
<script>
export default {
  props: {
    topicDataInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" module>
.info {
  .title {
    font-size: 16px;
    color: #1a1a1a;
  }
  .intro {
    border-top: 1px solid #ebeef5;
    padding-top: 20px;
  }
  h5 {
    margin: 0;
  }
  .text {
    font-size: 14px;
    color: #3c3b4a;
    line-height: 21px;
    margin: 0;
  }
}
</style>
