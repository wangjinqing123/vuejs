//css
import "../styles/usage/page/app.scss";

//导航页
import guide from './components/guide.vue';
//主路由
import index from './components/index.vue';
//主页
import main from './components/main.vue';
import box from './components/box.vue';
import talk from './components/talk.vue';
import message from './components/message.vue';
import mine from './components/mine.vue';
import userDongtai from './components/userDongtai.vue';
//设置页面
import setting from './components/setting.vue';
//其他
import details from './components/details.vue';
//状态管理
import store from './vuex/store.js';


let router = new VueRouter();
let isGuided = false;
var isIndex = false;

//创建一个组件构造器
let App = Vue.extend({
  data(){
    return {
      transitionName:"goto"
    }
  },
  store:store
});
Vue.transition('goto', {
  beforeEnter: function (el) {
    isGuided = store.state.isGuided;
    if(isGuided){
      isGuided = false;
      isIndex = true;
    }
    if(isIndex){
      this.transitionName = "goback";
    }
  }
});
Vue.transition('goback', {
  beforeEnter: function (el) {
    console.log("gggg")
    this.transitionName = "goto";
  }
})
//把构造器用作组件 Vue.component('view',App);

router.map({
  '/':{
    component:guide
  },
  '/index':{
    component:index,
    subRoutes:{
      '/':{
        component:main
      },
      '/talk':{
        component:talk
      },
      '/message':{
        component:box
      },
      '/box':{
        component:message
      },
      '/mine':{
        component:mine
      }
    }
  },
  '/talkinner/:id':{
    name:'userDongtai',
    component:userDongtai
  },
  "/setting":{
    name:'setting',
    component:setting
  },
  "/details/:id":{
    name:'details',
    component:details
  }

});

router.start(App,'body');



router.beforeEach(function (transition) {

  if (transition.to.path === '/forbidden') {
    transition.abort()
  } else {
    transition.next()
  }
})

router.afterEach(function (transition) {
  // console.log('成功浏览到: ' + transition.to.path);
});













//
