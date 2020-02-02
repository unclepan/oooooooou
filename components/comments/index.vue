<template>
  <el-card :class="$style.card" shadow="hover">
    <item
      :commentItem="commentItem"
      @reply="reply"
      @discussMore="discussMore"
    />
  </el-card>
</template>

<script>
import item from './item'
export default {
  components: {
    item
  },
  props: {
    commentItem: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    reply(val) {
      this.$emit('reply', val)
    },
    discussMore(val) {
      this.$emit('discussMore', val)
    }
  }
}
</script>
<style lang="scss" module>
.card {
  margin-bottom: 16px;
}
</style>
