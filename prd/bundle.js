/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	var _guide = __webpack_require__(5);
	
	var _guide2 = _interopRequireDefault(_guide);
	
	var _index = __webpack_require__(8);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _main = __webpack_require__(13);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _box = __webpack_require__(19);
	
	var _box2 = _interopRequireDefault(_box);
	
	var _talk = __webpack_require__(22);
	
	var _talk2 = _interopRequireDefault(_talk);
	
	var _message = __webpack_require__(25);
	
	var _message2 = _interopRequireDefault(_message);
	
	var _mine = __webpack_require__(28);
	
	var _mine2 = _interopRequireDefault(_mine);
	
	var _userDongtai = __webpack_require__(31);
	
	var _userDongtai2 = _interopRequireDefault(_userDongtai);
	
	var _setting = __webpack_require__(34);
	
	var _setting2 = _interopRequireDefault(_setting);
	
	var _store = __webpack_require__(41);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//设置页面
	
	//主页
	
	
	//导航页
	var router = new VueRouter();
	//状态管理
	
	//主路由
	//css
	
	var isGuided = false;
	var isIndex = false;
	
	//创建一个组件构造器
	var App = Vue.extend({
	  data: function data() {
	    return {
	      transitionName: "goto"
	    };
	  },
	
	  store: _store2.default
	});
	Vue.transition('goto', {
	  beforeEnter: function beforeEnter(el) {
	    isGuided = _store2.default.state.isGuided;
	    if (isGuided) {
	      isGuided = false;
	      isIndex = true;
	    }
	    if (isIndex) {
	      this.transitionName = "goback";
	    }
	  }
	});
	Vue.transition('goback', {
	  beforeEnter: function beforeEnter(el) {
	    console.log("gggg");
	    this.transitionName = "goto";
	  }
	});
	//把构造器用作组件 Vue.component('view',App);
	
	router.map({
	  '/': {
	    component: _guide2.default
	  },
	  '/index': {
	    component: _index2.default,
	    subRoutes: {
	      '/': {
	        component: _main2.default
	      },
	      '/talk': {
	        component: _talk2.default
	      },
	      '/message': {
	        component: _box2.default
	      },
	      '/box': {
	        component: _message2.default
	      },
	      '/mine': {
	        component: _mine2.default
	      }
	    }
	  },
	  '/talkinner/:id': {
	    name: 'userDongtai',
	    component: _userDongtai2.default
	  },
	  "/setting": {
	    name: 'setting',
	    component: _setting2.default
	  }
	
	});
	
	router.start(App, 'body');
	
	router.beforeEach(function (transition) {
	
	  if (transition.to.path === '/forbidden') {
	    transition.abort();
	  } else {
	    transition.next();
	  }
	});
	
	router.afterEach(function (transition) {
	  // console.log('成功浏览到: ' + transition.to.path);
	});
	
	//

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\guide.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./guide.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template >
	//   <div class="m-guide">
	//     <div class="swiper-contianer guide-swiper" id="guide-swiper">
	//       <div class="swiper-wrapper">
	//         <div class="swiper-slide" v-for="item in imgList">
	//           <img v-if="$index==3" v-bind:src="item" v-link="{path:'/index'}" alt="">
	//           <img v-else v-bind:src="item" alt="">
	//         </div>
	//       </div>
	//       <div class="swiper-pagination guide-pagination"></div>
	//     </div>
	//   </div>
	// </template>
	//
	//
	// <script>
	
	
	exports.default = {
	  data: function data() {
	    return {
	      imgList: ["/images/001.jpg", "/images/006.jpg", "/images/007.jpg", "/images/008.jpg"]
	    };
	  },
	  ready: function ready() {
	    setTimeout(function () {
	      new Swiper('#guide-swiper', {
	        pagination: '.guide-pagination'
	      });
	    }, 1000);
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-guide\">\n  <div class=\"swiper-contianer guide-swiper\" id=\"guide-swiper\">\n    <div class=\"swiper-wrapper\">\n      <div class=\"swiper-slide\" v-for=\"item in imgList\">\n        <img v-if=\"$index==3\" v-bind:src=\"item\" v-link=\"{path:'/index'}\" alt=\"\">\n        <img v-else v-bind:src=\"item\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"swiper-pagination guide-pagination\"></div>\n  </div>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(10);
	
	var _getters = __webpack_require__(11);
	
	//
	// <template>
	//   <div class="container-box commonColor">
	//     <router-view transition="fade"></router-view>
	//     <footer id="footer">
	//       <ul>
	//         <li v-bind:class="tabIndex == $index ? 'Active' : 'footerC'"
	//             v-for="item in footerData"
	//             v-link="{path:item.path}"
	//             v-on:click="changPage($index)">
	//           <i class="icon iconfont">{{{item.icon}}}</i>
	//           <span>{{item.name}}</span>
	//         </li>
	//       </ul>
	//     </footer>
	//   </div>
	// </template>
	//
	//
	// <script>
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    },
	    getters: {
	      tabIndex: _getters.getTabindex
	    }
	  },
	  data: function data() {
	    return {
	      footerData: [{ path: '/index', icon: "&#x3433;", name: "首页" }, { path: '/index/talk', icon: "&#xe642;", name: "话题" }, { path: '/index/box', icon: "&#xe639;", name: "消息" }, { path: '/index/message', icon: "&#xe6ca;", name: "盒子" }, { path: '/index/mine', icon: "&#xe690;", name: "我" }]
	    };
	  },
	
	  methods: {
	    changPage: function changPage(i) {
	      this.change(i);
	    }
	  }
	};
	
	// </script>

	/* generated by vue-loader */

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tabChanger = exports.tabChanger = function tabChanger(_ref, tabIndex) {
	  var dispatch = _ref.dispatch;
	  var state = _ref.state;
	
	  dispatch('CHANGETAB', tabIndex);
	};
	
	var isGuided = exports.isGuided = function isGuided(_ref2, _isGuided) {
	  var dispatch = _ref2.dispatch;
	  var state = _ref2.state;
	
	  dispatch("ISGUIDED", _isGuided);
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var getTabindex = exports.getTabindex = function getTabindex(state) {
	  return state.tabIndex;
	};
	
	var isGuided = exports.isGuided = function isGuided(state) {
	  return state.isGuided;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n\n<div class=\"container-box commonColor\">\n  <router-view transition=\"fade\"></router-view>\n  <footer id=\"footer\">\n    <ul>\n      <li v-bind:class=\"tabIndex == $index ? 'Active' : 'footerC'\"\n          v-for=\"item in footerData\"\n          v-link=\"{path:item.path}\"\n          v-on:click=\"changPage($index)\">\n        <i class=\"icon iconfont\">{{{item.icon}}}</i>\n        <span>{{item.name}}</span>\n      </li>\n    </ul>\n  </footer>\n</div>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\main.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./main.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueLoading = __webpack_require__(15);
	
	var _vueLoading2 = _interopRequireDefault(_vueLoading);
	
	var _commonUtil = __webpack_require__(17);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _actions = __webpack_require__(10);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//tabbar的切换
	
	
	//状态管理
	// <!-- v-link="{name:'detailname', params:{id:123}}" -->
	// <template>
	//   <div>
	//     <header id="header" class="borderBottom">
	//       <ul>
	//         <li class="Active text" v-on:click="styleSheet">{{headLeft}}</li>
	//         <li class="switch headCenter">
	//           <template v-for="item in headSwitch">
	//             <span
	//             class="switchStyle" v-bind:class="{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}" v-on:click="switchPage($index)">{{item.name}}</span>
	//           </template>
	//         </li>
	//         <li class="search"><span class="icon iconfont">{{{headRight}}}</span></li>
	//       </ul>
	//     </header>
	//     <div id="body">
	//
	//       <div class="container-box commonColor">
	//         <div class="swiper-container index-swiper">
	//           <div class="swiper-wrapper">
	//             <div v-for="slide in swiperSildes" class="swiper-slide commonColor" id="swiperPageOne">
	//
	//
	//               <template v-if="$index==0">
	//                 <!-- 加载框 -->
	//                 <div v-loading="isLoading" class="loading"></div>
	//
	//                 <div id="w-index-scroll" class="scroll-view">
	//                   <div class="scroll">
	//
	//                     <div class="head freshColor" v-if="slide.isFreshShow" id="fresh-head">
	//                       <img v-bind:src="slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
	//                       <span class="smallFont">下拉刷新...</span>
	//                     </div>
	//
	//                     <div class="item commonColor borderBottom"  v-for="item in list">
	//                       <div class="tuijian-box smallFont">
	//                         <span class="tuijianren cellDeepColor" v-if="item.tuijianzhe">{{item.tuijianzhe}}</span>
	//                         <span class="tuijian textColor2" v-if="item.tuijian">{{item.tuijian}}</span>
	//                       </div>
	//                       <div class="title  cellDeepColor">
	//                         <span class="middleFont">{{item.title}}</span>
	//                       </div>
	//                       <div class="user-info">
	//                         <div class="user-box">
	//                           <img class="user-icon" v-bind:src="item.userIcon"></img>
	//                         </div>
	//                         <!-- 头像 -->
	//                         <div class="head-box">
	//                           <img class="head-img"
	//                            v-link="{name:'userDongtai',params:{id:item.id}}"                    v-bind:src="item.headimg"></img>
	//                           <span class="user-name textColor2 smallFont">{{item.username}}</span>
	//                         </div>
	//                         <div>
	//                           <img class="other" v-bind:src="item.xiala"></img>
	//                         </div>
	//                       </div>
	//                        <div v-link="{name:'userDongtai',params:{id:item.id}}"  class="image-box" v-if="item.image!=undefined">
	//                         <img v-bind:src="item.image"></img>
	//                       </div>
	//                       <div class="span-box" v-if="item.desc">
	//                         <span class="textColor3 smallFont">{{item.desc}}</span>
	//                       </div>
	//                       <div class="bottom smallFont">
	//                         <div class="bottom-item right">
	//                           <span class="time textColor2">{{item.time}}</span>
	//                         </div>
	//                         <div class="bottom-item">
	//                           <div class="icon zhuanfa-box">
	//                             <span class="zhuanfa textColor4">{{item.zhuanfaCount}}</span>
	//                             <img v-bind:src="item.zhuanfa"></img>
	//                           </div>
	//                           <div class="icon pinglun-box">
	//                             <span class="pinglun textColor4">{{item.pinglunCount}}</span>
	//                             <img v-bind:src="item.pinglun"></img>
	//                           </div>
	//                           <div class="icon zan-box">
	//                             <span class="zan textColor4">{{item.zanCount}}</span>
	//                             <img v-bind:src="item.zan"></img>
	//                           </div>
	//                         </div>
	//                       </div>
	//                     </div>
	//
	//                     <div class="foot freshColor" id="fresh-foot" v-if="slide.isLoadShow">
	//                       <img v-bind:src="slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
	//                       <span class="smallFont">上拉加载更多...</span>
	//                     </div>
	//
	//                   </div>
	//                 </div>
	//               </template>
	//               <template v-if="$index==1">
	//                 <!-- 加载框 -->
	//                 <div v-loading="isLoading2" class="loading"></div>
	//
	//                 <div id="w-index-scroll2" class="scroll-view">
	//                   <div class="scroll">
	//
	//                     <div class="head freshColor" v-if="slide.isFreshShow" id="fresh-head">
	//                       <img v-bind:src="slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
	//                       <span class="smallFont">下拉刷新...</span>
	//                     </div>
	//
	//                     <div class="item commonColor borderBottom"  v-for="item in list2">
	//                       <div class="tuijian-box smallFont">
	//                         <span class="tuijianren cellDeepColor" v-if="item.tuijianzhe">{{item.tuijianzhe}}</span>
	//                         <span class="tuijian textColor2" v-if="item.tuijian">{{item.tuijian}}</span>
	//                       </div>
	//                       <div class="title  cellDeepColor">
	//                         <span class="middleFont">{{item.title}}</span>
	//                       </div>
	//                       <div class="user-info">
	//                         <div class="user-box">
	//                           <img class="user-icon" v-bind:src="item.userIcon"></img>
	//                         </div>
	//                         <!-- 头像 -->
	//                         <div class="head-box">
	//                           <img class="head-img" v-link="{name:'userDongtai',params:{id:item.id}}" v-bind:src="item.headimg"></img>
	//                           <span class="user-name textColor2 smallFont">{{item.username}}</span>
	//                         </div>
	//                         <div>
	//                           <img class="other" v-bind:src="item.xiala"></img>
	//                         </div>
	//                       </div>
	//                       <!-- 大图片 -->
	//                        <div class="image-box" v-link="{name:'userDongtai',params:{id:item.id}}" v-if="item.image!=undefined">
	//                         <img v-bind:src="item.image"></img>
	//                       </div>
	//                       <div class="span-box" v-if="item.desc">
	//                         <span class="textColor3 smallFont">{{item.desc}}</span>
	//                       </div>
	//                       <div class="bottom smallFont">
	//                         <div class="bottom-item right">
	//                           <span class="time textColor2">{{item.time}}</span>
	//                         </div>
	//                         <div class="bottom-item">
	//                           <div class="icon zhuanfa-box">
	//                             <span class="zhuanfa textColor4">{{item.zhuanfaCount}}</span>
	//                             <img v-bind:src="item.zhuanfa"></img>
	//                           </div>
	//                           <div class="icon pinglun-box">
	//                             <span class="pinglun textColor4">{{item.pinglunCount}}</span>
	//                             <img v-bind:src="item.pinglun"></img>
	//                           </div>
	//                           <div class="icon zan-box">
	//                             <span class="zan textColor4">{{item.zanCount}}</span>
	//                             <img v-bind:src="item.zan"></img>
	//                           </div>
	//                         </div>
	//                       </div>
	//                     </div>
	//
	//                     <div class="foot freshColor" id="fresh-foot" v-if="slide.isLoadShow">
	//                       <img v-bind:src="slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
	//                       <span class="smallFont">上拉加载更多...</span>
	//                     </div>
	//
	//                   </div>
	//                 </div>
	//               </template>
	//
	//             </div>
	//
	//           </div>
	//         </div>
	//
	//       </div>
	//
	//     </div>
	//   </div>
	// </template>
	//
	//
	// <script>
	//loading 加载框
	var mySwiper = ""; //是否已经切换导航页
	
	var indexScroll = "";
	var indexScroll2 = "";
	
	exports.default = {
	  //指令
	  directives: {
	    loading: _vueLoading2.default
	  },
	  vuex: {
	    actions: {
	      change: _actions.tabChanger,
	      isGuided: _actions.isGuided
	    }
	  },
	  data: function data() {
	    return {
	      isSwiper: true, //标记是否滑动到第二页;
	      list: [], //列表数据
	      list2: [], //列表数据
	      headLeft: "发帖",
	      headRight: "&#xe87f;",
	      headSwitch: [{ name: "好友", isLeft: true, isRight: false, isActive: true }, { name: "欢喜", isLeft: false, isRight: true, isActive: false }],
	      swiperSildes: [{ isFreshShow: false, isLoadShow: false, isF: false, isS: false }, { isFreshShow: false, isLoadShow: false, isF: false, isS: false }],
	      loadHeight: 35, //刷新加载的高度
	      isLoading: true, //中间的加载框
	      isLoading2: true //中间的加载框
	    };
	  },
	  created: function created() {},
	  compiled: function compiled() {},
	
	  ready: function ready() {
	    //状态管理
	    this.change(0);
	    this.isGuided(true);
	    //IScroll
	    this.scrollView();
	    this.scrollView2();
	    //Swiper
	    this.swiperView();
	    //数据渲染
	    this.renderFriends(true, '/mock/main/list.json'); //渲染首页面
	    //下拉刷新--上拉加载
	    this.scrollAction(); //滚动事件绑定
	  },
	  computed: {
	    //计算属性
	  },
	  methods: {
	    //渲染数据,isFresh刷新/加载,路径,回调
	    renderFriends: function renderFriends(isFresh, url, fn) {
	
	      var self = this;
	      self.$http.get(url).then(function (response) {
	        if (isFresh) {
	          self.list = response.data.concat(self.list);
	        } else {
	          self.list = self.list.concat(response.data);
	        }
	        //刷新iscroll
	        self.$nextTick(function () {
	          //加载框消失
	          self.isLoading = false;
	          _commonUtil2.default.isAllLoaded("#w-index-scroll", function () {
	            indexScroll.refresh();
	            if (fn) {
	              return fn();
	            }
	          });
	        });
	      }, function (response) {});
	    },
	    styleSheet: function styleSheet() {
	      console.log("sdf");
	    },
	    swiperView: function swiperView() {
	      var self = this;
	      mySwiper = new Swiper('.index-swiper', {
	        onSlideChangeStart: function onSlideChangeStart(swiper) {
	          self.switchPage(swiper.activeIndex);
	        }
	      });
	    },
	    scrollView: function scrollView() {
	      indexScroll = new IScroll('#w-index-scroll', {
	        probeType: 3,
	        mouseWheel: true,
	        click: true,
	        preventDefault: false //默认事件打开,a标签的点击事件有效.
	      });
	    },
	    switchPage: function switchPage(index) {
	      mySwiper.slideTo(index);
	      for (var i = 0; i < this.headSwitch.length; i++) {
	        this.headSwitch[i].isActive = false;
	        if (i == index) {
	          this.headSwitch[i].isActive = true;
	        }
	      }
	      //swiper是否滑动
	      if (this.isSwiper) {
	        this.isSwiper = false;
	        this.renderLike(true, '/mock/main/listLike.json');
	      }
	    },
	    renderLike: function renderLike(isFresh, url, fn) {
	      var self = this;
	      self.$http.get(url).then(function (response) {
	        if (isFresh) {
	          self.list2 = response.data.concat(self.list2);
	        } else {
	          self.list2 = self.list2.concat(response.data);
	        }
	        //刷新iscroll
	        self.$nextTick(function () {
	          //加载框消失
	          self.isLoading2 = false;
	          _commonUtil2.default.isAllLoaded("#w-index-scroll2", function () {
	            indexScroll2.refresh();
	            if (fn) {
	              return fn();
	            }
	          });
	        });
	      }, function (response) {});
	      this.scrollLikeAction();
	    },
	    scrollView2: function scrollView2() {
	      indexScroll2 = new IScroll('#w-index-scroll2', {
	        probeType: 3,
	        mouseWheel: true, //鼠标滚动支持
	        click: true,
	        // snap:true,
	        preventDefault: false //默认事件打开,a标签的点击事件有效.
	      });
	    },
	    scrollAction: function scrollAction() {
	      var self = this;
	      var isFresh = false; //是否刷新;
	      var isLoad = false; //是否加载;
	      indexScroll.on('scroll', function () {
	        var maxY = this.maxScrollY - this.y;
	
	        if (this.y > self.loadHeight) {
	          self.swiperSildes[0].isFreshShow = true;
	          setTimeout(function () {
	            self.swiperSildes[0].isF = true; //变成刷新图标
	          }, 300);
	          isFresh = true;
	          return;
	        }
	        if (maxY > self.loadHeight) {
	          self.swiperSildes[0].isLoadShow = true;
	          self.swiperSildes[0].isS = true; //变成刷新图标
	          isLoad = true;
	          return;
	        }
	      });
	      indexScroll.on('scrollEnd', function () {
	        if (isFresh) {
	          isFresh = false;
	          self.renderFriends(true, '/mock/main/fresh.json', function () {
	            self.swiperSildes[0].isFreshShow = false;
	            self.swiperSildes[0].isF = false; //变成箭头图标
	          });
	        }
	        if (isLoad) {
	          isLoad = false;
	          self.renderFriends(false, '/mock/main/load.json', function () {
	            // self.swiperSildes[0].isLoadShow = false;
	            // self.swiperSildes[0].isS = false;//变成箭头图标
	            indexScroll.refresh();
	          });
	        }
	      });
	    },
	    scrollLikeAction: function scrollLikeAction() {
	      var self = this;
	      var isFresh = false; //是否刷新;
	      var isLoad = false; //是否加载;
	      indexScroll2.on('scroll', function () {
	        var maxY = this.maxScrollY - this.y;
	
	        if (this.y > self.loadHeight) {
	          self.swiperSildes[1].isFreshShow = true;
	          setTimeout(function () {
	            self.swiperSildes[1].isF = true; //变成刷新图标
	          }, 300);
	          isFresh = true;
	          return;
	        }
	        if (maxY > self.loadHeight) {
	          // self.swiperSildes[1].isLoadShow = true;
	          // self.swiperSildes[1].isS = true;//变成刷新图标
	          isLoad = true;
	          return;
	        }
	      });
	      indexScroll2.on('scrollEnd', function () {
	        if (isFresh) {
	          isFresh = false;
	          self.renderLike(true, '/mock/main/likeFresh.json', function () {
	            self.swiperSildes[1].isFreshShow = false;
	            self.swiperSildes[1].isF = false; //变成箭头图标
	          });
	        }
	        if (isLoad) {
	          isLoad = false;
	          self.renderLike(false, '/mock/main/likeLoad.json', function () {
	            // self.swiperSildes[1].isLoadShow = false;
	            // self.swiperSildes[1].isS = false;//变成箭头图标
	            indexScroll2.refresh();
	          });
	        }
	      });
	    }
	  }
	};
	
	// </script>

	/* generated by vue-loader */

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	!function (t, e) {
	  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["vue-loading"] = e() : t["vue-loading"] = e();
	}(undefined, function () {
	  return function (t) {
	    function e(o) {
	      if (n[o]) return n[o].exports;var r = n[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports;
	    }var n = {};return e.m = t, e.c = n, e.p = "", e(0);
	  }([function (t, e, n) {
	    "use strict";
	    function o(t) {
	      return t && t.__esModule ? t : { "default": t };
	    }Object.defineProperty(e, "__esModule", { value: !0 });var r = n(2),
	        i = o(r);n(19), e["default"] = { params: ["loadingOptions"], handleShow: function handleShow() {
	        var t = window.getComputedStyle(this.el).position;"static" !== t && "" !== t || (this["static"] = !0, this.el.style.position = "relative");var e = document.createElement("div");e.className = "vue-loading", e.style.backgroundColor = this.options.bg, this.el.appendChild(e);var n = document.createElement("div");n.className = "vue-loading-msg", n.textContent = this.options.text, e.appendChild(n), window.requestAnimationFrame(function () {
	          e.style.opacity = 1;
	        }), this.loadingBox = e;
	      }, handleHide: function handleHide() {
	        var t = this;this.loadingBox.addEventListener("transitionend", function () {
	          t.loadingBox.remove(), t["static"] && t.el.style.removeProperty("position");
	        }), this.loadingBox.style.opacity = 0;
	      }, bind: function bind() {
	        this["static"] = !1, this.loadingBox = null, this.first = !0, this.options = { text: "Loading ...", bg: "rgba(230, 233, 236, 0.8)" }, this.params.loadingOptions && (0, i["default"])(this.options, this.params.loadingOptions);
	      }, update: function update(t) {
	        if (t) this.first = !1, this.handleShow();else {
	          if (this.first) return void (this.first = !1);this.handleHide();
	        }
	      } };
	  }, function (t, e) {
	    var n = t.exports = { version: "1.2.6" };"number" == typeof __e && (__e = n);
	  }, function (t, e, n) {
	    t.exports = { "default": n(3), __esModule: !0 };
	  }, function (t, e, n) {
	    n(15), t.exports = n(1).Object.assign;
	  }, function (t, e) {
	    t.exports = function (t) {
	      if ("function" != typeof t) throw TypeError(t + " is not a function!");return t;
	    };
	  }, function (t, e) {
	    var n = {}.toString;t.exports = function (t) {
	      return n.call(t).slice(8, -1);
	    };
	  }, function (t, e, n) {
	    var o = n(4);t.exports = function (t, e, n) {
	      if (o(t), void 0 === e) return t;switch (n) {case 1:
	          return function (n) {
	            return t.call(e, n);
	          };case 2:
	          return function (n, o) {
	            return t.call(e, n, o);
	          };case 3:
	          return function (n, o, r) {
	            return t.call(e, n, o, r);
	          };}return function () {
	        return t.apply(e, arguments);
	      };
	    };
	  }, function (t, e) {
	    t.exports = function (t) {
	      if (void 0 == t) throw TypeError("Can't call method on  " + t);return t;
	    };
	  }, function (t, e, n) {
	    var o = n(10),
	        r = n(1),
	        i = n(6),
	        s = "prototype",
	        a = function a(t, e, n) {
	      var u,
	          c,
	          f,
	          l = t & a.F,
	          p = t & a.G,
	          d = t & a.S,
	          h = t & a.P,
	          g = t & a.B,
	          v = t & a.W,
	          b = p ? r : r[e] || (r[e] = {}),
	          y = p ? o : d ? o[e] : (o[e] || {})[s];p && (n = e);for (u in n) {
	        c = !l && y && u in y, c && u in b || (f = c ? y[u] : n[u], b[u] = p && "function" != typeof y[u] ? n[u] : g && c ? i(f, o) : v && y[u] == f ? function (t) {
	          var e = function e(_e) {
	            return this instanceof t ? new t(_e) : t(_e);
	          };return e[s] = t[s], e;
	        }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((b[s] || (b[s] = {}))[u] = f));
	      }
	    };a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, t.exports = a;
	  }, function (t, e) {
	    t.exports = function (t) {
	      try {
	        return !!t();
	      } catch (e) {
	        return !0;
	      }
	    };
	  }, function (t, e) {
	    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();"number" == typeof __g && (__g = n);
	  }, function (t, e, n) {
	    var o = n(5);t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
	      return "String" == o(t) ? t.split("") : Object(t);
	    };
	  }, function (t, e) {
	    var n = Object;t.exports = { create: n.create, getProto: n.getPrototypeOf, isEnum: {}.propertyIsEnumerable, getDesc: n.getOwnPropertyDescriptor, setDesc: n.defineProperty, setDescs: n.defineProperties, getKeys: n.keys, getNames: n.getOwnPropertyNames, getSymbols: n.getOwnPropertySymbols, each: [].forEach };
	  }, function (t, e, n) {
	    var o = n(12),
	        r = n(14),
	        i = n(11);t.exports = n(9)(function () {
	      var t = Object.assign,
	          e = {},
	          n = {},
	          o = Symbol(),
	          r = "abcdefghijklmnopqrst";return e[o] = 7, r.split("").forEach(function (t) {
	        n[t] = t;
	      }), 7 != t({}, e)[o] || Object.keys(t({}, n)).join("") != r;
	    }) ? function (t, e) {
	      for (var n = r(t), s = arguments, a = s.length, u = 1, c = o.getKeys, f = o.getSymbols, l = o.isEnum; a > u;) {
	        for (var p, d = i(s[u++]), h = f ? c(d).concat(f(d)) : c(d), g = h.length, v = 0; g > v;) {
	          l.call(d, p = h[v++]) && (n[p] = d[p]);
	        }
	      }return n;
	    } : Object.assign;
	  }, function (t, e, n) {
	    var o = n(7);t.exports = function (t) {
	      return Object(o(t));
	    };
	  }, function (t, e, n) {
	    var o = n(8);o(o.S + o.F, "Object", { assign: n(13) });
	  }, function (t, e, n) {
	    e = t.exports = n(17)(), e.push([t.id, ".vue-loading{top:0;left:0;z-index:1000;padding:0;width:100%;height:100%;border:none;background-color:rgba(230,233,236,.8);opacity:0;-webkit-transition:opacity .4s;transition:opacity .4s}.vue-loading,.vue-loading-msg{position:absolute;margin:0;cursor:wait}.vue-loading-msg{box-sizing:content-box!important;z-index:1001;padding:0 35px;height:40px;top:20%;left:50%;text-align:center;font-size:14px;line-height:40px;background-color:#f4f4f4;border-radius:4px;box-shadow:0 1px 8px rgba(0,0,0,.15);border:1px solid #bbb;-webkit-transform:translateX(-50%);transform:translateX(-50%)}", ""]);
	  }, function (t, e) {
	    t.exports = function () {
	      var t = [];return t.toString = function () {
	        for (var t = [], e = 0; e < this.length; e++) {
	          var n = this[e];n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1]);
	        }return t.join("");
	      }, t.i = function (e, n) {
	        "string" == typeof e && (e = [[null, e, ""]]);for (var o = {}, r = 0; r < this.length; r++) {
	          var i = this[r][0];"number" == typeof i && (o[i] = !0);
	        }for (r = 0; r < e.length; r++) {
	          var s = e[r];"number" == typeof s[0] && o[s[0]] || (n && !s[2] ? s[2] = n : n && (s[2] = "(" + s[2] + ") and (" + n + ")"), t.push(s));
	        }
	      }, t;
	    };
	  }, function (t, e, n) {
	    function o(t, e) {
	      for (var n = 0; n < t.length; n++) {
	        var o = t[n],
	            r = d[o.id];if (r) {
	          r.refs++;for (var i = 0; i < r.parts.length; i++) {
	            r.parts[i](o.parts[i]);
	          }for (; i < o.parts.length; i++) {
	            r.parts.push(c(o.parts[i], e));
	          }
	        } else {
	          for (var s = [], i = 0; i < o.parts.length; i++) {
	            s.push(c(o.parts[i], e));
	          }d[o.id] = { id: o.id, refs: 1, parts: s };
	        }
	      }
	    }function r(t) {
	      for (var e = [], n = {}, o = 0; o < t.length; o++) {
	        var r = t[o],
	            i = r[0],
	            s = r[1],
	            a = r[2],
	            u = r[3],
	            c = { css: s, media: a, sourceMap: u };n[i] ? n[i].parts.push(c) : e.push(n[i] = { id: i, parts: [c] });
	      }return e;
	    }function i(t, e) {
	      var n = v(),
	          o = m[m.length - 1];if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), m.push(e);else {
	        if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e);
	      }
	    }function s(t) {
	      t.parentNode.removeChild(t);var e = m.indexOf(t);e >= 0 && m.splice(e, 1);
	    }function a(t) {
	      var e = document.createElement("style");return e.type = "text/css", i(t, e), e;
	    }function u(t) {
	      var e = document.createElement("link");return e.rel = "stylesheet", i(t, e), e;
	    }function c(t, e) {
	      var n, o, r;if (e.singleton) {
	        var i = y++;n = b || (b = a(e)), o = f.bind(null, n, i, !1), r = f.bind(null, n, i, !0);
	      } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = u(e), o = p.bind(null, n), r = function r() {
	        s(n), n.href && URL.revokeObjectURL(n.href);
	      }) : (n = a(e), o = l.bind(null, n), r = function r() {
	        s(n);
	      });return o(t), function (e) {
	        if (e) {
	          if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;o(t = e);
	        } else r();
	      };
	    }function f(t, e, n, o) {
	      var r = n ? "" : o.css;if (t.styleSheet) t.styleSheet.cssText = x(e, r);else {
	        var i = document.createTextNode(r),
	            s = t.childNodes;s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(i, s[e]) : t.appendChild(i);
	      }
	    }function l(t, e) {
	      var n = e.css,
	          o = e.media;if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;else {
	        for (; t.firstChild;) {
	          t.removeChild(t.firstChild);
	        }t.appendChild(document.createTextNode(n));
	      }
	    }function p(t, e) {
	      var n = e.css,
	          o = e.sourceMap;o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");var r = new Blob([n], { type: "text/css" }),
	          i = t.href;t.href = URL.createObjectURL(r), i && URL.revokeObjectURL(i);
	    }var d = {},
	        h = function h(t) {
	      var e;return function () {
	        return "undefined" == typeof e && (e = t.apply(this, arguments)), e;
	      };
	    },
	        g = h(function () {
	      return (/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
	      );
	    }),
	        v = h(function () {
	      return document.head || document.getElementsByTagName("head")[0];
	    }),
	        b = null,
	        y = 0,
	        m = [];t.exports = function (t, e) {
	      e = e || {}, "undefined" == typeof e.singleton && (e.singleton = g()), "undefined" == typeof e.insertAt && (e.insertAt = "bottom");var n = r(t);return o(n, e), function (t) {
	        for (var i = [], s = 0; s < n.length; s++) {
	          var a = n[s],
	              u = d[a.id];u.refs--, i.push(u);
	        }if (t) {
	          var c = r(t);o(c, e);
	        }for (var s = 0; s < i.length; s++) {
	          var u = i[s];if (0 === u.refs) {
	            for (var f = 0; f < u.parts.length; f++) {
	              u.parts[f]();
	            }delete d[u.id];
	          }
	        }
	      };
	    };var x = function () {
	      var t = [];return function (e, n) {
	        return t[e] = n, t.filter(Boolean).join("\n");
	      };
	    }();
	  }, function (t, e, n) {
	    var o = n(16);"string" == typeof o && (o = [[t.id, o, ""]]);n(18)(o, {});o.locals && (t.exports = o.locals);
	  }]);
	});
	//# sourceMappingURL=vue-loading.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var commonUtil = {
	    isAllLoaded: function isAllLoaded(scope, cb) {
	        var t_img; // 定时器
	        var isLoad = true; // 控制变量
	
	        // 判断图片加载状况，加载完成后回调
	        return isImgLoad(cb);
	
	        // 判断图片加载的函数
	        function isImgLoad(callback) {
	            // 查找所有图片，迭代处理
	            $(scope).find('img').each(function () {
	                // 找到为0就将isLoad设为false，并退出each
	                if (this.height === 0) {
	                    isLoad = false;
	                    return false;
	                }
	            });
	            // 为true，没有发现为0的。加载完毕
	            if (isLoad) {
	                clearTimeout(t_img); // 清除定时器
	                // 回调函数
	                callback(scope);
	                // 为false，因为找到了没有加载完成的图，将调用定时器递归
	            } else {
	                isLoad = true;
	                t_img = setTimeout(function () {
	                    isImgLoad(callback); // 递归扫描
	                }, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	            }
	        }
	    },
	    IScroll: function (_IScroll) {
	        function IScroll() {
	            return _IScroll.apply(this, arguments);
	        }
	
	        IScroll.toString = function () {
	            return _IScroll.toString();
	        };
	
	        return IScroll;
	    }(function () {
	        var self = this;
	        Vue.directive('scroll', function (value) {
	            if (value) {
	                self.isAllLoaded(value, function (value) {
	                    new IScroll(value, {
	                        click: true
	                    });
	                });
	            }
	        });
	    })
	};
	
	exports.default = commonUtil;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n  <header id=\"header\" class=\"borderBottom\">\n    <ul>\n      <li class=\"Active text\" v-on:click=\"styleSheet\">{{headLeft}}</li>\n      <li class=\"switch headCenter\">\n        <template v-for=\"item in headSwitch\">\n          <span\n          class=\"switchStyle\" v-bind:class=\"{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}\" v-on:click=\"switchPage($index)\">{{item.name}}</span>\n        </template>\n      </li>\n      <li class=\"search\"><span class=\"icon iconfont\">{{{headRight}}}</span></li>\n    </ul>\n  </header>\n  <div id=\"body\">\n\n    <div class=\"container-box commonColor\">\n      <div class=\"swiper-container index-swiper\">\n        <div class=\"swiper-wrapper\">\n          <div v-for=\"slide in swiperSildes\" class=\"swiper-slide commonColor\" id=\"swiperPageOne\">\n\n\n            <template v-if=\"$index==0\">\n              <!-- 加载框 -->\n              <div v-loading=\"isLoading\" class=\"loading\"></div>\n\n              <div id=\"w-index-scroll\" class=\"scroll-view\">\n                <div class=\"scroll\">\n\n                  <div class=\"head freshColor\" v-if=\"slide.isFreshShow\" id=\"fresh-head\">\n                    <img v-bind:src=\"slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">下拉刷新...</span>\n                  </div>\n\n                  <div class=\"item commonColor borderBottom\"  v-for=\"item in list\">\n                    <div class=\"tuijian-box smallFont\">\n                      <span class=\"tuijianren cellDeepColor\" v-if=\"item.tuijianzhe\">{{item.tuijianzhe}}</span>\n                      <span class=\"tuijian textColor2\" v-if=\"item.tuijian\">{{item.tuijian}}</span>\n                    </div>\n                    <div class=\"title  cellDeepColor\">\n                      <span class=\"middleFont\">{{item.title}}</span>\n                    </div>\n                    <div class=\"user-info\">\n                      <div class=\"user-box\">\n                        <img class=\"user-icon\" v-bind:src=\"item.userIcon\"></img>\n                      </div>\n                      <!-- 头像 -->\n                      <div class=\"head-box\">\n                        <img class=\"head-img\"\n                         v-link=\"{name:'userDongtai',params:{id:item.id}}\"                    v-bind:src=\"item.headimg\"></img>\n                        <span class=\"user-name textColor2 smallFont\">{{item.username}}</span>\n                      </div>\n                      <div>\n                        <img class=\"other\" v-bind:src=\"item.xiala\"></img>\n                      </div>\n                    </div>\n                     <div v-link=\"{name:'userDongtai',params:{id:item.id}}\"  class=\"image-box\" v-if=\"item.image!=undefined\">\n                      <img v-bind:src=\"item.image\"></img>\n                    </div>\n                    <div class=\"span-box\" v-if=\"item.desc\">\n                      <span class=\"textColor3 smallFont\">{{item.desc}}</span>\n                    </div>\n                    <div class=\"bottom smallFont\">\n                      <div class=\"bottom-item right\">\n                        <span class=\"time textColor2\">{{item.time}}</span>\n                      </div>\n                      <div class=\"bottom-item\">\n                        <div class=\"icon zhuanfa-box\">\n                          <span class=\"zhuanfa textColor4\">{{item.zhuanfaCount}}</span>\n                          <img v-bind:src=\"item.zhuanfa\"></img>\n                        </div>\n                        <div class=\"icon pinglun-box\">\n                          <span class=\"pinglun textColor4\">{{item.pinglunCount}}</span>\n                          <img v-bind:src=\"item.pinglun\"></img>\n                        </div>\n                        <div class=\"icon zan-box\">\n                          <span class=\"zan textColor4\">{{item.zanCount}}</span>\n                          <img v-bind:src=\"item.zan\"></img>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"foot freshColor\" id=\"fresh-foot\" v-if=\"slide.isLoadShow\">\n                    <img v-bind:src=\"slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">上拉加载更多...</span>\n                  </div>\n\n                </div>\n              </div>\n            </template>\n            <template v-if=\"$index==1\">\n              <!-- 加载框 -->\n              <div v-loading=\"isLoading2\" class=\"loading\"></div>\n\n              <div id=\"w-index-scroll2\" class=\"scroll-view\">\n                <div class=\"scroll\">\n\n                  <div class=\"head freshColor\" v-if=\"slide.isFreshShow\" id=\"fresh-head\">\n                    <img v-bind:src=\"slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">下拉刷新...</span>\n                  </div>\n\n                  <div class=\"item commonColor borderBottom\"  v-for=\"item in list2\">\n                    <div class=\"tuijian-box smallFont\">\n                      <span class=\"tuijianren cellDeepColor\" v-if=\"item.tuijianzhe\">{{item.tuijianzhe}}</span>\n                      <span class=\"tuijian textColor2\" v-if=\"item.tuijian\">{{item.tuijian}}</span>\n                    </div>\n                    <div class=\"title  cellDeepColor\">\n                      <span class=\"middleFont\">{{item.title}}</span>\n                    </div>\n                    <div class=\"user-info\">\n                      <div class=\"user-box\">\n                        <img class=\"user-icon\" v-bind:src=\"item.userIcon\"></img>\n                      </div>\n                      <!-- 头像 -->\n                      <div class=\"head-box\">\n                        <img class=\"head-img\" v-link=\"{name:'userDongtai',params:{id:item.id}}\" v-bind:src=\"item.headimg\"></img>\n                        <span class=\"user-name textColor2 smallFont\">{{item.username}}</span>\n                      </div>\n                      <div>\n                        <img class=\"other\" v-bind:src=\"item.xiala\"></img>\n                      </div>\n                    </div>\n                    <!-- 大图片 -->\n                     <div class=\"image-box\" v-link=\"{name:'userDongtai',params:{id:item.id}}\" v-if=\"item.image!=undefined\">\n                      <img v-bind:src=\"item.image\"></img>\n                    </div>\n                    <div class=\"span-box\" v-if=\"item.desc\">\n                      <span class=\"textColor3 smallFont\">{{item.desc}}</span>\n                    </div>\n                    <div class=\"bottom smallFont\">\n                      <div class=\"bottom-item right\">\n                        <span class=\"time textColor2\">{{item.time}}</span>\n                      </div>\n                      <div class=\"bottom-item\">\n                        <div class=\"icon zhuanfa-box\">\n                          <span class=\"zhuanfa textColor4\">{{item.zhuanfaCount}}</span>\n                          <img v-bind:src=\"item.zhuanfa\"></img>\n                        </div>\n                        <div class=\"icon pinglun-box\">\n                          <span class=\"pinglun textColor4\">{{item.pinglunCount}}</span>\n                          <img v-bind:src=\"item.pinglun\"></img>\n                        </div>\n                        <div class=\"icon zan-box\">\n                          <span class=\"zan textColor4\">{{item.zanCount}}</span>\n                          <img v-bind:src=\"item.zan\"></img>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"foot freshColor\" id=\"fresh-foot\" v-if=\"slide.isLoadShow\">\n                    <img v-bind:src=\"slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">上拉加载更多...</span>\n                  </div>\n\n                </div>\n              </div>\n            </template>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\box.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./box.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(10);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      head: {
	        center: '盒子'
	      }
	    };
	  },
	  ready: function ready() {
	    this.change(3);
	  },
	
	  methods: {}
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div>
	//     <header id="header" class="borderBottom">
	//       <ul>
	//         <li class="headCenter weight middleFont">{{head.center}}</li>
	//       </ul>
	//     </header>
	//     <div id='body'>
	//
	//
	//
	//
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <header id=\"header\" class=\"borderBottom\">\n    <ul>\n      <li class=\"headCenter weight middleFont\">{{head.center}}</li>\n    </ul>\n  </header>\n  <div id='body'>\n\n\n\n\n  </div>\n</div>\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(23)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\talk.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(24)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./talk.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(10);
	
	//vue-touch
	
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      event: '',
	      head: {
	        left: '创建话题',
	        right: '分类',
	        center: "搜索话题/昵称/ID"
	      },
	      swiperImgs: [],
	      paginationActive: [{ isActive: true }, { isActive: false }, { isActive: false }, { isActive: false }],
	      swiper: ''
	    };
	  },
	  ready: function ready() {
	    var s = new Swiper('.cell', {
	      freeMode: true,
	      freeModeSticky: true,
	      freeModeMomentumBounce: false,
	      onSlideChangeEnd: function onSlideChangeEnd(swiper) {
	        console.log(swiper);
	      },
	      onSetTranslate: function onSetTranslate(swiper, translate) {
	        console.log(translate);
	      }
	
	    });
	
	    this.change(1);
	    this.initSwiper('/mock/talk/banner.json');
	  },
	
	  methods: {
	    test: function test(e) {
	      this.event = e.type;
	    },
	    initSwiper: function initSwiper(url) {
	      var _this = this;
	
	      var self = this;
	      this.$http.get(url).then(function (response) {
	        _this.swiperImgs = response.data;
	        _this.$nextTick(function () {
	          self.swiper = new Swiper(".talk-swiper", {
	            pagination: ".talk-pagination",
	            autoplay: 4000,
	            loop: true,
	            autoplayDisableOnInteraction: false,
	            speed: 300,
	            paginationType: "custom",
	            paginationClickable: true,
	            onSlideChangeStart: function onSlideChangeStart(swiper) {
	
	              var len = self.paginationActive.length;
	              var active = (swiper.activeIndex - 1) % len;
	              if (active == -1) {
	                active = len - 1;
	              }
	              for (var i = 0; i < len; i++) {
	                self.paginationActive[i].isActive = false;
	                if (i == active) {
	                  self.paginationActive[i].isActive = true;
	                }
	              }
	            }
	          });
	        });
	      }, function (response) {});
	    },
	    swiperPage: function swiperPage(index) {
	      this.swiper.slideTo(index + 1);
	    },
	    createTalk: function createTalk() {}
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <!-- v-link="{name:'detailname', params:{id:123}}" -->
	// <template>
	//   <div>
	//     <header id="header" class="borderBottom">
	//       <ul>
	//         <li class="Active text"  v-on:click="createTalk">{{head.left}}</li>
	//         <li class="input headCenter">
	//           <input type="text" class="background2 middleFont"  :placeholder="head.center">
	//         </li>
	//         <li class="middleFont">{{head.right}}</li>
	//       </ul>
	//     </header>
	//     <div id="body">
	//       <div class="swiper-container talk-swiper">
	//         <div class="swiper-wrapper">
	//           <template v-for="item in swiperImgs">
	//             <div class="swiper-slide"><img v-bind:src="item.imgSrc" alt=""></div>
	//           </template>
	//         </div>
	//         <div class="swiper-pagination talk-pagination">
	//           <template v-for="item in paginationActive">
	//             <span class="custom-pagination" v-bind:class="{active:item.isActive}" v-on:click="swiperPage($index)"></span>
	//           </template>
	//         </div>
	//       </div>
	//       <div class="cell-body">
	//         <!--  -->
	//         <div class="swiper-container cell">
	//           <div class="swiper-wrapper">
	//             <div class="swiper-slide cellMain">main</div>
	//             <div class="swiper-slide cellSmall">
	//                 <div class="item" data-swiper-parallax="-100">Slide 1</div>
	//                 <div class="item last" data-swiper-parallax="-100">Slide 2</div>
	//             </div>
	//
	//           </div>
	//         </div>
	//         <!--  -->
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>


	//

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n  <header id=\"header\" class=\"borderBottom\">\n    <ul>\n      <li class=\"Active text\"  v-on:click=\"createTalk\">{{head.left}}</li>\n      <li class=\"input headCenter\">\n        <input type=\"text\" class=\"background2 middleFont\"  :placeholder=\"head.center\">\n      </li>\n      <li class=\"middleFont\">{{head.right}}</li>\n    </ul>\n  </header>\n  <div id=\"body\">\n    <div class=\"swiper-container talk-swiper\">\n      <div class=\"swiper-wrapper\">\n        <template v-for=\"item in swiperImgs\">\n          <div class=\"swiper-slide\"><img v-bind:src=\"item.imgSrc\" alt=\"\"></div>\n        </template>\n      </div>\n      <div class=\"swiper-pagination talk-pagination\">\n        <template v-for=\"item in paginationActive\">\n          <span class=\"custom-pagination\" v-bind:class=\"{active:item.isActive}\" v-on:click=\"swiperPage($index)\"></span>\n        </template>\n      </div>\n    </div>\n    <div class=\"cell-body\">\n      <!--  -->\n      <div class=\"swiper-container cell\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide cellMain\">main</div>\n          <div class=\"swiper-slide cellSmall\">\n              <div class=\"item\" data-swiper-parallax=\"-100\">Slide 1</div>\n              <div class=\"item last\" data-swiper-parallax=\"-100\">Slide 2</div>\n          </div>\n\n        </div>\n      </div>\n      <!--  -->\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(26)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\message.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(27)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(10);
	
	var messageSwiper = ""; // <template>
	//   <div>
	//     <header id="header" class="borderBottom">
	//       <ul>
	//         <li class="Active text"  v-on:click="addFriends">{{head.left}}</li>
	//         <li class="switch headCenter">
	//           <template v-for="item in head.center">
	//             <span
	//             class="switchStyle" v-bind:class="{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}" v-on:click="switchPage($index)">{{item.name}}</span>
	//           </template>
	//         </li>
	//         <li class="search middleFont">{{head.right}}</li>
	//       </ul>
	//     </header>
	//     <div id='body'>
	//       <div class="container-box commonColor">
	//         <div class="swiper-container message-swiper">
	//           <div class="swiper-wrapper">
	//             <div class="swiper-slide commonColor" id="swiperPageOne">
	//
	//               <div id="message-scroll" class="scroll-view">
	//                 <div class="scroll">
	//
	//                 dsf
	//
	//
	//                 </div>
	//               </div>
	//
	//             </div>
	//             <div class="swiper-slide">
	//               asdfsda
	//             </div>
	//           </div>
	//         </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	
	var messageScroll = "";
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      list: [],
	      head: {
	        left: '添加好友',
	        right: '通讯录',
	        center: [{ 'name': '私信', isLeft: true, isRight: false, isActive: true }, { 'name': '提醒', isLeft: false, isRight: true, isActive: false }]
	      }
	    };
	  },
	  ready: function ready() {
	    this.change(2);
	    this.scrollView();
	    this.swiperView();
	    this.renderFriends();
	  },
	
	  methods: {
	    addFriends: function addFriends() {},
	    renderFriends: function renderFriends() {
	      var self = this;
	      self.$http.get('/mock/main/list.json').then(function (response) {
	        self.list = response.data;
	        setTimeout(function () {
	          messageScroll.refresh();
	        }, 1000);
	      }, function (response) {
	        console.log('首页数据加载出错');
	      });
	    },
	    scrollView: function scrollView() {
	      messageScroll = new IScroll('#message-scroll', {
	        mouseWheel: true,
	        click: true,
	        preventDefault: false //默认事件打开,a标签的点击事件有效.
	      });
	    },
	    swiperView: function swiperView() {
	      var self = this;
	      messageSwiper = new Swiper('.message-swiper', {
	        onSlideChangeStart: function onSlideChangeStart(swiper) {
	          self.switchPage(swiper.activeIndex);
	        }
	      });
	    },
	
	    //点击切换
	    switchPage: function switchPage(index) {
	      messageSwiper.slideTo(index);
	      for (var i = 0; i < this.head.center.length; i++) {
	        this.head.center[i].isActive = false;
	        if (i == index) {
	          this.head.center[i].isActive = true;
	        }
	      }
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <header id=\"header\" class=\"borderBottom\">\n    <ul>\n      <li class=\"Active text\"  v-on:click=\"addFriends\">{{head.left}}</li>\n      <li class=\"switch headCenter\">\n        <template v-for=\"item in head.center\">\n          <span\n          class=\"switchStyle\" v-bind:class=\"{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}\" v-on:click=\"switchPage($index)\">{{item.name}}</span>\n        </template>\n      </li>\n      <li class=\"search middleFont\">{{head.right}}</li>\n    </ul>\n  </header>\n  <div id='body'>\n    <div class=\"container-box commonColor\">\n      <div class=\"swiper-container message-swiper\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide commonColor\" id=\"swiperPageOne\">\n\n            <div id=\"message-scroll\" class=\"scroll-view\">\n              <div class=\"scroll\">\n\n              dsf\n\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"swiper-slide\">\n            asdfsda\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(29)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\mine.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(30)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./mine.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(10);
	
	exports.default = {
	  vuex: {
	    actions: {
	      change: _actions.tabChanger
	    }
	  },
	  data: function data() {
	    return {
	      user: {},
	      stable: {
	        editIcon: "/images/mine/pan.png",
	        edit: "编辑资料",
	        setSign: "点此设置签名",
	        guanzhu: "关注",
	        fensi: "粉丝",
	        innerItem: [{ active: true, name: "话题" }, { active: false, name: "帖子" }, { active: false, name: "赞过的" }],
	        xialaImg: "/images/mine/xiala.png"
	      },
	      head: {
	        left: '会员中心',
	        right: '设置',
	        center: "我"
	      }
	    };
	  },
	  ready: function ready() {
	    this.change(4);
	    this.loadUserInfo('/mock/userInfo/user001.json');
	  },
	
	
	  methods: {
	    loadUserInfo: function loadUserInfo(url) {
	      var self = this;
	      self.$http.get(url).then(function (response) {
	        self.user = response.data;
	      }, function () {});
	    },
	    changeTab: function changeTab(index) {
	      for (var i = 0; i < this.stable.innerItem.length; i++) {
	        this.stable.innerItem[i].active = false;
	        if (index == i) {
	          this.stable.innerItem[i].active = true;
	        }
	      }
	    },
	    VIP: function VIP() {}
	  }
	};
	// </script>

	/* generated by vue-loader */
	// <template>
	//   <div>
	//     <header id="header" class="borderBottom">
	//       <ul>
	//         <li class="Active text fixWidth vipColor" v-on:click="VIP">{{head.left}}</li>
	//         <li class="headCenter weight fixWidth bigFont">
	//           {{head.center}}
	//         </li>
	//         <li class="Active text fixWidth text-right" v-link="{name:'setting'}">
	//           {{head.right}}
	//         </li>
	//       </ul>
	//     </header>
	//     <div id="body">
	//
	//       <div class="userInfo background1">
	//         <div class="headImgBox">
	//           <div></div>
	//           <div class = 'headImg'><img class="background3" v-bind:src="user.headImg"/></div>
	//           <div class="edit">
	//             <div>
	//               <img class="background1" v-bind:src="stable.editIcon"/>
	//               <span class="textColor4">{{stable.edit}}</span>
	//             </div>
	//           </div>
	//         </div>
	//         <div class="mine-item userName textColor2 smallFont"><span>{{user.userName}}</span></div>
	//         <div class="mine-item userID textColor4 smallFont"><span>ID:{{user.userID}}</span></div>
	//         <div class="mine-item biaoqian textColor2 smallFont"><span>{{stable.setSign}}</span></div>
	//         <div class="mine-item guanzhufensi smallFont">
	//           <div class="one smallFont">
	//             <span class="textColor3">{{user.guanzhu}}</span>
	//             <span class="textColor3">{{stable.guanzhu}}</span>
	//           </div>
	//           <div class="borderLeft middle"></div>
	//           <div class ="two">
	//             <span class="textColor3">{{user.fensi}}</span>
	//             <span class="textColor3">{{stable.fensi}}</span>
	//           </div>
	//         </div>
	//         <div class="box borderBottom">
	//           <div class="mine-item qiehuan border5">
	//             <template v-for="item in stable.innerItem">
	//               <div class="inner-item smallFont" v-bind:class="item.active?'qiehuan-active':''" v-on:click="changeTab($index)">
	//                 <span class="smallFont">{{item.name}}</span>
	//                 <img data-name="one" v-bind:src="stable.xialaImg"/>
	//               </div>
	//             </template>
	//
	//           </div>
	//         </div>
	//       </div>
	//       <template v-for="item in stable.innerItem">
	//         <div v-if="(item.active && $index==0)" class="qiehuan-box">
	//
	//         </div>
	//         <div v-if="(item.active && $index==1)" class="qiehuan-box">
	//
	//         </div>
	//         <div v-if="(item.active && $index==2)" class="qiehuan-box">
	//
	//         </div>
	//       </template>
	//
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <header id=\"header\" class=\"borderBottom\">\n    <ul>\n      <li class=\"Active text fixWidth vipColor\" v-on:click=\"VIP\">{{head.left}}</li>\n      <li class=\"headCenter weight fixWidth bigFont\">\n        {{head.center}}\n      </li>\n      <li class=\"Active text fixWidth text-right\" v-link=\"{name:'setting'}\">\n        {{head.right}}\n      </li>\n    </ul>\n  </header>\n  <div id=\"body\">\n\n    <div class=\"userInfo background1\">\n      <div class=\"headImgBox\">\n        <div></div>\n        <div class = 'headImg'><img class=\"background3\" v-bind:src=\"user.headImg\"/></div>\n        <div class=\"edit\">\n          <div>\n            <img class=\"background1\" v-bind:src=\"stable.editIcon\"/>\n            <span class=\"textColor4\">{{stable.edit}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"mine-item userName textColor2 smallFont\"><span>{{user.userName}}</span></div>\n      <div class=\"mine-item userID textColor4 smallFont\"><span>ID:{{user.userID}}</span></div>\n      <div class=\"mine-item biaoqian textColor2 smallFont\"><span>{{stable.setSign}}</span></div>\n      <div class=\"mine-item guanzhufensi smallFont\">\n        <div class=\"one smallFont\">\n          <span class=\"textColor3\">{{user.guanzhu}}</span>\n          <span class=\"textColor3\">{{stable.guanzhu}}</span>\n        </div>\n        <div class=\"borderLeft middle\"></div>\n        <div class =\"two\">\n          <span class=\"textColor3\">{{user.fensi}}</span>\n          <span class=\"textColor3\">{{stable.fensi}}</span>\n        </div>\n      </div>\n      <div class=\"box borderBottom\">\n        <div class=\"mine-item qiehuan border5\">\n          <template v-for=\"item in stable.innerItem\">\n            <div class=\"inner-item smallFont\" v-bind:class=\"item.active?'qiehuan-active':''\" v-on:click=\"changeTab($index)\">\n              <span class=\"smallFont\">{{item.name}}</span>\n              <img data-name=\"one\" v-bind:src=\"stable.xialaImg\"/>\n            </div>\n          </template>\n\n        </div>\n      </div>\n    </div>\n    <template v-for=\"item in stable.innerItem\">\n      <div v-if=\"(item.active && $index==0)\" class=\"qiehuan-box\">\n\n      </div>\n      <div v-if=\"(item.active && $index==1)\" class=\"qiehuan-box\">\n\n      </div>\n      <div v-if=\"(item.active && $index==2)\" class=\"qiehuan-box\">\n\n      </div>\n    </template>\n\n  </div>\n</div>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(32)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\userDongtai.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(33)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./userDongtai.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtil = __webpack_require__(17);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var scroll = ""; // <template>
	//   <div class="container-box">
	//     <header id="header" class="borderBottom">
	//       <ul>
	//         <li class="Active text" v-on:click="backPrepage"><span class="back iconfont">&#xe604;</span></li>
	//         <li class="switch headCenter middleFont">
	//           {{user.userName}}
	//         </li>
	//         <li><span class="more iconfont">&#xe677;</span></li>
	//       </ul>
	//     </header>
	//     <div id="body" class="background1">
	//
	//       <div id="userDongtai-scroll" class="scroll-view">
	//         <div class="scroll">
	//           <!--  下拉刷新-->
	//           <div class="head freshColor" v-if="slide.isFreshShow" id="fresh-head">
	//             <img v-bind:src="slide.isF == false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
	//             <span class="smallFont">下拉刷新...</span>
	//           </div>
	//           <!-- 用户头信息 -->
	//           <div class="userInfo background1">
	//             <div class="headImgBox">
	//               <div class = 'headImg'><img class="background3" v-bind:src="user.headImg"/></div>
	//             </div>
	//             <div class="mine-item userName textColor2"><span class="middleFont">{{user.userName}}</span></div>
	//             <div class="mine-item userID textColor4">
	//               <i class="iconfont">&#xe689;</i>
	//               <span>ID:{{user.userID}}</span>
	//             </div>
	//             <ul class="gzsx smallFont" v-bind:class="{active:isGuanZhu}">
	//               <li v-on:click="changeGuanzhu">
	//                 <i v-if="!isGuanZhu">{{stable.jia}}</i>
	//                 <span>{{stable.guanzhu}}</span>
	//               </li>
	//               <li>
	//                 <i class="iconfont">&#xe63a;</i>
	//                 <span>{{stable.sixin}}</span>
	//               </li>
	//             </ul>
	//             <div class="mine-item biaoqian textColor2"><span>{{user.sign}}</span></div>
	//
	//             <div class="box borderBottom">
	//               <div class="mine-item qiehuan border5">
	//                 <template v-for="item in stable.innerItem">
	//                   <div class="inner-item" v-bind:class="item.active?'qiehuan-active':''" v-on:click="changeTab($index)">
	//                     <span class="smallFont">{{item.name}}</span>
	//                     <img data-name="one" v-bind:src="stable.xialaImg"/>
	//                   </div>
	//                 </template>
	//
	//               </div>
	//             </div>
	//           </div>
	//           <!-- 左右切换条 -->
	//           <template v-for="item in stable.innerItem">
	//             <!-- 左边 -->
	//             <div v-if="(item.active && $index==0)" class="qiehuan-box">
	//     <!-- 一条tableviewCell -->
	//               <div class="item commonColor borderBottom"  v-for="item in list">
	//                 <div class="tuijian-box smallFont">
	//                   <span class="tuijianren cellDeepColor" v-if="item.tuijianzhe">{{item.tuijianzhe}}</span>
	//                   <span class="tuijian textColor2" v-if="item.tuijian">{{item.tuijian}}</span>
	//                 </div>
	//                 <div class="title  cellDeepColor">
	//                   <span class="middleFont">{{item.title}}</span>
	//                 </div>
	//                 <div class="user-info">
	//                   <div class="user-box">
	//                     <img class="user-icon" v-bind:src="item.userIcon"></img>
	//                   </div>
	//                   <!-- 头像 -->
	//                   <div class="head-box">
	//                     <img class="head-img"
	//                      v-link="{name:'userDongtai',params:{id:item.id}}"                    v-bind:src="item.headimg"></img>
	//                     <span class="user-name textColor2 smallFont">{{item.username}}</span>
	//                   </div>
	//                   <div>
	//                     <img class="other" v-bind:src="item.xiala"></img>
	//                   </div>
	//                 </div>
	//                  <div v-link="{name:'userDongtai',params:{id:item.id}}"  class="image-box" v-if="item.image!=undefined">
	//                   <img v-bind:src="item.image"></img>
	//                 </div>
	//                 <div class="span-box" v-if="item.desc">
	//                   <span class="textColor3 smallFont">{{item.desc}}</span>
	//                 </div>
	//                 <div class="bottom smallFont">
	//                   <div class="bottom-item right">
	//                     <span class="time textColor2">{{item.time}}</span>
	//                   </div>
	//                   <div class="bottom-item">
	//                     <div class="icon zhuanfa-box">
	//                       <span class="zhuanfa textColor4">{{item.zhuanfaCount}}</span>
	//                       <img v-bind:src="item.zhuanfa"></img>
	//                     </div>
	//                     <div class="icon pinglun-box">
	//                       <span class="pinglun textColor4">{{item.pinglunCount}}</span>
	//                       <img v-bind:src="item.pinglun"></img>
	//                     </div>
	//                     <div class="icon zan-box">
	//                       <span class="zan textColor4">{{item.zanCount}}</span>
	//                       <img v-bind:src="item.zan"></img>
	//                     </div>
	//                   </div>
	//                 </div>
	//               </div>
	//     <!-- 一条tableviewCell -->
	//             </div>
	//             <!-- 右边 -->
	//             <div v-if="(item.active && $index==1)" class="qiehuan-box">
	//               bbb
	//             </div>
	//           </template>
	//
	//           <div class="foot freshColor" id="fresh-foot" v-if="slide.isLoadShow">
	//             <img v-bind:src="slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
	//             <span class="smallFont">上拉加载更多...</span>
	//           </div>
	//
	//         </div>
	//       </div>
	//
	//     </div>
	//   </div>
	// </template>
	// <script>
	
	exports.default = {
	  data: function data() {
	    return {
	      id: this.$route.params.id,
	      user: {},
	      isGuanZhu: false,
	      stable: {
	        editIcon: "/images/mine/pan.png",
	        guanzhu: "关注",
	        sixin: "私信",
	        jia: "+",
	        innerItem: [{ active: true, name: "帖子" }, { active: false, name: "话题" }],
	        xialaImg: "/images/mine/xiala.png"
	      },
	      list: [], //列表数据
	      loadHeight: 35,
	      //刷新，加载图标是否显示,是否在转动
	      slide: { isFreshShow: false, isLoadShow: false, isF: false, isS: false }
	    };
	  },
	
	  ready: function ready() {
	    this.scrollView();
	    this.renderUserInfo(this.id);
	    this.renderDetail(this.id, false);
	    this.scrollAction(this.id);
	    // this.test(); //测试json-server
	  },
	  computed: {
	    App: {
	      Init: function Init() {
	        App.State(title, url);
	        App.StateListen();
	      },
	      State: function State(title, url) {
	        //无刷新改变URL
	        if (window.history.pushState) {
	          window.history.pushState({ title: title, url: url }, title, url);
	        } else {
	          location.href = url;
	        }
	        document.title = title;
	      },
	      StateListen: function StateListen() {
	        //监听地址
	        var url = location.href.toString().split("/");
	
	        window.addEventListener('popstate', function (e) {
	          if (history.state) {
	            var url = e.state.url;
	            //根据url值进行相应操作
	          }
	        }, false);
	      }
	    }
	  },
	  methods: {
	    scrollView: function scrollView() {
	      scroll = new IScroll('#userDongtai-scroll', {
	        probeType: 3,
	        mouseWheel: true,
	        click: true,
	        preventDefault: false //默认事件打开,a标签的点击事件有效.
	      });
	    },
	
	    //获取用户发表的说说
	    renderDetail: function renderDetail(id, isFresh, fn) {
	      var self = this;
	      this.$http.get('/mock/dongtai/user' + id + '.json').then(function (response) {
	        //判断是否有数据
	        if (response.data.length) {
	          if (isFresh) {
	            self.list = response.data.concat(self.list);
	          } else {
	            self.list = self.list.concat(response.data);
	          }
	        }
	        //刷新iscroll
	        self.$nextTick(function () {
	          _commonUtil2.default.isAllLoaded("#userDongtai-scroll", function () {
	            scroll.refresh();
	            if (fn) {
	              return fn();
	            }
	          });
	        });
	      }, function (response) {});
	    },
	    scrollAction: function scrollAction(id) {
	      var self = this;
	      var isFresh = false; //是否刷新;
	      var isLoad = false; //是否加载;
	      scroll.on('scroll', function () {
	        var maxY = this.maxScrollY - this.y;
	        //刷新
	        if (this.y > self.loadHeight) {
	          self.slide.isFreshShow = true;
	          setTimeout(function () {
	            self.slide.isF = true; //变成刷新图标
	          }, 300);
	          isFresh = true;
	          return;
	        }
	        //加载
	        if (maxY > self.loadHeight) {
	          self.slide.isLoadShow = true;
	          self.slide.isS = true; //变成刷新图标
	          isLoad = true;
	          return;
	        }
	      });
	      scroll.on('scrollEnd', function () {
	        //刷新操作
	        if (isFresh) {
	          isFresh = false;
	          self.renderDetail(id, true, function () {
	            self.slide.isFreshShow = false;
	            self.slide.isF = false; //变成箭头图标
	          });
	        }
	        //上拉加载
	        if (isLoad) {
	          isLoad = false;
	          self.renderDetail(id, false, function () {
	            // self.slide.isLoadShow = false;
	            // self.slide.isS = false;//变成箭头图标
	            scroll.refresh();
	          });
	        }
	      });
	    },
	
	
	    //获取用户信息
	    renderUserInfo: function renderUserInfo(id) {
	      var _this = this;
	
	      this.$http.get('/mock/userInfo/user' + id + '.json').then(function (response) {
	        _this.user = response.data;
	        var flag = false;
	        //是否存在
	        if (response.data.fensiID) {
	          //这里是用好友的粉丝的id跟自己的id比较，稍后再修改
	          for (var i = 0; i < response.data.fensiID.length; i++) {
	            if (id == response.data.fensiID[i]) {
	              flag = true;
	              break;
	            }
	          }
	          if (flag) {
	            isGuanZhu = true;
	          }
	        }
	      }, function () {});
	    },
	
	    //切换帖子和话题
	    changeTab: function changeTab(index) {
	      for (var i = 0; i < this.stable.innerItem.length; i++) {
	        this.stable.innerItem[i].active = false;
	        if (index == i) {
	          this.stable.innerItem[i].active = true;
	        }
	      }
	    },
	
	    //是否关注
	    changeGuanzhu: function changeGuanzhu() {
	      this.isGuanZhu = !this.isGuanZhu;
	    },
	
	    //回到上一页
	    backPrepage: function backPrepage() {
	      window.history.go(-1);
	    },
	    test: function test() {
	      // json-server 测试
	      // json-server --watch mock.js  --port 3004.
	      this.$http.get("/daili/list").then(function (response) {
	        console.log(response.data);
	      }, function () {});
	    }
	  }
	};
	
	// </script>

	/* generated by vue-loader */

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container-box\">\n  <header id=\"header\" class=\"borderBottom\">\n    <ul>\n      <li class=\"Active text\" v-on:click=\"backPrepage\"><span class=\"back iconfont\">&#xe604;</span></li>\n      <li class=\"switch headCenter middleFont\">\n        {{user.userName}}\n      </li>\n      <li><span class=\"more iconfont\">&#xe677;</span></li>\n    </ul>\n  </header>\n  <div id=\"body\" class=\"background1\">\n\n    <div id=\"userDongtai-scroll\" class=\"scroll-view\">\n      <div class=\"scroll\">\n        <!--  下拉刷新-->\n        <div class=\"head freshColor\" v-if=\"slide.isFreshShow\" id=\"fresh-head\">\n          <img v-bind:src=\"slide.isF == false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n          <span class=\"smallFont\">下拉刷新...</span>\n        </div>\n        <!-- 用户头信息 -->\n        <div class=\"userInfo background1\">\n          <div class=\"headImgBox\">\n            <div class = 'headImg'><img class=\"background3\" v-bind:src=\"user.headImg\"/></div>\n          </div>\n          <div class=\"mine-item userName textColor2\"><span class=\"middleFont\">{{user.userName}}</span></div>\n          <div class=\"mine-item userID textColor4\">\n            <i class=\"iconfont\">&#xe689;</i>\n            <span>ID:{{user.userID}}</span>\n          </div>\n          <ul class=\"gzsx smallFont\" v-bind:class=\"{active:isGuanZhu}\">\n            <li v-on:click=\"changeGuanzhu\">\n              <i v-if=\"!isGuanZhu\">{{stable.jia}}</i>\n              <span>{{stable.guanzhu}}</span>\n            </li>\n            <li>\n              <i class=\"iconfont\">&#xe63a;</i>\n              <span>{{stable.sixin}}</span>\n            </li>\n          </ul>\n          <div class=\"mine-item biaoqian textColor2\"><span>{{user.sign}}</span></div>\n\n          <div class=\"box borderBottom\">\n            <div class=\"mine-item qiehuan border5\">\n              <template v-for=\"item in stable.innerItem\">\n                <div class=\"inner-item\" v-bind:class=\"item.active?'qiehuan-active':''\" v-on:click=\"changeTab($index)\">\n                  <span class=\"smallFont\">{{item.name}}</span>\n                  <img data-name=\"one\" v-bind:src=\"stable.xialaImg\"/>\n                </div>\n              </template>\n\n            </div>\n          </div>\n        </div>\n        <!-- 左右切换条 -->\n        <template v-for=\"item in stable.innerItem\">\n          <!-- 左边 -->\n          <div v-if=\"(item.active && $index==0)\" class=\"qiehuan-box\">\n  <!-- 一条tableviewCell -->\n            <div class=\"item commonColor borderBottom\"  v-for=\"item in list\">\n              <div class=\"tuijian-box smallFont\">\n                <span class=\"tuijianren cellDeepColor\" v-if=\"item.tuijianzhe\">{{item.tuijianzhe}}</span>\n                <span class=\"tuijian textColor2\" v-if=\"item.tuijian\">{{item.tuijian}}</span>\n              </div>\n              <div class=\"title  cellDeepColor\">\n                <span class=\"middleFont\">{{item.title}}</span>\n              </div>\n              <div class=\"user-info\">\n                <div class=\"user-box\">\n                  <img class=\"user-icon\" v-bind:src=\"item.userIcon\"></img>\n                </div>\n                <!-- 头像 -->\n                <div class=\"head-box\">\n                  <img class=\"head-img\"\n                   v-link=\"{name:'userDongtai',params:{id:item.id}}\"                    v-bind:src=\"item.headimg\"></img>\n                  <span class=\"user-name textColor2 smallFont\">{{item.username}}</span>\n                </div>\n                <div>\n                  <img class=\"other\" v-bind:src=\"item.xiala\"></img>\n                </div>\n              </div>\n               <div v-link=\"{name:'userDongtai',params:{id:item.id}}\"  class=\"image-box\" v-if=\"item.image!=undefined\">\n                <img v-bind:src=\"item.image\"></img>\n              </div>\n              <div class=\"span-box\" v-if=\"item.desc\">\n                <span class=\"textColor3 smallFont\">{{item.desc}}</span>\n              </div>\n              <div class=\"bottom smallFont\">\n                <div class=\"bottom-item right\">\n                  <span class=\"time textColor2\">{{item.time}}</span>\n                </div>\n                <div class=\"bottom-item\">\n                  <div class=\"icon zhuanfa-box\">\n                    <span class=\"zhuanfa textColor4\">{{item.zhuanfaCount}}</span>\n                    <img v-bind:src=\"item.zhuanfa\"></img>\n                  </div>\n                  <div class=\"icon pinglun-box\">\n                    <span class=\"pinglun textColor4\">{{item.pinglunCount}}</span>\n                    <img v-bind:src=\"item.pinglun\"></img>\n                  </div>\n                  <div class=\"icon zan-box\">\n                    <span class=\"zan textColor4\">{{item.zanCount}}</span>\n                    <img v-bind:src=\"item.zan\"></img>\n                  </div>\n                </div>\n              </div>\n            </div>\n  <!-- 一条tableviewCell -->\n          </div>\n          <!-- 右边 -->\n          <div v-if=\"(item.active && $index==1)\" class=\"qiehuan-box\">\n            bbb\n          </div>\n        </template>\n\n        <div class=\"foot freshColor\" id=\"fresh-foot\" v-if=\"slide.isLoadShow\">\n          <img v-bind:src=\"slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n          <span class=\"smallFont\">上拉加载更多...</span>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n";

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(35)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\components\\setting.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(40)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./setting.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dialog = __webpack_require__(36);
	
	var _dialog2 = _interopRequireDefault(_dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.use(_dialog2.default); // <template>
	//   <div class="setting">
	//     <header id="header" class="borderBottom">
	//       <ul>
	//         <li class="Active text" v-on:click="backPrepage"><span class="back iconfont">&#xe604;</span></li>
	//         <li class="headCenter middleFont">
	//           {{head.center}}
	//         </li>
	//       </ul>
	//     </header>
	//     <div id='body'>
	//
	//
	//     </div>
	//     <!--  -->
	//     <vue-dialog v-if="dialogShow"></vue-dialog>
	//   </div>
	// </template>
	// <script>
	
	new _dialog2.default();
	
	exports.default = {
	  data: function data() {
	    return {
	      head: {
	        center: '设置'
	      },
	      quitInfo: "是否退出当前账号",
	      dialogShow: false
	    };
	  },
	
	  methods: {
	    backPrepage: function backPrepage() {
	      window.history.go(-1);
	    },
	    showDialog: function showDialog() {
	      this.dialogShow = true;
	    },
	    hiddenDialog: function hiddenDialog() {
	      this.dialogShow = false;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueDialog = __webpack_require__(37);
	
	var _vueDialog2 = _interopRequireDefault(_vueDialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var VueDialog = function VueDialog() {}; //noop
	
	VueDialog.install = function () {
	  Vue.component('vue-dialog', _vueDialog2.default);
	};
	
	exports.default = VueDialog;
	
	//对话框插件 html
	// <vue-dialog></vue-dialog>
	
	// js
	// import VueDialog from "../plugins/dialog.js";
	// Vue.use(VueDialog);
	// new VueDialog();

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src\\scripts\\plugins\\vue-dialog.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./vue-dialog.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 38 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>
	//   <div class="m-dialog" v-if="isShow">
	//     <div class="yo-dialog yo-dialog-quit">
	//       <div class="bd">
	//         <p>are you sure?</p>
	//       </div>
	//       <footer class="ft">
	//           <button class="yo-btn yo-btn-dialog yo-btn-l" @click="close">取消</button>
	//           <button class="yo-btn yo-btn-dialog yo-btn-l" @close="close">确定</button>
	//       </footer>
	//
	//     </div>
	//     <div class="yo-mask"></div>
	//   </div>
	// </template>
	// <script>
	exports.default = {
	  data: function data() {
	    return {
	      isShow: true
	    };
	  },
	
	  methods: {
	    close: function close() {
	      this.isShow = false;
	    }
	  }
	};
	// </script>

	/* generated by vue-loader */

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"m-dialog\" v-if=\"isShow\">\n  <div class=\"yo-dialog yo-dialog-quit\">\n    <div class=\"bd\">\n      <p>are you sure?</p>\n    </div>\n    <footer class=\"ft\">\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @click=\"close\">取消</button>\n        <button class=\"yo-btn yo-btn-dialog yo-btn-l\" @close=\"close\">确定</button>\n    </footer>\n\n  </div>\n  <div class=\"yo-mask\"></div>\n</div>\n";

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"setting\">\n  <header id=\"header\" class=\"borderBottom\">\n    <ul>\n      <li class=\"Active text\" v-on:click=\"backPrepage\"><span class=\"back iconfont\">&#xe604;</span></li>\n      <li class=\"headCenter middleFont\">\n        {{head.center}}\n      </li>\n    </ul>\n  </header>\n  <div id='body'>\n\n\n  </div>\n  <!--  -->\n  <vue-dialog v-if=\"dialogShow\"></vue-dialog>\n</div>\n";

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _state = __webpack_require__(42);
	
	var _mutations = __webpack_require__(43);
	
	exports.default = new Vuex.Store({
	  state: _state.state,
	  mutations: _mutations.mutations
	});

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var state = exports.state = {
	  isGuided: false, //是否已经完成导航页切换
	  tabIndex: 0
	
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var mutations = exports.mutations = {
	  CHANGETAB: function CHANGETAB(state, currentTabindex) {
	    state.tabIndex = currentTabindex;
	  },
	  ISGUIDED: function ISGUIDED(state, isGuided) {
	    state.isGuided = isGuided;
	  }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map