<template>
  <div class="detail-play">
    <span class="icon-arrowRight-copy" @click="changePlayMode('normal')"></span>
  </div>
</template>

<script setup>
import play from '@/hooks/play'
const { url, playState, changePlayState, musicInfo, changePlayMode } = play()
</script>

<style lang="less" scoped>
.detail-play {
  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  overflow: hidden;
  background: rgb(139, 137, 137);
  z-index: 9999999999;
}
</style>
