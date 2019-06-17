<template>
  <div class='main'>
    <q-top></q-top>
    <scroll-nav-bar :title="title" v-if="title.length > 0"></scroll-nav-bar>
    <!-- <q-content :banner="bannerImg" v-if="bannerImg.length > 0"></q-content> -->
  </div>
</template>
<script>
import QTop from './Qtop'
import QContent from './Qcontent'
import scrollNavBar from '@/common/scrollNavBar'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
  data () {
    return {}
  },
  components: {
    QTop,
    QContent,
    scrollNavBar
  },
  computed: {
    ...mapState({
      title: state => state.title,
      bannerImg: state => state.bannerImg
    })
  },
  created () {
    // this.getMenu()
  },
  methods: {
    ...mapActions([
      'getMenu'
    ])
    // changeMenu (index) {
    //   this.getMenu(index)
    // }
  }
}
</script>
