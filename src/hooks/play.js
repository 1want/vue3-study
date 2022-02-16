import { ref, reactive, toRefs } from 'vue'
import { getUrl, getMusicInfo } from '@/api'

const state = reactive({
  playState: false,
  lyric: [],
  url: '',
  PlayMode: 'normal',
  musicInfo: []
})

function play() {
  const changePlayState = () => {
    state.playState = !state.playState
  }

  const playMusic = (id, index) => {
    getUrl(id).then(res => {
      state.url = res.data[0].url
    })
    getMusicInfo(id).then(res => {
      state.musicInfo = res.songs[0]
      console.log(state.musicInfo)
    })
  }

  return {
    changePlayState,
    playMusic,
    ...toRefs(state)
  }
}

export default play
