<template>
  <div :class="$style['page-register']">
    <article :class="$style.header">
      <header>
        <nuxt-link :class="$style['site-logo']" to="/" />
        <span :class="$style.login">
          <em :class="$style.bold">已有账号？{{ timerid }}</em>
          <nuxt-link to="/login">
            <el-button type="primary" size="mini">登录</el-button>
          </nuxt-link>
        </span>
      </header>
    </article>

    <section>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        label-width="80px"
      >
        <el-form-item label="昵称" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" />
          <el-button @click="sendMsg" size="mini" round>发送验证码</el-button>
          <span :class="$style.status">{{ statusMsg }}</span>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="ruleForm.code" maxlength="4" />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="cpwd">
          <el-input v-model="ruleForm.cpwd" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button @click="register" type="primary">
            同意以下协议并注册
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-link :underline="false">
            <i class="el-icon-view el-icon--right"></i>
            ANTCP网用户协议
          </el-link>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
export default {
  data() {
    return {
      timerid: null,
      statusMsg: '',
      ruleForm: {
        name: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: '创建昵称',
            trigger: 'blur'
          },
          {
            validator: async (rule, value, callback) => {
              if (!value) {
                callback(new Error('昵称不能为空'))
              }
              const isUser = await this.$axios({
                method: 'get',
                url: '/api/users/fund/name',
                params: {
                  name: value
                }
              })
              if (isUser.data) {
                callback(new Error('昵称已经被占用'))
              }
            },
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            type: 'email',
            message: '请输入正确邮箱',
            trigger: 'blur'
          }
        ],
        pwd: [
          {
            required: true,
            message: '创建密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请输入密码'))
              } else {
                if (this.ruleForm.cpwd !== '') {
                  this.$refs.ruleForm.validateField('cpwd')
                }
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        cpwd: [
          {
            required: true,
            message: '确认密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'))
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error('两次输入密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  layout: 'blank',
  head() {
    return {
      title: '注册'
    }
  },
  methods: {
    sendMsg() {
      const self = this
      let namePass
      let emailPass
      if (self.timerid) {
        return false
      }
      this.$refs.ruleForm.validateField('name', (valid) => {
        namePass = valid
      })
      self.statusMsg = ''
      if (namePass) {
        return false
      }
      this.$refs.ruleForm.validateField('email', (valid) => {
        emailPass = valid
      })
      if (!namePass && !emailPass) {
        self.$axios
          .post('/api/users/verify', {
            name: self.ruleForm.name,
            email: self.ruleForm.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60
              self.statusMsg = `验证码已发送,剩余${count--}秒`
              self.timerid = setInterval(function() {
                self.statusMsg = `验证码已发送,剩余${count--}秒`
                if (count === 0) {
                  clearInterval(self.timerid)
                  self.timerid = null
                  self.statusMsg = ''
                }
              }, 1000)
            } else {
              self.statusMsg = data.msg
            }
          })
      }
    },
    register() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$axios({
            method: 'post',
            url: '/api/users',
            data: {
              name: this.ruleForm.name,
              password: CryptoJS.MD5(this.ruleForm.pwd).toString(),
              email: this.ruleForm.email,
              code: this.ruleForm.code
            }
          }).then((res) => {
            this.$router.push({ path: '/login' })
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" module>
.page-register {
  .header {
    border: 1px solid #ebeef5;
    min-width: 980px;
    color: #666666;
    header {
      margin: 0 auto;
      padding: 10px 0;
      width: 980px;

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

  > section {
    margin: 0 auto 30px;
    padding-top: 30px;
    width: 980px;
    min-height: 300px;
    padding-right: 550px;
    box-sizing: border-box;
    .status {
      font-size: 12px;
      margin-left: 20px;
      color: #e6a23c;
    }
  }
}
</style>
