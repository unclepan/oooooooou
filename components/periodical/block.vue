<template>
  <div :class="$style.card">
    <img :class="$style['head-diagram']" :src="periodicalData.pic" />
    <div :class="$style.main">
      <el-row :gutter="20" type="flex" align="bottom">
        <el-col :span="5">
          <calendar :createdAt="periodicalData.createdAt" />
        </el-col>
        <el-col :span="19">
          <div :class="$style.text">
            <h3>{{ periodicalData.title }}</h3>
            <p :class="$style['text-main']">{{ periodicalData.describe }}</p>
            <div :class="$style['test-footer']">
              <p :class="$style.pv">{{ periodicalData.author }}</p>
              <nuxt-link
                :to="{
                  name: 'detail-id',
                  params: { id: periodicalData._id }
                }"
              >
                <el-button type="primary" icon="el-icon-plus" circle>
                </el-button>
              </nuxt-link>
            </div>
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
    .text {
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
