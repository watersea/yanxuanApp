import { test } from './mutations'
import axios from 'axios'

const actions = {
    getData(){
        this.axios.get('https://baidu.com').then(res => {
            console.log(res)
        })
    }
}
export default actions