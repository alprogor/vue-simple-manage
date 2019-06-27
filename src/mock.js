import Mock from 'mockjs'

const redata = function () {
  return {
    code: 1,
    data: [
      {
        name: 'bao bao jinshui',
        cost: 18
      },
      {
        name: 'wangzai niunai',
        cost: 12
      }
    ]
  }
}

// 格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/products', 'get', redata)
export default Mock
