<template>
  <div class="sound-control">
    <input type="range" @input.native="changeSound" value="30" />
    <div class="bar" :style="{ width: width + 'px' }"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const width = ref(39)

const changeSound = sound => {
  console.log('inpit')
  // width.value = (sound.target.value / 100) * 130
  // if (sound.target.value == 0) {
  //   emits('update:mute', true)
  // } else {
  //   emits('update:mute', false)
  // }
}
</script>

<style lang="less" scoped>
.sound-control {
  transform: rotate(-90deg);
  background: rgba(124, 120, 120, 0.438);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 10px 20px;
}

input[type='range'] {
  -webkit-appearance: none;
  background: transparent;
  width: 100%;
}

// input[type='range']::-webkit-slider-runnable-track {
//   background: red;
//   position: absolute;
// }

input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: #fff;
  cursor: pointer;
  margin-top: -3px;
  margin-left: -1px;
}

input[type='range']::-webkit-slider-runnable-track {
  height: 5px;
  margin-top: -60px;
  position: relative;
  border-radius: 30px;
  background: rgba(216, 213, 213, 0.438);
  opacity: 0.7;
}

.bar {
  position: absolute;
  background: rgba(255, 255, 255, 0.808);
  z-index: -99;
  height: 5px;
  top: 23px;
  border-radius: 30px;
}
</style>
