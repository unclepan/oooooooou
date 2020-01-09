<template>
  <div :class="$style.card">
    <el-card shadow="hover">
      <img :class="$style['head-diagram']" :src="cardItem.pic" />
      <div :class="$style.main">
        <el-row :gutter="20" type="flex" align="bottom">
          <el-col :span="5">
            <calendar-card :createdAt="cardItem.createdAt" />
          </el-col>
          <el-col :span="19">
            <div :class="$style.text">
              <h3>{{ cardItem.title }}</h3>
              <p :class="$style['text-main']">{{ cardItem.describe }}</p>
              <div :class="$style['test-footer']">
                <p :class="$style.pv">{{ cardItem.author }}</p>
                <nuxt-link
                  :to="{ name: 'detail-id', params: { id: cardItem._id } }"
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
import calendarCard from './calendar-card'
export default {
  components: {
    calendarCard
  },
  props: {
    cardItem: {
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
