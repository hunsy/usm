import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import tab from './modules/tab'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    tab
  },
  getters
});

export default store
