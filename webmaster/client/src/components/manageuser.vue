<template>
  <div class="manageuser">
    <div class="serachtop">
      <label for="loginname">登录名
        <el-input placeholder="请输入内容" v-model="input1" clearable id="loginname"></el-input>
      </label>
      <label for="phone">手机
        <el-input placeholder="请输入内容" v-model="input2" clearable type="phone" id="phone"></el-input>
      </label>
      <label for="email">邮箱
        <el-input placeholder="请输入内容" v-model="input3" clearable type="email" id="email"></el-input>
      </label>
      <label for="juese">角色
        <el-select v-model="value" placeholder="管理员">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            id="juese"
          ></el-option>
        </el-select>
        <el-button icon="el-icon-search" type="success"></el-button>
      </label>
    </div>
    <div class="btns">
      <el-button type="success" @click="removeuser">删除</el-button>
      <el-button type="success" @click="adduser">添加</el-button>
    </div>
    <div class="table">
      <el-table
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="id" width="120" prop="id" sortable>
          <!-- <template slot-scope="scope">{{ scope.row.ID }}</template> -->
        </el-table-column>
        <el-table-column prop="name" label="登录名" width="120"></el-table-column>
        <el-table-column prop="iphone" label="手机" show-overflow-tooltip></el-table-column>
        <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
        <el-table-column prop="juese" label="角色" show-overflow-tooltip></el-table-column>
        <el-table-column prop="shijian" label="加入时间" sortable show-overflow-tooltip></el-table-column>
        <el-table-column prop="status" label="审核状态" show-overflow-tooltip></el-table-column>
        <el-table-column fixed="right" label="操作" width="160">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-edit" @click="open(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="open1(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="40"
      ></el-pagination>
    </div>
    <div class="mack" v-if="isShow">
      <el-form class="userform">
        <el-form-item label="id:">
          <el-input type="text" id="userid" v-model="userid" disabled></el-input>
        </el-form-item>
        <br>
        <el-form-item label="登录名:">
          <el-input type="text" id="username" v-model="username"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="手机:">
          <el-input type="phone" id="usertell" v-model="usertell"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="邮箱:">
          <el-input type="email" id="useremail" v-model="useremail"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="角色:">
          <el-input type="text" id="userjuese" v-model="userjuese"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="加入时间:">
          <!-- <el-date-picker
                        v-model="usertime"
                        type="date"
                        placeholder="选择日期">
          </el-date-picker>-->
          <el-input type="text" id="usertime" v-model="usertime" disabled></el-input>
        </el-form-item>
        <br>
        <el-form-item label="审核状态:">
          <el-select type="text" v-model="userstatus" id="userstatus" placeholder="审核状态">
            <el-option label="未审核" value="未审核"></el-option>
            <el-option label="已审核" value="已审核"></el-option>
          </el-select>
        </el-form-item>
        <br>
        <el-button type="primary" @click="changeuser">确定</el-button>
        <el-button :plain="true" @click="isShow=!isShow">取消</el-button>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      url: "http://172.20.10.8:8888",
      input1: "",
      input2: "",
      input3: "",
      options: [
        {
          value: "选项1",
          label: "管理员"
        },
        {
          value: "选项2",
          label: "超级管理员"
        }
      ],
      value: "",
      userid: "", //id
      username: "", //登录名
      usertell: "", //电话
      useremail: "", //邮箱
      userjuese: "", //角色
      usertime: "", //加入时间
      userstatus: "", //审核状态
      currentPage: 1,
      tableData3: [], //保存用户信息数据
      isShow: false, //遮罩表单
      multipleSelection: "" //保存勾选的信息
      // total:''
    };
  },
  methods: {
    //勾选复选框触发
    handleSelectionChange(val) {
      //把选中的信息id已-拼接起来赋值给multipleSelection
      this.multipleSelection = val
        .map(item => {
          return item.id + "-";
        })
        .join("")
        .slice(0, -1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    open(row) {
      //点击编辑按钮，出现表单框，并且把当前行row的信息赋值给data中的对应用户信息
      this.isShow = !this.isShow;
      console.log(row);
      this.userid = row.id;
      this.username = row.name;
      this.usertell = row.iphone;
      this.useremail = row.email;
      this.userjuese = row.juese;
      this.usertime = row.shijian;
      this.userstatus = row.status;
    },
    open1(row) {
      //点击删除按钮，发送请求，删除数据库数据（id）
      this.$axios.get(this.url + "/delete?id=" + row.id).then(res => {
        // console.log(res);
        if (res.data.affectedRows === 1) {
          this.$message({
            message: "删除成功!",
            type: "sucess"
          });
          //删除成功再次发送请求拿数据更新页面
          this.$axios.get(this.url + "/manageuser").then(res => {
            console.log(res.data);
            this.tableData3 = res.data;
          });
        } else {
          this.$message.error("删除失败!");
        }
      });
    },
    adduser() {
      //点击添加按钮，表单框出现，同时清空表单内容
      // console.log('add');
      this.isShow = !this.isShow;
      this.userid = "";
      this.username = "";
      this.usertell = "";
      this.useremail = "";
      this.usertime = "";
      this.userjuese = "";
    },
    removeuser() {
      //多选删除
      if (this.multipleSelection === "") {
        // this.multipleSelection为空时，弹出提示框
        this.$alert("请勾选数据信息", "错误操作!", {
          confirmButtonText: "确定",
          callback: action => {
            this.$message({
              type: "info",
              message: `请勾选!`
            });
          }
        });
      } else {
        //this.multipleSelection不为空时，弹出提示框
        this.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            //点击确定按钮发送请求去/removeuser
            this.$message({
              type: "success",
              message: "删除成功!"
            });

            this.$axios
              .get(this.url + "/removeuser?id=" + this.multipleSelection)
              .then(res => {
                // console.log(res);
                if (res.data === true) {
                  //发送请求从数据库拿数据渲染页面
                  this.$axios.get(this.url + "/manageuser").then(res => {
                    console.log(res.data);
                    this.tableData3 = res.data;
                  });
                } else {
                  this.$message.error("操作失败!");
                }
              });
          })
          .catch(() => {
            //点击取消
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
      }
    },
    changeuser() {
      //点击表单确定按钮提交表单信息（如果id为空在后端执行插入代码语句，如果id不为空在后端执行修改语句）

      //表单id和时间可以为空
      if (
        this.username === "" ||
        this.usertell === "" ||
        this.useremail === "" ||
        this.userjuese === "" ||
        this.userstatus === ""
      ) {
        this.$message({
          message: "请完善全部信息!",
          type: "warning"
        });
      } else if (!/^1[34578]\d{9}$/.test(this.usertell)) {
        //手机验证
        this.$message.error("手机格式不合法");
      } else if (
        !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
          this.useremail
        )
      ) {
        this.$message.error("邮箱格式不合法"); //邮箱验证
      } else {
        //合格发送请求
        this.$axios({
          method: "post",
          url: this.url + "/changeuserlist",
          data:
            "id=" +
            this.userid +
            "&name=" +
            this.username +
            "&iphone=" +
            this.usertell +
            "&email=" +
            this.useremail +
            "&juese=" +
            this.userjuese +
            "&status=" +
            this.userstatus
        }).then(res => {
          console.log(res);
          if (res.data.affectedRows === 0) {
            this.$message.error("操作失败!没有该id用户");
          } else {
            this.$message({
              message: "操作成功!",
              type: "sucess"
            });
            //操作成功遮罩框表单隐藏
            this.isShow = !this.isShow;
            //发送请求从数据库拿数据渲染页面
            this.$axios.get(this.url + "/manageuser").then(res => {
              console.log(res.data);
              this.tableData3 = res.data;
            });
          }
        });
      }
    }
  },
  created() {
    //发送请求从数据库拿数据渲染页面，一进入就执行
    this.$axios.get(this.url + "/manageuser").then(res => {
      console.log(res.data);
      res.data.forEach(item => {
        item.shijian = new Date(item.shijian).toLocaleDateString();
      });
      this.tableData3 = res.data;
    });

    //发送请求数据的数量
    // this.$axios.get(this.url+'/getcount').then(res=>{
    //     console.log(res.data);
    //     this.total = res.data;
    // })
  }
};
</script>


<style>
.manageuser .el-input {
  width: 180px;
}
.manageuser .serachtop {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
.manageuser label {
  margin-right: 10px;
}
.manageuser .btns {
  margin: 10px 0 0 8px;
}
.manageuser .el-button--mini,
.el-button--mini.is-round {
  padding: 7px 5px;
}
.manageuser .cell {
  overflow: visible !important;
}
.manageuser .cell button {
  width: 60px;
}
.manageuser .block {
  margin: 10px;
}
.manageuser .mack {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(27, 27, 29, 0.449);
  z-index: 500;
}
.manageuser .userform {
  width: 580px;
  height: 600px;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.manageuser .mack .el-form-item__content {
  width: 500px;
}
.manageuser .mack .el-form-item__label {
  margin: 2px 0 0 135px;
}
.manageuser .el-form-item {
  margin: 0;
}
</style>
