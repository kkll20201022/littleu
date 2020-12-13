<template>
  <div>
    <el-container>
      <el-aside width="155px">
        <el-row class="tac">
          <!--           
            <h5>自定义颜色</h5> -->
          <el-menu
            default-active="2"
            router
            class="el-menu-vertical-demo"
      
            background-color="#20222A"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
          <!-- 首页 -->
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>

              <!-- 系统设置 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>系统设置</span>
              </template>
              <el-menu-item index="/index/menu">菜单管理</el-menu-item>
              <el-menu-item index="/index/role">角色管理</el-menu-item>
              <el-menu-item index="/index/manager">管理员管理</el-menu-item>
            </el-submenu>

            <!-- 商品管理 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="/index/classify">商品分类</el-menu-item>
              <el-menu-item index="/index/spec">商品规格</el-menu-item>
              <el-menu-item index="/index/goods">商品管理</el-menu-item>
              <el-menu-item index="/index/vip">会员管理</el-menu-item>
              <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/index/seckill">秒杀活动</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
              <!-- 面包屑导航 -->
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
           <div class="mgt"> <router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>


export default {
  components: {},
  data() {
    return {

    };
  },
  modules: {

  },
  methods: {
    
  },
};
</script>


<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 60px;
  line-height: 60px;
}

.el-aside {
  background-color: #20222a;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100vh;
  overflow:hidden;
}

.el-main {
  background-color: #fff;
  color: #333;
  padding-top: 20px;
  padding-left: 20px;
}


</style>