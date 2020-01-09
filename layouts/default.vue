<template>
  <div>
    <el-backtop></el-backtop>
    <b-header />
    <nuxt />
    <b-footer />
  </div>
</template>

<script>
import header from '~/components/header'
import footer from '~/components/footer'

export default {
  components: {
    'b-header': header,
    'b-footer': footer
  },
  data() {
    return {
      userList: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      const res = await this.$axios({
        method: 'get',
        url: '/api/users'
      })
      this.userList = res.data
    }
  }
}
</script>
