import regeneratorRuntime from '../libs/regenerator-runtime/runtime-module'
import { baseUrl } from '../config/apiOpt'
/**
 * 微信 request 请求封装
 * @param {object} opt - 请求配置对象
 *  method - 请求防范
 *  url - 请求路径
 *  data - 请求参数
 */
const wxRequest = async (opt = {}) => {
  Object.assign(opt, {
    token: wx.getStorageSync('token'),
  })

  // 请求头携带 token
  let header = opt.header || {
    'Content-Type': 'application/json',
    token: opt.token || '',
  }

  let url = baseUrl + opt.url
  let data = opt.data || {}
  let method = opt.method ? opt.method.toUpperCase() : 'GET'

  // 全局 loading
  if (opt.noLoading) {
    wx.showLoading({
      title: '加载中...',
    })
  }

  // 请求包装成 Promise
  let res = await new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header,
      success: (res) => {
        if (res && res.statusCode.toString().startsWith('2')) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      fail: (err) => {
        reject(err)
      },
      complete: (e) => {
        wx.hideLoading()
      },
    })
  })

  return res
}

export default wxRequest
