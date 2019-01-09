
// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    historyData: [
      {
        name: '中国杭州123',
        isShow: false
      },
      {
        name: '麻将',
        isShow: false
      },
      {
        name: 'China',
        isShow: false
      },
      {
        name: '旅游',
        isShow: false
      },
      {
        name: '酒吧聚会',
        isShow: false
      },
      {
        name: '很爽啊',
        isShow: false
      },
      {
        name: '呵呵',
        isShow: false
      },
      {
        name: '哈哈这就是我',
        isShow: false
      }
    ]
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
   * 长按历史搜索项唤出删除
   */
  showDeleteBtn: function (evt) {
    const cur = evt.target.dataset.index
    this.resetHistoryData()
    this.data.historyData[cur].isShow = true
    this.setData({
      'historyData': this.data.historyData
    })
  },

  /**
   * 删除当前项
   */
  deleteHostoryItem: function (evt) {
    const cur = evt.target.dataset.index
    this.data.historyData.splice(cur, 1)
    this.setData({
      'historyData': this.data.historyData
    })
  },

  /**
   * 清除所有历史搜索
   */
  clearAllHistory: function () {
    this.data.historyData = []
    this.setData({
      'historyData': this.data.historyData
    })
  },

  /**
   * 循环所有历史数据，重置 isShow
   */
  resetHistoryData: function () {
    this.data.historyData.forEach((ele, index, array) => {
      ele.isShow = false
    })
    this.setData({
      'historyData': this.data.historyData
    })
  }
})