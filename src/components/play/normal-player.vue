<template>
  <div class="normal-play" @click="closeSound">
    <div class="progress-bar">
      <div class="bar" :style="`width : ${playTime * 100}% `"></div>
    </div>

    <div class="music-info" @click="changePlayMode('detailPlayer')">
      <img class="music-img" :src="musicInfo?.al?.picUrl" alt="" />
      <div class="info">
        <notice-bar ref="notice">
          <span class="singer">{{ musicInfo.name }}</span>
          <span class="song-name">{{ musicInfo?.al?.tns[0] }}</span>
        </notice-bar>
      </div>
    </div>

    <div class="control">
      <span class="icon-liebiaoshunxu"></span>
      <span class="icon-shangyishoushangyige"></span>
      <span
        @click.stop="changePlayState(!playState)"
        :class="playState ? 'icon-zanting1' : 'icon-bofang'"
        style="font-size: 40px"
      ></span>
      <span class="icon-xiayigexiayishou"></span>
      <span class="icon-shengyin" @click.stop="isShowSound"></span>
    </div>
    <sound class="sound" v-show="showSound"></sound>
  </div>
</template>

<script setup>
import { reactive, ref, toRefs, watch } from 'vue'
import play from '@/hooks/play'
import NoticeBar from '@/components/notice-bar/index.vue'
import sound from '@/components/sound/index.vue'

const { playState, changePlayState, musicInfo, changePlayMode, playTime } =
  play()
const notice = ref()
const state = reactive({
  showSound: false
})

const isShowSound = () => {
  state.showSound = !state.showSound
}

const closeSound = () => {
  state.showSound = false
}

watch(
  () => musicInfo.value,
  (newV, oldV) => {
    if (newV != oldV) {
      notice.value.refresh()
    }
  }
)

const { showSound } = toRefs(state)
</script>

<style lang="less" scoped>
.normal-play {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90px;
  // width: 100%;
  line-height: 80px;
  // position: fixed;
  // bottom: 0;
  .progress-bar {
    height: 4px;
    width: 100vw;
    background: rgba(211, 209, 209, 0.301);
    .bar {
      width: 1px;
      height: 4px;
      background: rgba(181, 198, 223, 0.76);
    }
  }
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
    .info {
      margin-left: 20px;
      .singer {
        margin-left: 20px;
      }
    }
  }

  .control {
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      cursor: pointer;
      font-size: 24px;
      color: rgba(224, 220, 220, 0.911);
      margin: 0 10px;
    }
  }

  .sound {
    position: absolute;
    right: 30.2%;
    bottom: 115px;
    height: 30px;
  }
}
</style>
