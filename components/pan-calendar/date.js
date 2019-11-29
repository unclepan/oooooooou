export function getMonthData(year, month) {
  const ret = []
  if (!year || !month) {
    // 没有传入年份和月份，默认以当前年月
    const today = new Date()
    year = today.getFullYear()
    month = today.getMonth() + 1
  }
  const firstDay = new Date(year, month - 1, 1) // 这个月的第一天
  let firstDayWeekDay = firstDay.getDay() // 这个月的第一天是在星期几
  if (firstDayWeekDay === 0) firstDayWeekDay = 7

  year = firstDay.getFullYear()
  month = firstDay.getMonth() + 1

  const lastDayOfLastMonth = new Date(year, month - 1, 0) // 上个月的最后一天
  const lastDateOfLastMonth = lastDayOfLastMonth.getDate() // 上个月最后一天的日期单独存储

  const preMonthDayCount = firstDayWeekDay - 1 // 第一行需要展示上个月几天

  const lastDay = new Date(year, month, 0) // 这个月的最后一天
  const lastDate = lastDay.getDate()

  for (let i = 0; i < 7 * 6; i++) {
    // 通过循环得到这一个月的数据
    const date = i + 1 - preMonthDayCount
    let showDate = date
    let thisMonth = month
    if (date <= 0) {
      // 上个月
      thisMonth = month - 1
      showDate = lastDateOfLastMonth + date
    } else if (date > lastDate) {
      // 下个月
      thisMonth = month + 1
      showDate -= lastDate
    }
    if (thisMonth === 0) thisMonth = 12
    if (thisMonth === 13) thisMonth = 1

    ret.push({
      month: thisMonth,
      date,
      showDate
    })
  }
  return {
    year,
    month,
    days: ret
  }
}

export function format(date) {
  let ret = ''
  const padding = (num) => {
    if (num <= 9) {
      return `0${num}`
    }
    return num
  }
  ret += `${date.getFullYear()}-`
  ret += `${padding(date.getMonth() + 1)}-`
  ret += padding(date.getDate())
  return ret
}
