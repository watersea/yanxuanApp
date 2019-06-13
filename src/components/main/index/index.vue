<template>
  <div class='main'>
    <q-top @onChangeMenu="changeMenu" :title="title" v-if="title.length > 0"></q-top>
    <!-- <q-content :banner="bannerImg" v-if="bannerImg.length > 0"></q-content> -->
  </div>
</template>
<script>
import QTop from './Qtop'
import QContent from './Qcontent'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('home')

export default {
  data () {
    return {
      title: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色']
    }
  },
  computed: {
    ...mapState({
      // title: state => state.title,
      bannerImg: state => state.bannerImg
    })
  },
  created () {
    // this.getMenu()
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
