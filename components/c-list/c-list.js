Component({
  data: {
    listData: []
  },
  created() {
    while (this.data.listData.length < 16) {
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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  attached() {
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
    this.setData({
      listData: this.data.listData
    })
  },
  methods: {

  }
})