<template>
  <div :class="$style['cal-wrapper']">
    <div :class="$style['cal-header']">
      <i @click="preMonth" class="el-icon-arrow-left"></i>
      <div :class="$style.title">{{ year + '年' + month + '月' }}</div>
      <i @click="nextMonth" class="el-icon-arrow-right"></i>
    </div>

    <div :class="$style['cal-body']">
      <div :class="$style.weeks">
        <span
          v-for="(dayName, index) in dayNames"
          :key="index"
          :class="$style.item"
        >
          {{ dayName }}
        </span>
      </div>

      <div :class="$style.dates">
        <div v-for="(item, index) in dayList" :key="index" :class="$style.item">
          <p
            :class="{
              [$style.nonCurrentMonth]: item.showDate !== item.date,
              [$style['date-num']]: true
            }"
            @click="handleChangeCurday(item)"
          >
            <span
              :class="{
                [$style['is-today']]: today === item.format,
                [$style['is-event']]: selectedDay === item.format,
                [$style['is-tip']]:
                  tip.length && tip.find((t) => t === item.format)
              }"
              >{{ item.showDate }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMonthData, format } from './date'

const dateObj = new Date()
export default {
  props: {
    tip: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      selectedDay: format(dateObj), // 选中某天
      dayList: [], // 日期
      dayNames: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'], // 周
      year: '', // 当前年
      month: '' // 当前月
    }
  },
  computed: {
    today() {
      return format(dateObj) // 今天
    }
  },
  mounted() {
    this.metDatList()
  },
  methods: {
    metDatList(year, month) {
      const data = getMonthData(year, month)
      const list = data.days.map((item) => {
        const a = new Date(data.year, data.month - 1, item.date)
        const b = format(a)
        return { format: b, ...item }
      })
      this.year = data.year
      this.month = data.month
      this.dayList = list
    },
    preMonth() {
      let year = this.year
      let month
      month = this.month - 1
      if (month === 0) {
        month = 12
        year--
      }
      this.metDatList(year, month)
      let changeMonth = new Date(this.year, this.month - 1, 1)
      changeMonth = format(changeMonth)
      this.$emit('month-changed', changeMonth)
    },
    nextMonth() {
      const year = this.year
      const month = this.month + 1
      this.metDatList(year, month)
      let changeMonth = new Date(this.year, this.month - 1, 1)
      changeMonth = format(changeMonth)
      this.$emit('month-changed', changeMonth)
    },
    handleChangeCurday(date) {
      const changeDate = new Date(this.year, this.month - 1, date.date)
      this.selectedDay = format(changeDate)
      this.$emit('cur-day-changed', this.selectedDay)
    }
  }
}
</script>

<style lang="scss" module>
.cal-wrapper {
  color: #3c3b4a;
  border: 1px solid #ebeef5;
  border-radius: 5px;
  background: #ffffff;
  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .cal-header {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    .title {
      padding: 5px;
      width: 60%;
      text-align: center;
      font-size: 13px;
    }
  }
  .cal-body {
    width: 100%;
    .weeks {
      display: flex;
      padding: 0 10px;
      .item {
        text-align: center;
        line-height: 40px;
        font-size: 13px;
        color: #3c3b4a;
        flex-grow: 1;
      }
    }
    .dates {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .item {
        min-width: 14.285%;
        flex-grow: 1;
        .date-num {
          line-height: 26px;
          font-size: 13px;
          color: #3c3b4a;
          cursor: pointer;
          padding: 0;
          span {
            margin: 0 auto;
            text-align: center;
            border-radius: 50%;
            width: 26px;
            height: 26px;
            display: block;
          }
          .is-today {
            border: 1px solid #cccccc;
          }
          .is-event {
            background-color: #409eff;
            border: none;
            color: #ffffff;
          }
          .is-tip {
            background-color: #f56c6c;
            border: none;
            color: #ffffff;
          }
        }
        .nonCurrentMonth {
          color: #cccccc;
        }
      }
    }
  }
}
</style>
