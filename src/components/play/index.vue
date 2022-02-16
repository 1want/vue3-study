<template>
  <div class="wrapper">
    <normal-player v-if="checkPlayer"></normal-player>
    <detail-player v-else></detail-player>
  </div>
</template>

<script setup>
import normalPlayer from './normal-player.vue'
import detailPlayer from './detail-player.vue'
import play from '@/hooks/play'

const { checkPlayer } = play()
</script>

<style lang="less" scoped>
.wrapper {
  height: 80px;
  position: fixed;
  bottom: 0;
}
</style>
