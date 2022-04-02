<template>
  <div class="wrapper" @click="open">wta</div>
</template>

<script setup>
import { message } from '@/plugin'
import { onMounted } from 'vue'

const open = () => {
  message({
    msg: 'hello msg',
    time: 1500,
    type: 'primary'
  })
}
</script>

<style></style>
