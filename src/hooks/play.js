import { ref, reactive, toRefs } from 'vue'
import { getUrl } from '@/api'

const state = reactive({
  playState: false,
  lyric: [],
  url: '',
  checkPlayer: true
})

function play() {
  const changePlayState = () => {
    state.playState = !state.playState
  }

  const playMusic = (id, index) => {
    getUrl(id).then(res => {
      state.url = res.data[0].url
    })
  }

  return {
    changePlayState,
    playMusic,
    ...toRefs(state)
  }
}

export default play
