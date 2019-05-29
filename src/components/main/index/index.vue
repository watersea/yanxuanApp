<template>
  <div class='main'>
    <q-top @onChangeMenu="changeMenu" :title="title" v-if="title.length > 0"></q-top>
    <q-content :banner="bannerImg" v-if="bannerImg.length > 0"></q-content>
  </div>
</template>
<script>
import QTop from './Qtop'
import QContent from './Qcontent'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      title: state => state.title,
      bannerImg: state => state.bannerImg
    })
  },
  created () {
    this.getMenu()
  },
  methods: {
    ...mapActions([
      'getMenu'
    ]),
    changeMenu (index) {
      this.getMenu(index)
    }
  },
  components: {
    QTop,
    QContent
  }
}
</script>
