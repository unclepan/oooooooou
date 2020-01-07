<template>
  <div :class="$style.header">
    <search ref="search" />

    <div :class="$style.logo">
      <nuxt-link to="/">
        <img src="~/assets/images/logo.png" alt="logo" />
      </nuxt-link>
    </div>

    <el-row :class="$style['nav-box']">
      <el-col :span="4">
        <el-button @click="$refs.search.open()" size="mini" round>
          <i class="el-icon-search"></i>
          <span>click to search...</span>
        </el-button>
      </el-col>

      <el-col :span="16">
        <div :class="$style['nav']">
          <nuxt-link
            :class="$style['nav-link']"
            v-for="(item, index) in navList"
            :key="index"
            to="/"
          >
            {{ item.zh }}
          </nuxt-link>
        </div>
      </el-col>

      <el-col :span="4" :class="$style.right">
        <el-badge :value="12">
          <i class="el-icon-message-solid"></i>
        </el-badge>
        <span :class="$style.problem">问题反馈</span>
        <el-dropdown placement="bottom">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          >
          </el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-user">
              我的主页
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-setting">
              设置
            </el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button">
              登出
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import search from './search'
export default {
  components: {
    search
  },
  data() {
    return {
      navList: [
        { zh: '首页', en: 'Home', link: '/' },
        { zh: '话题', en: 'Topic', link: '/' },
        { zh: '发现', en: 'Find', link: '/' },
        { zh: '关于', en: 'About', link: '/' }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" module>
.header {
  padding-bottom: 20px;
  border-top: 5px solid #3c3b4a;
  .logo {
    width: 980px;
    margin: 30px auto 28px;
    img {
      display: block;
      margin: 0 auto;
      width: 120px;
    }
  }
}
.nav-box {
  width: 980px;
  margin: 0 auto;
  padding: 0 10px;
  .nav {
    display: flex;
    justify-content: center;
    .nav-link {
      padding: 0 20px;
      color: #3c3b4a;
      font-size: 14px;
      line-height: 31px;
    }
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .problem {
      padding: 0 20px;
      color: #3c3b4a;
      font-size: 14px;
    }
  }
}
</style>
