<template>
  <div class="wrapper">
    <normal-player v-if="playMode === 'normal'"></normal-player>
    <detail-player v-if="playMode !== 'normal'"></detail-player>
    <audio :src="url" controls autoplay ref="video"></audio>
  </div>
</template>

<script setup>
import normalPlayer from './normal-player.vue'
import detailPlayer from './detail-player.vue'
import play from '@/hooks/play'
import { watch, ref } from 'vue'

const video = ref()

const { playMode, url, playState } = play()

watch(playState, state => {
  if (state === false) {
    video.value.pause()
  } else {
    video.value.play()
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
