import wxRequest from '../wxRequest'

/**
 * 获取 Token
 */
export const onGetToken = (payload) => {
  return wxRequest({
    url: 'v1/token',
    method: 'post',
    data: payload,
  })
}

/**
 * 存储用户信息
 */
export const saveUserInfo = (payload) => {
  return wxRequest({
    url: 'v1/user/register',
    method: 'post',
    data: payload,
  })
}
