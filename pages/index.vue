<template>
  <div :class="$style.index">
    <carousel />
    <div :class="$style.container">
      <el-row :gutter="20">
        <el-col :span="16">
          <classification />
          <card v-for="item in 5" :key="item" />
        </el-col>

        <el-col :span="8">
          <recommend />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import carousel from '~/components/carousel'
import classification from '~/components/classification'
import card from '~/components/card'
import recommend from '~/components/recommend/index'

export default {
  components: {
    carousel,
    classification,
    card,
    recommend
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

<style lang="scss" module>
.index {
  .container {
    width: 980px;
    margin: 0 auto;
    padding: 30px 0;
  }
}
</style>
