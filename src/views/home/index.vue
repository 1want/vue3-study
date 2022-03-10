<template>
  <button @click="ts.add">add</button>
  <router-view></router-view>
</template>

<script setup>
import a from '@/hooks/play'

import { toRefs } from 'vue'

const { ts } = toRefs(a.state)
console.log(ts)
</script>

<style></style>
