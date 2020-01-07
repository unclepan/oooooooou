<template>
  <el-dialog
    :visible.sync="dialogVisible"
    title="请在此输入您的评论"
    width="680px"
  >
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-form-item prop="textarea">
        <el-input
          :rows="5"
          v-model="ruleForm.textarea"
          type="textarea"
          placeholder="请输入评论"
        >
        </el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button @click="determine" type="primary">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        textarea: ''
      },
      rules: {
        textarea: [
          {
            required: true,
            message: '请输入评论',
            trigger: 'blur'
          }
        ]
      },
      replyDate: null
    }
  },
  methods: {
    open(val) {
      this.replyDate = val
      this.ruleForm.textarea = ''
      this.dialogVisible = true
    },
    determine() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const obj = { content: this.ruleForm.textarea }
          if (this.replyDate) {
            obj.replyDate = this.replyDate
          }
          this.$emit('determine', obj)
          this.dialogVisible = false
        }
      })
    }
  }
}
</script>
<style lang="scss" module>
.card {
  margin-bottom: 30px;
}
</style>
