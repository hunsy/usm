import {
  login,
  getCurrentMerchant
} from '@/api/merchant'

import {
  getToken,
  setToken,
  clearToken
} from '@/utils/auth'

const user = {
  //存放组件之间共享的数据
  state: {
    token: getToken(),
    name: '',
    userid: '',
    avatar: ''
  },
  //显式的更改state里的数据
  mutations: {
    SET_TOKEN: (state, token) => {
      console.log("设置token:", token);
      state.token = token
    },
    SET_NAME: (state, name) => state.name = name,
    SET_USERID: (state, userId) => state.userId = userId,
    SET_AVATAR: (state, avatar) => state.avatar = avatar
  },
  actions: {
    Login({
      commit
    }, userinfo) {
      console.log("执行dispacth Login", userinfo);
      return new Promise((resolve, reject) => {
        login(userinfo)
          .then(
            data => {
              const token = data.token
              console.log("执行Login：", token);
              setToken(token)
              commit('SET_TOKEN', token)
              resolve(data)
            },
            err => {
              reject(err)
            })
      })
    },
    GetMerchantInfo({
      commit
    }) {
      return new Promise((resolve, reject) => {
        getCurrentMerchant().then(
          data => {
            commit('SET_USERID', data.id)
            commit('SET_NAME', data.name)
            commit('SET_AVATAR', data.avatarUrl)
            resolve(data)
          },
          err => {
            reject(err)
          }
        )
      });
    },
    Logout({
      commit
    }) {
      commit('SET_TOKEN', '')
      commit('SET_USERID', '')
      commit('SET_NAME', '')
      commit('SET_AVATAR', '')
      clearToken()
    }
  }
}

export default user
