import axisoRequest from '@/api/request'

export default {
  getData (context) {
    axisoRequest({
      url: 'json2.php',
      method: 'get',
      params:{
        id:123
      }
    }).then(res => {
      console.log(res)
      context.commit('test', 10)
    })
  }
}
