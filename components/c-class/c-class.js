Component({
  data: {
    classList: []
  },
  properties: {
    propClassList: {
      type: Array,
      value: []
    }
  },
  externalClasses: ['external-class-part', 'external-class-title', 'external-class-btn'],
  methods: {
    /**
     * 跳转到全部分类页面
     */
    goToClassDetailPage: function () {
      wx.navigateTo({
        url: '/pages/allClass/allClass'
      })
    },
    /**
     * 跳转到对应分类下的列表
     */
    goToActivityList: function (event) {
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
  }
})