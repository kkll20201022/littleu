
import {reqCateList} from '../../util/request' 
  
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
    requestCateList(context) {
        reqCateList({size:4,page:1}).then(res=>{
            context.commit('changeList',res.data.list)
            console.log(res);
        })
    },
     // 请求获取总数

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