<template>
  <div>
    <el-card shadow="hover">
      <classification />
    </el-card>

    <strip-title>
      <span slot="default">期刊推荐</span>
    </strip-title>
    <recommend-card />

    <strip-title>
      <span slot="default">问题推荐</span>
    </strip-title>

    <recommend-questions />
  </div>
</template>

<script>
import stripTitle from '../../strip-title'
import recommendCard from '../../recommend-card'
import recommendQuestions from './recommend-questions'
import classification from '~/components/classification'
export default {
  components: {
    classification,
    stripTitle,
    recommendCard,
    recommendQuestions
  },
  // props: {
  //   popularList: {
  //     type: Array,
  //     default: () => {
  //       return []
  //     }
  //   }
  // },
  data() {
    return {}
  },

  methods: {}
}
</script>
