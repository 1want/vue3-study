<template>
  <div class="info">
    <p class="songs">{{ musicInfo.name }}</p>
    <p class="singer">{{ musicInfo.ar[0].name }}</p>
  </div>
  <Scroll :height="400" :lyricIndex="playIndex" :lines="lyric.length">
    <div class="lyric">
      <ul>
        <li
          v-for="(item, index) of lyric"
          :class="playIndex === index && 'current-lyr'"
          :style="{ animationDuration: duration }"
        >
          {{ item.txt }}
        </li>
      </ul>
    </div>
  </Scroll>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import Scroll from '../scroll/index.vue'
import play from '@/hooks/play'

const { lyric, playIndex, musicInfo } = play()
const duration = ref()

watch(
  () => playIndex.value,
  newV => {
    duration.value = 0
    const needTime = lyric.value[newV].needTime
    duration.value = needTime * 1000 + 'ms'
  }
)
</script>

<style lang="less" scoped>
.info {
  text-align: center;
  .songs {
    font-family: cursive;
    font-size: 26px;
    color: #fff;
  }
  .singer {
    font-family: cursive;
    margin: 10px 0;
    color: rgb(221, 219, 219);
  }
}
::-webkit-scrollbar {
  width: 0;
}
.lyric {
  color: rgba(245, 244, 244, 0.794);
  text-align: center;
  margin-top: 15px;
  ul {
    width: 480px;
    display: flex;
    flex-direction: column;
    li {
      margin: 0 auto;
      line-height: 55px;
      cursor: pointer;
      background: rgba(255, 255, 255)
        linear-gradient(
          to right,
          rgba(141, 211, 29, 0.76) 100%,
          rgb(0, 0, 0) 0%
        )
        no-repeat 0 0;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-size: 0 100%;
    }
  }
}
.current-lyr {
  animation: scan linear;
  background-size: 100% 100%;
}
@keyframes scan {
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
</style>
