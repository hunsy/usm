// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import weui from './styles/weui.min.css'
import example from './styles/example.css'
import {
  getToken
} from '@/utils/auth'

Vue.config.productionTip = false
Vue.use(weui)
Vue.use(example)

//进行登录拦截
router.beforeEach((to, from, next) => {
  console.log("to", to);

  if (!getToken()) {
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
  router,
  components: {
    App
  },
  template: '<App/>'
})
