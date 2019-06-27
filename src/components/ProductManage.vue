<template>
  <div>
    这是产品管理页
    <!-- 输出值 -->
    {{ this.content }}
  </div>
</template>

<script>
// 导入api
import { getproducts } from '@/api/product'
import axios from 'axios'
export default {
  name: 'ProductManage',
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.getProductsApi()
  },
  methods: {
    getProductsApi () {
      // 调用API
      getproducts().then(response => {
        // 这里应该有一步是关于返回的数据是否可被直接渲染的判断
        // 赋值给本地变量，然后渲染。
        console.log(response)
        this.content = response.data
      }).catch(error => {
        // 当请求错误时，提示错误信息
        this.$message(error)
      })
      // axios.get('/api/products')
      //   .then(function (res) {
      //     console.log(res)
      //   })
    }
  }
}
</script>
