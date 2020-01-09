// app.js
import regeneratorRuntime from './libs/regenerator-runtime/runtime-module'
import { onGetToken } from './http/apis/common'
App({
  onLaunch: function () {
    this.setLogSync()
    // 登录
    wx.login({
      success: async (res) => {
        if (res.code) {
          let onGetTokenRes = await onGetToken({
            account: res.code,
            type: 100
          })
          if (onGetTokenRes.success) {
            wx.setStorageSync('token', onGetTokenRes.data.token)
          }
        }
      }
    })

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  setLogSync: function () {
    // 展示本地缓存能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  globalData: {
    userInfo: null,
    skin: 'normal_skin', // 主题色配置
    city: 'china' // 全国
  }
})