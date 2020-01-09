<template>
  <div :class="$style['recommend-questions']">
    <div :class="$style.item" v-for="(item, index) in 5" :key="index">
      <h4 :class="$style.title">
        你看过哪些超可爱的宠物视频，可以分享一下吗？
      </h4>
      <div :class="$style.info">
        <span>关注：123243</span>
        <span>回答：123</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.recommend-questions {
  .item {
    padding: 10px 0;
    border-bottom: 1px solid #ebeef5;
    .title {
      margin: 0;
      padding-bottom: 12px;
      cursor: pointer;
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
}
</style>
