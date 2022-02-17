<template>
  <div class="detail-play">
    <span class="icon-arrowRight-copy" @click="changePlayMode('normal')"></span>
    <img class="hover-img" :src="musicInfo.al.picUrl" alt="" />

    <main>
      <div class="music-img">
        <img class="img" :src="musicInfo.al.picUrl" alt="" />
      </div>
      <div class="music-info">
        <lyric></lyric>
      </div>
    </main>
  </div>
</template>

<script setup>
import lyric from '@/components/lyric/index.vue'

import play from '@/hooks/play'
const { playState, changePlayState, musicInfo, changePlayMode } = play()
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
  .icon-arrowRight-copy {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 24px;
    z-index: 1;
    cursor: pointer;
  }
  .hover-img {
    position: absolute;
    filter: blur(40px);
    opacity: 0.4;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  main {
    display: flex;
    height: 100%;
    .music-img {
      width: 420px;
      display: flex;
      align-items: center;
      justify-content: center;
      .img {
        width: 350px;
        height: 350px;
      }
    }
    .music-info {
      flex: 1;
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      z-index: 9;
    }
  }
}
</style>
