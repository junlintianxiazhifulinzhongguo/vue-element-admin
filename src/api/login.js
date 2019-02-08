import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    type:'name',
    value:{
      username,
      password
    }
  }
  return request({
    url: '/login/getToken',
    method: 'post',
    data
  })
}
export function getAuthUrl(thirdpart) {
  return request({
    // url: 'login/authUrl',
    url: 'login/'+thirdpart+'/authUrl',
    method: 'get'
  })
}
export function loginByThirdparty(type, code) {
  const data = {
    type, 
    code
  }
  console.log(data)
  return request({
    url: 'login/getToken',
    method: 'post',
    data
  })
}
export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  console.log(token)
  return request({
    url: '/login/getUserInfo',
    method: 'get',
    params: { token }
  })
}

