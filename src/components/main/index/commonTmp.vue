<template>
  <div class='common'>
    {{commonData}}
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['commonData']
}
</script>
<style lang="less" scoped>
  .common{
    color: #ccc
  }
</style>
