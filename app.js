// app.js
import regeneratorRuntime from './libs/regenerator-runtime/runtime-module'
import { onGetToken, saveUserInfo } from './http/apis/common'
App({
  onLaunch: function() {
    this.setLogSync()

    wx.login({
      success: (res) => {
        if (res.code) {
          this.globalData.code = res.code
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      },
    })

    // 获取用户信息
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: async (res) => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(this.globalData.userInfo)
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              if (wx.getStorageSync('token')) {
                this.registerUser()
              } else {
                this.onGetTokenRes()
              }
            },
          })
        }
      },
    })
  },

  registerUser: async function() {
    await saveUserInfo({
      ...this.globalData.userInfo,
    })
  },

  onGetTokenRes: async function() {
    let onGetTokenRes = await onGetToken({
      account: this.globalData.code,
      type: 100,
    })
    if (onGetTokenRes.success) {
      wx.setStorageSync('token', onGetTokenRes.data.token)
      this.registerUser()
    }
  },

  setLogSync: function() {
    // 展示本地缓存能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },

  globalData: {
    userInfo: null,
    skin: 'normal_skin', // 主题色配置
    city: 'china', // 全国
  },
})
