<template>
  <div>
    <el-button type='primary' class="tianjia" @click='willAdd'>添加</el-button>
    <!-- 添加 -->
    <v-add :info='info' ref="one"></v-add>
    <!-- 列表 -->
    <v-list @edit='edit($event)'></v-list>
  </div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
  components: {
    vAdd,
    vList
  },
  data() {
    return {
      info:{
        isShow:false,
        isAdd:true,
        title:''
      }
    };
  },
  modules: {},
  methods:{
    //点击添加
    willAdd(){
      this.info.isShow= !this.info.isShow
      this.info.isAdd=true
      this.info.title='添加列表'
    },
   // 编辑
    edit(e){
        // console.log(e)
        // this.info.isShow =true
        // this.info.isAdd = false
        this.info={
            isShow:true,
            isAdd:false,
            title:'菜单编辑'
        }
        console.log(this.$refs.one)
        this.$refs.one.look(e)
    }
  }
};
</script>
<style>
.tianjia {
  margin-top: 20px;
  
}
</style>