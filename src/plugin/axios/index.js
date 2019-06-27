import axios from 'axios'
// 配置一些基本参数
const instance = axios.create({
  // baseURL: 'http://localhost:8080'
})

export default instance // 记得导出
