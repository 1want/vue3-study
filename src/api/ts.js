import request from '@/utils/request'

export function getUser() {
  return request({
    url: '/getUser',
    method: 'POST'
  })
}
