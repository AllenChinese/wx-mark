import wxRequest from '../wxRequest'

/**
 * 获取 Token
 */
export const onGetToken = (payload) => {
  return wxRequest({
    url: 'v1/token',
    method: 'post',
    data: payload
  })
}