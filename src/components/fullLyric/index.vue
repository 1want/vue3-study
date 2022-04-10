<template>
  <div class="full-lyric" ref="fullLyric">{{ currentLyric }}</div>
</template>

<script setup>
import { toRefs, ref, reactive, watch, onMounted } from 'vue'
import play from '@/hooks/play'
import drag from '@/utils/drag'

const { currentLyric } = play()

const fullLyric = ref()

onMounted(() => {
  drag(fullLyric.value)
})
</script>

<style lang="less" scoped>
.full-lyric {
  position: absolute;
  bottom: 30px;
  z-index: 99999999;
  color: #4c508f;
  font-family: cursive;
  font-size: 1.2em;
  left: 50%;
  transform: translateX(-50%);
}
</style>
