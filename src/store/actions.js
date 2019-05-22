import axios from 'axios'
export default {
  getData (context) {
    // axios.get('https://baidu.com').then(res => {
    //   console.log(res)
    context.commit('test', 10)
    // })
  }
}
