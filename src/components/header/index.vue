<template>
  <div class="wrapper">
    <input type="text" class="input" placeholder="请输入歌名" @input="search" />
    <span class="icon-sousuo"></span>
    <span class="icon-pifu">
      <input class="ipt" type="file" @change="upload" />
    </span>
  </div>
</template>

<script setup>
import { searchByKeyword } from '@/api'
import bus from '@/utils/bus'
import debounce from '@/utils/debounce'

const emits = defineEmits(['update:imgUrl'])

const search = debounce(e => {
  searchByKeyword(e.target.value).then(res => {
    bus.emit('searchResult', res.result.songs)
  })
}, 300)

const upload = file => {
  var imgFile = file.target.files[0]
  var fr = new FileReader()
  fr.onload = function() {
    emits('update:imgUrl', fr.result)
  }
  fr.readAsDataURL(imgFile)
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  .input {
    width: 300px;
    height: 26px;
    border-radius: 3px;
    padding-left: 5px;
    outline: none;
    border: 1px solid rgba(58, 58, 58, 0.336);
    &:focus {
      border-color: rgb(153, 147, 147);
    }
  }
  .icon-sousuo {
    position: absolute;
    left: 300px;
    font-size: 20px;
    color: rgba(41, 35, 35, 0.52);
  }

  .icon-pifu {
    font-size: 20px;
    position: relative;
    right: 50px;
  }
  .ipt {
    opacity: 0;
    left: 0;
    position: absolute;
    width: 20px;
  }
}
</style>
