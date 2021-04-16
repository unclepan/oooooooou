<template>
  <div :class="$style['page-login']">
    <simple-header>
      <span :style="{ fontSize: '14px' }">没有账号？</span>
      <nuxt-link to="/register">
        <el-button type="primary" size="mini">注册</el-button>
      </nuxt-link>
    </simple-header>

    <section>
      <div :class="$style.main">
        <div :class="$style.banner">
          <p>MAN PROPOSES</p>
        </div>
        <div :class="$style.form">
          <h3>SIGN IN TO UOOOOOOOO</h3>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            :rules="rules"
            label-position="left"
            label-width="70px"
          >
            <el-form-item label="昵称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" type="password" />
            </el-form-item>

            <el-form-item label="验证码" prop="sidentify">
              <el-col :span="16">
                <el-input v-model="ruleForm.sidentify" placeholder="验证码">
                </el-input>
              </el-col>
              <el-col :span="8">
                <div @click="init" :class="$style.sidentify">
                  <sidentify :identifyCode="identifyCode" />
                </div>
              </el-col>
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
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import sidentify from '~/components/sidentify'
import simpleHeader from '~/components/header/simple'
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  components: {
    sidentify,
    simpleHeader
  },
  data() {
    return {
      identifyCode: '1234',
      checked: false,
      ruleForm: {
        name: '',
        password: '',
        sidentify: ''
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
        ],
        sidentify: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'change'
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入验证码'))
              } else {
                if (value !== this.identifyCode) {
                  callback(new Error('验证码错误'))
                }
                callback()
              }
            },
            trigger: 'change'
          }
        ]
      }
    }
  },
  layout: 'blank',
  head() {
    return {
      title: '登陆',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'hi，我是UOOOOOOOO网站的作者杨盼，欢迎登陆UOOOOOOOO'
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // 声明一个strArr数组，存放0-9，26个字母的大小写；
      const strArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      for (let i = 0; i < 26; i++) {
        strArr.push(String.fromCharCode(97 + i)) // String.fromCharCode()方法
        strArr.push(String.fromCharCode(65 + i)) // fromCharCode() 可接受一个指定的 Unicode 值，然后返回一个字符串。
      }
      // 声明一个newArr数组，数组长度固定为4，随机填入4个strArr数组中的数组元素，并写进每个span标签中
      // 昨天写的数组乱序，派上用场了
      const newArr = []
      for (let j = 0; j < 4; j++) {
        const a = Math.floor(Math.random() * strArr.length)
        newArr.push(strArr[a])
        strArr.splice(a, 1)
      }
      this.identifyCode = newArr.join('')
    },
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/api/users/login',
            data: {
              name: this.ruleForm.name,
              password: CryptoJS.MD5(this.ruleForm.password).toString(),
              checked: this.checked
            }
          }).then((res) => {
            const auth = {
              accessToken: res.data.token
            }
            Cookie.set('auth', auth.accessToken)
            location.href = '/'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
.page-login {
  > section {
    margin: 0 auto;
    width: 1024px;
    padding-top: 20px;
    .main {
      background: #ffffff;
      display: flex;
      justify-content: space-between;
      min-height: 520px;
      .banner {
        width: 50%;
        background-image: url('../assets/images/login.jpg');
        background-size: 100%;
        p {
          margin: 0;
          background-color: rgba($color: #95a6d0, $alpha: 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          align-items: center;
          text-align: center;
          color: #ffffff;
          font-size: 40px;
          font-family: BlackItalic;
        }
      }
      .form {
        width: 45%;
        padding: 30px;
        h3 {
          text-align: center;
          padding-left: 70px;
          font-size: 24px;
          color: #95a6d0;
          margin-top: 0;
          font-family: BlackItalic;
        }
        .sidentify {
          text-align: right;
          height: 40px;
          overflow: hidden;
        }
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
}
</style>
