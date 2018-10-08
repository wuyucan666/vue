import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
Vue.use(Router)
import goodslist from '@/components/goodslist'
import goodskind from '@/components/goodskind'
import resetpassword from '@/components/resetpassword'
import personData from  '@/components/personData'
import manageuser from '@/components/manageuser'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: login
    },
    {
      path: '/home',
      name: 'Home',
      component: home,
      props:function(route){
        // console.log(route.params);
        return Object.assign({},route.params)
      },
      children:[
        {
          path: '/goodslist',
          name: 'goodslist',
          component: goodslist
        },
        {
          path: '/goodskind',
          name: 'goodskind',
          component: goodskind
        },
        {
          path: '/resetpassword',
          name: 'resetpassword',
          component: resetpassword,
          props:function(route){
            // console.log(route.params);
            return Object.assign({},route.params)
          }
        },
        {
          path:'/personData',
          name:'personData',
          component:personData,
          props:function(route){
            // console.log(route.params);
            return Object.assign({},route.params)
          }
        },
        {
          path:'/manageuser',
          name:'manageuser',
          component:manageuser
        }
      ]
    }
  ]
})
