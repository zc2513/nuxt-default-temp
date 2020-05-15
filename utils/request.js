/**  * 封装Axios  * 处理请求、响应错误信息  */
import { Message } from 'element-ui'
import axios from 'axios' // 引用axios
// create an axios instance
const service = axios.create({
    // baseURL: '/api',
    baseURL: 'https://www.sinocmt.com/',
    withCredentials: true
    // timeout: 5000
})

service.interceptors.request.use(
    (config) => {
        config.headers['Content-Type'] = 'application/json'
        return config
    },
    (error) => {
        // console.log(error)
        return Promise.reject(error)
    })

service.interceptors.response.use(
    (response) => {
        const res = response.data
        // res is my own data
        // if (res.code === 2000) {
        //     return Promise.resolve(res)
        // }
        // else{
        //     Message({
        //         message: res.msg || 'Error',
        //         type: 'error',
        //         duration: 2 * 1000
        //     })
        //     return Promise.reject(new Error(res.msg || 'Error'))
        // }
        return res
    },
    (error) => {
        // console.log('err' + error) // for debug
        Message({ message: error.message, type: 'error', duration: 5 * 1000 })
        return Promise.reject(error)
    }
)
export default service
