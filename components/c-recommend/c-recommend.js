Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
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