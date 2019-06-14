import Vue from 'vue'

// 图片占位懒加载
export const lazyImg = Vue.directive('lazyImg', {
  inserted: function (el, val) {
    /* eslint-disable no-new */
    new LazyCommon(el, val)
  },
  update: function (el, val) {
    /* eslint-disable no-new */
    new LazyCommon(el, val)
  }
})
// 懒加载图片公共函数
function LazyCommon (el, val) {
  let url = val.value
  let img = new Image()
  img.src = url
  img.onload = function () {
    el.src = url
  }
}
