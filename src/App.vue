<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup></script>

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
}
</style>
