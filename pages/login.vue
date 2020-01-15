<template>
  <div :class="$style['page-login']">
    <article :class="$style.header">
      <header>
        <nuxt-link :class="$style['site-logo']" to="/" />
        <span :class="$style.login">
          <em :class="$style.bold">没有账号？</em>
          <nuxt-link to="/register">
            <el-button type="primary" size="mini">注册</el-button>
          </nuxt-link>
        </span>
      </header>
    </article>

    <div :class="$style['login-panel']">
      <div :class="$style.banner">
        <img
          src="~assets/images/timg.jpg"
          width="480"
          height="370"
          alt="ANTCP"
        />
      </div>
      <div :class="$style.form">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="60px"
        >
          <el-form-item label="昵称" prop="name">
            <el-input v-model="ruleForm.name" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" type="password" />
          </el-form-item>
          <el-form-item>
            <div :class="$style.foot">
              <el-checkbox v-model="checked">7天内自动登录</el-checkbox>
              <b>忘记密码？</b>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button @click="login" :class="$style.btn" type="primary">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data: () => {
    return {
      checked: '',
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '请输入昵称',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  layout: 'blank',
  head() {
    return {
      title: '登陆'
    }
  },
  methods: {
    login() {
      this.$axios({
        method: 'post',
        url: '/api/users/login',
        data: {
          name: this.ruleForm.name,
          password: CryptoJS.MD5(this.ruleForm.password).toString()
        }
      }).then((res) => {
        localStorage.setItem('userToken', res.data.token)
        this.$router.push({ path: '/' })
      })
    }
  }
}
</script>

<style lang="scss" module>
.page-login {
  .header {
    border: 1px solid #ebeef5;
    min-width: 1024px;
    color: #666666;
    header {
      margin: 0 auto;
      padding: 10px 0;
      width: 1024px;
      .site-logo {
        display: inline-block;
        width: 106px;
        height: 29px;
        background-repeat: no-repeat;
        background-image: url('~assets/images/logo.png');
        background-size: 106px 29px;
      }
      .login {
        float: right;
      }
      .bold {
        font-style: normal;
        color: #3c3b4a;
        font-size: 14px;
      }
    }
  }
  .login-panel {
    margin: 0 auto 70px;
    width: 1024px;
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    .form {
      width: 480px;
      .foot {
        display: flex;
        justify-content: space-between;
      }
      .btn {
        width: 100%;
      }
    }
  }
}
</style>
