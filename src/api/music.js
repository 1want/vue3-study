import request from '@/utils/request'

export function getMusicList(limit = 16) {
  return request({
    url: 'personalized/newsong',
    params: {
      limit
    }
  })
}

// 获取url
export function getUrl(id) {
  return request({
    url: 'song/url',
    params: {
      id
    }
  })
}
