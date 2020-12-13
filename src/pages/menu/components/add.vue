<template>
  <div>
    <!-- 大标题 -->
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <!-- 菜单名称 -->
        <el-form-item label="*菜单名称" :label-width="width">
          <!-- autocomplete 属性规定输入字段是否应该启用自动完成功能。

自动完成允许浏览器预测对字段的输入。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。 -->
          <el-input v-model="form.title" autocomplete="on"></el-input>
        </el-form-item>

        <el-form-item label="*上级菜单">
          <el-select v-model="form.pid" placeholder="请选择" @change="changePid">
            <el-option label="顶级菜单" value="0"></el-option>
                 <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in menuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <!-- 菜单类型 -->
        <el-form-item label="菜单类型" :label-width="width">
          <el-radio v-model="form.type" :label="1" >目录</el-radio>
          <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
        </el-form-item>

        <el-form-item
          label="菜单图标"
          :label-width="width"
          v-if="form.type == 1"
        >
          <el-select v-model="form.icon" placeholder="请选择活动区域">
            <el-option label="星星" value="el-icon-star-on">
              <i class="el-icon-star-on"></i>
            </el-option>
            <el-option label="人物" value="el-icon-user-solid">
              <i class="el-icon-user-solid"></i>
            </el-option>
            <el-option label="铃铛" value="el-icon-message-solid">
              <i class="el-icon-message-solid"></i>
            </el-option>
            <el-option label="书签" value="">
              <i class="el-icon-collection-tag"></i>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="菜单地址" :label-width="width" v-else>
          <el-select v-model="form.url" placeholder="请选择活动区域">
            <el-option
              v-for="item in indexRouters"
              :key="item.path"
              :label="'/' + item.path"
              :value="item.name"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="状态" :label-width="width">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="info.isShow = false">取 消</el-button>
        <el-button type="primary" @click="add" v-if="info.isAdd">添加</el-button>
        <el-button type="primary" @click="edit"  v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
//引入之前暴露的路由集合
import {indexRouters} from '../../../router/index'
import {reqMenuAdd,reqMenuListOne,reqMenuEdit} from '../../../util/request'
import{mapGetters,mapActions} from 'vuex';
// import{requestMenuList} from '../../../modules/menu'

export default {
  props:['info'],
  computed:{
      ...mapGetters({
      menuList: "menu/list",
    }),
  },
  components: {},
  data() {
    return {
      width:'160px',

      form:{
        pid:'',
        title:'',
        type:0,
        icon:'',
        url:'',
        status:1,
      },
        indexRouters:indexRouters,
    };
  },
  methods:{
    //取消弹窗
    hide(){
      this.info.isShow=false
    },
    ...mapActions({
        requestMenuList: "menu/requestMenuList",
    }),

    //重置
    empty(){
         this.form={
        pid: "",
        title: "",
        type: 0,
        icon: "",
        url: "",
        status: 1,
      }
    },
    //引入仓库的方法
    ...mapActions({
      requestMenuList: "menu/requestMenuList",
    }),
  
    //操作添加
    add(){
      reqMenuAdd(this.form).then(res=>{
        this.hide();
        this.requestMenuList();
        this.empty()
      })
 
    },
    //修改type状态
    changePid(){
      this.form.type=this.form.pid==0?1:2
    },
    //查看一条数据
    look(id) {
      reqMenuListOne({id:id}).then(res=>{
        this.form=res.data.list;
        this.form.id=id
      })
    },
    //修改数据
    edit(){
        reqMenuEdit(this.form).then((res) => {
        this.hide();
        this.requestMenuList();
        this.empty()
      });
    }
  }
};

</script>
<style>
</style>