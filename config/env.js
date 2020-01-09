const env = wx.env.USER_DATA_PATH === 'http://usr' ? 'development' : 'production'

export default env