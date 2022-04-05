<template>
  <div class="full-lyric" ref="fullLyric">{{ currentLyric }}</div>
</template>

<script setup>
import { toRefs, ref, reactive, watch, onMounted } from 'vue'
import play from '@/hooks/play'
import drag from '@/utils/drag'

const { playIndex, lyric } = play()
const state = reactive({
  currentLyric: ''
})
const fullLyric = ref()

onMounted(() => {
  drag(fullLyric.value)
})

watch(
  () => playIndex.value,
  newV => {
    state.currentLyric = lyric.value[newV].txt
  }
)
const { currentLyric } = toRefs(state)
</script>

<style lang="less" scoped>
.full-lyric {
  position: absolute;
  bottom: 30px;
  z-index: 99999999;
  color: red;
  left: 50%;
  transform: translateX(-50%);
}
</style>
