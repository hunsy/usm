const tab = {
  //存放组件之间共享的数据
  state: {
    currentTab: 0,
  },
  //显式的更改state里的数据
  mutations: {
    SET_TAB: (state, idx) => {
      console.log("设置Tab:", idx);
      state.currentTab = idx
    }
  },
  actions: {
    ChangeTab({
      commit
    }, idx) {
      console.log("change tab", tab);
      commit('SET_TAB', idx)
    }
  }
}

export default tab
