Component({
  data: {
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
      wx.setStorage({
        key: 'c_type',
        data: event.currentTarget.dataset.type,
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
  },

})