import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/view/home'
import category from '@/view/shopClass'
import cart from '@/view/shopCar'
import user from '@/view/user'
import detalis from '@/view/detalis'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
     {
      path: '/home',
      name: 'Hello',
      component: Hello,
      meta: {keepAlive: true} // 这个是需要keepalive的
    },
    {
      path: '/category',
      name: 'category',
      component: category,
      meta: {keepAlive: true} // 这个是需要keepalive的
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: {keepAlive: true} // 这个是需要keepalive的
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {keepAlive: true} // 这个是需要keepalive的
    },
    {
      path: '/detalis/:id',
      name: 'detalis',
      component: detalis,
      meta: {keepAlive: false} // 这是不会被keepalive的
    }

  ]
  ,
  scrollBehavior: function (to, from, savedPosition) {
     return savedPosition || { x : 0, y : 0 }
  }
})
