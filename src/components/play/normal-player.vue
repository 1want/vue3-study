<template>
  <div class="custom-play" @click="closeSound">
    <div class="progress-bar" @click="changeTime">
      <div
        class="bar"
        :style="`width : ${
          playTime * 100
        }% ;background:rgba(181, 198, 223, 0.76) ;height:4px;`"
      ></div>
    </div>
    <div class="music-info">
      <div class="music-info-content">
        <img
          class="img"
          :src="musicInfo.al?.picUrl"
          alt=""
          @click="changePlayMode('detailPlayer')"
        />
        <div class="info">
          <notice-bar ref="notice">
            <span class="songs">{{ musicInfo.name }}</span>
            <span class="singer">{{ musicInfo?.al?.tns[0] }}</span>
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
.custom-play {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90px;
  .progress-bar {
    height: 4px;
    width: 100%;
    background: rgba(211, 209, 209, 0.301);
    .bar {
      width: 1px;
    }
  }
  .music-info {
    margin-top: 35px;
    display: flex;
    width: 100%;
  }
  .music-info-content {
    display: flex;
    align-items: center;
    position: absolute;
    padding-left: 30px;
    width: 260px;
    color: rgba(224, 220, 220, 0.856);
    .img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
    }
    .info {
      margin-left: 20px;
      .singer {
        margin-left: 20px;
      }
    }
  }
  .control {
    margin: 0 auto;
    display: flex;
    align-items: center;
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
  }
}
</style>
