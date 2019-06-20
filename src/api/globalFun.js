// 全局方法
export const globalFun = {
  test () {
    console.log(111)
    return 1
  }
}
// 全局监听input失去焦点事件，解决微信输入框弹起留白问题
export const inputBlur = {
  install: function () {
    // window.onload = () => {
    //   let input = [...document.getElementsByTagName('input')]
    //   input.forEach(ele => {
    //     ele.onblur = () => {
    //       setTimeout(() => {
    //         window.scrollTo(0, 0)
    //       }, 100)
    //     }
    //   })
    // }
  }
}
