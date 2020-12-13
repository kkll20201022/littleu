import {reqRoleList} from '../../util/request'

const state ={
    //请求回来的数据
    list:[],
}

const mutations={
    changeList(state,arr) {
        state.list = arr
    }
}

//重新刷新列表
const actions={
    requestRoleList(context) {
        reqRoleList({istree:true}).then(res=>{
            context.commit('changeList',res.data.list)
        })
    }
}

const getters ={
    list(state){
        return state.list
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}