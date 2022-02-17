const reg = /\[\d*:\d*(\.|:)\d*]/g

function analyzeLyrics(lyric) {
  const lrcArr = []
  const times = []
  if (lyric.length > 0) {
    const lyrics = lyric.split('\n')
    for (var i = 0; i < lyrics.length; i++) {
      var timeRegExpArr = lyrics[i].match(reg)
      if (!timeRegExpArr) continue
      const content = lyrics[i].replace(timeRegExpArr, '')
      var min = Number(
          timeRegExpArr[0]
            .match(/\[\d*/i)
            .toString()
            .slice(1)
        ),
        sec = Number(
          timeRegExpArr[0]
            .match(/\:\d*/i)
            .toString()
            .slice(1)
        )
      var time = min * 60 + sec

      // 防止歌词滚动时一次滚动多行，所以去除空值
      if (content != '') {
        lrcArr.push({
          time,
          txt: content,
          needTime: 0
        })
        times.push(time)
      }
    }
  } else {
    lrcArr.push({
      time: '',
      txt: '暂无歌词'
    })
  }

  for (var i = 0; i < times.length; i++) {
    lrcArr[i].needTime = times[i + 1] - times[i]
  }

  return lrcArr
}

export default analyzeLyrics
