<template>
  <div class="box">
    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <!-- 为啥是id，不是roleid -->
      <el-table-column prop="id" label="用户编号" sortable width="180"> </el-table-column>
      <el-table-column prop="username" label="用户名" sortable width="180">
      </el-table-column>
      <el-table-column prop="roleid" label="所属角色" sortable width="180">
      </el-table-column>

      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1">启用</el-button>
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.uid)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.uid)">删除</el-button>
        </template>
        <!-- 为啥是uid ，不是id或者roleid -->
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { reqManagerDel } from "../../../util/request";
export default {
  components: {},
  computed: {
    ...mapGetters({
      list: "manager/list",
    }),
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      requestManagerList: "manager/requestManagerList",
    }),
    //编辑
    edit(id) {
      this.$emit("edit", id);
    },
    //删除

    del(id) {
      reqManagerDel({ uid: id }).then((res) => {
        alert("删除成功");
        this.requestManagerList();
      });
    },
  },
  mounted() {
    this.requestManagerList();
  },
};
</script>

<style scoped>
.box {
  padding-left: 20px;
  padding-top: 20px;
}
</style>
