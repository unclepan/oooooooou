import bp from './main'

const buryingPoint = bp({
  bury: 3,
  per: false,
  jsErr: true,
  appId: '123849',
  appName: '流程管理',
  level: '1',
  baseUrl: 'https://www.antcp.com:3001/api/bp',
  sendTimeGap: 4000,
  compress: false
})
// 追加外部参数
buryingPoint.external = { userId: 'yangpan', appId: '30903' }

// 开启白名单
// buryingPoint.whiteList.push('0.0.0.0')
