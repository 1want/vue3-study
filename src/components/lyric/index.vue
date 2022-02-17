<template>
  <div class="info">
    <p class="songs">{{ musicInfo.name }}</p>
    <p class="singer">{{ musicInfo.ar[0].name }}</p>
  </div>
  <div class="lyric">
    <ul ref="ul">
      <li v-for="(item, index) of lyric">
        {{ item.txt }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import play from '@/hooks/play'
const { lyric, musicInfo } = play()

const ul = ref()

onMounted(() => {
  setInterval(() => {
    ul.value.style.marginTop = '-10px'
  }, 1000)
})
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
  overflow: scroll;
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
</style>
