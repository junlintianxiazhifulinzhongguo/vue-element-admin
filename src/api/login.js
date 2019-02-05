import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/getToken',
    method: 'post',
    data
  })
}
export function getAuthUrl() {
  return request({
    url: 'login/authUrl',
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
    url: 'login/getToken',
    method: 'get'
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

