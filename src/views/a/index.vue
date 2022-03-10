<template>
  a
</template>

<script setup>
import { reactive } from '@vue/reactivity'

const state = reactive({
  add() {
    console.log('ok')
  }
})
defineExpose(state)
</script>

<style></style>
