//引入vue 和路径
import Vue from 'vue'
import Router from 'vue-router'

//懒加载引入各个主页面端口
const login =()=>import('../pages/login/login')
const index = ()=>import('../pages/index/index')
const home = ()=>import('../pages/home/home')
const menu = ()=>import('../pages/menu/menu')
const manager = ()=>import('../pages/manager/manager')
const role = ()=>import('../pages/role/role')
const classify = ()=>import('../pages/classify/classify')
const spec = ()=>import('../pages/spec/spec')
const goods = ()=>import('../pages/goods/goods')
const banner = ()=>import('../pages/banner/banner')
const vip = ()=>import('../pages/vip/vip')
const seckill = ()=>import('../pages/seckill/seckill')

//用路径
Vue.use(Router)


//暴露端口
export const indexRouters = [
    {
        path:'menu',
        component:menu,
        name:'菜单管理'
    },
    {
        path:'role',
        component:role,
        name:'角色管理'
      },
      {
        path:'manager',
        component:manager,
        name:'管理员管理'
      },
      {
        path:'classify',
        component:classify,
        name:'商品分类'
      },
      {
        path:'spec',
        component:spec,
        name:'商品规格'
      },
      {
        path:'goods',
        component:goods,
        name:'商品管理'
      },
      {
        path:'vip',
        component:vip,
        name:'会员管理'
      },
      {
        path:'banner',
        component:banner,
        name:'轮播图管理'
      },
      {
        path:'seckill',
        component:seckill,
        name:'秒杀活动'
      },
    
]

export default new Router({
    routes:[
        {
            path:'/login',
            component:login
        },
        {
            path:'/index',
            component:index,
            children:[
                {
                    path:'home',
                    component:home
                },
                //默认去home页
                {
                    path:'',
                    redirect:'home'
                },
                ...indexRouters
            ]
        }
    ]
})