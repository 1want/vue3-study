<template>
  <div class="scroll" ref="scroll" :style="{ height: height + 'px' }">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'
import Scroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

Scroll.use(Pullup)

const props = defineProps(['height', 'lyricIndex', 'lines'])
const emits = defineEmits(['update', 'refreshLyrics'])

let betterScroll: any
const scroll = ref()
const lines = props.lines

onMounted(() => {
  betterScroll = new Scroll(scroll.value, {
    scrollY: true,
    pullUpLoad: true,
    probeType: 2
  })

  // 首页歌曲滑动到底部时通知组件加载下一页
  betterScroll.on('pullingUp', async () => {
    emits('update')
    await nextTick()
    betterScroll.finishPullUp()
    betterScroll.refresh()
  })

  // 播放详情页，手动控制从哪播放
  betterScroll.on('scrollEnd', (position: any) => {
    if (props.lyricIndex < lines - 3) {
      const newLyricIndex = Math.floor(position.y / -54.86 + 3)
      if (newLyricIndex != props.lyricIndex) {
        emits('refreshLyrics', newLyricIndex)
      }
    }
  })
})

const refresh = () => {
  betterScroll.refresh()
}

// 播放详情页面歌词滚到超过第三行时开始滚动，剩余最后六句歌词( lines - 6 )不滚动
watch(
  () => props.lyricIndex,
  newV => {
    const line = newV - 3
    if (line > 0 && line < lines - 6) {
      betterScroll.scrollTo(0, -line * 54.86, 1200)
    }
  }
)

defineExpose({
  refresh
})
</script>

<style lang="less">
.scroll {
  overflow: scroll;
}
</style>
