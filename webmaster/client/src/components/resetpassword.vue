<template>
    <div id="resetpassword" >
    <el-form>
    <el-form-item label="当前密码">
            <el-input type="password"  v-model="psd"  ></el-input>
    </el-form-item>
    <el-form-item label="新密码">
            <el-input type="password" v-model="newpwd"  @blur="escle" ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" >
            <el-input type="password"  v-model="delpwd"  @blur="miscle"  ></el-input>
    </el-form-item>
    <el-button plain type="primary"  @click="togo"  >提交</el-button>
    </el-form>
    </div>
</template>



<script>
export default {
    props:['password','name'],
    data(){
        return {
           delpwd:'',
           newpwd:'',
           psd:this.password,
           url:'http://172.20.10.8:8888'
        }
    },
    methods:{
         open1() {
        this.$notify({
          title: '成功',
          message: '密码修改成功',
          type: 'success',
          
         
        });
      },

      open2() {
        this.$notify({
          title: '警告',
          message: '密码长度不符合6-16位',
          type: 'warning'
        });
      },
      open3(){
         this.$notify({
          title: '警告',
          message: '两次输入密码不一致',
          type: 'warning'
        });
      },
      open4(){
           this.$notify.error({
          title: '错误',
          message: '输入有误，请从新输入。'
        });
        this.newpwd='';
        this.delpwd='';
      },
      //链接数据库进行修改密码
      resetname:function(){
          this.$axios.get(this.url+'/resetname?name='+this.name+'&password='+this.newpwd).then(res=>{
              console.log(res);
              this.open1();
               this.psd=this.newpwd;
               this.newpwd='';
               this.delpwd='';
               setTimeout(()=>{
                     this.$alert('登录过期，请从新登录', '登录过期', {
                        confirmButtonText: '确定',
                        callback: action => {
                           this.$router.push({
                                 name:'Login',
                           })
                        }
                   })
               },3000)
             

          })
       
      },
      //验证二次是否一致
      miscle:function(){
          this.delpwd==this.newpwd ? null : this.open3();
      },
      //验证密码长度
      escle:function(){
       /^[\w]{6,16}$/.test(this.newpwd)===true ? null : this.open2();
      },
      //修改验证
      togo:function(){
         this.delpwd==this.newpwd &&  /^[\w]{6,16}$/.test(this.newpwd)===true ? this.resetname() : this.open4();
      }

    },
    created(){

    }
}
</script>
