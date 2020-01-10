<template>
  <el-card :class="$style.card" :body-style="{ padding: '0px' }" shadow="hover">
    <img
      :class="$style.image"
      src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    />
    <div :class="$style.main">
      <span :class="$style.title">好吃的汉堡</span>
      <div :class="$style.bottom">
        <span :class="$style.participant">1234214参与</span>
        <el-link type="primary">
          详细
          <i class="el-icon-view el-icon--right"></i>
        </el-link>
      </div>
    </div>
  </el-card>
</template>

<style lang="scss" module>
.card {
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
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .participant {
        font-size: 14px;
        color: #aaaaaa;
      }
    }
  }
}
</style>
