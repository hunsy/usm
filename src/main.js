// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import weui from './styles/weui.min.css'
import example from './styles/example.css'
import {
  getToken
} from '@/utils/auth'

import * as filters from './filters' // global filters
console.log("filters:", filters);

// register global utility filters.
Object.keys(filters).forEach(key => {
  console.log("key", key);
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false
Vue.use(weui)
Vue.use(example)

//进行登录拦截
router.beforeEach((to, from, next) => {

  const token = getToken();
  console.log('login filter', token);

  if (!token) {
    //没有登录
    if (to.path != '/login') {
      next('/login')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {      
      next('/')
    } else {
      next()
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
