<template>
  <div class="purchasing">
    <recom-header></recom-header>
    <div v-for="(item, index) in knowGood" :key="index">
      <author :data="item"></author>
    </div>
  </div>
</template>
<script>
import recomHeader from '../components/recomHeader'
import author from '../components/author'
import { mapState } from 'vuex'
export default {
  components: {
    recomHeader,
    author
  },
  computed: {
    ...mapState({
      knowGood: state => state.home.knowGood
    })
  }
}
</script>
<style lang="less" scoped>
  .purchasing{
    overflow: auto;
  }
</style>
