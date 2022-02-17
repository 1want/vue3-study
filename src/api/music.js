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

// 获取歌曲详情
export function getMusicInfo(ids) {
  return request({
    url: 'song/detail',
    params: {
      ids
    }
  })
}

// 根据关键字搜索音乐
export function searchByKeyword(keywords, offset = 0, type = 1, limit = 15) {
  return request({
    url: 'cloudsearch',
    params: {
      keywords,
      offset,
      type,
      limit
    }
  })
}
