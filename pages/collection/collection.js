Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: true
      },
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: true
      },
      {
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: true
      }
    ]
  },

  /**
   * 生命周期函数——监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数——监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数——监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数——监听页面隐藏
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
   * 显示删除按钮
   */
  showDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex
    this.setXmove(productIndex, -65)
  },

  /**
   * 隐藏删除按钮
   */
  hideDeleteButton: function (e) {
    let productIndex = e.currentTarget.dataset.productindex

    this.setXmove(productIndex, 0)
  },

  /**
   * 设置movable-view位移
   */
  setXmove: function (productIndex, xmove) {
    let listData = this.data.listData
    listData[productIndex].xmove = xmove

    this.setData({
      listData: listData
    })
  },

  /**
   * 处理movable-view移动事件
   */
  handleMovableChange: function (e) {
    if (e.detail.source === 'friction') {
      if (e.detail.x < -30) {
        this.showDeleteButton(e)
      } else {
        this.hideDeleteButton(e)
      }
    } else if (e.detail.source === 'out-of-bounds' && e.detail.x === 0) {
      this.hideDeleteButton(e)
    }
  },

  /**
   * 处理touchstart事件
   */
  handleTouchStart(e) {
    this.startX = e.touches[0].pageX
  },

  /**
   * 处理touchend事件
   */
  handleTouchEnd(e) {
    if (e.changedTouches[0].pageX < this.startX && e.changedTouches[0].pageX - this.startX <= -30) {
      this.showDeleteButton(e)
    } else if (e.changedTouches[0].pageX > this.startX && e.changedTouches[0].pageX - this.startX < 30) {
      this.showDeleteButton(e)
    } else {
      this.hideDeleteButton(e)
    }
  }
})