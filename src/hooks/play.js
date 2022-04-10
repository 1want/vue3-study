import { reactive, toRefs } from 'vue'
import { getUrl, getMusicInfo, getLyric } from '@/api'
import analyzeLyrics from '@/utils/lyrics'

const state = reactive({
  playState: false,
  lyric: [],
  url: '',
  playMode: 'none',
  musicInfo: [],
  playCurrent: 0,
  playTime: 0,
  playIndex: 0,
  currentLyric: ''
})

function play() {
  const changePlayState = status => {
    state.playState = status
  }

  const changePlayMode = mode => {
    state.playMode = mode
  }

  const changePlayTime = time => {
    state.playTime = time
  }

  const changePlayIndex = (index, lyric) => {
    state.playIndex = index
    state.currentLyric = lyric
  }

  const playMusic = (id, index) => {
    // 播放歌曲时：
    // 1.获取歌曲url
    // 2.获取歌曲详细信息
    // 3.获取歌词
    // 4.改变播放状态，并添加当前播放索引
    getUrl(id).then(res => {
      state.url = res.data[0].url
    })
    getMusicInfo(id).then(res => {
      state.musicInfo = res.songs[0]
    })
    getLyric(id).then(res => {
      state.lyric = analyzeLyrics(res.lrc.lyric)
    })
    changePlayMode('normalPlayer')

    // 当点击的歌曲是第一次点击时，只需让它的播放状态为true
    // 当对同一首歌曲进行点击时只需改变它的播放状态，传递一个反相值即可
    if (state.playCurrent === index) {
      changePlayState(!state.playState)
    } else {
      state.playCurrent = index
      changePlayState(true)
    }
  }

  return {
    changePlayState,
    changePlayMode,
    changePlayTime,
    changePlayIndex,
    playMusic,
    ...toRefs(state)
  }
}

export default play
