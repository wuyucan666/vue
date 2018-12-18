
<template>
  <div class="hello">
      
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名:">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        
        <el-form-item label="密码:">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>

        <el-form-item label="验证码:">
          <el-input  class="yanzhengma" v-model="form.code"></el-input>
          <span id="spanImg"  v-html="form.codeImgUrl" ></span>
          <span id="huanyihuan" @click="changeCode">换一换</span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" :plain="true" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
 
  </div>
</template>

<script>
export default {
  name: 'Login',
   data() {
      return {
        form: {
          username: '',
          password: '',
          code: '',
          codeImgUrl:'',
          codeImgNum:'',
          url:'http://172.20.10.8:8888'

        }
      }
    },
    methods: {
      onSubmit(){

        if(this.form.username===''||this.form.password===''||this.form.code===''){
          //用户名密码验证码三者都不许为空
          this.$message({
            message: '请完善全部信息!',
            type: 'warning'
          });
        }

        if(this.form.username!==''&&this.form.password!==''&&this.form.code!==''){
          //三者都不为空时，再判断验证码是否正确
          if(this.form.code===this.form.codeImgNum){
              //验证码正确发送后端请求验证用户名，密码是否正确
              this.$axios.get(this.form.url+'/login?name='+this.form.username+'&password='+this.form.password).then(res=>{
                // console.log(res);
                
                if(res.data==='你的用户名或密码错误'){

                    this.$message.error('你的用户名或密码错误');
                
                }else if(res.data==='登录成功'){
                  
                    this.$message({
                      message: '恭喜你，登录成功',
                      type: 'success'
                    });
                    //计算编程式动态路由传参，将用户名密码传入home组件
                    this.$router.push({
                      name: 'Home',
                      params:{
                        name: this.form.username,
                        password: this.form.password
                      }
                    })
                }
              
              });

          }else{
            this.$message.error('验证码错误!');
          }
          
        }
        
      },
      changeCode(){
        this.$axios.get(this.form.url+'/getCode').then(res=>{
          console.log(res.data)
          this.form.codeImgUrl = res.data[0];
          this.form.codeImgNum = res.data[1];
        })
      }
    },
    created(){
      this.$axios.get(this.form.url+'/getCode').then(res=>{
        this.form.codeImgUrl = res.data[0];
        this.form.codeImgNum = res.data[1];
      })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width: 650px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px #555;
  }
  .el-form{
    width: 400px;
    height: 260px;
    margin: 60px auto 30px;
  }
  .yanzhengma{
    width: 100px;
    }
  /* #spanImg{
    margin: 0 10px;
  } */
  #huanyihuan{
    color: #fff;
    text-decoration: underline;
  }

  .el-button{width: 250px;}
  
  label {
    color: #fff !important;
  }
  
</style>
