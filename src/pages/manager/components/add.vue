<template>
  <div>
    <!-- 大标题 -->
    <el-dialog :title="info.title" :visible.sync="info.isShow">
      <el-form :model="form">
        <el-form-item label="*所属角色" :label-width="width">
          <!-- 这里循环的是role里的还是manager的form -->
          <el-select v-model="form.roleid" placeholder="--请选择--">
            <el-option label="请选择" :value="0" disabled></el-option>
            <!-- 动态循环添加数据  菜单分类 -->
            <el-option
              v-for="item in roleList"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="用户名" :label-width="width">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="密码" :label-width="width">
          <el-input v-model="form.password" autocomplete="off"></el-input>
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
        <el-button type="primary" @click="add" v-if="info.isAdd">添 加</el-button>
        <el-button type="primary" @click="update" v-else>修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { reqManagerAdd, reqManagerEdit, reqManagerListOne } from "../../../util/request";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["info"],
  computed: {
    ...mapGetters({
      roleList: "role/list",
    }),
  },
  components: {},
  data() {
    return {
      width: "160px",

      //这里是manager的form
      form: {
        roleid: "",
        username: "",
        password: "",
        status: 1,
      },

      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    //取消弹窗
    hide() {
      this.info.isShow = false;
    },
    ...mapActions({
      requestManagerList: "menu/requestManagerList",
      requestRoleList: "role/requestRoleList",
    }),

    //重置
    empty() {
      this.form = {
        roleid: "",
        username: "",
        password: "",
        status: 1,
      };
    },

    //操作添加
    add() {
      reqManagerAdd(this.form).then((res) => {
        // this.empty();
        this.hide();
        this.requestManagerList();
        this.requestRoleList();
      });
    },

    //获取管理员和角色的列表页
    ...mapActions({
      requestManagerList: "manager/requestManagerList",
      requestRoleList: "role/requestRoleList",
    }),

    //查看一条数据
    look(id) {
      reqManagerListOne({ uid: id }).then((res) => {
        this.form = res.data.list;
        this.form.uid = id;
      });
    },
    //修改数据
    update() {
      reqManagerEdit(this.form).then((res) => {
        this.requestManagerList();
        this.hide();
      });
    },
  },
  mounted() {
    this.requestManagerList();
    this.requestRoleList();
  },
};
</script>
<style></style>
