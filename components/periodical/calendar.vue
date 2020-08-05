<template>
  <div :class="$style.calendar">
    <div :class="$style.line">
      <div v-for="(item, index) in 5" :key="index"></div>
    </div>
    <p :class="$style.time">{{ time }}</p>
    <p :class="$style.year">{{ year }}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  components: {},
  props: {
    createdAt: {
      type: String,
      default: () => {
        return `${new Date()}`
      }
    }
  },
  data() {
    return {
      time: moment(new Date(this.createdAt)).format('DD'),
      year: moment(new Date(this.createdAt)).format('YYYY年MM月')
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" module>
.calendar {
  text-align: center;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  .line {
    display: flex;
    div {
      height: 10px;
      background: #3c3b4a;
      flex-grow: 1;
    }
    div:nth-of-type(4) {
      background: #409eff;
    }
  }
  .time {
    font-size: 42px;
    line-height: 0;
    font-weight: bold;
  }
  .year {
    font-size: 12px;
    color: #aaaaaa;
  }
}
</style>
