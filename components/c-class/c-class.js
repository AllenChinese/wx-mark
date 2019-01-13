Component({
  data: {

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
    goToActivityList: function () {
      wx.navigateTo({
        url: "/pages/activityList/activityList"
      })
    }
  },

})