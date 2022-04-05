<template>
  <img v-if="imgUrl" class="default-bg" :src="imgUrl" alt="" />
  <img v-else class="default-bg" src="@/assets/images/defaultBg.png" alt="" />
  <Header v-model:imgUrl="imgUrl"></Header>
  <main-page></main-page>
</template>

<script setup>
import Header from '@/components/header/index.vue'
import MainPage from '@/components/main/index.vue'
import { ref } from 'vue'

const imgUrl = ref('')
</script>

<style lang="less" scoped>
.default-bg {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 600px;
  object-fit: cover;
}
</style>
