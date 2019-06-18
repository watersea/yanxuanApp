<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
::-webkit-scrollbar{
  width:0;
  height:0;
  background: transparent
}
#app {
  height:100%
}
</style>
