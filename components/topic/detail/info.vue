<template>
  <div :class="$style.info">
    <h3 :class="$style.title">简介</h3>
    <p :class="[$style.text, $style.intro]">
      地缘政治是政治地理学说中的一种理论。它主要是根据地理要素和政治格局的地域形式，分析和预测世界或地区范围的战略形势和有关国家的政治行为。它把地理因素视为影响甚至决定国家政治行为的一个基本因素。又被称为“地理政治学”。
    </p>
    <h3 :class="$style.title">更多信息</h3>
    <el-row v-for="(item, index) in 5" :key="index">
      <el-col :span="6">
        <h5>中文名</h5>
      </el-col>
      <el-col :span="18">
        <p :class="$style.text">地缘政治</p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" module>
.info {
  .title {
    font-size: 16px;
    color: #1a1a1a;
  }
  .intro {
    border-bottom: 1px solid #ebeef5;
    padding-bottom: 20px;
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
