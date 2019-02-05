// pages/city/city.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityMsg: {
      name: '全国',
      id: 99,
      sign: 'china'
    },
    cityOption: [
      { id: 1, name: '北京', sign: 'beijing' },
      { id: 2, name: '上海', sign: 'shanghai' },
      { id: 3, name: '广州', sign: 'guangzhou' },
      { id: 4, name: '杭州', sign: 'hangzhou' },
      { id: 5, name: '深圳', sign: 'shenzhen' },
      { id: 6, name: '南京', sign: 'nanjing' },
      { id: 99, name: '全国', sign: 'china' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let currentCityMsg = wx.getStorage({
      key: 'cityMsg',
      success: function (res) {
        that.setData({
          cityMsg: res.data
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
   * 活动城市选择
   */
  selectCity: function (evt) {
    let cityId = evt.target.dataset.id
    let citySign = evt.target.dataset.sign
    let cityName = evt.target.dataset.name

    let currentCityMsg = this.data.cityOption
      .find(el => el.id === cityId)

    this.setData({
      cityMsg: currentCityMsg
    })

    wx.setStorage({
      key: 'cityMsg',
      data: currentCityMsg,
      success: function () {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    })
  }
})