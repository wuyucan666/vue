<template>
  <div class="home">
    <el-container>
      <el-header>
        <div>ZW-master为IT而生</div>
        <span id="touxiang" v-if="masterShow">
          <img :src="url+'/uploads/'+user+'.jpg'">
        </span>
        <p>
          您好 {{user}},欢迎来到ZWmaster管理系统
          <span v-if="!masterShow" class="ismaster">如果你是管理员请先
            <router-link to="/" class="tologin">登录</router-link>
          </span>
          <span v-if="masterShow">
            <router-link to="/" class="tologin">退出</router-link>
          </span>
        </p>
      </el-header>

      <el-container>
        <el-aside width="18%" style="overflow:hidden;">
          <div class="logo"></div>
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">管理系统
                <i class="header-icon el-icon-info"></i>
              </template>
              <div>欢迎来到ZWmaster管理系统</div>
            </el-collapse-item>

            <el-collapse-item title="商品管理 username">
              <template slot="title">商品管理 goodslist
                <i class="header-icon el-icon-star-on"></i>
              </template>
              <div>
                <router-link to="goodskind" event="click" exact-active-class="tabactive">
                  <i class="header-icon el-icon-d-arrow-right"></i> 商品种类
                </router-link>
              </div>
              <div>
                <router-link to="goodslist" event="click" exact-active-class="tabactive">
                  <i class="header-icon el-icon-d-arrow-right"></i> 商品列表
                </router-link>
              </div>
            </el-collapse-item>

            <el-collapse-item title="用户管理 goodslist">
              <template slot="title">用户管理 master
                <i class="header-icon el-icon-setting"></i>
              </template>
              <div :class="{'tabactive':isActive==0}" @click="toResetpsd">
                <i class="header-icon el-icon-d-arrow-right"></i>修改密码
              </div>
              <div :class="{'tabactive':isActive==1}" @click="toPerson">
                <i class="header-icon el-icon-d-arrow-right"></i>修改资料
              </div>
              <div :class="{'tabactive':isActive==2}" @click="toUser">
                <i class="header-icon el-icon-d-arrow-right"></i>管理用户
              </div>
            </el-collapse-item>

            <el-collapse-item title="交易管理 Controllability">
              <template slot="title">交易管理 Controllability
                <i class="header-icon el-icon-success"></i>
              </template>
              <div>
                <i class="header-icon el-icon-d-arrow-right"></i>订单列表
              </div>
              <div>
                <i class="header-icon el-icon-d-arrow-right"></i>交易记录
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-aside>

        <el-main>
          <router-view v-if="masterShow"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
export default {
  name: "Home",
  props: ["name", "password"],
  data() {
    return {
      url: "http://172.20.10.8:8888",
      user: this.name,
      pwd: this.password,
      masterShow: false,
      isActive: false
    };
  },
  methods: {
    //判断master为空时，现在内容
    mastershow: function() {
      // console.log(this.user)
      this.masterShow = this.user === undefined ? false : true;
    },
    toResetpsd: function() {
      this.isActive = 0;
      this.$router.push({
        name: "resetpassword",
        params: {
          name: this.user,
          password: this.pwd
        }
      });
    },
    toPerson: function() {
      this.isActive = 1;
      this.$router.push({
        name: "personData",
        params: {
          name: this.user
        }
      });
    },
    toUser: function() {
      this.isActive = 2;
      this.$router.push({
        name: "manageuser"
      });
    }
  },
  created() {
    this.mastershow();
  }
};
</script>


<style>
a {
  color: antiquewhite;
}
header div {
  width: 20%;

  background-color: #303642;
  height: 100%;
  float: left;
  line-height: 60px;
  font-size: 25px;
  color: azure;
  text-align: center;
  font-style: italic;
}
.el-main {
  background: url(../assets/bjimg.jpg) no-repeat center center;
  background-color: rgba(200, 200, 200, 0.6);
}
header p {
  /* font-style: italic */
  color: antiquewhite;
  font-size: 20px;
  float: right;
  line-height: 20px;
  margin-top: 35px;
}
header {
  padding-left: 0 !important;
}

.logo {
  height: 20%;
  background: url(../assets/logo.jpg) no-repeat center center;
  background-origin: cover;
  background-color: #303642;
}
.tologin {
  color: rgb(115, 73, 230);
  text-decoration: underline;
}
.home {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background: linear-gradient(to right, #303642, #1c2230);
}
.el-aside {
  background-color: #303642;
}
.el-collapse-item > div > div {
  background-color: #313743 !important;
  color: aliceblue;
}
.el-collapse-item__arrow {
  margin-top: 20px;
}
.el-collapse-item .el-collapse-item__content {
  background-color: #1c2230 !important;
  color: aliceblue;
}
.el-collapse-item .el-collapse-item__content > div {
  height: 60px;
  line-height: 60px;
}
.el-collapse-item__header {
  height: 80px;
  line-height: 80px;
}
.el-collapse-item .el-collapse-item__content a:hover {
  color: blue;
}
.tabactive {
  color: rgb(182, 54, 199) !important;
}
.ismaster {
  color: orangered;
}
#touxiang {
  position: absolute;
  display: inline-block;
  top: 7px;
  right: 450px;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
#touxiang > img {
  width: 50px;
  height: 50px;
}
</style>
