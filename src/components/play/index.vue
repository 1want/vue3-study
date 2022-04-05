<template>
  <div class="wrapper">
    <normal-player v-if="playMode === 'normal'"></normal-player>
    <detail-player v-if="playMode !== 'normal'"></detail-player>
    <audio :src="url" @timeupdate="timeupdate" autoplay ref="video"></audio>
  </div>
</template>

<script setup>
import normalPlayer from './normal-player.vue'
import detailPlayer from './detail-player.vue'
import play from '@/hooks/play'
import { watch, ref } from 'vue'

const video = ref()

const { playMode, url, playState, changePlayIndex, lyric, playIndex } = play()

const timeupdate = time => {
  let currentTime = Math.ceil(time.target.currentTime)
  let i
  lyric.value.find((item, index) => {
    if (item.time === currentTime) {
      i = index
    }
    if (i && i != playIndex.value) {
      changePlayIndex(i)
    }
  })
}

watch(playState, state => {
  if (state === false) {
    video.value.pause()
  } else {
    video.value.play()
    console.log(video.value.currentTime)
  }
})
</script>

<style lang="less" scoped>
.wrapper {
  audio {
    display: none;
  }
}
</style>
