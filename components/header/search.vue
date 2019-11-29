<template>
  <div :class="$style.search" v-if="searchShowBox" @click="close">
    <transition name="search-fade">
      <div :class="$style['nav-search-form']" v-if="searchShowInner">
        <el-input
          v-model="sreachInfo"
          placeholder="请输入内容"
          class="input-with-select"
        >
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>

        <ul v-if="sreachList.length" :class="$style['search-info-list']">
          <li v-for="(item, index) in sreachList" :key="index">
            <nuxt-link to="/">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  // props: {
  //   searchShow: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      searchShowBox: false,
      searchShowInner: false,
      sreachInfo: '',
      sreachList: [
        { title: '1' },
        { title: '2' },
        { title: '3' },
        { title: '4' }
      ]
    }
  },
  watch: {},
  methods: {
    open() {
      this.searchShowBox = true
      setTimeout(() => {
        this.searchShowInner = true
      }, 0)
    },
    close(e) {
      if (e.target.className === this.$style.search) {
        this.searchShowInner = false
        this.searchShowBox = false
      }
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
