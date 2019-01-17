
// pages/createActivity/createActivity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/images/banner/banner1.jpeg',
      '../../assets/images/banner/banner2.jpeg',
      '../../assets/images/banner/banner3.jpeg',
      '../../assets/images/banner/banner4.jpeg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    isDateShow: false,
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: new Date().getTime(),
    activityFormData: {
      previewUrl: '',
      title: '',
      sponsor: '',
      keyword: '',
      desc: '',
      address: '',
      date: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 改变活动底图
   */
  changeActivityImg: function (event) {
    this.data.activityFormData.previewUrl = this.data.imgUrls[event.detail.current]
    console.log(this.data.activityFormData.previewUrl)
  },

  /**
   * 时间切换
   */
  onDateChange: function (event) {
    this.data.activityFormData.date = event.detail.value
    console.log(this.data.activityFormData)
  },

  /**
   * 唤起时间选择器
   */
  onDateBoxShow: function () {
    this.setData({
      isDateShow: !this.data.isDateShow
    })
  }
})