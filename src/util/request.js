import axios from 'axios'
import qs from 'qs'

const baseUrl ='/api'

//响应拦截 打印出对应请求到的数据
axios.interceptors.response.use(res=>{
    console.log('========请求的路径:'+res.config.url+'=============')
    console.log(res)
    return res
})

//菜单模块的请求
//菜单添加
export const reqMenuAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}

//菜单列表
export const reqMenuList =(data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:data
    })
}

//获取一条数据
export const reqMenuListOne = (data) => {
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:data
    })
}


//编辑修改数据
export const reqMenuEdit = (data) => {
    return axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:data
    })
}


//删除数据
export const reqMenuDel = (data) => {
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:data
    })
}


////////////////////////角色////////////////////////
//角色添加
export const reqRoleAdd = (data) => {
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:data
    })
}

//角色列表
export const reqRoleList=()=>{
    return axios({
        url:baseUrl+'/api/rolelist',
        method:'get',
        
    })
}

// 角色一条数据
export const reqRoleListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:id
    })
}

// 角色编辑
export const reqRoleEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:id
    })
}

// 角色删除
// 角色编辑
export const reqRoleDel=(id)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
        data:id
    })
}


//////////////////////管理员管理//////////////////
//角色添加
export const reqManagerAdd=(data) =>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data: data
    })
}

//获取管理员总数
export const reqManagerCount=() =>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',

    })
}

//管理员列表
export const reqManagerList=(data)=>{
    return axios({
        url:baseUrl+'/api/userlist',
        method:'get',
        params:data
    })
}

//管理员获取（一条）
export const reqManagerListOne=(uid)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:uid
    })
}

//管理员修改
export const reqManagerEdit=(id)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:id
    })
}

//管理员删除
export const reqManagerDel=(uid)=>{
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:uid
    })
}

//管理员登录
export const reqManagerLogin=(data)=>{
    return axios({
        url:baseUrl+'/api/userlogin',
        method:'post',
        data:data
    })
}



////////////////////////商品分类////////////////////////////////////////
//商品添加
export const reqCateAdd=(data)=>{   
    //由于上传的是文件，所以需要用qs转一下
    var form = new FormData()

      // {pid:1,goodsname:'s',img,status}
    for(var i in data){
        form.append(i,data[i])
    }

    return axios({
        url:baseUrl+'/api/cateadd',
        method:'post',
        data:form
    })
}

//商品列表
export const reqCateList=(data)=>{
    return axios({
        url:baseUrl+'/api/catelist',
        method:'get',
        params:data
    })
}


//商品分类获取（一条）
export const reqCateListOne=(id)=>{
    return axios({
        url:baseUrl+'/api/cateinfo',
        method:'get',
        params:id
    })
}

//商品分类修改
export const reqCateEdit=(data)=>{

    var form = new FormData()

    for(var i in data) {
        form.append(i,data[i])
    }

    return axios({
        url:baseUrl+'/api/cateedit',
        method:'post',
        data:form
    })
}

//商品分类删除
export const reqCateDel=(id)=>{
    return axios({
        url:baseUrl+'/api/catedelete',
        method:'post',
        data:id
    })
}

//商品规格管理
// export const reqCateEdit=(data)=>{
//     return axios({
//         url:baseUrl+'/api/specsadd',
//         method:'post',
//         data:data
//     })
// }

//商品规格总数（用于计算分页）**
// export const reqCateEdit=(data)=>{
//     return axios({
//         url:baseUrl+'/api/specscount',
//         method:'get',
      
//     })
// }

//商品规格列表（分页）
// export const reqCateEdit=(data)=>{
//     return axios({
//         url:baseUrl+'/api/specsadd',
//         method:'post',
//         data:data
//     })
// }