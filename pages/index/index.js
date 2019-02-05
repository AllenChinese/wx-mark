// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    skin: 'normal_skin',
    cityMsg: null,
    isBackTopShow: false,
    imgUrls: [
      '../../assets/images/banner/banner1.jpeg',
      '../../assets/images/banner/banner2.jpeg',
      '../../assets/images/banner/banner3.jpeg',
      '../../assets/images/banner/banner4.jpeg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    searchValue: '',
    classList: [
      {
        title: '程序员活动',
        type: 'c_1',
        total: 1000,
        preview: '../../assets/images/banner/banner2.jpeg'
      },
      {
        title: '酒吧',
        type: 'c_2',
        total: 100000,
        preview: '../../assets/images/banner/banner2.jpeg'
      },
      {
        title: '运动会',
        type: 'c_3',
        total: 2800,
        preview: '../../assets/images/banner/banner2.jpeg'
      },
      {
        title: '美食嘉年华',
        type: 'c_4',
        total: 1908,
        preview: '../../assets/images/banner/banner2.jpeg'
      }
    ]
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
    let that = this
    wx.setStorage({
      key: 'dataless',
      data: false
    })
    wx.getStorage({
      key: 'cityMsg',
      success: function (res) {
        that.setData({
          cityMsg: res.data
        })
        console.log(that.data.cityMsg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.setStorage({
      key: 'dataless',
      data: false
    })
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
    const that = this
    wx.getStorage({
      key: 'dataless',
      success: function (res) {
        if (!res.data) {
          that.loadMore()
        }
      }
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 1、监听页面滚动条事件，控制 backTop 控件显示、隐藏
   * 2、监听上拉加载更多事件
   * @param Option {Object} - 滚动时信息
   */
  onPageScroll: function (Option) {
    this.backTopListener(Option)
  },

  // 监听页面滚动条事件
  backTopListener: function (Option) {
    const backTopThreshold = 630
    if (Option.scrollTop >= backTopThreshold
      && this.data.isBackTopShow === false
    ) {
      this.setData({
        isBackTopShow: true
      })
    } else if (Option.scrollTop < backTopThreshold
      && this.data.isBackTopShow === true) {
      this.setData({
        isBackTopShow: false
      })
    } else {
      return false
    }
  },

  loadMore: function () {
    this.selectComponent('#allListComponent').nextPage({
      type: 'index'
    })
  },

  /**
   * 调转到城市选择
   */
  pageToCity: function () {
    wx.navigateTo({
      url: '/pages/city/city'
    })
  },

  /**
   * 搜索活动事件
   */
  pageToSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  /**
   * 人气榜 to 活动列表
   */
  pageToActivityList: function (event) {
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
})