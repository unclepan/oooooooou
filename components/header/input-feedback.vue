<template>
  <el-dialog :visible.sync="dialogVisible" title="问题反馈" width="680px">
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules">
      <el-form-item prop="textarea">
        <el-input
          :rows="5"
          v-model="ruleForm.textarea"
          type="textarea"
          placeholder="请输入问题"
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
            message: '请输入问题',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    open() {
      this.ruleForm.textarea = ''
      this.dialogVisible = true
    },
    determine() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const obj = { content: this.ruleForm.textarea }
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
