<script setup>
import HelloWorld from './components/HelloWorld.vue'
import {isUS_Wt,isUS_Dst,getWorldTimeZone,getUTCDate} from '@time-zone/date'
console.log(getUTCDate())
console.log(getWorldTimeZone("2025-4-1 09:24:01",'zh-Hans',{timeZone:'America/New_York'}))
console.log(getWorldTimeZone("2025-4-1 09:24:01",'en-US',{timeZone:'America/New_York'}))
console.log(getWorldTimeZone("2025-4-1 09:24:01", {timeZone:'America/New_York'}))
console.log(getWorldTimeZone())


// 获取用户的时区
var userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

// 获取当前时间
var currentTime = new Date();

// 转换时区
var options = { timeZone: 'America/New_York', hour12: false };
var userTime = currentTime.toLocaleString('en-US', options);

// 显示特定时区的实时时间
console.log('当前时间（' + userTimezone + '）：' + userTime);
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
