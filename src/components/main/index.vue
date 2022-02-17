<template>
  <div class="wrapper">
    <div class="content" v-for="(item, index) of musicList" :key="item.id">
      <span class="song-name txt-over">{{ item.name }}</span>
      <span class="singer">{{ item.song.artists[0].name }}</span>
      <span
        class="icon"
        :class="playState ? 'icon-zanting1' : 'icon-bofang'"
        @click="playMusic(item.id, index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { getMusicList } from '@/api/index'
import { onMounted, toRefs, reactive } from 'vue'
import play from '@/hooks/play'

const { playState, playCurrent, playMusic } = play()

const state = reactive({
  musicList: []
})

onMounted(() => {
  getMusicList().then(res => {
    state.musicList = res.result
  })
})

const { musicList } = toRefs(state)
</script>

<style lang="less" scoped>
.wrapper {
  height: 450px;
  overflow: scroll;
  .content {
    display: flex;
    padding: 15px 0;
    color: #fff;
    .song-name {
      width: 240px;
      padding-left: 50px;
    }
    .singer {
      flex: 1;
      padding: 0 50px;
      cursor: pointer;
    }
    .icon {
      font-size: 26px;
      width: 200px;
      cursor: pointer;
    }
    &:hover {
      background: rgba(163, 161, 161, 0.13);
    }
  }
}
</style>
