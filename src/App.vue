<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <play />
  </div>
</template>

<script setup>
import play from '@/components/play/index.vue'
</script>

<style lang="less">
::-webkit-scrollbar {
  width: 0;
}
[class*='icon-'] {
  font-family: 'icon' !important;
  font-style: normal;
  color: #fff;
}

#app {
  overflow: hidden;
  width: 900px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  background: url('@/assets/images/defaultBg.png');
}
</style>
