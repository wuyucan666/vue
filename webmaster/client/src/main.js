// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui框架
import Element from 'element-ui'
//注册element-ui
Vue.use(Element);
//引入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
//引入axios
import axios from 'axios';
    
// 方便在其他组件中直接使用axios
Vue.prototype.$axios = axios;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
