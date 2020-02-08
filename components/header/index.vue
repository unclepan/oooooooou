<template>
  <div :class="$style.header">
    <search ref="search" />
    <div :class="$style.logo">
      <nuxt-link to="/">
        <img src="~/assets/images/logo-02.png" alt="logo" />
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
            :to="item.link"
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
        <el-dropdown @command="handlerDropdownMenu" placement="bottom">
          <el-avatar icon="el-icon-user-solid" size="small"> </el-avatar>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="user" icon="el-icon-user">
              个人中心
            </el-dropdown-item>
            <el-dropdown-item command="logout" icon="el-icon-switch-button">
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
        { zh: '话题', en: 'Topic', link: '/topic' },
        // { zh: '发现', en: 'Find', link: '/find' },
        { zh: '关于', en: 'About', link: '/about' }
      ]
    }
  },
  methods: {
    handlerDropdownMenu(val) {
      if (val === 'logout') {
        this.logout()
      } else if (val === 'user') {
        this.handlerUser()
      }
    },
    logout() {
      this.$axios({
        method: 'post',
        url: '/api/users/logout'
      }).then((res) => {
        localStorage.removeItem('userToken')
        this.$router.push({ path: '/login' })
      })
    },
    handlerUser() {
      this.$router.push({ name: 'user-id', params: { id: '123478' } })
    }
  }
}
</script>

<style lang="scss" module>
.header {
  padding-bottom: 20px;
  border-top: 5px solid #3c3b4a;
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  .logo {
    width: 1024px;
    margin: 30px auto 28px;
    img {
      display: block;
      margin: 0 auto;
      width: 120px;
    }
  }
}
.nav-box {
  width: 1024px;
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
