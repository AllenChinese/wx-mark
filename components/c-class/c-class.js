Component({
  data: {

  },
  externalClasses: ['external-class-part', 'external-class-title', 'external-class-btn'],
  methods: {
    goToClassDetailPage: function () {
      wx.navigateTo({
        url: '/pages/allClass/allClass'
      })
    }
  },

})