<template>
  singer --
  <span>{{ list }}</span>
</template>

<script setup>
import { reactive, toRefs } from '@vue/reactivity'
import bus from '@/utils/bus'
const state = reactive({
  list: {}
})

const { list } = toRefs(state)

bus.on('add', e => {
  state.list = e
  console.log(e)
})
</script>

<style></style>
