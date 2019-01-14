Component({
  data: {
    listData: [],
    curPage: 1,
    canLoad: true,
    dataLess: false
  },
  created() {
    this.loadMoreList()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  attached() {
    this.preferListLayout()
  },
  methods: {
    loadMoreList: function () {
      console.log('当前页', this.data.curPage)
      if (this.data.curPage === 6) {
        this.setData({
          dataLess: true
        })
      }
      while (this.data.listData.length < 16 * this.data.curPage) {
        this.data.listData.push(
          {
            preview: '../../assets/images/banner/banner1.jpeg',
            title: '声音腾讯技术公开日成都站',
            desc: '声音腾讯技术公开日成都站声音腾讯技术公开日成都站',
            address: '浙江杭州',
            date: '01/11',
            week: '周六'
          }
        )
      }
      this.preferListLayout()
      this.setData({
        listData: this.data.listData,
        canLoad: true
      })
    },

    /**
     * 提供列表页二二布局
     */
    preferListLayout: function () {
      let isV = true
      let changeNum = 2

      for (let i = 0; i < this.data.listData.length; i++) {
        if (isV) {
          this.data.listData[i].isVer = true
          changeNum--
          if (changeNum === 0) {
            isV = false
            changeNum = 2
          }
        } else {
          this.data.listData[i].isVer = false
          changeNum--
          if (changeNum === 0) {
            isV = true
            changeNum = 2
          }
        }
      }
    },

    /**
     * 下拉加载下一页，由父组件触发
     */
    nextPage: function () {
      if (this.data.canLoad) {
        this.setData({
          curPage: this.data.curPage + 1,
          canLoad: false
        })
        this.loadMoreList()
      }
    }
  }
})