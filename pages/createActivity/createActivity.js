
// pages/createActivity/createActivity.js
import formatDateTime from '../../utils/dateTime'
import Notify from '../../miniprogram_npm/vant-weapp/notify/notify'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: null,
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
      sponsor: '自己',
      keyword: '',
      desc: '这是马克小程序',
      address: '',
      date: ''
    },
    defaultPreview: '../../assets/images/banner/banner4.jpeg',
    isCreating: false,
    isSwiperShow: false
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
    this.data.activityFormData.previewUrl =
      this.data.imgUrls[0]
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

  showPreviewSwiper: function () {
    this.setData({
      isSwiperShow: true
    })
    this.changeActivityImg()
  },

  /**
   * 改变活动底图
   */
  changeActivityImg: function (event) {
    this.data.activityFormData.previewUrl =
      !event
        ? this.data.imgUrls[0]
        : this.data.imgUrls[event.detail.current]
  },

  /**
   * 确认活动时间
   */
  onDateConfirm: function (event) {
    // const date = new Date(event.detail)
    this.data.activityFormData.date = formatDateTime(event.detail)

    this.setData({
      activityFormData: this.data.activityFormData
    })
    this.onDateBoxShow()
  },

  onDateCancel: function () {
    this.onDateBoxShow()
  },

  /**
   * 唤起时间选择器
   */
  onDateBoxShow: function () {
    this.setData({
      isDateShow: !this.data.isDateShow
    })
  },

  /**
   * fild 输入框形式的触发事件
   */
  onChange: function (event) {
    const that = this
    clearTimeout(that.data.time)

    that.data.time = setTimeout(() => {
      that.data.activityFormData[event.currentTarget.dataset.key] =
        event.detail
    }, 300)
  },

  /**
   * 生成活动
   */
  createActivityEvent: function () {
    // 是否存在必填项未填
    if (!this.checkFiledEmpty()) {
      Notify({
        text: '请将活动内容填写完整',
        duration: 1000,
        selector: '#create-selector',
        backgroundColor: '#f15a22'
      })
    } else {
      if (!this.data.isCreating) {
        this.setData({
          isCreating: true
        })
        this.setData({
          activityFormData: this.data.activityFormData
        })
        // 模拟 3s 后结束
        setTimeout(() => {
          this.setData({
            isCreating: false
          })
          Notify({
            text: '活动已生成，去分享给好友吧',
            duration: 1000,
            selector: '#create-selector',
            backgroundColor: '#a061ff'
          })
        }, 3000)
      }
    }
  },

  checkFiledEmpty: function () {
    let isNoEmpty = true
    let formdata = this.data.activityFormData
    for (let key in formdata) {
      if (formdata[key] === '') {
        isNoEmpty = false
      }
    }
    return isNoEmpty
  },

  /**
   * 轮播背景区域取消按钮事件
   */
  cancelEvent: function () {
    this.setData({
      isSwiperShow: false
    })
  },

  /**
   * 轮播背景区域确认按钮事件
   */
  comfirmEvent: function () {
    // 背景图生效
    this.setData({
      defaultPreview: this.data.activityFormData.previewUrl || this.imgUrls[0]
    })
    this.cancelEvent()
  }
})