// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import server from "vue-resource"
import store from './store/'
import AwesomeSwiper from "vue-awesome-swiper"
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


//使用组件
Vue.use(server)
//Vue.use(Vuex)
Vue.use(AwesomeSwiper)
Vue.use(Element)

Vue.config.productionTip = false;

//Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;
Vue.http.options.emulateHTTP = true;
// 自定义指令 固定顶部导航

//vuex
// var store = new Vuex.Store({

//     state:{
//         loadingShow : false
//     },
//     mutations:{
//         // showUserName( event,flag){
//         //     store.state.loadingShow = flag;
//         // },
//         showUserName( event,flag){
//             store.state.loadingShow = flag;
//         },
//         getCartList( event,data ){
//             store.state.cartList = data;
//         },
//         pushCartList( event,data ){
//             store.state.cartList.push(data)
//         }
//     }
// })

//vue-resouse 拦截器
Vue.http.interceptors.push((request, next)  =>{
  //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值
  store.commit('LOADINGING',true);

  next((response) => {

    store.commit('LOADINGING',false);
    return response;
  });

});
//filter全局过滤器
Vue.filter("addFormat￥",function(value){
    return "￥"+value;
});

Vue.filter("timeFormat",function(value){
   return value.slice(5,16);
});

Vue.filter("getDatas",function(value,id){
  for(var i in value){
      if( JSON.stringify(value[i]).match( id )){
      
        return value[i].PictureWebp;
      }
    }
});
Vue.filter("getPrice",function(value,id){
  for(var i in value){
      if( JSON.stringify(value[i]).match( id )){
     
        return value[i].Price;
      }
    }
});

Vue.filter("getStock",function(value,id){
  for(var i in value){
      if( JSON.stringify(value[i]).match( id )){
       
        return value[i].Stock;
      }
    }
});

Vue.filter("getSkuName",function(value,id){
  for(var i in value){
      if( JSON.stringify(value[i]).match( id )){
        
        return value[i].SkuName;
      }
    }
});
Vue.filter("getSelData",function(value,id){
  var arr = []
  for(var i in value){
      if( JSON.stringify(value[i]).match( id )){
        arr.push(value[i])
      }
    }
    
  return arr
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  store, //注入到vuex
  components: { App }
});

