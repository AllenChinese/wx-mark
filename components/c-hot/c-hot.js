Component({
  properties: {
    innerText: {
      type: String,
      value: 'Default value'
    }
  },
  data: {
    // 这里是一些组件内部数据
    isLoading: false
  },

  methods: {
    changeBatchEvent: function () {
      if (this.data.isLoading) {
        return false
      }
      // api callback success
      this.setData({
        isLoading: !this.data.isLoading
      })
      console.log(this.data.isLoading)
    }
  }
})