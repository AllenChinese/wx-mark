Page({
  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
        id: 1,
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        id: 2,
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        id: 3,
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        id: 4,
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        id: 5,
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: false
      },
      {
        id: 6,
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: true
      },
      {
        id: 8,
        preview: '../../assets/images/banner/banner1.jpeg',
        title: '声音腾讯技术公开日成都站',
        desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
        address: '浙江杭州',
        date: '01/11',
        week: '周六',
        isExpired: true
      },
      {
        id: 9,
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
  },

  /**
   * 删除产品
   */
  handleDeleteProduct: function ({ currentTarget: { dataset: { id } } }) {
    let listData = this.data.listData
    let productIndex = listData.findIndex(item => item.id === id)

    listData.splice(productIndex, 1)

    this.setData({
      listData
    })

    if (listData[productIndex]) {
      this.setXmove(productIndex, 0)
    }
  }
})