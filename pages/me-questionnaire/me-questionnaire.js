import Notify from '../../miniprogram_npm/vant-weapp/notify/notify';
// pages/me-q/me-q.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: null,
    isLoading: false,
    formdata: {
      render: '1',
      age: '',
      where: '',
      frequency: '',
      newFun: '',
      mind: ''
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
   * 单选框形式的触发事件
   */
  onClick: function (event) {
    this.data.formdata[event.currentTarget.dataset.key] = event.currentTarget.dataset.name
    this.setData({
      formdata: this.data.formdata
    })
  },

  /**
   * fild 输入框形式的触发事件
   */
  onChange: function (event) {
    clearTimeout(this.data.time)
    const that = this

    that.data.time = setTimeout(() => {
      that.data.formdata[event.currentTarget.dataset.key] = event.detail
      that.setData({
        formdata: that.data.formdata
      })
    }, 300)
  },

  /**
   * 表单提交
   */
  submitEvent: function () {
    console.log(this.data.formdata)
    this.data.isLoading
    this.setData({
      isLoading: true
    })
    setTimeout(() => {
      this.setData({
        isLoading: false
      })
      Notify({
        text: '提交成功，感谢您的参与',
        duration: 1000,
        selector: '#custom-selector',
        backgroundColor: '#a061ff'
      })
    }, 2000)
  }
})