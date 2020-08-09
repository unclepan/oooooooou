<template>
  <div>
    <strip-title>
      <span slot="default">热门期刊</span>
    </strip-title>
    <el-card shadow="never">
      <periodical :popularList="popularList" />
    </el-card>
  </div>
</template>

<script>
import moment from 'moment'
import periodical from '~/components/common/periodical'
import stripTitle from '~/components/strip-title'
export default {
  components: {
    stripTitle,
    periodical
  },
  props: {
    popularList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      moment
    }
  }
}
</script>
