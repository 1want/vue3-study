<template>
  <div class="custom-play" @click="closeSound">
    <audio :src="url" controls autoplay></audio>
  </div>
</template>

<script>
import play from '@/hooks/play'
const { url } = play()
</script>

<style lang="less" scoped>
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
</style>
