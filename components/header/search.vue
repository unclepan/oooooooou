<template>
  <div :class="$style.search" v-if="searchShowBox" @click="close">
    <transition name="search-fade">
      <div :class="$style['nav-search-form']" v-if="searchShowInner">
        <el-input
          @input="search"
          v-model="sreachInfo"
          placeholder="请输入内容"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <template v-if="searchShowInfo">
          <ul v-if="sreachList.length" :class="$style['search-info-list']">
            <li
              v-for="(item, index) in sreachList"
              :key="index"
              @click="navigation(item)"
            >
              <img :class="$style.pic" :src="item.pic" />
              <div :class="$style.text">
                <div :class="$style.title">{{ item.title }}</div>
                <div :class="$style.describe">{{ item.describe }}</div>
              </div>
            </li>
          </ul>
          <div v-else :class="$style['search-info-list']">
            <p :class="$style.info"><i class="el-icon-info"></i> 暂无数据</p>
          </div>
        </template>
      </div>
    </transition>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: () => {},
      searchShowBox: false,
      searchShowInner: false,
      searchShowInfo: false,
      sreachInfo: '',
      sreachList: []
    }
  },
  watch: {},
  created() {
    this.search = _.debounce(this._search, 500)
  },
  methods: {
    open() {
      this.searchShowBox = true
      setTimeout(() => {
        this.searchShowInner = true
        this.searchShowInfo = false
      }, 0)
    },
    close(e) {
      if (e.target.className === this.$style.search) {
        this.searchShowInner = false
        this.searchShowBox = false
      }
    },
    async _search() {
      this.searchShowInfo = true
      const res = await this.$axios({
        method: 'get',
        url: '/api/periodical',
        params: {
          page: 1,
          per_page: 5,
          q: this.sreachInfo
        }
      })
      this.sreachList = res.data
    },
    navigation(item) {
      this.$router.push({ name: 'detail-id', params: { id: item._id } })
      this.searchShowInner = false
      this.searchShowBox = false
      this.sreachInfo = ''
      this.sreachList = []
    }
  }
}
</script>

<style lang="scss" module>
.search {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
  .nav-search-form {
    width: 420px;
    margin: 10% auto 0;
    .search-info-list {
      padding: 10px;
      margin: 6px 0;
      background-color: #ffffff;
      border-radius: 5px;
      list-style-type: none;
      .info {
        text-align: center;
        color: #aaaaaa;
        font-size: 14px;
      }
      li {
        padding: 10px;
        display: flex;
        justify-content: flex-start;
        cursor: pointer;
        &:hover {
          background-color: #e9e9e9;
        }
        .pic {
          width: 80px;
        }
        .text {
          width: 300px;
          padding-left: 10px;
          .title {
            font-size: 16px;
            font-weight: bold;
            color: #3c3b4a;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .describe {
            font-size: 12px;
            padding-top: 5px;
            color: #aaaaaa;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>

<style>
.search-fade-enter-active,
.search-fade-leave-active {
  transition: all 0.4s ease;
}

.search-fade-enter,
.search-fade-leave-active {
  transform: translateY(30px);
  opacity: 0;
}
</style>
