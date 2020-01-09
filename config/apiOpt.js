import env from './env'

const PRODUCT_URL = `//mark.ac.cn/client/`
const DEVELOP_URL = `//mark.ac.net/client/`
const LOCAL_URL = `http://localhost:3001/`

let isLocal = env === 'development'
let baseUrl = ''

// 本地开发
if (env === 'development') {
  baseUrl = LOCAL_URL
} else {
  // 测试环境
  // 线上环境
}

export {
  isLocal,
  baseUrl
}

