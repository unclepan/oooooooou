<template>
  <el-card :class="$style.card" :body-style="{ padding: '0px' }" shadow="hover">
    <a v-if="advertisementData" :href="advertisementData.link" target="_blank">
      <img :class="$style.image" :src="advertisementData.pic" />
    </a>

    <div :class="$style.main">
      <span :class="$style.title">{{ advertisementData.title }}</span>
      <div :class="$style.bottom">
        <span :class="$style.description">
          {{ advertisementData.description }}
        </span>
        <el-link :href="advertisementData.link" target="_blank" type="primary">
          广告
          <i class="el-icon-view el-icon--right"></i>
        </el-link>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    advertisementData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" module>
.card {
  margin-top: 20px;
  .image {
    width: 100%;
  }
  .main {
    padding: 14px;
    .title {
      font-weight: bold;
      display: block;
      font-size: 16px;
      color: #3c3b4a;
      line-height: 21px;
    }
    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .description {
        font-size: 14px;
        color: #aaaaaa;
        max-width: 190px;
      }
    }
  }
}
</style>
