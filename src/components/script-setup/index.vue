<template>
  <div>
    <div>{{ count }} x {{ times }} = {{ result }}</div>
    <button @click="times += 1">x1</button>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps(['count'])

const times = ref(2)
const result = computed(() => props.count * times.value)
</script>
