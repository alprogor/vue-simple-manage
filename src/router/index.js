import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AdminIndex from '@/components/AdminIndex'
import ProductManage from '@/components/ProductManage'
import ClientManage from '@/components/ClientManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex,
      children: [
        // { // 这里可以写直接访问父路由时渲染哪个component
        //   path: '',
        //   component: Statictis
        // },
        {
          path: 'product',
          name: 'ProductManage',
          component: ProductManage
        },
        {
          path: 'client',
          name: 'ClientManage',
          component: ClientManage
        }
      ]
    }
  ]
})
