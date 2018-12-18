<template>
  <div id="personData">
    <el-form label-posstion="right" prop="name">
      <!-- <el-form-item label="我的角色:" >
                 <el-select placeholder="请选择身份"  >
                    <el-option value="master"  label="master" >管理员</el-option>
                    <el-option value="master"  label="master" >超级管理员</el-option>
                 </el-select>
      </el-form-item>-->
      <el-form-item label="用户名:">
        <el-input v-model="myname" disabled></el-input>
      </el-form-item>

      <el-form-item label="电话:">
        <el-input v-model="form.iphone"></el-input>
      </el-form-item>

      <el-form-item label="性别:">
        <el-radio value="nan" v-model="sex" label="男">男</el-radio>
        <el-radio value="nv" v-model="sex" label="女">女</el-radio>
      </el-form-item>

      <el-form-item label="头像上传：">
        <el-upload
          class="upload-demo"
          name="file1"
          :action="'http://10.3.137.7:8888/imgupload?name='+myname"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="昵称:">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>

      <el-form-item label="邮箱:">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="备注:">
        <el-input type="textarea" v-model="form.textare"></el-input>
      </el-form-item>

      <el-button @click="submit" type="success">提交</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form>
  </div>
</template>



<script>
export default {
  props: ["name"],
  data() {
    return {
      radio: "1",
      url: "http://172.20.10.8:8888",
      myname: this.name,
      sex: "",
      form: {
        textare: "",
        iphone: ""
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
      console.log(5656);
    },
    reset: function() {
      for (var i in this.form) {
        this.form[i] = "";
      }
    },
    open4() {
      this.$notify.error({
        title: "错误",
        message: "输入有误，请从新输入。"
      });
    },
    open2() {
      this.$message({
        message: "恭喜你，修改成功",
        type: "success"
      });
    },
    submit: function() {
      this.form.sex = this.sex;
      this.form.name = this.myname;
      this.form.iphone != "" &&
      this.form.email != "" &&
      this.form.sex != "" &&
      this.nickname != ""
        ? this.resetData()
        : this.open4();
    },

    resetData: function() {
      // console.log(this.form)
      this.$axios({
        url: "/api/resetData",
        method: "post",
        data: (() => {
          let data = "";
          for (let key in this.form) {
            data += key + "=" + this.form[key] + "&";
          }
          data = data.slice(1);
          console.log(data);
          return data;
        })()
      }).then(res => {
        this.open2();
      });
    }
  },
  created() {
    this.$axios.get(this.url + "/personData?name=" + this.myname).then(res => {
      Object.assign(this.form, res.data[0]);
      this.sex = res.data[0].sex;
    });
  }
};
</script>

<style>
#personData {
  width: 60%;
}
</style>
