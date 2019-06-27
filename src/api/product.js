// 导入axios实例
import instance from '@/plugin/axios'

export function getproducts () {
  // instance()中传入确切的url信息时，将发起请求
  // （当然，首先是这个方法要被调用，此处只是声明）
  return instance({
    url: '/api/products', // 这里访问本地数据来假装获取后端接口数据
    method: 'get'
  })
}

// 示例代码：
// export function login (data) {
//   return request({
//     url: '/login.action',
//     method: 'post',
//     data: data
//   })
// }
