import axisoRequest from '@/api/request'
import {Indicator, Toast} from 'mint-ui'
import router from '@/router'

export default {
  login (context, data) {
    axisoRequest({
      url: 'login.php',
      method: 'post',
      data
    }).then(res => {
      Indicator.close()
      let code = res.data.code
      if (code === 200) {
        router.push('home')
      } else {
        Toast({
          message: '登录失败，' + res.data.msg + '!',
          position: 'middle',
          duration: 1500
        })
      }
    }).catch(error => {
      console.log(error)
    })
  }
}
