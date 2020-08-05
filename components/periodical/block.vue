<template>
  <div :class="$style.card">
    <nuxt-link
      :to="{
        name: 'detail-id',
        params: { id: periodicalData._id }
      }"
    >
      <img :class="$style['head-diagram']" :src="periodicalData.pic" />
    </nuxt-link>
    <div :class="$style.main">
      <el-row :gutter="20" type="flex">
        <el-col :span="5">
          <calendar :createdAt="periodicalData.createdAt" />
        </el-col>
        <el-col :span="19">
          <div :class="$style.text">
            <nuxt-link
              :to="{
                name: 'detail-id',
                params: { id: periodicalData._id }
              }"
            >
              <h3>{{ periodicalData.title }}</h3>
              <p :class="$style['text-main']">{{ periodicalData.describe }}</p>
              <div :class="$style['test-footer']">
                <p :class="$style.pv">{{ periodicalData.author }}</p>
                <el-button type="primary" icon="el-icon-plus" circle>
                </el-button>
              </div>
            </nuxt-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import calendar from './calendar'
export default {
  components: {
    calendar
  },
  props: {
    periodicalData: {
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
  .head-diagram {
    width: 100%;
  }
  .main {
    padding-top: 30px;
    .text {
      h3 {
        margin: 0;
        color: #000;
      }
      .text-main {
        font-size: 14px;
        color: #3c3b4a;
        line-height: 21px;
      }
      .test-footer {
        display: flex;
        justify-content: space-between;
        .pv {
          font-size: 12px;
          color: #aaaaaa;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 360px;
        }
      }
    }
  }
}
</style>
