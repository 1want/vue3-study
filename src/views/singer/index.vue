<template>
  singer
  <router-view></router-view>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
const props = defineProps({
  name: {
    default: 'walt'
  }
})
const router = useRouter()
// console.log(router)
console.log('singer')
</script>

<style></style>
