<template>
  <transition name="normal">
    <normal-player v-if="playMode === 'normalPlayer'"></normal-player>
  </transition>

  <transition name="detail">
    <detail-player v-if="playMode === 'detailPlayer'"></detail-player>
  </transition>

  <audio :src="url" @timeupdate="timeupdate" autoplay ref="video"></audio>
</template>

<script setup>
import normalPlayer from './normal-player.vue'
import detailPlayer from './detail-player.vue'
import play from '@/hooks/play'
import { watch, ref } from 'vue'

const video = ref()

const {
  playMode,
  url,
  playState,
  changePlayIndex,
  lyric,
  playIndex,
  changePlayTime
} = play()

const timeupdate = time => {
  let currentTime = Math.ceil(time.target.currentTime)
  let runTime = time.target.currentTime / time.target.duration
  changePlayTime(runTime)
  lyric.value.find((item, index) => {
    if (item.time === currentTime) {
      changePlayIndex(index, lyric.value[index]?.txt)
    }
  })
}

watch(playState, state => {
  if (state === false) {
    video.value.pause()
  } else {
    video.value.play()
  }
})
</script>

<style lang="less" scoped>
.detail-enter-active {
  animation: enter 1s ease-out;
}
.detail-leave-to {
  transform: translateY(600px);
  transition: 1.5s;
}
.normal-enter-active {
  animation: normalEnter 1s linear;
}
@keyframes normalEnter {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes enter {
  from {
    transform: translateY(600px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
