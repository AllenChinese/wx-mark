Component({
  properties: {
    innerText: {
      type: String,
      value: 'Default value'
    }
  },
  data: {
    isShow: true
  },

  methods: {
    backTopEvent: function () {
      const that = this
      that.setData({
        isShow: false
      })
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300,
        success: function () {
          // 防止回到顶部，控件出现忽闪现象
          that.setData({
            isShow: true
          })
        }
      })
    }
  }
})