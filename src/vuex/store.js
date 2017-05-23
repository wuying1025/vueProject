//引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义初始化变量
const state = {
    title:'moive',
    bgcolor:'#2196f3'
}
//定义动作
const mutations = {
  changeTitle(state,status){
   	state.title = status;
   },
  changeBgColor(state,status){
    state.bgcolor = status;
  }
}

const actions = {
  changeTitle:({commit},status)=>commit('changeTitle',status),
  changeBgColor:({commit},status)=>commit('changeBgColor',status)
}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
