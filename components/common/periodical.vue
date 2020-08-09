<template>
  <div :class="$style.periodical">
    <div
      :class="$style['item']"
      v-for="(itemData, index) in popularList"
      :key="index"
    >
      <el-row :gutter="10">
        <el-col :span="6" :class="$style['item-img']">
          <nuxt-link :to="{ name: 'detail-id', params: { id: itemData._id } }">
            <img :src="itemData.pic" alt="推荐" />
          </nuxt-link>
        </el-col>
        <el-col :span="18" :class="$style['list-box']">
          <nuxt-link
            :class="$style.title"
            :to="{ name: 'detail-id', params: { id: itemData._id } }"
            >{{ itemData.title }}</nuxt-link
          >
          <p :class="$style.auxiliary">
            {{ moment(itemData.createdAt).format('YYYY-MM-DD') }}
            阅读：{{ itemData.pv }}
          </p>
        </el-col>
      </el-row>
      <p :class="[$style.auxiliary, $style.describe]">
        {{ itemData.describe }}
      </p>
    </div>
  </div>
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
  }
}
</script>

<style lang="scss" module>
.periodical {
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
}
</style>
