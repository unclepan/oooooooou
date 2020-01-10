<template>
  <div :class="$style.card">
    <el-card shadow="hover">
      <img :class="$style['head-diagram']" :src="answersData.pic" />
      <div :class="$style.main">
        <el-row :gutter="20" type="flex" align="bottom">
          <el-col :span="5">
            <calendar :createdAt="answersData.createdAt" />
          </el-col>
          <el-col :span="19">
            <div :class="$style.text">
              <h3>{{ answersData.title }}</h3>
              <p :class="$style['text-main']">{{ answersData.describe }}</p>
              <div :class="$style['test-footer']">
                <p :class="$style.pv">{{ answersData.author }}</p>
                <nuxt-link
                  :to="{ name: 'detail-id', params: { id: answersData._id } }"
                >
                  <el-button type="primary" icon="el-icon-plus" circle>
                  </el-button>
                </nuxt-link>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
import calendar from './calendar'
export default {
  components: {
    calendar
  },
  props: {
    answersData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" module>
.card {
  margin: 20px 0;
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
