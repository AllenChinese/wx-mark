// pages/me/me.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    skin: 'normal_skin',
    me: {
      name: '梧桐小七',
      saying: '人生如逆旅，我亦是行人。',
      isChecked: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'skin',
      success: function (res) {
        that.setData({
          skin: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 验证 token
  */
  onVerifyToken: function () {
    wx.request({
      url: 'http://localhost:3001/v1/token/verify',
      method: 'POST',
      data: {
        token: wx.getStorageSync('token')
      },
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 签到事件
   */
  checkInClick: function () {
    if (!this.data.me.isChecked) {
      // 发送请求
      // 加积分
      this.data.me.isChecked = true
      this.setData({
        me: this.data.me
      })
    }
  },

  goToPage: function (event) {
    console.log(event.currentTarget.dataset.url)
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    })
  },

  goToActivityListPage: function (event) {
    // save in storage
    let Class = {
      c_type: event.currentTarget.dataset.type,
      c_title: event.currentTarget.dataset.title
    }
    wx.setStorage({
      key: 'Class',
      data: Class,
      success: function () {
        wx.navigateTo({
          url: "/pages/activityList/activityList"
        })
      },
      fail: function () {
        // 接口调用失败
      }
    })
  }

  /**
   * 主题色切换
   */
  // themeSelect: function () {
  //   app.globalData.skin = 'dark_skin'

  //   this.setData({
  //     skin: app.globalData.skin
  //   })
  //   wx.setStorage({
  //     key: 'skin',
  //     data: app.globalData.skin
  //   })
  // }
})