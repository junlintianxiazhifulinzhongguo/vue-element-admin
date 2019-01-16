import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}
export function loginByAlipay() {
  return request({
    url: 'api/v0/login/authUrl',
    method: 'get'
  })
}
export function loginByThirdparty(status, email, code) {
  const data = {
    status,
    email,
    code
  }
  console.log(data)
  return request({
    url: 'api/v0/login/authRedirect',
    method: 'post'
  })
}
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

