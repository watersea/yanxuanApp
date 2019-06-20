import axisoRequest from '@/api/request'
import {Indicator, Toast} from 'mint-ui'
import router from '@/router'
import vueCookies from 'vue-cookies'

export default {
  login (context, data) {
    axisoRequest({
      url: '/login.php',
      method: 'post',
      data
    }).then(res => {
      Indicator.close()
      let code = res.data.code
      if (code === 200) {
        router.push('/home/index')
        vueCookies.set('wy_login_access', JSON.stringify(data), '1d')
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
  },
  resgiter (context, data) {
    axisoRequest({
      url: '/resgiter.php',
      method: 'post',
      data
    }).then(res => {
      router.push('/home/index')
      vueCookies.set('wy_login_access', JSON.stringify(data), '1d')
    }).catch(error => {
      console.log(error)
    })
  }
}
