import Vue from 'vue'
import Router from 'vue-router'
import {
  UsmIndex,
  UsmLogin,
  UsmConfiggoods,
  UsmGoodsForm
} from '../views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'usmIndex',
      component: UsmIndex
    },
    {
      path: '/login',
      name: 'usmLogin',
      component: UsmLogin
    },
    {
      path: '/configGoods',
      name: 'usmConfigGoods',
      component: UsmConfiggoods
    }
    ,
    {
      path: '/goodsForm',
      name: 'usmGoodsForm',
      component: UsmGoodsForm
    }
  ]
})
