<template>
  <div :class="$style.topic">
    <el-row :gutter="20">
      <el-col :span="17">
        <answers :questionIdTitle="true" :reqData="reqData" />
      </el-col>
      <el-col :span="7">
        <side />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import answers from '~/components/topic/answers'
import side from '~/components/topic/side/index'

export default {
  components: {
    answers,
    side
  },
  data() {
    return {
      reqData: {
        method: 'get',
        url: '/api/answers/popular',
        params: {
          page: 1,
          per_page: 10
        }
      }
    }
  },
  head() {
    return {
      title: '话题'
    }
  }
}
</script>
<style lang="scss" module>
.topic {
  width: 1024px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
