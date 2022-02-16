<template>
  <div class="normal-play">
    <div class="music-info">
      <img class="music-img" :src="musicInfo?.al?.picUrl" alt="" />
      <span class="singer">{{ musicInfo.name }}</span>
      <span class="song-name">{{ musicInfo?.al?.tns[0] }}</span>
    </div>

    <div class="control">
      <span class="iconfont icon-shangyishoushangyige"></span>
      <span
        @click="changePlayState"
        class="iconfont"
        :class="playState ? 'icon-zanting1' : 'icon-bofang'"
        style="font-size: 40px"
      ></span>
      <span class="iconfont icon-xiayigexiayishou"></span>
    </div>
  </div>
</template>

<script setup>
import play from '@/hooks/play'
const { url, playState, changePlayState, musicInfo } = play()
</script>

<style lang="less" scoped>
.normal-play {
  width: 100%;
  line-height: 80px;
  position: fixed;
  bottom: 0;

  .music-info {
    color: #fff;
    display: flex;
    align-items: center;
    position: absolute;
    width: 300px;
    left: 50px;
    .music-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 30px;
    }
  }

  .control {
    margin: 0 50px;
    display: flex;
    align-items: center;
    padding-left: 50px;
    justify-content: center;
    .iconfont {
      cursor: pointer;
      font-size: 24px;
      color: rgba(224, 220, 220, 0.911);
      margin: 0 10px;
    }
  }
}
</style>
