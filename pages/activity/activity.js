// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [

      '../../assets/images/banner/banner3.jpeg',
      '../../assets/images/banner/banner4.jpeg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000,
    searchValue: '',
    activitiesData: [
      {
        previewUrl: '../../assets/images/banner/banner1.jpeg',
        title: '深度工作：如何有效使用每一点脑力',
        sponsor: 'Allen周嘉炜',
        address: '浙江省杭州市西湖区湖滨银泰49号海底捞',
        date: '2019.1.10',
        person: [
          {
            imgUrl: '',
            name: 'Allen周嘉炜',
            id: ''
          },
          {
            imgUrl: '',
            name: '赵海豪',
            id: ''
          },
          {
            imgUrl: '',
            name: '二爷',
            id: ''
          },
          {
            imgUrl: '',
            name: '二爷',
            id: ''
          }
        ]
      },
      {
        previewUrl: '../../assets/images/banner/banner2.jpeg',
        title: '努力工作：如何有效使用每一点脑力',
        sponsor: 'Allen周嘉炜',
        address: '浙江省杭州市西湖区湖滨银泰49号海底捞',
        date: '2019.1.10',
        person: [
          {
            imgUrl: '',
            name: 'Allen周嘉炜',
            id: ''
          }
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initActivityPersonWord()

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
   * 生成 activity-person 文案
   */
  initActivityPersonWord: function () {
    let that = this
    this.data.activitiesData.forEach((ele, index) => {
      if (ele.person.length <= 1) {
        ele.personWord = '还没有好友参与呢，去分享你的活动吧'
      } else {
        let personWord = ''
        ele.person.forEach((_ele, _index) => {
          if (_index < 2) {
            personWord += _ele.name + '、'
          }
        })
        ele.personWord = personWord.substring(0, personWord.length - 1) + '等' + ele.person.length + '位好友参与中'
      }
      that.setData({
        activitiesData: that.data.activitiesData
      })
    })
    console.log(this.data.activitiesData)
  },

  /**
   * 跳转到活动详情页
   */
  pageToActivityDetail: function (evt) {
    console.log(evt.currentTarget.dataset.index)
    wx.navigateTo({
      url: '/pages/activityDetail/activityDetail'
    })
  },

  /**
   * 跳转到发起活动页
   */
  createActivity: function () {
    wx.switchTab({
      url: '/pages/createActivity/createActivity'
    })
  }
})