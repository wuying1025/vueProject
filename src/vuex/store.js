//引入相关文件
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//定义初始化变量
const state = {
   title:'moive',
   show:false,
   logined:false
}
//定义动作
const mutations = {

}

const actions = {

}

const getters = {

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
