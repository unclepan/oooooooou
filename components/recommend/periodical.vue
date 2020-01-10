<template>
  <el-card shadow="hover">
    <div
      :class="$style['item']"
      v-for="(itemData, index) in popularList"
      :key="index"
    >
      <el-row :gutter="10">
        <el-col :span="6" :class="$style['item-img']">
          <nuxt-link
            :to="{ name: 'detail-id', params: { id: itemData.periodical._id } }"
          >
            <img :src="itemData.periodical.pic" alt="推荐" />
          </nuxt-link>
        </el-col>
        <el-col :span="18" :class="$style['list-box']">
          <nuxt-link
            :class="$style.title"
            :to="{ name: 'detail-id', params: { id: itemData.periodical._id } }"
            >{{ itemData.periodical.title }}</nuxt-link
          >
          <p :class="$style.auxiliary">
            {{ moment(itemData.periodical.createdAt).format('YYYY-MM-DD') }}
            阅读：{{ itemData.periodical.pv }}
          </p>
        </el-col>
      </el-row>
      <p :class="[$style.auxiliary, $style.describe]">
        {{ itemData.periodical.describe }}
      </p>
    </div>
  </el-card>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    popularList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      moment
    }
  },
  asyncData() {
    // console.log(window) // 服务端报错
  },
  fetch() {
    // console.log(window) // 服务端报错
  },
  created() {
    // console.log(window) // undefined
  },
  mounted() {
    // console.log(window) // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
  },
  methods: {}
}
</script>

<style lang="scss" module>
.item {
  padding: 10px 0;
  border-bottom: 1px solid #ebeef5;
  .item-img {
    img {
      width: 100%;
    }
  }
  .list-box {
    .title {
      font-weight: bold;
      display: block;
      font-size: 16px;
      color: #3c3b4a;
      line-height: 21px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        color: #409eff;
      }
    }
  }
  .auxiliary {
    font-size: 12px;
    color: #aaaaaa;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 10px 0;
  }
  .describe {
    font-size: 12px;
    color: #3c3b4a;
  }
}
.item:last-of-type {
  border: none;
}
</style>
