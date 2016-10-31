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
	
	var _details = __webpack_require__(67);
	
	var _details2 = _interopRequireDefault(_details);
	
	var _store = __webpack_require__(41);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//其他
	
	//主路由
	//css
	var router = new VueRouter();
	//状态管理
	
	//设置页面
	
	//主页
	
	
	//导航页
	
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
	  },
	  "/details/:id": {
	    name: 'details',
	    component: _details2.default
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
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
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
	//     <footer id="footer" class="Top">
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

	module.exports = "\n\n<div class=\"container-box commonColor\">\n  <router-view transition=\"fade\"></router-view>\n  <footer id=\"footer\" class=\"Top\">\n    <ul>\n      <li v-bind:class=\"tabIndex == $index ? 'Active' : 'footerC'\"\n          v-for=\"item in footerData\"\n          v-link=\"{path:item.path}\"\n          v-on:click=\"changPage($index)\">\n        <i class=\"icon iconfont\">{{{item.icon}}}</i>\n        <span>{{item.name}}</span>\n      </li>\n    </ul>\n  </footer>\n</div>\n";

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
	//     <header id="header" class="Bottom">
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
	//                     <div class="item commonColor Bottom"  v-for="item in list">
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
	//
	//                     <div style="height:87px;width:0px;"></div>
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
	//
	//                     <div class="foot freshColor" id="fresh-foot" v-if="slide.isLoadShow">
	//                       <img v-bind:src="slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
	//                       <span class="smallFont">上拉加载更多...</span>
	//                     </div>
	//
	//                     <div style="height:87px;width:0px;"></div>
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
	        resistanceRatio: 0,
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

	module.exports = "\n\n<div>\n  <header id=\"header\" class=\"Bottom\">\n    <ul>\n      <li class=\"Active text\" v-on:click=\"styleSheet\">{{headLeft}}</li>\n      <li class=\"switch headCenter\">\n        <template v-for=\"item in headSwitch\">\n          <span\n          class=\"switchStyle\" v-bind:class=\"{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}\" v-on:click=\"switchPage($index)\">{{item.name}}</span>\n        </template>\n      </li>\n      <li class=\"search\"><span class=\"icon iconfont\">{{{headRight}}}</span></li>\n    </ul>\n  </header>\n  <div id=\"body\">\n\n    <div class=\"container-box commonColor\">\n      <div class=\"swiper-container index-swiper\">\n        <div class=\"swiper-wrapper\">\n          <div v-for=\"slide in swiperSildes\" class=\"swiper-slide commonColor\" id=\"swiperPageOne\">\n\n\n            <template v-if=\"$index==0\">\n              <!-- 加载框 -->\n              <div v-loading=\"isLoading\" class=\"loading\"></div>\n\n              <div id=\"w-index-scroll\" class=\"scroll-view\">\n                <div class=\"scroll\">\n\n                  <div class=\"head freshColor\" v-if=\"slide.isFreshShow\" id=\"fresh-head\">\n                    <img v-bind:src=\"slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">下拉刷新...</span>\n                  </div>\n\n                  <div class=\"item commonColor Bottom\"  v-for=\"item in list\">\n                    <div class=\"tuijian-box smallFont\">\n                      <span class=\"tuijianren cellDeepColor\" v-if=\"item.tuijianzhe\">{{item.tuijianzhe}}</span>\n                      <span class=\"tuijian textColor2\" v-if=\"item.tuijian\">{{item.tuijian}}</span>\n                    </div>\n                    <div class=\"title  cellDeepColor\">\n                      <span class=\"middleFont\">{{item.title}}</span>\n                    </div>\n                    <div class=\"user-info\">\n                      <div class=\"user-box\">\n                        <img class=\"user-icon\" v-bind:src=\"item.userIcon\"></img>\n                      </div>\n                      <!-- 头像 -->\n                      <div class=\"head-box\">\n                        <img class=\"head-img\"\n                         v-link=\"{name:'userDongtai',params:{id:item.id}}\"                    v-bind:src=\"item.headimg\"></img>\n                        <span class=\"user-name textColor2 smallFont\">{{item.username}}</span>\n                      </div>\n                      <div>\n                        <img class=\"other\" v-bind:src=\"item.xiala\"></img>\n                      </div>\n                    </div>\n                     <div v-link=\"{name:'userDongtai',params:{id:item.id}}\"  class=\"image-box\" v-if=\"item.image!=undefined\">\n                      <img v-bind:src=\"item.image\"></img>\n                    </div>\n                    <div class=\"span-box\" v-if=\"item.desc\">\n                      <span class=\"textColor3 smallFont\">{{item.desc}}</span>\n                    </div>\n                    <div class=\"bottom smallFont\">\n                      <div class=\"bottom-item right\">\n                        <span class=\"time textColor2\">{{item.time}}</span>\n                      </div>\n                      <div class=\"bottom-item\">\n                        <div class=\"icon zhuanfa-box\">\n                          <span class=\"zhuanfa textColor4\">{{item.zhuanfaCount}}</span>\n                          <img v-bind:src=\"item.zhuanfa\"></img>\n                        </div>\n                        <div class=\"icon pinglun-box\">\n                          <span class=\"pinglun textColor4\">{{item.pinglunCount}}</span>\n                          <img v-bind:src=\"item.pinglun\"></img>\n                        </div>\n                        <div class=\"icon zan-box\">\n                          <span class=\"zan textColor4\">{{item.zanCount}}</span>\n                          <img v-bind:src=\"item.zan\"></img>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"foot freshColor\" id=\"fresh-foot\" v-if=\"slide.isLoadShow\">\n                    <img v-bind:src=\"slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">上拉加载更多...</span>\n                  </div>\n\n\n                  <div style=\"height:87px;width:0px;\"></div>\n                </div>\n              </div>\n            </template>\n            <template v-if=\"$index==1\">\n              <!-- 加载框 -->\n              <div v-loading=\"isLoading2\" class=\"loading\"></div>\n\n              <div id=\"w-index-scroll2\" class=\"scroll-view\">\n                <div class=\"scroll\">\n\n                  <div class=\"head freshColor\" v-if=\"slide.isFreshShow\" id=\"fresh-head\">\n                    <img v-bind:src=\"slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">下拉刷新...</span>\n                  </div>\n\n                  <div class=\"item commonColor borderBottom\"  v-for=\"item in list2\">\n                    <div class=\"tuijian-box smallFont\">\n                      <span class=\"tuijianren cellDeepColor\" v-if=\"item.tuijianzhe\">{{item.tuijianzhe}}</span>\n                      <span class=\"tuijian textColor2\" v-if=\"item.tuijian\">{{item.tuijian}}</span>\n                    </div>\n                    <div class=\"title  cellDeepColor\">\n                      <span class=\"middleFont\">{{item.title}}</span>\n                    </div>\n                    <div class=\"user-info\">\n                      <div class=\"user-box\">\n                        <img class=\"user-icon\" v-bind:src=\"item.userIcon\"></img>\n                      </div>\n                      <!-- 头像 -->\n                      <div class=\"head-box\">\n                        <img class=\"head-img\" v-link=\"{name:'userDongtai',params:{id:item.id}}\" v-bind:src=\"item.headimg\"></img>\n                        <span class=\"user-name textColor2 smallFont\">{{item.username}}</span>\n                      </div>\n                      <div>\n                        <img class=\"other\" v-bind:src=\"item.xiala\"></img>\n                      </div>\n                    </div>\n                    <!-- 大图片 -->\n                     <div class=\"image-box\" v-link=\"{name:'userDongtai',params:{id:item.id}}\" v-if=\"item.image!=undefined\">\n                      <img v-bind:src=\"item.image\"></img>\n                    </div>\n                    <div class=\"span-box\" v-if=\"item.desc\">\n                      <span class=\"textColor3 smallFont\">{{item.desc}}</span>\n                    </div>\n                    <div class=\"bottom smallFont\">\n                      <div class=\"bottom-item right\">\n                        <span class=\"time textColor2\">{{item.time}}</span>\n                      </div>\n                      <div class=\"bottom-item\">\n                        <div class=\"icon zhuanfa-box\">\n                          <span class=\"zhuanfa textColor4\">{{item.zhuanfaCount}}</span>\n                          <img v-bind:src=\"item.zhuanfa\"></img>\n                        </div>\n                        <div class=\"icon pinglun-box\">\n                          <span class=\"pinglun textColor4\">{{item.pinglunCount}}</span>\n                          <img v-bind:src=\"item.pinglun\"></img>\n                        </div>\n                        <div class=\"icon zan-box\">\n                          <span class=\"zan textColor4\">{{item.zanCount}}</span>\n                          <img v-bind:src=\"item.zan\"></img>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                  <div class=\"foot freshColor\" id=\"fresh-foot\" v-if=\"slide.isLoadShow\">\n                    <img v-bind:src=\"slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n                    <span class=\"smallFont\">上拉加载更多...</span>\n                  </div>\n\n                  <div style=\"height:87px;width:0px;\"></div>\n                </div>\n              </div>\n            </template>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n";

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
	      },
	      list: ["火柴代表大会", "声控福利站", "柴扉"]
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
	//     <header id="header" class="Bottom">
	//       <ul>
	//         <li class="headCenter weight middleFont">{{head.center}}</li>
	//       </ul>
	//     </header>
	//     <div id='body'>
	//       <div class="box-box">
	//         <template v-for="item in list">
	//           <div class="box-cell Bottom Top">
	//             <div class="cell-left">img</div>
	//             <div class="cell-center">{{item}}</div>
	//             <div class="cell-right"><i class="iconfont reverse">&#xe604;</i></div>
	//           </div>
	//         </template>
	//       </div>
	//     </div>
	//   </div>
	// </template>
	// <script>

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <header id=\"header\" class=\"Bottom\">\n    <ul>\n      <li class=\"headCenter weight middleFont\">{{head.center}}</li>\n    </ul>\n  </header>\n  <div id='body'>\n    <div class=\"box-box\">\n      <template v-for=\"item in list\">\n        <div class=\"box-cell Bottom Top\">\n          <div class=\"cell-left\">img</div>\n          <div class=\"cell-center\">{{item}}</div>\n          <div class=\"cell-right\"><i class=\"iconfont reverse\">&#xe604;</i></div>\n        </div>\n      </template>\n    </div>\n  </div>\n</div>\n";

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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _commonUtil = __webpack_require__(17);
	
	var _commonUtil2 = _interopRequireDefault(_commonUtil);
	
	var _actions = __webpack_require__(10);
	
	__webpack_require__(61);
	
	__webpack_require__(63);
	
	var _mintUi = __webpack_require__(44);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	Vue.component(_mintUi.Cell.name, _mintUi.Cell); // <template>
	//   <div>
	//     <header id="header" class="Bottom">
	//       <ul>
	//         <li class="Active text" v-on:click="createTalk">{{head.left}}</li>
	//         <li class="input headCenter">
	//           <input type="text" class="background2 middleFont" :placeholder="head.center">
	//         </li>
	//         <li class="middleFont">{{head.right}}</li>
	//       </ul>
	//     </header>
	//     <div id="body">
	//
	//       <div id="w-talk-scroll" class="scroll-view">
	//         <div class="scroll">
	//
	//           <div class="swiper-container talk-swiper">
	//             <div class="swiper-wrapper">
	//               <template v-for="item in swiperImgs">
	//                 <div class="swiper-slide"><img v-bind:src="item.imgSrc" alt=""></div>
	//               </template>
	//             </div>
	//             <div class="swiper-pagination talk-pagination">
	//               <template v-for="item in paginationActive">
	//                 <span class="custom-pagination" v-bind:class="{active:item.isActive}" v-on:click="swiperPage($index)"></span>
	//               </template>
	//             </div>
	//           </div>
	//           <div class="cell-body">
	//             <template v-for="item in cellList">
	//     <!-- cell -->
	//               <a class="mint-cell mint-cell-swipe">
	//                 <div class="mint-cell-left" style="transform: translate3d(-1px, 0px, 0px);">
	//                   <div slot="left" class="mint-cell-swipe-buttongroup">
	//                   </div>
	//                 </div>
	//                 <div class="mint-cell-wrapper mint-cell-gray Bottom">
	//                   <div class="mint-cell-title">
	//                     <span class="mint-cell-text">{{item.titleCell.title}}</span>
	//                   </div>
	//                   <div class="mint-cell-value">{{item.titleCell.more}}
	//                     <span class="iconfont cell-title-icon" slot="icon">&#xe604;</span>
	//                   </div>
	//                 </div>
	//                 <div class="mint-cell-right" style="transform: translate3d(0px, 0px, 0px);">
	//                   <div slot="right" class="mint-cell-swipe-buttongroup">
	//                   </div>
	//                 </div>
	//               </a>
	//     <!-- cell -->
	//               <!-- <mt-cell-swipe class="d" v-bind:title="item.titleCell.title">
	//                 <Slot>{{item.titleCell.more}}
	//                   <span v-if="item.titleCell.isMoreIHidden" class="iconfont cell-title-icon" slot="icon" >&#xe604;</span>
	//                 </Slot>
	//               </mt-cell-swipe> -->
	//     <!-- cell -->
	//               <template v-for="item in cellConList">
	//
	//                 <mt-cell-swipe
	//                   v-bind:title="item.name"
	//                   v-bind:label="item.liulan"
	//                   v-bind:right="[
	//                     {
	//                       content: item.isGuanzhu?'取消关注':'关注',
	//                       style: { background: item.isGuanzhu?'#CD3333':'	#104E8B', color: '#fff' },
	//                     }
	//                   ]"
	//                 >
	//                 </mt-cell-swipe>
	//               </template>
	//     <!-- cell  -->
	//             </template>
	//           </div>
	//           <div style="height:87px;width:0px;"></div>
	//         </div>
	//       </div>
	//
	//     </div>
	//   </div>
	// </template>
	// <script>
	//
	
	Vue.component(_mintUi.CellSwipe.name, _mintUi.CellSwipe);
	
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
	      paginationActive: [{
	        isActive: true
	      }, {
	        isActive: false
	      }, {
	        isActive: false
	      }, {
	        isActive: false
	      }],
	      swiper: '',
	      cellList: [],
	      cellConList: []
	    };
	  },
	  ready: function ready() {
	    this.change(1);
	    this.initSwiper('/mock/talk/banner.json');
	    this.getListData();
	  },
	
	  methods: {
	    guanzhu: function guanzhu() {
	      console.log("fsadkj");
	    },
	    //列表头数据
	    getListData: function getListData() {
	      var self = this;
	      self.$http.get("/mock/talk/headList.json").then(function (response) {
	        self.cellList = response.data;
	        for (var i = 0; i < response.data.length; i++) {
	          var id = response.data[i].kindID;
	          self.talkList(id);
	        }
	        self.$nextTick(function () {});
	      }, function (response) {});
	    },
	    //列表内容数据
	    talkList: function talkList(id) {
	      var _this = this;
	
	      this.$http.get("/mock/talk/talkList.json").then(function (response) {
	        for (var j = 0; j < response.data.length; j++) {
	          if (id == response.data[j].kindID) {
	            _this.cellConList = response.data;
	
	            _this.$nextTick(function () {
	              var talkScroll = new IScroll('#w-talk-scroll', {
	                click: true,
	                probeType: 1
	              });
	            });
	          }
	        }
	      }, function () {});
	    },
	    test: function test(e) {
	      this.event = e.type;
	    },
	    initSwiper: function initSwiper(url) {
	      var _this2 = this;
	
	      var self = this;
	      this.$http.get(url).then(function (response) {
	
	        _this2.swiperImgs = response.data;
	
	        _this2.$nextTick(function () {
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
	
	    //创键话题
	    createTalk: function createTalk() {}
	  }
	
	};
	// </script>
	//
	//
	//
	//
	// <!-- .cell{
	//   width:100%;
	//   height:40px;
	//   line-height: 40px;
	//   .cell-block{
	//     width:100%;
	//     height:100%;
	//     color:#222;
	//     .item{
	//       margin-left:12px;
	//       border-bottom:1px solid #ddd;
	//       width:100%;
	//       height:100%;
	//     }
	//   }
	//   .small-block{
	//     width:20%;
	//     height:100%;
	//     color:#fff;
	//     text-align: center;
	//   }
	//   .big-block{
	//     width:25%;
	//     height:100%;
	//     color:#fff;
	//     text-align: center;
	//   }
	//   .primary{
	//     background: #436EEE;
	//   }
	//   .gray{
	//     background:#BABABA;
	//   }
	//   .danger{
	//     background:#CD3700;
	//   }
	// } -->
	//
	// <!--
	// <div class="swiper-container cell">
	//   <div class="swiper-wrapper">
	//     <div class="swiper-slide cell-block">
	//       <div class="item">
	//         dfs
	//       </div>
	//     </div>
	//     <div class="swiper-slide big-block primary"><span>sfd</span></div>
	//     <div class="swiper-slide big-block gray "><span>fs</span></div>
	//   </div>
	// </div> -->
	//
	//
	//
	//
	//
	//
	//
	//
	//
	// <!-- createCell(){
	//   let tempSwiper = "";
	//   let flag = true; // 判断是否是新一轮的滑出滑入
	//   var swiperArr = new Swiper('.cell',{
	//     slidesPerView:"auto", // 可改变slide宽高
	//     resistanceRatio:0, //边缘抵抗力的大小比例
	//
	//     onTouchEnd:function(swiper,event){
	//
	//       setTimeout(function(){
	//         //滑动对象不为空
	//         if(tempSwiper){
	//           //将所有的滑块收回去
	//           for(let i = 0;i<swiperArr.length;i++){
	//             swiperArr[i].slideTo(0);
	//           }
	//           //当前滑块滑出
	//           swiper.slideTo(1);
	//           //如果上一次跟本次滑动的是同一块，则收回
	//           if(tempSwiper == swiper && flag){
	//             swiper.slideTo(0);
	//             flag = false;
	//           }else{
	//             flag = true;
	//           }
	//         }
	//         //存储当前滑动的滑块
	//         tempSwiper = swiper;
	//       },0);
	//     },
	//     onTap:function(){
	//
	//     }
	//   });
	//
	// } -->

	/* generated by vue-loader */

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<div>\n  <header id=\"header\" class=\"Bottom\">\n    <ul>\n      <li class=\"Active text\" v-on:click=\"createTalk\">{{head.left}}</li>\n      <li class=\"input headCenter\">\n        <input type=\"text\" class=\"background2 middleFont\" :placeholder=\"head.center\">\n      </li>\n      <li class=\"middleFont\">{{head.right}}</li>\n    </ul>\n  </header>\n  <div id=\"body\">\n\n    <div id=\"w-talk-scroll\" class=\"scroll-view\">\n      <div class=\"scroll\">\n\n        <div class=\"swiper-container talk-swiper\">\n          <div class=\"swiper-wrapper\">\n            <template v-for=\"item in swiperImgs\">\n              <div class=\"swiper-slide\"><img v-bind:src=\"item.imgSrc\" alt=\"\"></div>\n            </template>\n          </div>\n          <div class=\"swiper-pagination talk-pagination\">\n            <template v-for=\"item in paginationActive\">\n              <span class=\"custom-pagination\" v-bind:class=\"{active:item.isActive}\" v-on:click=\"swiperPage($index)\"></span>\n            </template>\n          </div>\n        </div>\n        <div class=\"cell-body\">\n          <template v-for=\"item in cellList\">\n  <!-- cell -->\n            <a class=\"mint-cell mint-cell-swipe\">\n              <div class=\"mint-cell-left\" style=\"transform: translate3d(-1px, 0px, 0px);\">\n                <div slot=\"left\" class=\"mint-cell-swipe-buttongroup\">\n                </div>\n              </div>\n              <div class=\"mint-cell-wrapper mint-cell-gray Bottom\">\n                <div class=\"mint-cell-title\">\n                  <span class=\"mint-cell-text\">{{item.titleCell.title}}</span>\n                </div>\n                <div class=\"mint-cell-value\">{{item.titleCell.more}}\n                  <span class=\"iconfont cell-title-icon\" slot=\"icon\">&#xe604;</span>\n                </div>\n              </div>\n              <div class=\"mint-cell-right\" style=\"transform: translate3d(0px, 0px, 0px);\">\n                <div slot=\"right\" class=\"mint-cell-swipe-buttongroup\">\n                </div>\n              </div>\n            </a>\n  <!-- cell -->\n            <!-- <mt-cell-swipe class=\"d\" v-bind:title=\"item.titleCell.title\">\n              <Slot>{{item.titleCell.more}}\n                <span v-if=\"item.titleCell.isMoreIHidden\" class=\"iconfont cell-title-icon\" slot=\"icon\" >&#xe604;</span>\n              </Slot>\n            </mt-cell-swipe> -->\n  <!-- cell -->\n            <template v-for=\"item in cellConList\">\n\n              <mt-cell-swipe\n                v-bind:title=\"item.name\"\n                v-bind:label=\"item.liulan\"\n                v-bind:right=\"[\n                  {\n                    content: item.isGuanzhu?'取消关注':'关注',\n                    style: { background: item.isGuanzhu?'#CD3333':'\t#104E8B', color: '#fff' },\n                  }\n                ]\"\n              >\n              </mt-cell-swipe>\n            </template>\n  <!-- cell  -->\n          </template>\n        </div>\n        <div style=\"height:87px;width:0px;\"></div>\n      </div>\n    </div>\n\n  </div>\n</div>\n";

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
	
	__webpack_require__(61);
	
	var _actions = __webpack_require__(10);
	
	var _mintUi = __webpack_require__(44);
	
	Vue.component(_mintUi.CellSwipe.name, _mintUi.CellSwipe); // <template>
	//   <div>
	//     <header id="header" class="Bottom">
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
	//                   <div class="box-box">
	//                     <template v-for="item in sixinList">
	//                       <mt-cell-swipe
	//                         v-bind:title="item"
	//                         :right="[
	//                           {
	//                             content: '删除',
	//                             style: { background: 'red', color: '#fff' },
	//
	//                           }
	//                         ]">
	//                           <Slot></Slot>
	//                         </mt-cell-swipe>
	//                     </template>
	//                   </div>
	//
	//                 </div>
	//               </div>
	//
	//             </div>
	//             <div class="swiper-slide">
	//               <div id="tixing-scroll" class="scroll-view">
	//                 <div class="scroll">
	//
	//                   <div class="message-box">
	//                     <template v-for="item in tixingList">
	//                       <div class="message-cell Bottom">
	//                         <div class="cell-left">img</div>
	//                         <div class="cell-center">{{item}}</div>
	//                         <div class="cell-right"><i class="iconfont reverse">&#xe604;</i></div>
	//                       </div>
	//                     </template>
	//                   </div>
	//
	//                 </div>
	//               </div>
	//
	//             </div>
	//           </div>
	//         </div>
	//     </div>
	//   </div>
	// </template>
	//
	// <script>
	
	var messageSwiper = "";
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
	      },
	      sixinList: ["错过的七月", "火柴盒官方", "未关注人私信"],
	      tixingList: ["邀请", "转发与邀请", "评论", "赞", "新粉丝", "火柴盒小助手"]
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
	        self.$nextTick(function () {
	          messageScroll.refresh();
	        });
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
	        touchRatio: 0,
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

	module.exports = "\n<div>\n  <header id=\"header\" class=\"Bottom\">\n    <ul>\n      <li class=\"Active text\"  v-on:click=\"addFriends\">{{head.left}}</li>\n      <li class=\"switch headCenter\">\n        <template v-for=\"item in head.center\">\n          <span\n          class=\"switchStyle\" v-bind:class=\"{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}\" v-on:click=\"switchPage($index)\">{{item.name}}</span>\n        </template>\n      </li>\n      <li class=\"search middleFont\">{{head.right}}</li>\n    </ul>\n  </header>\n  <div id='body'>\n    <div class=\"container-box commonColor\">\n      <div class=\"swiper-container message-swiper\">\n        <div class=\"swiper-wrapper\">\n          <div class=\"swiper-slide commonColor\" id=\"swiperPageOne\">\n\n            <div id=\"message-scroll\" class=\"scroll-view\">\n              <div class=\"scroll\">\n\n                <div class=\"box-box\">\n                  <template v-for=\"item in sixinList\">\n                    <mt-cell-swipe\n                      v-bind:title=\"item\"\n                      :right=\"[\n                        {\n                          content: '删除',\n                          style: { background: 'red', color: '#fff' },\n\n                        }\n                      ]\">\n                        <Slot></Slot>\n                      </mt-cell-swipe>\n                  </template>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n          <div class=\"swiper-slide\">\n            <div id=\"tixing-scroll\" class=\"scroll-view\">\n              <div class=\"scroll\">\n\n                <div class=\"message-box\">\n                  <template v-for=\"item in tixingList\">\n                    <div class=\"message-cell Bottom\">\n                      <div class=\"cell-left\">img</div>\n                      <div class=\"cell-center\">{{item}}</div>\n                      <div class=\"cell-right\"><i class=\"iconfont reverse\">&#xe604;</i></div>\n                    </div>\n                  </template>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n";

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
	//     <header id="header" class="Bottom">
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

	module.exports = "\n<div>\n  <header id=\"header\" class=\"Bottom\">\n    <ul>\n      <li class=\"Active text fixWidth vipColor\" v-on:click=\"VIP\">{{head.left}}</li>\n      <li class=\"headCenter weight fixWidth bigFont\">\n        {{head.center}}\n      </li>\n      <li class=\"Active text fixWidth text-right\" v-link=\"{name:'setting'}\">\n        {{head.right}}\n      </li>\n    </ul>\n  </header>\n  <div id=\"body\">\n\n    <div class=\"userInfo background1\">\n      <div class=\"headImgBox\">\n        <div></div>\n        <div class = 'headImg'><img class=\"background3\" v-bind:src=\"user.headImg\"/></div>\n        <div class=\"edit\">\n          <div>\n            <img class=\"background1\" v-bind:src=\"stable.editIcon\"/>\n            <span class=\"textColor4\">{{stable.edit}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"mine-item userName textColor2 smallFont\"><span>{{user.userName}}</span></div>\n      <div class=\"mine-item userID textColor4 smallFont\"><span>ID:{{user.userID}}</span></div>\n      <div class=\"mine-item biaoqian textColor2 smallFont\"><span>{{stable.setSign}}</span></div>\n      <div class=\"mine-item guanzhufensi smallFont\">\n        <div class=\"one smallFont\">\n          <span class=\"textColor3\">{{user.guanzhu}}</span>\n          <span class=\"textColor3\">{{stable.guanzhu}}</span>\n        </div>\n        <div class=\"borderLeft middle\"></div>\n        <div class =\"two\">\n          <span class=\"textColor3\">{{user.fensi}}</span>\n          <span class=\"textColor3\">{{stable.fensi}}</span>\n        </div>\n      </div>\n      <div class=\"box borderBottom\">\n        <div class=\"mine-item qiehuan border5\">\n          <template v-for=\"item in stable.innerItem\">\n            <div class=\"inner-item smallFont\" v-bind:class=\"item.active?'qiehuan-active':''\" v-on:click=\"changeTab($index)\">\n              <span class=\"smallFont\">{{item.name}}</span>\n              <img data-name=\"one\" v-bind:src=\"stable.xialaImg\"/>\n            </div>\n          </template>\n\n        </div>\n      </div>\n    </div>\n    <template v-for=\"item in stable.innerItem\">\n      <div v-if=\"(item.active && $index==0)\" class=\"qiehuan-box\">\n\n      </div>\n      <div v-if=\"(item.active && $index==1)\" class=\"qiehuan-box\">\n\n      </div>\n      <div v-if=\"(item.active && $index==2)\" class=\"qiehuan-box\">\n\n      </div>\n    </template>\n\n  </div>\n</div>\n";

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
	//     <header id="header" class="Bottom">
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

	module.exports = "\n<div class=\"container-box\">\n  <header id=\"header\" class=\"Bottom\">\n    <ul>\n      <li class=\"Active text\" v-on:click=\"backPrepage\"><span class=\"back iconfont\">&#xe604;</span></li>\n      <li class=\"switch headCenter middleFont\">\n        {{user.userName}}\n      </li>\n      <li><span class=\"more iconfont\">&#xe677;</span></li>\n    </ul>\n  </header>\n  <div id=\"body\" class=\"background1\">\n\n    <div id=\"userDongtai-scroll\" class=\"scroll-view\">\n      <div class=\"scroll\">\n        <!--  下拉刷新-->\n        <div class=\"head freshColor\" v-if=\"slide.isFreshShow\" id=\"fresh-head\">\n          <img v-bind:src=\"slide.isF == false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n          <span class=\"smallFont\">下拉刷新...</span>\n        </div>\n        <!-- 用户头信息 -->\n        <div class=\"userInfo background1\">\n          <div class=\"headImgBox\">\n            <div class = 'headImg'><img class=\"background3\" v-bind:src=\"user.headImg\"/></div>\n          </div>\n          <div class=\"mine-item userName textColor2\"><span class=\"middleFont\">{{user.userName}}</span></div>\n          <div class=\"mine-item userID textColor4\">\n            <i class=\"iconfont\">&#xe689;</i>\n            <span>ID:{{user.userID}}</span>\n          </div>\n          <ul class=\"gzsx smallFont\" v-bind:class=\"{active:isGuanZhu}\">\n            <li v-on:click=\"changeGuanzhu\">\n              <i v-if=\"!isGuanZhu\">{{stable.jia}}</i>\n              <span>{{stable.guanzhu}}</span>\n            </li>\n            <li>\n              <i class=\"iconfont\">&#xe63a;</i>\n              <span>{{stable.sixin}}</span>\n            </li>\n          </ul>\n          <div class=\"mine-item biaoqian textColor2\"><span>{{user.sign}}</span></div>\n\n          <div class=\"box borderBottom\">\n            <div class=\"mine-item qiehuan border5\">\n              <template v-for=\"item in stable.innerItem\">\n                <div class=\"inner-item\" v-bind:class=\"item.active?'qiehuan-active':''\" v-on:click=\"changeTab($index)\">\n                  <span class=\"smallFont\">{{item.name}}</span>\n                  <img data-name=\"one\" v-bind:src=\"stable.xialaImg\"/>\n                </div>\n              </template>\n\n            </div>\n          </div>\n        </div>\n        <!-- 左右切换条 -->\n        <template v-for=\"item in stable.innerItem\">\n          <!-- 左边 -->\n          <div v-if=\"(item.active && $index==0)\" class=\"qiehuan-box\">\n  <!-- 一条tableviewCell -->\n            <div class=\"item commonColor borderBottom\"  v-for=\"item in list\">\n              <div class=\"tuijian-box smallFont\">\n                <span class=\"tuijianren cellDeepColor\" v-if=\"item.tuijianzhe\">{{item.tuijianzhe}}</span>\n                <span class=\"tuijian textColor2\" v-if=\"item.tuijian\">{{item.tuijian}}</span>\n              </div>\n              <div class=\"title  cellDeepColor\">\n                <span class=\"middleFont\">{{item.title}}</span>\n              </div>\n              <div class=\"user-info\">\n                <div class=\"user-box\">\n                  <img class=\"user-icon\" v-bind:src=\"item.userIcon\"></img>\n                </div>\n                <!-- 头像 -->\n                <div class=\"head-box\">\n                  <img class=\"head-img\"\n                   v-link=\"{name:'userDongtai',params:{id:item.id}}\"                    v-bind:src=\"item.headimg\"></img>\n                  <span class=\"user-name textColor2 smallFont\">{{item.username}}</span>\n                </div>\n                <div>\n                  <img class=\"other\" v-bind:src=\"item.xiala\"></img>\n                </div>\n              </div>\n               <div v-link=\"{name:'userDongtai',params:{id:item.id}}\"  class=\"image-box\" v-if=\"item.image!=undefined\">\n                <img v-bind:src=\"item.image\"></img>\n              </div>\n              <div class=\"span-box\" v-if=\"item.desc\">\n                <span class=\"textColor3 smallFont\">{{item.desc}}</span>\n              </div>\n              <div class=\"bottom smallFont\">\n                <div class=\"bottom-item right\">\n                  <span class=\"time textColor2\">{{item.time}}</span>\n                </div>\n                <div class=\"bottom-item\">\n                  <div class=\"icon zhuanfa-box\">\n                    <span class=\"zhuanfa textColor4\">{{item.zhuanfaCount}}</span>\n                    <img v-bind:src=\"item.zhuanfa\"></img>\n                  </div>\n                  <div class=\"icon pinglun-box\">\n                    <span class=\"pinglun textColor4\">{{item.pinglunCount}}</span>\n                    <img v-bind:src=\"item.pinglun\"></img>\n                  </div>\n                  <div class=\"icon zan-box\">\n                    <span class=\"zan textColor4\">{{item.zanCount}}</span>\n                    <img v-bind:src=\"item.zan\"></img>\n                  </div>\n                </div>\n              </div>\n            </div>\n  <!-- 一条tableviewCell -->\n          </div>\n          <!-- 右边 -->\n          <div v-if=\"(item.active && $index==1)\" class=\"qiehuan-box\">\n            bbb\n          </div>\n        </template>\n\n        <div class=\"foot freshColor\" id=\"fresh-foot\" v-if=\"slide.isLoadShow\">\n          <img v-bind:src=\"slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'\"/>\n          <span class=\"smallFont\">上拉加载更多...</span>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n";

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
	//     <header id="header" class="Bottom">
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

	module.exports = "\n<div class=\"setting\">\n  <header id=\"header\" class=\"Bottom\">\n    <ul>\n      <li class=\"Active text\" v-on:click=\"backPrepage\"><span class=\"back iconfont\">&#xe604;</span></li>\n      <li class=\"headCenter middleFont\">\n        {{head.center}}\n      </li>\n    </ul>\n  </header>\n  <div id='body'>\n\n\n  </div>\n  <!--  -->\n  <vue-dialog v-if=\"dialogShow\"></vue-dialog>\n</div>\n";

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

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(1);
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _index = __webpack_require__(2);
	
		var _index2 = _interopRequireDefault(_index);
	
		var _index3 = __webpack_require__(10);
	
		var _index4 = _interopRequireDefault(_index3);
	
		var _index5 = __webpack_require__(17);
	
		var _index6 = _interopRequireDefault(_index5);
	
		var _index7 = __webpack_require__(23);
	
		var _index8 = _interopRequireDefault(_index7);
	
		var _index9 = __webpack_require__(32);
	
		var _index10 = _interopRequireDefault(_index9);
	
		var _index11 = __webpack_require__(38);
	
		var _index12 = _interopRequireDefault(_index11);
	
		var _index13 = __webpack_require__(44);
	
		var _index14 = _interopRequireDefault(_index13);
	
		var _index15 = __webpack_require__(70);
	
		var _index16 = _interopRequireDefault(_index15);
	
		var _index17 = __webpack_require__(76);
	
		var _index18 = _interopRequireDefault(_index17);
	
		var _index19 = __webpack_require__(82);
	
		var _index20 = _interopRequireDefault(_index19);
	
		var _index21 = __webpack_require__(90);
	
		var _index22 = _interopRequireDefault(_index21);
	
		var _index23 = __webpack_require__(96);
	
		var _index24 = _interopRequireDefault(_index23);
	
		var _index25 = __webpack_require__(102);
	
		var _index26 = _interopRequireDefault(_index25);
	
		var _index27 = __webpack_require__(108);
	
		var _index28 = _interopRequireDefault(_index27);
	
		var _index29 = __webpack_require__(114);
	
		var _index30 = _interopRequireDefault(_index29);
	
		var _index31 = __webpack_require__(120);
	
		var _index32 = _interopRequireDefault(_index31);
	
		var _index33 = __webpack_require__(126);
	
		var _index34 = _interopRequireDefault(_index33);
	
		var _index35 = __webpack_require__(137);
	
		var _index36 = _interopRequireDefault(_index35);
	
		var _index37 = __webpack_require__(143);
	
		var _index38 = _interopRequireDefault(_index37);
	
		var _index39 = __webpack_require__(148);
	
		var _index40 = _interopRequireDefault(_index39);
	
		var _index41 = __webpack_require__(152);
	
		var _index42 = _interopRequireDefault(_index41);
	
		var _index43 = __webpack_require__(159);
	
		var _index44 = _interopRequireDefault(_index43);
	
		var _index45 = __webpack_require__(174);
	
		var _index46 = _interopRequireDefault(_index45);
	
		var _index47 = __webpack_require__(180);
	
		var _index48 = _interopRequireDefault(_index47);
	
		var _index49 = __webpack_require__(185);
	
		var _index50 = _interopRequireDefault(_index49);
	
		var _index51 = __webpack_require__(193);
	
		var _index52 = _interopRequireDefault(_index51);
	
		var _index53 = __webpack_require__(205);
	
		var _index54 = _interopRequireDefault(_index53);
	
		var _index55 = __webpack_require__(208);
	
		var _index56 = _interopRequireDefault(_index55);
	
		var _index57 = __webpack_require__(214);
	
		var _index58 = _interopRequireDefault(_index57);
	
		var _index59 = __webpack_require__(224);
	
		var _index60 = _interopRequireDefault(_index59);
	
		var _index61 = __webpack_require__(230);
	
		var _index62 = _interopRequireDefault(_index61);
	
		var _index63 = __webpack_require__(236);
	
		var _index64 = _interopRequireDefault(_index63);
	
		__webpack_require__(242);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var install = function install(Vue) {
		  if (install.installed) return;
	
		  Vue.component(_index2.default.name, _index2.default);
		  Vue.component(_index4.default.name, _index4.default);
		  Vue.component(_index6.default.name, _index6.default);
		  Vue.component(_index8.default.name, _index8.default);
		  Vue.component(_index10.default.name, _index10.default);
		  Vue.component(_index12.default.name, _index12.default);
		  Vue.component(_index14.default.name, _index14.default);
		  Vue.component(_index16.default.name, _index16.default);
		  Vue.component(_index18.default.name, _index18.default);
		  Vue.component(_index20.default.name, _index20.default);
		  Vue.component(_index22.default.name, _index22.default);
		  Vue.component(_index24.default.name, _index24.default);
		  Vue.component(_index26.default.name, _index26.default);
		  Vue.component(_index28.default.name, _index28.default);
		  Vue.component(_index30.default.name, _index30.default);
		  Vue.component(_index32.default.name, _index32.default);
		  Vue.component(_index34.default.name, _index34.default);
		  Vue.component(_index36.default.name, _index36.default);
		  Vue.component(_index38.default.name, _index38.default);
		  Vue.component(_index40.default.name, _index40.default);
		  Vue.component(_index42.default.name, _index42.default);
		  Vue.component(_index44.default.name, _index44.default);
		  Vue.component(_index46.default.name, _index46.default);
		  Vue.component(_index58.default.name, _index58.default);
		  Vue.component(_index60.default.name, _index60.default);
		  Vue.component(_index62.default.name, _index62.default);
		  Vue.component(_index64.default.name, _index64.default);
		  Vue.use(_index54.default);
		  Vue.use(_index56.default, {
		    loading: __webpack_require__(245),
		    try: 3
		  });
	
		  Vue.$messagebox = Vue.prototype.$messagebox = _index52.default;
		  Vue.$toast = Vue.prototype.$toast = _index48.default;
		  Vue.$indicator = Vue.prototype.$indicator = _index50.default;
		};
	
		if (typeof window !== 'undefined' && window.Vue) {
		  install(window.Vue);
		};
	
		module.exports = {
		  version: '1.0.1',
		  install: install,
		  Header: _index2.default,
		  Button: _index4.default,
		  Cell: _index6.default,
		  Field: _index8.default,
		  Badge: _index10.default,
		  Switch: _index12.default,
		  Spinner: _index14.default,
		  TabItem: _index16.default,
		  TabContainerItem: _index18.default,
		  TabContainer: _index20.default,
		  Navbar: _index22.default,
		  Tabbar: _index24.default,
		  Search: _index26.default,
		  Checklist: _index28.default,
		  Radio: _index30.default,
		  Loadmore: _index32.default,
		  Actionsheet: _index34.default,
		  Popup: _index36.default,
		  Swipe: _index38.default,
		  SwipeItem: _index40.default,
		  Range: _index42.default,
		  Picker: _index44.default,
		  Progress: _index46.default,
		  Toast: _index48.default,
		  Indicator: _index50.default,
		  MessageBox: _index52.default,
		  InfiniteScroll: _index54.default,
		  Lazyload: _index56.default,
		  DatetimePicker: _index58.default,
		  IndexList: _index60.default,
		  IndexSection: _index62.default,
		  CellSwipe: _index64.default
		};
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(3);
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(4)
		__vue_script__ = __webpack_require__(8)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/header/src/header.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(9)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 5 */,
	/* 6 */,
	/* 7 */,
	/* 8 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-header',
	
		  props: {
		    fixed: Boolean,
		    title: String
		  }
		};
	
	/***/ },
	/* 9 */
	/***/ function(module, exports) {
	
		module.exports = "\n<header\n  class=\"mint-header\"\n  :class=\"{ 'is-fixed': fixed }\">\n  <div class=\"mint-header-button is-left\">\n    <slot name=\"left\"></slot>\n  </div>\n  <h1 class=\"mint-header-title\" v-text=\"title\"></h1>\n  <div class=\"mint-header-button is-right\">\n    <slot name=\"right\"></slot>\n  </div>\n</header>\n";
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(11);
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(12)
		__vue_script__ = __webpack_require__(14)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/button/src/button.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(16)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 12 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 13 */,
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		if (true) {
		  __webpack_require__(15);
		}
		exports.default = {
		  name: 'mt-button',
	
		  props: {
		    icon: String,
		    disabled: Boolean,
		    plain: Boolean,
		    type: {
		      type: String,
		      default: 'default',
		      validator: function validator(value) {
		        return ['default', 'danger', 'primary'].indexOf(value) > -1;
		      }
		    },
		    size: {
		      type: String,
		      default: 'normal',
		      validator: function validator(value) {
		        return ['small', 'normal', 'large'].indexOf(value) > -1;
		      }
		    }
		  }
		};
	
	/***/ },
	/* 15 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(45);
	
	/***/ },
	/* 16 */
	/***/ function(module, exports) {
	
		module.exports = "\n<button\n  class=\"mint-button\"\n  :class=\"['mint-button--' + type, 'mint-button--' + size, {\n      'is-disabled': disabled,\n      'is-plain': plain\n    }]\"\n  :disabled=\"disabled\">\n  <span class=\"mint-button-icon\" v-if=\"icon || _slotContents.icon\">\n    <slot name=\"icon\">\n      <i v-if=\"icon\" class=\"mintui\" :class=\"'mintui-' + icon\"></i>\n    </slot>\n  </span>\n  <label class=\"mint-button-text\"><slot></slot></label>\n</button>\n";
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(18);
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(19)
		__vue_script__ = __webpack_require__(21)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/cell/src/cell.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(22)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 20 */,
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		if (true) {
		  __webpack_require__(15);
		}
	
		exports.default = {
		  name: 'mt-cell',
	
		  props: {
		    icon: String,
		    title: String,
		    label: String,
		    isLink: Boolean,
		    value: {}
		  }
		};
	
	/***/ },
	/* 22 */
	/***/ function(module, exports) {
	
		module.exports = "\n<a class=\"mint-cell\">\n  <span class=\"mint-cell-mask\" v-if=\"isLink\"></span>\n  <div class=\"mint-cell-left\">\n    <slot name=\"left\"></slot>\n  </div>\n  <div class=\"mint-cell-wrapper\">\n    <div class=\"mint-cell-title\">\n      <slot name=\"icon\">\n        <i v-if=\"icon\" class=\"mintui\" :class=\"'mintui-' + icon\"></i>\n      </slot>\n      <slot name=\"title\">\n        <span class=\"mint-cell-text\" v-text=\"title\"></span>\n        <span v-if=\"label\" class=\"mint-cell-label\" v-text=\"label\"></span>\n      </slot>\n    </div>\n    <div class=\"mint-cell-value\" :class=\"{ 'is-link' : isLink }\">\n      <slot>\n        <span v-text=\"value\"></span>\n      </slot>\n    </div>\n  </div>\n  <div class=\"mint-cell-right\">\n    <slot name=\"right\"></slot>\n  </div>\n  <i v-if=\"isLink\" class=\"mint-cell-allow-right\"></i>\n</a>\n";
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(24);
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(25)
		__vue_script__ = __webpack_require__(27)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/field/src/field.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(31)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 26 */,
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _index = __webpack_require__(28);
	
		var _index2 = _interopRequireDefault(_index);
	
		var _vueClickoutside = __webpack_require__(29);
	
		var _vueClickoutside2 = _interopRequireDefault(_vueClickoutside);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (true) {
		  __webpack_require__(30);
		}
	
		exports.default = {
		  name: 'mt-field',
	
		  data: function data() {
		    return {
		      active: false
		    };
		  },
	
	
		  directives: { Clickoutside: _vueClickoutside2.default },
	
		  components: { XCell: _index2.default },
	
		  props: {
		    type: {
		      type: String,
		      default: 'text'
		    },
		    rows: String,
		    label: String,
		    placeholder: String,
		    readonly: Boolean,
		    disabled: Boolean,
		    disableClear: Boolean,
		    state: {
		      type: String,
		      default: 'default'
		    },
		    value: {},
		    attr: Object
		  },
	
		  methods: {
		    handleClear: function handleClear() {
		      if (this.disabled || this.readonly) return;
		      this.vulue = '';
		    }
		  },
	
		  watch: {
		    attr: {
		      immediate: true,
		      handler: function handler(attrs) {
		        var _this = this;
	
		        this.$nextTick(function () {
		          var target = [_this.$els.input, _this.$els.textarea];
		          target.forEach(function (el) {
		            if (!el || !attrs) return;
		            Object.keys(attrs).map(function (name) {
		              return el.setAttribute(name, attrs[name]);
		            });
		          });
		        });
		      }
		    }
		  }
		};
	
	/***/ },
	/* 28 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(47);
	
	/***/ },
	/* 29 */
	/***/ function(module, exports) {
	
		'use strict';
	
		/**
		 * v-clickoutside
		 * @desc 点击元素外面才会触发的事件
		 * @example
		 * ```vue
		 * <div v-element-clickoutside="show = false">
		 * ```
		 */
		var index = {
		  id: 'clickoutside',
	
		  bind: function bind() {
		    var _this = this;
	
		    this.handler = function (e) {
		      if (_this.vm && !_this.el.contains(e.target)) {
		        _this.vm.$eval(_this.expression);
		      }
		    };
		    document.addEventListener(this.arg || 'click', this.handler);
		  },
		  unbind: function unbind() {
		    document.removeEventListener(this.arg || 'click', this.handler);
		  },
		  install: function install(Vue) {
		    Vue.directive('clickoutside', {
		      bind: this.bind,
		      unbind: this.unbind
		    });
		  }
		};
	
		module.exports = index;
	
	/***/ },
	/* 30 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(48);
	
	/***/ },
	/* 31 */
	/***/ function(module, exports) {
	
		module.exports = "\n<x-cell\n  class=\"mint-field\"\n  :title=\"label\"\n  v-clickoutside=\"active = false\"\n  :class=\"[{\n    'is-textarea': type === 'textarea',\n    'is-nolabel': !label\n  }]\">\n  <textarea\n    v-el:textarea\n    class=\"mint-field-core\"\n    :placeholder=\"placeholder\"\n    v-if=\"type === 'textarea'\"\n    :rows=\"rows\"\n    :disabled=\"disabled\"\n    :readonly=\"readonly\"\n    v-model=\"value\">\n  </textarea>\n  <input\n    v-el:input\n    class=\"mint-field-core\"\n    :placeholder=\"placeholder\"\n    :number=\"type === 'number'\"\n    v-else\n    :type=\"type\"\n    @focus=\"active = true\"\n    :disabled=\"disabled\"\n    :readonly=\"readonly\"\n    v-model=\"value\">\n  <div\n    @click=\"handleClear\"\n    v-if=\"!disableClear\"\n    class=\"mint-field-clear\"\n    v-show=\"value && type !== 'textarea' && active\">\n    <i class=\"mintui mintui-field-error\"></i>\n  </div>\n  <span class=\"mint-field-state\" v-if=\"state\" :class=\"['is-' + state]\">\n    <i class=\"mintui\" :class=\"['mintui-field-' + state]\"></i>\n  </span>\n  <div class=\"mint-field-other\">\n    <slot></slot>\n  </div>\n</x-cell>\n";
	
	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(33);
	
	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(34)
		__vue_script__ = __webpack_require__(36)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/badge/src/badge.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(37)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 34 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 35 */,
	/* 36 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-badge',
	
		  props: {
		    color: String,
		    type: {
		      type: String,
		      default: 'primary'
		    },
		    size: {
		      type: String,
		      default: 'normal'
		    }
		  }
		};
	
	/***/ },
	/* 37 */
	/***/ function(module, exports) {
	
		module.exports = "\n<span\n  class=\"mint-badge\"\n  :style=\"{ 'background-color': color }\"\n  :class=\"['is-' + type, 'is-size-' + size]\">\n  <slot></slot>\n</span>\n";
	
	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(39);
	
	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(40)
		__vue_script__ = __webpack_require__(42)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/switch/src/switch.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(43)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 40 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 41 */,
	/* 42 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-switch',
	
		  props: {
		    value: Boolean
		  }
		};
	
	/***/ },
	/* 43 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-switch\" @click=\"value = !value\">\n  <input class=\"mint-switch-input\" type=\"checkbox\" v-model=\"value\">\n  <span class=\"mint-switch-core\"></span>\n  <div class=\"mint-switch-label\"><slot></slot></div>\n</div>\n";
	
	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _spinner = __webpack_require__(45);
	
		var _spinner2 = _interopRequireDefault(_spinner);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		_spinner2.default.install = function (Vue) {
		  Vue.component(_spinner2.default.name, _spinner2.default);
		};
	
		module.exports = _spinner2.default;
	
	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(46)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(69)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var SPINNERS = ['snake', 'double-bounce', 'triple-bounce', 'fading-circle'];
		var parseSpinner = function parseSpinner(index) {
		  if ({}.toString.call(index) === '[object Number]') {
		    if (SPINNERS.length <= index) {
		      console.warn('\'' + index + '\' spinner not found, use the default spinner.');
		      index = 0;
		    }
		    return SPINNERS[index];
		  }
	
		  if (SPINNERS.indexOf(index) === -1) {
		    console.warn('\'' + index + '\' spinner not found, use the default spinner.');
		    index = SPINNERS[0];
		  }
		  return index;
		};
	
		exports.default = {
		  name: 'mt-spinner',
	
		  computed: {
		    spinner: function spinner() {
		      return 'spinner-' + parseSpinner(this.type);
		    }
		  },
	
		  components: {
		    SpinnerSnake: __webpack_require__(47),
		    SpinnerDoubleBounce: __webpack_require__(54),
		    SpinnerTripleBounce: __webpack_require__(59),
		    SpinnerFadingCircle: __webpack_require__(64)
		  },
	
		  props: {
		    type: {
		      default: 0
		    },
		    size: {
		      type: Number,
		      default: 28
		    },
		    color: {
		      type: String,
		      default: '#ccc'
		    }
		  }
		};
	
	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(48)
		__vue_script__ = __webpack_require__(50)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/snake.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(53)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 48 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 49 */,
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(51);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'snake',
	
		  mixins: [_common2.default]
		};
	
	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(52)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/common.vue: named exports in *.vue files are ignored.")}
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 52 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  computed: {
		    spinnerColor: function spinnerColor() {
		      return this.color || this.$parent.color || '#ccc';
		    },
		    spinnerSize: function spinnerSize() {
		      return (this.size || this.$parent.size || 28) + 'px';
		    }
		  },
	
		  props: {
		    size: Number,
		    color: String
		  }
		};
	
	/***/ },
	/* 53 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-spinner-snake\" :style=\"{\n  'border-top-color': spinnerColor,\n  'border-left-color': spinnerColor,\n  'border-bottom-color': spinnerColor,\n  'height': spinnerSize,\n  'width': spinnerSize\n  }\">\n</div>\n";
	
	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(55)
		__vue_script__ = __webpack_require__(57)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/double-bounce.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(58)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 55 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 56 */,
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(51);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'double-bounce',
	
		  mixins: [_common2.default]
		};
	
	/***/ },
	/* 58 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-spinner-double-bounce\" :style=\"{\n    width: spinnerSize,\n    height: spinnerSize\n  }\">\n  <div class=\"mint-spinner-double-bounce-bounce1\" :style=\"{ backgroundColor: spinnerColor }\"></div>\n  <div class=\"mint-spinner-double-bounce-bounce2\" :style=\"{ backgroundColor: spinnerColor }\"></div>\n</div>\n";
	
	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(60)
		__vue_script__ = __webpack_require__(62)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/triple-bounce.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(63)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 60 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 61 */,
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(51);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'triple-bounce',
	
		  mixins: [_common2.default],
	
		  computed: {
		    spinnerSize: function spinnerSize() {
		      return (this.size || this.$parent.size || 28) / 3 + 'px';
		    },
		    bounceStyle: function bounceStyle() {
		      return {
		        width: this.spinnerSize,
		        height: this.spinnerSize,
		        backgroundColor: this.spinnerColor
		      };
		    }
		  }
		};
	
	/***/ },
	/* 63 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-spinner-triple-bounce\">\n  <div class=\"mint-spinner-triple-bounce-bounce1\" :style=\"bounceStyle\"></div>\n  <div class=\"mint-spinner-triple-bounce-bounce2\" :style=\"bounceStyle\"></div>\n  <div class=\"mint-spinner-triple-bounce-bounce3\" :style=\"bounceStyle\"></div>\n</div>\n";
	
	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(65)
		__vue_script__ = __webpack_require__(67)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/fading-circle.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(68)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 65 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 66 */,
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(51);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'fading-circle',
	
		  mixins: [_common2.default],
	
		  created: function created() {
		    this.styleNode = document.createElement('style');
		    var css = '.circle-color-' + this._uid + ' > div::before { background-color: ' + this.spinnerColor + '; }';
	
		    this.styleNode.type = 'text/css';
		    this.styleNode.rel = 'stylesheet';
		    this.styleNode.title = 'fading circle style';
		    document.getElementsByTagName('head')[0].appendChild(this.styleNode);
		    this.styleNode.appendChild(document.createTextNode(css));
		  },
		  destroyed: function destroyed() {
		    if (this.styleNode) {
		      this.styleNode.parentNode.removeChild(this.styleNode);
		    }
		  }
		};
	
	/***/ },
	/* 68 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div :class=\"['mint-spinner-fading-circle circle-color-' + _uid]\" :style=\"{\n    width: spinnerSize,\n    height: spinnerSize\n  }\">\n  <div v-for=\"n in 12\" :class=\"['is-circle' + (n + 1)]\" class=\"mint-spinner-fading-circle-circle\"></div>\n</div>\n";
	
	/***/ },
	/* 69 */
	/***/ function(module, exports) {
	
		module.exports = "\n<span><component :is=\"spinner\"></component></span>\n";
	
	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(71);
	
	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(72)
		__vue_script__ = __webpack_require__(74)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/tab-item/src/tab-item.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(75)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 72 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 73 */,
	/* 74 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-tab-item',
	
		  props: {
		    id: ''
		  }
		};
	
	/***/ },
	/* 75 */
	/***/ function(module, exports) {
	
		module.exports = "\n<a class=\"mint-tab-item\"\n  @click=\"$parent.selected = id\"\n  :class=\"{ 'is-selected': $parent.selected === id }\">\n  <div class=\"mint-tab-item-icon\"><slot name=\"icon\"></slot></div>\n  <div class=\"mint-tab-item-label\"><slot></slot></div>\n</a>\n";
	
	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(77);
	
	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(78)
		__vue_script__ = __webpack_require__(80)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/tab-container-item/src/tab-container-item.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(81)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 78 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 79 */,
	/* 80 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-tab-container-item',
	
		  props: ['id']
		};
	
	/***/ },
	/* 81 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div\n  v-show=\"$parent.swiping || id === $parent.active\"\n  class=\"mint-tab-container-item\">\n  <slot></slot>\n</div>\n";
	
	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(83);
	
	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(84)
		__vue_script__ = __webpack_require__(86)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/tab-container/src/tab-container.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(89)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 84 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 85 */,
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _event = __webpack_require__(87);
	
		var _arrayFindIndex = __webpack_require__(88);
	
		var _arrayFindIndex2 = _interopRequireDefault(_arrayFindIndex);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'mt-tab-container',
	
		  props: {
		    active: {},
		    swipeable: Boolean
		  },
	
		  data: function data() {
		    return {
		      start: { x: 0, y: 0 },
		      swiping: false,
		      swipeLeave: false,
		      activeItems: [],
		      pageWidth: 0
		    };
		  },
	
	
		  watch: {
		    active: function active(val, oldValue) {
		      if (!this.swipeable) return;
		      var lastIndex = (0, _arrayFindIndex2.default)(this.$children, function (item) {
		        return item.id === oldValue;
		      });
		      this.swipeLeaveTransition(lastIndex);
		    }
		  },
	
		  ready: function ready() {
		    if (!this.swipeable) return;
	
		    this.wrap = this.$els.wrap;
		    this.pageWidth = this.wrap.clientWidth;
		    this.limitWidth = this.pageWidth / 4;
		  },
		  created: function created() {
		    if (this.swipeable) return;
		    this.$options._linkerCachable = false;
		    this.$options.template = '<div class="mint-tab-container"><slot></slot></div>';
		  },
	
	
		  methods: {
		    swipeLeaveTransition: function swipeLeaveTransition() {
		      var _this = this;
	
		      var lastIndex = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
		      if (typeof this.index !== 'number') {
		        this.index = (0, _arrayFindIndex2.default)(this.$children, function (item) {
		          return item.id === _this.active;
		        });
		        this.swipeMove(-lastIndex * this.pageWidth);
		      }
	
		      setTimeout(function () {
		        _this.swipeLeave = true;
		        _this.swipeMove(-_this.index * _this.pageWidth);
	
		        (0, _event.once)(_this.wrap, 'webkitTransitionEnd', function (_) {
		          _this.wrap.style.webkitTransform = '';
		          _this.swipeLeave = false;
		          _this.swiping = false;
		          _this.index = null;
		        });
		      }, 0);
		    },
		    swipeMove: function swipeMove(offset) {
		      this.wrap.style.webkitTransform = 'translate3d(' + offset + 'px, 0, 0)';
		      this.swiping = true;
		    },
		    startDrag: function startDrag(evt) {
		      evt = evt.changedTouches ? evt.changedTouches[0] : evt;
		      this.dragging = true;
		      this.start.x = evt.pageX;
		      this.start.y = evt.pageY;
		    },
		    onDrag: function onDrag(evt) {
		      var _this2 = this;
	
		      if (!this.dragging) return;
		      var swiping = void 0;
		      var e = evt.changedTouches ? evt.changedTouches[0] : evt;
		      var offsetTop = e.pageY - this.start.y;
		      var offsetLeft = e.pageX - this.start.x;
		      var y = Math.abs(offsetTop);
		      var x = Math.abs(offsetLeft);
	
		      swiping = !(x < 5 || x >= 5 && y >= x * 1.73);
		      if (!swiping) return;
		      evt.preventDefault();
	
		      var len = this.$children.length - 1;
		      var index = (0, _arrayFindIndex2.default)(this.$children, function (item) {
		        return item.id === _this2.active;
		      });
		      var currentPageOffset = index * this.pageWidth;
		      var offset = offsetLeft - currentPageOffset;
		      var absOffset = Math.abs(offset);
	
		      if (absOffset > len * this.pageWidth || offset > 0 && offset < this.pageWidth) {
		        this.swiping = false;
		        return;
		      }
	
		      this.offsetLeft = offsetLeft;
		      this.index = index;
		      this.swipeMove(offset);
		    },
		    endDrag: function endDrag() {
		      if (!this.swiping) return;
	
		      var direction = this.offsetLeft > 0 ? -1 : 1;
		      var isChange = Math.abs(this.offsetLeft) > this.limitWidth;
	
		      if (isChange) {
		        this.index += direction;
		        var child = this.$children[this.index];
		        if (child) {
		          this.active = child.id;
		          return;
		        }
		      }
	
		      this.swipeLeaveTransition();
		    }
		  }
		};
	
	/***/ },
	/* 87 */
	/***/ function(module, exports) {
	
		var bindEvent = (function() {
		  if(document.addEventListener) {
		    return function(element, event, handler) {
		      if (element && event && handler) {
		        element.addEventListener(event, handler, false);
		      }
		    };
		  } else {
		    return function(element, event, handler) {
		      if (element && event && handler) {
		        element.attachEvent('on' + event, handler);
		      }
		    };
		  }
		})();
	
		var unbindEvent = (function() {
		  if(document.removeEventListener) {
		    return function(element, event, handler) {
		      if (element && event) {
		        element.removeEventListener(event, handler, false);
		      }
		    };
		  } else {
		    return function(element, event, handler) {
		      if (element && event) {
		        element.detachEvent('on' + event, handler);
		      }
		    };
		  }
		})();
	
		var bindOnce = function(el, event, fn) {
		  var listener = function() {
		    if (fn) {
		      fn.apply(this, arguments);
		    }
		    unbindEvent(el, event, listener);
		  };
		  bindEvent(el, event, listener);
		};
	
		module.exports = {
		  on: bindEvent,
		  off: unbindEvent,
		  once: bindOnce
		};
	
	/***/ },
	/* 88 */
	/***/ function(module, exports) {
	
		'use strict';
		module.exports = function (arr, predicate, ctx) {
			if (typeof Array.prototype.findIndex === 'function') {
				return arr.findIndex(predicate, ctx);
			}
	
			if (typeof predicate !== 'function') {
				throw new TypeError('predicate must be a function');
			}
	
			var list = Object(arr);
			var len = list.length;
	
			if (len === 0) {
				return -1;
			}
	
			for (var i = 0; i < len; i++) {
				if (predicate.call(ctx, list[i], i, list)) {
					return i;
				}
			}
	
			return -1;
		};
	
	
	/***/ },
	/* 89 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div\n  @touchstart=\"startDrag\"\n  @touchmove=\"onDrag\"\n  @touchend=\"endDrag\"\n  class=\"mint-tab-container\">\n  <div\n    v-el:wrap\n    :class=\"{ 'swipe-transition': swipeLeave }\"\n    class=\"mint-tab-container-wrap\">\n    <slot></slot>\n  </div>\n</div>\n";
	
	/***/ },
	/* 90 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(91);
	
	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(92)
		__vue_script__ = __webpack_require__(94)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/navbar/src/navbar.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(95)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 92 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 93 */,
	/* 94 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-navbar',
	
		  props: {
		    fixed: Boolean,
		    selected: {}
		  }
		};
	
	/***/ },
	/* 95 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-navbar\" :class=\"{ 'is-fixed': fixed }\">\n  <slot></slot>\n</div>\n";
	
	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(97);
	
	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(98)
		__vue_script__ = __webpack_require__(100)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/tabbar/src/tabbar.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(101)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 98 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 99 */,
	/* 100 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-tabbar',
	
		  props: {
		    fixed: Boolean,
		    selected: {}
		  }
		};
	
	/***/ },
	/* 101 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-tabbar\" :class=\"{\n    'is-fixed': fixed\n  }\">\n  <slot></slot>\n</div>\n";
	
	/***/ },
	/* 102 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(103);
	
	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(104)
		__vue_script__ = __webpack_require__(106)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/search/src/search.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(107)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 104 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 105 */,
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _index = __webpack_require__(28);
	
		var _index2 = _interopRequireDefault(_index);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (true) {
		  __webpack_require__(30);
		}
	
		exports.default = {
		  name: 'mt-search',
	
		  data: function data() {
		    return {
		      visible: false
		    };
		  },
	
	
		  components: {
		    XCell: _index2.default
		  },
	
		  props: {
		    value: String,
		    cancelText: {
		      default: '取消'
		    },
		    placeholder: {
		      default: '搜索'
		    },
		    result: Array
		  }
		};
	
	/***/ },
	/* 107 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-search\">\n  <div class=\"mint-searchbar\">\n    <div class=\"mint-searchbar-inner\">\n      <i class=\"mintui mintui-search\" v-show=\"visible\"></i>\n      <input\n      v-el:input\n      @click=\"visible = true\"\n      type=\"search\"\n      v-model=\"value\"\n      :placeholder=\"visible ? placeholder : ''\"\n      class=\"mint-searchbar-core\">\n    </div>\n    <a\n      class=\"mint-searchbar-cancel\"\n      @click=\"visible = false, value = ''\"\n      v-show=\"visible\"\n      v-text=\"cancelText\">\n    </a>\n    <label\n      @click=\"visible = true, $els.input.focus()\"\n      class=\"mint-searchbar-placeholder\"\n      v-show=\"!visible\">\n      <i class=\"mintui mintui-search\"></i>\n      <span class=\"mint-searchbar-text\" v-text=\"placeholder\"></span>\n    </label>\n  </div>\n  <div class=\"mint-search-list\" v-show=\"value\">\n    <div class=\"mint-search-list-warp\">\n      <slot>\n        <x-cell v-for=\"item in result\" track-by=\"$index\" :title=\"item\"></x-cell>\n      </slot>\n    </div>\n  </div>\n</div>\n";
	
	/***/ },
	/* 108 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(109);
	
	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(110)
		__vue_script__ = __webpack_require__(112)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/checklist/src/checklist.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(113)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 110 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 111 */,
	/* 112 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _index = __webpack_require__(28);
	
		var _index2 = _interopRequireDefault(_index);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (true) {
		  __webpack_require__(30);
		}
	
		exports.default = {
		  name: 'mt-checklist',
	
		  props: {
		    max: Number,
		    title: String,
		    align: String,
		    options: {
		      type: Array,
		      required: true
		    },
		    value: Array
		  },
	
		  components: {
		    XCell: _index2.default
		  },
	
		  computed: {
		    limit: function limit() {
		      return this.max < this.value.length;
		    }
		  },
	
		  watch: {
		    value: function value() {
		      if (this.limit) {
		        this.value.pop();
		      }
		    }
		  }
		};
	
	/***/ },
	/* 113 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-checklist\" :class=\"{ 'is-limit': max <= value.length }\">\n  <label class=\"mint-checklist-title\" v-text=\"title\"></label>\n  <x-cell v-for=\"option in options\">\n    <label class=\"mint-checklist-label\" slot=\"title\">\n      <span\n        :class=\"{'is-right': align === 'right'}\"\n        class=\"mint-checkbox\">\n        <input\n          class=\"mint-checkbox-input\"\n          type=\"checkbox\"\n          v-model=\"value\"\n          :disabled=\"option.disabled\"\n          :value=\"option.value || option\">\n          <span class=\"mint-checkbox-core\"></span>\n      </span>\n      <span class=\"mint-checkbox-label\" v-text=\"option.label || option\"></span>\n    </label>\n  </x-cell>\n</div>\n";
	
	/***/ },
	/* 114 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(115);
	
	/***/ },
	/* 115 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(116)
		__vue_script__ = __webpack_require__(118)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/radio/src/radio.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(119)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 116 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 117 */,
	/* 118 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _index = __webpack_require__(28);
	
		var _index2 = _interopRequireDefault(_index);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (true) {
		  __webpack_require__(30);
		}
		exports.default = {
		  name: 'mt-radio',
	
		  props: {
		    title: String,
		    align: String,
		    options: {
		      type: Array,
		      required: true
		    },
		    value: String
		  },
	
		  components: {
		    XCell: _index2.default
		  }
		};
	
	/***/ },
	/* 119 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-radiolist\">\n  <label class=\"mint-radiolist-title\" v-text=\"title\"></label>\n  <x-cell v-for=\"option in options\">\n    <label class=\"mint-radiolist-label\" slot=\"title\">\n      <span\n        :class=\"{'is-right': align === 'right'}\"\n        class=\"mint-radio\">\n        <input\n          class=\"mint-radio-input\"\n          type=\"radio\"\n          v-model=\"value\"\n          :disabled=\"option.disabled\"\n          :value=\"option.value || option\">\n          <span class=\"mint-radio-core\"></span>\n      </span>\n      <span class=\"mint-radio-label\" v-text=\"option.label || option\"></span>\n    </label>\n  </x-cell>\n</div>\n";
	
	/***/ },
	/* 120 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(121);
	
	/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(122)
		__vue_script__ = __webpack_require__(124)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/loadmore/src/loadmore.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(125)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 122 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 123 */,
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _fadingCircle = __webpack_require__(64);
	
		var _fadingCircle2 = _interopRequireDefault(_fadingCircle);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'mt-loadmore',
		  components: {
		    'spinner': _fadingCircle2.default
		  },
	
		  props: {
		    maxDistance: {
		      type: Number,
		      default: 150
		    },
		    autoFill: {
		      type: Boolean,
		      default: true
		    },
		    topPullText: {
		      type: String,
		      default: '下拉刷新'
		    },
		    topDropText: {
		      type: String,
		      default: '释放更新'
		    },
		    topLoadingText: {
		      type: String,
		      default: '加载中...'
		    },
		    topDistance: {
		      type: Number,
		      default: 70
		    },
		    topMethod: {
		      type: Function
		    },
		    topStatus: {
		      type: String,
		      default: ''
		    },
		    bottomPullText: {
		      type: String,
		      default: '上拉刷新'
		    },
		    bottomDropText: {
		      type: String,
		      default: '释放更新'
		    },
		    bottomLoadingText: {
		      type: String,
		      default: '加载中...'
		    },
		    bottomDistance: {
		      type: Number,
		      default: 70
		    },
		    bottomMethod: {
		      type: Function
		    },
		    bottomStatus: {
		      type: String,
		      default: ''
		    },
		    bottomAllLoaded: {
		      type: Boolean,
		      default: false
		    }
		  },
	
		  data: function data() {
		    return {
		      uuid: null,
		      translate: 0,
		      scrollEventTarget: null,
		      containerFilled: false,
		      topText: '',
		      topDropped: false,
		      bottomText: '',
		      bottomDropped: false,
		      bottomReached: false,
		      direction: '',
		      startY: 0,
		      startScrollTop: 0,
		      currentY: 0
		    };
		  },
	
	
		  watch: {
		    topStatus: function topStatus(val) {
		      switch (val) {
		        case 'pull':
		          this.topText = this.topPullText;
		          break;
		        case 'drop':
		          this.topText = this.topDropText;
		          break;
		        case 'loading':
		          this.topText = this.topLoadingText;
		          break;
		      }
		    },
		    bottomStatus: function bottomStatus(val) {
		      switch (val) {
		        case 'pull':
		          this.bottomText = this.bottomPullText;
		          break;
		        case 'drop':
		          this.bottomText = this.bottomDropText;
		          break;
		        case 'loading':
		          this.bottomText = this.bottomLoadingText;
		          break;
		      }
		    }
		  },
	
		  events: {
		    onTopLoaded: function onTopLoaded(id) {
		      var _this = this;
	
		      if (id === this.uuid) {
		        this.translate = 0;
		        setTimeout(function () {
		          _this.topStatus = 'pull';
		        }, 200);
		      }
		    },
		    onBottomLoaded: function onBottomLoaded(id) {
		      var _this2 = this;
	
		      this.bottomStatus = 'pull';
		      this.bottomDropped = false;
		      if (id === this.uuid) {
		        this.$nextTick(function () {
		          if (_this2.scrollEventTarget === window) {
		            document.body.scrollTop += 50;
		          } else {
		            _this2.scrollEventTarget.scrollTop += 50;
		          }
		          _this2.translate = 0;
		        });
		      }
		      if (!this.bottomAllLoaded && !this.containerFilled) {
		        this.fillContainer();
		      }
		    }
		  },
	
		  methods: {
		    getScrollEventTarget: function getScrollEventTarget(element) {
		      var currentNode = element;
		      while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
		        var overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
		        if (overflowY === 'scroll' || overflowY === 'auto') {
		          return currentNode;
		        }
		        currentNode = currentNode.parentNode;
		      }
		      return window;
		    },
		    getScrollTop: function getScrollTop(element) {
		      if (element === window) {
		        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
		      } else {
		        return element.scrollTop;
		      }
		    },
		    bindTouchEvents: function bindTouchEvents() {
		      this.$el.addEventListener('touchstart', this.handleTouchStart);
		      this.$el.addEventListener('touchmove', this.handleTouchMove);
		      this.$el.addEventListener('touchend', this.handleTouchEnd);
		    },
		    init: function init() {
		      this.topStatus = 'pull';
		      this.bottomStatus = 'pull';
		      this.topText = this.topPullText;
		      this.scrollEventTarget = this.getScrollEventTarget(this.$el);
		      if (typeof this.bottomMethod === 'function') {
		        this.fillContainer();
		        this.bindTouchEvents();
		      }
		      if (typeof this.topMethod === 'function') {
		        this.bindTouchEvents();
		      }
		    },
		    fillContainer: function fillContainer() {
		      var _this3 = this;
	
		      if (this.autoFill) {
		        this.$nextTick(function () {
		          if (_this3.scrollEventTarget === window) {
		            _this3.containerFilled = _this3.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom;
		          } else {
		            _this3.containerFilled = _this3.$el.getBoundingClientRect().bottom >= _this3.scrollEventTarget.getBoundingClientRect().bottom;
		          }
		          if (!_this3.containerFilled) {
		            _this3.bottomStatus = 'loading';
		            _this3.bottomMethod(_this3.uuid);
		          }
		        });
		      }
		    },
		    checkBottomReached: function checkBottomReached() {
		      if (this.scrollEventTarget === window) {
		        return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
		      } else {
		        return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom + 1;
		      }
		    },
		    handleTouchStart: function handleTouchStart(event) {
		      this.startY = event.touches[0].clientY;
		      this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
		      this.bottomReached = false;
		      if (this.topStatus !== 'loading') {
		        this.topStatus = 'pull';
		        this.topDropped = false;
		      }
		      if (this.bottomStatus !== 'loading') {
		        this.bottomStatus = 'pull';
		        this.bottomDropped = false;
		      }
		    },
		    handleTouchMove: function handleTouchMove(event) {
		      if (this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom) {
		        return;
		      }
		      this.currentY = event.touches[0].clientY;
		      var distance = this.currentY - this.startY;
		      this.direction = distance > 0 ? 'down' : 'up';
		      if (typeof this.topMethod === 'function' && this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
		        event.preventDefault();
		        event.stopPropagation();
		        this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate;
		        if (this.translate < 0) {
		          this.translate = 0;
		        }
		        this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
		      }
	
		      if (this.direction === 'up') {
		        this.bottomReached = this.bottomReached || this.checkBottomReached();
		      }
		      if (typeof this.bottomMethod === 'function' && this.direction === 'up' && this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
		        event.preventDefault();
		        event.stopPropagation();
		        this.translate = Math.abs(distance) <= this.maxDistance ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate;
		        if (this.translate > 0) {
		          this.translate = 0;
		        }
		        this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
		      }
		    },
		    handleTouchEnd: function handleTouchEnd() {
		      if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
		        this.topDropped = true;
		        if (this.topStatus === 'drop') {
		          this.translate = '50';
		          this.topStatus = 'loading';
		          this.topMethod(this.uuid);
		        } else {
		          this.translate = '0';
		          this.topStatus = 'pull';
		        }
		      }
		      if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
		        this.bottomDropped = true;
		        this.bottomReached = false;
		        if (this.bottomStatus === 'drop') {
		          this.translate = '-50';
		          this.bottomStatus = 'loading';
		          this.bottomMethod(this.uuid);
		        } else {
		          this.translate = '0';
		          this.bottomStatus = 'pull';
		        }
		      }
		      this.direction = '';
		    }
		  },
	
		  ready: function ready() {
		    this.uuid = Math.random().toString(36).substring(3, 8);
		    this.init();
		  }
		};
	
	/***/ },
	/* 125 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-loadmore\">\n  <div class=\"mint-loadmore-content\" :class=\"{ 'is-dropped': topDropped || bottomDropped}\" :style=\"{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }\" v-el:loadmore-content>\n    <slot name=\"top\">\n      <div class=\"mint-loadmore-top\" v-if=\"topMethod\">\n        <spinner v-if=\"topStatus === 'loading'\" class=\"mint-loadmore-spinner\" :size=\"20\" type=\"fading-circle\"></spinner>\n        <span class=\"mint-loadmore-text\">{{ topText }}</span>\n      </div>\n    </slot>\n    <slot></slot>\n    <slot name=\"bottom\">\n      <div class=\"mint-loadmore-bottom\" v-if=\"bottomMethod\">\n        <spinner v-if=\"bottomStatus === 'loading'\" class=\"mint-loadmore-spinner\" :size=\"20\" type=\"fading-circle\"></spinner>\n        <span class=\"mint-loadmore-text\">{{ bottomText }}</span>\n      </div>\n    </slot>\n  </div>\n</div>\n";
	
	/***/ },
	/* 126 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(127);
	
	/***/ },
	/* 127 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(128)
		__vue_script__ = __webpack_require__(130)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/actionsheet/src/actionsheet.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(136)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 128 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 129 */,
	/* 130 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _vuePopup = __webpack_require__(131);
	
		var _vuePopup2 = _interopRequireDefault(_vuePopup);
	
		__webpack_require__(133);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'mt-actionsheet',
	
		  mixins: [_vuePopup2.default],
	
		  props: {
		    modal: {
		      default: true
		    },
	
		    closeOnClickModal: {
		      default: true
		    },
	
		    lockScroll: {
		      default: false
		    },
	
		    cancelText: {
		      type: String,
		      default: '取消'
		    },
	
		    actions: {
		      type: Array,
		      default: function _default() {
		        return [];
		      }
		    }
		  },
	
		  methods: {
		    itemClick: function itemClick(item) {
		      if (item.method && typeof item.method === 'function') {
		        item.method();
		      }
		      this.visible = false;
		    }
		  },
	
		  ready: function ready() {
		    if (this.visible) {
		      this.rendered = true;
		      this.open();
		    }
		  }
		};
	
	/***/ },
	/* 131 */
	/***/ function(module, exports, __webpack_require__) {
	
		!function(e,t){ true?module.exports=t(__webpack_require__(132)):"function"==typeof define&&define.amd?define("VuePopup",["vue"],t):"object"==typeof exports?exports.VuePopup=t(require("vue")):e.VuePopup=t(e.vue)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,t,o){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/lib/",t(t.s=5)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),l=n(i),s=o(2),r=o(1),d=n(r);o(3);var a=1,u=[],c=function(e){if(u.indexOf(e)===-1){var t=function(e){var t=e.__vue__;if(!t){var o=e.previousSibling;o.__vue__&&(t=o.__vue__)}return t};l["default"].transition(e,{afterEnter:function(e){var o=t(e);o&&o.doAfterOpen&&o.doAfterOpen()},afterLeave:function(e){var o=t(e);o&&o.doAfterClose&&o.doAfterClose()}})}},f=function p(e){return 3===e.nodeType&&(e=e.nextElementSibling||e.nextSibling,p(e)),e};t["default"]={props:{visible:{type:Boolean,twoWay:!0,"default":!1},transition:{type:String,"default":""},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,"default":!1},lockScroll:{type:Boolean,"default":!0},modalClass:{},closeOnPressEscape:{type:Boolean,"default":!1},closeOnClickModal:{type:Boolean,"default":!1}},created:function(){this.transition&&c(this.transition)},compiled:function(){this._popupId="popup-"+a++,d["default"].register(this._popupId,this)},beforeDestroy:function(){d["default"].deregister(this._popupId),d["default"].closeModal(this._popupId)},data:function(){return{bodyOverflow:null,rendered:!1}},watch:{visible:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,l["default"].nextTick(function(){t.open()}))}else this.close()}},methods:{open:function(e){var t=this;if(!this.rendered)return this.rendered=!0,void(this.visible=!0);var o=(0,s.merge)({},this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var n=Number(o.openDelay);n>0?this._openTimer=setTimeout(function(){t._openTimer=null,t.doOpen(o)},n):this.doOpen(o)},doOpen:function(e){if(!this.willOpen||this.willOpen()){this._opening=!0,this.visible=!0;var t=f(this.$el),o=e.modal,n=e.zIndex;n&&(d["default"].zIndex=n),o&&(this._closing&&(d["default"].closeModal(this._popupId),this._closing=!1),d["default"].openModal(this._popupId,d["default"].nextZIndex(),t,e.modalClass),e.lockScroll&&(this.bodyOverflow||(this.bodyOverflow=document.body.style.overflow),document.body.style.overflow="hidden")),"static"===getComputedStyle(t).position&&(t.style.position="absolute"),o?t.style.zIndex=d["default"].nextZIndex():n&&(t.style.zIndex=n),this.onOpen&&this.onOpen(),this.transition||this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout(function(){e._closeTimer=null,e.doClose()},t):this.doClose()}},doClose:function(){this.visible=!1,this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&this.modal&&"hidden"!==this.bodyOverflow&&(document.body.style.overflow=this.bodyOverflow),this.transition||this.doAfterClose()},doAfterClose:function(){d["default"].closeModal(this._popupId),this._closing=!1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=l.modalDom;return e||(e=document.createElement("div"),l.modalDom=e,e.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()})),e},n=function(){l.doOnModalClick&&l.doOnModalClick()},i={},l={zIndex:1e3,getInstance:function(e){return i[e]},register:function(e,t){e&&t&&(i[e]=t)},deregister:function(e){e&&(i[e]=null,delete i[e])},nextZIndex:function(){return l.zIndex++},modalStack:[],doOnModalClick:function(){var e=l.modalStack[l.modalStack.length-1];if(e){var t=l.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,i,l){if(e&&void 0!==t){for(var s=this.modalStack,r=0,d=s.length;r<d;r++){var a=s[r];if(a.id===e)return}var u=o();if(setTimeout(function(){u.addEventListener("click",n)},300),u.classList.add("v-modal"),u.classList.add("v-modal-enter"),l){var c=l.trim().split(/\s+/);c.forEach(function(e){return u.classList.add(e)})}setTimeout(function(){u.classList.remove("v-modal-enter")},200),i&&i.parentNode&&11!==i.parentNode.nodeType?i.parentNode.appendChild(u):document.body.appendChild(u),t&&(u.style.zIndex=t),u.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:l})}},closeModal:function(e){var t=this.modalStack,i=o();if(t.length>0){var l=t[t.length-1];if(l.id===e){if(l.modalClass){var s=l.modalClass.trim().split(/\s+/);s.forEach(function(e){return i.classList.remove(e)})}t.pop(),t.length>0&&(i.style.zIndex=t[t.length-1].zIndex)}else for(var r=t.length-1;r>=0;r--)if(t[r].id===e){t.splice(r,1);break}}0===t.length&&(i.classList.add("v-modal-leave"),setTimeout(function(){0===t.length&&(i.parentNode&&i.parentNode.removeChild(i),i.style.display="none"),i.removeEventListener("click",n),i.classList.remove("v-modal-leave")},200))}};window.addEventListener("keydown",function(e){if(27===e.keyCode&&l.modalStack.length>0){var t=l.modalStack[l.modalStack.length-1];if(!t)return;var o=l.getInstance(t.id);o.closeOnPressEscape&&o.close()}}),t["default"]=l},function(e,t){"use strict";function o(e){for(var t=1,o=arguments.length;t<o;t++){var n=arguments[t];for(var i in n)if(n.hasOwnProperty(i)){var l=n[i];void 0!==l&&(e[i]=l)}}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.merge=o},function(e,t){},function(t,o){t.exports=e},function(e,t,o){e.exports=o(0)}])});
		//# sourceMappingURL=index.js.map
	
	/***/ },
	/* 132 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(50);
	
	/***/ },
	/* 133 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 134 */,
	/* 135 */,
	/* 136 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div v-show=\"visible\" class=\"mint-actionsheet\" transition=\"actionsheet-float\">\n  <ul class=\"mint-actionsheet-list\" :style=\"{ 'margin-bottom': cancelText ? '5px' : '0' }\">\n    <li v-for=\"item in actions\" class=\"mint-actionsheet-listitem\" @click=\"itemClick(item)\">{{ item.name }}</li>\n  </ul>\n  <a class=\"mint-actionsheet-button\" @click=\"visible = false\" v-if=\"cancelText\">{{ cancelText }}</a>\n</div>\n";
	
	/***/ },
	/* 137 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(138);
	
	/***/ },
	/* 138 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(139)
		__vue_script__ = __webpack_require__(141)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/popup/src/popup.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(142)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 139 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 140 */,
	/* 141 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _vuePopup = __webpack_require__(131);
	
		var _vuePopup2 = _interopRequireDefault(_vuePopup);
	
		__webpack_require__(133);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'mt-popup',
	
		  mixins: [_vuePopup2.default],
	
		  props: {
		    modal: {
		      default: true
		    },
	
		    closeOnClickModal: {
		      default: true
		    },
	
		    lockScroll: {
		      default: false
		    },
	
		    popupTransition: {
		      type: String,
		      default: 'popup-slide'
		    },
	
		    position: {
		      type: String,
		      default: ''
		    }
		  },
	
		  compiled: function compiled() {
		    if (this.popupTransition !== 'popup-fade') {
		      this.popupTransition = 'popup-slide-' + this.position;
		    }
		  },
		  ready: function ready() {
		    if (this.visible) {
		      this.rendered = true;
		      this.open();
		    }
		  }
		};
	
	/***/ },
	/* 142 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div v-show=\"visible\" class=\"mint-popup\" :class=\"[position ? 'mint-popup-' + position : '']\" :transition=\"popupTransition\">\n  <slot></slot>\n</div>\n";
	
	/***/ },
	/* 143 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(144);
	
	/***/ },
	/* 144 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _vueSwipe = __webpack_require__(145);
	
		__webpack_require__(146);
	
		_vueSwipe.Swipe.name = 'mt-swipe';
		module.exports = _vueSwipe.Swipe;
	
	/***/ },
	/* 145 */
	/***/ function(module, exports, __webpack_require__) {
	
		!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSwipe=e():t.VueSwipe=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return t[i].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeItem=e.Swipe=void 0;var s=n(12),r=i(s),a=n(11),o=i(a);e.Swipe=r["default"],e.SwipeItem=o["default"]},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"mt-swipe-item",ready:function(){this.$dispatch("swipeItemCreated",this)},detached:function(){this.$dispatch("swipeItemDestroyed",this)},destroyed:function(){this.$dispatch("swipeItemDestroyed",this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(6);e["default"]={name:"mt-swipe",created:function(){this.dragState={}},data:function(){return{ready:!1,dragging:!1,userScrolling:!1,animating:!1,index:0,pages:[],timer:null,reInitTimer:null,noDrag:!1}},props:{speed:{type:Number,"default":300},auto:{type:Number,"default":3e3},continuous:{type:Boolean,"default":!0},showIndicators:{type:Boolean,"default":!0},noDragWhenSingle:{type:Boolean,"default":!0},prevent:{type:Boolean,"default":!1}},events:{swipeItemCreated:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))},swipeItemDestroyed:function(){var t=this;this.ready&&(clearTimeout(this.reInitTimer),this.reInitTimer=setTimeout(function(){t.reInitPages()},100))}},methods:{translate:function(t,e,n,s){var r=this,a=arguments;if(n){this.animating=!0,t.style.webkitTransition="-webkit-transform "+n+"ms ease-in-out",setTimeout(function(){return t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},50);var o=!1,l=function(){o||(o=!0,r.animating=!1,t.style.webkitTransition="",t.style.webkitTransform="",s&&s.apply(r,a))};(0,i.once)(t,"webkitTransitionEnd",l),setTimeout(l,n+100)}else t.style.webkitTransition="",t.style.webkitTransform="translate3d("+e+"px, 0, 0)"},reInitPages:function(){var t=this.$children;this.noDrag=1===t.length&&this.noDragWhenSingle;var e=[];this.index=0,t.forEach(function(t,n){e.push(t.$el),(0,i.removeClass)(t.$el,"active"),0===n&&(0,i.addClass)(t.$el,"active")}),this.pages=e},doAnimate:function(t,e){var n=this;if(0!==this.$children.length&&(e||!(this.$children.length<2))){var s,r,a,o,l,u=this.speed||300,c=this.index,d=this.pages,f=d.length;e?(s=e.prevPage,a=e.currentPage,r=e.nextPage,o=e.pageWidth,l=e.offsetLeft):(o=this.$el.clientWidth,a=d[c],s=d[c-1],r=d[c+1],this.continuous&&d.length>1&&(s||(s=d[d.length-1]),r||(r=d[0])),s&&(s.style.display="block",this.translate(s,-o)),r&&(r.style.display="block",this.translate(r,o)));var p,h=this.$children[c].$el;"prev"===t?(c>0&&(p=c-1),this.continuous&&0===c&&(p=f-1)):"next"===t&&(f-1>c&&(p=c+1),this.continuous&&c===f-1&&(p=0));var g=function(){if(void 0!==p){var t=n.$children[p].$el;(0,i.removeClass)(h,"active"),(0,i.addClass)(t,"active"),n.index=p}s&&(s.style.display=""),r&&(r.style.display="")};setTimeout(function(){"next"===t?(n.translate(a,-o,u,g),r&&n.translate(r,0,u)):"prev"===t?(n.translate(a,o,u,g),s&&n.translate(s,0,u)):(n.translate(a,0,u,g),"undefined"!=typeof l?(s&&l>0&&n.translate(s,-1*o,u),r&&0>l&&n.translate(r,o,u)):(s&&n.translate(s,-1*o,u),r&&n.translate(r,o,u)))},10)}},next:function(){this.doAnimate("next")},prev:function(){this.doAnimate("prev")},doOnTouchStart:function(t){if(!this.noDrag){var e=this.$el,n=this.dragState,i=t.touches[0];n.startTime=new Date,n.startLeft=i.pageX,n.startTop=i.pageY,n.startTopAbsolute=i.clientY,n.pageWidth=e.offsetWidth,n.pageHeight=e.offsetHeight;var s=this.$children[this.index-1],r=this.$children[this.index],a=this.$children[this.index+1];this.continuous&&this.pages.length>1&&(s||(s=this.$children[this.$children.length-1]),a||(a=this.$children[0])),n.prevPage=s?s.$el:null,n.dragPage=r?r.$el:null,n.nextPage=a?a.$el:null,n.prevPage&&(n.prevPage.style.display="block"),n.nextPage&&(n.nextPage.style.display="block")}},doOnTouchMove:function(t){if(!this.noDrag){var e=this.dragState,n=t.touches[0];e.currentLeft=n.pageX,e.currentTop=n.pageY,e.currentTopAbsolute=n.clientY;var i=e.currentLeft-e.startLeft,s=e.currentTopAbsolute-e.startTopAbsolute,r=Math.abs(i),a=Math.abs(s);if(5>r||r>=5&&a>=1.73*r)return void(this.userScrolling=!0);this.userScrolling=!1,t.preventDefault(),i=Math.min(Math.max(-e.pageWidth+1,i),e.pageWidth-1);var o=0>i?"next":"prev";e.prevPage&&"prev"===o&&this.translate(e.prevPage,i-e.pageWidth),this.translate(e.dragPage,i),e.nextPage&&"next"===o&&this.translate(e.nextPage,i+e.pageWidth)}},doOnTouchEnd:function(){if(!this.noDrag){var t=this.dragState,e=new Date-t.startTime,n=null,i=t.currentLeft-t.startLeft,s=t.currentTop-t.startTop,r=t.pageWidth,a=this.index,o=this.pages.length;if(300>e){var l=Math.abs(i)<5&&Math.abs(s)<5;(isNaN(i)||isNaN(s))&&(l=!0),l&&this.$children[this.index].$emit("tap")}300>e&&void 0===t.currentLeft||((300>e||Math.abs(i)>r/2)&&(n=0>i?"next":"prev"),this.continuous||(0===a&&"prev"===n||a===o-1&&"next"===n)&&(n=null),this.$children.length<2&&(n=null),this.doAnimate(n,{offsetLeft:i,pageWidth:t.pageWidth,prevPage:t.prevPage,currentPage:t.dragPage,nextPage:t.nextPage}),this.dragState={})}}},destroyed:function(){this.timer&&(clearInterval(this.timer),this.timer=null),this.reInitTimer&&(clearTimeout(this.reInitTimer),this.reInitTimer=null)},ready:function(){var t=this;this.ready=!0,this.auto>0&&(this.timer=setInterval(function(){t.dragging||t.animating||t.next()},this.auto)),this.reInitPages();var e=this.$el;e.addEventListener("touchstart",function(e){t.prevent&&e.preventDefault(),t.animating||(t.dragging=!0,t.userScrolling=!1,t.doOnTouchStart(e))}),e.addEventListener("touchmove",function(e){t.dragging&&t.doOnTouchMove(e)}),e.addEventListener("touchend",function(e){return t.userScrolling?(t.dragging=!1,void(t.dragState={})):void(t.dragging&&(t.doOnTouchEnd(e),t.dragging=!1))})}}},function(t,e){"use strict";var n=function(t){return(t||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},i=function(t,e){if(!t||!e)return!1;if(-1!=e.indexOf(" "))throw new Error("className should not contain space.");return t.classList?t.classList.contains(e):(" "+t.className+" ").indexOf(" "+e+" ")>-1},s=function(t,e){if(t){for(var n=t.className,s=(e||"").split(" "),r=0,a=s.length;a>r;r++){var o=s[r];o&&(t.classList?t.classList.add(o):i(t,o)||(n+=" "+o))}t.classList||(t.className=n)}},r=function(t,e){if(t&&e){for(var s=e.split(" "),r=" "+t.className+" ",a=0,o=s.length;o>a;a++){var l=s[a];l&&(t.classList?t.classList.remove(l):i(t,l)&&(r=r.replace(" "+l+" "," ")))}t.classList||(t.className=n(r))}};t.exports={hasClass:i,addClass:s,removeClass:r}},function(t,e){"use strict";var n=function i(t,e){if(!t)return null;var n,s;if("string"==typeof t)return document.createTextNode(t);if(t.tag){n=document.createElement(t.tag);for(var r in t)if(t.hasOwnProperty(r)){if("content"===r||"tag"===r)continue;if("key"===r&&e){var a=t[r];a&&(e[a]=n);continue}n[r]=t[r]}var o=t.content;if(o)if("string"==typeof o)s=document.createTextNode(o),n.appendChild(s);else{o instanceof Array||(o=[o]);for(var l=0,u=o.length;u>l;l++){var c=o[l];s=i(c,e),n.appendChild(s)}}}return n};t.exports=n},function(t,e){"use strict";var n=function(){return document.addEventListener?function(t,e,n){t&&e&&n&&t.addEventListener(e,n,!1)}:function(t,e,n){t&&e&&n&&t.attachEvent("on"+e,n)}}(),i=function(){return document.removeEventListener?function(t,e,n){t&&e&&t.removeEventListener(e,n,!1)}:function(t,e,n){t&&e&&t.detachEvent("on"+e,n)}}(),s=function(t,e,s){var r=function a(){s&&s.apply(this,arguments),i(t,e,a)};n(t,e,r)};t.exports={on:n,off:i,once:s}},function(t,e,n){"use strict";var i=n(3),s=n(5),r=n(7),a=n(4);t.exports={on:s.on,off:s.off,once:s.once,getStyle:r.getStyle,setStyle:r.setStyle,removeClass:i.removeClass,addClass:i.addClass,hasClass:i.hasClass,create:a}},function(t,e){"use strict";function n(t){return t.replace(s,function(t,e,n,i){return i?n.toUpperCase():n}).replace(r,"Moz$1")}var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},s=/([\:\-\_]+(.))/g,r=/^moz([A-Z])/,a=Number(document.documentMode),o=9>a?function(t,e){if(!t||!e)return null;e=n(e),"float"===e&&(e="styleFloat");try{switch(e){case"opacity":try{return t.filters.item("alpha").opacity/100}catch(i){return 1}break;default:return t.style[e]||t.currentStyle?t.currentStyle[e]:null}}catch(i){return t.style[e]}}:function(t,e){if(!t||!e)return null;e=n(e),"float"===e&&(e="cssFloat");try{var i=document.defaultView.getComputedStyle(t,"");return t.style[e]||i?i[e]:null}catch(s){return t.style[e]}},l=function u(t,e,s){if(t&&e)if("object"===("undefined"==typeof e?"undefined":i(e)))for(var r in e)e.hasOwnProperty(r)&&u(t,r,e[r]);else e=n(e),"opacity"===e&&9>a?t.style.filter=isNaN(s)?"":"alpha(opacity="+100*s+")":t.style[e]=s};t.exports={getStyle:o,setStyle:l}},function(t,e){},function(t,e){t.exports="<div class=swipe-item> <slot></slot> </div>"},function(t,e){t.exports='<div class=swipe> <div class=swipe-items-wrap v-el:wrap> <slot></slot> </div> <div class=swipe-indicators v-show=showIndicators> <div class=swipe-indicator v-for="page in pages" :class="{ active: $index === index }"></div> </div> </div>'},function(t,e,n){var i,s;i=n(1),s=n(9),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)},function(t,e,n){var i,s;n(8),i=n(2),s=n(10),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options:t.exports).template=s)}])});
	
	/***/ },
	/* 146 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 147 */,
	/* 148 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(149);
	
	/***/ },
	/* 149 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _vueSwipe = __webpack_require__(145);
	
		__webpack_require__(150);
	
		_vueSwipe.SwipeItem.name = 'mt-swipe-item';
		module.exports = _vueSwipe.SwipeItem;
	
	/***/ },
	/* 150 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 151 */,
	/* 152 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var MintRange = __webpack_require__(153);
	
		MintRange.install = function (Vue) {
		  Vue.component(MintRange.name, MintRange);
		};
	
		module.exports = MintRange;
	
	/***/ },
	/* 153 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(154)
		__vue_script__ = __webpack_require__(156)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/range/src/index.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(158)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 154 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 155 */,
	/* 156 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _draggable = __webpack_require__(157);
	
		var _draggable2 = _interopRequireDefault(_draggable);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'mt-range',
		  props: {
		    min: {
		      type: Number,
		      default: 0
		    },
		    max: {
		      type: Number,
		      default: 100
		    },
		    step: {
		      type: Number,
		      default: 1
		    },
		    disabled: {
		      type: Boolean,
		      default: false
		    },
		    value: {
		      type: Number
		    },
		    barHeight: {
		      type: Number,
		      default: 1
		    }
		  },
		  computed: {
		    progress: function progress() {
		      var value = this.value;
		      if (typeof value === 'undefined' || value === null) return 0;
		      return Math.floor((value - this.min) / (this.max - this.min) * 100);
		    }
		  },
		  ready: function ready() {
		    var _this = this;
	
		    var _$els = this.$els;
		    var thumb = _$els.thumb;
		    var content = _$els.content;
	
	
		    var getThumbPosition = function getThumbPosition() {
		      var contentBox = content.getBoundingClientRect();
		      var thumbBox = thumb.getBoundingClientRect();
	
		      return {
		        left: thumbBox.left - contentBox.left,
		        top: thumbBox.top - contentBox.top
		      };
		    };
	
		    var dragState = {};
		    (0, _draggable2.default)(thumb, {
		      start: function start() {
		        if (_this.disabled) return;
		        var position = getThumbPosition();
		        dragState = {
		          thumbStartLeft: position.left,
		          thumbStartTop: position.top
		        };
		      },
		      drag: function drag(event) {
		        if (_this.disabled) return;
		        var contentBox = content.getBoundingClientRect();
		        var deltaX = event.pageX - contentBox.left - dragState.thumbStartLeft;
		        var stepCount = Math.ceil((_this.max - _this.min) / _this.step);
		        var newPosition = dragState.thumbStartLeft + deltaX - (dragState.thumbStartLeft + deltaX) % (contentBox.width / stepCount);
	
		        var newProgress = newPosition / contentBox.width;
	
		        if (newProgress < 0) {
		          newProgress = 0;
		        } else if (newProgress > 1) {
		          newProgress = 1;
		        }
	
		        _this.value = Math.round(_this.min + newProgress * (_this.max - _this.min));
		      },
		      end: function end() {
		        if (_this.disabled) return;
		        dragState = {};
		      }
		    });
		  }
		};
	
	/***/ },
	/* 157 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		exports.default = function (element, options) {
		  var moveFn = function moveFn(event) {
		    if (options.drag) {
		      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  };
	
		  var endFn = function endFn(event) {
		    if (!supportTouch) {
		      document.removeEventListener('mousemove', moveFn);
		      document.removeEventListener('mouseup', endFn);
		    }
		    document.onselectstart = null;
		    document.ondragstart = null;
	
		    isDragging = false;
	
		    if (options.end) {
		      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  };
	
		  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
		    if (isDragging) return;
		    event.preventDefault();
		    document.onselectstart = function () {
		      return false;
		    };
		    document.ondragstart = function () {
		      return false;
		    };
	
		    if (!supportTouch) {
		      document.addEventListener('mousemove', moveFn);
		      document.addEventListener('mouseup', endFn);
		    }
		    isDragging = true;
	
		    if (options.start) {
		      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  });
	
		  if (supportTouch) {
		    element.addEventListener('touchmove', moveFn);
		    element.addEventListener('touchend', endFn);
		    element.addEventListener('touchcancel', endFn);
		  }
		};
	
		var isDragging = false;
		var supportTouch = 'ontouchstart' in window;
	
		;
	
	/***/ },
	/* 158 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mt-range\" :class=\"{ 'mt-range--disabled': disabled }\">\n  <slot name=\"start\"></slot>\n  <div class=\"mt-range-content\" v-el:content>\n    <div class=\"mt-range-runway\" :style=\"{ 'border-top-width': barHeight + 'px' }\"></div>\n    <div class=\"mt-range-progress\" :style=\"{ width: progress + '%', height: barHeight + 'px' }\"></div>\n    <div class=\"mt-range-thumb\" v-el:thumb :style=\"{ left: progress + '%' }\"></div>\n  </div>\n  <slot name=\"end\"></slot>\n</div>\n";
	
	/***/ },
	/* 159 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(160);
	
	/***/ },
	/* 160 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(161)
		__vue_script__ = __webpack_require__(163)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/picker/src/picker.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(173)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 161 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 162 */,
	/* 163 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-picker',
	
		  props: {
		    slots: {
		      type: Array
		    },
		    showToolbar: {
		      type: Boolean,
		      default: false
		    },
		    visibleItemCount: {
		      type: Number,
		      default: 5
		    },
		    rotateEffect: {
		      type: Boolean,
		      default: false
		    }
		  },
	
		  beforeCompile: function beforeCompile() {
		    var slots = this.slots || [];
		    this.values = [];
		    var values = this.values;
		    var valueIndexCount = 0;
		    slots.forEach(function (slot) {
		      if (!slot.divider) {
		        slot.valueIndex = valueIndexCount++;
		        values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
		      }
		    });
		  },
	
	
		  methods: {
		    getSlot: function getSlot(slotIndex) {
		      var slots = this.slots || [];
		      var count = 0;
		      var target;
		      var children = this.$children;
	
		      slots.forEach(function (slot, index) {
		        if (!slot.divider) {
		          if (slotIndex === count) {
		            target = children[index];
		          }
		          count++;
		        }
		      });
	
		      return target;
		    },
		    getSlotValue: function getSlotValue(index) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        return slot.value;
		      }
		      return null;
		    },
		    setSlotValue: function setSlotValue(index, value) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        slot.value = value;
		      }
		    },
		    getSlotValues: function getSlotValues(index) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        return slot.values;
		      }
		      return null;
		    },
		    setSlotValues: function setSlotValues(index, values) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        slot.values = values;
		      }
		    },
		    getValues: function getValues() {
		      return this.values;
		    },
		    setValues: function setValues(values) {
		      var _this = this;
	
		      var slotCount = this.slotCount;
		      values = values || [];
		      if (slotCount !== values.length) {
		        throw new Error('values length is not equal slot count.');
		      }
		      values.forEach(function (value, index) {
		        _this.setSlotValue(index, value);
		      });
		    }
		  },
	
		  events: {
		    slotValueChange: function slotValueChange() {
		      this.$emit('change', this, this.values);
		    }
		  },
	
		  computed: {
		    values: function values() {
		      var slots = this.slots || [];
		      var values = [];
		      slots.forEach(function (slot) {
		        if (!slot.divider) values.push(slot.value);
		      });
	
		      return values;
		    },
		    slotCount: function slotCount() {
		      var slots = this.slots || [];
		      var result = 0;
		      slots.forEach(function (slot) {
		        if (!slot.divider) result++;
		      });
		      return result;
		    }
		  },
	
		  components: {
		    PickerSlot: __webpack_require__(164)
		  }
		};
	
	/***/ },
	/* 164 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(165)
		__vue_script__ = __webpack_require__(167)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/picker/src/picker-slot.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(172)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 165 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 166 */,
	/* 167 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _vue = __webpack_require__(132);
	
		var _vue2 = _interopRequireDefault(_vue);
	
		var _draggable = __webpack_require__(168);
	
		var _draggable2 = _interopRequireDefault(_draggable);
	
		var _translate = __webpack_require__(169);
	
		var _translate2 = _interopRequireDefault(_translate);
	
		var _event = __webpack_require__(87);
	
		var _class = __webpack_require__(170);
	
		__webpack_require__(171);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var rotateElement = function rotateElement(element, angle) {
		  if (!element) return;
		  var transformProperty = _translate2.default.transformProperty;
	
		  element.style[transformProperty] = element.style[transformProperty].replace(/rotateX\(.+?deg\)/gi, '') + (' rotateX(' + angle + 'deg)');
		};
	
		var ITEM_HEIGHT = 36;
		var VISIBLE_ITEMS_ANGLE_MAP = {
		  3: -45,
		  5: -20,
		  7: -15
		};
	
		exports.default = {
		  props: {
		    values: {
		      type: Array,
		      default: function _default() {
		        return [];
		      }
		    },
		    value: {},
		    visibleItemCount: {
		      type: Number,
		      default: 5
		    },
		    rotateEffect: {
		      type: Boolean,
		      default: false
		    },
		    divider: {
		      type: Boolean,
		      default: false
		    },
		    textAlign: {
		      type: String,
		      default: 'center'
		    },
		    flex: {},
		    className: {},
		    content: {}
		  },
	
		  data: function data() {
		    return {
		      dragging: false,
		      animationFrameId: null
		    };
		  },
	
	
		  computed: {
		    flexStyle: function flexStyle() {
		      return {
		        'flex': this.flex,
		        '-webkit-box-flex': this.flex,
		        '-moz-box-flex': this.flex,
		        '-ms-flex': this.flex
		      };
		    },
		    classNames: function classNames() {
		      var PREFIX = 'picker-slot-';
		      var resultArray = [];
	
		      if (this.rotateEffect) {
		        resultArray.push(PREFIX + 'absolute');
		      }
	
		      var textAlign = this.textAlign || 'center';
		      resultArray.push(PREFIX + textAlign);
	
		      if (this.divider) {
		        resultArray.push(PREFIX + 'divider');
		      }
	
		      if (this.className) {
		        resultArray.push(this.className);
		      }
	
		      return resultArray.join(' ');
		    },
		    contentHeight: function contentHeight() {
		      return ITEM_HEIGHT * this.visibleItemCount;
		    },
		    valueIndex: function valueIndex() {
		      return this.values.indexOf(this.value);
		    },
		    dragRange: function dragRange() {
		      var values = this.values;
		      var visibleItemCount = this.visibleItemCount;
	
		      return [-ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2)];
		    }
		  },
	
		  methods: {
		    value2Translate: function value2Translate(value) {
		      var values = this.values;
		      var valueIndex = values.indexOf(value);
		      var offset = Math.floor(this.visibleItemCount / 2);
	
		      if (valueIndex !== -1) {
		        return (valueIndex - offset) * -ITEM_HEIGHT;
		      }
		    },
		    translate2Value: function translate2Value(translate) {
		      translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT;
		      var index = -(translate - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT;
	
		      return this.values[index];
		    },
	
	
		    updateRotate: function updateRotate(currentTranslate, pickerItems) {
		      if (this.divider) return;
		      var dragRange = this.dragRange;
		      var wrapper = this.$els.wrapper;
	
		      if (!pickerItems) {
		        pickerItems = wrapper.querySelectorAll('.picker-item');
		      }
	
		      if (currentTranslate === undefined) {
		        currentTranslate = _translate2.default.getElementTranslate(wrapper).top;
		      }
	
		      var itemsFit = Math.ceil(this.visibleItemCount / 2);
		      var angleUnit = VISIBLE_ITEMS_ANGLE_MAP[this.visibleItemCount] || -20;
	
		      [].forEach.call(pickerItems, function (item, index) {
		        var itemOffsetTop = index * ITEM_HEIGHT;
		        var translateOffset = dragRange[1] - currentTranslate;
		        var itemOffset = itemOffsetTop - translateOffset;
		        var percentage = itemOffset / ITEM_HEIGHT;
	
		        var angle = angleUnit * percentage;
		        if (angle > 180) angle = 180;
		        if (angle < -180) angle = -180;
	
		        rotateElement(item, angle);
	
		        if (Math.abs(percentage) > itemsFit) {
		          (0, _class.addClass)(item, 'picker-item-far');
		        } else {
		          (0, _class.removeClass)(item, 'picker-item-far');
		        }
		      });
		    },
	
		    planUpdateRotate: function planUpdateRotate() {
		      var _this = this;
	
		      var el = this.$els.wrapper;
		      cancelAnimationFrame(this.animationFrameId);
	
		      this.animationFrameId = requestAnimationFrame(function () {
		        _this.updateRotate();
		      });
	
		      (0, _event.once)(el, _translate2.default.transitionEndProperty, function () {
		        _this.animationFrameId = null;
		        cancelAnimationFrame(_this.animationFrameId);
		      });
		    },
	
		    initEvents: function initEvents() {
		      var _this2 = this;
	
		      var el = this.$els.wrapper;
		      var dragState = {};
	
		      var velocityTranslate, prevTranslate, pickerItems;
	
		      (0, _draggable2.default)(el, {
		        start: function start(event) {
		          cancelAnimationFrame(_this2.animationFrameId);
		          _this2.animationFrameId = null;
		          dragState = {
		            range: _this2.dragRange,
		            start: new Date(),
		            startLeft: event.pageX,
		            startTop: event.pageY,
		            startTranslateTop: _translate2.default.getElementTranslate(el).top
		          };
		          pickerItems = el.querySelectorAll('.picker-item');
		        },
	
		        drag: function drag(event) {
		          _this2.dragging = true;
	
		          dragState.left = event.pageX;
		          dragState.top = event.pageY;
	
		          var deltaY = dragState.top - dragState.startTop;
		          var translate = dragState.startTranslateTop + deltaY;
	
		          _translate2.default.translateElement(el, null, translate);
	
		          velocityTranslate = translate - prevTranslate || translate;
	
		          prevTranslate = translate;
	
		          if (_this2.rotateEffect) {
		            _this2.updateRotate(prevTranslate, pickerItems);
		          }
		        },
	
		        end: function end() {
		          _this2.dragging = false;
	
		          var momentumRatio = 7;
		          var currentTranslate = _translate2.default.getElementTranslate(el).top;
		          var duration = new Date() - dragState.start;
	
		          var momentumTranslate;
		          if (duration < 300) {
		            momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
		          }
	
		          var dragRange = dragState.range;
	
		          _vue2.default.nextTick(function () {
		            var translate;
		            if (momentumTranslate) {
		              translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
		            } else {
		              translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
		            }
	
		            translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
	
		            _translate2.default.translateElement(el, null, translate);
	
		            _this2.value = _this2.translate2Value(translate);
	
		            if (_this2.rotateEffect) {
		              _this2.planUpdateRotate();
		            }
		          });
	
		          dragState = {};
		        }
		      });
		    },
		    doOnValueChange: function doOnValueChange() {
		      var value = this.value;
		      var wrapper = this.$els.wrapper;
	
		      _translate2.default.translateElement(wrapper, null, this.value2Translate(value));
		    },
		    doOnValuesChange: function doOnValuesChange() {
		      var el = this.$el;
		      var items = el.querySelectorAll('.picker-item');
		      [].forEach.call(items, function (item, index) {
		        _translate2.default.translateElement(item, null, ITEM_HEIGHT * index);
		      });
		      if (this.rotateEffect) {
		        this.planUpdateRotate();
		      }
		    }
		  },
	
		  ready: function ready() {
		    this.ready = true;
	
		    if (!this.divider) {
		      this.initEvents();
		      this.doOnValueChange();
		    }
	
		    if (this.rotateEffect) {
		      this.doOnValuesChange();
		    }
		  },
	
	
		  watch: {
		    values: function values(newVal) {
		      var _this3 = this;
	
		      if (this.valueIndex === -1) {
		        this.value = (newVal || [])[0];
		      }
		      if (this.rotateEffect) {
		        _vue2.default.nextTick(function () {
		          _this3.doOnValuesChange();
		        });
		      }
		    },
		    value: function value() {
		      this.doOnValueChange();
		      if (this.rotateEffect) {
		        this.planUpdateRotate();
		      }
		      this.$dispatch('slotValueChange', this);
		    }
		  }
		};
	
	/***/ },
	/* 168 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		exports.default = function (element, options) {
		  var moveFn = function moveFn(event) {
		    if (options.drag) {
		      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  };
	
		  var endFn = function endFn(event) {
		    if (!supportTouch) {
		      document.removeEventListener('mousemove', moveFn);
		      document.removeEventListener('mouseup', endFn);
		    }
		    document.onselectstart = null;
		    document.ondragstart = null;
	
		    isDragging = false;
	
		    if (options.end) {
		      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  };
	
		  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
		    if (isDragging) return;
		    document.onselectstart = function () {
		      return false;
		    };
		    document.ondragstart = function () {
		      return false;
		    };
	
		    if (!supportTouch) {
		      document.addEventListener('mousemove', moveFn);
		      document.addEventListener('mouseup', endFn);
		    }
		    isDragging = true;
	
		    if (options.start) {
		      event.preventDefault();
		      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  });
	
		  if (supportTouch) {
		    element.addEventListener('touchmove', moveFn);
		    element.addEventListener('touchend', endFn);
		    element.addEventListener('touchcancel', endFn);
		  }
		};
	
		var isDragging = false;
		var supportTouch = 'ontouchstart' in window;
	
		;
	
	/***/ },
	/* 169 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var docStyle = document.documentElement.style;
		var engine;
		var translate3d = false;
	
		if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
		  engine = 'presto';
		} else if ('MozAppearance' in docStyle) {
		  engine = 'gecko';
		} else if ('WebkitAppearance' in docStyle) {
		  engine = 'webkit';
		} else if (typeof navigator.cpuClass === 'string') {
		  engine = 'trident';
		}
	
		var cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];
	
		var vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O' }[engine];
	
		var helperElem = document.createElement('div');
		var perspectiveProperty = vendorPrefix + 'Perspective';
		var transformProperty = vendorPrefix + 'Transform';
		var transformStyleName = cssPrefix + 'transform';
		var transitionProperty = vendorPrefix + 'Transition';
		var transitionStyleName = cssPrefix + 'transition';
		var transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd';
	
		if (helperElem.style[perspectiveProperty] !== undefined) {
		  translate3d = true;
		}
	
		var getTranslate = function getTranslate(element) {
		  var result = { left: 0, top: 0 };
		  if (element === null || element.style === null) return result;
	
		  var transform = element.style[transformProperty];
		  var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g.exec(transform);
		  if (matches) {
		    result.left = +matches[1];
		    result.top = +matches[3];
		  }
	
		  return result;
		};
	
		var translateElement = function translateElement(element, x, y) {
		  if (x === null && y === null) return;
	
		  if (element === null || element === undefined || element.style === null) return;
	
		  if (!element.style[transformProperty] && x === 0 && y === 0) return;
	
		  if (x === null || y === null) {
		    var translate = getTranslate(element);
		    if (x === null) {
		      x = translate.left;
		    }
		    if (y === null) {
		      y = translate.top;
		    }
		  }
	
		  cancelTranslateElement(element);
	
		  if (translate3d) {
		    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ') translateZ(0px)';
		  } else {
		    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ')';
		  }
		};
	
		var cancelTranslateElement = function cancelTranslateElement(element) {
		  if (element === null || element.style === null) return;
		  var transformValue = element.style[transformProperty];
		  if (transformValue) {
		    transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '');
		    element.style[transformProperty] = transformValue;
		  }
		};
	
		exports.default = {
		  transformProperty: transformProperty,
		  transformStyleName: transformStyleName,
		  transitionProperty: transitionProperty,
		  transitionStyleName: transitionStyleName,
		  transitionEndProperty: transitionEndProperty,
		  getElementTranslate: getTranslate,
		  translateElement: translateElement,
		  cancelTranslateElement: cancelTranslateElement
		};
	
	/***/ },
	/* 170 */
	/***/ function(module, exports) {
	
		var trim = function (string) {
		  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
		};
	
		var hasClass = function (el, cls) {
		  if (!el || !cls) return false;
		  if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
		  if (el.classList) {
		    return el.classList.contains(cls);
		  } else {
		    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
		  }
		};
	
		var addClass = function (el, cls) {
		  if (!el) return;
		  var curClass = el.className;
		  var classes = (cls || '').split(' ');
	
		  for (var i = 0, j = classes.length; i < j; i++) {
		    var clsName = classes[i];
		    if (!clsName) continue;
	
		    if (el.classList) {
		      el.classList.add(clsName);
		    } else {
		      if (!hasClass(el, clsName)) {
		        curClass += ' ' + clsName;
		      }
		    }
		  }
		  if (!el.classList) {
		    el.className = curClass;
		  }
		};
	
		var removeClass = function (el, cls) {
		  if (!el || !cls) return;
		  var classes = cls.split(' ');
		  var curClass = ' ' + el.className + ' ';
	
		  for (var i = 0, j = classes.length; i < j; i++) {
		    var clsName = classes[i];
		    if (!clsName) continue;
	
		    if (el.classList) {
		      el.classList.remove(clsName);
		    } else {
		      if (hasClass(el, clsName)) {
		        curClass = curClass.replace(' ' + clsName + ' ', ' ');
		      }
		    }
		  }
		  if (!el.classList) {
		    el.className = trim(curClass);
		  }
		};
	
		module.exports = {
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass
		};
	
	/***/ },
	/* 171 */
	/***/ function(module, exports) {
	
		/*
		 * raf.js
		 * https://github.com/ngryman/raf.js
		 *
		 * original requestAnimationFrame polyfill by Erik Möller
		 * inspired from paul_irish gist and post
		 *
		 * Copyright (c) 2013 ngryman
		 * Licensed under the MIT license.
		 */
	
		(function(window) {
			var lastTime = 0,
				vendors = ['webkit', 'moz'],
				requestAnimationFrame = window.requestAnimationFrame,
				cancelAnimationFrame = window.cancelAnimationFrame,
				i = vendors.length;
	
			// try to un-prefix existing raf
			while (--i >= 0 && !requestAnimationFrame) {
				requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
				cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
			}
	
			// polyfill with setTimeout fallback
			// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
			if (!requestAnimationFrame || !cancelAnimationFrame) {
				requestAnimationFrame = function(callback) {
					var now = +new Date(), nextTime = Math.max(lastTime + 16, now);
					return setTimeout(function() {
						callback(lastTime = nextTime);
					}, nextTime - now);
				};
	
				cancelAnimationFrame = clearTimeout;
			}
	
			// export to window
			window.requestAnimationFrame = requestAnimationFrame;
			window.cancelAnimationFrame = cancelAnimationFrame;
		}(window));
	
	
	/***/ },
	/* 172 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"picker-slot {{classNames}}\" :style=\"flexStyle\">\n  <div v-if=\"!divider\" v-el:wrapper class=\"picker-slot-wrapper\" :class=\"{ dragging: dragging }\" :style=\"{ height: contentHeight + 'px' }\">\n    <div class=\"picker-item\" v-for=\"itemValue in values\" :class=\"{ 'picker-selected': itemValue === value }\">{{ itemValue }}</div>\n  </div>\n  <div v-if=\"divider\">{{ content }}</div>\n</div>\n";
	
	/***/ },
	/* 173 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"picker\" :class=\"{ 'picker-3d': rotateEffect }\">\n  <div class=\"picker-toolbar\" v-if=\"showToolbar\"><slot></slot></div>\n  <div class=\"picker-items\">\n    <picker-slot v-for=\"slot in slots\" :values=\"slot.values || []\" :text-align=\"slot.textAlign || 'center'\" :visible-item-count=\"visibleItemCount\" :class-name=\"slot.className\" :flex=\"slot.flex\" :value.sync=\"values[slot.valueIndex]\" :rotate-effect=\"rotateEffect\" :divider=\"slot.divider\" :content=\"slot.content\"></picker-slot>\n    <div class=\"picker-center-highlight\"></div>\n  </div>\n</div>\n";
	
	/***/ },
	/* 174 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(175);
	
	/***/ },
	/* 175 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(176)
		__vue_script__ = __webpack_require__(178)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/progress/src/progress.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(179)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 176 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 177 */,
	/* 178 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-progress',
	
		  props: {
		    value: {
		      type: Number
		    },
		    barHeight: {
		      type: Number,
		      default: 3
		    }
		  }
		};
	
	/***/ },
	/* 179 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mt-progress\">\n  <slot name=\"start\"></slot>\n  <div class=\"mt-progress-content\" v-el:content>\n    <div class=\"mt-progress-runway\" :style=\"{ height: barHeight + 'px' }\"></div>\n    <div class=\"mt-progress-progress\" :style=\"{ width: value + '%', height: barHeight + 'px' }\"></div>\n  </div>\n  <slot name=\"end\"></slot>\n</div>\n";
	
	/***/ },
	/* 180 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(181);
	
	/***/ },
	/* 181 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _vueToastMobile = __webpack_require__(182);
	
		var _vueToastMobile2 = _interopRequireDefault(_vueToastMobile);
	
		__webpack_require__(183);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		module.exports = _vueToastMobile2.default;
	
	/***/ },
	/* 182 */
	/***/ function(module, exports, __webpack_require__) {
	
		!function(e,t){ true?module.exports=t(__webpack_require__(132)):"function"==typeof define&&define.amd?define("VueToastMobile",["vue"],t):"object"==typeof exports?exports.VueToastMobile=t(require("vue")):e.VueToastMobile=t(e.vue)}(this,function(e){return function(e){function t(s){if(o[s])return o[s].exports;var i=o[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="/lib/",t(0)}([function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){e=e||{};var t=void 0,o=void 0,s=void 0,i=void 0,a=void 0;"string"==typeof e?(t=e,s=3e3,o="middle",i="",a=""):(t=e.message,s=e.duration||3e3,o=e.position||"middle",i=e.className||"",a=e.iconClass||"");var u=r();u.message=t,u.position=o,u.className=i,u.iconClass=a,n["default"].nextTick(function(){u.$appendTo(document.body),setTimeout(function(){u.$remove(),p(u)},s)})};var i=o(5),n=s(i),a=n["default"].extend(o(3)),u=[],r=function(){if(u.length>0){var e=u[0];return u.splice(0,1),e}return new a({el:document.createElement("div")})},p=function(e){e&&u.push(e)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{message:String,className:{type:String,"default":""},position:{type:String,"default":"middle"},iconClass:{type:String,"default":""}},computed:{customClass:function(){var e=[];switch(this.position){case"top":e.push("is-placetop");break;case"bottom":e.push("is-placebottom");break;default:e.push("is-placemiddle")}return e.push(this.className),e.join(" ")}}}},function(e,t){e.exports="<div class=\"mint-toast {{ customClass }}\" transition=mint-toast-pop :style=\"{ 'padding': iconClass === '' ? '10px' : '20px' }\"> <i class=\"mint-toast-icon {{ iconClass }}\" v-if=\"iconClass !== ''\"></i> <span class=mint-toast-text :style=\"{ 'padding-top': iconClass === '' ? '0' : '10px' }\">{{ message }}</span> </div>"},function(e,t,o){var s,i;o(4),s=o(1),i=o(2),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},function(e,t){},function(t,o){t.exports=e}])});
	
	/***/ },
	/* 183 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 184 */,
	/* 185 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _vue = __webpack_require__(132);
	
		var _vue2 = _interopRequireDefault(_vue);
	
		__webpack_require__(186);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var Indicator = _vue2.default.extend(__webpack_require__(188));
		var instance = void 0;
		var timer = void 0;
	
		module.exports = {
		  open: function open(options) {
		    if (!instance) {
		      instance = new Indicator({
		        el: document.createElement('div')
		      });
		    }
		    if (instance.visible) return;
		    if (typeof options === 'string') {
		      instance.text = options;
		      instance.spinnerType = 'snake';
		    } else if (Object.prototype.toString.call(options) === '[object Object]') {
		      instance.text = options.text || '';
		      instance.spinnerType = options.spinnerType || 'snake';
		    } else {
		      instance.text = '';
		      instance.spinnerType = 'snake';
		    }
		    instance.$appendTo(document.body);
		    if (timer) {
		      clearTimeout(timer);
		    }
	
		    _vue2.default.nextTick(function () {
		      instance.visible = true;
		    });
		  },
		  close: function close() {
		    if (instance) {
		      _vue2.default.nextTick(function () {
		        instance.visible = false;
		        timer = setTimeout(function () {
		          if (instance.$el) {
		            instance.$el.style.display = 'none';
		          }
		        }, 400);
		      });
		    }
		  }
		};
	
	/***/ },
	/* 186 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 187 */,
	/* 188 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(189)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/indicator/src/indicator.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(192)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 189 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _index = __webpack_require__(190);
	
		var _index2 = _interopRequireDefault(_index);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (true) {
		  __webpack_require__(191);
		}
	
		exports.default = {
		  data: function data() {
		    return {
		      visible: false
		    };
		  },
	
	
		  components: {
		    Spinner: _index2.default
		  },
	
		  computed: {
		    convertedSpinnerType: function convertedSpinnerType() {
		      switch (this.spinnerType) {
		        case 'double-bounce':
		          return 1;
		        case 'triple-bounce':
		          return 2;
		        case 'fading-circle':
		          return 3;
		        default:
		          return 0;
		      }
		    }
		  },
	
		  props: {
		    text: String,
		    spinnerType: {
		      type: String,
		      default: 'snake'
		    }
		  }
		};
	
	/***/ },
	/* 190 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(52);
	
	/***/ },
	/* 191 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(53);
	
	/***/ },
	/* 192 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-indicator\" v-show=\"visible\" transition=\"mint-indicator\" >\n  <div class=\"mint-indicator-wrapper\" :style=\"{ 'padding': text ? '20px' : '15px' }\">\n    <spinner class=\"mint-indicator-spin\" :type=\"convertedSpinnerType\" :size=\"32\"></spinner>\n    <span class=\"mint-indicator-text\" v-show=\"text\">{{ text }}</span>\n  </div>\n  <div class=\"mint-indicator-mask\" @touchmove.stop.prevent></div>\n</div>\n";
	
	/***/ },
	/* 193 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(194);
	
	/***/ },
	/* 194 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _src = __webpack_require__(195);
	
		var _src2 = _interopRequireDefault(_src);
	
		__webpack_require__(203);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		module.exports = _src2.default;
	
	/***/ },
	/* 195 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.MessageBox = undefined;
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
		var _vue = __webpack_require__(132);
	
		var _vue2 = _interopRequireDefault(_vue);
	
		var _msgbox = __webpack_require__(196);
	
		var _msgbox2 = _interopRequireDefault(_msgbox);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var CONFIRM_TEXT = '确定';
		var CANCEL_TEXT = '取消';
	
		var defaults = {
		  title: '',
		  message: '',
		  type: '',
		  inputType: 'text',
		  showInput: false,
		  lockScroll: false,
		  inputValue: null,
		  inputPlaceholder: '',
		  inputPattern: null,
		  inputValidator: null,
		  inputErrorMessage: '',
		  showConfirmButton: true,
		  showCancelButton: false,
		  confirmButtonPosition: 'right',
		  confirmButtonHighlight: false,
		  cancelButtonHighlight: false,
		  confirmButtonText: CONFIRM_TEXT,
		  cancelButtonText: CANCEL_TEXT,
		  confirmButtonClass: '',
		  cancelButtonClass: ''
		};
	
		var merge = function merge(target) {
		  for (var i = 1, j = arguments.length; i < j; i++) {
		    var source = arguments[i];
		    for (var prop in source) {
		      if (source.hasOwnProperty(prop)) {
		        var value = source[prop];
		        if (value !== undefined) {
		          target[prop] = value;
		        }
		      }
		    }
		  }
	
		  return target;
		};
	
		var MessageBoxConstructor = _vue2.default.extend(_msgbox2.default);
	
		var currentMsg, instance;
		var msgQueue = [];
	
		var initInstance = function initInstance() {
		  instance = new MessageBoxConstructor({
		    el: document.createElement('div')
		  });
	
		  instance.callback = function (action) {
		    if (currentMsg) {
		      var callback = currentMsg.callback;
		      if (typeof callback === 'function') {
		        if (instance.showInput) {
		          callback(instance.inputValue, action);
		        } else {
		          callback(action);
		        }
		      }
		      if (currentMsg.resolve) {
		        var $type = currentMsg.options.$type;
		        if ($type === 'confirm' || $type === 'prompt') {
		          if (action === 'confirm') {
		            if (instance.showInput) {
		              currentMsg.resolve({ value: instance.inputValue, action: action });
		            } else {
		              currentMsg.resolve(action);
		            }
		          } else if (action === 'cancel' && currentMsg.reject) {
		            currentMsg.reject(action);
		          }
		        } else {
		          currentMsg.resolve(action);
		        }
		      }
		    }
		  };
		};
	
		var showNextMsg = function showNextMsg() {
		  if (!instance) {
		    initInstance();
		  }
	
		  if (!instance.visible || instance.closeTimer) {
		    if (msgQueue.length > 0) {
		      currentMsg = msgQueue.shift();
	
		      var options = currentMsg.options;
		      for (var prop in options) {
		        if (options.hasOwnProperty(prop)) {
		          instance[prop] = options[prop];
		        }
		      }
		      instance.$appendTo(document.body);
	
		      _vue2.default.nextTick(function () {
		        instance.visible = true;
		      });
		    }
		  }
		};
	
		var MessageBox = function MessageBox(options, callback) {
		  if (typeof options === 'string') {
		    options = {
		      title: options
		    };
		    if (arguments[1]) {
		      options.message = arguments[1];
		    }
		    if (arguments[2]) {
		      options.type = arguments[2];
		    }
		  } else if (options.callback && !callback) {
		    callback = options.callback;
		  }
	
		  if (typeof Promise !== 'undefined') {
		    return new Promise(function (resolve, reject) {
		      msgQueue.push({
		        options: merge({}, defaults, MessageBox.defaults || {}, options),
		        callback: callback,
		        resolve: resolve,
		        reject: reject
		      });
	
		      showNextMsg();
		    });
		  } else {
		    msgQueue.push({
		      options: merge({}, defaults, MessageBox.defaults || {}, options),
		      callback: callback
		    });
	
		    showNextMsg();
		  }
		};
	
		MessageBox.setDefaults = function (defaults) {
		  MessageBox.defaults = defaults;
		};
	
		MessageBox.alert = function (message, title, options) {
		  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
		    options = title;
		    title = '';
		  }
		  return MessageBox(merge({
		    title: title,
		    message: message,
		    $type: 'alert'
		  }, options));
		};
	
		MessageBox.confirm = function (message, title, options) {
		  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
		    options = title;
		    title = '';
		  }
		  return MessageBox(merge({
		    title: title,
		    message: message,
		    $type: 'confirm',
		    showCancelButton: true
		  }, options));
		};
	
		MessageBox.prompt = function (message, title, options) {
		  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
		    options = title;
		    title = '';
		  }
		  return MessageBox(merge({
		    title: title,
		    message: message,
		    showCancelButton: true,
		    showInput: true,
		    $type: 'prompt'
		  }, options));
		};
	
		MessageBox.close = function () {
		  instance.visible = false;
		  msgQueue = [];
		  currentMsg = null;
		};
	
		exports.default = MessageBox;
		exports.MessageBox = MessageBox;
	
	/***/ },
	/* 196 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(197)
		__webpack_require__(199)
		__vue_script__ = __webpack_require__(201)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] node_modules/vue-msgbox/src/msgbox.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(202)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 197 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 198 */,
	/* 199 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 200 */,
	/* 201 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _vuePopup = __webpack_require__(131);
	
		var _vuePopup2 = _interopRequireDefault(_vuePopup);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		// <template>
		//   <div class="msgbox-wrapper">
		//     <div class="msgbox" v-if="rendered" v-show="visible" transition="pop-bounce">
		//       <div class="msgbox-header" v-if="title !== ''">
		//         <div class="msgbox-title">{{ title }}</div>
		//         <!--<div class="msgbox-close d-icon icon-close" @click="handleAction('close')"></div>-->
		//       </div>
		//       <div class="msgbox-content" v-if="message !== ''">
		//         <div class="msgbox-status d-icon {{ type ? 'icon-' + type : '' }}"></div>
		//         <div class="msgbox-message"><p>{{ message }}</p></div>
		//         <div class="msgbox-input" v-show="showInput">
		//           <input :type="inputType" v-model="inputValue" :placeholder="inputPlaceholder" v-el:input />
		//           <div class="msgbox-errormsg" :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">{{editorErrorMessage}}</div>
		//         </div>
		//       </div>
		//       <div class="msgbox-btns" :class="{ 'msgbox-btns-reverse': confirmButtonPosition === 'left' }">
		//         <button class="{{ cancelButtonClasses }}" v-show="showCancelButton" @click="handleAction('cancel')">{{ cancelButtonText }}</button>
		//         <button class="{{ confirmButtonClasses }}" v-show="showConfirmButton" @click="handleAction('confirm')">{{ confirmButtonText }}</button>
		//       </div>
		//     </div>
		//   </div>
		// </template>
		//
		// <style>
		//   .msgbox {
		//     position: fixed;
		//     top: 50%;
		//     left: 50%;
		//     -webkit-transform: translate3d(-50%, -50%, 0);
		//     transform: translate3d(-50%, -50%, 0);
		//     background-color: #fff;
		//     width: 85%;
		//     border-radius: 3px;
		//     font-size: 16px;
		//     -webkit-user-select: none;
		//     overflow: hidden;
		//     opacity: 1;
		//     backface-visibility: hidden;
		//   }
		//
		//   .msgbox-header{
		//     padding: 15px 20px 5px 10px;
		//     border-bottom: 1px solid #ddd;
		//   }
		//
		//   .msgbox-content {
		//     padding: 10px 20px;
		//     min-height: 36px;
		//     position: relative;
		//     border-bottom: 1px solid #ddd;
		//   }
		//
		//   .msgbox-close {
		//     display: inline-block;
		//     position: absolute;
		//     top: 14px;
		//     right: 15px;
		//     width: 20px;
		//     height: 20px;
		//     cursor: pointer;
		//     line-height: 20px;
		//     text-align: center;
		//   }
		//
		//   .msgbox-input > input {
		//     border: 1px solid #dedede;
		//     border-radius: 5px;
		//     padding: 4px 5px;
		//     width: 100%;
		//     -webkit-appearance: none;
		//     -moz-appearance: none;
		//     appearance: none;
		//     outline: none;
		//   }
		//
		//   .msgbox-errormsg {
		//     color: red;
		//     font-size: 12px;
		//     min-height: 16px;
		//   }
		//
		//   .msgbox-title {
		//     padding-left: 10px;
		//     font-size: 16px;
		//     font-weight: bold;
		//     color: #333;
		//     margin-bottom: 8px;
		//   }
		//
		//   .msgbox-status {
		//     float: left;
		//     width: 36px;
		//     height: 36px;
		//     font-size: 36px !important;
		//   }
		//
		//   .msgbox-status.icon-success {
		//     color: #94c852;
		//   }
		//
		//   .msgbox-status.icon-warning {
		//     color: #ff9c00;
		//   }
		//
		//   .msgbox-status.icon-error {
		//     color: #ff4248;
		//   }
		//
		//   .msgbox-message {
		//     color: #333;
		//     font-size: 16px;
		//     line-height: 36px;
		//     margin-left: 36px;
		//     margin-right: 36px;
		//     text-align: center;
		//   }
		//
		//   .msgbox-btns {
		//     display: flex;
		//     height: 40px;
		//     line-height: 40px;
		//     text-align: center;
		//     font-size: 16px;
		//   }
		//
		//   .msgbox-btn {
		//     display: block;
		//     background-color: #fff;
		//     border: 0;
		//     flex: 1;
		//     margin: 0;
		//     border-radius: 0;
		//   }
		//
		//   .msgbox-btn:active {
		//     background-color: #3492e9;
		//     color: #fff;
		//     outline: none;
		//   }
		//
		//   .msgbox-btn:focus {
		//     outline: none;
		//   }
		//
		//   .msgbox-confirm {
		//     width: 50%;
		//   }
		//
		//   .msgbox-cancel {
		//     width: 50%;
		//     border-right: 1px solid #ddd;
		//   }
		//
		//   .msgbox-confirm-highlight,
		//   .msgbox-cancel-highlight {
		//     font-weight: 800;
		//   }
		//
		//   .msgbox-btns-reverse {
		//     -webkit-box-direction: reverse;
		//   }
		//
		//   .msgbox-btns-reverse .msgbox-confirm {
		//     border-right: 1px solid #ddd;
		//   }
		//
		//   .msgbox-btns-reverse .msgbox-cancel {
		//     border-right: 0;
		//   }
		//
		//   .pop-bounce-transition {
		//     transition: .2s .1s;
		//   }
		//
		//   .pop-bounce-enter {
		//     opacity: 0;
		//     transform: translate3d(-50%, -50%, 0) scale(0.7);
		//   }
		//
		//   .pop-bounce-leave {
		//     opacity: 0;
		//     transform: translate3d(-50%, -50%, 0) scale(0.9);
		//   }
		// </style>
		// <style src="vue-popup/lib/popup.css"></style>
		//
		// <script type="text/ecmascript-6" lang="babel">
		var CONFIRM_TEXT = '确定';
		var CANCEL_TEXT = '取消';
	
		exports.default = {
		  mixins: [_vuePopup2.default],
	
		  props: {
		    modal: {
		      default: true
		    },
		    lockScroll: {
		      default: false
		    },
		    closeOnPressEscape: {
		      default: true
		    }
		  },
	
		  computed: {
		    confirmButtonClasses: function confirmButtonClasses() {
		      var classes = 'msgbox-btn msgbox-confirm ' + this.confirmButtonClass;
		      if (this.confirmButtonHighlight) {
		        classes += ' msgbox-confirm-highlight';
		      }
		      return classes;
		    },
		    cancelButtonClasses: function cancelButtonClasses() {
		      var classes = 'msgbox-btn msgbox-cancel ' + this.cancelButtonClass;
		      if (this.cancelButtonHighlight) {
		        classes += ' msgbox-cancel-highlight';
		      }
		      return classes;
		    }
		  },
	
		  methods: {
		    handleAction: function handleAction(action) {
		      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
		        return;
		      }
		      var callback = this.callback;
		      this.visible = false;
		      callback(action);
		    },
		    validate: function validate() {
		      if (this.$type === 'prompt') {
		        var inputPattern = this.inputPattern;
		        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
		          this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
		          return false;
		        }
		        var inputValidator = this.inputValidator;
		        if (typeof inputValidator === 'function') {
		          var validateResult = inputValidator(this.inputValue);
		          if (validateResult === false) {
		            this.editorErrorMessage = this.inputErrorMessage || '输入的数据不合法!';
		            return false;
		          }
		          if (typeof validateResult === 'string') {
		            this.editorErrorMessage = validateResult;
		            return false;
		          }
		        }
		      }
		      this.editorErrorMessage = '';
		      return true;
		    }
		  },
	
		  watch: {
		    inputValue: function inputValue() {
		      if (this.$type === 'prompt') {
		        this.validate();
		      }
		    },
		    visible: function visible(val) {
		      var _this = this;
	
		      if (val && this.$type === 'prompt') {
		        setTimeout(function () {
		          if (_this.$els.input) {
		            _this.$els.input.focus();
		          }
		        }, 500);
		      }
		    }
		  },
	
		  data: function data() {
		    return {
		      title: '',
		      message: '',
		      type: '',
		      showInput: false,
		      inputValue: null,
		      inputType: 'text',
		      inputPlaceholder: '',
		      inputPattern: null,
		      inputValidator: null,
		      inputErrorMessage: '',
		      showConfirmButton: true,
		      showCancelButton: false,
		      confirmButtonText: CONFIRM_TEXT,
		      cancelButtonText: CANCEL_TEXT,
		      confirmButtonPosition: 'right',
		      confirmButtonHighlight: false,
		      confirmButtonClass: '',
		      confirmButtonDisabled: false,
		      cancelButtonClass: '',
		      cancelButtonHighlight: false,
	
		      editorErrorMessage: null,
		      callback: null
		    };
		  }
		};
		// </script>
	
	/***/ },
	/* 202 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"msgbox-wrapper\">\n  <div class=\"msgbox\" v-if=\"rendered\" v-show=\"visible\" transition=\"pop-bounce\">\n    <div class=\"msgbox-header\" v-if=\"title !== ''\">\n      <div class=\"msgbox-title\">{{ title }}</div>\n      <!--<div class=\"msgbox-close d-icon icon-close\" @click=\"handleAction('close')\"></div>-->\n    </div>\n    <div class=\"msgbox-content\" v-if=\"message !== ''\">\n      <div class=\"msgbox-status d-icon {{ type ? 'icon-' + type : '' }}\"></div>\n      <div class=\"msgbox-message\"><p>{{ message }}</p></div>\n      <div class=\"msgbox-input\" v-show=\"showInput\">\n        <input :type=\"inputType\" v-model=\"inputValue\" :placeholder=\"inputPlaceholder\" v-el:input />\n        <div class=\"msgbox-errormsg\" :style=\"{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }\">{{editorErrorMessage}}</div>\n      </div>\n    </div>\n    <div class=\"msgbox-btns\" :class=\"{ 'msgbox-btns-reverse': confirmButtonPosition === 'left' }\">\n      <button class=\"{{ cancelButtonClasses }}\" v-show=\"showCancelButton\" @click=\"handleAction('cancel')\">{{ cancelButtonText }}</button>\n      <button class=\"{{ confirmButtonClasses }}\" v-show=\"showConfirmButton\" @click=\"handleAction('confirm')\">{{ confirmButtonText }}</button>\n    </div>\n  </div>\n</div>\n";
	
	/***/ },
	/* 203 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 204 */,
	/* 205 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(206);
	
	/***/ },
	/* 206 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _vueInfiniteScroll = __webpack_require__(207);
	
		__webpack_require__(150);
	
		_vueInfiniteScroll.infiniteScroll.name = 'infinite-scroll';
		_vueInfiniteScroll.infiniteScroll.install = _vueInfiniteScroll.install;
		module.exports = _vueInfiniteScroll.infiniteScroll;
	
	/***/ },
	/* 207 */
	/***/ function(module, exports, __webpack_require__) {
	
		(function (global, factory) {
		   true ? factory(exports) :
		  typeof define === 'function' && define.amd ? define(['exports'], factory) :
		  (factory((global.infiniteScroll = global.infiniteScroll || {})));
		}(this, function (exports) { 'use strict';
	
		  var throttle = function throttle(fn, delay) {
		    var now, lastExec, timer, context, args; //eslint-disable-line
	
		    var execute = function execute() {
		      fn.apply(context, args);
		      lastExec = now;
		    };
	
		    return function () {
		      context = this;
		      args = arguments;
	
		      now = Date.now();
	
		      if (timer) {
		        clearTimeout(timer);
		        timer = null;
		      }
	
		      if (lastExec) {
		        var diff = delay - (now - lastExec);
		        if (diff < 0) {
		          execute();
		        } else {
		          timer = setTimeout(function () {
		            execute();
		          }, diff);
		        }
		      } else {
		        execute();
		      }
		    };
		  };
	
		  var getScrollTop = function getScrollTop(element) {
		    if (element === window) {
		      return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
		    }
	
		    return element.scrollTop;
		  };
	
		  var getComputedStyle = document.defaultView.getComputedStyle;
	
		  var getScrollEventTarget = function getScrollEventTarget(element) {
		    var currentNode = element;
		    // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
		    while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
		      var overflowY = getComputedStyle(currentNode).overflowY;
		      if (overflowY === 'scroll' || overflowY === 'auto') {
		        return currentNode;
		      }
		      currentNode = currentNode.parentNode;
		    }
		    return window;
		  };
	
		  var getVisibleHeight = function getVisibleHeight(element) {
		    if (element === window) {
		      return document.documentElement.clientHeight;
		    }
	
		    return element.clientHeight;
		  };
	
		  var getElementTop = function getElementTop(element) {
		    if (element === window) {
		      return getScrollTop(window);
		    }
		    return element.getBoundingClientRect().top + getScrollTop(window);
		  };
	
		  var isAttached = function isAttached(element) {
		    var currentNode = element.parentNode;
		    while (currentNode) {
		      if (currentNode.tagName === 'HTML') {
		        return true;
		      }
		      if (currentNode.nodeType === 11) {
		        return false;
		      }
		      currentNode = currentNode.parentNode;
		    }
		    return false;
		  };
	
		  var infiniteScroll = {
		    doBind: function doBind() {
		      if (this.binded) return; // eslint-disable-line
		      this.binded = true;
	
		      var directive = this;
		      var element = directive.el;
	
		      directive.scrollEventTarget = getScrollEventTarget(element);
		      directive.scrollListener = throttle(directive.doCheck.bind(directive), 200);
		      directive.scrollEventTarget.addEventListener('scroll', directive.scrollListener);
	
		      var disabledExpr = element.getAttribute('infinite-scroll-disabled');
		      var disabled = false;
	
		      if (disabledExpr) {
		        this.vm.$watch(disabledExpr, function (value) {
		          directive.disabled = value;
		          if (!value && directive.immediateCheck) {
		            directive.doCheck();
		          }
		        });
		        disabled = Boolean(directive.vm.$get(disabledExpr));
		      }
		      directive.disabled = disabled;
	
		      var distanceExpr = element.getAttribute('infinite-scroll-distance');
		      var distance = 0;
		      if (distanceExpr) {
		        distance = Number(directive.vm.$get(distanceExpr));
		        if (isNaN(distance)) {
		          distance = 0;
		        }
		      }
		      directive.distance = distance;
	
		      var immediateCheckExpr = element.getAttribute('infinite-scroll-immediate-check');
		      var immediateCheck = true;
		      if (immediateCheckExpr) {
		        immediateCheck = Boolean(directive.vm.$get(immediateCheckExpr));
		      }
		      directive.immediateCheck = immediateCheck;
	
		      if (immediateCheck) {
		        directive.doCheck();
		      }
	
		      var eventName = element.getAttribute('infinite-scroll-listen-for-event');
		      if (eventName) {
		        directive.vm.$on(eventName, function () {
		          directive.doCheck();
		        });
		      }
		    },
	
		    doCheck: function doCheck(force) {
		      var scrollEventTarget = this.scrollEventTarget;
		      var element = this.el;
		      var distance = this.distance;
	
		      if (force !== true && this.disabled) return; //eslint-disable-line
		      var viewportScrollTop = getScrollTop(scrollEventTarget);
		      var viewportBottom = viewportScrollTop + getVisibleHeight(scrollEventTarget);
	
		      var shouldTrigger = false;
	
		      if (scrollEventTarget === element) {
		        shouldTrigger = scrollEventTarget.scrollHeight - viewportBottom <= distance;
		      } else {
		        var elementBottom = getElementTop(element) - getElementTop(scrollEventTarget) + element.offsetHeight + viewportScrollTop;
	
		        shouldTrigger = viewportBottom + distance >= elementBottom;
		      }
	
		      if (shouldTrigger && this.expression) {
		        this.vm.$get(this.expression);
		      }
		    },
	
		    bind: function bind() {
		      var directive = this;
		      var element = this.el;
	
		      directive.vm.$on('hook:ready', function () {
		        if (isAttached(element)) {
		          directive.doBind();
		        }
		      });
	
		      this.bindTryCount = 0;
	
		      var tryBind = function tryBind() {
		        if (directive.bindTryCount > 10) return; //eslint-disable-line
		        directive.bindTryCount++;
		        if (isAttached(element)) {
		          directive.doBind();
		        } else {
		          setTimeout(tryBind, 50);
		        }
		      };
	
		      tryBind();
		    },
	
		    unbind: function unbind() {
		      this.scrollEventTarget.removeEventListener('scroll', this.scrollListener);
		    }
		  };
	
		  if (window.Vue) {
		    window.infiniteScroll = infiniteScroll;
		    Vue.use(install);
		  }
	
		  function install(Vue) {
		    Vue.directive('infiniteScroll', infiniteScroll);
		  }
	
		  exports.install = install;
		  exports.infiniteScroll = infiniteScroll;
	
		}));
	
	/***/ },
	/* 208 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(209);
	
	/***/ },
	/* 209 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _vueLazyload = __webpack_require__(210);
	
		var _vueLazyload2 = _interopRequireDefault(_vueLazyload);
	
		__webpack_require__(150);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		_vueLazyload2.default.name = 'lazy';
		module.exports = _vueLazyload2.default;
	
	/***/ },
	/* 210 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var Promise = __webpack_require__(211).Promise;
	
		if (!Array.prototype.find) {
		    Array.prototype.find = function (predicate) {
		        'use strict';
	
		        if (this == null) {
		            throw new TypeError('Array.prototype.find called on null or undefined');
		        }
		        if (typeof predicate !== 'function') {
		            throw new TypeError('predicate must be a function');
		        }
		        var list = Object(this);
		        var length = list.length >>> 0;
		        var thisArg = arguments[1];
		        var value;
	
		        for (var i = 0; i < length; i++) {
		            value = list[i];
		            if (predicate.call(thisArg, value, i, list)) {
		                return value;
		            }
		        }
		        return undefined;
		    };
		}
	
		exports.install = function (Vue, Options) {
		    var isVueNext = Vue.version.split('.')[0] === '2';
		    var DEFAULT_PRE = 1.3;
		    var DEFAULT_URL = 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXs7Oxc9QatAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';
		    if (!Options) {
		        Options = {
		            preLoad: DEFAULT_PRE,
		            error: DEFAULT_URL,
		            loading: DEFAULT_URL,
		            try: 3
		        };
		    }
		    var Init = {
		        preLoad: Options.preLoad || DEFAULT_PRE,
		        error: Options.error ? Options.error : DEFAULT_URL,
		        loading: Options.loading ? Options.loading : DEFAULT_URL,
		        hasbind: false,
		        try: Options.try ? Options.try : 1
		    };
	
		    var Listeners = [];
		    var Loaded = [];
	
		    var throttle = function throttle(action, delay) {
		        var timeout = null;
		        var lastRun = 0;
		        return function () {
		            if (timeout) {
		                return;
		            }
		            var elapsed = +new Date() - lastRun;
		            var context = this;
		            var args = arguments;
		            var runCallback = function runCallback() {
		                lastRun = +new Date();
		                timeout = false;
		                action.apply(context, args);
		            };
	
		            if (elapsed >= delay) {
		                runCallback();
		            } else {
		                timeout = setTimeout(runCallback, delay);
		            }
		        };
		    };
	
		    var _ = {
		        on: function on(el, type, func) {
		            el.addEventListener(type, func);
		        },
		        off: function off(el, type, func) {
		            el.removeEventListener(type, func);
		        }
		    };
	
		    var lazyLoadHandler = throttle(function () {
		        for (var i = 0, len = Listeners.length; i < len; ++i) {
		            checkCanShow(Listeners[i]);
		        }
		    }, 300);
	
		    var onListen = function onListen(el, start) {
		        if (start) {
		            _.on(el, 'scroll', lazyLoadHandler);
		            _.on(el, 'wheel', lazyLoadHandler);
		            _.on(el, 'mousewheel', lazyLoadHandler);
		            _.on(el, 'resize', lazyLoadHandler);
		            _.on(el, 'animationend', lazyLoadHandler);
		            _.on(el, 'transitionend', lazyLoadHandler);
		        } else {
		            Init.hasbind = false;
		            _.off(el, 'scroll', lazyLoadHandler);
		            _.off(el, 'wheel', lazyLoadHandler);
		            _.off(el, 'mousewheel', lazyLoadHandler);
		            _.off(el, 'resize', lazyLoadHandler);
		            _.off(el, 'animationend', lazyLoadHandler);
		            _.off(el, 'transitionend', lazyLoadHandler);
		        }
		    };
	
		    var checkCanShow = function checkCanShow(listener) {
		        if (Loaded.indexOf(listener.src) > -1) return setElRender(listener.el, listener.bindType, listener.src, 'loaded');
		        var rect = listener.el.getBoundingClientRect();
	
		        if (rect.top < window.innerHeight * Init.preLoad && rect.bottom > 0) {
		            render(listener);
		        }
		    };
	
		    var setElRender = function setElRender(el, bindType, src, state) {
		        if (!bindType) {
		            el.setAttribute('src', src);
		        } else {
		            el.setAttribute('style', bindType + ': url(' + src + ')');
		        }
		        el.setAttribute('lazy', state);
		    };
	
		    var render = function render(item) {
		        if (item.try >= Init.try) {
		            return false;
		        }
		        item.try++;
	
		        loadImageAsync(item).then(function (url) {
		            var index = Listeners.indexOf(item);
		            if (index !== -1) {
		                Listeners.splice(index, 1);
		            }
		            setElRender(item.el, item.bindType, item.src, 'loaded');
		            Loaded.push(item.src);
		        }).catch(function (error) {
		            setElRender(item.el, item.bindType, Init.error, 'error');
		        });
		    };
	
		    var loadImageAsync = function loadImageAsync(item) {
		        return new Promise(function (resolve, reject) {
		            var image = new Image();
		            image.src = item.src;
	
		            image.onload = function () {
		                resolve(item.src);
		            };
	
		            image.onerror = function () {
		                reject();
		            };
		        });
		    };
	
		    var componentWillUnmount = function componentWillUnmount(el, binding, vnode, OldVnode) {
		        if (!el) return;
	
		        for (var i = 0, len = Listeners.length; i < len; i++) {
		            if (Listeners[i] && Listeners[i].el === el) {
		                Listeners.splice(i, 1);
		            }
		        }
	
		        if (Init.hasbind && Listeners.length == 0) {
		            onListen(window, false);
		        }
		    };
	
		    var addListener = function addListener(el, binding, vnode) {
		        if (el.getAttribute('lazy') === 'loaded') return;
		        var hasIt = Listeners.find(function (item) {
		            return item.el === el;
		        });
		        if (hasIt) {
		            return Vue.nextTick(function () {
		                setTimeout(function () {
		                    lazyLoadHandler();
		                }, 0);
		            });
		        }
	
		        var parentEl = null;
	
		        if (binding.modifiers) {
		            parentEl = window.document.getElementById(Object.keys(binding.modifiers)[0]);
		        }
	
		        setElRender(el, binding.arg, Init.loading, 'loading');
	
		        Vue.nextTick(function () {
		            Listeners.push({
		                bindType: binding.arg,
		                try: 0,
		                parentEl: parentEl,
		                el: el,
		                src: binding.value
		            });
		            lazyLoadHandler();
		            if (Listeners.length > 0 && !Init.hasbind) {
		                Init.hasbind = true;
		                onListen(window, true);
		            }
		            if (parentEl) {
		                onListen(parentEl, true);
		            }
		        });
		    };
	
		    if (isVueNext) {
		        Vue.directive('lazy', {
		            bind: addListener,
		            update: addListener,
		            componentUpdated: lazyLoadHandler,
		            unbind: componentWillUnmount
		        });
		    } else {
		        Vue.directive('lazy', {
		            bind: function bind() {},
		            update: function update(newValue, oldValue) {
		                addListener(this.el, {
		                    modifiers: this.modifiers,
		                    arg: this.arg,
		                    value: newValue,
		                    oldValue: oldValue
		                });
		            },
		            unbind: function unbind() {
		                componentWillUnmount(this.el);
		            }
		        });
		    }
		};
	
	
	/***/ },
	/* 211 */
	/***/ function(module, exports, __webpack_require__) {
	
		var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   3.3.1
		 */
	
		(function (global, factory) {
		     true ? module.exports = factory() :
		    typeof define === 'function' && define.amd ? define(factory) :
		    (global.ES6Promise = factory());
		}(this, (function () { 'use strict';
	
		function objectOrFunction(x) {
		  return typeof x === 'function' || typeof x === 'object' && x !== null;
		}
	
		function isFunction(x) {
		  return typeof x === 'function';
		}
	
		var _isArray = undefined;
		if (!Array.isArray) {
		  _isArray = function (x) {
		    return Object.prototype.toString.call(x) === '[object Array]';
		  };
		} else {
		  _isArray = Array.isArray;
		}
	
		var isArray = _isArray;
	
		var len = 0;
		var vertxNext = undefined;
		var customSchedulerFn = undefined;
	
		var asap = function asap(callback, arg) {
		  queue[len] = callback;
		  queue[len + 1] = arg;
		  len += 2;
		  if (len === 2) {
		    // If len is 2, that means that we need to schedule an async flush.
		    // If additional callbacks are queued before the queue is flushed, they
		    // will be processed by this flush that we are scheduling.
		    if (customSchedulerFn) {
		      customSchedulerFn(flush);
		    } else {
		      scheduleFlush();
		    }
		  }
		};
	
		function setScheduler(scheduleFn) {
		  customSchedulerFn = scheduleFn;
		}
	
		function setAsap(asapFn) {
		  asap = asapFn;
		}
	
		var browserWindow = typeof window !== 'undefined' ? window : undefined;
		var browserGlobal = browserWindow || {};
		var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
		var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
		// test for web worker but not in IE10
		var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
		// node
		function useNextTick() {
		  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
		  // see https://github.com/cujojs/when/issues/410 for details
		  return function () {
		    return process.nextTick(flush);
		  };
		}
	
		// vertx
		function useVertxTimer() {
		  return function () {
		    vertxNext(flush);
		  };
		}
	
		function useMutationObserver() {
		  var iterations = 0;
		  var observer = new BrowserMutationObserver(flush);
		  var node = document.createTextNode('');
		  observer.observe(node, { characterData: true });
	
		  return function () {
		    node.data = iterations = ++iterations % 2;
		  };
		}
	
		// web worker
		function useMessageChannel() {
		  var channel = new MessageChannel();
		  channel.port1.onmessage = flush;
		  return function () {
		    return channel.port2.postMessage(0);
		  };
		}
	
		function useSetTimeout() {
		  // Store setTimeout reference so es6-promise will be unaffected by
		  // other code modifying setTimeout (like sinon.useFakeTimers())
		  var globalSetTimeout = setTimeout;
		  return function () {
		    return globalSetTimeout(flush, 1);
		  };
		}
	
		var queue = new Array(1000);
		function flush() {
		  for (var i = 0; i < len; i += 2) {
		    var callback = queue[i];
		    var arg = queue[i + 1];
	
		    callback(arg);
	
		    queue[i] = undefined;
		    queue[i + 1] = undefined;
		  }
	
		  len = 0;
		}
	
		function attemptVertx() {
		  try {
		    var r = require;
		    var vertx = __webpack_require__(213);
		    vertxNext = vertx.runOnLoop || vertx.runOnContext;
		    return useVertxTimer();
		  } catch (e) {
		    return useSetTimeout();
		  }
		}
	
		var scheduleFlush = undefined;
		// Decide what async method to use to triggering processing of queued callbacks:
		if (isNode) {
		  scheduleFlush = useNextTick();
		} else if (BrowserMutationObserver) {
		  scheduleFlush = useMutationObserver();
		} else if (isWorker) {
		  scheduleFlush = useMessageChannel();
		} else if (browserWindow === undefined && "function" === 'function') {
		  scheduleFlush = attemptVertx();
		} else {
		  scheduleFlush = useSetTimeout();
		}
	
		function then(onFulfillment, onRejection) {
		  var _arguments = arguments;
	
		  var parent = this;
	
		  var child = new this.constructor(noop);
	
		  if (child[PROMISE_ID] === undefined) {
		    makePromise(child);
		  }
	
		  var _state = parent._state;
	
		  if (_state) {
		    (function () {
		      var callback = _arguments[_state - 1];
		      asap(function () {
		        return invokeCallback(_state, child, callback, parent._result);
		      });
		    })();
		  } else {
		    subscribe(parent, child, onFulfillment, onRejection);
		  }
	
		  return child;
		}
	
		/**
		  `Promise.resolve` returns a promise that will become resolved with the
		  passed `value`. It is shorthand for the following:
	
		  ```javascript
		  let promise = new Promise(function(resolve, reject){
		    resolve(1);
		  });
	
		  promise.then(function(value){
		    // value === 1
		  });
		  ```
	
		  Instead of writing the above, your code now simply becomes the following:
	
		  ```javascript
		  let promise = Promise.resolve(1);
	
		  promise.then(function(value){
		    // value === 1
		  });
		  ```
	
		  @method resolve
		  @static
		  @param {Any} value value that the returned promise will be resolved with
		  Useful for tooling.
		  @return {Promise} a promise that will become fulfilled with the given
		  `value`
		*/
		function resolve(object) {
		  /*jshint validthis:true */
		  var Constructor = this;
	
		  if (object && typeof object === 'object' && object.constructor === Constructor) {
		    return object;
		  }
	
		  var promise = new Constructor(noop);
		  _resolve(promise, object);
		  return promise;
		}
	
		var PROMISE_ID = Math.random().toString(36).substring(16);
	
		function noop() {}
	
		var PENDING = void 0;
		var FULFILLED = 1;
		var REJECTED = 2;
	
		var GET_THEN_ERROR = new ErrorObject();
	
		function selfFulfillment() {
		  return new TypeError("You cannot resolve a promise with itself");
		}
	
		function cannotReturnOwn() {
		  return new TypeError('A promises callback cannot return that same promise.');
		}
	
		function getThen(promise) {
		  try {
		    return promise.then;
		  } catch (error) {
		    GET_THEN_ERROR.error = error;
		    return GET_THEN_ERROR;
		  }
		}
	
		function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
		  try {
		    then.call(value, fulfillmentHandler, rejectionHandler);
		  } catch (e) {
		    return e;
		  }
		}
	
		function handleForeignThenable(promise, thenable, then) {
		  asap(function (promise) {
		    var sealed = false;
		    var error = tryThen(then, thenable, function (value) {
		      if (sealed) {
		        return;
		      }
		      sealed = true;
		      if (thenable !== value) {
		        _resolve(promise, value);
		      } else {
		        fulfill(promise, value);
		      }
		    }, function (reason) {
		      if (sealed) {
		        return;
		      }
		      sealed = true;
	
		      _reject(promise, reason);
		    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
		    if (!sealed && error) {
		      sealed = true;
		      _reject(promise, error);
		    }
		  }, promise);
		}
	
		function handleOwnThenable(promise, thenable) {
		  if (thenable._state === FULFILLED) {
		    fulfill(promise, thenable._result);
		  } else if (thenable._state === REJECTED) {
		    _reject(promise, thenable._result);
		  } else {
		    subscribe(thenable, undefined, function (value) {
		      return _resolve(promise, value);
		    }, function (reason) {
		      return _reject(promise, reason);
		    });
		  }
		}
	
		function handleMaybeThenable(promise, maybeThenable, then$$) {
		  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
		    handleOwnThenable(promise, maybeThenable);
		  } else {
		    if (then$$ === GET_THEN_ERROR) {
		      _reject(promise, GET_THEN_ERROR.error);
		    } else if (then$$ === undefined) {
		      fulfill(promise, maybeThenable);
		    } else if (isFunction(then$$)) {
		      handleForeignThenable(promise, maybeThenable, then$$);
		    } else {
		      fulfill(promise, maybeThenable);
		    }
		  }
		}
	
		function _resolve(promise, value) {
		  if (promise === value) {
		    _reject(promise, selfFulfillment());
		  } else if (objectOrFunction(value)) {
		    handleMaybeThenable(promise, value, getThen(value));
		  } else {
		    fulfill(promise, value);
		  }
		}
	
		function publishRejection(promise) {
		  if (promise._onerror) {
		    promise._onerror(promise._result);
		  }
	
		  publish(promise);
		}
	
		function fulfill(promise, value) {
		  if (promise._state !== PENDING) {
		    return;
		  }
	
		  promise._result = value;
		  promise._state = FULFILLED;
	
		  if (promise._subscribers.length !== 0) {
		    asap(publish, promise);
		  }
		}
	
		function _reject(promise, reason) {
		  if (promise._state !== PENDING) {
		    return;
		  }
		  promise._state = REJECTED;
		  promise._result = reason;
	
		  asap(publishRejection, promise);
		}
	
		function subscribe(parent, child, onFulfillment, onRejection) {
		  var _subscribers = parent._subscribers;
		  var length = _subscribers.length;
	
		  parent._onerror = null;
	
		  _subscribers[length] = child;
		  _subscribers[length + FULFILLED] = onFulfillment;
		  _subscribers[length + REJECTED] = onRejection;
	
		  if (length === 0 && parent._state) {
		    asap(publish, parent);
		  }
		}
	
		function publish(promise) {
		  var subscribers = promise._subscribers;
		  var settled = promise._state;
	
		  if (subscribers.length === 0) {
		    return;
		  }
	
		  var child = undefined,
		      callback = undefined,
		      detail = promise._result;
	
		  for (var i = 0; i < subscribers.length; i += 3) {
		    child = subscribers[i];
		    callback = subscribers[i + settled];
	
		    if (child) {
		      invokeCallback(settled, child, callback, detail);
		    } else {
		      callback(detail);
		    }
		  }
	
		  promise._subscribers.length = 0;
		}
	
		function ErrorObject() {
		  this.error = null;
		}
	
		var TRY_CATCH_ERROR = new ErrorObject();
	
		function tryCatch(callback, detail) {
		  try {
		    return callback(detail);
		  } catch (e) {
		    TRY_CATCH_ERROR.error = e;
		    return TRY_CATCH_ERROR;
		  }
		}
	
		function invokeCallback(settled, promise, callback, detail) {
		  var hasCallback = isFunction(callback),
		      value = undefined,
		      error = undefined,
		      succeeded = undefined,
		      failed = undefined;
	
		  if (hasCallback) {
		    value = tryCatch(callback, detail);
	
		    if (value === TRY_CATCH_ERROR) {
		      failed = true;
		      error = value.error;
		      value = null;
		    } else {
		      succeeded = true;
		    }
	
		    if (promise === value) {
		      _reject(promise, cannotReturnOwn());
		      return;
		    }
		  } else {
		    value = detail;
		    succeeded = true;
		  }
	
		  if (promise._state !== PENDING) {
		    // noop
		  } else if (hasCallback && succeeded) {
		      _resolve(promise, value);
		    } else if (failed) {
		      _reject(promise, error);
		    } else if (settled === FULFILLED) {
		      fulfill(promise, value);
		    } else if (settled === REJECTED) {
		      _reject(promise, value);
		    }
		}
	
		function initializePromise(promise, resolver) {
		  try {
		    resolver(function resolvePromise(value) {
		      _resolve(promise, value);
		    }, function rejectPromise(reason) {
		      _reject(promise, reason);
		    });
		  } catch (e) {
		    _reject(promise, e);
		  }
		}
	
		var id = 0;
		function nextId() {
		  return id++;
		}
	
		function makePromise(promise) {
		  promise[PROMISE_ID] = id++;
		  promise._state = undefined;
		  promise._result = undefined;
		  promise._subscribers = [];
		}
	
		function Enumerator(Constructor, input) {
		  this._instanceConstructor = Constructor;
		  this.promise = new Constructor(noop);
	
		  if (!this.promise[PROMISE_ID]) {
		    makePromise(this.promise);
		  }
	
		  if (isArray(input)) {
		    this._input = input;
		    this.length = input.length;
		    this._remaining = input.length;
	
		    this._result = new Array(this.length);
	
		    if (this.length === 0) {
		      fulfill(this.promise, this._result);
		    } else {
		      this.length = this.length || 0;
		      this._enumerate();
		      if (this._remaining === 0) {
		        fulfill(this.promise, this._result);
		      }
		    }
		  } else {
		    _reject(this.promise, validationError());
		  }
		}
	
		function validationError() {
		  return new Error('Array Methods must be provided an Array');
		};
	
		Enumerator.prototype._enumerate = function () {
		  var length = this.length;
		  var _input = this._input;
	
		  for (var i = 0; this._state === PENDING && i < length; i++) {
		    this._eachEntry(_input[i], i);
		  }
		};
	
		Enumerator.prototype._eachEntry = function (entry, i) {
		  var c = this._instanceConstructor;
		  var resolve$$ = c.resolve;
	
		  if (resolve$$ === resolve) {
		    var _then = getThen(entry);
	
		    if (_then === then && entry._state !== PENDING) {
		      this._settledAt(entry._state, i, entry._result);
		    } else if (typeof _then !== 'function') {
		      this._remaining--;
		      this._result[i] = entry;
		    } else if (c === Promise) {
		      var promise = new c(noop);
		      handleMaybeThenable(promise, entry, _then);
		      this._willSettleAt(promise, i);
		    } else {
		      this._willSettleAt(new c(function (resolve$$) {
		        return resolve$$(entry);
		      }), i);
		    }
		  } else {
		    this._willSettleAt(resolve$$(entry), i);
		  }
		};
	
		Enumerator.prototype._settledAt = function (state, i, value) {
		  var promise = this.promise;
	
		  if (promise._state === PENDING) {
		    this._remaining--;
	
		    if (state === REJECTED) {
		      _reject(promise, value);
		    } else {
		      this._result[i] = value;
		    }
		  }
	
		  if (this._remaining === 0) {
		    fulfill(promise, this._result);
		  }
		};
	
		Enumerator.prototype._willSettleAt = function (promise, i) {
		  var enumerator = this;
	
		  subscribe(promise, undefined, function (value) {
		    return enumerator._settledAt(FULFILLED, i, value);
		  }, function (reason) {
		    return enumerator._settledAt(REJECTED, i, reason);
		  });
		};
	
		/**
		  `Promise.all` accepts an array of promises, and returns a new promise which
		  is fulfilled with an array of fulfillment values for the passed promises, or
		  rejected with the reason of the first passed promise to be rejected. It casts all
		  elements of the passed iterable to promises as it runs this algorithm.
	
		  Example:
	
		  ```javascript
		  let promise1 = resolve(1);
		  let promise2 = resolve(2);
		  let promise3 = resolve(3);
		  let promises = [ promise1, promise2, promise3 ];
	
		  Promise.all(promises).then(function(array){
		    // The array here would be [ 1, 2, 3 ];
		  });
		  ```
	
		  If any of the `promises` given to `all` are rejected, the first promise
		  that is rejected will be given as an argument to the returned promises's
		  rejection handler. For example:
	
		  Example:
	
		  ```javascript
		  let promise1 = resolve(1);
		  let promise2 = reject(new Error("2"));
		  let promise3 = reject(new Error("3"));
		  let promises = [ promise1, promise2, promise3 ];
	
		  Promise.all(promises).then(function(array){
		    // Code here never runs because there are rejected promises!
		  }, function(error) {
		    // error.message === "2"
		  });
		  ```
	
		  @method all
		  @static
		  @param {Array} entries array of promises
		  @param {String} label optional string for labeling the promise.
		  Useful for tooling.
		  @return {Promise} promise that is fulfilled when all `promises` have been
		  fulfilled, or rejected if any of them become rejected.
		  @static
		*/
		function all(entries) {
		  return new Enumerator(this, entries).promise;
		}
	
		/**
		  `Promise.race` returns a new promise which is settled in the same way as the
		  first passed promise to settle.
	
		  Example:
	
		  ```javascript
		  let promise1 = new Promise(function(resolve, reject){
		    setTimeout(function(){
		      resolve('promise 1');
		    }, 200);
		  });
	
		  let promise2 = new Promise(function(resolve, reject){
		    setTimeout(function(){
		      resolve('promise 2');
		    }, 100);
		  });
	
		  Promise.race([promise1, promise2]).then(function(result){
		    // result === 'promise 2' because it was resolved before promise1
		    // was resolved.
		  });
		  ```
	
		  `Promise.race` is deterministic in that only the state of the first
		  settled promise matters. For example, even if other promises given to the
		  `promises` array argument are resolved, but the first settled promise has
		  become rejected before the other promises became fulfilled, the returned
		  promise will become rejected:
	
		  ```javascript
		  let promise1 = new Promise(function(resolve, reject){
		    setTimeout(function(){
		      resolve('promise 1');
		    }, 200);
		  });
	
		  let promise2 = new Promise(function(resolve, reject){
		    setTimeout(function(){
		      reject(new Error('promise 2'));
		    }, 100);
		  });
	
		  Promise.race([promise1, promise2]).then(function(result){
		    // Code here never runs
		  }, function(reason){
		    // reason.message === 'promise 2' because promise 2 became rejected before
		    // promise 1 became fulfilled
		  });
		  ```
	
		  An example real-world use case is implementing timeouts:
	
		  ```javascript
		  Promise.race([ajax('foo.json'), timeout(5000)])
		  ```
	
		  @method race
		  @static
		  @param {Array} promises array of promises to observe
		  Useful for tooling.
		  @return {Promise} a promise which settles in the same way as the first passed
		  promise to settle.
		*/
		function race(entries) {
		  /*jshint validthis:true */
		  var Constructor = this;
	
		  if (!isArray(entries)) {
		    return new Constructor(function (_, reject) {
		      return reject(new TypeError('You must pass an array to race.'));
		    });
		  } else {
		    return new Constructor(function (resolve, reject) {
		      var length = entries.length;
		      for (var i = 0; i < length; i++) {
		        Constructor.resolve(entries[i]).then(resolve, reject);
		      }
		    });
		  }
		}
	
		/**
		  `Promise.reject` returns a promise rejected with the passed `reason`.
		  It is shorthand for the following:
	
		  ```javascript
		  let promise = new Promise(function(resolve, reject){
		    reject(new Error('WHOOPS'));
		  });
	
		  promise.then(function(value){
		    // Code here doesn't run because the promise is rejected!
		  }, function(reason){
		    // reason.message === 'WHOOPS'
		  });
		  ```
	
		  Instead of writing the above, your code now simply becomes the following:
	
		  ```javascript
		  let promise = Promise.reject(new Error('WHOOPS'));
	
		  promise.then(function(value){
		    // Code here doesn't run because the promise is rejected!
		  }, function(reason){
		    // reason.message === 'WHOOPS'
		  });
		  ```
	
		  @method reject
		  @static
		  @param {Any} reason value that the returned promise will be rejected with.
		  Useful for tooling.
		  @return {Promise} a promise rejected with the given `reason`.
		*/
		function reject(reason) {
		  /*jshint validthis:true */
		  var Constructor = this;
		  var promise = new Constructor(noop);
		  _reject(promise, reason);
		  return promise;
		}
	
		function needsResolver() {
		  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
		}
	
		function needsNew() {
		  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
		}
	
		/**
		  Promise objects represent the eventual result of an asynchronous operation. The
		  primary way of interacting with a promise is through its `then` method, which
		  registers callbacks to receive either a promise's eventual value or the reason
		  why the promise cannot be fulfilled.
	
		  Terminology
		  -----------
	
		  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
		  - `thenable` is an object or function that defines a `then` method.
		  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
		  - `exception` is a value that is thrown using the throw statement.
		  - `reason` is a value that indicates why a promise was rejected.
		  - `settled` the final resting state of a promise, fulfilled or rejected.
	
		  A promise can be in one of three states: pending, fulfilled, or rejected.
	
		  Promises that are fulfilled have a fulfillment value and are in the fulfilled
		  state.  Promises that are rejected have a rejection reason and are in the
		  rejected state.  A fulfillment value is never a thenable.
	
		  Promises can also be said to *resolve* a value.  If this value is also a
		  promise, then the original promise's settled state will match the value's
		  settled state.  So a promise that *resolves* a promise that rejects will
		  itself reject, and a promise that *resolves* a promise that fulfills will
		  itself fulfill.
	
	
		  Basic Usage:
		  ------------
	
		  ```js
		  let promise = new Promise(function(resolve, reject) {
		    // on success
		    resolve(value);
	
		    // on failure
		    reject(reason);
		  });
	
		  promise.then(function(value) {
		    // on fulfillment
		  }, function(reason) {
		    // on rejection
		  });
		  ```
	
		  Advanced Usage:
		  ---------------
	
		  Promises shine when abstracting away asynchronous interactions such as
		  `XMLHttpRequest`s.
	
		  ```js
		  function getJSON(url) {
		    return new Promise(function(resolve, reject){
		      let xhr = new XMLHttpRequest();
	
		      xhr.open('GET', url);
		      xhr.onreadystatechange = handler;
		      xhr.responseType = 'json';
		      xhr.setRequestHeader('Accept', 'application/json');
		      xhr.send();
	
		      function handler() {
		        if (this.readyState === this.DONE) {
		          if (this.status === 200) {
		            resolve(this.response);
		          } else {
		            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
		          }
		        }
		      };
		    });
		  }
	
		  getJSON('/posts.json').then(function(json) {
		    // on fulfillment
		  }, function(reason) {
		    // on rejection
		  });
		  ```
	
		  Unlike callbacks, promises are great composable primitives.
	
		  ```js
		  Promise.all([
		    getJSON('/posts'),
		    getJSON('/comments')
		  ]).then(function(values){
		    values[0] // => postsJSON
		    values[1] // => commentsJSON
	
		    return values;
		  });
		  ```
	
		  @class Promise
		  @param {function} resolver
		  Useful for tooling.
		  @constructor
		*/
		function Promise(resolver) {
		  this[PROMISE_ID] = nextId();
		  this._result = this._state = undefined;
		  this._subscribers = [];
	
		  if (noop !== resolver) {
		    typeof resolver !== 'function' && needsResolver();
		    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
		  }
		}
	
		Promise.all = all;
		Promise.race = race;
		Promise.resolve = resolve;
		Promise.reject = reject;
		Promise._setScheduler = setScheduler;
		Promise._setAsap = setAsap;
		Promise._asap = asap;
	
		Promise.prototype = {
		  constructor: Promise,
	
		  /**
		    The primary way of interacting with a promise is through its `then` method,
		    which registers callbacks to receive either a promise's eventual value or the
		    reason why the promise cannot be fulfilled.
		  
		    ```js
		    findUser().then(function(user){
		      // user is available
		    }, function(reason){
		      // user is unavailable, and you are given the reason why
		    });
		    ```
		  
		    Chaining
		    --------
		  
		    The return value of `then` is itself a promise.  This second, 'downstream'
		    promise is resolved with the return value of the first promise's fulfillment
		    or rejection handler, or rejected if the handler throws an exception.
		  
		    ```js
		    findUser().then(function (user) {
		      return user.name;
		    }, function (reason) {
		      return 'default name';
		    }).then(function (userName) {
		      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
		      // will be `'default name'`
		    });
		  
		    findUser().then(function (user) {
		      throw new Error('Found user, but still unhappy');
		    }, function (reason) {
		      throw new Error('`findUser` rejected and we're unhappy');
		    }).then(function (value) {
		      // never reached
		    }, function (reason) {
		      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
		      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
		    });
		    ```
		    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
		  
		    ```js
		    findUser().then(function (user) {
		      throw new PedagogicalException('Upstream error');
		    }).then(function (value) {
		      // never reached
		    }).then(function (value) {
		      // never reached
		    }, function (reason) {
		      // The `PedgagocialException` is propagated all the way down to here
		    });
		    ```
		  
		    Assimilation
		    ------------
		  
		    Sometimes the value you want to propagate to a downstream promise can only be
		    retrieved asynchronously. This can be achieved by returning a promise in the
		    fulfillment or rejection handler. The downstream promise will then be pending
		    until the returned promise is settled. This is called *assimilation*.
		  
		    ```js
		    findUser().then(function (user) {
		      return findCommentsByAuthor(user);
		    }).then(function (comments) {
		      // The user's comments are now available
		    });
		    ```
		  
		    If the assimliated promise rejects, then the downstream promise will also reject.
		  
		    ```js
		    findUser().then(function (user) {
		      return findCommentsByAuthor(user);
		    }).then(function (comments) {
		      // If `findCommentsByAuthor` fulfills, we'll have the value here
		    }, function (reason) {
		      // If `findCommentsByAuthor` rejects, we'll have the reason here
		    });
		    ```
		  
		    Simple Example
		    --------------
		  
		    Synchronous Example
		  
		    ```javascript
		    let result;
		  
		    try {
		      result = findResult();
		      // success
		    } catch(reason) {
		      // failure
		    }
		    ```
		  
		    Errback Example
		  
		    ```js
		    findResult(function(result, err){
		      if (err) {
		        // failure
		      } else {
		        // success
		      }
		    });
		    ```
		  
		    Promise Example;
		  
		    ```javascript
		    findResult().then(function(result){
		      // success
		    }, function(reason){
		      // failure
		    });
		    ```
		  
		    Advanced Example
		    --------------
		  
		    Synchronous Example
		  
		    ```javascript
		    let author, books;
		  
		    try {
		      author = findAuthor();
		      books  = findBooksByAuthor(author);
		      // success
		    } catch(reason) {
		      // failure
		    }
		    ```
		  
		    Errback Example
		  
		    ```js
		  
		    function foundBooks(books) {
		  
		    }
		  
		    function failure(reason) {
		  
		    }
		  
		    findAuthor(function(author, err){
		      if (err) {
		        failure(err);
		        // failure
		      } else {
		        try {
		          findBoooksByAuthor(author, function(books, err) {
		            if (err) {
		              failure(err);
		            } else {
		              try {
		                foundBooks(books);
		              } catch(reason) {
		                failure(reason);
		              }
		            }
		          });
		        } catch(error) {
		          failure(err);
		        }
		        // success
		      }
		    });
		    ```
		  
		    Promise Example;
		  
		    ```javascript
		    findAuthor().
		      then(findBooksByAuthor).
		      then(function(books){
		        // found books
		    }).catch(function(reason){
		      // something went wrong
		    });
		    ```
		  
		    @method then
		    @param {Function} onFulfilled
		    @param {Function} onRejected
		    Useful for tooling.
		    @return {Promise}
		  */
		  then: then,
	
		  /**
		    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
		    as the catch block of a try/catch statement.
		  
		    ```js
		    function findAuthor(){
		      throw new Error('couldn't find that author');
		    }
		  
		    // synchronous
		    try {
		      findAuthor();
		    } catch(reason) {
		      // something went wrong
		    }
		  
		    // async with promises
		    findAuthor().catch(function(reason){
		      // something went wrong
		    });
		    ```
		  
		    @method catch
		    @param {Function} onRejection
		    Useful for tooling.
		    @return {Promise}
		  */
		  'catch': function _catch(onRejection) {
		    return this.then(null, onRejection);
		  }
		};
	
		function polyfill() {
		    var local = undefined;
	
		    if (typeof global !== 'undefined') {
		        local = global;
		    } else if (typeof self !== 'undefined') {
		        local = self;
		    } else {
		        try {
		            local = Function('return this')();
		        } catch (e) {
		            throw new Error('polyfill failed because global object is unavailable in this environment');
		        }
		    }
	
		    var P = local.Promise;
	
		    if (P) {
		        var promiseToString = null;
		        try {
		            promiseToString = Object.prototype.toString.call(P.resolve());
		        } catch (e) {
		            // silently ignored
		        }
	
		        if (promiseToString === '[object Promise]' && !P.cast) {
		            return;
		        }
		    }
	
		    local.Promise = Promise;
		}
	
		polyfill();
		// Strange compat..
		Promise.polyfill = polyfill;
		Promise.Promise = Promise;
	
		return Promise;
	
		})));
		//# sourceMappingURL=es6-promise.map
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(212), (function() { return this; }())))
	
	/***/ },
	/* 212 */
	/***/ function(module, exports) {
	
		// shim for using process in browser
		var process = module.exports = {};
	
		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.
	
		var cachedSetTimeout;
		var cachedClearTimeout;
	
		function defaultSetTimout() {
		    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout () {
		    throw new Error('clearTimeout has not been defined');
		}
		(function () {
		    try {
		        if (typeof setTimeout === 'function') {
		            cachedSetTimeout = setTimeout;
		        } else {
		            cachedSetTimeout = defaultSetTimout;
		        }
		    } catch (e) {
		        cachedSetTimeout = defaultSetTimout;
		    }
		    try {
		        if (typeof clearTimeout === 'function') {
		            cachedClearTimeout = clearTimeout;
		        } else {
		            cachedClearTimeout = defaultClearTimeout;
		        }
		    } catch (e) {
		        cachedClearTimeout = defaultClearTimeout;
		    }
		} ())
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    // if setTimeout wasn't available but was latter defined
		    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		        cachedSetTimeout = setTimeout;
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }
	
	
		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    // if clearTimeout wasn't available but was latter defined
		    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		        cachedClearTimeout = clearTimeout;
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }
	
	
	
		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;
	
		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}
	
		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;
	
		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}
	
		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};
	
		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};
	
		function noop() {}
	
		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;
	
		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};
	
		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };
	
	
	/***/ },
	/* 213 */
	/***/ function(module, exports) {
	
		/* (ignored) */
	
	/***/ },
	/* 214 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(215);
	
	/***/ },
	/* 215 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(216)
		__vue_script__ = __webpack_require__(218)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/datetime-picker/src/datetime-picker.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(223)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 216 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 217 */,
	/* 218 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _index = __webpack_require__(219);
	
		var _index2 = _interopRequireDefault(_index);
	
		var _index3 = __webpack_require__(220);
	
		var _index4 = _interopRequireDefault(_index3);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (true) {
		  __webpack_require__(221);
		  __webpack_require__(222);
		}
	
		var FORMAT_MAP = {
		  Y: 'year',
		  M: 'month',
		  D: 'date',
		  H: 'hour',
		  m: 'minute'
		};
	
		exports.default = {
		  name: 'mt-datetime-picker',
	
		  props: {
		    visible: {
		      type: Boolean,
		      default: false
		    },
		    cancelText: {
		      type: String,
		      default: '取消'
		    },
		    confirmText: {
		      type: String,
		      default: '确定'
		    },
		    type: {
		      type: String,
		      default: 'datetime'
		    },
		    startDate: {
		      type: Date,
		      default: function _default() {
		        return new Date(new Date().getFullYear() - 10, 0, 1);
		      }
		    },
		    endDate: {
		      type: Date,
		      default: function _default() {
		        return new Date(new Date().getFullYear() + 10, 11, 31);
		      }
		    },
		    startHour: {
		      type: Number,
		      default: 0
		    },
		    endHour: {
		      type: Number,
		      default: 23
		    },
		    yearFormat: {
		      type: String,
		      default: '{value}'
		    },
		    monthFormat: {
		      type: String,
		      default: '{value}'
		    },
		    dateFormat: {
		      type: String,
		      default: '{value}'
		    },
		    hourFormat: {
		      type: String,
		      default: '{value}'
		    },
		    minuteFormat: {
		      type: String,
		      default: '{value}'
		    },
		    visibleItemCount: {
		      type: Number,
		      default: 5
		    },
		    value: null
		  },
	
		  data: function data() {
		    return {
		      startYear: null,
		      endYear: null,
		      startMonth: 1,
		      endMonth: 12,
		      startDay: 1,
		      endDay: 31,
		      selfTriggered: false,
		      isSlotChange: false,
		      dateSlots: [],
		      shortMonthDates: [],
		      longMonthDates: [],
		      febDates: [],
		      leapFebDates: []
		    };
		  },
	
	
		  components: {
		    'mt-picker': _index2.default,
		    'mt-popup': _index4.default
		  },
	
		  methods: {
		    isLeapYear: function isLeapYear(year) {
		      return year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
		    },
		    isShortMonth: function isShortMonth(month) {
		      return [4, 6, 9, 11].indexOf(month) > -1;
		    },
		    getMonthEndDay: function getMonthEndDay(year, month) {
		      if (this.isShortMonth(month)) {
		        return 30;
		      } else if (month === 2) {
		        return this.isLeapYear(year) ? 29 : 28;
		      } else {
		        return 31;
		      }
		    },
		    getTrueValue: function getTrueValue(formattedValue) {
		      if (!formattedValue) return;
		      while (isNaN(parseInt(formattedValue, 10))) {
		        formattedValue = formattedValue.slice(1);
		      }
		      return parseInt(formattedValue, 10);
		    },
		    getValue: function getValue(values) {
		      var _this = this;
	
		      var value = void 0;
		      if (this.type === 'time') {
		        value = values.map(function (value) {
		          return ('0' + _this.getTrueValue(value)).slice(-2);
		        }).join(':');
		      } else {
		        var year = this.getTrueValue(values[0]);
		        var month = this.getTrueValue(values[1]);
		        var date = this.getTrueValue(values[2]);
		        var maxDate = this.getMonthEndDay(year, month);
		        if (date > maxDate) {
		          this.selfTriggered = true;
		          date = 1;
		        }
		        var hour = this.typeStr.indexOf('H') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('H')]) : 0;
		        var minute = this.typeStr.indexOf('m') > -1 ? this.getTrueValue(values[this.typeStr.indexOf('m')]) : 0;
		        value = new Date(year, month - 1, date, hour, minute);
		      }
		      return value;
		    },
		    onChange: function onChange(picker) {
		      var values = picker.$children.filter(function (child) {
		        return child.value !== undefined;
		      }).map(function (child) {
		        return child.value;
		      });
		      if (this.selfTriggered) {
		        this.selfTriggered = false;
		        return;
		      }
		      this.value = this.getValue(values);
		    },
		    fillValues: function fillValues(type, start, end) {
		      var values = [];
		      for (var i = start; i <= end; i++) {
		        if (i < 10) {
		          values.push(this[FORMAT_MAP[type] + 'Format'].replace('{value}', ('0' + i).slice(-2)));
		        } else {
		          values.push(this[FORMAT_MAP[type] + 'Format'].replace('{value}', i));
		        }
		      }
		      return values;
		    },
		    pushSlots: function pushSlots(slots, type, start, end) {
		      slots.push({
		        flex: 1,
		        values: this.fillValues(type, start, end)
		      });
		    },
		    generateSlots: function generateSlots() {
		      var _this2 = this;
	
		      var dateSlots = [];
		      var INTERVAL_MAP = {
		        Y: this.rims.year,
		        M: this.rims.month,
		        D: this.rims.date,
		        H: this.rims.hour,
		        m: this.rims.min
		      };
		      var typesArr = this.typeStr.split('');
		      typesArr.forEach(function (type) {
		        if (INTERVAL_MAP[type]) {
		          _this2.pushSlots.apply(null, [dateSlots, type].concat(INTERVAL_MAP[type]));
		        }
		      });
		      if (this.typeStr === 'Hm') {
		        dateSlots.splice(1, 0, {
		          divider: true,
		          content: ':'
		        });
		      }
		      this.dateSlots = dateSlots;
		      this.handleExceededValue();
		    },
		    handleExceededValue: function handleExceededValue() {
		      var _this3 = this;
	
		      var values = [];
		      if (this.type === 'time') {
		        values = this.value.split(':');
		      } else {
		        values = [this.yearFormat.replace('{value}', this.getYear(this.value)), this.monthFormat.replace('{value}', ('0' + this.getMonth(this.value)).slice(-2)), this.dateFormat.replace('{value}', ('0' + this.getDate(this.value)).slice(-2))];
		        if (this.type === 'datetime') {
		          values.push(this.hourFormat.replace('{value}', ('0' + this.getHour(this.value)).slice(-2)), this.minuteFormat.replace('{value}', ('0' + this.getMinute(this.value)).slice(-2)));
		        }
		      }
		      this.dateSlots.filter(function (child) {
		        return child.values !== undefined;
		      }).map(function (slot) {
		        return slot.values;
		      }).forEach(function (slotValues, index) {
		        if (slotValues.indexOf(values[index]) === -1) {
		          values[index] = slotValues[0];
		        }
		      });
		      this.$nextTick(function () {
		        _this3.setSlotsByValues(values);
		      });
		    },
		    setSlotsByValues: function setSlotsByValues(values) {
		      var setSlotValue = this.$refs.picker.setSlotValue;
		      if (this.type === 'time') {
		        setSlotValue(0, values[0]);
		        setSlotValue(1, values[1]);
		      }
		      if (this.type !== 'time') {
		        setSlotValue(0, values[0]);
		        setSlotValue(1, values[1]);
		        setSlotValue(2, values[2]);
		        if (this.type === 'datetime') {
		          setSlotValue(3, values[3]);
		          setSlotValue(4, values[4]);
		        }
		      }
		      [].forEach.call(this.$refs.picker.$children, function (child) {
		        return child.doOnValueChange();
		      });
		    },
		    rimDetect: function rimDetect(result, rim) {
		      var position = rim === 'start' ? 0 : 1;
		      var rimDate = rim === 'start' ? this.startDate : this.endDate;
		      if (this.getYear(this.value) === rimDate.getFullYear()) {
		        result.month[position] = rimDate.getMonth() + 1;
		        if (this.getMonth(this.value) === rimDate.getMonth() + 1) {
		          result.date[position] = rimDate.getDate();
		          if (this.getDate(this.value) === rimDate.getDate()) {
		            result.hour[position] = rimDate.getHours();
		            if (this.getHour(this.value) === rimDate.getHours()) {
		              result.min[position] = rimDate.getMinutes();
		            }
		          }
		        }
		      }
		    },
		    isDateString: function isDateString(str) {
		      return (/\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/.test(str)
		      );
		    },
		    getYear: function getYear(value) {
		      return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[0] : value.getFullYear();
		    },
		    getMonth: function getMonth(value) {
		      return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[1] : value.getMonth() + 1;
		    },
		    getDate: function getDate(value) {
		      return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[2] : value.getDate();
		    },
		    getHour: function getHour(value) {
		      if (this.isDateString(value)) {
		        var str = value.split(' ')[1] || '00:00:00';
		        return str.split(':')[0];
		      }
		      return value.getHours();
		    },
		    getMinute: function getMinute(value) {
		      if (this.isDateString(value)) {
		        var str = value.split(' ')[1] || '00:00:00';
		        return str.split(':')[1];
		      }
		      return value.getMinutes();
		    },
		    confirm: function confirm() {
		      this.visible = false;
		      this.$emit('confirm', this.value);
		    }
		  },
	
		  computed: {
		    rims: function rims() {
		      if (!this.value) return { year: [], month: [], date: [], hour: [], min: [] };
		      var result = void 0;
		      if (this.type === 'time') {
		        result = {
		          hour: [this.startHour, this.endHour],
		          min: [0, 59]
		        };
		        return result;
		      }
		      result = {
		        year: [this.startDate.getFullYear(), this.endDate.getFullYear()],
		        month: [1, 12],
		        date: [1, this.getMonthEndDay(this.getYear(this.value), this.getMonth(this.value))],
		        hour: [0, 23],
		        min: [0, 59]
		      };
		      this.rimDetect(result, 'start');
		      this.rimDetect(result, 'end');
		      return result;
		    },
		    typeStr: function typeStr() {
		      if (this.type === 'time') {
		        return 'Hm';
		      } else if (this.type === 'date') {
		        return 'YMD';
		      } else {
		        return 'YMDHm';
		      }
		    }
		  },
	
		  watch: {
		    rims: function rims(val, oldVal) {
		      var same = Object.keys(val).every(function (key) {
		        return val[key][0] === oldVal[key][0] && val[key][1] === oldVal[key][1];
		      });
		      if (!same) {
		        this.generateSlots();
		      }
		    }
		  },
	
		  ready: function ready() {
		    if (!this.value) {
		      if (this.type.indexOf('date') > -1) {
		        this.value = this.startDate;
		      } else {
		        this.value = ('0' + this.startHour).slice(-2) + ':00';
		      }
		    }
		    this.generateSlots();
		  }
		};
	
	/***/ },
	/* 219 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(55);
	
	/***/ },
	/* 220 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(56);
	
	/***/ },
	/* 221 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(57);
	
	/***/ },
	/* 222 */
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(59);
	
	/***/ },
	/* 223 */
	/***/ function(module, exports) {
	
		module.exports = "\n<mt-popup :visible.sync=\"visible\" position=\"bottom\" class=\"mint-datetime\">\n  <mt-picker\n  :slots=\"dateSlots\"\n  @change=\"onChange\"\n  :visible-item-count=\"visibleItemCount\"\n  class=\"mint-datetime-picker\"\n  v-ref:picker\n  show-toolbar>\n    <span class=\"mint-datetime-action mint-datetime-cancel\" @click=\"visible = false\">{{ cancelText }}</span>\n    <span class=\"mint-datetime-action mint-datetime-confirm\" @click=\"confirm\">{{ confirmText }}</span>\n  </mt-picker>\n</mt-popup>\n";
	
	/***/ },
	/* 224 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(225);
	
	/***/ },
	/* 225 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(226)
		__vue_script__ = __webpack_require__(228)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/index-list/src/index-list.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(229)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 226 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 227 */,
	/* 228 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-index-list',
	
		  props: {
		    height: Number,
		    showIndicator: {
		      type: Boolean,
		      default: true
		    }
		  },
	
		  data: function data() {
		    return {
		      sections: [],
		      navWidth: 0,
		      indicatorTime: null,
		      moving: false,
		      firstSection: null,
		      currentIndicator: ''
		    };
		  },
	
	
		  watch: {
		    sections: function sections() {
		      var _this = this;
	
		      this.getFirstSection();
		      this.$nextTick(function () {
		        _this.navWidth = _this.$els.nav.clientWidth;
		      });
		    }
		  },
	
		  methods: {
		    getFirstSection: function getFirstSection() {
		      if (this.sections.length > 0) {
		        this.firstSection = this.sections[0].$el;
		      }
		    },
		    handleTouchStart: function handleTouchStart(e) {
		      if (e.target.tagName !== 'LI') {
		        return;
		      }
		      this.scrollList(e.changedTouches[0].clientY);
		      if (this.indicatorTime) {
		        clearTimeout(this.indicatorTime);
		      }
		      this.moving = true;
		      window.addEventListener('touchmove', this.handleTouchMove);
		      window.addEventListener('touchend', this.handleTouchEnd);
		    },
		    handleTouchMove: function handleTouchMove(e) {
		      e.preventDefault();
		      this.scrollList(e.changedTouches[0].clientY);
		    },
		    handleTouchEnd: function handleTouchEnd() {
		      var _this2 = this;
	
		      this.indicatorTime = setTimeout(function () {
		        _this2.moving = false;
		        _this2.currentIndicator = '';
		      }, 500);
		      window.removeEventListener('touchmove', this.handleTouchMove);
		      window.removeEventListener('touchend', this.handleTouchEnd);
		    },
		    scrollList: function scrollList(y) {
		      var currentItem = document.elementFromPoint(document.body.clientWidth - 10, y);
		      if (!currentItem || !currentItem.classList.contains('mint-indexlist-navitem')) {
		        return;
		      }
		      this.currentIndicator = currentItem.innerText;
		      var targets = this.sections.filter(function (section) {
		        return section.index === currentItem.innerText;
		      });
		      var targetDOM = void 0;
		      if (targets.length > 0) {
		        targetDOM = targets[0].$el;
		        this.$els.content.scrollTop = targetDOM.getBoundingClientRect().top - this.firstSection.getBoundingClientRect().top;
		      }
		    }
		  },
	
		  ready: function ready() {
		    var _this3 = this;
	
		    if (!this.height) {
		      this.height = document.documentElement.clientHeight - this.$els.content.getBoundingClientRect().top;
		    }
		    this.$nextTick(function () {
		      _this3.navWidth = _this3.$els.nav.clientWidth;
		    });
		    this.getFirstSection();
		  }
		};
	
	/***/ },
	/* 229 */
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-indexlist\">\n  <ul class=\"mint-indexlist-content\" v-el:content :style=\"{ 'height': height + 'px', 'margin-right': navWidth + 'px'}\">\n    <slot></slot>\n  </ul>\n  \n  <div class=\"mint-indexlist-nav\" @touchstart=\"handleTouchStart\" v-el:nav>\n    <ul class=\"mint-indexlist-navlist\">\n      <li class=\"mint-indexlist-navitem\" v-for=\"section in sections\">{{ section.index }}</li>\n    </ul>\n  </div>\n  \n  <div class=\"mint-indexlist-indicator\" v-if=\"showIndicator\" v-show=\"moving\">{{ currentIndicator }}</div>\n</div>\n";
	
	/***/ },
	/* 230 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(231);
	
	/***/ },
	/* 231 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(232)
		__vue_script__ = __webpack_require__(234)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/index-section/src/index-section.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(235)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 232 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 233 */,
	/* 234 */
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-index-section',
	
		  props: {
		    index: {
		      type: String,
		      required: true
		    }
		  },
	
		  ready: function ready() {
		    this.$parent.sections.push(this);
		  },
		  beforeDestroy: function beforeDestroy() {
		    var index = this.$parent.sections.indexOf(this);
		    if (index > -1) {
		      this.$parent.sections.splice(index, 1);
		    }
		  }
		};
	
	/***/ },
	/* 235 */
	/***/ function(module, exports) {
	
		module.exports = "\n<li class=\"mint-indexsection\">\n  <p class=\"mint-indexsection-index\">{{ index }}</p>\n  <ul>\n    <slot></slot>\n  </ul>\n</li>\n";
	
	/***/ },
	/* 236 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(237);
	
	/***/ },
	/* 237 */
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(238)
		__vue_script__ = __webpack_require__(240)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/cell-swipe/src/cell-swipe.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(241)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	/* 238 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 239 */,
	/* 240 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _event = __webpack_require__(87);
	
		var _index = __webpack_require__(28);
	
		var _index2 = _interopRequireDefault(_index);
	
		var _vueClickoutside = __webpack_require__(29);
	
		var _vueClickoutside2 = _interopRequireDefault(_vueClickoutside);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		if (true) {
		  __webpack_require__(30);
		}
	
		exports.default = {
		  name: 'mt-cell-swipe',
	
		  components: { XCell: _index2.default },
	
		  directives: { Clickoutside: _vueClickoutside2.default },
	
		  props: {
		    left: Array,
		    right: Array,
		    icon: String,
		    title: String,
		    label: String,
		    isLink: Boolean,
		    value: {}
		  },
	
		  data: function data() {
		    return {
		      start: { x: 0, y: 0 }
		    };
		  },
		  ready: function ready() {
		    this.wrap = this.$refs.cell.$el.querySelector('.mint-cell-wrapper');
		    this.leftElm = this.$els.left;
		    this.rightElm = this.$els.right;
		    this.leftWrapElm = this.leftElm.parentNode;
		    this.rightWrapElm = this.rightElm.parentNode;
		    this.leftWidth = this.leftElm.getBoundingClientRect().width;
		    this.rightWidth = this.rightElm.getBoundingClientRect().width;
	
		    this.leftDefaultTransform = this.translate3d(-this.leftWidth - 1);
		    this.rightDefaultTransform = this.translate3d(this.rightWidth);
	
		    this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
		    this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
		  },
	
	
		  methods: {
		    translate3d: function translate3d(offset) {
		      return 'translate3d(' + offset + 'px, 0, 0)';
		    },
		    swipeMove: function swipeMove() {
		      var offset = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	
		      this.wrap.style.webkitTransform = this.translate3d(offset);
		      this.rightWrapElm.style.webkitTransform = this.translate3d(this.rightWidth + offset);
		      this.leftWrapElm.style.webkitTransform = this.translate3d(-this.leftWidth + offset);
		      this.swiping = true;
		    },
		    swipeLeaveTransition: function swipeLeaveTransition(direction) {
		      var _this = this;
	
		      setTimeout(function () {
		        _this.swipeLeave = true;
	
		        if (direction > 0 && -_this.offsetLeft > _this.rightWidth * 0.4) {
		          _this.swipeMove(-_this.rightWidth);
		          _this.swiping = false;
		          _this.opened = true;
		          return;
		        } else if (direction < 0 && _this.offsetLeft > _this.leftWidth * 0.4) {
		          _this.swipeMove(_this.leftWidth);
		          _this.swiping = false;
		          _this.opened = true;
		          return;
		        }
	
		        _this.swipeMove(0);
		        (0, _event.once)(_this.wrap, 'webkitTransitionEnd', function (_) {
		          _this.wrap.style.webkitTransform = '';
		          _this.rightWrapElm.style.webkitTransform = _this.rightDefaultTransform;
		          _this.leftWrapElm.style.webkitTransform = _this.leftDefaultTransform;
		          _this.swipeLeave = false;
		          _this.swiping = false;
		        });
		      }, 0);
		    },
		    startDrag: function startDrag(evt) {
		      evt = evt.changedTouches ? evt.changedTouches[0] : evt;
		      this.dragging = true;
		      this.start.x = evt.pageX;
		      this.start.y = evt.pageY;
		    },
		    onDrag: function onDrag(evt) {
		      if (this.opened) {
		        !this.swiping && this.swipeMove(0);
		        this.opened = false;
		        return;
		      }
		      if (!this.dragging) return;
		      var swiping = void 0;
		      var e = evt.changedTouches ? evt.changedTouches[0] : evt;
		      var offsetTop = e.pageY - this.start.y;
		      var offsetLeft = this.offsetLeft = e.pageX - this.start.x;
	
		      if (offsetLeft < 0 && -offsetLeft > this.rightWidth || offsetLeft > 0 && offsetLeft > this.leftWidth || offsetLeft > 0 && !this.leftWidth || offsetLeft < 0 && !this.rightWidth) {
		        return;
		      }
	
		      var y = Math.abs(offsetTop);
		      var x = Math.abs(offsetLeft);
	
		      swiping = !(x < 5 || x >= 5 && y >= x * 1.73);
		      if (!swiping) return;
		      evt.preventDefault();
	
		      this.swipeMove(offsetLeft);
		    },
		    endDrag: function endDrag() {
		      if (!this.swiping) return;
		      this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1);
		    }
		  }
		};
	
	/***/ },
	/* 241 */
	/***/ function(module, exports) {
	
		module.exports = "\n<x-cell\n  v-clickoutside:touchstart=\"swipeMove()\"\n  @click=\"swipeMove()\"\n  @touchstart=\"startDrag\"\n  @touchmove=\"onDrag\"\n  @touchend=\"endDrag\"\n  class=\"mint-cell-swipe\"\n  :title=\"title\"\n  :icon=\"icon\"\n  :label=\"label\"\n  :is-link=\"isLink\"\n  v-ref:cell\n  :value=\"value\">\n  <div\n    slot=\"right\"\n    class=\"mint-cell-swipe-buttongroup\"\n    v-el:right>\n    <a\n      class=\"mint-cell-swipe-button\"\n      v-for=\"btn in right\"\n      :style=\"btn.style\"\n      @click=\"btn.handler && btn.handler(), swipeMove()\"\n      v-html=\"btn.content\"></a>\n  </div>\n  <div\n    slot=\"left\"\n    class=\"mint-cell-swipe-buttongroup\"\n    v-el:left>\n    <a\n      class=\"mint-cell-swipe-button\"\n      v-for=\"btn in left\"\n      :style=\"btn.style\"\n      @click=\"btn.handler && btn.handler(), swipeMove()\"\n      v-html=\"btn.content\"></a>\n  </div>\n  <slot></slot>\n  <span\n    v-if=\"_slotContents.title\"\n    slot=\"title\">\n    <slot name=\"title\"></slot>\n  </span>\n  <span\n    v-if=\"_slotContents.icon\"\n    slot=\"icon\">\n    <slot name=\"icon\"></slot>\n  </span>\n</x-cell>\n";
	
	/***/ },
	/* 242 */
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	/* 243 */,
	/* 244 */,
	/* 245 */
	/***/ function(module, exports) {
	
		module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJ3aGl0ZSI+CiAgPHBhdGggb3BhY2l0eT0iLjI1IiBkPSJNMTYgMCBBMTYgMTYgMCAwIDAgMTYgMzIgQTE2IDE2IDAgMCAwIDE2IDAgTTE2IDQgQTEyIDEyIDAgMCAxIDE2IDI4IEExMiAxMiAwIDAgMSAxNiA0Ii8+CiAgPHBhdGggZD0iTTE2IDAgQTE2IDE2IDAgMCAxIDMyIDE2IEwyOCAxNiBBMTIgMTIgMCAwIDAgMTYgNHoiPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTYgMTYiIHRvPSIzNjAgMTYgMTYiIGR1cj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgPC9wYXRoPgo8L3N2Zz4K"
	
	/***/ }
	/******/ ]);

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(46);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../.0.25.0@css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../.0.25.0@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n@font-face {font-family: \"mintui\";\n  src: url(data:application/x-font-ttf;base64,AAEAAAAPAIAAAwBwRkZUTXMrDTgAAAD8AAAAHE9TLzJXb1zGAAABGAAAAGBjbWFwsbgH3gAAAXgAAAFaY3Z0IA1j/vQAAA2UAAAAJGZwZ20w956VAAANuAAACZZnYXNwAAAAEAAADYwAAAAIZ2x5Zm8hHaQAAALUAAAHeGhlYWQKwq5kAAAKTAAAADZoaGVhCJMESQAACoQAAAAkaG10eBuiAmQAAAqoAAAAKGxvY2EJUArqAAAK0AAAABhtYXhwAS4KKwAACugAAAAgbmFtZal8DOEAAAsIAAACE3Bvc3QbrFqUAAANHAAAAHBwcmVwpbm+ZgAAF1AAAACVAAAAAQAAAADMPaLPAAAAANN2tTQAAAAA03a1NAAEBBIB9AAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAgAGAwAAAAAAAAAAAAEQAAAAAAAAAAAAAABQZkVkAMAAeOYJA4D/gABcA38AgAAAAAEAAAAAAxgAAAAAACAAAQAAAAMAAAADAAAAHAABAAAAAABUAAMAAQAAABwABAA4AAAACgAIAAIAAgB45gLmBeYJ//8AAAB45gDmBOYI////ixoEGgMaAQABAAAAAAAAAAAAAAAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACACIAAAEyAqoAAwAHAClAJgAAAAMCAANXAAIBAQJLAAICAU8EAQECAUMAAAcGBQQAAwADEQUPKzMRIREnMxEjIgEQ7szMAqr9ViICZgAAAAUALP/hA7wDGAAWADAAOgBSAF4Bd0uwE1BYQEoCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoGCV4RAQwGBAYMXgALBAtpDwEIAAYMCAZYAAoHBQIECwoEWRIBDg4NUQANDQoOQhtLsBdQWEBLAgEADQ4NAA5mAAMOAQ4DXgABCAgBXBABCQgKCAkKZhEBDAYEBgxeAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0uwGFBYQEwCAQANDg0ADmYAAw4BDgNeAAEICAFcEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CG0BOAgEADQ4NAA5mAAMOAQ4DAWYAAQgOAQhkEAEJCAoICQpmEQEMBgQGDARmAAsEC2kPAQgABgwIBlgACgcFAgQLCgRZEgEODg1RAA0NCg5CWVlZQChTUzs7MjEXF1NeU15bWDtSO1JLQzc1MToyOhcwFzBRETEYESgVQBMWKwEGKwEiDgIdASE1NCY1NC4CKwEVIQUVFBYUDgIjBiYrASchBysBIiciLgI9ARciBhQWMzI2NCYXBgcOAx4BOwYyNicuAScmJwE1ND4COwEyFh0BARkbGlMSJRwSA5ABChgnHoX+SgKiARUfIw4OHw4gLf5JLB0iFBkZIBMIdwwSEgwNEhKMCAYFCwQCBA8OJUNRUEAkFxYJBQkFBQb+pAUPGhW8HykCHwEMGScaTCkQHAQNIBsSYYg0Fzo6JRcJAQGAgAETGyAOpz8RGhERGhF8GhYTJA4QDQgYGg0jERMUAXfkCxgTDB0m4wAAAQDp//UCugMMABEASLYKAQIAAQFAS7AaUFhACwABAQpBAAAACwBCG0uwKlBYQAsAAAABUQABAQoAQhtAEAABAAABTQABAQBRAAABAEVZWbMYFQIQKwkCFhQGIicBJjcmNwE2MhYUArD+iQF3ChQcCv5yCgEBCgGOChwUAtT+rf6sCRwTCgFoCw8OCwFoChMcAAAAAAMAXgElA6EB2gAHAA8AFwAhQB4EAgIAAQEATQQCAgAAAVEFAwIBAAFFExMTExMQBhQrEiIGFBYyNjQkIgYUFjI2NCQiBhQWMjY03ks1NUs1ARNLNTVLNQERSzU1SzUB2jVLNTVLNTVLNTVLNTVLNTVLAAAAAQAA/4AEtgN/ABAAEkAPBwYFAwAFAD0AAABfHQEPKwEEAQcmATcBNiQ+AT8BMh4BBLb/AP6adZT+uW0BJZkBCJ5uGBUFDicDNuP95Le4AUdu/wCa+YVeDg4EIwACAE7/6AO4A1IAGAAgACdAJBEDAgMEAUAAAAAEAwAEWQADAAECAwFZAAICCwJCExMVJRgFEyslJyYnNjU0LgEiDgEUHgEzMjcWHwEWMjY0JCImNDYyFhQDrdQFB0lfpMKkX1+kYYZlAwTUCx8W/nb4sLD4sCrYBgJie2KoYWGoxahhWwYE2QsXH5a0/rOz/gAGAEH/wAO/Az4ADwAbADMAQwBPAFsAVUBSW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEGxoZGBcWFRQTEhEQJAEAAUAAAwADaAACAQJpBAEAAQEATQQBAAABUQUBAQABRT08NTQpKB0cFxAGECsAIg4CFB4CMj4CNC4BAwcnByc3JzcXNxcHEiInLgEnJjQ3PgE3NjIXHgEXFhQHDgEHAiIOAhQeAjI+AjQuAQMnByc3JzcXNxcHFyEXNxc3JzcnBycHFwJataZ3R0d3prWmd0dHd0Qimpoimpoimpoimjm2U1F7IiMjIntRU7ZTUHwiIyMifFBUtaV4RkZ4pbWleEdHeGWamiOamiOamiOamv6IIZqaIZqaIZqaIZoDPkd3praleEZGeKW2pnf97yKamiKamiKamiKa/kAjInxQU7ZTUXsiIyMie1FTtlNQfCIDWkZ4pbWleEdHeKW1pXj9zJqaI5qaI5qaI5qaIZqaIZqaIZqaIZoAAAAABABHAAIDtwLdAA0AHQAwADEAMUAuMQEEBQFAAAAABQQABVkABAADAgQDWQACAQECTQACAgFRAAECAUU2NDU1NRIGFCslASYiBwEGFxYzITI3NiUUBisBIiY9ATQ2OwEyFhUnBiMnIiY1JzU0NjsBMhYdAhQHA7f+dxA+EP53EREQHwMSHxAR/mkKCD4ICwsIPggKBQUIPggKAQsHPwgKBVACdBkZ/YwbGhkZGjEJDQ0JJQoNDQpWBQEIB2mmBgkJBqVrBgQAAAADAED/wwO+A0IAAAAQABYAJkAjFhUUExIRBgEAAUAAAQA+AAABAQBNAAAAAVEAAQABRRcRAhArATIiDgIUHgIyPgI0LgEBJzcXARcB/1u2pndHR3emtqZ3R0d3/sXCI58BIyMDQkd4pbameEdHeKa2pXj9w8MjnwEkIwAAAQAAAAEAACFDvy9fDzz1AAsEAAAAAADTdrU0AAAAANN2tTQAAP+ABLYDfwAAAAgAAgAAAAAAAAABAAADf/+AAFwEvwAAAAAEtgABAAAAAAAAAAAAAAAAAAAACQF2ACIAAAAAAVUAAAPpACwEAADpBAAAXgS/AAAD6ABOBAAAQQBHAEAAAAAoACgAKAFkAa4B6AIWAl4DGgN+A7wAAQAAAAsAXwAGAAAAAAACACYANABsAAAAigmWAAAAAAAAAAwAlgABAAAAAAABAAYAAAABAAAAAAACAAYABgABAAAAAAADACEADAABAAAAAAAEAAYALQABAAAAAAAFAEYAMwABAAAAAAAGAAYAeQADAAEECQABAAwAfwADAAEECQACAAwAiwADAAEECQADAEIAlwADAAEECQAEAAwA2QADAAEECQAFAIwA5QADAAEECQAGAAwBcW1pbnR1aU1lZGl1bUZvbnRGb3JnZSAyLjAgOiBtaW50dWkgOiAzLTYtMjAxNm1pbnR1aVZlcnNpb24gMS4wIDsgdHRmYXV0b2hpbnQgKHYwLjk0KSAtbCA4IC1yIDUwIC1HIDIwMCAteCAxNCAtdyAiRyIgLWYgLXNtaW50dWkAbQBpAG4AdAB1AGkATQBlAGQAaQB1AG0ARgBvAG4AdABGAG8AcgBnAGUAIAAyAC4AMAAgADoAIABtAGkAbgB0AHUAaQAgADoAIAAzAC0ANgAtADIAMAAxADYAbQBpAG4AdAB1AGkAVgBlAHIAcwBpAG8AbgAgADEALgAwACAAOwAgAHQAdABmAGEAdQB0AG8AaABpAG4AdAAgACgAdgAwAC4AOQA0ACkAIAAtAGwAIAA4ACAALQByACAANQAwACAALQBHACAAMgAwADAAIAAtAHgAIAAxADQAIAAtAHcAIAAiAEcAIgAgAC0AZgAgAC0AcwBtAGkAbgB0AHUAaQAAAgAAAAAAAP+DADIAAAAAAAAAAAAAAAAAAAAAAAAAAAALAAAAAQACAFsBAgEDAQQBBQEGAQcBCAd1bmlFNjAwB3VuaUU2MDEHdW5pRTYwMgd1bmlFNjA0B3VuaUU2MDUHdW5pRTYwOAd1bmlFNjA5AAEAAf//AA8AAAAAAAAAAAAAAAAAAAAAADIAMgMY/+EDf/+AAxj/4QN//4CwACywIGBmLbABLCBkILDAULAEJlqwBEVbWCEjIRuKWCCwUFBYIbBAWRsgsDhQWCGwOFlZILAKRWFksChQWCGwCkUgsDBQWCGwMFkbILDAUFggZiCKimEgsApQWGAbILAgUFghsApgGyCwNlBYIbA2YBtgWVlZG7AAK1lZI7AAUFhlWVktsAIsIEUgsAQlYWQgsAVDUFiwBSNCsAYjQhshIVmwAWAtsAMsIyEjISBksQViQiCwBiNCsgoAAiohILAGQyCKIIqwACuxMAUlilFYYFAbYVJZWCNZISCwQFNYsAArGyGwQFkjsABQWGVZLbAELLAII0KwByNCsAAjQrAAQ7AHQ1FYsAhDK7IAAQBDYEKwFmUcWS2wBSywAEMgRSCwAkVjsAFFYmBELbAGLLAAQyBFILAAKyOxBAQlYCBFiiNhIGQgsCBQWCGwABuwMFBYsCAbsEBZWSOwAFBYZVmwAyUjYURELbAHLLEFBUWwAWFELbAILLABYCAgsApDSrAAUFggsAojQlmwC0NKsABSWCCwCyNCWS2wCSwguAQAYiC4BABjiiNhsAxDYCCKYCCwDCNCIy2wCixLVFixBwFEWSSwDWUjeC2wCyxLUVhLU1ixBwFEWRshWSSwE2UjeC2wDCyxAA1DVVixDQ1DsAFhQrAJK1mwAEOwAiVCsgABAENgQrEKAiVCsQsCJUKwARYjILADJVBYsABDsAQlQoqKIIojYbAIKiEjsAFhIIojYbAIKiEbsABDsAIlQrACJWGwCCohWbAKQ0ewC0NHYLCAYiCwAkVjsAFFYmCxAAATI0SwAUOwAD6yAQEBQ2BCLbANLLEABUVUWACwDSNCIGCwAWG1Dg4BAAwAQkKKYLEMBCuwaysbIlktsA4ssQANKy2wDyyxAQ0rLbAQLLECDSstsBEssQMNKy2wEiyxBA0rLbATLLEFDSstsBQssQYNKy2wFSyxBw0rLbAWLLEIDSstsBcssQkNKy2wGCywByuxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAZLLEAGCstsBossQEYKy2wGyyxAhgrLbAcLLEDGCstsB0ssQQYKy2wHiyxBRgrLbAfLLEGGCstsCAssQcYKy2wISyxCBgrLbAiLLEJGCstsCMsIGCwDmAgQyOwAWBDsAIlsAIlUVgjIDywAWAjsBJlHBshIVktsCQssCMrsCMqLbAlLCAgRyAgsAJFY7ABRWJgI2E4IyCKVVggRyAgsAJFY7ABRWJgI2E4GyFZLbAmLLEABUVUWACwARawJSqwARUwGyJZLbAnLLAHK7EABUVUWACwARawJSqwARUwGyJZLbAoLCA1sAFgLbApLACwA0VjsAFFYrAAK7ACRWOwAUVisAArsAAWtAAAAAAARD4jOLEoARUqLbAqLCA8IEcgsAJFY7ABRWJgsABDYTgtsCssLhc8LbAsLCA8IEcgsAJFY7ABRWJgsABDYbABQ2M4LbAtLLECABYlIC4gR7AAI0KwAiVJiopHI0cjYSBYYhshWbABI0KyLAEBFRQqLbAuLLAAFrAEJbAEJUcjRyNhsAZFK2WKLiMgIDyKOC2wLyywABawBCWwBCUgLkcjRyNhILAEI0KwBkUrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyCwCUMgiiNHI0cjYSNGYLAEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmEjICCwBCYjRmE4GyOwCUNGsAIlsAlDRyNHI2FgILAEQ7CAYmAjILAAKyOwBENgsAArsAUlYbAFJbCAYrAEJmEgsAQlYGQjsAMlYGRQWCEbIyFZIyAgsAQmI0ZhOFktsDAssAAWICAgsAUmIC5HI0cjYSM8OC2wMSywABYgsAkjQiAgIEYjR7AAKyNhOC2wMiywABawAyWwAiVHI0cjYbAAVFguIDwjIRuwAiWwAiVHI0cjYSCwBSWwBCVHI0cjYbAGJbAFJUmwAiVhsAFFYyMgWGIbIVljsAFFYmAjLiMgIDyKOCMhWS2wMyywABYgsAlDIC5HI0cjYSBgsCBgZrCAYiMgIDyKOC2wNCwjIC5GsAIlRlJYIDxZLrEkARQrLbA1LCMgLkawAiVGUFggPFkusSQBFCstsDYsIyAuRrACJUZSWCA8WSMgLkawAiVGUFggPFkusSQBFCstsDcssC4rIyAuRrACJUZSWCA8WS6xJAEUKy2wOCywLyuKICA8sAQjQoo4IyAuRrACJUZSWCA8WS6xJAEUK7AEQy6wJCstsDkssAAWsAQlsAQmIC5HI0cjYbAGRSsjIDwgLiM4sSQBFCstsDossQkEJUKwABawBCWwBCUgLkcjRyNhILAEI0KwBkUrILBgUFggsEBRWLMCIAMgG7MCJgMaWUJCIyBHsARDsIBiYCCwACsgiophILACQ2BkI7ADQ2FkUFiwAkNhG7ADQ2BZsAMlsIBiYbACJUZhOCMgPCM4GyEgIEYjR7AAKyNhOCFZsSQBFCstsDsssC4rLrEkARQrLbA8LLAvKyEjICA8sAQjQiM4sSQBFCuwBEMusCQrLbA9LLAAFSBHsAAjQrIAAQEVFBMusCoqLbA+LLAAFSBHsAAjQrIAAQEVFBMusCoqLbA/LLEAARQTsCsqLbBALLAtKi2wQSywABZFIyAuIEaKI2E4sSQBFCstsEIssAkjQrBBKy2wQyyyAAA6Ky2wRCyyAAE6Ky2wRSyyAQA6Ky2wRiyyAQE6Ky2wRyyyAAA7Ky2wSCyyAAE7Ky2wSSyyAQA7Ky2wSiyyAQE7Ky2wSyyyAAA3Ky2wTCyyAAE3Ky2wTSyyAQA3Ky2wTiyyAQE3Ky2wTyyyAAA5Ky2wUCyyAAE5Ky2wUSyyAQA5Ky2wUiyyAQE5Ky2wUyyyAAA8Ky2wVCyyAAE8Ky2wVSyyAQA8Ky2wViyyAQE8Ky2wVyyyAAA4Ky2wWCyyAAE4Ky2wWSyyAQA4Ky2wWiyyAQE4Ky2wWyywMCsusSQBFCstsFwssDArsDQrLbBdLLAwK7A1Ky2wXiywABawMCuwNistsF8ssDErLrEkARQrLbBgLLAxK7A0Ky2wYSywMSuwNSstsGIssDErsDYrLbBjLLAyKy6xJAEUKy2wZCywMiuwNCstsGUssDIrsDUrLbBmLLAyK7A2Ky2wZyywMysusSQBFCstsGgssDMrsDQrLbBpLLAzK7A1Ky2waiywMyuwNistsGssK7AIZbADJFB4sAEVMC0AAEu4AMhSWLEBAY5ZuQgACABjILABI0QgsAMjcLAORSAgS7gADlFLsAZTWliwNBuwKFlgZiCKVViwAiVhsAFFYyNisAIjRLMKCQUEK7MKCwUEK7MODwUEK1myBCgJRVJEswoNBgQrsQYBRLEkAYhRWLBAiFixBgNEsSYBiFFYuAQAiFixBgFEWVlZWbgB/4WwBI2xBQBEAAAA)\n}\n\n.mintui {\n  font-family:\"mintui\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.mintui-search:before { content: \"\\E604\"; }\n.mintui-more:before { content: \"\\E601\"; }\n.mintui-back:before { content: \"\\E600\"; }\n.mintui-field-error:before { content: \"\\E605\"; }\n.mintui-field-warning:before { content: \"\\E608\"; }\n.mintui-success:before { content: \"\\E602\"; }\n.mintui-field-success:before { content: \"\\E609\"; }\n", ""]);
	
	// exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(27);
	
	
	/***/ },
	
	/***/ 25:
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(45);
	
	/***/ },
	
	/***/ 27:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(28);
	
	/***/ },
	
	/***/ 28:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(29)
		__vue_script__ = __webpack_require__(31)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/cell/src/cell.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(32)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 29:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 31:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		if (true) {
		  __webpack_require__(25);
		}
	
		exports.default = {
		  name: 'mt-cell',
	
		  props: {
		    icon: String,
		    title: String,
		    label: String,
		    isLink: Boolean,
		    value: {}
		  }
		};
	
	/***/ },
	
	/***/ 32:
	/***/ function(module, exports) {
	
		module.exports = "\n<a class=\"mint-cell\">\n  <span class=\"mint-cell-mask\" v-if=\"isLink\"></span>\n  <div class=\"mint-cell-left\">\n    <slot name=\"left\"></slot>\n  </div>\n  <div class=\"mint-cell-wrapper\">\n    <div class=\"mint-cell-title\">\n      <slot name=\"icon\">\n        <i v-if=\"icon\" class=\"mintui\" :class=\"'mintui-' + icon\"></i>\n      </slot>\n      <slot name=\"title\">\n        <span class=\"mint-cell-text\" v-text=\"title\"></span>\n        <span v-if=\"label\" class=\"mint-cell-label\" v-text=\"label\"></span>\n      </slot>\n    </div>\n    <div class=\"mint-cell-value\" :class=\"{ 'is-link' : isLink }\">\n      <slot>\n        <span v-text=\"value\"></span>\n      </slot>\n    </div>\n  </div>\n  <div class=\"mint-cell-right\">\n    <slot name=\"right\"></slot>\n  </div>\n  <i v-if=\"isLink\" class=\"mint-cell-allow-right\"></i>\n</a>\n";
	
	/***/ }
	
	/******/ });

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../.0.25.0@css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../.0.25.0@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Cell Component */\n\n/* Header Component */\n\n/* Button Component */\n\n/* Tab Item Component */\n\n/* Tabbar Component */\n\n/* Navbar Component */\n\n/* Checklist Component */\n\n/* Radio Component */\n\n/* z-index */\n\n.mint-cell {\n\n    position: relative;\n\n    position: relative;\n\n    background-color: #fff;\n\n    box-sizing: border-box;\n\n    color: inherit;\n\n    min-height: 48px;\n\n    display: block;\n\n    overflow: hidden;\n}\n\n.mint-cell img {\n\n    vertical-align: middle;\n}\n\n.mint-cell::after {\n\n    color: #d9d9d9;\n\n    content: \" \";\n\n    width: 100%;\n\n    height: 1;\n\n    border-top: 1px solid;\n\n    top: 0;\n\n    left: 0;\n\n    position: absolute;\n\n    -webkit-transform-origin: 0 0;\n\n            transform-origin: 0 0;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 2) {\n\n    .mint-cell::after {\n\n        -webkit-transform: scaleY(.5);\n\n                transform: scaleY(.5);\n    }\n}\n\n.mint-cell::before {\n\n    color: #d9d9d9;\n\n    content: \" \";\n\n    width: 100%;\n\n    height: 1;\n\n    border-bottom: 1px solid;\n\n    bottom: 0;\n\n    left: 0;\n\n    position: absolute;\n\n    -webkit-transform-origin: 0 100%;\n\n            transform-origin: 0 100%;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 2) {\n\n    .mint-cell::before {\n\n        -webkit-transform: scaleY(.5);\n\n                transform: scaleY(.5);\n    }\n}\n\n.mint-cell + .mint-cell::after {\n\n    content: none;\n}\n\n.mint-cell::before {\n\n    left: 10px;\n}\n\n.mint-cell:last-child::before {\n\n    left: 0;\n}\n\n.mint-cell-wrapper {\n\n    -webkit-box-align: center;\n\n        -ms-flex-align: center;\n\n            align-items: center;\n\n    box-sizing: border-box;\n\n    display: -webkit-box;\n\n    display: -ms-flexbox;\n\n    display: flex;\n\n    font-size: 16px;\n\n    line-height: 1;\n\n    min-height: inherit;\n\n    overflow: hidden;\n\n    padding: 0 10px;\n\n    position: relative;\n\n    width: 100%;\n}\n\n.mint-cell-mask {}\n\n.mint-cell-mask::after {\n\n    background-color: #000;\n\n    content: \" \";\n\n    opacity: 0;\n\n    top: 0;\n\n    right: 0;\n\n    bottom: 0;\n\n    left: 0;\n\n    position: absolute;\n}\n\n.mint-cell-mask:active::after {\n\n    opacity: .1;\n}\n\n.mint-cell-text {\n\n    vertical-align: middle;\n}\n\n.mint-cell-label {\n\n    color: #888;\n\n    display: block;\n\n    font-size: 12px;\n\n    margin-top: 6px;\n}\n\n.mint-cell-title {\n\n    -webkit-box-flex: 1;\n\n        -ms-flex: 1;\n\n            flex: 1;\n}\n\n.mint-cell-value {\n\n    color: #888;\n\n    display: -webkit-box;\n\n    display: -ms-flexbox;\n\n    display: flex;\n\n    -webkit-box-align: center;\n\n        -ms-flex-align: center;\n\n            align-items: center;\n}\n\n.mint-cell-value.is-link {\n\n    margin-right: 24px;\n}\n\n.mint-cell-left {\n\n    position: absolute;\n\n    height: 100%;\n\n    left: 0;\n\n    -webkit-transform: translate3d(-100%, 0, 0);\n\n            transform: translate3d(-100%, 0, 0);\n}\n\n.mint-cell-right {\n\n    position: absolute;\n\n    height: 100%;\n\n    right: 0;\n\n    top: 0;\n\n    -webkit-transform: translate3d(100%, 0, 0);\n\n            transform: translate3d(100%, 0, 0);\n}\n\n.mint-cell-allow-right::after {\n\n    border: solid 2px #c8c8cd;\n\n    border-bottom-width: 0;\n\n    border-left-width: 0;\n\n    content: \" \";\n\n    top: 50%;\n\n    right: 20px;\n\n    position: absolute;\n\n    width: 5px;\n\n    height: 5px;\n\n    -webkit-transform: translateY(-50%) rotate(45deg);\n\n            transform: translateY(-50%) rotate(45deg);\n}\n", ""]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*!
	 * Vue.js v1.0.28
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	'use strict';
	
	function set(obj, key, val) {
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return;
	  }
	  if (obj._isVue) {
	    set(obj._data, key, val);
	    return;
	  }
	  var ob = obj.__ob__;
	  if (!ob) {
	    obj[key] = val;
	    return;
	  }
	  ob.convert(key, val);
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._proxy(key);
	      vm._digest();
	    }
	  }
	  return val;
	}
	
	/**
	 * Delete a property and trigger change if necessary.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 */
	
	function del(obj, key) {
	  if (!hasOwn(obj, key)) {
	    return;
	  }
	  delete obj[key];
	  var ob = obj.__ob__;
	  if (!ob) {
	    if (obj._isVue) {
	      delete obj._data[key];
	      obj._digest();
	    }
	    return;
	  }
	  ob.dep.notify();
	  if (ob.vms) {
	    var i = ob.vms.length;
	    while (i--) {
	      var vm = ob.vms[i];
	      vm._unproxy(key);
	      vm._digest();
	    }
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	 * Check whether the object has the property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @return {Boolean}
	 */
	
	function hasOwn(obj, key) {
	  return hasOwnProperty.call(obj, key);
	}
	
	/**
	 * Check if an expression is a literal value.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;
	
	function isLiteral(exp) {
	  return literalValueRE.test(exp);
	}
	
	/**
	 * Check if a string starts with $ or _
	 *
	 * @param {String} str
	 * @return {Boolean}
	 */
	
	function isReserved(str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F;
	}
	
	/**
	 * Guard text output, make sure undefined outputs
	 * empty string
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function _toString(value) {
	  return value == null ? '' : value.toString();
	}
	
	/**
	 * Check and convert possible numeric strings to numbers
	 * before setting back to data
	 *
	 * @param {*} value
	 * @return {*|Number}
	 */
	
	function toNumber(value) {
	  if (typeof value !== 'string') {
	    return value;
	  } else {
	    var parsed = Number(value);
	    return isNaN(parsed) ? value : parsed;
	  }
	}
	
	/**
	 * Convert string boolean literals into real booleans.
	 *
	 * @param {*} value
	 * @return {*|Boolean}
	 */
	
	function toBoolean(value) {
	  return value === 'true' ? true : value === 'false' ? false : value;
	}
	
	/**
	 * Strip quotes from a string
	 *
	 * @param {String} str
	 * @return {String | false}
	 */
	
	function stripQuotes(str) {
	  var a = str.charCodeAt(0);
	  var b = str.charCodeAt(str.length - 1);
	  return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
	}
	
	/**
	 * Camelize a hyphen-delimited string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var camelizeRE = /-(\w)/g;
	
	function camelize(str) {
	  return str.replace(camelizeRE, toUpper);
	}
	
	function toUpper(_, c) {
	  return c ? c.toUpperCase() : '';
	}
	
	/**
	 * Hyphenate a camelCase string.
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var hyphenateRE = /([^-])([A-Z])/g;
	
	function hyphenate(str) {
	  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
	}
	
	/**
	 * Converts hyphen/underscore/slash delimitered names into
	 * camelized classNames.
	 *
	 * e.g. my-component => MyComponent
	 *      some_else    => SomeElse
	 *      some/comp    => SomeComp
	 *
	 * @param {String} str
	 * @return {String}
	 */
	
	var classifyRE = /(?:^|[-_\/])(\w)/g;
	
	function classify(str) {
	  return str.replace(classifyRE, toUpper);
	}
	
	/**
	 * Simple bind, faster than native
	 *
	 * @param {Function} fn
	 * @param {Object} ctx
	 * @return {Function}
	 */
	
	function bind(fn, ctx) {
	  return function (a) {
	    var l = arguments.length;
	    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
	  };
	}
	
	/**
	 * Convert an Array-like object to a real Array.
	 *
	 * @param {Array-like} list
	 * @param {Number} [start] - start index
	 * @return {Array}
	 */
	
	function toArray(list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret;
	}
	
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} to
	 * @param {Object} from
	 */
	
	function extend(to, from) {
	  var keys = Object.keys(from);
	  var i = keys.length;
	  while (i--) {
	    to[keys[i]] = from[keys[i]];
	  }
	  return to;
	}
	
	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	function isObject(obj) {
	  return obj !== null && typeof obj === 'object';
	}
	
	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	
	function isPlainObject(obj) {
	  return toString.call(obj) === OBJECT_STRING;
	}
	
	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */
	
	var isArray = Array.isArray;
	
	/**
	 * Define a property.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 * @param {Boolean} [enumerable]
	 */
	
	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}
	
	/**
	 * Debounce a function so it only gets called after the
	 * input stops arriving after the given wait period.
	 *
	 * @param {Function} func
	 * @param {Number} wait
	 * @return {Function} - the debounced function
	 */
	
	function _debounce(func, wait) {
	  var timeout, args, context, timestamp, result;
	  var later = function later() {
	    var last = Date.now() - timestamp;
	    if (last < wait && last >= 0) {
	      timeout = setTimeout(later, wait - last);
	    } else {
	      timeout = null;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    }
	  };
	  return function () {
	    context = this;
	    args = arguments;
	    timestamp = Date.now();
	    if (!timeout) {
	      timeout = setTimeout(later, wait);
	    }
	    return result;
	  };
	}
	
	/**
	 * Manual indexOf because it's slightly faster than
	 * native.
	 *
	 * @param {Array} arr
	 * @param {*} obj
	 */
	
	function indexOf(arr, obj) {
	  var i = arr.length;
	  while (i--) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	}
	
	/**
	 * Make a cancellable version of an async callback.
	 *
	 * @param {Function} fn
	 * @return {Function}
	 */
	
	function cancellable(fn) {
	  var cb = function cb() {
	    if (!cb.cancelled) {
	      return fn.apply(this, arguments);
	    }
	  };
	  cb.cancel = function () {
	    cb.cancelled = true;
	  };
	  return cb;
	}
	
	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 *
	 * @param {*} a
	 * @param {*} b
	 * @return {Boolean}
	 */
	
	function looseEqual(a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
	  /* eslint-enable eqeqeq */
	}
	
	var hasProto = ('__proto__' in {});
	
	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
	
	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
	
	// UA sniffing for working around browser-specific quirks
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && UA.indexOf('trident') > 0;
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
	
	var transitionProp = undefined;
	var transitionEndEvent = undefined;
	var animationProp = undefined;
	var animationEndEvent = undefined;
	
	// Transition property/event sniffing
	if (inBrowser && !isIE9) {
	  var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
	  var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
	  transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
	  transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
	  animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
	  animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
	}
	
	/* istanbul ignore next */
	function isNative(Ctor) {
	  return (/native code/.test(Ctor.toString())
	  );
	}
	
	/**
	 * Defer a task to execute it asynchronously. Ideally this
	 * should be executed as a microtask, so we leverage
	 * MutationObserver if it's available, and fallback to
	 * setTimeout(0).
	 *
	 * @param {Function} cb
	 * @param {Object} ctx
	 */
	
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc = undefined;
	
	  function nextTickHandler() {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }
	
	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    var noop = function noop() {};
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) setTimeout(noop);
	    };
	  } else if (typeof MutationObserver !== 'undefined') {
	    // use MutationObserver where native Promise is not available,
	    // e.g. IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = setTimeout;
	  }
	
	  return function (cb, ctx) {
	    var func = ctx ? function () {
	      cb.call(ctx);
	    } : cb;
	    callbacks.push(func);
	    if (pending) return;
	    pending = true;
	    timerFunc(nextTickHandler, 0);
	  };
	})();
	
	var _Set = undefined;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = function () {
	    this.set = Object.create(null);
	  };
	  _Set.prototype.has = function (key) {
	    return this.set[key] !== undefined;
	  };
	  _Set.prototype.add = function (key) {
	    this.set[key] = 1;
	  };
	  _Set.prototype.clear = function () {
	    this.set = Object.create(null);
	  };
	}
	
	function Cache(limit) {
	  this.size = 0;
	  this.limit = limit;
	  this.head = this.tail = undefined;
	  this._keymap = Object.create(null);
	}
	
	var p = Cache.prototype;
	
	/**
	 * Put <value> into the cache associated with <key>.
	 * Returns the entry which was removed to make room for
	 * the new entry. Otherwise undefined is returned.
	 * (i.e. if there was enough room already).
	 *
	 * @param {String} key
	 * @param {*} value
	 * @return {Entry|undefined}
	 */
	
	p.put = function (key, value) {
	  var removed;
	
	  var entry = this.get(key, true);
	  if (!entry) {
	    if (this.size === this.limit) {
	      removed = this.shift();
	    }
	    entry = {
	      key: key
	    };
	    this._keymap[key] = entry;
	    if (this.tail) {
	      this.tail.newer = entry;
	      entry.older = this.tail;
	    } else {
	      this.head = entry;
	    }
	    this.tail = entry;
	    this.size++;
	  }
	  entry.value = value;
	
	  return removed;
	};
	
	/**
	 * Purge the least recently used (oldest) entry from the
	 * cache. Returns the removed entry or undefined if the
	 * cache was empty.
	 */
	
	p.shift = function () {
	  var entry = this.head;
	  if (entry) {
	    this.head = this.head.newer;
	    this.head.older = undefined;
	    entry.newer = entry.older = undefined;
	    this._keymap[entry.key] = undefined;
	    this.size--;
	  }
	  return entry;
	};
	
	/**
	 * Get and register recent use of <key>. Returns the value
	 * associated with <key> or undefined if not in cache.
	 *
	 * @param {String} key
	 * @param {Boolean} returnEntry
	 * @return {Entry|*}
	 */
	
	p.get = function (key, returnEntry) {
	  var entry = this._keymap[key];
	  if (entry === undefined) return;
	  if (entry === this.tail) {
	    return returnEntry ? entry : entry.value;
	  }
	  // HEAD--------------TAIL
	  //   <.older   .newer>
	  //  <--- add direction --
	  //   A  B  C  <D>  E
	  if (entry.newer) {
	    if (entry === this.head) {
	      this.head = entry.newer;
	    }
	    entry.newer.older = entry.older; // C <-- E.
	  }
	  if (entry.older) {
	    entry.older.newer = entry.newer; // C. --> E
	  }
	  entry.newer = undefined; // D --x
	  entry.older = this.tail; // D. --> E
	  if (this.tail) {
	    this.tail.newer = entry; // E. <-- D
	  }
	  this.tail = entry;
	  return returnEntry ? entry : entry.value;
	};
	
	var cache$1 = new Cache(1000);
	var reservedArgRE = /^in$|^-?\d+/;
	
	/**
	 * Parser state
	 */
	
	var str;
	var dir;
	var len;
	var index;
	var chr;
	var state;
	var startState = 0;
	var filterState = 1;
	var filterNameState = 2;
	var filterArgState = 3;
	
	var doubleChr = 0x22;
	var singleChr = 0x27;
	var pipeChr = 0x7C;
	var escapeChr = 0x5C;
	var spaceChr = 0x20;
	
	var expStartChr = { 0x5B: 1, 0x7B: 1, 0x28: 1 };
	var expChrPair = { 0x5B: 0x5D, 0x7B: 0x7D, 0x28: 0x29 };
	
	function peek() {
	  return str.charCodeAt(index + 1);
	}
	
	function next() {
	  return str.charCodeAt(++index);
	}
	
	function eof() {
	  return index >= len;
	}
	
	function eatSpace() {
	  while (peek() === spaceChr) {
	    next();
	  }
	}
	
	function isStringStart(chr) {
	  return chr === doubleChr || chr === singleChr;
	}
	
	function isExpStart(chr) {
	  return expStartChr[chr];
	}
	
	function isExpEnd(start, chr) {
	  return expChrPair[start] === chr;
	}
	
	function parseString() {
	  var stringQuote = next();
	  var chr;
	  while (!eof()) {
	    chr = next();
	    // escape char
	    if (chr === escapeChr) {
	      next();
	    } else if (chr === stringQuote) {
	      break;
	    }
	  }
	}
	
	function parseSpecialExp(chr) {
	  var inExp = 0;
	  var startChr = chr;
	
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	      continue;
	    }
	
	    if (startChr === chr) {
	      inExp++;
	    }
	    if (isExpEnd(startChr, chr)) {
	      inExp--;
	    }
	
	    next();
	
	    if (inExp === 0) {
	      break;
	    }
	  }
	}
	
	/**
	 * syntax:
	 * expression | filterName  [arg  arg [| filterName arg arg]]
	 */
	
	function parseExpression() {
	  var start = index;
	  while (!eof()) {
	    chr = peek();
	    if (isStringStart(chr)) {
	      parseString();
	    } else if (isExpStart(chr)) {
	      parseSpecialExp(chr);
	    } else if (chr === pipeChr) {
	      next();
	      chr = peek();
	      if (chr === pipeChr) {
	        next();
	      } else {
	        if (state === startState || state === filterArgState) {
	          state = filterState;
	        }
	        break;
	      }
	    } else if (chr === spaceChr && (state === filterNameState || state === filterArgState)) {
	      eatSpace();
	      break;
	    } else {
	      if (state === filterState) {
	        state = filterNameState;
	      }
	      next();
	    }
	  }
	
	  return str.slice(start + 1, index) || null;
	}
	
	function parseFilterList() {
	  var filters = [];
	  while (!eof()) {
	    filters.push(parseFilter());
	  }
	  return filters;
	}
	
	function parseFilter() {
	  var filter = {};
	  var args;
	
	  state = filterState;
	  filter.name = parseExpression().trim();
	
	  state = filterArgState;
	  args = parseFilterArguments();
	
	  if (args.length) {
	    filter.args = args;
	  }
	  return filter;
	}
	
	function parseFilterArguments() {
	  var args = [];
	  while (!eof() && state !== filterState) {
	    var arg = parseExpression();
	    if (!arg) {
	      break;
	    }
	    args.push(processFilterArg(arg));
	  }
	
	  return args;
	}
	
	/**
	 * Check if an argument is dynamic and strip quotes.
	 *
	 * @param {String} arg
	 * @return {Object}
	 */
	
	function processFilterArg(arg) {
	  if (reservedArgRE.test(arg)) {
	    return {
	      value: toNumber(arg),
	      dynamic: false
	    };
	  } else {
	    var stripped = stripQuotes(arg);
	    var dynamic = stripped === arg;
	    return {
	      value: dynamic ? arg : stripped,
	      dynamic: dynamic
	    };
	  }
	}
	
	/**
	 * Parse a directive value and extract the expression
	 * and its filters into a descriptor.
	 *
	 * Example:
	 *
	 * "a + 1 | uppercase" will yield:
	 * {
	 *   expression: 'a + 1',
	 *   filters: [
	 *     { name: 'uppercase', args: null }
	 *   ]
	 * }
	 *
	 * @param {String} s
	 * @return {Object}
	 */
	
	function parseDirective(s) {
	  var hit = cache$1.get(s);
	  if (hit) {
	    return hit;
	  }
	
	  // reset parser state
	  str = s;
	  dir = {};
	  len = str.length;
	  index = -1;
	  chr = '';
	  state = startState;
	
	  var filters;
	
	  if (str.indexOf('|') < 0) {
	    dir.expression = str.trim();
	  } else {
	    dir.expression = parseExpression().trim();
	    filters = parseFilterList();
	    if (filters.length) {
	      dir.filters = filters;
	    }
	  }
	
	  cache$1.put(s, dir);
	  return dir;
	}
	
	var directive = Object.freeze({
	  parseDirective: parseDirective
	});
	
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	var cache = undefined;
	var tagRE = undefined;
	var htmlRE = undefined;
	/**
	 * Escape a string so it can be used in a RegExp
	 * constructor.
	 *
	 * @param {String} str
	 */
	
	function escapeRegex(str) {
	  return str.replace(regexEscapeRE, '\\$&');
	}
	
	function compileRegex() {
	  var open = escapeRegex(config.delimiters[0]);
	  var close = escapeRegex(config.delimiters[1]);
	  var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
	  var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
	  tagRE = new RegExp(unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '|' + open + '((?:.|\\n)+?)' + close, 'g');
	  htmlRE = new RegExp('^' + unsafeOpen + '((?:.|\\n)+?)' + unsafeClose + '$');
	  // reset cache
	  cache = new Cache(1000);
	}
	
	/**
	 * Parse a template text string into an array of tokens.
	 *
	 * @param {String} text
	 * @return {Array<Object> | null}
	 *               - {String} type
	 *               - {String} value
	 *               - {Boolean} [html]
	 *               - {Boolean} [oneTime]
	 */
	
	function parseText(text) {
	  if (!cache) {
	    compileRegex();
	  }
	  var hit = cache.get(text);
	  if (hit) {
	    return hit;
	  }
	  if (!tagRE.test(text)) {
	    return null;
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index, html, value, first, oneTime;
	  /* eslint-disable no-cond-assign */
	  while (match = tagRE.exec(text)) {
	    /* eslint-enable no-cond-assign */
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push({
	        value: text.slice(lastIndex, index)
	      });
	    }
	    // tag token
	    html = htmlRE.test(match[0]);
	    value = html ? match[1] : match[2];
	    first = value.charCodeAt(0);
	    oneTime = first === 42; // *
	    value = oneTime ? value.slice(1) : value;
	    tokens.push({
	      tag: true,
	      value: value.trim(),
	      html: html,
	      oneTime: oneTime
	    });
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push({
	      value: text.slice(lastIndex)
	    });
	  }
	  cache.put(text, tokens);
	  return tokens;
	}
	
	/**
	 * Format a list of tokens into an expression.
	 * e.g. tokens parsed from 'a {{b}} c' can be serialized
	 * into one single expression as '"a " + b + " c"'.
	 *
	 * @param {Array} tokens
	 * @param {Vue} [vm]
	 * @return {String}
	 */
	
	function tokensToExp(tokens, vm) {
	  if (tokens.length > 1) {
	    return tokens.map(function (token) {
	      return formatToken(token, vm);
	    }).join('+');
	  } else {
	    return formatToken(tokens[0], vm, true);
	  }
	}
	
	/**
	 * Format a single token.
	 *
	 * @param {Object} token
	 * @param {Vue} [vm]
	 * @param {Boolean} [single]
	 * @return {String}
	 */
	
	function formatToken(token, vm, single) {
	  return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
	}
	
	/**
	 * For an attribute with multiple interpolation tags,
	 * e.g. attr="some-{{thing | filter}}", in order to combine
	 * the whole thing into a single watchable expression, we
	 * have to inline those filters. This function does exactly
	 * that. This is a bit hacky but it avoids heavy changes
	 * to directive parser and watcher mechanism.
	 *
	 * @param {String} exp
	 * @param {Boolean} single
	 * @return {String}
	 */
	
	var filterRE = /[^|]\|[^|]/;
	function inlineFilters(exp, single) {
	  if (!filterRE.test(exp)) {
	    return single ? exp : '(' + exp + ')';
	  } else {
	    var dir = parseDirective(exp);
	    if (!dir.filters) {
	      return '(' + exp + ')';
	    } else {
	      return 'this._applyFilters(' + dir.expression + // value
	      ',null,' + // oldValue (null for read)
	      JSON.stringify(dir.filters) + // filter descriptors
	      ',false)'; // write?
	    }
	  }
	}
	
	var text = Object.freeze({
	  compileRegex: compileRegex,
	  parseText: parseText,
	  tokensToExp: tokensToExp
	});
	
	var delimiters = ['{{', '}}'];
	var unsafeDelimiters = ['{{{', '}}}'];
	
	var config = Object.defineProperties({
	
	  /**
	   * Whether to print debug messages.
	   * Also enables stack trace for warnings.
	   *
	   * @type {Boolean}
	   */
	
	  debug: false,
	
	  /**
	   * Whether to suppress warnings.
	   *
	   * @type {Boolean}
	   */
	
	  silent: false,
	
	  /**
	   * Whether to use async rendering.
	   */
	
	  async: true,
	
	  /**
	   * Whether to warn against errors caught when evaluating
	   * expressions.
	   */
	
	  warnExpressionErrors: true,
	
	  /**
	   * Whether to allow devtools inspection.
	   * Disabled by default in production builds.
	   */
	
	  devtools: process.env.NODE_ENV !== 'production',
	
	  /**
	   * Internal flag to indicate the delimiters have been
	   * changed.
	   *
	   * @type {Boolean}
	   */
	
	  _delimitersChanged: true,
	
	  /**
	   * List of asset types that a component can own.
	   *
	   * @type {Array}
	   */
	
	  _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],
	
	  /**
	   * prop binding modes
	   */
	
	  _propBindingModes: {
	    ONE_WAY: 0,
	    TWO_WAY: 1,
	    ONE_TIME: 2
	  },
	
	  /**
	   * Max circular updates allowed in a batcher flush cycle.
	   */
	
	  _maxUpdateCount: 100
	
	}, {
	  delimiters: { /**
	                 * Interpolation delimiters. Changing these would trigger
	                 * the text parser to re-compile the regular expressions.
	                 *
	                 * @type {Array<String>}
	                 */
	
	    get: function get() {
	      return delimiters;
	    },
	    set: function set(val) {
	      delimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  },
	  unsafeDelimiters: {
	    get: function get() {
	      return unsafeDelimiters;
	    },
	    set: function set(val) {
	      unsafeDelimiters = val;
	      compileRegex();
	    },
	    configurable: true,
	    enumerable: true
	  }
	});
	
	var warn = undefined;
	var formatComponentName = undefined;
	
	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var hasConsole = typeof console !== 'undefined';
	
	    warn = function (msg, vm) {
	      if (hasConsole && !config.silent) {
	        console.error('[Vue warn]: ' + msg + (vm ? formatComponentName(vm) : ''));
	      }
	    };
	
	    formatComponentName = function (vm) {
	      var name = vm._isVue ? vm.$options.name : vm.name;
	      return name ? ' (found in component: <' + hyphenate(name) + '>)' : '';
	    };
	  })();
	}
	
	/**
	 * Append with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function appendWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    target.appendChild(el);
	  }, vm, cb);
	}
	
	/**
	 * InsertBefore with transition.
	 *
	 * @param {Element} el
	 * @param {Element} target
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function beforeWithTransition(el, target, vm, cb) {
	  applyTransition(el, 1, function () {
	    before(el, target);
	  }, vm, cb);
	}
	
	/**
	 * Remove with transition.
	 *
	 * @param {Element} el
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function removeWithTransition(el, vm, cb) {
	  applyTransition(el, -1, function () {
	    remove(el);
	  }, vm, cb);
	}
	
	/**
	 * Apply transitions with an operation callback.
	 *
	 * @param {Element} el
	 * @param {Number} direction
	 *                  1: enter
	 *                 -1: leave
	 * @param {Function} op - the actual DOM operation
	 * @param {Vue} vm
	 * @param {Function} [cb]
	 */
	
	function applyTransition(el, direction, op, vm, cb) {
	  var transition = el.__v_trans;
	  if (!transition ||
	  // skip if there are no js hooks and CSS transition is
	  // not supported
	  !transition.hooks && !transitionEndEvent ||
	  // skip transitions for initial compile
	  !vm._isCompiled ||
	  // if the vm is being manipulated by a parent directive
	  // during the parent's compilation phase, skip the
	  // animation.
	  vm.$parent && !vm.$parent._isCompiled) {
	    op();
	    if (cb) cb();
	    return;
	  }
	  var action = direction > 0 ? 'enter' : 'leave';
	  transition[action](op, cb);
	}
	
	var transition = Object.freeze({
	  appendWithTransition: appendWithTransition,
	  beforeWithTransition: beforeWithTransition,
	  removeWithTransition: removeWithTransition,
	  applyTransition: applyTransition
	});
	
	/**
	 * Query an element selector if it's not an element already.
	 *
	 * @param {String|Element} el
	 * @return {Element}
	 */
	
	function query(el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
	    }
	  }
	  return el;
	}
	
	/**
	 * Check if a node is in the document.
	 * Note: document.documentElement.contains should work here
	 * but always returns false for comment nodes in phantomjs,
	 * making unit tests difficult. This is fixed by doing the
	 * contains() check on the node's parentNode instead of
	 * the node itself.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function inDoc(node) {
	  if (!node) return false;
	  var doc = node.ownerDocument.documentElement;
	  var parent = node.parentNode;
	  return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
	}
	
	/**
	 * Get and remove an attribute from a node.
	 *
	 * @param {Node} node
	 * @param {String} _attr
	 */
	
	function getAttr(node, _attr) {
	  var val = node.getAttribute(_attr);
	  if (val !== null) {
	    node.removeAttribute(_attr);
	  }
	  return val;
	}
	
	/**
	 * Get an attribute with colon or v-bind: prefix.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {String|null}
	 */
	
	function getBindAttr(node, name) {
	  var val = getAttr(node, ':' + name);
	  if (val === null) {
	    val = getAttr(node, 'v-bind:' + name);
	  }
	  return val;
	}
	
	/**
	 * Check the presence of a bind attribute.
	 *
	 * @param {Node} node
	 * @param {String} name
	 * @return {Boolean}
	 */
	
	function hasBindAttr(node, name) {
	  return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
	}
	
	/**
	 * Insert el before target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function before(el, target) {
	  target.parentNode.insertBefore(el, target);
	}
	
	/**
	 * Insert el after target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function after(el, target) {
	  if (target.nextSibling) {
	    before(el, target.nextSibling);
	  } else {
	    target.parentNode.appendChild(el);
	  }
	}
	
	/**
	 * Remove el from DOM
	 *
	 * @param {Element} el
	 */
	
	function remove(el) {
	  el.parentNode.removeChild(el);
	}
	
	/**
	 * Prepend el to target
	 *
	 * @param {Element} el
	 * @param {Element} target
	 */
	
	function prepend(el, target) {
	  if (target.firstChild) {
	    before(el, target.firstChild);
	  } else {
	    target.appendChild(el);
	  }
	}
	
	/**
	 * Replace target with el
	 *
	 * @param {Element} target
	 * @param {Element} el
	 */
	
	function replace(target, el) {
	  var parent = target.parentNode;
	  if (parent) {
	    parent.replaceChild(el, target);
	  }
	}
	
	/**
	 * Add event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 * @param {Boolean} [useCapture]
	 */
	
	function on(el, event, cb, useCapture) {
	  el.addEventListener(event, cb, useCapture);
	}
	
	/**
	 * Remove event listener shorthand.
	 *
	 * @param {Element} el
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	function off(el, event, cb) {
	  el.removeEventListener(event, cb);
	}
	
	/**
	 * For IE9 compat: when both class and :class are present
	 * getAttribute('class') returns wrong value...
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getClass(el) {
	  var classname = el.className;
	  if (typeof classname === 'object') {
	    classname = classname.baseVal || '';
	  }
	  return classname;
	}
	
	/**
	 * In IE9, setAttribute('class') will result in empty class
	 * if the element also has the :class attribute; However in
	 * PhantomJS, setting `className` does not work on SVG elements...
	 * So we have to do a conditional check here.
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function setClass(el, cls) {
	  /* istanbul ignore if */
	  if (isIE9 && !/svg$/.test(el.namespaceURI)) {
	    el.className = cls;
	  } else {
	    el.setAttribute('class', cls);
	  }
	}
	
	/**
	 * Add class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function addClass(el, cls) {
	  if (el.classList) {
	    el.classList.add(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      setClass(el, (cur + cls).trim());
	    }
	  }
	}
	
	/**
	 * Remove class with compatibility for IE & SVG
	 *
	 * @param {Element} el
	 * @param {String} cls
	 */
	
	function removeClass(el, cls) {
	  if (el.classList) {
	    el.classList.remove(cls);
	  } else {
	    var cur = ' ' + getClass(el) + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    setClass(el, cur.trim());
	  }
	  if (!el.className) {
	    el.removeAttribute('class');
	  }
	}
	
	/**
	 * Extract raw content inside an element into a temporary
	 * container div
	 *
	 * @param {Element} el
	 * @param {Boolean} asFragment
	 * @return {Element|DocumentFragment}
	 */
	
	function extractContent(el, asFragment) {
	  var child;
	  var rawContent;
	  /* istanbul ignore if */
	  if (isTemplate(el) && isFragment(el.content)) {
	    el = el.content;
	  }
	  if (el.hasChildNodes()) {
	    trimNode(el);
	    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
	    /* eslint-disable no-cond-assign */
	    while (child = el.firstChild) {
	      /* eslint-enable no-cond-assign */
	      rawContent.appendChild(child);
	    }
	  }
	  return rawContent;
	}
	
	/**
	 * Trim possible empty head/tail text and comment
	 * nodes inside a parent.
	 *
	 * @param {Node} node
	 */
	
	function trimNode(node) {
	  var child;
	  /* eslint-disable no-sequences */
	  while ((child = node.firstChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  while ((child = node.lastChild, isTrimmable(child))) {
	    node.removeChild(child);
	  }
	  /* eslint-enable no-sequences */
	}
	
	function isTrimmable(node) {
	  return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
	}
	
	/**
	 * Check if an element is a template tag.
	 * Note if the template appears inside an SVG its tagName
	 * will be in lowercase.
	 *
	 * @param {Element} el
	 */
	
	function isTemplate(el) {
	  return el.tagName && el.tagName.toLowerCase() === 'template';
	}
	
	/**
	 * Create an "anchor" for performing dom insertion/removals.
	 * This is used in a number of scenarios:
	 * - fragment instance
	 * - v-html
	 * - v-if
	 * - v-for
	 * - component
	 *
	 * @param {String} content
	 * @param {Boolean} persist - IE trashes empty textNodes on
	 *                            cloneNode(true), so in certain
	 *                            cases the anchor needs to be
	 *                            non-empty to be persisted in
	 *                            templates.
	 * @return {Comment|Text}
	 */
	
	function createAnchor(content, persist) {
	  var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
	  anchor.__v_anchor = true;
	  return anchor;
	}
	
	/**
	 * Find a component ref attribute that starts with $.
	 *
	 * @param {Element} node
	 * @return {String|undefined}
	 */
	
	var refRE = /^v-ref:/;
	
	function findRef(node) {
	  if (node.hasAttributes()) {
	    var attrs = node.attributes;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      var name = attrs[i].name;
	      if (refRE.test(name)) {
	        return camelize(name.replace(refRE, ''));
	      }
	    }
	  }
	}
	
	/**
	 * Map a function to a range of nodes .
	 *
	 * @param {Node} node
	 * @param {Node} end
	 * @param {Function} op
	 */
	
	function mapNodeRange(node, end, op) {
	  var next;
	  while (node !== end) {
	    next = node.nextSibling;
	    op(node);
	    node = next;
	  }
	  op(end);
	}
	
	/**
	 * Remove a range of nodes with transition, store
	 * the nodes in a fragment with correct ordering,
	 * and call callback when done.
	 *
	 * @param {Node} start
	 * @param {Node} end
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Function} cb
	 */
	
	function removeNodeRange(start, end, vm, frag, cb) {
	  var done = false;
	  var removed = 0;
	  var nodes = [];
	  mapNodeRange(start, end, function (node) {
	    if (node === end) done = true;
	    nodes.push(node);
	    removeWithTransition(node, vm, onRemoved);
	  });
	  function onRemoved() {
	    removed++;
	    if (done && removed >= nodes.length) {
	      for (var i = 0; i < nodes.length; i++) {
	        frag.appendChild(nodes[i]);
	      }
	      cb && cb();
	    }
	  }
	}
	
	/**
	 * Check if a node is a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isFragment(node) {
	  return node && node.nodeType === 11;
	}
	
	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 *
	 * @param {Element} el
	 * @return {String}
	 */
	
	function getOuterHTML(el) {
	  if (el.outerHTML) {
	    return el.outerHTML;
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML;
	  }
	}
	
	var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i;
	var reservedTagRE = /^(slot|partial|component)$/i;
	
	var isUnknownElement = undefined;
	if (process.env.NODE_ENV !== 'production') {
	  isUnknownElement = function (el, tag) {
	    if (tag.indexOf('-') > -1) {
	      // http://stackoverflow.com/a/28210364/1070244
	      return el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
	    } else {
	      return (/HTMLUnknownElement/.test(el.toString()) &&
	        // Chrome returns unknown for several HTML5 elements.
	        // https://code.google.com/p/chromium/issues/detail?id=540526
	        // Firefox returns unknown for some "Interactive elements."
	        !/^(data|time|rtc|rb|details|dialog|summary)$/.test(tag)
	      );
	    }
	  };
	}
	
	/**
	 * Check if an element is a component, if yes return its
	 * component id.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function checkComponentAttr(el, options) {
	  var tag = el.tagName.toLowerCase();
	  var hasAttrs = el.hasAttributes();
	  if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
	    if (resolveAsset(options, 'components', tag)) {
	      return { id: tag };
	    } else {
	      var is = hasAttrs && getIsBinding(el, options);
	      if (is) {
	        return is;
	      } else if (process.env.NODE_ENV !== 'production') {
	        var expectedTag = options._componentNameMap && options._componentNameMap[tag];
	        if (expectedTag) {
	          warn('Unknown custom element: <' + tag + '> - ' + 'did you mean <' + expectedTag + '>? ' + 'HTML is case-insensitive, remember to use kebab-case in templates.');
	        } else if (isUnknownElement(el, tag)) {
	          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
	        }
	      }
	    }
	  } else if (hasAttrs) {
	    return getIsBinding(el, options);
	  }
	}
	
	/**
	 * Get "is" binding from an element.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Object|undefined}
	 */
	
	function getIsBinding(el, options) {
	  // dynamic syntax
	  var exp = el.getAttribute('is');
	  if (exp != null) {
	    if (resolveAsset(options, 'components', exp)) {
	      el.removeAttribute('is');
	      return { id: exp };
	    }
	  } else {
	    exp = getBindAttr(el, 'is');
	    if (exp != null) {
	      return { id: exp, dynamic: true };
	    }
	  }
	}
	
	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 *
	 * All strategy functions follow the same signature:
	 *
	 * @param {*} parentVal
	 * @param {*} childVal
	 * @param {Vue} [vm]
	 */
	
	var strats = config.optionMergeStrategies = Object.create(null);
	
	/**
	 * Helper that recursively merges two data objects together.
	 */
	
	function mergeData(to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to;
	}
	
	/**
	 * Data
	 */
	
	strats.data = function (parentVal, childVal, vm) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal;
	    }
	    if (typeof childVal !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	      return parentVal;
	    }
	    if (!parentVal) {
	      return childVal;
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn() {
	      return mergeData(childVal.call(this), parentVal.call(this));
	    };
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn() {
	      // instance merge
	      var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
	      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData);
	      } else {
	        return defaultData;
	      }
	    };
	  }
	};
	
	/**
	 * El
	 */
	
	strats.el = function (parentVal, childVal, vm) {
	  if (!vm && childVal && typeof childVal !== 'function') {
	    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
	    return;
	  }
	  var ret = childVal || parentVal;
	  // invoke the element factory if this is instance merge
	  return vm && typeof ret === 'function' ? ret.call(vm) : ret;
	};
	
	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	
	strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = strats.activate = function (parentVal, childVal) {
	  return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
	};
	
	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	
	function mergeAssets(parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal ? extend(res, guardArrayAssets(childVal)) : res;
	}
	
	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});
	
	/**
	 * Events & Watchers.
	 *
	 * Events & watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	
	strats.watch = strats.events = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent ? parent.concat(child) : [child];
	  }
	  return ret;
	};
	
	/**
	 * Other object hashes.
	 */
	
	strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
	  if (!childVal) return parentVal;
	  if (!parentVal) return childVal;
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret;
	};
	
	/**
	 * Default strategy.
	 */
	
	var defaultStrat = function defaultStrat(parentVal, childVal) {
	  return childVal === undefined ? parentVal : childVal;
	};
	
	/**
	 * Make sure component options get converted to actual
	 * constructors.
	 *
	 * @param {Object} options
	 */
	
	function guardComponents(options) {
	  if (options.components) {
	    var components = options.components = guardArrayAssets(options.components);
	    var ids = Object.keys(components);
	    var def;
	    if (process.env.NODE_ENV !== 'production') {
	      var map = options._componentNameMap = {};
	    }
	    for (var i = 0, l = ids.length; i < l; i++) {
	      var key = ids[i];
	      if (commonTagRE.test(key) || reservedTagRE.test(key)) {
	        process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
	        continue;
	      }
	      // record a all lowercase <-> kebab-case mapping for
	      // possible custom element case error warning
	      if (process.env.NODE_ENV !== 'production') {
	        map[key.replace(/-/g, '').toLowerCase()] = hyphenate(key);
	      }
	      def = components[key];
	      if (isPlainObject(def)) {
	        components[key] = Vue.extend(def);
	      }
	    }
	  }
	}
	
	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 *
	 * @param {Object} options
	 */
	
	function guardProps(options) {
	  var props = options.props;
	  var i, val;
	  if (isArray(props)) {
	    options.props = {};
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        options.props[val] = null;
	      } else if (val.name) {
	        options.props[val.name] = val;
	      }
	    }
	  } else if (isPlainObject(props)) {
	    var keys = Object.keys(props);
	    i = keys.length;
	    while (i--) {
	      val = props[keys[i]];
	      if (typeof val === 'function') {
	        props[keys[i]] = { type: val };
	      }
	    }
	  }
	}
	
	/**
	 * Guard an Array-format assets option and converted it
	 * into the key-value Object format.
	 *
	 * @param {Object|Array} assets
	 * @return {Object}
	 */
	
	function guardArrayAssets(assets) {
	  if (isArray(assets)) {
	    var res = {};
	    var i = assets.length;
	    var asset;
	    while (i--) {
	      asset = assets[i];
	      var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
	      if (!id) {
	        process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
	      } else {
	        res[id] = asset;
	      }
	    }
	    return res;
	  }
	  return assets;
	}
	
	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 *
	 * @param {Object} parent
	 * @param {Object} child
	 * @param {Vue} [vm] - if vm is present, indicates this is
	 *                     an instantiation merge.
	 */
	
	function mergeOptions(parent, child, vm) {
	  guardComponents(child);
	  guardProps(child);
	  if (process.env.NODE_ENV !== 'production') {
	    if (child.propsData && !vm) {
	      warn('propsData can only be used as an instantiation option.');
	    }
	  }
	  var options = {};
	  var key;
	  if (child['extends']) {
	    parent = typeof child['extends'] === 'function' ? mergeOptions(parent, child['extends'].options, vm) : mergeOptions(parent, child['extends'], vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      var mixinOptions = mixin.prototype instanceof Vue ? mixin.options : mixin;
	      parent = mergeOptions(parent, mixinOptions, vm);
	    }
	  }
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField(key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options;
	}
	
	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 *
	 * @param {Object} options
	 * @param {String} type
	 * @param {String} id
	 * @param {Boolean} warnMissing
	 * @return {Object|Function}
	 */
	
	function resolveAsset(options, type, id, warnMissing) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return;
	  }
	  var assets = options[type];
	  var camelizedId;
	  var res = assets[id] ||
	  // camelCase ID
	  assets[camelizedId = camelize(id)] ||
	  // Pascal Case ID
	  assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
	  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
	    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
	  }
	  return res;
	}
	
	var uid$1 = 0;
	
	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */
	function Dep() {
	  this.id = uid$1++;
	  this.subs = [];
	}
	
	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	
	/**
	 * Add a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};
	
	/**
	 * Remove a directive subscriber.
	 *
	 * @param {Directive} sub
	 */
	
	Dep.prototype.removeSub = function (sub) {
	  this.subs.$remove(sub);
	};
	
	/**
	 * Add self as a dependency to the target watcher.
	 */
	
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};
	
	/**
	 * Notify all subscribers of a new value.
	 */
	
	Dep.prototype.notify = function () {
	  // stablize the subscriber list first
	  var subs = toArray(this.subs);
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};
	
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto)
	
	/**
	 * Intercept mutating methods and emit events
	 */
	
	;['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator() {
	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break;
	      case 'unshift':
	        inserted = args;
	        break;
	      case 'splice':
	        inserted = args.slice(2);
	        break;
	    }
	    if (inserted) ob.observeArray(inserted);
	    // notify change
	    ob.dep.notify();
	    return result;
	  });
	});
	
	/**
	 * Swap the element at the given index with a new value
	 * and emits corresponding event.
	 *
	 * @param {Number} index
	 * @param {*} val
	 * @return {*} - replaced element
	 */
	
	def(arrayProto, '$set', function $set(index, val) {
	  if (index >= this.length) {
	    this.length = Number(index) + 1;
	  }
	  return this.splice(index, 1, val)[0];
	});
	
	/**
	 * Convenience method to remove the element at given index or target element reference.
	 *
	 * @param {*} item
	 */
	
	def(arrayProto, '$remove', function $remove(item) {
	  /* istanbul ignore if */
	  if (!this.length) return;
	  var index = indexOf(this, item);
	  if (index > -1) {
	    return this.splice(index, 1);
	  }
	});
	
	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
	
	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However in certain cases, e.g.
	 * v-for scope alias and props, we don't want to force conversion
	 * because the value may be a nested value under a frozen data structure.
	 *
	 * So whenever we want to set a reactive property without forcing
	 * conversion on the new value, we wrap that call inside this function.
	 */
	
	var shouldConvert = true;
	
	function withoutConversion(fn) {
	  shouldConvert = false;
	  fn();
	  shouldConvert = true;
	}
	
	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 *
	 * @param {Array|Object} value
	 * @constructor
	 */
	
	function Observer(value) {
	  this.value = value;
	  this.dep = new Dep();
	  def(value, '__ob__', this);
	  if (isArray(value)) {
	    var augment = hasProto ? protoAugment : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	}
	
	// Instance methods
	
	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 *
	 * @param {Object} obj
	 */
	
	Observer.prototype.walk = function (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    this.convert(keys[i], obj[keys[i]]);
	  }
	};
	
	/**
	 * Observe a list of Array items.
	 *
	 * @param {Array} items
	 */
	
	Observer.prototype.observeArray = function (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};
	
	/**
	 * Convert a property into getter/setter so we can emit
	 * the events when the property is accessed/changed.
	 *
	 * @param {String} key
	 * @param {*} val
	 */
	
	Observer.prototype.convert = function (key, val) {
	  defineReactive(this.value, key, val);
	};
	
	/**
	 * Add an owner vm, so that when $set/$delete mutations
	 * happen we can notify owner vms to proxy the keys and
	 * digest the watchers. This is only called when the object
	 * is observed as an instance's root $data.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.addVm = function (vm) {
	  (this.vms || (this.vms = [])).push(vm);
	};
	
	/**
	 * Remove an owner vm. This is called when the object is
	 * swapped out as an instance's $data object.
	 *
	 * @param {Vue} vm
	 */
	
	Observer.prototype.removeVm = function (vm) {
	  this.vms.$remove(vm);
	};
	
	// helpers
	
	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 *
	 * @param {Object|Array} target
	 * @param {Object} src
	 */
	
	function protoAugment(target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}
	
	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * @param {Object|Array} target
	 * @param {Object} proto
	 */
	
	function copyAugment(target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}
	
	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 *
	 * @param {*} value
	 * @param {Vue} [vm]
	 * @return {Observer|undefined}
	 * @static
	 */
	
	function observe(value, vm) {
	  if (!value || typeof value !== 'object') {
	    return;
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (shouldConvert && (isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
	    ob = new Observer(value);
	  }
	  if (ob && vm) {
	    ob.addVm(vm);
	  }
	  return ob;
	}
	
	/**
	 * Define a reactive property on an Object.
	 *
	 * @param {Object} obj
	 * @param {String} key
	 * @param {*} val
	 */
	
	function defineReactive(obj, key, val) {
	  var dep = new Dep();
	
	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return;
	  }
	
	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;
	
	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter() {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (isArray(value)) {
	          for (var e, i = 0, l = value.length; i < l; i++) {
	            e = value[i];
	            e && e.__ob__ && e.__ob__.dep.depend();
	          }
	        }
	      }
	      return value;
	    },
	    set: function reactiveSetter(newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return;
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}
	
	
	
	var util = Object.freeze({
		defineReactive: defineReactive,
		set: set,
		del: del,
		hasOwn: hasOwn,
		isLiteral: isLiteral,
		isReserved: isReserved,
		_toString: _toString,
		toNumber: toNumber,
		toBoolean: toBoolean,
		stripQuotes: stripQuotes,
		camelize: camelize,
		hyphenate: hyphenate,
		classify: classify,
		bind: bind,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		def: def,
		debounce: _debounce,
		indexOf: indexOf,
		cancellable: cancellable,
		looseEqual: looseEqual,
		isArray: isArray,
		hasProto: hasProto,
		inBrowser: inBrowser,
		devtools: devtools,
		isIE: isIE,
		isIE9: isIE9,
		isAndroid: isAndroid,
		isIOS: isIOS,
		get transitionProp () { return transitionProp; },
		get transitionEndEvent () { return transitionEndEvent; },
		get animationProp () { return animationProp; },
		get animationEndEvent () { return animationEndEvent; },
		nextTick: nextTick,
		get _Set () { return _Set; },
		query: query,
		inDoc: inDoc,
		getAttr: getAttr,
		getBindAttr: getBindAttr,
		hasBindAttr: hasBindAttr,
		before: before,
		after: after,
		remove: remove,
		prepend: prepend,
		replace: replace,
		on: on,
		off: off,
		setClass: setClass,
		addClass: addClass,
		removeClass: removeClass,
		extractContent: extractContent,
		trimNode: trimNode,
		isTemplate: isTemplate,
		createAnchor: createAnchor,
		findRef: findRef,
		mapNodeRange: mapNodeRange,
		removeNodeRange: removeNodeRange,
		isFragment: isFragment,
		getOuterHTML: getOuterHTML,
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		checkComponentAttr: checkComponentAttr,
		commonTagRE: commonTagRE,
		reservedTagRE: reservedTagRE,
		get warn () { return warn; }
	});
	
	var uid = 0;
	
	function initMixin (Vue) {
	  /**
	   * The main init sequence. This is called for every
	   * instance, including ones that are created from extended
	   * constructors.
	   *
	   * @param {Object} options - this options object should be
	   *                           the result of merging class
	   *                           options and the options passed
	   *                           in to the constructor.
	   */
	
	  Vue.prototype._init = function (options) {
	    options = options || {};
	
	    this.$el = null;
	    this.$parent = options.parent;
	    this.$root = this.$parent ? this.$parent.$root : this;
	    this.$children = [];
	    this.$refs = {}; // child vm references
	    this.$els = {}; // element references
	    this._watchers = []; // all watchers as an array
	    this._directives = []; // all directives
	
	    // a uid
	    this._uid = uid++;
	
	    // a flag to avoid this being observed
	    this._isVue = true;
	
	    // events bookkeeping
	    this._events = {}; // registered callbacks
	    this._eventsCount = {}; // for $broadcast optimization
	
	    // fragment instance properties
	    this._isFragment = false;
	    this._fragment = // @type {DocumentFragment}
	    this._fragmentStart = // @type {Text|Comment}
	    this._fragmentEnd = null; // @type {Text|Comment}
	
	    // lifecycle state
	    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
	    this._unlinkFn = null;
	
	    // context:
	    // if this is a transcluded component, context
	    // will be the common parent vm of this instance
	    // and its host.
	    this._context = options._context || this.$parent;
	
	    // scope:
	    // if this is inside an inline v-for, the scope
	    // will be the intermediate scope created for this
	    // repeat fragment. this is used for linking props
	    // and container directives.
	    this._scope = options._scope;
	
	    // fragment:
	    // if this instance is compiled inside a Fragment, it
	    // needs to register itself as a child of that fragment
	    // for attach/detach to work properly.
	    this._frag = options._frag;
	    if (this._frag) {
	      this._frag.children.push(this);
	    }
	
	    // push self into parent / transclusion host
	    if (this.$parent) {
	      this.$parent.$children.push(this);
	    }
	
	    // merge options.
	    options = this.$options = mergeOptions(this.constructor.options, options, this);
	
	    // set ref
	    this._updateRef();
	
	    // initialize data as empty object.
	    // it will be filled up in _initData().
	    this._data = {};
	
	    // call init hook
	    this._callHook('init');
	
	    // initialize data observation and scope inheritance.
	    this._initState();
	
	    // setup event system and option events.
	    this._initEvents();
	
	    // call created hook
	    this._callHook('created');
	
	    // if `el` option is passed, start compilation.
	    if (options.el) {
	      this.$mount(options.el);
	    }
	  };
	}
	
	var pathCache = new Cache(1000);
	
	// actions
	var APPEND = 0;
	var PUSH = 1;
	var INC_SUB_PATH_DEPTH = 2;
	var PUSH_SUB_PATH = 3;
	
	// states
	var BEFORE_PATH = 0;
	var IN_PATH = 1;
	var BEFORE_IDENT = 2;
	var IN_IDENT = 3;
	var IN_SUB_PATH = 4;
	var IN_SINGLE_QUOTE = 5;
	var IN_DOUBLE_QUOTE = 6;
	var AFTER_PATH = 7;
	var ERROR = 8;
	
	var pathStateMachine = [];
	
	pathStateMachine[BEFORE_PATH] = {
	  'ws': [BEFORE_PATH],
	  'ident': [IN_IDENT, APPEND],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[IN_PATH] = {
	  'ws': [IN_PATH],
	  '.': [BEFORE_IDENT],
	  '[': [IN_SUB_PATH],
	  'eof': [AFTER_PATH]
	};
	
	pathStateMachine[BEFORE_IDENT] = {
	  'ws': [BEFORE_IDENT],
	  'ident': [IN_IDENT, APPEND]
	};
	
	pathStateMachine[IN_IDENT] = {
	  'ident': [IN_IDENT, APPEND],
	  '0': [IN_IDENT, APPEND],
	  'number': [IN_IDENT, APPEND],
	  'ws': [IN_PATH, PUSH],
	  '.': [BEFORE_IDENT, PUSH],
	  '[': [IN_SUB_PATH, PUSH],
	  'eof': [AFTER_PATH, PUSH]
	};
	
	pathStateMachine[IN_SUB_PATH] = {
	  "'": [IN_SINGLE_QUOTE, APPEND],
	  '"': [IN_DOUBLE_QUOTE, APPEND],
	  '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
	  ']': [IN_PATH, PUSH_SUB_PATH],
	  'eof': ERROR,
	  'else': [IN_SUB_PATH, APPEND]
	};
	
	pathStateMachine[IN_SINGLE_QUOTE] = {
	  "'": [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_SINGLE_QUOTE, APPEND]
	};
	
	pathStateMachine[IN_DOUBLE_QUOTE] = {
	  '"': [IN_SUB_PATH, APPEND],
	  'eof': ERROR,
	  'else': [IN_DOUBLE_QUOTE, APPEND]
	};
	
	/**
	 * Determine the type of a character in a keypath.
	 *
	 * @param {Char} ch
	 * @return {String} type
	 */
	
	function getPathCharType(ch) {
	  if (ch === undefined) {
	    return 'eof';
	  }
	
	  var code = ch.charCodeAt(0);
	
	  switch (code) {
	    case 0x5B: // [
	    case 0x5D: // ]
	    case 0x2E: // .
	    case 0x22: // "
	    case 0x27: // '
	    case 0x30:
	      // 0
	      return ch;
	
	    case 0x5F: // _
	    case 0x24:
	      // $
	      return 'ident';
	
	    case 0x20: // Space
	    case 0x09: // Tab
	    case 0x0A: // Newline
	    case 0x0D: // Return
	    case 0xA0: // No-break space
	    case 0xFEFF: // Byte Order Mark
	    case 0x2028: // Line Separator
	    case 0x2029:
	      // Paragraph Separator
	      return 'ws';
	  }
	
	  // a-z, A-Z
	  if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
	    return 'ident';
	  }
	
	  // 1-9
	  if (code >= 0x31 && code <= 0x39) {
	    return 'number';
	  }
	
	  return 'else';
	}
	
	/**
	 * Format a subPath, return its plain form if it is
	 * a literal string or number. Otherwise prepend the
	 * dynamic indicator (*).
	 *
	 * @param {String} path
	 * @return {String}
	 */
	
	function formatSubPath(path) {
	  var trimmed = path.trim();
	  // invalid leading 0
	  if (path.charAt(0) === '0' && isNaN(path)) {
	    return false;
	  }
	  return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
	}
	
	/**
	 * Parse a string path into an array of segments
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parse(path) {
	  var keys = [];
	  var index = -1;
	  var mode = BEFORE_PATH;
	  var subPathDepth = 0;
	  var c, newChar, key, type, transition, action, typeMap;
	
	  var actions = [];
	
	  actions[PUSH] = function () {
	    if (key !== undefined) {
	      keys.push(key);
	      key = undefined;
	    }
	  };
	
	  actions[APPEND] = function () {
	    if (key === undefined) {
	      key = newChar;
	    } else {
	      key += newChar;
	    }
	  };
	
	  actions[INC_SUB_PATH_DEPTH] = function () {
	    actions[APPEND]();
	    subPathDepth++;
	  };
	
	  actions[PUSH_SUB_PATH] = function () {
	    if (subPathDepth > 0) {
	      subPathDepth--;
	      mode = IN_SUB_PATH;
	      actions[APPEND]();
	    } else {
	      subPathDepth = 0;
	      key = formatSubPath(key);
	      if (key === false) {
	        return false;
	      } else {
	        actions[PUSH]();
	      }
	    }
	  };
	
	  function maybeUnescapeQuote() {
	    var nextChar = path[index + 1];
	    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
	      index++;
	      newChar = '\\' + nextChar;
	      actions[APPEND]();
	      return true;
	    }
	  }
	
	  while (mode != null) {
	    index++;
	    c = path[index];
	
	    if (c === '\\' && maybeUnescapeQuote()) {
	      continue;
	    }
	
	    type = getPathCharType(c);
	    typeMap = pathStateMachine[mode];
	    transition = typeMap[type] || typeMap['else'] || ERROR;
	
	    if (transition === ERROR) {
	      return; // parse error
	    }
	
	    mode = transition[0];
	    action = actions[transition[1]];
	    if (action) {
	      newChar = transition[2];
	      newChar = newChar === undefined ? c : newChar;
	      if (action() === false) {
	        return;
	      }
	    }
	
	    if (mode === AFTER_PATH) {
	      keys.raw = path;
	      return keys;
	    }
	  }
	}
	
	/**
	 * External parse that check for a cache hit first
	 *
	 * @param {String} path
	 * @return {Array|undefined}
	 */
	
	function parsePath(path) {
	  var hit = pathCache.get(path);
	  if (!hit) {
	    hit = parse(path);
	    if (hit) {
	      pathCache.put(path, hit);
	    }
	  }
	  return hit;
	}
	
	/**
	 * Get from an object from a path string
	 *
	 * @param {Object} obj
	 * @param {String} path
	 */
	
	function getPath(obj, path) {
	  return parseExpression$1(path).get(obj);
	}
	
	/**
	 * Warn against setting non-existent root path on a vm.
	 */
	
	var warnNonExistent;
	if (process.env.NODE_ENV !== 'production') {
	  warnNonExistent = function (path, vm) {
	    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.', vm);
	  };
	}
	
	/**
	 * Set on an object from a path
	 *
	 * @param {Object} obj
	 * @param {String | Array} path
	 * @param {*} val
	 */
	
	function setPath(obj, path, val) {
	  var original = obj;
	  if (typeof path === 'string') {
	    path = parse(path);
	  }
	  if (!path || !isObject(obj)) {
	    return false;
	  }
	  var last, key;
	  for (var i = 0, l = path.length; i < l; i++) {
	    last = obj;
	    key = path[i];
	    if (key.charAt(0) === '*') {
	      key = parseExpression$1(key.slice(1)).get.call(original, original);
	    }
	    if (i < l - 1) {
	      obj = obj[key];
	      if (!isObject(obj)) {
	        obj = {};
	        if (process.env.NODE_ENV !== 'production' && last._isVue) {
	          warnNonExistent(path, last);
	        }
	        set(last, key, obj);
	      }
	    } else {
	      if (isArray(obj)) {
	        obj.$set(key, val);
	      } else if (key in obj) {
	        obj[key] = val;
	      } else {
	        if (process.env.NODE_ENV !== 'production' && obj._isVue) {
	          warnNonExistent(path, obj);
	        }
	        set(obj, key, val);
	      }
	    }
	  }
	  return true;
	}
	
	var path = Object.freeze({
	  parsePath: parsePath,
	  getPath: getPath,
	  setPath: setPath
	});
	
	var expressionCache = new Cache(1000);
	
	var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
	var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	// keywords that don't make sense inside expressions
	var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'protected,static,interface,private,public';
	var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');
	
	var wsRE = /\s/g;
	var newlineRE = /\n/g;
	var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\"']|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g;
	var restoreRE = /"(\d+)"/g;
	var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
	var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
	var literalValueRE$1 = /^(?:true|false|null|undefined|Infinity|NaN)$/;
	
	function noop() {}
	
	/**
	 * Save / Rewrite / Restore
	 *
	 * When rewriting paths found in an expression, it is
	 * possible for the same letter sequences to be found in
	 * strings and Object literal property keys. Therefore we
	 * remove and store these parts in a temporary array, and
	 * restore them after the path rewrite.
	 */
	
	var saved = [];
	
	/**
	 * Save replacer
	 *
	 * The save regex can match two possible cases:
	 * 1. An opening object literal
	 * 2. A string
	 * If matched as a plain string, we need to escape its
	 * newlines, since the string needs to be preserved when
	 * generating the function body.
	 *
	 * @param {String} str
	 * @param {String} isString - str if matched as a string
	 * @return {String} - placeholder with index
	 */
	
	function save(str, isString) {
	  var i = saved.length;
	  saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
	  return '"' + i + '"';
	}
	
	/**
	 * Path rewrite replacer
	 *
	 * @param {String} raw
	 * @return {String}
	 */
	
	function rewrite(raw) {
	  var c = raw.charAt(0);
	  var path = raw.slice(1);
	  if (allowedKeywordsRE.test(path)) {
	    return raw;
	  } else {
	    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
	    return c + 'scope.' + path;
	  }
	}
	
	/**
	 * Restore replacer
	 *
	 * @param {String} str
	 * @param {String} i - matched save index
	 * @return {String}
	 */
	
	function restore(str, i) {
	  return saved[i];
	}
	
	/**
	 * Rewrite an expression, prefixing all path accessors with
	 * `scope.` and generate getter/setter functions.
	 *
	 * @param {String} exp
	 * @return {Function}
	 */
	
	function compileGetter(exp) {
	  if (improperKeywordsRE.test(exp)) {
	    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
	  }
	  // reset state
	  saved.length = 0;
	  // save strings and object literal keys
	  var body = exp.replace(saveRE, save).replace(wsRE, '');
	  // rewrite all paths
	  // pad 1 space here because the regex matches 1 extra char
	  body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
	  return makeGetterFn(body);
	}
	
	/**
	 * Build a getter function. Requires eval.
	 *
	 * We isolate the try/catch so it doesn't affect the
	 * optimization of the parse function when it is not called.
	 *
	 * @param {String} body
	 * @return {Function|undefined}
	 */
	
	function makeGetterFn(body) {
	  try {
	    /* eslint-disable no-new-func */
	    return new Function('scope', 'return ' + body + ';');
	    /* eslint-enable no-new-func */
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production') {
	      /* istanbul ignore if */
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        warn('It seems you are using the default build of Vue.js in an environment ' + 'with Content Security Policy that prohibits unsafe-eval. ' + 'Use the CSP-compliant build instead: ' + 'http://vuejs.org/guide/installation.html#CSP-compliant-build');
	      } else {
	        warn('Invalid expression. ' + 'Generated function body: ' + body);
	      }
	    }
	    return noop;
	  }
	}
	
	/**
	 * Compile a setter function for the expression.
	 *
	 * @param {String} exp
	 * @return {Function|undefined}
	 */
	
	function compileSetter(exp) {
	  var path = parsePath(exp);
	  if (path) {
	    return function (scope, val) {
	      setPath(scope, path, val);
	    };
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
	  }
	}
	
	/**
	 * Parse an expression into re-written getter/setters.
	 *
	 * @param {String} exp
	 * @param {Boolean} needSet
	 * @return {Function}
	 */
	
	function parseExpression$1(exp, needSet) {
	  exp = exp.trim();
	  // try cache
	  var hit = expressionCache.get(exp);
	  if (hit) {
	    if (needSet && !hit.set) {
	      hit.set = compileSetter(hit.exp);
	    }
	    return hit;
	  }
	  var res = { exp: exp };
	  res.get = isSimplePath(exp) && exp.indexOf('[') < 0
	  // optimized super simple getter
	  ? makeGetterFn('scope.' + exp)
	  // dynamic getter
	  : compileGetter(exp);
	  if (needSet) {
	    res.set = compileSetter(exp);
	  }
	  expressionCache.put(exp, res);
	  return res;
	}
	
	/**
	 * Check if an expression is a simple path.
	 *
	 * @param {String} exp
	 * @return {Boolean}
	 */
	
	function isSimplePath(exp) {
	  return pathTestRE.test(exp) &&
	  // don't treat literal values as paths
	  !literalValueRE$1.test(exp) &&
	  // Math constants e.g. Math.PI, Math.E etc.
	  exp.slice(0, 5) !== 'Math.';
	}
	
	var expression = Object.freeze({
	  parseExpression: parseExpression$1,
	  isSimplePath: isSimplePath
	});
	
	// we have two separate queues: one for directive updates
	// and one for user watcher registered via $watch().
	// we want to guarantee directive updates to be called
	// before user watchers so that when user watchers are
	// triggered, the DOM would have already been in updated
	// state.
	
	var queue = [];
	var userQueue = [];
	var has = {};
	var circular = {};
	var waiting = false;
	
	/**
	 * Reset the batcher's state.
	 */
	
	function resetBatcherState() {
	  queue.length = 0;
	  userQueue.length = 0;
	  has = {};
	  circular = {};
	  waiting = false;
	}
	
	/**
	 * Flush both queues and run the watchers.
	 */
	
	function flushBatcherQueue() {
	  var _again = true;
	
	  _function: while (_again) {
	    _again = false;
	
	    runBatcherQueue(queue);
	    runBatcherQueue(userQueue);
	    // user watchers triggered more watchers,
	    // keep flushing until it depletes
	    if (queue.length) {
	      _again = true;
	      continue _function;
	    }
	    // dev tool hook
	    /* istanbul ignore if */
	    if (devtools && config.devtools) {
	      devtools.emit('flush');
	    }
	    resetBatcherState();
	  }
	}
	
	/**
	 * Run the watchers in a single queue.
	 *
	 * @param {Array} queue
	 */
	
	function runBatcherQueue(queue) {
	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (var i = 0; i < queue.length; i++) {
	    var watcher = queue[i];
	    var id = watcher.id;
	    has[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn('You may have an infinite update loop for watcher ' + 'with expression "' + watcher.expression + '"', watcher.vm);
	        break;
	      }
	    }
	  }
	  queue.length = 0;
	}
	
	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 *
	 * @param {Watcher} watcher
	 *   properties:
	 *   - {Number} id
	 *   - {Function} run
	 */
	
	function pushWatcher(watcher) {
	  var id = watcher.id;
	  if (has[id] == null) {
	    // push watcher into appropriate queue
	    var q = watcher.user ? userQueue : queue;
	    has[id] = q.length;
	    q.push(watcher);
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushBatcherQueue);
	    }
	  }
	}
	
	var uid$2 = 0;
	
	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 *
	 * @param {Vue} vm
	 * @param {String|Function} expOrFn
	 * @param {Function} cb
	 * @param {Object} options
	 *                 - {Array} filters
	 *                 - {Boolean} twoWay
	 *                 - {Boolean} deep
	 *                 - {Boolean} user
	 *                 - {Boolean} sync
	 *                 - {Boolean} lazy
	 *                 - {Function} [preProcess]
	 *                 - {Function} [postProcess]
	 * @constructor
	 */
	function Watcher(vm, expOrFn, cb, options) {
	  // mix in options
	  if (options) {
	    extend(this, options);
	  }
	  var isFn = typeof expOrFn === 'function';
	  this.vm = vm;
	  vm._watchers.push(this);
	  this.expression = expOrFn;
	  this.cb = cb;
	  this.id = ++uid$2; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  this.prevError = null; // for async error stacks
	  // parse expression for getter/setter
	  if (isFn) {
	    this.getter = expOrFn;
	    this.setter = undefined;
	  } else {
	    var res = parseExpression$1(expOrFn, this.twoWay);
	    this.getter = res.get;
	    this.setter = res.set;
	  }
	  this.value = this.lazy ? undefined : this.get();
	  // state for avoiding false triggers for deep and Array
	  // watchers during vm._digest()
	  this.queued = this.shallow = false;
	}
	
	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	
	Watcher.prototype.get = function () {
	  this.beforeGet();
	  var scope = this.scope || this.vm;
	  var value;
	  try {
	    value = this.getter.call(scope, scope);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating expression ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  if (this.preProcess) {
	    value = this.preProcess(value);
	  }
	  if (this.filters) {
	    value = scope._applyFilters(value, null, this.filters, false);
	  }
	  if (this.postProcess) {
	    value = this.postProcess(value);
	  }
	  this.afterGet();
	  return value;
	};
	
	/**
	 * Set the corresponding value with the setter.
	 *
	 * @param {*} value
	 */
	
	Watcher.prototype.set = function (value) {
	  var scope = this.scope || this.vm;
	  if (this.filters) {
	    value = scope._applyFilters(value, this.value, this.filters, true);
	  }
	  try {
	    this.setter.call(scope, scope, value);
	  } catch (e) {
	    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
	      warn('Error when evaluating setter ' + '"' + this.expression + '": ' + e.toString(), this.vm);
	    }
	  }
	  // two-way sync for v-for alias
	  var forContext = scope.$forContext;
	  if (forContext && forContext.alias === this.expression) {
	    if (forContext.filters) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.', this.vm);
	      return;
	    }
	    forContext._withLock(function () {
	      if (scope.$key) {
	        // original is an object
	        forContext.rawValue[scope.$key] = value;
	      } else {
	        forContext.rawValue.$set(scope.$index, value);
	      }
	    });
	  }
	};
	
	/**
	 * Prepare for dependency collection.
	 */
	
	Watcher.prototype.beforeGet = function () {
	  Dep.target = this;
	};
	
	/**
	 * Add a dependency to this directive.
	 *
	 * @param {Dep} dep
	 */
	
	Watcher.prototype.addDep = function (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};
	
	/**
	 * Clean up for dependency collection.
	 */
	
	Watcher.prototype.afterGet = function () {
	  Dep.target = null;
	  var i = this.deps.length;
	  while (i--) {
	    var dep = this.deps[i];
	    if (!this.newDepIds.has(dep.id)) {
	      dep.removeSub(this);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};
	
	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 *
	 * @param {Boolean} shallow
	 */
	
	Watcher.prototype.update = function (shallow) {
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync || !config.async) {
	    this.run();
	  } else {
	    // if queued, only overwrite shallow with non-shallow,
	    // but not the other way around.
	    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
	    this.queued = true;
	    // record before-push error stack in debug mode
	    /* istanbul ignore if */
	    if (process.env.NODE_ENV !== 'production' && config.debug) {
	      this.prevError = new Error('[vue] async stack trace');
	    }
	    pushWatcher(this);
	  }
	};
	
	/**
	 * Batcher job interface.
	 * Will be called by the batcher.
	 */
	
	Watcher.prototype.run = function () {
	  if (this.active) {
	    var value = this.get();
	    if (value !== this.value ||
	    // Deep watchers and watchers on Object/Arrays should fire even
	    // when the value is the same, because the value may
	    // have mutated; but only do so if this is a
	    // non-shallow update (caused by a vm digest).
	    (isObject(value) || this.deep) && !this.shallow) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      // in debug + async mode, when a watcher callbacks
	      // throws, we also throw the saved before-push error
	      // so the full cross-tick stack trace is available.
	      var prevError = this.prevError;
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
	        this.prevError = null;
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          nextTick(function () {
	            throw prevError;
	          }, 0);
	          throw e;
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	    this.queued = this.shallow = false;
	  }
	};
	
	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	
	Watcher.prototype.evaluate = function () {
	  // avoid overwriting another watcher that is being
	  // collected.
	  var current = Dep.target;
	  this.value = this.get();
	  this.dirty = false;
	  Dep.target = current;
	};
	
	/**
	 * Depend on all deps collected by this watcher.
	 */
	
	Watcher.prototype.depend = function () {
	  var i = this.deps.length;
	  while (i--) {
	    this.deps[i].depend();
	  }
	};
	
	/**
	 * Remove self from all dependencies' subcriber list.
	 */
	
	Watcher.prototype.teardown = function () {
	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      this.vm._watchers.$remove(this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this.deps[i].removeSub(this);
	    }
	    this.active = false;
	    this.vm = this.cb = this.value = null;
	  }
	};
	
	/**
	 * Recrusively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 *
	 * @param {*} val
	 */
	
	var seenObjects = new _Set();
	function traverse(val, seen) {
	  var i = undefined,
	      keys = undefined;
	  if (!seen) {
	    seen = seenObjects;
	    seen.clear();
	  }
	  var isA = isArray(val);
	  var isO = isObject(val);
	  if ((isA || isO) && Object.isExtensible(val)) {
	    if (val.__ob__) {
	      var depId = val.__ob__.dep.id;
	      if (seen.has(depId)) {
	        return;
	      } else {
	        seen.add(depId);
	      }
	    }
	    if (isA) {
	      i = val.length;
	      while (i--) traverse(val[i], seen);
	    } else if (isO) {
	      keys = Object.keys(val);
	      i = keys.length;
	      while (i--) traverse(val[keys[i]], seen);
	    }
	  }
	}
	
	var text$1 = {
	
	  bind: function bind() {
	    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
	  },
	
	  update: function update(value) {
	    this.el[this.attr] = _toString(value);
	  }
	};
	
	var templateCache = new Cache(1000);
	var idSelectorCache = new Cache(1000);
	
	var map = {
	  efault: [0, '', ''],
	  legend: [1, '<fieldset>', '</fieldset>'],
	  tr: [2, '<table><tbody>', '</tbody></table>'],
	  col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
	};
	
	map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];
	
	map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];
	
	map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];
	
	/**
	 * Check if a node is a supported template node with a
	 * DocumentFragment content.
	 *
	 * @param {Node} node
	 * @return {Boolean}
	 */
	
	function isRealTemplate(node) {
	  return isTemplate(node) && isFragment(node.content);
	}
	
	var tagRE$1 = /<([\w:-]+)/;
	var entityRE = /&#?\w+?;/;
	var commentRE = /<!--/;
	
	/**
	 * Convert a string template to a DocumentFragment.
	 * Determines correct wrapping by tag types. Wrapping
	 * strategy found in jQuery & component/domify.
	 *
	 * @param {String} templateString
	 * @param {Boolean} raw
	 * @return {DocumentFragment}
	 */
	
	function stringToFragment(templateString, raw) {
	  // try a cache hit first
	  var cacheKey = raw ? templateString : templateString.trim();
	  var hit = templateCache.get(cacheKey);
	  if (hit) {
	    return hit;
	  }
	
	  var frag = document.createDocumentFragment();
	  var tagMatch = templateString.match(tagRE$1);
	  var entityMatch = entityRE.test(templateString);
	  var commentMatch = commentRE.test(templateString);
	
	  if (!tagMatch && !entityMatch && !commentMatch) {
	    // text only, return a single text node.
	    frag.appendChild(document.createTextNode(templateString));
	  } else {
	    var tag = tagMatch && tagMatch[1];
	    var wrap = map[tag] || map.efault;
	    var depth = wrap[0];
	    var prefix = wrap[1];
	    var suffix = wrap[2];
	    var node = document.createElement('div');
	
	    node.innerHTML = prefix + templateString + suffix;
	    while (depth--) {
	      node = node.lastChild;
	    }
	
	    var child;
	    /* eslint-disable no-cond-assign */
	    while (child = node.firstChild) {
	      /* eslint-enable no-cond-assign */
	      frag.appendChild(child);
	    }
	  }
	  if (!raw) {
	    trimNode(frag);
	  }
	  templateCache.put(cacheKey, frag);
	  return frag;
	}
	
	/**
	 * Convert a template node to a DocumentFragment.
	 *
	 * @param {Node} node
	 * @return {DocumentFragment}
	 */
	
	function nodeToFragment(node) {
	  // if its a template tag and the browser supports it,
	  // its content is already a document fragment. However, iOS Safari has
	  // bug when using directly cloned template content with touch
	  // events and can cause crashes when the nodes are removed from DOM, so we
	  // have to treat template elements as string templates. (#2805)
	  /* istanbul ignore if */
	  if (isRealTemplate(node)) {
	    return stringToFragment(node.innerHTML);
	  }
	  // script template
	  if (node.tagName === 'SCRIPT') {
	    return stringToFragment(node.textContent);
	  }
	  // normal node, clone it to avoid mutating the original
	  var clonedNode = cloneNode(node);
	  var frag = document.createDocumentFragment();
	  var child;
	  /* eslint-disable no-cond-assign */
	  while (child = clonedNode.firstChild) {
	    /* eslint-enable no-cond-assign */
	    frag.appendChild(child);
	  }
	  trimNode(frag);
	  return frag;
	}
	
	// Test for the presence of the Safari template cloning bug
	// https://bugs.webkit.org/showug.cgi?id=137755
	var hasBrokenTemplate = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var a = document.createElement('div');
	    a.innerHTML = '<template>1</template>';
	    return !a.cloneNode(true).firstChild.innerHTML;
	  } else {
	    return false;
	  }
	})();
	
	// Test for IE10/11 textarea placeholder clone bug
	var hasTextareaCloneBug = (function () {
	  /* istanbul ignore else */
	  if (inBrowser) {
	    var t = document.createElement('textarea');
	    t.placeholder = 't';
	    return t.cloneNode(true).value === 't';
	  } else {
	    return false;
	  }
	})();
	
	/**
	 * 1. Deal with Safari cloning nested <template> bug by
	 *    manually cloning all template instances.
	 * 2. Deal with IE10/11 textarea placeholder bug by setting
	 *    the correct value after cloning.
	 *
	 * @param {Element|DocumentFragment} node
	 * @return {Element|DocumentFragment}
	 */
	
	function cloneNode(node) {
	  /* istanbul ignore if */
	  if (!node.querySelectorAll) {
	    return node.cloneNode();
	  }
	  var res = node.cloneNode(true);
	  var i, original, cloned;
	  /* istanbul ignore if */
	  if (hasBrokenTemplate) {
	    var tempClone = res;
	    if (isRealTemplate(node)) {
	      node = node.content;
	      tempClone = res.content;
	    }
	    original = node.querySelectorAll('template');
	    if (original.length) {
	      cloned = tempClone.querySelectorAll('template');
	      i = cloned.length;
	      while (i--) {
	        cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
	      }
	    }
	  }
	  /* istanbul ignore if */
	  if (hasTextareaCloneBug) {
	    if (node.tagName === 'TEXTAREA') {
	      res.value = node.value;
	    } else {
	      original = node.querySelectorAll('textarea');
	      if (original.length) {
	        cloned = res.querySelectorAll('textarea');
	        i = cloned.length;
	        while (i--) {
	          cloned[i].value = original[i].value;
	        }
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Process the template option and normalizes it into a
	 * a DocumentFragment that can be used as a partial or a
	 * instance template.
	 *
	 * @param {*} template
	 *        Possible values include:
	 *        - DocumentFragment object
	 *        - Node object of type Template
	 *        - id selector: '#some-template-id'
	 *        - template string: '<div><span>{{msg}}</span></div>'
	 * @param {Boolean} shouldClone
	 * @param {Boolean} raw
	 *        inline HTML interpolation. Do not check for id
	 *        selector and keep whitespace in the string.
	 * @return {DocumentFragment|undefined}
	 */
	
	function parseTemplate(template, shouldClone, raw) {
	  var node, frag;
	
	  // if the template is already a document fragment,
	  // do nothing
	  if (isFragment(template)) {
	    trimNode(template);
	    return shouldClone ? cloneNode(template) : template;
	  }
	
	  if (typeof template === 'string') {
	    // id selector
	    if (!raw && template.charAt(0) === '#') {
	      // id selector can be cached too
	      frag = idSelectorCache.get(template);
	      if (!frag) {
	        node = document.getElementById(template.slice(1));
	        if (node) {
	          frag = nodeToFragment(node);
	          // save selector to cache
	          idSelectorCache.put(template, frag);
	        }
	      }
	    } else {
	      // normal string template
	      frag = stringToFragment(template, raw);
	    }
	  } else if (template.nodeType) {
	    // a direct node
	    frag = nodeToFragment(template);
	  }
	
	  return frag && shouldClone ? cloneNode(frag) : frag;
	}
	
	var template = Object.freeze({
	  cloneNode: cloneNode,
	  parseTemplate: parseTemplate
	});
	
	var html = {
	
	  bind: function bind() {
	    // a comment node means this is a binding for
	    // {{{ inline unescaped html }}}
	    if (this.el.nodeType === 8) {
	      // hold nodes
	      this.nodes = [];
	      // replace the placeholder with proper anchor
	      this.anchor = createAnchor('v-html');
	      replace(this.el, this.anchor);
	    }
	  },
	
	  update: function update(value) {
	    value = _toString(value);
	    if (this.nodes) {
	      this.swap(value);
	    } else {
	      this.el.innerHTML = value;
	    }
	  },
	
	  swap: function swap(value) {
	    // remove old nodes
	    var i = this.nodes.length;
	    while (i--) {
	      remove(this.nodes[i]);
	    }
	    // convert new value to a fragment
	    // do not attempt to retrieve from id selector
	    var frag = parseTemplate(value, true, true);
	    // save a reference to these nodes so we can remove later
	    this.nodes = toArray(frag.childNodes);
	    before(frag, this.anchor);
	  }
	};
	
	/**
	 * Abstraction for a partially-compiled fragment.
	 * Can optionally compile content with a child scope.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 * @param {DocumentFragment} frag
	 * @param {Vue} [host]
	 * @param {Object} [scope]
	 * @param {Fragment} [parentFrag]
	 */
	function Fragment(linker, vm, frag, host, scope, parentFrag) {
	  this.children = [];
	  this.childFrags = [];
	  this.vm = vm;
	  this.scope = scope;
	  this.inserted = false;
	  this.parentFrag = parentFrag;
	  if (parentFrag) {
	    parentFrag.childFrags.push(this);
	  }
	  this.unlink = linker(vm, frag, host, scope, this);
	  var single = this.single = frag.childNodes.length === 1 &&
	  // do not go single mode if the only node is an anchor
	  !frag.childNodes[0].__v_anchor;
	  if (single) {
	    this.node = frag.childNodes[0];
	    this.before = singleBefore;
	    this.remove = singleRemove;
	  } else {
	    this.node = createAnchor('fragment-start');
	    this.end = createAnchor('fragment-end');
	    this.frag = frag;
	    prepend(this.node, frag);
	    frag.appendChild(this.end);
	    this.before = multiBefore;
	    this.remove = multiRemove;
	  }
	  this.node.__v_frag = this;
	}
	
	/**
	 * Call attach/detach for all components contained within
	 * this fragment. Also do so recursively for all child
	 * fragments.
	 *
	 * @param {Function} hook
	 */
	
	Fragment.prototype.callHook = function (hook) {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    this.childFrags[i].callHook(hook);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    hook(this.children[i]);
	  }
	};
	
	/**
	 * Insert fragment before target, single node version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function singleBefore(target, withTransition) {
	  this.inserted = true;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  method(this.node, target, this.vm);
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, single node version
	 */
	
	function singleRemove() {
	  this.inserted = false;
	  var shouldCallRemove = inDoc(this.node);
	  var self = this;
	  this.beforeRemove();
	  removeWithTransition(this.node, this.vm, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Insert fragment before target, multi-nodes version
	 *
	 * @param {Node} target
	 * @param {Boolean} withTransition
	 */
	
	function multiBefore(target, withTransition) {
	  this.inserted = true;
	  var vm = this.vm;
	  var method = withTransition !== false ? beforeWithTransition : before;
	  mapNodeRange(this.node, this.end, function (node) {
	    method(node, target, vm);
	  });
	  if (inDoc(this.node)) {
	    this.callHook(attach);
	  }
	}
	
	/**
	 * Remove fragment, multi-nodes version
	 */
	
	function multiRemove() {
	  this.inserted = false;
	  var self = this;
	  var shouldCallRemove = inDoc(this.node);
	  this.beforeRemove();
	  removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
	    if (shouldCallRemove) {
	      self.callHook(detach);
	    }
	    self.destroy();
	  });
	}
	
	/**
	 * Prepare the fragment for removal.
	 */
	
	Fragment.prototype.beforeRemove = function () {
	  var i, l;
	  for (i = 0, l = this.childFrags.length; i < l; i++) {
	    // call the same method recursively on child
	    // fragments, depth-first
	    this.childFrags[i].beforeRemove(false);
	  }
	  for (i = 0, l = this.children.length; i < l; i++) {
	    // Call destroy for all contained instances,
	    // with remove:false and defer:true.
	    // Defer is necessary because we need to
	    // keep the children to call detach hooks
	    // on them.
	    this.children[i].$destroy(false, true);
	  }
	  var dirs = this.unlink.dirs;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    // disable the watchers on all the directives
	    // so that the rendered content stays the same
	    // during removal.
	    dirs[i]._watcher && dirs[i]._watcher.teardown();
	  }
	};
	
	/**
	 * Destroy the fragment.
	 */
	
	Fragment.prototype.destroy = function () {
	  if (this.parentFrag) {
	    this.parentFrag.childFrags.$remove(this);
	  }
	  this.node.__v_frag = null;
	  this.unlink();
	};
	
	/**
	 * Call attach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function attach(child) {
	  if (!child._isAttached && inDoc(child.$el)) {
	    child._callHook('attached');
	  }
	}
	
	/**
	 * Call detach hook for a Vue instance.
	 *
	 * @param {Vue} child
	 */
	
	function detach(child) {
	  if (child._isAttached && !inDoc(child.$el)) {
	    child._callHook('detached');
	  }
	}
	
	var linkerCache = new Cache(5000);
	
	/**
	 * A factory that can be used to create instances of a
	 * fragment. Caches the compiled linker if possible.
	 *
	 * @param {Vue} vm
	 * @param {Element|String} el
	 */
	function FragmentFactory(vm, el) {
	  this.vm = vm;
	  var template;
	  var isString = typeof el === 'string';
	  if (isString || isTemplate(el) && !el.hasAttribute('v-if')) {
	    template = parseTemplate(el, true);
	  } else {
	    template = document.createDocumentFragment();
	    template.appendChild(el);
	  }
	  this.template = template;
	  // linker can be cached, but only for components
	  var linker;
	  var cid = vm.constructor.cid;
	  if (cid > 0) {
	    var cacheId = cid + (isString ? el : getOuterHTML(el));
	    linker = linkerCache.get(cacheId);
	    if (!linker) {
	      linker = compile(template, vm.$options, true);
	      linkerCache.put(cacheId, linker);
	    }
	  } else {
	    linker = compile(template, vm.$options, true);
	  }
	  this.linker = linker;
	}
	
	/**
	 * Create a fragment instance with given host and scope.
	 *
	 * @param {Vue} host
	 * @param {Object} scope
	 * @param {Fragment} parentFrag
	 */
	
	FragmentFactory.prototype.create = function (host, scope, parentFrag) {
	  var frag = cloneNode(this.template);
	  return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
	};
	
	var ON = 700;
	var MODEL = 800;
	var BIND = 850;
	var TRANSITION = 1100;
	var EL = 1500;
	var COMPONENT = 1500;
	var PARTIAL = 1750;
	var IF = 2100;
	var FOR = 2200;
	var SLOT = 2300;
	
	var uid$3 = 0;
	
	var vFor = {
	
	  priority: FOR,
	  terminal: true,
	
	  params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],
	
	  bind: function bind() {
	    if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('v-if')) {
	      warn('<' + this.el.tagName.toLowerCase() + ' v-for="' + this.expression + '" v-if="' + this.el.getAttribute('v-if') + '">: ' + 'Using v-if and v-for on the same element is not recommended - ' + 'consider filtering the source Array instead.', this.vm);
	    }
	
	    // support "item in/of items" syntax
	    var inMatch = this.expression.match(/(.*) (?:in|of) (.*)/);
	    if (inMatch) {
	      var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
	      if (itMatch) {
	        this.iterator = itMatch[1].trim();
	        this.alias = itMatch[2].trim();
	      } else {
	        this.alias = inMatch[1].trim();
	      }
	      this.expression = inMatch[2];
	    }
	
	    if (!this.alias) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid v-for expression "' + this.descriptor.raw + '": ' + 'alias is required.', this.vm);
	      return;
	    }
	
	    // uid as a cache identifier
	    this.id = '__v-for__' + ++uid$3;
	
	    // check if this is an option list,
	    // so that we know if we need to update the <select>'s
	    // v-model when the option list has changed.
	    // because v-model has a lower priority than v-for,
	    // the v-model is not bound here yet, so we have to
	    // retrive it in the actual updateModel() function.
	    var tag = this.el.tagName;
	    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';
	
	    // setup anchor nodes
	    this.start = createAnchor('v-for-start');
	    this.end = createAnchor('v-for-end');
	    replace(this.el, this.end);
	    before(this.start, this.end);
	
	    // cache
	    this.cache = Object.create(null);
	
	    // fragment factory
	    this.factory = new FragmentFactory(this.vm, this.el);
	  },
	
	  update: function update(data) {
	    this.diff(data);
	    this.updateRef();
	    this.updateModel();
	  },
	
	  /**
	   * Diff, based on new data and old data, determine the
	   * minimum amount of DOM manipulations needed to make the
	   * DOM reflect the new data Array.
	   *
	   * The algorithm diffs the new data Array by storing a
	   * hidden reference to an owner vm instance on previously
	   * seen data. This allows us to achieve O(n) which is
	   * better than a levenshtein distance based algorithm,
	   * which is O(m * n).
	   *
	   * @param {Array} data
	   */
	
	  diff: function diff(data) {
	    // check if the Array was converted from an Object
	    var item = data[0];
	    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');
	
	    var trackByKey = this.params.trackBy;
	    var oldFrags = this.frags;
	    var frags = this.frags = new Array(data.length);
	    var alias = this.alias;
	    var iterator = this.iterator;
	    var start = this.start;
	    var end = this.end;
	    var inDocument = inDoc(start);
	    var init = !oldFrags;
	    var i, l, frag, key, value, primitive;
	
	    // First pass, go through the new Array and fill up
	    // the new frags array. If a piece of data has a cached
	    // instance for it, we reuse it. Otherwise build a new
	    // instance.
	    for (i = 0, l = data.length; i < l; i++) {
	      item = data[i];
	      key = convertedFromObject ? item.$key : null;
	      value = convertedFromObject ? item.$value : item;
	      primitive = !isObject(value);
	      frag = !init && this.getCachedFrag(value, i, key);
	      if (frag) {
	        // reusable fragment
	        frag.reused = true;
	        // update $index
	        frag.scope.$index = i;
	        // update $key
	        if (key) {
	          frag.scope.$key = key;
	        }
	        // update iterator
	        if (iterator) {
	          frag.scope[iterator] = key !== null ? key : i;
	        }
	        // update data for track-by, object repeat &
	        // primitive values.
	        if (trackByKey || convertedFromObject || primitive) {
	          withoutConversion(function () {
	            frag.scope[alias] = value;
	          });
	        }
	      } else {
	        // new instance
	        frag = this.create(value, alias, i, key);
	        frag.fresh = !init;
	      }
	      frags[i] = frag;
	      if (init) {
	        frag.before(end);
	      }
	    }
	
	    // we're done for the initial render.
	    if (init) {
	      return;
	    }
	
	    // Second pass, go through the old fragments and
	    // destroy those who are not reused (and remove them
	    // from cache)
	    var removalIndex = 0;
	    var totalRemoved = oldFrags.length - frags.length;
	    // when removing a large number of fragments, watcher removal
	    // turns out to be a perf bottleneck, so we batch the watcher
	    // removals into a single filter call!
	    this.vm._vForRemoving = true;
	    for (i = 0, l = oldFrags.length; i < l; i++) {
	      frag = oldFrags[i];
	      if (!frag.reused) {
	        this.deleteCachedFrag(frag);
	        this.remove(frag, removalIndex++, totalRemoved, inDocument);
	      }
	    }
	    this.vm._vForRemoving = false;
	    if (removalIndex) {
	      this.vm._watchers = this.vm._watchers.filter(function (w) {
	        return w.active;
	      });
	    }
	
	    // Final pass, move/insert new fragments into the
	    // right place.
	    var targetPrev, prevEl, currentPrev;
	    var insertionIndex = 0;
	    for (i = 0, l = frags.length; i < l; i++) {
	      frag = frags[i];
	      // this is the frag that we should be after
	      targetPrev = frags[i - 1];
	      prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
	      if (frag.reused && !frag.staggerCb) {
	        currentPrev = findPrevFrag(frag, start, this.id);
	        if (currentPrev !== targetPrev && (!currentPrev ||
	        // optimization for moving a single item.
	        // thanks to suggestions by @livoras in #1807
	        findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
	          this.move(frag, prevEl);
	        }
	      } else {
	        // new instance, or still in stagger.
	        // insert with updated stagger index.
	        this.insert(frag, insertionIndex++, prevEl, inDocument);
	      }
	      frag.reused = frag.fresh = false;
	    }
	  },
	
	  /**
	   * Create a new fragment instance.
	   *
	   * @param {*} value
	   * @param {String} alias
	   * @param {Number} index
	   * @param {String} [key]
	   * @return {Fragment}
	   */
	
	  create: function create(value, alias, index, key) {
	    var host = this._host;
	    // create iteration scope
	    var parentScope = this._scope || this.vm;
	    var scope = Object.create(parentScope);
	    // ref holder for the scope
	    scope.$refs = Object.create(parentScope.$refs);
	    scope.$els = Object.create(parentScope.$els);
	    // make sure point $parent to parent scope
	    scope.$parent = parentScope;
	    // for two-way binding on alias
	    scope.$forContext = this;
	    // define scope properties
	    // important: define the scope alias without forced conversion
	    // so that frozen data structures remain non-reactive.
	    withoutConversion(function () {
	      defineReactive(scope, alias, value);
	    });
	    defineReactive(scope, '$index', index);
	    if (key) {
	      defineReactive(scope, '$key', key);
	    } else if (scope.$key) {
	      // avoid accidental fallback
	      def(scope, '$key', null);
	    }
	    if (this.iterator) {
	      defineReactive(scope, this.iterator, key !== null ? key : index);
	    }
	    var frag = this.factory.create(host, scope, this._frag);
	    frag.forId = this.id;
	    this.cacheFrag(value, frag, index, key);
	    return frag;
	  },
	
	  /**
	   * Update the v-ref on owner vm.
	   */
	
	  updateRef: function updateRef() {
	    var ref = this.descriptor.ref;
	    if (!ref) return;
	    var hash = (this._scope || this.vm).$refs;
	    var refs;
	    if (!this.fromObject) {
	      refs = this.frags.map(findVmFromFrag);
	    } else {
	      refs = {};
	      this.frags.forEach(function (frag) {
	        refs[frag.scope.$key] = findVmFromFrag(frag);
	      });
	    }
	    hash[ref] = refs;
	  },
	
	  /**
	   * For option lists, update the containing v-model on
	   * parent <select>.
	   */
	
	  updateModel: function updateModel() {
	    if (this.isOption) {
	      var parent = this.start.parentNode;
	      var model = parent && parent.__v_model;
	      if (model) {
	        model.forceUpdate();
	      }
	    }
	  },
	
	  /**
	   * Insert a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Node} prevEl
	   * @param {Boolean} inDocument
	   */
	
	  insert: function insert(frag, index, prevEl, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	    }
	    var staggerAmount = this.getStagger(frag, index, null, 'enter');
	    if (inDocument && staggerAmount) {
	      // create an anchor and insert it synchronously,
	      // so that we can resolve the correct order without
	      // worrying about some elements not inserted yet
	      var anchor = frag.staggerAnchor;
	      if (!anchor) {
	        anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
	        anchor.__v_frag = frag;
	      }
	      after(anchor, prevEl);
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.before(anchor);
	        remove(anchor);
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      var target = prevEl.nextSibling;
	      /* istanbul ignore if */
	      if (!target) {
	        // reset end anchor position in case the position was messed up
	        // by an external drag-n-drop library.
	        after(this.end, prevEl);
	        target = this.end;
	      }
	      frag.before(target);
	    }
	  },
	
	  /**
	   * Remove a fragment. Handles staggering.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {Boolean} inDocument
	   */
	
	  remove: function remove(frag, index, total, inDocument) {
	    if (frag.staggerCb) {
	      frag.staggerCb.cancel();
	      frag.staggerCb = null;
	      // it's not possible for the same frag to be removed
	      // twice, so if we have a pending stagger callback,
	      // it means this frag is queued for enter but removed
	      // before its transition started. Since it is already
	      // destroyed, we can just leave it in detached state.
	      return;
	    }
	    var staggerAmount = this.getStagger(frag, index, total, 'leave');
	    if (inDocument && staggerAmount) {
	      var op = frag.staggerCb = cancellable(function () {
	        frag.staggerCb = null;
	        frag.remove();
	      });
	      setTimeout(op, staggerAmount);
	    } else {
	      frag.remove();
	    }
	  },
	
	  /**
	   * Move a fragment to a new position.
	   * Force no transition.
	   *
	   * @param {Fragment} frag
	   * @param {Node} prevEl
	   */
	
	  move: function move(frag, prevEl) {
	    // fix a common issue with Sortable:
	    // if prevEl doesn't have nextSibling, this means it's
	    // been dragged after the end anchor. Just re-position
	    // the end anchor to the end of the container.
	    /* istanbul ignore if */
	    if (!prevEl.nextSibling) {
	      this.end.parentNode.appendChild(this.end);
	    }
	    frag.before(prevEl.nextSibling, false);
	  },
	
	  /**
	   * Cache a fragment using track-by or the object key.
	   *
	   * @param {*} value
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {String} [key]
	   */
	
	  cacheFrag: function cacheFrag(value, frag, index, key) {
	    var trackByKey = this.params.trackBy;
	    var cache = this.cache;
	    var primitive = !isObject(value);
	    var id;
	    if (key || trackByKey || primitive) {
	      id = getTrackByKey(index, key, value, trackByKey);
	      if (!cache[id]) {
	        cache[id] = frag;
	      } else if (trackByKey !== '$index') {
	        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	      }
	    } else {
	      id = this.id;
	      if (hasOwn(value, id)) {
	        if (value[id] === null) {
	          value[id] = frag;
	        } else {
	          process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	        }
	      } else if (Object.isExtensible(value)) {
	        def(value, id, frag);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Frozen v-for objects cannot be automatically tracked, make sure to ' + 'provide a track-by key.');
	      }
	    }
	    frag.raw = value;
	  },
	
	  /**
	   * Get a cached fragment from the value/index/key
	   *
	   * @param {*} value
	   * @param {Number} index
	   * @param {String} key
	   * @return {Fragment}
	   */
	
	  getCachedFrag: function getCachedFrag(value, index, key) {
	    var trackByKey = this.params.trackBy;
	    var primitive = !isObject(value);
	    var frag;
	    if (key || trackByKey || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      frag = this.cache[id];
	    } else {
	      frag = value[this.id];
	    }
	    if (frag && (frag.reused || frag.fresh)) {
	      process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
	    }
	    return frag;
	  },
	
	  /**
	   * Delete a fragment from cache.
	   *
	   * @param {Fragment} frag
	   */
	
	  deleteCachedFrag: function deleteCachedFrag(frag) {
	    var value = frag.raw;
	    var trackByKey = this.params.trackBy;
	    var scope = frag.scope;
	    var index = scope.$index;
	    // fix #948: avoid accidentally fall through to
	    // a parent repeater which happens to have $key.
	    var key = hasOwn(scope, '$key') && scope.$key;
	    var primitive = !isObject(value);
	    if (trackByKey || key || primitive) {
	      var id = getTrackByKey(index, key, value, trackByKey);
	      this.cache[id] = null;
	    } else {
	      value[this.id] = null;
	      frag.raw = null;
	    }
	  },
	
	  /**
	   * Get the stagger amount for an insertion/removal.
	   *
	   * @param {Fragment} frag
	   * @param {Number} index
	   * @param {Number} total
	   * @param {String} type
	   */
	
	  getStagger: function getStagger(frag, index, total, type) {
	    type = type + 'Stagger';
	    var trans = frag.node.__v_trans;
	    var hooks = trans && trans.hooks;
	    var hook = hooks && (hooks[type] || hooks.stagger);
	    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
	  },
	
	  /**
	   * Pre-process the value before piping it through the
	   * filters. This is passed to and called by the watcher.
	   */
	
	  _preProcess: function _preProcess(value) {
	    // regardless of type, store the un-filtered raw value.
	    this.rawValue = value;
	    return value;
	  },
	
	  /**
	   * Post-process the value after it has been piped through
	   * the filters. This is passed to and called by the watcher.
	   *
	   * It is necessary for this to be called during the
	   * watcher's dependency collection phase because we want
	   * the v-for to update when the source Object is mutated.
	   */
	
	  _postProcess: function _postProcess(value) {
	    if (isArray(value)) {
	      return value;
	    } else if (isPlainObject(value)) {
	      // convert plain object to array.
	      var keys = Object.keys(value);
	      var i = keys.length;
	      var res = new Array(i);
	      var key;
	      while (i--) {
	        key = keys[i];
	        res[i] = {
	          $key: key,
	          $value: value[key]
	        };
	      }
	      return res;
	    } else {
	      if (typeof value === 'number' && !isNaN(value)) {
	        value = range(value);
	      }
	      return value || [];
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.descriptor.ref) {
	      (this._scope || this.vm).$refs[this.descriptor.ref] = null;
	    }
	    if (this.frags) {
	      var i = this.frags.length;
	      var frag;
	      while (i--) {
	        frag = this.frags[i];
	        this.deleteCachedFrag(frag);
	        frag.destroy();
	      }
	    }
	  }
	};
	
	/**
	 * Helper to find the previous element that is a fragment
	 * anchor. This is necessary because a destroyed frag's
	 * element could still be lingering in the DOM before its
	 * leaving transition finishes, but its inserted flag
	 * should have been set to false so we can skip them.
	 *
	 * If this is a block repeat, we want to make sure we only
	 * return frag that is bound to this v-for. (see #929)
	 *
	 * @param {Fragment} frag
	 * @param {Comment|Text} anchor
	 * @param {String} id
	 * @return {Fragment}
	 */
	
	function findPrevFrag(frag, anchor, id) {
	  var el = frag.node.previousSibling;
	  /* istanbul ignore if */
	  if (!el) return;
	  frag = el.__v_frag;
	  while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
	    el = el.previousSibling;
	    /* istanbul ignore if */
	    if (!el) return;
	    frag = el.__v_frag;
	  }
	  return frag;
	}
	
	/**
	 * Create a range array from given number.
	 *
	 * @param {Number} n
	 * @return {Array}
	 */
	
	function range(n) {
	  var i = -1;
	  var ret = new Array(Math.floor(n));
	  while (++i < n) {
	    ret[i] = i;
	  }
	  return ret;
	}
	
	/**
	 * Get the track by key for an item.
	 *
	 * @param {Number} index
	 * @param {String} key
	 * @param {*} value
	 * @param {String} [trackByKey]
	 */
	
	function getTrackByKey(index, key, value, trackByKey) {
	  return trackByKey ? trackByKey === '$index' ? index : trackByKey.charAt(0).match(/\w/) ? getPath(value, trackByKey) : value[trackByKey] : key || value;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  vFor.warnDuplicate = function (value) {
	    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.', this.vm);
	  };
	}
	
	/**
	 * Find a vm from a fragment.
	 *
	 * @param {Fragment} frag
	 * @return {Vue|undefined}
	 */
	
	function findVmFromFrag(frag) {
	  var node = frag.node;
	  // handle multi-node frag
	  if (frag.end) {
	    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
	      node = node.nextSibling;
	    }
	  }
	  return node.__vue__;
	}
	
	var vIf = {
	
	  priority: IF,
	  terminal: true,
	
	  bind: function bind() {
	    var el = this.el;
	    if (!el.__vue__) {
	      // check else block
	      var next = el.nextElementSibling;
	      if (next && getAttr(next, 'v-else') !== null) {
	        remove(next);
	        this.elseEl = next;
	      }
	      // check main block
	      this.anchor = createAnchor('v-if');
	      replace(el, this.anchor);
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.', this.vm);
	      this.invalid = true;
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) return;
	    if (value) {
	      if (!this.frag) {
	        this.insert();
	      }
	    } else {
	      this.remove();
	    }
	  },
	
	  insert: function insert() {
	    if (this.elseFrag) {
	      this.elseFrag.remove();
	      this.elseFrag = null;
	    }
	    // lazy init factory
	    if (!this.factory) {
	      this.factory = new FragmentFactory(this.vm, this.el);
	    }
	    this.frag = this.factory.create(this._host, this._scope, this._frag);
	    this.frag.before(this.anchor);
	  },
	
	  remove: function remove() {
	    if (this.frag) {
	      this.frag.remove();
	      this.frag = null;
	    }
	    if (this.elseEl && !this.elseFrag) {
	      if (!this.elseFactory) {
	        this.elseFactory = new FragmentFactory(this.elseEl._context || this.vm, this.elseEl);
	      }
	      this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
	      this.elseFrag.before(this.anchor);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	    if (this.elseFrag) {
	      this.elseFrag.destroy();
	    }
	  }
	};
	
	var show = {
	
	  bind: function bind() {
	    // check else block
	    var next = this.el.nextElementSibling;
	    if (next && getAttr(next, 'v-else') !== null) {
	      this.elseEl = next;
	    }
	  },
	
	  update: function update(value) {
	    this.apply(this.el, value);
	    if (this.elseEl) {
	      this.apply(this.elseEl, !value);
	    }
	  },
	
	  apply: function apply(el, value) {
	    if (inDoc(el)) {
	      applyTransition(el, value ? 1 : -1, toggle, this.vm);
	    } else {
	      toggle();
	    }
	    function toggle() {
	      el.style.display = value ? '' : 'none';
	    }
	  }
	};
	
	var text$2 = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	    var isRange = el.type === 'range';
	    var lazy = this.params.lazy;
	    var number = this.params.number;
	    var debounce = this.params.debounce;
	
	    // handle composition events.
	    //   http://blog.evanyou.me/2014/01/03/composition-event/
	    // skip this for Android because it handles composition
	    // events quite differently. Android doesn't trigger
	    // composition events for language input methods e.g.
	    // Chinese, but instead triggers them for spelling
	    // suggestions... (see Discussion/#162)
	    var composing = false;
	    if (!isAndroid && !isRange) {
	      this.on('compositionstart', function () {
	        composing = true;
	      });
	      this.on('compositionend', function () {
	        composing = false;
	        // in IE11 the "compositionend" event fires AFTER
	        // the "input" event, so the input handler is blocked
	        // at the end... have to call it here.
	        //
	        // #1327: in lazy mode this is unecessary.
	        if (!lazy) {
	          self.listener();
	        }
	      });
	    }
	
	    // prevent messing with the input when user is typing,
	    // and force update on blur.
	    this.focused = false;
	    if (!isRange && !lazy) {
	      this.on('focus', function () {
	        self.focused = true;
	      });
	      this.on('blur', function () {
	        self.focused = false;
	        // do not sync value after fragment removal (#2017)
	        if (!self._frag || self._frag.inserted) {
	          self.rawListener();
	        }
	      });
	    }
	
	    // Now attach the main listener
	    this.listener = this.rawListener = function () {
	      if (composing || !self._bound) {
	        return;
	      }
	      var val = number || isRange ? toNumber(el.value) : el.value;
	      self.set(val);
	      // force update on next tick to avoid lock & same value
	      // also only update when user is not typing
	      nextTick(function () {
	        if (self._bound && !self.focused) {
	          self.update(self._watcher.value);
	        }
	      });
	    };
	
	    // apply debounce
	    if (debounce) {
	      this.listener = _debounce(this.listener, debounce);
	    }
	
	    // Support jQuery events, since jQuery.trigger() doesn't
	    // trigger native events in some cases and some plugins
	    // rely on $.trigger()
	    //
	    // We want to make sure if a listener is attached using
	    // jQuery, it is also removed with jQuery, that's why
	    // we do the check for each directive instance and
	    // store that check result on itself. This also allows
	    // easier test coverage control by unsetting the global
	    // jQuery variable in tests.
	    this.hasjQuery = typeof jQuery === 'function';
	    if (this.hasjQuery) {
	      var method = jQuery.fn.on ? 'on' : 'bind';
	      jQuery(el)[method]('change', this.rawListener);
	      if (!lazy) {
	        jQuery(el)[method]('input', this.listener);
	      }
	    } else {
	      this.on('change', this.rawListener);
	      if (!lazy) {
	        this.on('input', this.listener);
	      }
	    }
	
	    // IE9 doesn't fire input event on backspace/del/cut
	    if (!lazy && isIE9) {
	      this.on('cut', function () {
	        nextTick(self.listener);
	      });
	      this.on('keyup', function (e) {
	        if (e.keyCode === 46 || e.keyCode === 8) {
	          self.listener();
	        }
	      });
	    }
	
	    // set initial value if present
	    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    // #3029 only update when the value changes. This prevent
	    // browsers from overwriting values like selectionStart
	    value = _toString(value);
	    if (value !== this.el.value) this.el.value = value;
	  },
	
	  unbind: function unbind() {
	    var el = this.el;
	    if (this.hasjQuery) {
	      var method = jQuery.fn.off ? 'off' : 'unbind';
	      jQuery(el)[method]('change', this.listener);
	      jQuery(el)[method]('input', this.listener);
	    }
	  }
	};
	
	var radio = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      // value overwrite via v-bind:value
	      if (el.hasOwnProperty('_value')) {
	        return el._value;
	      }
	      var val = el.value;
	      if (self.params.number) {
	        val = toNumber(val);
	      }
	      return val;
	    };
	
	    this.listener = function () {
	      self.set(self.getValue());
	    };
	    this.on('change', this.listener);
	
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    this.el.checked = looseEqual(value, this.getValue());
	  }
	};
	
	var select = {
	
	  bind: function bind() {
	    var _this = this;
	
	    var self = this;
	    var el = this.el;
	
	    // method to force update DOM using latest value.
	    this.forceUpdate = function () {
	      if (self._watcher) {
	        self.update(self._watcher.get());
	      }
	    };
	
	    // check if this is a multiple select
	    var multiple = this.multiple = el.hasAttribute('multiple');
	
	    // attach listener
	    this.listener = function () {
	      var value = getValue(el, multiple);
	      value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
	      self.set(value);
	    };
	    this.on('change', this.listener);
	
	    // if has initial value, set afterBind
	    var initValue = getValue(el, multiple, true);
	    if (multiple && initValue.length || !multiple && initValue !== null) {
	      this.afterBind = this.listener;
	    }
	
	    // All major browsers except Firefox resets
	    // selectedIndex with value -1 to 0 when the element
	    // is appended to a new parent, therefore we have to
	    // force a DOM update whenever that happens...
	    this.vm.$on('hook:attached', function () {
	      nextTick(_this.forceUpdate);
	    });
	    if (!inDoc(el)) {
	      nextTick(this.forceUpdate);
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    el.selectedIndex = -1;
	    var multi = this.multiple && isArray(value);
	    var options = el.options;
	    var i = options.length;
	    var op, val;
	    while (i--) {
	      op = options[i];
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      /* eslint-disable eqeqeq */
	      op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
	      /* eslint-enable eqeqeq */
	    }
	  },
	
	  unbind: function unbind() {
	    /* istanbul ignore next */
	    this.vm.$off('hook:attached', this.forceUpdate);
	  }
	};
	
	/**
	 * Get select value
	 *
	 * @param {SelectElement} el
	 * @param {Boolean} multi
	 * @param {Boolean} init
	 * @return {Array|*}
	 */
	
	function getValue(el, multi, init) {
	  var res = multi ? [] : null;
	  var op, val, selected;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    op = el.options[i];
	    selected = init ? op.hasAttribute('selected') : op.selected;
	    if (selected) {
	      val = op.hasOwnProperty('_value') ? op._value : op.value;
	      if (multi) {
	        res.push(val);
	      } else {
	        return val;
	      }
	    }
	  }
	  return res;
	}
	
	/**
	 * Native Array.indexOf uses strict equal, but in this
	 * case we need to match string/numbers with custom equal.
	 *
	 * @param {Array} arr
	 * @param {*} val
	 */
	
	function indexOf$1(arr, val) {
	  var i = arr.length;
	  while (i--) {
	    if (looseEqual(arr[i], val)) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	var checkbox = {
	
	  bind: function bind() {
	    var self = this;
	    var el = this.el;
	
	    this.getValue = function () {
	      return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
	    };
	
	    function getBooleanValue() {
	      var val = el.checked;
	      if (val && el.hasOwnProperty('_trueValue')) {
	        return el._trueValue;
	      }
	      if (!val && el.hasOwnProperty('_falseValue')) {
	        return el._falseValue;
	      }
	      return val;
	    }
	
	    this.listener = function () {
	      var model = self._watcher.get();
	      if (isArray(model)) {
	        var val = self.getValue();
	        var i = indexOf(model, val);
	        if (el.checked) {
	          if (i < 0) {
	            self.set(model.concat(val));
	          }
	        } else if (i > -1) {
	          self.set(model.slice(0, i).concat(model.slice(i + 1)));
	        }
	      } else {
	        self.set(getBooleanValue());
	      }
	    };
	
	    this.on('change', this.listener);
	    if (el.hasAttribute('checked')) {
	      this.afterBind = this.listener;
	    }
	  },
	
	  update: function update(value) {
	    var el = this.el;
	    if (isArray(value)) {
	      el.checked = indexOf(value, this.getValue()) > -1;
	    } else {
	      if (el.hasOwnProperty('_trueValue')) {
	        el.checked = looseEqual(value, el._trueValue);
	      } else {
	        el.checked = !!value;
	      }
	    }
	  }
	};
	
	var handlers = {
	  text: text$2,
	  radio: radio,
	  select: select,
	  checkbox: checkbox
	};
	
	var model = {
	
	  priority: MODEL,
	  twoWay: true,
	  handlers: handlers,
	  params: ['lazy', 'number', 'debounce'],
	
	  /**
	   * Possible elements:
	   *   <select>
	   *   <textarea>
	   *   <input type="*">
	   *     - text
	   *     - checkbox
	   *     - radio
	   *     - number
	   */
	
	  bind: function bind() {
	    // friendly warning...
	    this.checkFilters();
	    if (this.hasRead && !this.hasWrite) {
	      process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model="' + this.descriptor.raw + '". ' + 'You might want to use a two-way filter to ensure correct behavior.', this.vm);
	    }
	    var el = this.el;
	    var tag = el.tagName;
	    var handler;
	    if (tag === 'INPUT') {
	      handler = handlers[el.type] || handlers.text;
	    } else if (tag === 'SELECT') {
	      handler = handlers.select;
	    } else if (tag === 'TEXTAREA') {
	      handler = handlers.text;
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag, this.vm);
	      return;
	    }
	    el.__v_model = this;
	    handler.bind.call(this);
	    this.update = handler.update;
	    this._unbind = handler.unbind;
	  },
	
	  /**
	   * Check read/write filter stats.
	   */
	
	  checkFilters: function checkFilters() {
	    var filters = this.filters;
	    if (!filters) return;
	    var i = filters.length;
	    while (i--) {
	      var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
	      if (typeof filter === 'function' || filter.read) {
	        this.hasRead = true;
	      }
	      if (filter.write) {
	        this.hasWrite = true;
	      }
	    }
	  },
	
	  unbind: function unbind() {
	    this.el.__v_model = null;
	    this._unbind && this._unbind();
	  }
	};
	
	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  'delete': [8, 46],
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40
	};
	
	function keyFilter(handler, keys) {
	  var codes = keys.map(function (key) {
	    var charCode = key.charCodeAt(0);
	    if (charCode > 47 && charCode < 58) {
	      return parseInt(key, 10);
	    }
	    if (key.length === 1) {
	      charCode = key.toUpperCase().charCodeAt(0);
	      if (charCode > 64 && charCode < 91) {
	        return charCode;
	      }
	    }
	    return keyCodes[key];
	  });
	  codes = [].concat.apply([], codes);
	  return function keyHandler(e) {
	    if (codes.indexOf(e.keyCode) > -1) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	function stopFilter(handler) {
	  return function stopHandler(e) {
	    e.stopPropagation();
	    return handler.call(this, e);
	  };
	}
	
	function preventFilter(handler) {
	  return function preventHandler(e) {
	    e.preventDefault();
	    return handler.call(this, e);
	  };
	}
	
	function selfFilter(handler) {
	  return function selfHandler(e) {
	    if (e.target === e.currentTarget) {
	      return handler.call(this, e);
	    }
	  };
	}
	
	var on$1 = {
	
	  priority: ON,
	  acceptStatement: true,
	  keyCodes: keyCodes,
	
	  bind: function bind() {
	    // deal with iframes
	    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
	      var self = this;
	      this.iframeBind = function () {
	        on(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
	      };
	      this.on('load', this.iframeBind);
	    }
	  },
	
	  update: function update(handler) {
	    // stub a noop for v-on with no value,
	    // e.g. @mousedown.prevent
	    if (!this.descriptor.raw) {
	      handler = function () {};
	    }
	
	    if (typeof handler !== 'function') {
	      process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler, this.vm);
	      return;
	    }
	
	    // apply modifiers
	    if (this.modifiers.stop) {
	      handler = stopFilter(handler);
	    }
	    if (this.modifiers.prevent) {
	      handler = preventFilter(handler);
	    }
	    if (this.modifiers.self) {
	      handler = selfFilter(handler);
	    }
	    // key filter
	    var keys = Object.keys(this.modifiers).filter(function (key) {
	      return key !== 'stop' && key !== 'prevent' && key !== 'self' && key !== 'capture';
	    });
	    if (keys.length) {
	      handler = keyFilter(handler, keys);
	    }
	
	    this.reset();
	    this.handler = handler;
	
	    if (this.iframeBind) {
	      this.iframeBind();
	    } else {
	      on(this.el, this.arg, this.handler, this.modifiers.capture);
	    }
	  },
	
	  reset: function reset() {
	    var el = this.iframeBind ? this.el.contentWindow : this.el;
	    if (this.handler) {
	      off(el, this.arg, this.handler);
	    }
	  },
	
	  unbind: function unbind() {
	    this.reset();
	  }
	};
	
	var prefixes = ['-webkit-', '-moz-', '-ms-'];
	var camelPrefixes = ['Webkit', 'Moz', 'ms'];
	var importantRE = /!important;?$/;
	var propCache = Object.create(null);
	
	var testEl = null;
	
	var style = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (typeof value === 'string') {
	      this.el.style.cssText = value;
	    } else if (isArray(value)) {
	      this.handleObject(value.reduce(extend, {}));
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  handleObject: function handleObject(value) {
	    // cache object styles so that only changed props
	    // are actually updated.
	    var cache = this.cache || (this.cache = {});
	    var name, val;
	    for (name in cache) {
	      if (!(name in value)) {
	        this.handleSingle(name, null);
	        delete cache[name];
	      }
	    }
	    for (name in value) {
	      val = value[name];
	      if (val !== cache[name]) {
	        cache[name] = val;
	        this.handleSingle(name, val);
	      }
	    }
	  },
	
	  handleSingle: function handleSingle(prop, value) {
	    prop = normalize(prop);
	    if (!prop) return; // unsupported prop
	    // cast possible numbers/booleans into strings
	    if (value != null) value += '';
	    if (value) {
	      var isImportant = importantRE.test(value) ? 'important' : '';
	      if (isImportant) {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          warn('It\'s probably a bad idea to use !important with inline rules. ' + 'This feature will be deprecated in a future version of Vue.');
	        }
	        value = value.replace(importantRE, '').trim();
	        this.el.style.setProperty(prop.kebab, value, isImportant);
	      } else {
	        this.el.style[prop.camel] = value;
	      }
	    } else {
	      this.el.style[prop.camel] = '';
	    }
	  }
	
	};
	
	/**
	 * Normalize a CSS property name.
	 * - cache result
	 * - auto prefix
	 * - camelCase -> dash-case
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function normalize(prop) {
	  if (propCache[prop]) {
	    return propCache[prop];
	  }
	  var res = prefix(prop);
	  propCache[prop] = propCache[res] = res;
	  return res;
	}
	
	/**
	 * Auto detect the appropriate prefix for a CSS property.
	 * https://gist.github.com/paulirish/523692
	 *
	 * @param {String} prop
	 * @return {String}
	 */
	
	function prefix(prop) {
	  prop = hyphenate(prop);
	  var camel = camelize(prop);
	  var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
	  if (!testEl) {
	    testEl = document.createElement('div');
	  }
	  var i = prefixes.length;
	  var prefixed;
	  if (camel !== 'filter' && camel in testEl.style) {
	    return {
	      kebab: prop,
	      camel: camel
	    };
	  }
	  while (i--) {
	    prefixed = camelPrefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return {
	        kebab: prefixes[i] + prop,
	        camel: prefixed
	      };
	    }
	  }
	}
	
	// xlink
	var xlinkNS = 'http://www.w3.org/1999/xlink';
	var xlinkRE = /^xlink:/;
	
	// check for attributes that prohibit interpolations
	var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
	// these attributes should also set their corresponding properties
	// because they only affect the initial state of the element
	var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;
	// these attributes expect enumrated values of "true" or "false"
	// but are not boolean attributes
	var enumeratedAttrRE = /^(?:draggable|contenteditable|spellcheck)$/;
	
	// these attributes should set a hidden property for
	// binding v-model to object values
	var modelProps = {
	  value: '_value',
	  'true-value': '_trueValue',
	  'false-value': '_falseValue'
	};
	
	var bind$1 = {
	
	  priority: BIND,
	
	  bind: function bind() {
	    var attr = this.arg;
	    var tag = this.el.tagName;
	    // should be deep watch on object mode
	    if (!attr) {
	      this.deep = true;
	    }
	    // handle interpolation bindings
	    var descriptor = this.descriptor;
	    var tokens = descriptor.interp;
	    if (tokens) {
	      // handle interpolations with one-time tokens
	      if (descriptor.hasOneTime) {
	        this.expression = tokensToExp(tokens, this._scope || this.vm);
	      }
	
	      // only allow binding on native attributes
	      if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
	        process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.', this.vm);
	        this.el.removeAttribute(attr);
	        this.invalid = true;
	      }
	
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production') {
	        var raw = attr + '="' + descriptor.raw + '": ';
	        // warn src
	        if (attr === 'src') {
	          warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.', this.vm);
	        }
	
	        // warn style
	        if (attr === 'style') {
	          warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.', this.vm);
	        }
	      }
	    }
	  },
	
	  update: function update(value) {
	    if (this.invalid) {
	      return;
	    }
	    var attr = this.arg;
	    if (this.arg) {
	      this.handleSingle(attr, value);
	    } else {
	      this.handleObject(value || {});
	    }
	  },
	
	  // share object handler with v-bind:class
	  handleObject: style.handleObject,
	
	  handleSingle: function handleSingle(attr, value) {
	    var el = this.el;
	    var interp = this.descriptor.interp;
	    if (this.modifiers.camel) {
	      attr = camelize(attr);
	    }
	    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
	      var attrValue = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
	      ? '' : value : value;
	
	      if (el[attr] !== attrValue) {
	        el[attr] = attrValue;
	      }
	    }
	    // set model props
	    var modelProp = modelProps[attr];
	    if (!interp && modelProp) {
	      el[modelProp] = value;
	      // update v-model if present
	      var model = el.__v_model;
	      if (model) {
	        model.listener();
	      }
	    }
	    // do not set value attribute for textarea
	    if (attr === 'value' && el.tagName === 'TEXTAREA') {
	      el.removeAttribute(attr);
	      return;
	    }
	    // update attribute
	    if (enumeratedAttrRE.test(attr)) {
	      el.setAttribute(attr, value ? 'true' : 'false');
	    } else if (value != null && value !== false) {
	      if (attr === 'class') {
	        // handle edge case #1960:
	        // class interpolation should not overwrite Vue transition class
	        if (el.__v_trans) {
	          value += ' ' + el.__v_trans.id + '-transition';
	        }
	        setClass(el, value);
	      } else if (xlinkRE.test(attr)) {
	        el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
	      } else {
	        el.setAttribute(attr, value === true ? '' : value);
	      }
	    } else {
	      el.removeAttribute(attr);
	    }
	  }
	};
	
	var el = {
	
	  priority: EL,
	
	  bind: function bind() {
	    /* istanbul ignore if */
	    if (!this.arg) {
	      return;
	    }
	    var id = this.id = camelize(this.arg);
	    var refs = (this._scope || this.vm).$els;
	    if (hasOwn(refs, id)) {
	      refs[id] = this.el;
	    } else {
	      defineReactive(refs, id, this.el);
	    }
	  },
	
	  unbind: function unbind() {
	    var refs = (this._scope || this.vm).$els;
	    if (refs[this.id] === this.el) {
	      refs[this.id] = null;
	    }
	  }
	};
	
	var ref = {
	  bind: function bind() {
	    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.', this.vm);
	  }
	};
	
	var cloak = {
	  bind: function bind() {
	    var el = this.el;
	    this.vm.$once('pre-hook:compiled', function () {
	      el.removeAttribute('v-cloak');
	    });
	  }
	};
	
	// logic control
	// two-way binding
	// event handling
	// attributes
	// ref & el
	// cloak
	// must export plain object
	var directives = {
	  text: text$1,
	  html: html,
	  'for': vFor,
	  'if': vIf,
	  show: show,
	  model: model,
	  on: on$1,
	  bind: bind$1,
	  el: el,
	  ref: ref,
	  cloak: cloak
	};
	
	var vClass = {
	
	  deep: true,
	
	  update: function update(value) {
	    if (!value) {
	      this.cleanup();
	    } else if (typeof value === 'string') {
	      this.setClass(value.trim().split(/\s+/));
	    } else {
	      this.setClass(normalize$1(value));
	    }
	  },
	
	  setClass: function setClass(value) {
	    this.cleanup(value);
	    for (var i = 0, l = value.length; i < l; i++) {
	      var val = value[i];
	      if (val) {
	        apply(this.el, val, addClass);
	      }
	    }
	    this.prevKeys = value;
	  },
	
	  cleanup: function cleanup(value) {
	    var prevKeys = this.prevKeys;
	    if (!prevKeys) return;
	    var i = prevKeys.length;
	    while (i--) {
	      var key = prevKeys[i];
	      if (!value || value.indexOf(key) < 0) {
	        apply(this.el, key, removeClass);
	      }
	    }
	  }
	};
	
	/**
	 * Normalize objects and arrays (potentially containing objects)
	 * into array of strings.
	 *
	 * @param {Object|Array<String|Object>} value
	 * @return {Array<String>}
	 */
	
	function normalize$1(value) {
	  var res = [];
	  if (isArray(value)) {
	    for (var i = 0, l = value.length; i < l; i++) {
	      var _key = value[i];
	      if (_key) {
	        if (typeof _key === 'string') {
	          res.push(_key);
	        } else {
	          for (var k in _key) {
	            if (_key[k]) res.push(k);
	          }
	        }
	      }
	    }
	  } else if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) res.push(key);
	    }
	  }
	  return res;
	}
	
	/**
	 * Add or remove a class/classes on an element
	 *
	 * @param {Element} el
	 * @param {String} key The class name. This may or may not
	 *                     contain a space character, in such a
	 *                     case we'll deal with multiple class
	 *                     names at once.
	 * @param {Function} fn
	 */
	
	function apply(el, key, fn) {
	  key = key.trim();
	  if (key.indexOf(' ') === -1) {
	    fn(el, key);
	    return;
	  }
	  // The key contains one or more space characters.
	  // Since a class name doesn't accept such characters, we
	  // treat it as multiple classes.
	  var keys = key.split(/\s+/);
	  for (var i = 0, l = keys.length; i < l; i++) {
	    fn(el, keys[i]);
	  }
	}
	
	var component = {
	
	  priority: COMPONENT,
	
	  params: ['keep-alive', 'transition-mode', 'inline-template'],
	
	  /**
	   * Setup. Two possible usages:
	   *
	   * - static:
	   *   <comp> or <div v-component="comp">
	   *
	   * - dynamic:
	   *   <component :is="view">
	   */
	
	  bind: function bind() {
	    if (!this.el.__vue__) {
	      // keep-alive cache
	      this.keepAlive = this.params.keepAlive;
	      if (this.keepAlive) {
	        this.cache = {};
	      }
	      // check inline-template
	      if (this.params.inlineTemplate) {
	        // extract inline template as a DocumentFragment
	        this.inlineTemplate = extractContent(this.el, true);
	      }
	      // component resolution related state
	      this.pendingComponentCb = this.Component = null;
	      // transition related state
	      this.pendingRemovals = 0;
	      this.pendingRemovalCb = null;
	      // create a ref anchor
	      this.anchor = createAnchor('v-component');
	      replace(this.el, this.anchor);
	      // remove is attribute.
	      // this is removed during compilation, but because compilation is
	      // cached, when the component is used elsewhere this attribute
	      // will remain at link time.
	      this.el.removeAttribute('is');
	      this.el.removeAttribute(':is');
	      // remove ref, same as above
	      if (this.descriptor.ref) {
	        this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
	      }
	      // if static, build right now.
	      if (this.literal) {
	        this.setComponent(this.expression);
	      }
	    } else {
	      process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
	    }
	  },
	
	  /**
	   * Public update, called by the watcher in the dynamic
	   * literal scenario, e.g. <component :is="view">
	   */
	
	  update: function update(value) {
	    if (!this.literal) {
	      this.setComponent(value);
	    }
	  },
	
	  /**
	   * Switch dynamic components. May resolve the component
	   * asynchronously, and perform transition based on
	   * specified transition mode. Accepts a few additional
	   * arguments specifically for vue-router.
	   *
	   * The callback is called when the full transition is
	   * finished.
	   *
	   * @param {String} value
	   * @param {Function} [cb]
	   */
	
	  setComponent: function setComponent(value, cb) {
	    this.invalidatePending();
	    if (!value) {
	      // just remove current
	      this.unbuild(true);
	      this.remove(this.childVM, cb);
	      this.childVM = null;
	    } else {
	      var self = this;
	      this.resolveComponent(value, function () {
	        self.mountComponent(cb);
	      });
	    }
	  },
	
	  /**
	   * Resolve the component constructor to use when creating
	   * the child vm.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  resolveComponent: function resolveComponent(value, cb) {
	    var self = this;
	    this.pendingComponentCb = cancellable(function (Component) {
	      self.ComponentName = Component.options.name || (typeof value === 'string' ? value : null);
	      self.Component = Component;
	      cb();
	    });
	    this.vm._resolveComponent(value, this.pendingComponentCb);
	  },
	
	  /**
	   * Create a new instance using the current constructor and
	   * replace the existing instance. This method doesn't care
	   * whether the new component and the old one are actually
	   * the same.
	   *
	   * @param {Function} [cb]
	   */
	
	  mountComponent: function mountComponent(cb) {
	    // actual mount
	    this.unbuild(true);
	    var self = this;
	    var activateHooks = this.Component.options.activate;
	    var cached = this.getCached();
	    var newComponent = this.build();
	    if (activateHooks && !cached) {
	      this.waitingFor = newComponent;
	      callActivateHooks(activateHooks, newComponent, function () {
	        if (self.waitingFor !== newComponent) {
	          return;
	        }
	        self.waitingFor = null;
	        self.transition(newComponent, cb);
	      });
	    } else {
	      // update ref for kept-alive component
	      if (cached) {
	        newComponent._updateRef();
	      }
	      this.transition(newComponent, cb);
	    }
	  },
	
	  /**
	   * When the component changes or unbinds before an async
	   * constructor is resolved, we need to invalidate its
	   * pending callback.
	   */
	
	  invalidatePending: function invalidatePending() {
	    if (this.pendingComponentCb) {
	      this.pendingComponentCb.cancel();
	      this.pendingComponentCb = null;
	    }
	  },
	
	  /**
	   * Instantiate/insert a new child vm.
	   * If keep alive and has cached instance, insert that
	   * instance; otherwise build a new one and cache it.
	   *
	   * @param {Object} [extraOptions]
	   * @return {Vue} - the created instance
	   */
	
	  build: function build(extraOptions) {
	    var cached = this.getCached();
	    if (cached) {
	      return cached;
	    }
	    if (this.Component) {
	      // default options
	      var options = {
	        name: this.ComponentName,
	        el: cloneNode(this.el),
	        template: this.inlineTemplate,
	        // make sure to add the child with correct parent
	        // if this is a transcluded component, its parent
	        // should be the transclusion host.
	        parent: this._host || this.vm,
	        // if no inline-template, then the compiled
	        // linker can be cached for better performance.
	        _linkerCachable: !this.inlineTemplate,
	        _ref: this.descriptor.ref,
	        _asComponent: true,
	        _isRouterView: this._isRouterView,
	        // if this is a transcluded component, context
	        // will be the common parent vm of this instance
	        // and its host.
	        _context: this.vm,
	        // if this is inside an inline v-for, the scope
	        // will be the intermediate scope created for this
	        // repeat fragment. this is used for linking props
	        // and container directives.
	        _scope: this._scope,
	        // pass in the owner fragment of this component.
	        // this is necessary so that the fragment can keep
	        // track of its contained components in order to
	        // call attach/detach hooks for them.
	        _frag: this._frag
	      };
	      // extra options
	      // in 1.0.0 this is used by vue-router only
	      /* istanbul ignore if */
	      if (extraOptions) {
	        extend(options, extraOptions);
	      }
	      var child = new this.Component(options);
	      if (this.keepAlive) {
	        this.cache[this.Component.cid] = child;
	      }
	      /* istanbul ignore if */
	      if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
	        warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template, child);
	      }
	      return child;
	    }
	  },
	
	  /**
	   * Try to get a cached instance of the current component.
	   *
	   * @return {Vue|undefined}
	   */
	
	  getCached: function getCached() {
	    return this.keepAlive && this.cache[this.Component.cid];
	  },
	
	  /**
	   * Teardown the current child, but defers cleanup so
	   * that we can separate the destroy and removal steps.
	   *
	   * @param {Boolean} defer
	   */
	
	  unbuild: function unbuild(defer) {
	    if (this.waitingFor) {
	      if (!this.keepAlive) {
	        this.waitingFor.$destroy();
	      }
	      this.waitingFor = null;
	    }
	    var child = this.childVM;
	    if (!child || this.keepAlive) {
	      if (child) {
	        // remove ref
	        child._inactive = true;
	        child._updateRef(true);
	      }
	      return;
	    }
	    // the sole purpose of `deferCleanup` is so that we can
	    // "deactivate" the vm right now and perform DOM removal
	    // later.
	    child.$destroy(false, defer);
	  },
	
	  /**
	   * Remove current destroyed child and manually do
	   * the cleanup after removal.
	   *
	   * @param {Function} cb
	   */
	
	  remove: function remove(child, cb) {
	    var keepAlive = this.keepAlive;
	    if (child) {
	      // we may have a component switch when a previous
	      // component is still being transitioned out.
	      // we want to trigger only one lastest insertion cb
	      // when the existing transition finishes. (#1119)
	      this.pendingRemovals++;
	      this.pendingRemovalCb = cb;
	      var self = this;
	      child.$remove(function () {
	        self.pendingRemovals--;
	        if (!keepAlive) child._cleanup();
	        if (!self.pendingRemovals && self.pendingRemovalCb) {
	          self.pendingRemovalCb();
	          self.pendingRemovalCb = null;
	        }
	      });
	    } else if (cb) {
	      cb();
	    }
	  },
	
	  /**
	   * Actually swap the components, depending on the
	   * transition mode. Defaults to simultaneous.
	   *
	   * @param {Vue} target
	   * @param {Function} [cb]
	   */
	
	  transition: function transition(target, cb) {
	    var self = this;
	    var current = this.childVM;
	    // for devtool inspection
	    if (current) current._inactive = true;
	    target._inactive = false;
	    this.childVM = target;
	    switch (self.params.transitionMode) {
	      case 'in-out':
	        target.$before(self.anchor, function () {
	          self.remove(current, cb);
	        });
	        break;
	      case 'out-in':
	        self.remove(current, function () {
	          target.$before(self.anchor, cb);
	        });
	        break;
	      default:
	        self.remove(current);
	        target.$before(self.anchor, cb);
	    }
	  },
	
	  /**
	   * Unbind.
	   */
	
	  unbind: function unbind() {
	    this.invalidatePending();
	    // Do not defer cleanup when unbinding
	    this.unbuild();
	    // destroy all keep-alive cached instances
	    if (this.cache) {
	      for (var key in this.cache) {
	        this.cache[key].$destroy();
	      }
	      this.cache = null;
	    }
	  }
	};
	
	/**
	 * Call activate hooks in order (asynchronous)
	 *
	 * @param {Array} hooks
	 * @param {Vue} vm
	 * @param {Function} cb
	 */
	
	function callActivateHooks(hooks, vm, cb) {
	  var total = hooks.length;
	  var called = 0;
	  hooks[0].call(vm, next);
	  function next() {
	    if (++called >= total) {
	      cb();
	    } else {
	      hooks[called].call(vm, next);
	    }
	  }
	}
	
	var propBindingModes = config._propBindingModes;
	var empty = {};
	
	// regexes
	var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
	var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;
	
	/**
	 * Compile props on a root element and return
	 * a props link function.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Array} propOptions
	 * @param {Vue} vm
	 * @return {Function} propsLinkFn
	 */
	
	function compileProps(el, propOptions, vm) {
	  var props = [];
	  var propsData = vm.$options.propsData;
	  var names = Object.keys(propOptions);
	  var i = names.length;
	  var options, name, attr, value, path, parsed, prop;
	  while (i--) {
	    name = names[i];
	    options = propOptions[name] || empty;
	
	    if (process.env.NODE_ENV !== 'production' && name === '$data') {
	      warn('Do not use $data as prop.', vm);
	      continue;
	    }
	
	    // props could contain dashes, which will be
	    // interpreted as minus calculations by the parser
	    // so we need to camelize the path here
	    path = camelize(name);
	    if (!identRE$1.test(path)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.', vm);
	      continue;
	    }
	
	    prop = {
	      name: name,
	      path: path,
	      options: options,
	      mode: propBindingModes.ONE_WAY,
	      raw: null
	    };
	
	    attr = hyphenate(name);
	    // first check dynamic version
	    if ((value = getBindAttr(el, attr)) === null) {
	      if ((value = getBindAttr(el, attr + '.sync')) !== null) {
	        prop.mode = propBindingModes.TWO_WAY;
	      } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
	        prop.mode = propBindingModes.ONE_TIME;
	      }
	    }
	    if (value !== null) {
	      // has dynamic binding!
	      prop.raw = value;
	      parsed = parseDirective(value);
	      value = parsed.expression;
	      prop.filters = parsed.filters;
	      // check binding type
	      if (isLiteral(value) && !parsed.filters) {
	        // for expressions containing literal numbers and
	        // booleans, there's no need to setup a prop binding,
	        // so we can optimize them as a one-time set.
	        prop.optimizedLiteral = true;
	      } else {
	        prop.dynamic = true;
	        // check non-settable path for two-way bindings
	        if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
	          prop.mode = propBindingModes.ONE_WAY;
	          warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value, vm);
	        }
	      }
	      prop.parentPath = value;
	
	      // warn required two-way
	      if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
	        warn('Prop "' + name + '" expects a two-way binding type.', vm);
	      }
	    } else if ((value = getAttr(el, attr)) !== null) {
	      // has literal binding!
	      prop.raw = value;
	    } else if (propsData && (value = propsData[name] || propsData[path]) !== null) {
	      // has propsData
	      prop.raw = value;
	    } else if (process.env.NODE_ENV !== 'production') {
	      // check possible camelCase prop usage
	      var lowerCaseName = path.toLowerCase();
	      value = /[A-Z\-]/.test(name) && (el.getAttribute(lowerCaseName) || el.getAttribute(':' + lowerCaseName) || el.getAttribute('v-bind:' + lowerCaseName) || el.getAttribute(':' + lowerCaseName + '.once') || el.getAttribute('v-bind:' + lowerCaseName + '.once') || el.getAttribute(':' + lowerCaseName + '.sync') || el.getAttribute('v-bind:' + lowerCaseName + '.sync'));
	      if (value) {
	        warn('Possible usage error for prop `' + lowerCaseName + '` - ' + 'did you mean `' + attr + '`? HTML is case-insensitive, remember to use ' + 'kebab-case for props in templates.', vm);
	      } else if (options.required && (!propsData || !(name in propsData) && !(path in propsData))) {
	        // warn missing required
	        warn('Missing required prop: ' + name, vm);
	      }
	    }
	    // push prop
	    props.push(prop);
	  }
	  return makePropsLinkFn(props);
	}
	
	/**
	 * Build a function that applies props to a vm.
	 *
	 * @param {Array} props
	 * @return {Function} propsLinkFn
	 */
	
	function makePropsLinkFn(props) {
	  return function propsLinkFn(vm, scope) {
	    // store resolved props info
	    vm._props = {};
	    var inlineProps = vm.$options.propsData;
	    var i = props.length;
	    var prop, path, options, value, raw;
	    while (i--) {
	      prop = props[i];
	      raw = prop.raw;
	      path = prop.path;
	      options = prop.options;
	      vm._props[path] = prop;
	      if (inlineProps && hasOwn(inlineProps, path)) {
	        initProp(vm, prop, inlineProps[path]);
	      }if (raw === null) {
	        // initialize absent prop
	        initProp(vm, prop, undefined);
	      } else if (prop.dynamic) {
	        // dynamic prop
	        if (prop.mode === propBindingModes.ONE_TIME) {
	          // one time binding
	          value = (scope || vm._context || vm).$get(prop.parentPath);
	          initProp(vm, prop, value);
	        } else {
	          if (vm._context) {
	            // dynamic binding
	            vm._bindDir({
	              name: 'prop',
	              def: propDef,
	              prop: prop
	            }, null, null, scope); // el, host, scope
	          } else {
	              // root instance
	              initProp(vm, prop, vm.$get(prop.parentPath));
	            }
	        }
	      } else if (prop.optimizedLiteral) {
	        // optimized literal, cast it and just set once
	        var stripped = stripQuotes(raw);
	        value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
	        initProp(vm, prop, value);
	      } else {
	        // string literal, but we need to cater for
	        // Boolean props with no value, or with same
	        // literal value (e.g. disabled="disabled")
	        // see https://github.com/vuejs/vue-loader/issues/182
	        value = options.type === Boolean && (raw === '' || raw === hyphenate(prop.name)) ? true : raw;
	        initProp(vm, prop, value);
	      }
	    }
	  };
	}
	
	/**
	 * Process a prop with a rawValue, applying necessary coersions,
	 * default values & assertions and call the given callback with
	 * processed value.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} rawValue
	 * @param {Function} fn
	 */
	
	function processPropValue(vm, prop, rawValue, fn) {
	  var isSimple = prop.dynamic && isSimplePath(prop.parentPath);
	  var value = rawValue;
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop);
	  }
	  value = coerceProp(prop, value, vm);
	  var coerced = value !== rawValue;
	  if (!assertProp(prop, value, vm)) {
	    value = undefined;
	  }
	  if (isSimple && !coerced) {
	    withoutConversion(function () {
	      fn(value);
	    });
	  } else {
	    fn(value);
	  }
	}
	
	/**
	 * Set a prop's initial value on a vm and its data object.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function initProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    defineReactive(vm, prop.path, value);
	  });
	}
	
	/**
	 * Update a prop's value on a vm.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @param {*} value
	 */
	
	function updateProp(vm, prop, value) {
	  processPropValue(vm, prop, value, function (value) {
	    vm[prop.path] = value;
	  });
	}
	
	/**
	 * Get the default value of a prop.
	 *
	 * @param {Vue} vm
	 * @param {Object} prop
	 * @return {*}
	 */
	
	function getPropDefaultValue(vm, prop) {
	  // no default, return undefined
	  var options = prop.options;
	  if (!hasOwn(options, 'default')) {
	    // absent boolean value defaults to false
	    return options.type === Boolean ? false : undefined;
	  }
	  var def = options['default'];
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    process.env.NODE_ENV !== 'production' && warn('Invalid default value for prop "' + prop.name + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
	}
	
	/**
	 * Assert whether a prop is valid.
	 *
	 * @param {Object} prop
	 * @param {*} value
	 * @param {Vue} vm
	 */
	
	function assertProp(prop, value, vm) {
	  if (!prop.options.required && ( // non-required
	  prop.raw === null || // abscent
	  value == null) // null or undefined
	  ) {
	      return true;
	    }
	  var options = prop.options;
	  var type = options.type;
	  var valid = !type;
	  var expectedTypes = [];
	  if (type) {
	    if (!isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    if (process.env.NODE_ENV !== 'production') {
	      warn('Invalid prop: type check failed for prop "' + prop.name + '".' + ' Expected ' + expectedTypes.map(formatType).join(', ') + ', got ' + formatValue(value) + '.', vm);
	    }
	    return false;
	  }
	  var validator = options.validator;
	  if (validator) {
	    if (!validator(value)) {
	      process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for prop "' + prop.name + '".', vm);
	      return false;
	    }
	  }
	  return true;
	}
	
	/**
	 * Force parsing value with coerce option.
	 *
	 * @param {*} value
	 * @param {Object} options
	 * @return {*}
	 */
	
	function coerceProp(prop, value, vm) {
	  var coerce = prop.options.coerce;
	  if (!coerce) {
	    return value;
	  }
	  if (typeof coerce === 'function') {
	    return coerce(value);
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid coerce for prop "' + prop.name + '": expected function, got ' + typeof coerce + '.', vm);
	    return value;
	  }
	}
	
	/**
	 * Assert the type of a value
	 *
	 * @param {*} value
	 * @param {Function} type
	 * @return {Object}
	 */
	
	function assertType(value, type) {
	  var valid;
	  var expectedType;
	  if (type === String) {
	    expectedType = 'string';
	    valid = typeof value === expectedType;
	  } else if (type === Number) {
	    expectedType = 'number';
	    valid = typeof value === expectedType;
	  } else if (type === Boolean) {
	    expectedType = 'boolean';
	    valid = typeof value === expectedType;
	  } else if (type === Function) {
	    expectedType = 'function';
	    valid = typeof value === expectedType;
	  } else if (type === Object) {
	    expectedType = 'object';
	    valid = isPlainObject(value);
	  } else if (type === Array) {
	    expectedType = 'array';
	    valid = isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  };
	}
	
	/**
	 * Format type for output
	 *
	 * @param {String} type
	 * @return {String}
	 */
	
	function formatType(type) {
	  return type ? type.charAt(0).toUpperCase() + type.slice(1) : 'custom type';
	}
	
	/**
	 * Format value
	 *
	 * @param {*} value
	 * @return {String}
	 */
	
	function formatValue(val) {
	  return Object.prototype.toString.call(val).slice(8, -1);
	}
	
	var bindingModes = config._propBindingModes;
	
	var propDef = {
	
	  bind: function bind() {
	    var child = this.vm;
	    var parent = child._context;
	    // passed in from compiler directly
	    var prop = this.descriptor.prop;
	    var childKey = prop.path;
	    var parentKey = prop.parentPath;
	    var twoWay = prop.mode === bindingModes.TWO_WAY;
	
	    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
	      updateProp(child, prop, val);
	    }, {
	      twoWay: twoWay,
	      filters: prop.filters,
	      // important: props need to be observed on the
	      // v-for scope if present
	      scope: this._scope
	    });
	
	    // set the child initial value.
	    initProp(child, prop, parentWatcher.value);
	
	    // setup two-way binding
	    if (twoWay) {
	      // important: defer the child watcher creation until
	      // the created hook (after data observation)
	      var self = this;
	      child.$once('pre-hook:created', function () {
	        self.childWatcher = new Watcher(child, childKey, function (val) {
	          parentWatcher.set(val);
	        }, {
	          // ensure sync upward before parent sync down.
	          // this is necessary in cases e.g. the child
	          // mutates a prop array, then replaces it. (#1683)
	          sync: true
	        });
	      });
	    }
	  },
	
	  unbind: function unbind() {
	    this.parentWatcher.teardown();
	    if (this.childWatcher) {
	      this.childWatcher.teardown();
	    }
	  }
	};
	
	var queue$1 = [];
	var queued = false;
	
	/**
	 * Push a job into the queue.
	 *
	 * @param {Function} job
	 */
	
	function pushJob(job) {
	  queue$1.push(job);
	  if (!queued) {
	    queued = true;
	    nextTick(flush);
	  }
	}
	
	/**
	 * Flush the queue, and do one forced reflow before
	 * triggering transitions.
	 */
	
	function flush() {
	  // Force layout
	  var f = document.documentElement.offsetHeight;
	  for (var i = 0; i < queue$1.length; i++) {
	    queue$1[i]();
	  }
	  queue$1 = [];
	  queued = false;
	  // dummy return, so js linters don't complain about
	  // unused variable f
	  return f;
	}
	
	var TYPE_TRANSITION = 'transition';
	var TYPE_ANIMATION = 'animation';
	var transDurationProp = transitionProp + 'Duration';
	var animDurationProp = animationProp + 'Duration';
	
	/**
	 * If a just-entered element is applied the
	 * leave class while its enter transition hasn't started yet,
	 * and the transitioned property has the same value for both
	 * enter/leave, then the leave transition will be skipped and
	 * the transitionend event never fires. This function ensures
	 * its callback to be called after a transition has started
	 * by waiting for double raf.
	 *
	 * It falls back to setTimeout on devices that support CSS
	 * transitions but not raf (e.g. Android 4.2 browser) - since
	 * these environments are usually slow, we are giving it a
	 * relatively large timeout.
	 */
	
	var raf = inBrowser && window.requestAnimationFrame;
	var waitForTransitionStart = raf
	/* istanbul ignore next */
	? function (fn) {
	  raf(function () {
	    raf(fn);
	  });
	} : function (fn) {
	  setTimeout(fn, 50);
	};
	
	/**
	 * A Transition object that encapsulates the state and logic
	 * of the transition.
	 *
	 * @param {Element} el
	 * @param {String} id
	 * @param {Object} hooks
	 * @param {Vue} vm
	 */
	function Transition(el, id, hooks, vm) {
	  this.id = id;
	  this.el = el;
	  this.enterClass = hooks && hooks.enterClass || id + '-enter';
	  this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
	  this.hooks = hooks;
	  this.vm = vm;
	  // async state
	  this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
	  this.justEntered = false;
	  this.entered = this.left = false;
	  this.typeCache = {};
	  // check css transition type
	  this.type = hooks && hooks.type;
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV !== 'production') {
	    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
	      warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type, vm);
	    }
	  }
	  // bind
	  var self = this;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
	    self[m] = bind(self[m], self);
	  });
	}
	
	var p$1 = Transition.prototype;
	
	/**
	 * Start an entering transition.
	 *
	 * 1. enter transition triggered
	 * 2. call beforeEnter hook
	 * 3. add enter class
	 * 4. insert/show element
	 * 5. call enter hook (with possible explicit js callback)
	 * 6. reflow
	 * 7. based on transition type:
	 *    - transition:
	 *        remove class now, wait for transitionend,
	 *        then done if there's no explicit js callback.
	 *    - animation:
	 *        wait for animationend, remove class,
	 *        then done if there's no explicit js callback.
	 *    - no css transition:
	 *        done now if there's no explicit js callback.
	 * 8. wait for either done or js callback, then call
	 *    afterEnter hook.
	 *
	 * @param {Function} op - insert/show the element
	 * @param {Function} [cb]
	 */
	
	p$1.enter = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeEnter');
	  this.cb = cb;
	  addClass(this.el, this.enterClass);
	  op();
	  this.entered = false;
	  this.callHookWithCb('enter');
	  if (this.entered) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.enterCancelled;
	  pushJob(this.enterNextTick);
	};
	
	/**
	 * The "nextTick" phase of an entering transition, which is
	 * to be pushed into a queue and executed after a reflow so
	 * that removing the class can trigger a CSS transition.
	 */
	
	p$1.enterNextTick = function () {
	  var _this = this;
	
	  // prevent transition skipping
	  this.justEntered = true;
	  waitForTransitionStart(function () {
	    _this.justEntered = false;
	  });
	  var enterDone = this.enterDone;
	  var type = this.getCssTransitionType(this.enterClass);
	  if (!this.pendingJsCb) {
	    if (type === TYPE_TRANSITION) {
	      // trigger transition by removing enter class now
	      removeClass(this.el, this.enterClass);
	      this.setupCssCb(transitionEndEvent, enterDone);
	    } else if (type === TYPE_ANIMATION) {
	      this.setupCssCb(animationEndEvent, enterDone);
	    } else {
	      enterDone();
	    }
	  } else if (type === TYPE_TRANSITION) {
	    removeClass(this.el, this.enterClass);
	  }
	};
	
	/**
	 * The "cleanup" phase of an entering transition.
	 */
	
	p$1.enterDone = function () {
	  this.entered = true;
	  this.cancel = this.pendingJsCb = null;
	  removeClass(this.el, this.enterClass);
	  this.callHook('afterEnter');
	  if (this.cb) this.cb();
	};
	
	/**
	 * Start a leaving transition.
	 *
	 * 1. leave transition triggered.
	 * 2. call beforeLeave hook
	 * 3. add leave class (trigger css transition)
	 * 4. call leave hook (with possible explicit js callback)
	 * 5. reflow if no explicit js callback is provided
	 * 6. based on transition type:
	 *    - transition or animation:
	 *        wait for end event, remove class, then done if
	 *        there's no explicit js callback.
	 *    - no css transition:
	 *        done if there's no explicit js callback.
	 * 7. wait for either done or js callback, then call
	 *    afterLeave hook.
	 *
	 * @param {Function} op - remove/hide the element
	 * @param {Function} [cb]
	 */
	
	p$1.leave = function (op, cb) {
	  this.cancelPending();
	  this.callHook('beforeLeave');
	  this.op = op;
	  this.cb = cb;
	  addClass(this.el, this.leaveClass);
	  this.left = false;
	  this.callHookWithCb('leave');
	  if (this.left) {
	    return; // user called done synchronously.
	  }
	  this.cancel = this.hooks && this.hooks.leaveCancelled;
	  // only need to handle leaveDone if
	  // 1. the transition is already done (synchronously called
	  //    by the user, which causes this.op set to null)
	  // 2. there's no explicit js callback
	  if (this.op && !this.pendingJsCb) {
	    // if a CSS transition leaves immediately after enter,
	    // the transitionend event never fires. therefore we
	    // detect such cases and end the leave immediately.
	    if (this.justEntered) {
	      this.leaveDone();
	    } else {
	      pushJob(this.leaveNextTick);
	    }
	  }
	};
	
	/**
	 * The "nextTick" phase of a leaving transition.
	 */
	
	p$1.leaveNextTick = function () {
	  var type = this.getCssTransitionType(this.leaveClass);
	  if (type) {
	    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
	    this.setupCssCb(event, this.leaveDone);
	  } else {
	    this.leaveDone();
	  }
	};
	
	/**
	 * The "cleanup" phase of a leaving transition.
	 */
	
	p$1.leaveDone = function () {
	  this.left = true;
	  this.cancel = this.pendingJsCb = null;
	  this.op();
	  removeClass(this.el, this.leaveClass);
	  this.callHook('afterLeave');
	  if (this.cb) this.cb();
	  this.op = null;
	};
	
	/**
	 * Cancel any pending callbacks from a previously running
	 * but not finished transition.
	 */
	
	p$1.cancelPending = function () {
	  this.op = this.cb = null;
	  var hasPending = false;
	  if (this.pendingCssCb) {
	    hasPending = true;
	    off(this.el, this.pendingCssEvent, this.pendingCssCb);
	    this.pendingCssEvent = this.pendingCssCb = null;
	  }
	  if (this.pendingJsCb) {
	    hasPending = true;
	    this.pendingJsCb.cancel();
	    this.pendingJsCb = null;
	  }
	  if (hasPending) {
	    removeClass(this.el, this.enterClass);
	    removeClass(this.el, this.leaveClass);
	  }
	  if (this.cancel) {
	    this.cancel.call(this.vm, this.el);
	    this.cancel = null;
	  }
	};
	
	/**
	 * Call a user-provided synchronous hook function.
	 *
	 * @param {String} type
	 */
	
	p$1.callHook = function (type) {
	  if (this.hooks && this.hooks[type]) {
	    this.hooks[type].call(this.vm, this.el);
	  }
	};
	
	/**
	 * Call a user-provided, potentially-async hook function.
	 * We check for the length of arguments to see if the hook
	 * expects a `done` callback. If true, the transition's end
	 * will be determined by when the user calls that callback;
	 * otherwise, the end is determined by the CSS transition or
	 * animation.
	 *
	 * @param {String} type
	 */
	
	p$1.callHookWithCb = function (type) {
	  var hook = this.hooks && this.hooks[type];
	  if (hook) {
	    if (hook.length > 1) {
	      this.pendingJsCb = cancellable(this[type + 'Done']);
	    }
	    hook.call(this.vm, this.el, this.pendingJsCb);
	  }
	};
	
	/**
	 * Get an element's transition type based on the
	 * calculated styles.
	 *
	 * @param {String} className
	 * @return {Number}
	 */
	
	p$1.getCssTransitionType = function (className) {
	  /* istanbul ignore if */
	  if (!transitionEndEvent ||
	  // skip CSS transitions if page is not visible -
	  // this solves the issue of transitionend events not
	  // firing until the page is visible again.
	  // pageVisibility API is supported in IE10+, same as
	  // CSS transitions.
	  document.hidden ||
	  // explicit js-only transition
	  this.hooks && this.hooks.css === false ||
	  // element is hidden
	  isHidden(this.el)) {
	    return;
	  }
	  var type = this.type || this.typeCache[className];
	  if (type) return type;
	  var inlineStyles = this.el.style;
	  var computedStyles = window.getComputedStyle(this.el);
	  var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
	  if (transDuration && transDuration !== '0s') {
	    type = TYPE_TRANSITION;
	  } else {
	    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
	    if (animDuration && animDuration !== '0s') {
	      type = TYPE_ANIMATION;
	    }
	  }
	  if (type) {
	    this.typeCache[className] = type;
	  }
	  return type;
	};
	
	/**
	 * Setup a CSS transitionend/animationend callback.
	 *
	 * @param {String} event
	 * @param {Function} cb
	 */
	
	p$1.setupCssCb = function (event, cb) {
	  this.pendingCssEvent = event;
	  var self = this;
	  var el = this.el;
	  var onEnd = this.pendingCssCb = function (e) {
	    if (e.target === el) {
	      off(el, event, onEnd);
	      self.pendingCssEvent = self.pendingCssCb = null;
	      if (!self.pendingJsCb && cb) {
	        cb();
	      }
	    }
	  };
	  on(el, event, onEnd);
	};
	
	/**
	 * Check if an element is hidden - in that case we can just
	 * skip the transition alltogether.
	 *
	 * @param {Element} el
	 * @return {Boolean}
	 */
	
	function isHidden(el) {
	  if (/svg$/.test(el.namespaceURI)) {
	    // SVG elements do not have offset(Width|Height)
	    // so we need to check the client rect
	    var rect = el.getBoundingClientRect();
	    return !(rect.width || rect.height);
	  } else {
	    return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
	  }
	}
	
	var transition$1 = {
	
	  priority: TRANSITION,
	
	  update: function update(id, oldId) {
	    var el = this.el;
	    // resolve on owner vm
	    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
	    id = id || 'v';
	    oldId = oldId || 'v';
	    el.__v_trans = new Transition(el, id, hooks, this.vm);
	    removeClass(el, oldId + '-transition');
	    addClass(el, id + '-transition');
	  }
	};
	
	var internalDirectives = {
	  style: style,
	  'class': vClass,
	  component: component,
	  prop: propDef,
	  transition: transition$1
	};
	
	// special binding prefixes
	var bindRE = /^v-bind:|^:/;
	var onRE = /^v-on:|^@/;
	var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
	var modifierRE = /\.[^\.]+/g;
	var transitionRE = /^(v-bind:|:)?transition$/;
	
	// default directive priority
	var DEFAULT_PRIORITY = 1000;
	var DEFAULT_TERMINAL_PRIORITY = 2000;
	
	/**
	 * Compile a template and return a reusable composite link
	 * function, which recursively contains more link functions
	 * inside. This top level compile function would normally
	 * be called on instance root nodes, but can also be used
	 * for partial compilation if the partial argument is true.
	 *
	 * The returned composite link function, when called, will
	 * return an unlink function that tearsdown all directives
	 * created during the linking phase.
	 *
	 * @param {Element|DocumentFragment} el
	 * @param {Object} options
	 * @param {Boolean} partial
	 * @return {Function}
	 */
	
	function compile(el, options, partial) {
	  // link function for the node itself.
	  var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
	  // link function for the childNodes
	  var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && !isScript(el) && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;
	
	  /**
	   * A composite linker function to be called on a already
	   * compiled piece of DOM, which instantiates all directive
	   * instances.
	   *
	   * @param {Vue} vm
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host] - host vm of transcluded content
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - link context fragment
	   * @return {Function|undefined}
	   */
	
	  return function compositeLinkFn(vm, el, host, scope, frag) {
	    // cache childNodes before linking parent, fix #657
	    var childNodes = toArray(el.childNodes);
	    // link
	    var dirs = linkAndCapture(function compositeLinkCapturer() {
	      if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
	      if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
	    }, vm);
	    return makeUnlinkFn(vm, dirs);
	  };
	}
	
	/**
	 * Apply a linker to a vm/element pair and capture the
	 * directives created during the process.
	 *
	 * @param {Function} linker
	 * @param {Vue} vm
	 */
	
	function linkAndCapture(linker, vm) {
	  /* istanbul ignore if */
	  if (process.env.NODE_ENV === 'production') {
	    // reset directives before every capture in production
	    // mode, so that when unlinking we don't need to splice
	    // them out (which turns out to be a perf hit).
	    // they are kept in development mode because they are
	    // useful for Vue's own tests.
	    vm._directives = [];
	  }
	  var originalDirCount = vm._directives.length;
	  linker();
	  var dirs = vm._directives.slice(originalDirCount);
	  sortDirectives(dirs);
	  for (var i = 0, l = dirs.length; i < l; i++) {
	    dirs[i]._bind();
	  }
	  return dirs;
	}
	
	/**
	 * sort directives by priority (stable sort)
	 *
	 * @param {Array} dirs
	 */
	function sortDirectives(dirs) {
	  if (dirs.length === 0) return;
	
	  var groupedMap = {};
	  var i, j, k, l;
	  var index = 0;
	  var priorities = [];
	  for (i = 0, j = dirs.length; i < j; i++) {
	    var dir = dirs[i];
	    var priority = dir.descriptor.def.priority || DEFAULT_PRIORITY;
	    var array = groupedMap[priority];
	    if (!array) {
	      array = groupedMap[priority] = [];
	      priorities.push(priority);
	    }
	    array.push(dir);
	  }
	
	  priorities.sort(function (a, b) {
	    return a > b ? -1 : a === b ? 0 : 1;
	  });
	  for (i = 0, j = priorities.length; i < j; i++) {
	    var group = groupedMap[priorities[i]];
	    for (k = 0, l = group.length; k < l; k++) {
	      dirs[index++] = group[k];
	    }
	  }
	}
	
	/**
	 * Linker functions return an unlink function that
	 * tearsdown all directives instances generated during
	 * the process.
	 *
	 * We create unlink functions with only the necessary
	 * information to avoid retaining additional closures.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Vue} [context]
	 * @param {Array} [contextDirs]
	 * @return {Function}
	 */
	
	function makeUnlinkFn(vm, dirs, context, contextDirs) {
	  function unlink(destroying) {
	    teardownDirs(vm, dirs, destroying);
	    if (context && contextDirs) {
	      teardownDirs(context, contextDirs);
	    }
	  }
	  // expose linked directives
	  unlink.dirs = dirs;
	  return unlink;
	}
	
	/**
	 * Teardown partial linked directives.
	 *
	 * @param {Vue} vm
	 * @param {Array} dirs
	 * @param {Boolean} destroying
	 */
	
	function teardownDirs(vm, dirs, destroying) {
	  var i = dirs.length;
	  while (i--) {
	    dirs[i]._teardown();
	    if (process.env.NODE_ENV !== 'production' && !destroying) {
	      vm._directives.$remove(dirs[i]);
	    }
	  }
	}
	
	/**
	 * Compile link props on an instance.
	 *
	 * @param {Vue} vm
	 * @param {Element} el
	 * @param {Object} props
	 * @param {Object} [scope]
	 * @return {Function}
	 */
	
	function compileAndLinkProps(vm, el, props, scope) {
	  var propsLinkFn = compileProps(el, props, vm);
	  var propDirs = linkAndCapture(function () {
	    propsLinkFn(vm, scope);
	  }, vm);
	  return makeUnlinkFn(vm, propDirs);
	}
	
	/**
	 * Compile the root element of an instance.
	 *
	 * 1. attrs on context container (context scope)
	 * 2. attrs on the component template root node, if
	 *    replace:true (child scope)
	 *
	 * If this is a fragment instance, we only need to compile 1.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @param {Object} contextOptions
	 * @return {Function}
	 */
	
	function compileRoot(el, options, contextOptions) {
	  var containerAttrs = options._containerAttrs;
	  var replacerAttrs = options._replacerAttrs;
	  var contextLinkFn, replacerLinkFn;
	
	  // only need to compile other attributes for
	  // non-fragment instances
	  if (el.nodeType !== 11) {
	    // for components, container and replacer need to be
	    // compiled separately and linked in different scopes.
	    if (options._asComponent) {
	      // 2. container attributes
	      if (containerAttrs && contextOptions) {
	        contextLinkFn = compileDirectives(containerAttrs, contextOptions);
	      }
	      if (replacerAttrs) {
	        // 3. replacer attributes
	        replacerLinkFn = compileDirectives(replacerAttrs, options);
	      }
	    } else {
	      // non-component, just compile as a normal element.
	      replacerLinkFn = compileDirectives(el.attributes, options);
	    }
	  } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
	    // warn container directives for fragment instances
	    var names = containerAttrs.filter(function (attr) {
	      // allow vue-loader/vueify scoped css attributes
	      return attr.name.indexOf('_v-') < 0 &&
	      // allow event listeners
	      !onRE.test(attr.name) &&
	      // allow slots
	      attr.name !== 'slot';
	    }).map(function (attr) {
	      return '"' + attr.name + '"';
	    });
	    if (names.length) {
	      var plural = names.length > 1;
	
	      var componentName = options.el.tagName.toLowerCase();
	      if (componentName === 'component' && options.name) {
	        componentName += ':' + options.name;
	      }
	
	      warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + componentName + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment-Instance');
	    }
	  }
	
	  options._containerAttrs = options._replacerAttrs = null;
	  return function rootLinkFn(vm, el, scope) {
	    // link context scope dirs
	    var context = vm._context;
	    var contextDirs;
	    if (context && contextLinkFn) {
	      contextDirs = linkAndCapture(function () {
	        contextLinkFn(context, el, null, scope);
	      }, context);
	    }
	
	    // link self
	    var selfDirs = linkAndCapture(function () {
	      if (replacerLinkFn) replacerLinkFn(vm, el);
	    }, vm);
	
	    // return the unlink function that tearsdown context
	    // container directives.
	    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
	  };
	}
	
	/**
	 * Compile a node and return a nodeLinkFn based on the
	 * node type.
	 *
	 * @param {Node} node
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileNode(node, options) {
	  var type = node.nodeType;
	  if (type === 1 && !isScript(node)) {
	    return compileElement(node, options);
	  } else if (type === 3 && node.data.trim()) {
	    return compileTextNode(node, options);
	  } else {
	    return null;
	  }
	}
	
	/**
	 * Compile an element and return a nodeLinkFn.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|null}
	 */
	
	function compileElement(el, options) {
	  // preprocess textareas.
	  // textarea treats its text content as the initial value.
	  // just bind it as an attr directive for value.
	  if (el.tagName === 'TEXTAREA') {
	    // a textarea which has v-pre attr should skip complie.
	    if (getAttr(el, 'v-pre') !== null) {
	      return skip;
	    }
	    var tokens = parseText(el.value);
	    if (tokens) {
	      el.setAttribute(':value', tokensToExp(tokens));
	      el.value = '';
	    }
	  }
	  var linkFn;
	  var hasAttrs = el.hasAttributes();
	  var attrs = hasAttrs && toArray(el.attributes);
	  // check terminal directives (for & if)
	  if (hasAttrs) {
	    linkFn = checkTerminalDirectives(el, attrs, options);
	  }
	  // check element directives
	  if (!linkFn) {
	    linkFn = checkElementDirectives(el, options);
	  }
	  // check component
	  if (!linkFn) {
	    linkFn = checkComponent(el, options);
	  }
	  // normal directives
	  if (!linkFn && hasAttrs) {
	    linkFn = compileDirectives(attrs, options);
	  }
	  return linkFn;
	}
	
	/**
	 * Compile a textNode and return a nodeLinkFn.
	 *
	 * @param {TextNode} node
	 * @param {Object} options
	 * @return {Function|null} textNodeLinkFn
	 */
	
	function compileTextNode(node, options) {
	  // skip marked text nodes
	  if (node._skip) {
	    return removeText;
	  }
	
	  var tokens = parseText(node.wholeText);
	  if (!tokens) {
	    return null;
	  }
	
	  // mark adjacent text nodes as skipped,
	  // because we are using node.wholeText to compile
	  // all adjacent text nodes together. This fixes
	  // issues in IE where sometimes it splits up a single
	  // text node into multiple ones.
	  var next = node.nextSibling;
	  while (next && next.nodeType === 3) {
	    next._skip = true;
	    next = next.nextSibling;
	  }
	
	  var frag = document.createDocumentFragment();
	  var el, token;
	  for (var i = 0, l = tokens.length; i < l; i++) {
	    token = tokens[i];
	    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
	    frag.appendChild(el);
	  }
	  return makeTextNodeLinkFn(tokens, frag, options);
	}
	
	/**
	 * Linker for an skipped text node.
	 *
	 * @param {Vue} vm
	 * @param {Text} node
	 */
	
	function removeText(vm, node) {
	  remove(node);
	}
	
	/**
	 * Process a single text token.
	 *
	 * @param {Object} token
	 * @param {Object} options
	 * @return {Node}
	 */
	
	function processTextToken(token, options) {
	  var el;
	  if (token.oneTime) {
	    el = document.createTextNode(token.value);
	  } else {
	    if (token.html) {
	      el = document.createComment('v-html');
	      setTokenType('html');
	    } else {
	      // IE will clean up empty textNodes during
	      // frag.cloneNode(true), so we have to give it
	      // something here...
	      el = document.createTextNode(' ');
	      setTokenType('text');
	    }
	  }
	  function setTokenType(type) {
	    if (token.descriptor) return;
	    var parsed = parseDirective(token.value);
	    token.descriptor = {
	      name: type,
	      def: directives[type],
	      expression: parsed.expression,
	      filters: parsed.filters
	    };
	  }
	  return el;
	}
	
	/**
	 * Build a function that processes a textNode.
	 *
	 * @param {Array<Object>} tokens
	 * @param {DocumentFragment} frag
	 */
	
	function makeTextNodeLinkFn(tokens, frag) {
	  return function textNodeLinkFn(vm, el, host, scope) {
	    var fragClone = frag.cloneNode(true);
	    var childNodes = toArray(fragClone.childNodes);
	    var token, value, node;
	    for (var i = 0, l = tokens.length; i < l; i++) {
	      token = tokens[i];
	      value = token.value;
	      if (token.tag) {
	        node = childNodes[i];
	        if (token.oneTime) {
	          value = (scope || vm).$eval(value);
	          if (token.html) {
	            replace(node, parseTemplate(value, true));
	          } else {
	            node.data = _toString(value);
	          }
	        } else {
	          vm._bindDir(token.descriptor, node, host, scope);
	        }
	      }
	    }
	    replace(el, fragClone);
	  };
	}
	
	/**
	 * Compile a node list and return a childLinkFn.
	 *
	 * @param {NodeList} nodeList
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function compileNodeList(nodeList, options) {
	  var linkFns = [];
	  var nodeLinkFn, childLinkFn, node;
	  for (var i = 0, l = nodeList.length; i < l; i++) {
	    node = nodeList[i];
	    nodeLinkFn = compileNode(node, options);
	    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
	    linkFns.push(nodeLinkFn, childLinkFn);
	  }
	  return linkFns.length ? makeChildLinkFn(linkFns) : null;
	}
	
	/**
	 * Make a child link function for a node's childNodes.
	 *
	 * @param {Array<Function>} linkFns
	 * @return {Function} childLinkFn
	 */
	
	function makeChildLinkFn(linkFns) {
	  return function childLinkFn(vm, nodes, host, scope, frag) {
	    var node, nodeLinkFn, childrenLinkFn;
	    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
	      node = nodes[n];
	      nodeLinkFn = linkFns[i++];
	      childrenLinkFn = linkFns[i++];
	      // cache childNodes before linking parent, fix #657
	      var childNodes = toArray(node.childNodes);
	      if (nodeLinkFn) {
	        nodeLinkFn(vm, node, host, scope, frag);
	      }
	      if (childrenLinkFn) {
	        childrenLinkFn(vm, childNodes, host, scope, frag);
	      }
	    }
	  };
	}
	
	/**
	 * Check for element directives (custom elements that should
	 * be resovled as terminal directives).
	 *
	 * @param {Element} el
	 * @param {Object} options
	 */
	
	function checkElementDirectives(el, options) {
	  var tag = el.tagName.toLowerCase();
	  if (commonTagRE.test(tag)) {
	    return;
	  }
	  var def = resolveAsset(options, 'elementDirectives', tag);
	  if (def) {
	    return makeTerminalNodeLinkFn(el, tag, '', options, def);
	  }
	}
	
	/**
	 * Check if an element is a component. If yes, return
	 * a component link function.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Function|undefined}
	 */
	
	function checkComponent(el, options) {
	  var component = checkComponentAttr(el, options);
	  if (component) {
	    var ref = findRef(el);
	    var descriptor = {
	      name: 'component',
	      ref: ref,
	      expression: component.id,
	      def: internalDirectives.component,
	      modifiers: {
	        literal: !component.dynamic
	      }
	    };
	    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
	      if (ref) {
	        defineReactive((scope || vm).$refs, ref, null);
	      }
	      vm._bindDir(descriptor, el, host, scope, frag);
	    };
	    componentLinkFn.terminal = true;
	    return componentLinkFn;
	  }
	}
	
	/**
	 * Check an element for terminal directives in fixed order.
	 * If it finds one, return a terminal link function.
	 *
	 * @param {Element} el
	 * @param {Array} attrs
	 * @param {Object} options
	 * @return {Function} terminalLinkFn
	 */
	
	function checkTerminalDirectives(el, attrs, options) {
	  // skip v-pre
	  if (getAttr(el, 'v-pre') !== null) {
	    return skip;
	  }
	  // skip v-else block, but only if following v-if
	  if (el.hasAttribute('v-else')) {
	    var prev = el.previousElementSibling;
	    if (prev && prev.hasAttribute('v-if')) {
	      return skip;
	    }
	  }
	
	  var attr, name, value, modifiers, matched, dirName, rawName, arg, def, termDef;
	  for (var i = 0, j = attrs.length; i < j; i++) {
	    attr = attrs[i];
	    name = attr.name.replace(modifierRE, '');
	    if (matched = name.match(dirAttrRE)) {
	      def = resolveAsset(options, 'directives', matched[1]);
	      if (def && def.terminal) {
	        if (!termDef || (def.priority || DEFAULT_TERMINAL_PRIORITY) > termDef.priority) {
	          termDef = def;
	          rawName = attr.name;
	          modifiers = parseModifiers(attr.name);
	          value = attr.value;
	          dirName = matched[1];
	          arg = matched[2];
	        }
	      }
	    }
	  }
	
	  if (termDef) {
	    return makeTerminalNodeLinkFn(el, dirName, value, options, termDef, rawName, arg, modifiers);
	  }
	}
	
	function skip() {}
	skip.terminal = true;
	
	/**
	 * Build a node link function for a terminal directive.
	 * A terminal link function terminates the current
	 * compilation recursion and handles compilation of the
	 * subtree in the directive.
	 *
	 * @param {Element} el
	 * @param {String} dirName
	 * @param {String} value
	 * @param {Object} options
	 * @param {Object} def
	 * @param {String} [rawName]
	 * @param {String} [arg]
	 * @param {Object} [modifiers]
	 * @return {Function} terminalLinkFn
	 */
	
	function makeTerminalNodeLinkFn(el, dirName, value, options, def, rawName, arg, modifiers) {
	  var parsed = parseDirective(value);
	  var descriptor = {
	    name: dirName,
	    arg: arg,
	    expression: parsed.expression,
	    filters: parsed.filters,
	    raw: value,
	    attr: rawName,
	    modifiers: modifiers,
	    def: def
	  };
	  // check ref for v-for, v-if and router-view
	  if (dirName === 'for' || dirName === 'router-view') {
	    descriptor.ref = findRef(el);
	  }
	  var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
	    if (descriptor.ref) {
	      defineReactive((scope || vm).$refs, descriptor.ref, null);
	    }
	    vm._bindDir(descriptor, el, host, scope, frag);
	  };
	  fn.terminal = true;
	  return fn;
	}
	
	/**
	 * Compile the directives on an element and return a linker.
	 *
	 * @param {Array|NamedNodeMap} attrs
	 * @param {Object} options
	 * @return {Function}
	 */
	
	function compileDirectives(attrs, options) {
	  var i = attrs.length;
	  var dirs = [];
	  var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
	  while (i--) {
	    attr = attrs[i];
	    name = rawName = attr.name;
	    value = rawValue = attr.value;
	    tokens = parseText(value);
	    // reset arg
	    arg = null;
	    // check modifiers
	    modifiers = parseModifiers(name);
	    name = name.replace(modifierRE, '');
	
	    // attribute interpolations
	    if (tokens) {
	      value = tokensToExp(tokens);
	      arg = name;
	      pushDir('bind', directives.bind, tokens);
	      // warn against mixing mustaches with v-bind
	      if (process.env.NODE_ENV !== 'production') {
	        if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
	          return attr.name === ':class' || attr.name === 'v-bind:class';
	        })) {
	          warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.', options);
	        }
	      }
	    } else
	
	      // special attribute: transition
	      if (transitionRE.test(name)) {
	        modifiers.literal = !bindRE.test(name);
	        pushDir('transition', internalDirectives.transition);
	      } else
	
	        // event handlers
	        if (onRE.test(name)) {
	          arg = name.replace(onRE, '');
	          pushDir('on', directives.on);
	        } else
	
	          // attribute bindings
	          if (bindRE.test(name)) {
	            dirName = name.replace(bindRE, '');
	            if (dirName === 'style' || dirName === 'class') {
	              pushDir(dirName, internalDirectives[dirName]);
	            } else {
	              arg = dirName;
	              pushDir('bind', directives.bind);
	            }
	          } else
	
	            // normal directives
	            if (matched = name.match(dirAttrRE)) {
	              dirName = matched[1];
	              arg = matched[2];
	
	              // skip v-else (when used with v-show)
	              if (dirName === 'else') {
	                continue;
	              }
	
	              dirDef = resolveAsset(options, 'directives', dirName, true);
	              if (dirDef) {
	                pushDir(dirName, dirDef);
	              }
	            }
	  }
	
	  /**
	   * Push a directive.
	   *
	   * @param {String} dirName
	   * @param {Object|Function} def
	   * @param {Array} [interpTokens]
	   */
	
	  function pushDir(dirName, def, interpTokens) {
	    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
	    var parsed = !hasOneTimeToken && parseDirective(value);
	    dirs.push({
	      name: dirName,
	      attr: rawName,
	      raw: rawValue,
	      def: def,
	      arg: arg,
	      modifiers: modifiers,
	      // conversion from interpolation strings with one-time token
	      // to expression is differed until directive bind time so that we
	      // have access to the actual vm context for one-time bindings.
	      expression: parsed && parsed.expression,
	      filters: parsed && parsed.filters,
	      interp: interpTokens,
	      hasOneTime: hasOneTimeToken
	    });
	  }
	
	  if (dirs.length) {
	    return makeNodeLinkFn(dirs);
	  }
	}
	
	/**
	 * Parse modifiers from directive attribute name.
	 *
	 * @param {String} name
	 * @return {Object}
	 */
	
	function parseModifiers(name) {
	  var res = Object.create(null);
	  var match = name.match(modifierRE);
	  if (match) {
	    var i = match.length;
	    while (i--) {
	      res[match[i].slice(1)] = true;
	    }
	  }
	  return res;
	}
	
	/**
	 * Build a link function for all directives on a single node.
	 *
	 * @param {Array} directives
	 * @return {Function} directivesLinkFn
	 */
	
	function makeNodeLinkFn(directives) {
	  return function nodeLinkFn(vm, el, host, scope, frag) {
	    // reverse apply because it's sorted low to high
	    var i = directives.length;
	    while (i--) {
	      vm._bindDir(directives[i], el, host, scope, frag);
	    }
	  };
	}
	
	/**
	 * Check if an interpolation string contains one-time tokens.
	 *
	 * @param {Array} tokens
	 * @return {Boolean}
	 */
	
	function hasOneTime(tokens) {
	  var i = tokens.length;
	  while (i--) {
	    if (tokens[i].oneTime) return true;
	  }
	}
	
	function isScript(el) {
	  return el.tagName === 'SCRIPT' && (!el.hasAttribute('type') || el.getAttribute('type') === 'text/javascript');
	}
	
	var specialCharRE = /[^\w\-:\.]/;
	
	/**
	 * Process an element or a DocumentFragment based on a
	 * instance option object. This allows us to transclude
	 * a template node/fragment before the instance is created,
	 * so the processed fragment can then be cloned and reused
	 * in v-for.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transclude(el, options) {
	  // extract container attributes to pass them down
	  // to compiler, because they need to be compiled in
	  // parent scope. we are mutating the options object here
	  // assuming the same object will be used for compile
	  // right after this.
	  if (options) {
	    options._containerAttrs = extractAttrs(el);
	  }
	  // for template tags, what we want is its content as
	  // a documentFragment (for fragment instances)
	  if (isTemplate(el)) {
	    el = parseTemplate(el);
	  }
	  if (options) {
	    if (options._asComponent && !options.template) {
	      options.template = '<slot></slot>';
	    }
	    if (options.template) {
	      options._content = extractContent(el);
	      el = transcludeTemplate(el, options);
	    }
	  }
	  if (isFragment(el)) {
	    // anchors for fragment instance
	    // passing in `persist: true` to avoid them being
	    // discarded by IE during template cloning
	    prepend(createAnchor('v-start', true), el);
	    el.appendChild(createAnchor('v-end', true));
	  }
	  return el;
	}
	
	/**
	 * Process the template option.
	 * If the replace option is true this will swap the $el.
	 *
	 * @param {Element} el
	 * @param {Object} options
	 * @return {Element|DocumentFragment}
	 */
	
	function transcludeTemplate(el, options) {
	  var template = options.template;
	  var frag = parseTemplate(template, true);
	  if (frag) {
	    var replacer = frag.firstChild;
	    if (!replacer) {
	      return frag;
	    }
	    var tag = replacer.tagName && replacer.tagName.toLowerCase();
	    if (options.replace) {
	      /* istanbul ignore if */
	      if (el === document.body) {
	        process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
	      }
	      // there are many cases where the instance must
	      // become a fragment instance: basically anything that
	      // can create more than 1 root nodes.
	      if (
	      // multi-children template
	      frag.childNodes.length > 1 ||
	      // non-element template
	      replacer.nodeType !== 1 ||
	      // single nested component
	      tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
	      // element directive
	      resolveAsset(options, 'elementDirectives', tag) ||
	      // for block
	      replacer.hasAttribute('v-for') ||
	      // if block
	      replacer.hasAttribute('v-if')) {
	        return frag;
	      } else {
	        options._replacerAttrs = extractAttrs(replacer);
	        mergeAttrs(el, replacer);
	        return replacer;
	      }
	    } else {
	      el.appendChild(frag);
	      return el;
	    }
	  } else {
	    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
	  }
	}
	
	/**
	 * Helper to extract a component container's attributes
	 * into a plain object array.
	 *
	 * @param {Element} el
	 * @return {Array}
	 */
	
	function extractAttrs(el) {
	  if (el.nodeType === 1 && el.hasAttributes()) {
	    return toArray(el.attributes);
	  }
	}
	
	/**
	 * Merge the attributes of two elements, and make sure
	 * the class names are merged properly.
	 *
	 * @param {Element} from
	 * @param {Element} to
	 */
	
	function mergeAttrs(from, to) {
	  var attrs = from.attributes;
	  var i = attrs.length;
	  var name, value;
	  while (i--) {
	    name = attrs[i].name;
	    value = attrs[i].value;
	    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
	      to.setAttribute(name, value);
	    } else if (name === 'class' && !parseText(value) && (value = value.trim())) {
	      value.split(/\s+/).forEach(function (cls) {
	        addClass(to, cls);
	      });
	    }
	  }
	}
	
	/**
	 * Scan and determine slot content distribution.
	 * We do this during transclusion instead at compile time so that
	 * the distribution is decoupled from the compilation order of
	 * the slots.
	 *
	 * @param {Element|DocumentFragment} template
	 * @param {Element} content
	 * @param {Vue} vm
	 */
	
	function resolveSlots(vm, content) {
	  if (!content) {
	    return;
	  }
	  var contents = vm._slotContents = Object.create(null);
	  var el, name;
	  for (var i = 0, l = content.children.length; i < l; i++) {
	    el = content.children[i];
	    /* eslint-disable no-cond-assign */
	    if (name = el.getAttribute('slot')) {
	      (contents[name] || (contents[name] = [])).push(el);
	    }
	    /* eslint-enable no-cond-assign */
	    if (process.env.NODE_ENV !== 'production' && getBindAttr(el, 'slot')) {
	      warn('The "slot" attribute must be static.', vm.$parent);
	    }
	  }
	  for (name in contents) {
	    contents[name] = extractFragment(contents[name], content);
	  }
	  if (content.hasChildNodes()) {
	    var nodes = content.childNodes;
	    if (nodes.length === 1 && nodes[0].nodeType === 3 && !nodes[0].data.trim()) {
	      return;
	    }
	    contents['default'] = extractFragment(content.childNodes, content);
	  }
	}
	
	/**
	 * Extract qualified content nodes from a node list.
	 *
	 * @param {NodeList} nodes
	 * @return {DocumentFragment}
	 */
	
	function extractFragment(nodes, parent) {
	  var frag = document.createDocumentFragment();
	  nodes = toArray(nodes);
	  for (var i = 0, l = nodes.length; i < l; i++) {
	    var node = nodes[i];
	    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
	      parent.removeChild(node);
	      node = parseTemplate(node, true);
	    }
	    frag.appendChild(node);
	  }
	  return frag;
	}
	
	
	
	var compiler = Object.freeze({
		compile: compile,
		compileAndLinkProps: compileAndLinkProps,
		compileRoot: compileRoot,
		transclude: transclude,
		resolveSlots: resolveSlots
	});
	
	function stateMixin (Vue) {
	  /**
	   * Accessor for `$data` property, since setting $data
	   * requires observing the new object and updating
	   * proxied properties.
	   */
	
	  Object.defineProperty(Vue.prototype, '$data', {
	    get: function get() {
	      return this._data;
	    },
	    set: function set(newData) {
	      if (newData !== this._data) {
	        this._setData(newData);
	      }
	    }
	  });
	
	  /**
	   * Setup the scope of an instance, which contains:
	   * - observed data
	   * - computed properties
	   * - user methods
	   * - meta properties
	   */
	
	  Vue.prototype._initState = function () {
	    this._initProps();
	    this._initMeta();
	    this._initMethods();
	    this._initData();
	    this._initComputed();
	  };
	
	  /**
	   * Initialize props.
	   */
	
	  Vue.prototype._initProps = function () {
	    var options = this.$options;
	    var el = options.el;
	    var props = options.props;
	    if (props && !el) {
	      process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.', this);
	    }
	    // make sure to convert string selectors into element now
	    el = options.el = query(el);
	    this._propsUnlinkFn = el && el.nodeType === 1 && props
	    // props must be linked in proper scope if inside v-for
	    ? compileAndLinkProps(this, el, props, this._scope) : null;
	  };
	
	  /**
	   * Initialize the data.
	   */
	
	  Vue.prototype._initData = function () {
	    var dataFn = this.$options.data;
	    var data = this._data = dataFn ? dataFn() : {};
	    if (!isPlainObject(data)) {
	      data = {};
	      process.env.NODE_ENV !== 'production' && warn('data functions should return an object.', this);
	    }
	    var props = this._props;
	    // proxy data on instance
	    var keys = Object.keys(data);
	    var i, key;
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      // there are two scenarios where we can proxy a data key:
	      // 1. it's not already defined as a prop
	      // 2. it's provided via a instantiation option AND there are no
	      //    template prop present
	      if (!props || !hasOwn(props, key)) {
	        this._proxy(key);
	      } else if (process.env.NODE_ENV !== 'production') {
	        warn('Data field "' + key + '" is already defined ' + 'as a prop. To provide default value for a prop, use the "default" ' + 'prop option; if you want to pass prop values to an instantiation ' + 'call, use the "propsData" option.', this);
	      }
	    }
	    // observe data
	    observe(data, this);
	  };
	
	  /**
	   * Swap the instance's $data. Called in $data's setter.
	   *
	   * @param {Object} newData
	   */
	
	  Vue.prototype._setData = function (newData) {
	    newData = newData || {};
	    var oldData = this._data;
	    this._data = newData;
	    var keys, key, i;
	    // unproxy keys not present in new data
	    keys = Object.keys(oldData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!(key in newData)) {
	        this._unproxy(key);
	      }
	    }
	    // proxy keys not already proxied,
	    // and trigger change for changed values
	    keys = Object.keys(newData);
	    i = keys.length;
	    while (i--) {
	      key = keys[i];
	      if (!hasOwn(this, key)) {
	        // new property
	        this._proxy(key);
	      }
	    }
	    oldData.__ob__.removeVm(this);
	    observe(newData, this);
	    this._digest();
	  };
	
	  /**
	   * Proxy a property, so that
	   * vm.prop === vm._data.prop
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._proxy = function (key) {
	    if (!isReserved(key)) {
	      // need to store ref to self here
	      // because these getter/setters might
	      // be called by child scopes via
	      // prototype inheritance.
	      var self = this;
	      Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	          return self._data[key];
	        },
	        set: function proxySetter(val) {
	          self._data[key] = val;
	        }
	      });
	    }
	  };
	
	  /**
	   * Unproxy a property.
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype._unproxy = function (key) {
	    if (!isReserved(key)) {
	      delete this[key];
	    }
	  };
	
	  /**
	   * Force update on every watcher in scope.
	   */
	
	  Vue.prototype._digest = function () {
	    for (var i = 0, l = this._watchers.length; i < l; i++) {
	      this._watchers[i].update(true); // shallow updates
	    }
	  };
	
	  /**
	   * Setup computed properties. They are essentially
	   * special getter/setters
	   */
	
	  function noop() {}
	  Vue.prototype._initComputed = function () {
	    var computed = this.$options.computed;
	    if (computed) {
	      for (var key in computed) {
	        var userDef = computed[key];
	        var def = {
	          enumerable: true,
	          configurable: true
	        };
	        if (typeof userDef === 'function') {
	          def.get = makeComputedGetter(userDef, this);
	          def.set = noop;
	        } else {
	          def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind(userDef.get, this) : noop;
	          def.set = userDef.set ? bind(userDef.set, this) : noop;
	        }
	        Object.defineProperty(this, key, def);
	      }
	    }
	  };
	
	  function makeComputedGetter(getter, owner) {
	    var watcher = new Watcher(owner, getter, null, {
	      lazy: true
	    });
	    return function computedGetter() {
	      if (watcher.dirty) {
	        watcher.evaluate();
	      }
	      if (Dep.target) {
	        watcher.depend();
	      }
	      return watcher.value;
	    };
	  }
	
	  /**
	   * Setup instance methods. Methods must be bound to the
	   * instance since they might be passed down as a prop to
	   * child components.
	   */
	
	  Vue.prototype._initMethods = function () {
	    var methods = this.$options.methods;
	    if (methods) {
	      for (var key in methods) {
	        this[key] = bind(methods[key], this);
	      }
	    }
	  };
	
	  /**
	   * Initialize meta information like $index, $key & $value.
	   */
	
	  Vue.prototype._initMeta = function () {
	    var metas = this.$options._meta;
	    if (metas) {
	      for (var key in metas) {
	        defineReactive(this, key, metas[key]);
	      }
	    }
	  };
	}
	
	var eventRE = /^v-on:|^@/;
	
	function eventsMixin (Vue) {
	  /**
	   * Setup the instance's option events & watchers.
	   * If the value is a string, we pull it from the
	   * instance's methods by name.
	   */
	
	  Vue.prototype._initEvents = function () {
	    var options = this.$options;
	    if (options._asComponent) {
	      registerComponentEvents(this, options.el);
	    }
	    registerCallbacks(this, '$on', options.events);
	    registerCallbacks(this, '$watch', options.watch);
	  };
	
	  /**
	   * Register v-on events on a child component
	   *
	   * @param {Vue} vm
	   * @param {Element} el
	   */
	
	  function registerComponentEvents(vm, el) {
	    var attrs = el.attributes;
	    var name, value, handler;
	    for (var i = 0, l = attrs.length; i < l; i++) {
	      name = attrs[i].name;
	      if (eventRE.test(name)) {
	        name = name.replace(eventRE, '');
	        // force the expression into a statement so that
	        // it always dynamically resolves the method to call (#2670)
	        // kinda ugly hack, but does the job.
	        value = attrs[i].value;
	        if (isSimplePath(value)) {
	          value += '.apply(this, $arguments)';
	        }
	        handler = (vm._scope || vm._context).$eval(value, true);
	        handler._fromParent = true;
	        vm.$on(name.replace(eventRE), handler);
	      }
	    }
	  }
	
	  /**
	   * Register callbacks for option events and watchers.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {Object} hash
	   */
	
	  function registerCallbacks(vm, action, hash) {
	    if (!hash) return;
	    var handlers, key, i, j;
	    for (key in hash) {
	      handlers = hash[key];
	      if (isArray(handlers)) {
	        for (i = 0, j = handlers.length; i < j; i++) {
	          register(vm, action, key, handlers[i]);
	        }
	      } else {
	        register(vm, action, key, handlers);
	      }
	    }
	  }
	
	  /**
	   * Helper to register an event/watch callback.
	   *
	   * @param {Vue} vm
	   * @param {String} action
	   * @param {String} key
	   * @param {Function|String|Object} handler
	   * @param {Object} [options]
	   */
	
	  function register(vm, action, key, handler, options) {
	    var type = typeof handler;
	    if (type === 'function') {
	      vm[action](key, handler, options);
	    } else if (type === 'string') {
	      var methods = vm.$options.methods;
	      var method = methods && methods[handler];
	      if (method) {
	        vm[action](key, method, options);
	      } else {
	        process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".', vm);
	      }
	    } else if (handler && type === 'object') {
	      register(vm, action, key, handler.handler, handler);
	    }
	  }
	
	  /**
	   * Setup recursive attached/detached calls
	   */
	
	  Vue.prototype._initDOMHooks = function () {
	    this.$on('hook:attached', onAttached);
	    this.$on('hook:detached', onDetached);
	  };
	
	  /**
	   * Callback to recursively call attached hook on children
	   */
	
	  function onAttached() {
	    if (!this._isAttached) {
	      this._isAttached = true;
	      this.$children.forEach(callAttach);
	    }
	  }
	
	  /**
	   * Iterator to call attached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callAttach(child) {
	    if (!child._isAttached && inDoc(child.$el)) {
	      child._callHook('attached');
	    }
	  }
	
	  /**
	   * Callback to recursively call detached hook on children
	   */
	
	  function onDetached() {
	    if (this._isAttached) {
	      this._isAttached = false;
	      this.$children.forEach(callDetach);
	    }
	  }
	
	  /**
	   * Iterator to call detached hook
	   *
	   * @param {Vue} child
	   */
	
	  function callDetach(child) {
	    if (child._isAttached && !inDoc(child.$el)) {
	      child._callHook('detached');
	    }
	  }
	
	  /**
	   * Trigger all handlers for a hook
	   *
	   * @param {String} hook
	   */
	
	  Vue.prototype._callHook = function (hook) {
	    this.$emit('pre-hook:' + hook);
	    var handlers = this.$options[hook];
	    if (handlers) {
	      for (var i = 0, j = handlers.length; i < j; i++) {
	        handlers[i].call(this);
	      }
	    }
	    this.$emit('hook:' + hook);
	  };
	}
	
	function noop$1() {}
	
	/**
	 * A directive links a DOM element with a piece of data,
	 * which is the result of evaluating an expression.
	 * It registers a watcher with the expression and calls
	 * the DOM update function when a change is triggered.
	 *
	 * @param {Object} descriptor
	 *                 - {String} name
	 *                 - {Object} def
	 *                 - {String} expression
	 *                 - {Array<Object>} [filters]
	 *                 - {Object} [modifiers]
	 *                 - {Boolean} literal
	 *                 - {String} attr
	 *                 - {String} arg
	 *                 - {String} raw
	 *                 - {String} [ref]
	 *                 - {Array<Object>} [interp]
	 *                 - {Boolean} [hasOneTime]
	 * @param {Vue} vm
	 * @param {Node} el
	 * @param {Vue} [host] - transclusion host component
	 * @param {Object} [scope] - v-for scope
	 * @param {Fragment} [frag] - owner fragment
	 * @constructor
	 */
	function Directive(descriptor, vm, el, host, scope, frag) {
	  this.vm = vm;
	  this.el = el;
	  // copy descriptor properties
	  this.descriptor = descriptor;
	  this.name = descriptor.name;
	  this.expression = descriptor.expression;
	  this.arg = descriptor.arg;
	  this.modifiers = descriptor.modifiers;
	  this.filters = descriptor.filters;
	  this.literal = this.modifiers && this.modifiers.literal;
	  // private
	  this._locked = false;
	  this._bound = false;
	  this._listeners = null;
	  // link context
	  this._host = host;
	  this._scope = scope;
	  this._frag = frag;
	  // store directives on node in dev mode
	  if (process.env.NODE_ENV !== 'production' && this.el) {
	    this.el._vue_directives = this.el._vue_directives || [];
	    this.el._vue_directives.push(this);
	  }
	}
	
	/**
	 * Initialize the directive, mixin definition properties,
	 * setup the watcher, call definition bind() and update()
	 * if present.
	 */
	
	Directive.prototype._bind = function () {
	  var name = this.name;
	  var descriptor = this.descriptor;
	
	  // remove attribute
	  if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
	    var attr = descriptor.attr || 'v-' + name;
	    this.el.removeAttribute(attr);
	  }
	
	  // copy def properties
	  var def = descriptor.def;
	  if (typeof def === 'function') {
	    this.update = def;
	  } else {
	    extend(this, def);
	  }
	
	  // setup directive params
	  this._setupParams();
	
	  // initial bind
	  if (this.bind) {
	    this.bind();
	  }
	  this._bound = true;
	
	  if (this.literal) {
	    this.update && this.update(descriptor.raw);
	  } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
	    // wrapped updater for context
	    var dir = this;
	    if (this.update) {
	      this._update = function (val, oldVal) {
	        if (!dir._locked) {
	          dir.update(val, oldVal);
	        }
	      };
	    } else {
	      this._update = noop$1;
	    }
	    var preProcess = this._preProcess ? bind(this._preProcess, this) : null;
	    var postProcess = this._postProcess ? bind(this._postProcess, this) : null;
	    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
	    {
	      filters: this.filters,
	      twoWay: this.twoWay,
	      deep: this.deep,
	      preProcess: preProcess,
	      postProcess: postProcess,
	      scope: this._scope
	    });
	    // v-model with inital inline value need to sync back to
	    // model instead of update to DOM on init. They would
	    // set the afterBind hook to indicate that.
	    if (this.afterBind) {
	      this.afterBind();
	    } else if (this.update) {
	      this.update(watcher.value);
	    }
	  }
	};
	
	/**
	 * Setup all param attributes, e.g. track-by,
	 * transition-mode, etc...
	 */
	
	Directive.prototype._setupParams = function () {
	  if (!this.params) {
	    return;
	  }
	  var params = this.params;
	  // swap the params array with a fresh object.
	  this.params = Object.create(null);
	  var i = params.length;
	  var key, val, mappedKey;
	  while (i--) {
	    key = hyphenate(params[i]);
	    mappedKey = camelize(key);
	    val = getBindAttr(this.el, key);
	    if (val != null) {
	      // dynamic
	      this._setupParamWatcher(mappedKey, val);
	    } else {
	      // static
	      val = getAttr(this.el, key);
	      if (val != null) {
	        this.params[mappedKey] = val === '' ? true : val;
	      }
	    }
	  }
	};
	
	/**
	 * Setup a watcher for a dynamic param.
	 *
	 * @param {String} key
	 * @param {String} expression
	 */
	
	Directive.prototype._setupParamWatcher = function (key, expression) {
	  var self = this;
	  var called = false;
	  var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
	    self.params[key] = val;
	    // since we are in immediate mode,
	    // only call the param change callbacks if this is not the first update.
	    if (called) {
	      var cb = self.paramWatchers && self.paramWatchers[key];
	      if (cb) {
	        cb.call(self, val, oldVal);
	      }
	    } else {
	      called = true;
	    }
	  }, {
	    immediate: true,
	    user: false
	  });(this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
	};
	
	/**
	 * Check if the directive is a function caller
	 * and if the expression is a callable one. If both true,
	 * we wrap up the expression and use it as the event
	 * handler.
	 *
	 * e.g. on-click="a++"
	 *
	 * @return {Boolean}
	 */
	
	Directive.prototype._checkStatement = function () {
	  var expression = this.expression;
	  if (expression && this.acceptStatement && !isSimplePath(expression)) {
	    var fn = parseExpression$1(expression).get;
	    var scope = this._scope || this.vm;
	    var handler = function handler(e) {
	      scope.$event = e;
	      fn.call(scope, scope);
	      scope.$event = null;
	    };
	    if (this.filters) {
	      handler = scope._applyFilters(handler, null, this.filters);
	    }
	    this.update(handler);
	    return true;
	  }
	};
	
	/**
	 * Set the corresponding value with the setter.
	 * This should only be used in two-way directives
	 * e.g. v-model.
	 *
	 * @param {*} value
	 * @public
	 */
	
	Directive.prototype.set = function (value) {
	  /* istanbul ignore else */
	  if (this.twoWay) {
	    this._withLock(function () {
	      this._watcher.set(value);
	    });
	  } else if (process.env.NODE_ENV !== 'production') {
	    warn('Directive.set() can only be used inside twoWay' + 'directives.');
	  }
	};
	
	/**
	 * Execute a function while preventing that function from
	 * triggering updates on this directive instance.
	 *
	 * @param {Function} fn
	 */
	
	Directive.prototype._withLock = function (fn) {
	  var self = this;
	  self._locked = true;
	  fn.call(self);
	  nextTick(function () {
	    self._locked = false;
	  });
	};
	
	/**
	 * Convenience method that attaches a DOM event listener
	 * to the directive element and autometically tears it down
	 * during unbind.
	 *
	 * @param {String} event
	 * @param {Function} handler
	 * @param {Boolean} [useCapture]
	 */
	
	Directive.prototype.on = function (event, handler, useCapture) {
	  on(this.el, event, handler, useCapture);(this._listeners || (this._listeners = [])).push([event, handler]);
	};
	
	/**
	 * Teardown the watcher and call unbind.
	 */
	
	Directive.prototype._teardown = function () {
	  if (this._bound) {
	    this._bound = false;
	    if (this.unbind) {
	      this.unbind();
	    }
	    if (this._watcher) {
	      this._watcher.teardown();
	    }
	    var listeners = this._listeners;
	    var i;
	    if (listeners) {
	      i = listeners.length;
	      while (i--) {
	        off(this.el, listeners[i][0], listeners[i][1]);
	      }
	    }
	    var unwatchFns = this._paramUnwatchFns;
	    if (unwatchFns) {
	      i = unwatchFns.length;
	      while (i--) {
	        unwatchFns[i]();
	      }
	    }
	    if (process.env.NODE_ENV !== 'production' && this.el) {
	      this.el._vue_directives.$remove(this);
	    }
	    this.vm = this.el = this._watcher = this._listeners = null;
	  }
	};
	
	function lifecycleMixin (Vue) {
	  /**
	   * Update v-ref for component.
	   *
	   * @param {Boolean} remove
	   */
	
	  Vue.prototype._updateRef = function (remove) {
	    var ref = this.$options._ref;
	    if (ref) {
	      var refs = (this._scope || this._context).$refs;
	      if (remove) {
	        if (refs[ref] === this) {
	          refs[ref] = null;
	        }
	      } else {
	        refs[ref] = this;
	      }
	    }
	  };
	
	  /**
	   * Transclude, compile and link element.
	   *
	   * If a pre-compiled linker is available, that means the
	   * passed in element will be pre-transcluded and compiled
	   * as well - all we need to do is to call the linker.
	   *
	   * Otherwise we need to call transclude/compile/link here.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._compile = function (el) {
	    var options = this.$options;
	
	    // transclude and init element
	    // transclude can potentially replace original
	    // so we need to keep reference; this step also injects
	    // the template and caches the original attributes
	    // on the container node and replacer node.
	    var original = el;
	    el = transclude(el, options);
	    this._initElement(el);
	
	    // handle v-pre on root node (#2026)
	    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
	      return;
	    }
	
	    // root is always compiled per-instance, because
	    // container attrs and props can be different every time.
	    var contextOptions = this._context && this._context.$options;
	    var rootLinker = compileRoot(el, options, contextOptions);
	
	    // resolve slot distribution
	    resolveSlots(this, options._content);
	
	    // compile and link the rest
	    var contentLinkFn;
	    var ctor = this.constructor;
	    // component compilation can be cached
	    // as long as it's not using inline-template
	    if (options._linkerCachable) {
	      contentLinkFn = ctor.linker;
	      if (!contentLinkFn) {
	        contentLinkFn = ctor.linker = compile(el, options);
	      }
	    }
	
	    // link phase
	    // make sure to link root with prop scope!
	    var rootUnlinkFn = rootLinker(this, el, this._scope);
	    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);
	
	    // register composite unlink function
	    // to be called during instance destruction
	    this._unlinkFn = function () {
	      rootUnlinkFn();
	      // passing destroying: true to avoid searching and
	      // splicing the directives
	      contentUnlinkFn(true);
	    };
	
	    // finally replace original
	    if (options.replace) {
	      replace(original, el);
	    }
	
	    this._isCompiled = true;
	    this._callHook('compiled');
	  };
	
	  /**
	   * Initialize instance element. Called in the public
	   * $mount() method.
	   *
	   * @param {Element} el
	   */
	
	  Vue.prototype._initElement = function (el) {
	    if (isFragment(el)) {
	      this._isFragment = true;
	      this.$el = this._fragmentStart = el.firstChild;
	      this._fragmentEnd = el.lastChild;
	      // set persisted text anchors to empty
	      if (this._fragmentStart.nodeType === 3) {
	        this._fragmentStart.data = this._fragmentEnd.data = '';
	      }
	      this._fragment = el;
	    } else {
	      this.$el = el;
	    }
	    this.$el.__vue__ = this;
	    this._callHook('beforeCompile');
	  };
	
	  /**
	   * Create and bind a directive to an element.
	   *
	   * @param {Object} descriptor - parsed directive descriptor
	   * @param {Node} node   - target node
	   * @param {Vue} [host] - transclusion host component
	   * @param {Object} [scope] - v-for scope
	   * @param {Fragment} [frag] - owner fragment
	   */
	
	  Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
	    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
	  };
	
	  /**
	   * Teardown an instance, unobserves the data, unbind all the
	   * directives, turn off all the event listeners, etc.
	   *
	   * @param {Boolean} remove - whether to remove the DOM node.
	   * @param {Boolean} deferCleanup - if true, defer cleanup to
	   *                                 be called later
	   */
	
	  Vue.prototype._destroy = function (remove, deferCleanup) {
	    if (this._isBeingDestroyed) {
	      if (!deferCleanup) {
	        this._cleanup();
	      }
	      return;
	    }
	
	    var destroyReady;
	    var pendingRemoval;
	
	    var self = this;
	    // Cleanup should be called either synchronously or asynchronoysly as
	    // callback of this.$remove(), or if remove and deferCleanup are false.
	    // In any case it should be called after all other removing, unbinding and
	    // turning of is done
	    var cleanupIfPossible = function cleanupIfPossible() {
	      if (destroyReady && !pendingRemoval && !deferCleanup) {
	        self._cleanup();
	      }
	    };
	
	    // remove DOM element
	    if (remove && this.$el) {
	      pendingRemoval = true;
	      this.$remove(function () {
	        pendingRemoval = false;
	        cleanupIfPossible();
	      });
	    }
	
	    this._callHook('beforeDestroy');
	    this._isBeingDestroyed = true;
	    var i;
	    // remove self from parent. only necessary
	    // if parent is not being destroyed as well.
	    var parent = this.$parent;
	    if (parent && !parent._isBeingDestroyed) {
	      parent.$children.$remove(this);
	      // unregister ref (remove: true)
	      this._updateRef(true);
	    }
	    // destroy all children.
	    i = this.$children.length;
	    while (i--) {
	      this.$children[i].$destroy();
	    }
	    // teardown props
	    if (this._propsUnlinkFn) {
	      this._propsUnlinkFn();
	    }
	    // teardown all directives. this also tearsdown all
	    // directive-owned watchers.
	    if (this._unlinkFn) {
	      this._unlinkFn();
	    }
	    i = this._watchers.length;
	    while (i--) {
	      this._watchers[i].teardown();
	    }
	    // remove reference to self on $el
	    if (this.$el) {
	      this.$el.__vue__ = null;
	    }
	
	    destroyReady = true;
	    cleanupIfPossible();
	  };
	
	  /**
	   * Clean up to ensure garbage collection.
	   * This is called after the leave transition if there
	   * is any.
	   */
	
	  Vue.prototype._cleanup = function () {
	    if (this._isDestroyed) {
	      return;
	    }
	    // remove self from owner fragment
	    // do it in cleanup so that we can call $destroy with
	    // defer right when a fragment is about to be removed.
	    if (this._frag) {
	      this._frag.children.$remove(this);
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (this._data && this._data.__ob__) {
	      this._data.__ob__.removeVm(this);
	    }
	    // Clean up references to private properties and other
	    // instances. preserve reference to _data so that proxy
	    // accessors still work. The only potential side effect
	    // here is that mutating the instance after it's destroyed
	    // may affect the state of other components that are still
	    // observing the same object, but that seems to be a
	    // reasonable responsibility for the user rather than
	    // always throwing an error on them.
	    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
	    // call the last hook...
	    this._isDestroyed = true;
	    this._callHook('destroyed');
	    // turn off all instance listeners.
	    this.$off();
	  };
	}
	
	function miscMixin (Vue) {
	  /**
	   * Apply a list of filter (descriptors) to a value.
	   * Using plain for loops here because this will be called in
	   * the getter of any watcher with filters so it is very
	   * performance sensitive.
	   *
	   * @param {*} value
	   * @param {*} [oldValue]
	   * @param {Array} filters
	   * @param {Boolean} write
	   * @return {*}
	   */
	
	  Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
	    var filter, fn, args, arg, offset, i, l, j, k;
	    for (i = 0, l = filters.length; i < l; i++) {
	      filter = filters[write ? l - i - 1 : i];
	      fn = resolveAsset(this.$options, 'filters', filter.name, true);
	      if (!fn) continue;
	      fn = write ? fn.write : fn.read || fn;
	      if (typeof fn !== 'function') continue;
	      args = write ? [value, oldValue] : [value];
	      offset = write ? 2 : 1;
	      if (filter.args) {
	        for (j = 0, k = filter.args.length; j < k; j++) {
	          arg = filter.args[j];
	          args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
	        }
	      }
	      value = fn.apply(this, args);
	    }
	    return value;
	  };
	
	  /**
	   * Resolve a component, depending on whether the component
	   * is defined normally or using an async factory function.
	   * Resolves synchronously if already resolved, otherwise
	   * resolves asynchronously and caches the resolved
	   * constructor on the factory.
	   *
	   * @param {String|Function} value
	   * @param {Function} cb
	   */
	
	  Vue.prototype._resolveComponent = function (value, cb) {
	    var factory;
	    if (typeof value === 'function') {
	      factory = value;
	    } else {
	      factory = resolveAsset(this.$options, 'components', value, true);
	    }
	    /* istanbul ignore if */
	    if (!factory) {
	      return;
	    }
	    // async component factory
	    if (!factory.options) {
	      if (factory.resolved) {
	        // cached
	        cb(factory.resolved);
	      } else if (factory.requested) {
	        // pool callbacks
	        factory.pendingCallbacks.push(cb);
	      } else {
	        factory.requested = true;
	        var cbs = factory.pendingCallbacks = [cb];
	        factory.call(this, function resolve(res) {
	          if (isPlainObject(res)) {
	            res = Vue.extend(res);
	          }
	          // cache resolved
	          factory.resolved = res;
	          // invoke callbacks
	          for (var i = 0, l = cbs.length; i < l; i++) {
	            cbs[i](res);
	          }
	        }, function reject(reason) {
	          process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component' + (typeof value === 'string' ? ': ' + value : '') + '. ' + (reason ? '\nReason: ' + reason : ''));
	        });
	      }
	    } else {
	      // normal component
	      cb(factory);
	    }
	  };
	}
	
	var filterRE$1 = /[^|]\|[^|]/;
	
	function dataAPI (Vue) {
	  /**
	   * Get the value from an expression on this vm.
	   *
	   * @param {String} exp
	   * @param {Boolean} [asStatement]
	   * @return {*}
	   */
	
	  Vue.prototype.$get = function (exp, asStatement) {
	    var res = parseExpression$1(exp);
	    if (res) {
	      if (asStatement) {
	        var self = this;
	        return function statementHandler() {
	          self.$arguments = toArray(arguments);
	          var result = res.get.call(self, self);
	          self.$arguments = null;
	          return result;
	        };
	      } else {
	        try {
	          return res.get.call(this, this);
	        } catch (e) {}
	      }
	    }
	  };
	
	  /**
	   * Set the value from an expression on this vm.
	   * The expression must be a valid left-hand
	   * expression in an assignment.
	   *
	   * @param {String} exp
	   * @param {*} val
	   */
	
	  Vue.prototype.$set = function (exp, val) {
	    var res = parseExpression$1(exp, true);
	    if (res && res.set) {
	      res.set.call(this, this, val);
	    }
	  };
	
	  /**
	   * Delete a property on the VM
	   *
	   * @param {String} key
	   */
	
	  Vue.prototype.$delete = function (key) {
	    del(this._data, key);
	  };
	
	  /**
	   * Watch an expression, trigger callback when its
	   * value changes.
	   *
	   * @param {String|Function} expOrFn
	   * @param {Function} cb
	   * @param {Object} [options]
	   *                 - {Boolean} deep
	   *                 - {Boolean} immediate
	   * @return {Function} - unwatchFn
	   */
	
	  Vue.prototype.$watch = function (expOrFn, cb, options) {
	    var vm = this;
	    var parsed;
	    if (typeof expOrFn === 'string') {
	      parsed = parseDirective(expOrFn);
	      expOrFn = parsed.expression;
	    }
	    var watcher = new Watcher(vm, expOrFn, cb, {
	      deep: options && options.deep,
	      sync: options && options.sync,
	      filters: parsed && parsed.filters,
	      user: !options || options.user !== false
	    });
	    if (options && options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn() {
	      watcher.teardown();
	    };
	  };
	
	  /**
	   * Evaluate a text directive, including filters.
	   *
	   * @param {String} text
	   * @param {Boolean} [asStatement]
	   * @return {String}
	   */
	
	  Vue.prototype.$eval = function (text, asStatement) {
	    // check for filters.
	    if (filterRE$1.test(text)) {
	      var dir = parseDirective(text);
	      // the filter regex check might give false positive
	      // for pipes inside strings, so it's possible that
	      // we don't get any filters here
	      var val = this.$get(dir.expression, asStatement);
	      return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
	    } else {
	      // no filter
	      return this.$get(text, asStatement);
	    }
	  };
	
	  /**
	   * Interpolate a piece of template text.
	   *
	   * @param {String} text
	   * @return {String}
	   */
	
	  Vue.prototype.$interpolate = function (text) {
	    var tokens = parseText(text);
	    var vm = this;
	    if (tokens) {
	      if (tokens.length === 1) {
	        return vm.$eval(tokens[0].value) + '';
	      } else {
	        return tokens.map(function (token) {
	          return token.tag ? vm.$eval(token.value) : token.value;
	        }).join('');
	      }
	    } else {
	      return text;
	    }
	  };
	
	  /**
	   * Log instance data as a plain JS object
	   * so that it is easier to inspect in console.
	   * This method assumes console is available.
	   *
	   * @param {String} [path]
	   */
	
	  Vue.prototype.$log = function (path) {
	    var data = path ? getPath(this._data, path) : this._data;
	    if (data) {
	      data = clean(data);
	    }
	    // include computed fields
	    if (!path) {
	      var key;
	      for (key in this.$options.computed) {
	        data[key] = clean(this[key]);
	      }
	      if (this._props) {
	        for (key in this._props) {
	          data[key] = clean(this[key]);
	        }
	      }
	    }
	    console.log(data);
	  };
	
	  /**
	   * "clean" a getter/setter converted object into a plain
	   * object copy.
	   *
	   * @param {Object} - obj
	   * @return {Object}
	   */
	
	  function clean(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  }
	}
	
	function domAPI (Vue) {
	  /**
	   * Convenience on-instance nextTick. The callback is
	   * auto-bound to the instance, and this avoids component
	   * modules having to rely on the global Vue.
	   *
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };
	
	  /**
	   * Append instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$appendTo = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, append, appendWithTransition);
	  };
	
	  /**
	   * Prepend instance to target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$prependTo = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.hasChildNodes()) {
	      this.$before(target.firstChild, cb, withTransition);
	    } else {
	      this.$appendTo(target, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Insert instance before target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$before = function (target, cb, withTransition) {
	    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
	  };
	
	  /**
	   * Insert instance after target
	   *
	   * @param {Node} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$after = function (target, cb, withTransition) {
	    target = query(target);
	    if (target.nextSibling) {
	      this.$before(target.nextSibling, cb, withTransition);
	    } else {
	      this.$appendTo(target.parentNode, cb, withTransition);
	    }
	    return this;
	  };
	
	  /**
	   * Remove instance from DOM
	   *
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition] - defaults to true
	   */
	
	  Vue.prototype.$remove = function (cb, withTransition) {
	    if (!this.$el.parentNode) {
	      return cb && cb();
	    }
	    var inDocument = this._isAttached && inDoc(this.$el);
	    // if we are not in document, no need to check
	    // for transitions
	    if (!inDocument) withTransition = false;
	    var self = this;
	    var realCb = function realCb() {
	      if (inDocument) self._callHook('detached');
	      if (cb) cb();
	    };
	    if (this._isFragment) {
	      removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
	    } else {
	      var op = withTransition === false ? removeWithCb : removeWithTransition;
	      op(this.$el, this, realCb);
	    }
	    return this;
	  };
	
	  /**
	   * Shared DOM insertion function.
	   *
	   * @param {Vue} vm
	   * @param {Element} target
	   * @param {Function} [cb]
	   * @param {Boolean} [withTransition]
	   * @param {Function} op1 - op for non-transition insert
	   * @param {Function} op2 - op for transition insert
	   * @return vm
	   */
	
	  function insert(vm, target, cb, withTransition, op1, op2) {
	    target = query(target);
	    var targetIsDetached = !inDoc(target);
	    var op = withTransition === false || targetIsDetached ? op1 : op2;
	    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
	    if (vm._isFragment) {
	      mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
	        op(node, target, vm);
	      });
	      cb && cb();
	    } else {
	      op(vm.$el, target, vm, cb);
	    }
	    if (shouldCallHook) {
	      vm._callHook('attached');
	    }
	    return vm;
	  }
	
	  /**
	   * Check for selectors
	   *
	   * @param {String|Element} el
	   */
	
	  function query(el) {
	    return typeof el === 'string' ? document.querySelector(el) : el;
	  }
	
	  /**
	   * Append operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function append(el, target, vm, cb) {
	    target.appendChild(el);
	    if (cb) cb();
	  }
	
	  /**
	   * InsertBefore operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Node} target
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function beforeWithCb(el, target, vm, cb) {
	    before(el, target);
	    if (cb) cb();
	  }
	
	  /**
	   * Remove operation that takes a callback.
	   *
	   * @param {Node} el
	   * @param {Vue} vm - unused
	   * @param {Function} [cb]
	   */
	
	  function removeWithCb(el, vm, cb) {
	    remove(el);
	    if (cb) cb();
	  }
	}
	
	function eventsAPI (Vue) {
	  /**
	   * Listen on the given `event` with `fn`.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$on = function (event, fn) {
	    (this._events[event] || (this._events[event] = [])).push(fn);
	    modifyListenerCount(this, event, 1);
	    return this;
	  };
	
	  /**
	   * Adds an `event` listener that will be invoked a single
	   * time then automatically removed.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$once = function (event, fn) {
	    var self = this;
	    function on() {
	      self.$off(event, on);
	      fn.apply(this, arguments);
	    }
	    on.fn = fn;
	    this.$on(event, on);
	    return this;
	  };
	
	  /**
	   * Remove the given callback for `event` or all
	   * registered callbacks.
	   *
	   * @param {String} event
	   * @param {Function} fn
	   */
	
	  Vue.prototype.$off = function (event, fn) {
	    var cbs;
	    // all
	    if (!arguments.length) {
	      if (this.$parent) {
	        for (event in this._events) {
	          cbs = this._events[event];
	          if (cbs) {
	            modifyListenerCount(this, event, -cbs.length);
	          }
	        }
	      }
	      this._events = {};
	      return this;
	    }
	    // specific event
	    cbs = this._events[event];
	    if (!cbs) {
	      return this;
	    }
	    if (arguments.length === 1) {
	      modifyListenerCount(this, event, -cbs.length);
	      this._events[event] = null;
	      return this;
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        modifyListenerCount(this, event, -1);
	        cbs.splice(i, 1);
	        break;
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Trigger an event on self.
	   *
	   * @param {String|Object} event
	   * @return {Boolean} shouldPropagate
	   */
	
	  Vue.prototype.$emit = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    var cbs = this._events[event];
	    var shouldPropagate = isSource || !cbs;
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      // this is a somewhat hacky solution to the question raised
	      // in #2102: for an inline component listener like <comp @test="doThis">,
	      // the propagation handling is somewhat broken. Therefore we
	      // need to treat these inline callbacks differently.
	      var hasParentCbs = isSource && cbs.some(function (cb) {
	        return cb._fromParent;
	      });
	      if (hasParentCbs) {
	        shouldPropagate = false;
	      }
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        var cb = cbs[i];
	        var res = cb.apply(this, args);
	        if (res === true && (!hasParentCbs || cb._fromParent)) {
	          shouldPropagate = true;
	        }
	      }
	    }
	    return shouldPropagate;
	  };
	
	  /**
	   * Recursively broadcast an event to all children instances.
	   *
	   * @param {String|Object} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$broadcast = function (event) {
	    var isSource = typeof event === 'string';
	    event = isSource ? event : event.name;
	    // if no child has registered for this event,
	    // then there's no need to broadcast.
	    if (!this._eventsCount[event]) return;
	    var children = this.$children;
	    var args = toArray(arguments);
	    if (isSource) {
	      // use object event to indicate non-source emit
	      // on children
	      args[0] = { name: event, source: this };
	    }
	    for (var i = 0, l = children.length; i < l; i++) {
	      var child = children[i];
	      var shouldPropagate = child.$emit.apply(child, args);
	      if (shouldPropagate) {
	        child.$broadcast.apply(child, args);
	      }
	    }
	    return this;
	  };
	
	  /**
	   * Recursively propagate an event up the parent chain.
	   *
	   * @param {String} event
	   * @param {...*} additional arguments
	   */
	
	  Vue.prototype.$dispatch = function (event) {
	    var shouldPropagate = this.$emit.apply(this, arguments);
	    if (!shouldPropagate) return;
	    var parent = this.$parent;
	    var args = toArray(arguments);
	    // use object event to indicate non-source emit
	    // on parents
	    args[0] = { name: event, source: this };
	    while (parent) {
	      shouldPropagate = parent.$emit.apply(parent, args);
	      parent = shouldPropagate ? parent.$parent : null;
	    }
	    return this;
	  };
	
	  /**
	   * Modify the listener counts on all parents.
	   * This bookkeeping allows $broadcast to return early when
	   * no child has listened to a certain event.
	   *
	   * @param {Vue} vm
	   * @param {String} event
	   * @param {Number} count
	   */
	
	  var hookRE = /^hook:/;
	  function modifyListenerCount(vm, event, count) {
	    var parent = vm.$parent;
	    // hooks do not get broadcasted so no need
	    // to do bookkeeping for them
	    if (!parent || !count || hookRE.test(event)) return;
	    while (parent) {
	      parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
	      parent = parent.$parent;
	    }
	  }
	}
	
	function lifecycleAPI (Vue) {
	  /**
	   * Set instance target element and kick off the compilation
	   * process. The passed in `el` can be a selector string, an
	   * existing Element, or a DocumentFragment (for block
	   * instances).
	   *
	   * @param {Element|DocumentFragment|string} el
	   * @public
	   */
	
	  Vue.prototype.$mount = function (el) {
	    if (this._isCompiled) {
	      process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.', this);
	      return;
	    }
	    el = query(el);
	    if (!el) {
	      el = document.createElement('div');
	    }
	    this._compile(el);
	    this._initDOMHooks();
	    if (inDoc(this.$el)) {
	      this._callHook('attached');
	      ready.call(this);
	    } else {
	      this.$once('hook:attached', ready);
	    }
	    return this;
	  };
	
	  /**
	   * Mark an instance as ready.
	   */
	
	  function ready() {
	    this._isAttached = true;
	    this._isReady = true;
	    this._callHook('ready');
	  }
	
	  /**
	   * Teardown the instance, simply delegate to the internal
	   * _destroy.
	   *
	   * @param {Boolean} remove
	   * @param {Boolean} deferCleanup
	   */
	
	  Vue.prototype.$destroy = function (remove, deferCleanup) {
	    this._destroy(remove, deferCleanup);
	  };
	
	  /**
	   * Partially compile a piece of DOM and return a
	   * decompile function.
	   *
	   * @param {Element|DocumentFragment} el
	   * @param {Vue} [host]
	   * @param {Object} [scope]
	   * @param {Fragment} [frag]
	   * @return {Function}
	   */
	
	  Vue.prototype.$compile = function (el, host, scope, frag) {
	    return compile(el, this.$options, true)(this, el, host, scope, frag);
	  };
	}
	
	/**
	 * The exposed Vue constructor.
	 *
	 * API conventions:
	 * - public API methods/properties are prefixed with `$`
	 * - internal methods/properties are prefixed with `_`
	 * - non-prefixed properties are assumed to be proxied user
	 *   data.
	 *
	 * @constructor
	 * @param {Object} [options]
	 * @public
	 */
	
	function Vue(options) {
	  this._init(options);
	}
	
	// install internals
	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	miscMixin(Vue);
	
	// install instance APIs
	dataAPI(Vue);
	domAPI(Vue);
	eventsAPI(Vue);
	lifecycleAPI(Vue);
	
	var slot = {
	
	  priority: SLOT,
	  params: ['name'],
	
	  bind: function bind() {
	    // this was resolved during component transclusion
	    var name = this.params.name || 'default';
	    var content = this.vm._slotContents && this.vm._slotContents[name];
	    if (!content || !content.hasChildNodes()) {
	      this.fallback();
	    } else {
	      this.compile(content.cloneNode(true), this.vm._context, this.vm);
	    }
	  },
	
	  compile: function compile(content, context, host) {
	    if (content && context) {
	      if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
	        // if the inserted slot has v-if
	        // inject fallback content as the v-else
	        var elseBlock = document.createElement('template');
	        elseBlock.setAttribute('v-else', '');
	        elseBlock.innerHTML = this.el.innerHTML;
	        // the else block should be compiled in child scope
	        elseBlock._context = this.vm;
	        content.appendChild(elseBlock);
	      }
	      var scope = host ? host._scope : this._scope;
	      this.unlink = context.$compile(content, host, scope, this._frag);
	    }
	    if (content) {
	      replace(this.el, content);
	    } else {
	      remove(this.el);
	    }
	  },
	
	  fallback: function fallback() {
	    this.compile(extractContent(this.el, true), this.vm);
	  },
	
	  unbind: function unbind() {
	    if (this.unlink) {
	      this.unlink();
	    }
	  }
	};
	
	var partial = {
	
	  priority: PARTIAL,
	
	  params: ['name'],
	
	  // watch changes to name for dynamic partials
	  paramWatchers: {
	    name: function name(value) {
	      vIf.remove.call(this);
	      if (value) {
	        this.insert(value);
	      }
	    }
	  },
	
	  bind: function bind() {
	    this.anchor = createAnchor('v-partial');
	    replace(this.el, this.anchor);
	    this.insert(this.params.name);
	  },
	
	  insert: function insert(id) {
	    var partial = resolveAsset(this.vm.$options, 'partials', id, true);
	    if (partial) {
	      this.factory = new FragmentFactory(this.vm, partial);
	      vIf.insert.call(this);
	    }
	  },
	
	  unbind: function unbind() {
	    if (this.frag) {
	      this.frag.destroy();
	    }
	  }
	};
	
	var elementDirectives = {
	  slot: slot,
	  partial: partial
	};
	
	var convertArray = vFor._postProcess;
	
	/**
	 * Limit filter for arrays
	 *
	 * @param {Number} n
	 * @param {Number} offset (Decimal expected)
	 */
	
	function limitBy(arr, n, offset) {
	  offset = offset ? parseInt(offset, 10) : 0;
	  n = toNumber(n);
	  return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
	}
	
	/**
	 * Filter filter for arrays
	 *
	 * @param {String} search
	 * @param {String} [delimiter]
	 * @param {String} ...dataKeys
	 */
	
	function filterBy(arr, search, delimiter) {
	  arr = convertArray(arr);
	  if (search == null) {
	    return arr;
	  }
	  if (typeof search === 'function') {
	    return arr.filter(search);
	  }
	  // cast to lowercase string
	  search = ('' + search).toLowerCase();
	  // allow optional `in` delimiter
	  // because why not
	  var n = delimiter === 'in' ? 3 : 2;
	  // extract and flatten keys
	  var keys = Array.prototype.concat.apply([], toArray(arguments, n));
	  var res = [];
	  var item, key, val, j;
	  for (var i = 0, l = arr.length; i < l; i++) {
	    item = arr[i];
	    val = item && item.$value || item;
	    j = keys.length;
	    if (j) {
	      while (j--) {
	        key = keys[j];
	        if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
	          res.push(item);
	          break;
	        }
	      }
	    } else if (contains(item, search)) {
	      res.push(item);
	    }
	  }
	  return res;
	}
	
	/**
	 * Order filter for arrays
	 *
	 * @param {String|Array<String>|Function} ...sortKeys
	 * @param {Number} [order]
	 */
	
	function orderBy(arr) {
	  var comparator = null;
	  var sortKeys = undefined;
	  arr = convertArray(arr);
	
	  // determine order (last argument)
	  var args = toArray(arguments, 1);
	  var order = args[args.length - 1];
	  if (typeof order === 'number') {
	    order = order < 0 ? -1 : 1;
	    args = args.length > 1 ? args.slice(0, -1) : args;
	  } else {
	    order = 1;
	  }
	
	  // determine sortKeys & comparator
	  var firstArg = args[0];
	  if (!firstArg) {
	    return arr;
	  } else if (typeof firstArg === 'function') {
	    // custom comparator
	    comparator = function (a, b) {
	      return firstArg(a, b) * order;
	    };
	  } else {
	    // string keys. flatten first
	    sortKeys = Array.prototype.concat.apply([], args);
	    comparator = function (a, b, i) {
	      i = i || 0;
	      return i >= sortKeys.length - 1 ? baseCompare(a, b, i) : baseCompare(a, b, i) || comparator(a, b, i + 1);
	    };
	  }
	
	  function baseCompare(a, b, sortKeyIndex) {
	    var sortKey = sortKeys[sortKeyIndex];
	    if (sortKey) {
	      if (sortKey !== '$key') {
	        if (isObject(a) && '$value' in a) a = a.$value;
	        if (isObject(b) && '$value' in b) b = b.$value;
	      }
	      a = isObject(a) ? getPath(a, sortKey) : a;
	      b = isObject(b) ? getPath(b, sortKey) : b;
	    }
	    return a === b ? 0 : a > b ? order : -order;
	  }
	
	  // sort on a copy to avoid mutating original array
	  return arr.slice().sort(comparator);
	}
	
	/**
	 * String contain helper
	 *
	 * @param {*} val
	 * @param {String} search
	 */
	
	function contains(val, search) {
	  var i;
	  if (isPlainObject(val)) {
	    var keys = Object.keys(val);
	    i = keys.length;
	    while (i--) {
	      if (contains(val[keys[i]], search)) {
	        return true;
	      }
	    }
	  } else if (isArray(val)) {
	    i = val.length;
	    while (i--) {
	      if (contains(val[i], search)) {
	        return true;
	      }
	    }
	  } else if (val != null) {
	    return val.toString().toLowerCase().indexOf(search) > -1;
	  }
	}
	
	var digitsRE = /(\d{3})(?=\d)/g;
	
	// asset collections must be a plain object.
	var filters = {
	
	  orderBy: orderBy,
	  filterBy: filterBy,
	  limitBy: limitBy,
	
	  /**
	   * Stringify value.
	   *
	   * @param {Number} indent
	   */
	
	  json: {
	    read: function read(value, indent) {
	      return typeof value === 'string' ? value : JSON.stringify(value, null, arguments.length > 1 ? indent : 2);
	    },
	    write: function write(value) {
	      try {
	        return JSON.parse(value);
	      } catch (e) {
	        return value;
	      }
	    }
	  },
	
	  /**
	   * 'abc' => 'Abc'
	   */
	
	  capitalize: function capitalize(value) {
	    if (!value && value !== 0) return '';
	    value = value.toString();
	    return value.charAt(0).toUpperCase() + value.slice(1);
	  },
	
	  /**
	   * 'abc' => 'ABC'
	   */
	
	  uppercase: function uppercase(value) {
	    return value || value === 0 ? value.toString().toUpperCase() : '';
	  },
	
	  /**
	   * 'AbC' => 'abc'
	   */
	
	  lowercase: function lowercase(value) {
	    return value || value === 0 ? value.toString().toLowerCase() : '';
	  },
	
	  /**
	   * 12345 => $12,345.00
	   *
	   * @param {String} sign
	   * @param {Number} decimals Decimal places
	   */
	
	  currency: function currency(value, _currency, decimals) {
	    value = parseFloat(value);
	    if (!isFinite(value) || !value && value !== 0) return '';
	    _currency = _currency != null ? _currency : '$';
	    decimals = decimals != null ? decimals : 2;
	    var stringified = Math.abs(value).toFixed(decimals);
	    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified;
	    var i = _int.length % 3;
	    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
	    var _float = decimals ? stringified.slice(-1 - decimals) : '';
	    var sign = value < 0 ? '-' : '';
	    return sign + _currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
	  },
	
	  /**
	   * 'item' => 'items'
	   *
	   * @params
	   *  an array of strings corresponding to
	   *  the single, double, triple ... forms of the word to
	   *  be pluralized. When the number to be pluralized
	   *  exceeds the length of the args, it will use the last
	   *  entry in the array.
	   *
	   *  e.g. ['single', 'double', 'triple', 'multiple']
	   */
	
	  pluralize: function pluralize(value) {
	    var args = toArray(arguments, 1);
	    var length = args.length;
	    if (length > 1) {
	      var index = value % 10 - 1;
	      return index in args ? args[index] : args[length - 1];
	    } else {
	      return args[0] + (value === 1 ? '' : 's');
	    }
	  },
	
	  /**
	   * Debounce a handler function.
	   *
	   * @param {Function} handler
	   * @param {Number} delay = 300
	   * @return {Function}
	   */
	
	  debounce: function debounce(handler, delay) {
	    if (!handler) return;
	    if (!delay) {
	      delay = 300;
	    }
	    return _debounce(handler, delay);
	  }
	};
	
	function installGlobalAPI (Vue) {
	  /**
	   * Vue and every constructor that extends Vue has an
	   * associated options object, which can be accessed during
	   * compilation steps as `this.constructor.options`.
	   *
	   * These can be seen as the default options of every
	   * Vue instance.
	   */
	
	  Vue.options = {
	    directives: directives,
	    elementDirectives: elementDirectives,
	    filters: filters,
	    transitions: {},
	    components: {},
	    partials: {},
	    replace: true
	  };
	
	  /**
	   * Expose useful internals
	   */
	
	  Vue.util = util;
	  Vue.config = config;
	  Vue.set = set;
	  Vue['delete'] = del;
	  Vue.nextTick = nextTick;
	
	  /**
	   * The following are exposed for advanced usage / plugins
	   */
	
	  Vue.compiler = compiler;
	  Vue.FragmentFactory = FragmentFactory;
	  Vue.internalDirectives = internalDirectives;
	  Vue.parsers = {
	    path: path,
	    text: text,
	    template: template,
	    directive: directive,
	    expression: expression
	  };
	
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	
	  Vue.cid = 0;
	  var cid = 1;
	
	  /**
	   * Class inheritance
	   *
	   * @param {Object} extendOptions
	   */
	
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor;
	    }
	    var name = extendOptions.name || Super.options.name;
	    if (process.env.NODE_ENV !== 'production') {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
	        name = null;
	      }
	    }
	    var Sub = createClass(name || 'VueComponent');
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(Super.options, extendOptions);
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub;
	  };
	
	  /**
	   * A function that returns a sub-class constructor with the
	   * given name. This gives us much nicer output when
	   * logging instances in the console.
	   *
	   * @param {String} name
	   * @return {Function}
	   */
	
	  function createClass(name) {
	    /* eslint-disable no-new-func */
	    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
	    /* eslint-enable no-new-func */
	  }
	
	  /**
	   * Plugin system
	   *
	   * @param {Object} plugin
	   */
	
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return;
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this;
	  };
	
	  /**
	   * Apply a global mixin by merging it into the default
	   * options.
	   */
	
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	
	  /**
	   * Create asset registration methods with the following
	   * signature:
	   *
	   * @param {String} id
	   * @param {*} definition
	   */
	
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (id, definition) {
	      if (!definition) {
	        return this.options[type + 's'][id];
	      } else {
	        /* istanbul ignore if */
	        if (process.env.NODE_ENV !== 'production') {
	          if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
	            warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          if (!definition.name) {
	            definition.name = id;
	          }
	          definition = Vue.extend(definition);
	        }
	        this.options[type + 's'][id] = definition;
	        return definition;
	      }
	    };
	  });
	
	  // expose internal transition API
	  extend(Vue.transition, transition);
	}
	
	installGlobalAPI(Vue);
	
	Vue.version = '1.0.28';
	
	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue);
	    } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)) {
	      console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
	    }
	  }
	}, 0);
	
	module.exports = Vue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ },
/* 51 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(182);
	
	
	/***/ },
	
	/***/ 110:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(111)
		__vue_script__ = __webpack_require__(113)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/fading-circle.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(116)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 111:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 113:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(114);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'fading-circle',
	
		  mixins: [_common2.default],
	
		  created: function created() {
		    this.styleNode = document.createElement('style');
		    var css = '.circle-color-' + this._uid + ' > div::before { background-color: ' + this.spinnerColor + '; }';
	
		    this.styleNode.type = 'text/css';
		    this.styleNode.rel = 'stylesheet';
		    this.styleNode.title = 'fading circle style';
		    document.getElementsByTagName('head')[0].appendChild(this.styleNode);
		    this.styleNode.appendChild(document.createTextNode(css));
		  },
		  destroyed: function destroyed() {
		    if (this.styleNode) {
		      this.styleNode.parentNode.removeChild(this.styleNode);
		    }
		  }
		};
	
	/***/ },
	
	/***/ 114:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(115)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/common.vue: named exports in *.vue files are ignored.")}
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 115:
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  computed: {
		    spinnerColor: function spinnerColor() {
		      return this.color || this.$parent.color || '#ccc';
		    },
		    spinnerSize: function spinnerSize() {
		      return (this.size || this.$parent.size || 28) + 'px';
		    }
		  },
	
		  props: {
		    size: Number,
		    color: String
		  }
		};
	
	/***/ },
	
	/***/ 116:
	/***/ function(module, exports) {
	
		module.exports = "\n<div :class=\"['mint-spinner-fading-circle circle-color-' + _uid]\" :style=\"{\n    width: spinnerSize,\n    height: spinnerSize\n  }\">\n  <div v-for=\"n in 12\" :class=\"['is-circle' + (n + 1)]\" class=\"mint-spinner-fading-circle-circle\"></div>\n</div>\n";
	
	/***/ },
	
	/***/ 182:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _spinner = __webpack_require__(183);
	
		var _spinner2 = _interopRequireDefault(_spinner);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		_spinner2.default.install = function (Vue) {
		  Vue.component(_spinner2.default.name, _spinner2.default);
		};
	
		module.exports = _spinner2.default;
	
	/***/ },
	
	/***/ 183:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(184)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(200)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 184:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var SPINNERS = ['snake', 'double-bounce', 'triple-bounce', 'fading-circle'];
		var parseSpinner = function parseSpinner(index) {
		  if ({}.toString.call(index) === '[object Number]') {
		    if (SPINNERS.length <= index) {
		      console.warn('\'' + index + '\' spinner not found, use the default spinner.');
		      index = 0;
		    }
		    return SPINNERS[index];
		  }
	
		  if (SPINNERS.indexOf(index) === -1) {
		    console.warn('\'' + index + '\' spinner not found, use the default spinner.');
		    index = SPINNERS[0];
		  }
		  return index;
		};
	
		exports.default = {
		  name: 'mt-spinner',
	
		  computed: {
		    spinner: function spinner() {
		      return 'spinner-' + parseSpinner(this.type);
		    }
		  },
	
		  components: {
		    SpinnerSnake: __webpack_require__(185),
		    SpinnerDoubleBounce: __webpack_require__(190),
		    SpinnerTripleBounce: __webpack_require__(195),
		    SpinnerFadingCircle: __webpack_require__(110)
		  },
	
		  props: {
		    type: {
		      default: 0
		    },
		    size: {
		      type: Number,
		      default: 28
		    },
		    color: {
		      type: String,
		      default: '#ccc'
		    }
		  }
		};
	
	/***/ },
	
	/***/ 185:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(186)
		__vue_script__ = __webpack_require__(188)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/snake.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(189)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 186:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 188:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(114);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'snake',
	
		  mixins: [_common2.default]
		};
	
	/***/ },
	
	/***/ 189:
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-spinner-snake\" :style=\"{\n  'border-top-color': spinnerColor,\n  'border-left-color': spinnerColor,\n  'border-bottom-color': spinnerColor,\n  'height': spinnerSize,\n  'width': spinnerSize\n  }\">\n</div>\n";
	
	/***/ },
	
	/***/ 190:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(191)
		__vue_script__ = __webpack_require__(193)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/double-bounce.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(194)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 191:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 193:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(114);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'double-bounce',
	
		  mixins: [_common2.default]
		};
	
	/***/ },
	
	/***/ 194:
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-spinner-double-bounce\" :style=\"{\n    width: spinnerSize,\n    height: spinnerSize\n  }\">\n  <div class=\"mint-spinner-double-bounce-bounce1\" :style=\"{ backgroundColor: spinnerColor }\"></div>\n  <div class=\"mint-spinner-double-bounce-bounce2\" :style=\"{ backgroundColor: spinnerColor }\"></div>\n</div>\n";
	
	/***/ },
	
	/***/ 195:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(196)
		__vue_script__ = __webpack_require__(198)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/spinner/src/spinner/triple-bounce.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(199)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 196:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 198:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _common = __webpack_require__(114);
	
		var _common2 = _interopRequireDefault(_common);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'triple-bounce',
	
		  mixins: [_common2.default],
	
		  computed: {
		    spinnerSize: function spinnerSize() {
		      return (this.size || this.$parent.size || 28) / 3 + 'px';
		    },
		    bounceStyle: function bounceStyle() {
		      return {
		        width: this.spinnerSize,
		        height: this.spinnerSize,
		        backgroundColor: this.spinnerColor
		      };
		    }
		  }
		};
	
	/***/ },
	
	/***/ 199:
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"mint-spinner-triple-bounce\">\n  <div class=\"mint-spinner-triple-bounce-bounce1\" :style=\"bounceStyle\"></div>\n  <div class=\"mint-spinner-triple-bounce-bounce2\" :style=\"bounceStyle\"></div>\n  <div class=\"mint-spinner-triple-bounce-bounce3\" :style=\"bounceStyle\"></div>\n</div>\n";
	
	/***/ },
	
	/***/ 200:
	/***/ function(module, exports) {
	
		module.exports = "\n<span><component :is=\"spinner\"></component></span>\n";
	
	/***/ }
	
	/******/ });

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../.0.25.0@css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../.0.25.0@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.mint-spinner-fading-circle {\n    position: relative\n}\n.mint-spinner-fading-circle-circle {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    position: absolute\n}\n.mint-spinner-fading-circle-circle::before {\n    content: \" \";\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    border-radius: 100%;\n    -webkit-animation: mint-fading-circle 1.2s infinite ease-in-out both;\n            animation: mint-fading-circle 1.2s infinite ease-in-out both\n}\n.mint-spinner-fading-circle-circle.is-circle2 {\n    -webkit-transform: rotate(30deg);\n            transform: rotate(30deg)\n}\n.mint-spinner-fading-circle-circle.is-circle2::before {\n    -webkit-animation-delay: -1.1s;\n            animation-delay: -1.1s\n}\n.mint-spinner-fading-circle-circle.is-circle3 {\n    -webkit-transform: rotate(60deg);\n            transform: rotate(60deg)\n}\n.mint-spinner-fading-circle-circle.is-circle3::before {\n    -webkit-animation-delay: -1s;\n            animation-delay: -1s\n}\n.mint-spinner-fading-circle-circle.is-circle4 {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg)\n}\n.mint-spinner-fading-circle-circle.is-circle4::before {\n    -webkit-animation-delay: -0.9s;\n            animation-delay: -0.9s\n}\n.mint-spinner-fading-circle-circle.is-circle5 {\n    -webkit-transform: rotate(120deg);\n            transform: rotate(120deg)\n}\n.mint-spinner-fading-circle-circle.is-circle5::before {\n    -webkit-animation-delay: -0.8s;\n            animation-delay: -0.8s\n}\n.mint-spinner-fading-circle-circle.is-circle6 {\n    -webkit-transform: rotate(150deg);\n            transform: rotate(150deg)\n}\n.mint-spinner-fading-circle-circle.is-circle6::before {\n    -webkit-animation-delay: -0.7s;\n            animation-delay: -0.7s\n}\n.mint-spinner-fading-circle-circle.is-circle7 {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg)\n}\n.mint-spinner-fading-circle-circle.is-circle7::before {\n    -webkit-animation-delay: -0.6s;\n            animation-delay: -0.6s\n}\n.mint-spinner-fading-circle-circle.is-circle8 {\n    -webkit-transform: rotate(210deg);\n            transform: rotate(210deg)\n}\n.mint-spinner-fading-circle-circle.is-circle8::before {\n    -webkit-animation-delay: -0.5s;\n            animation-delay: -0.5s\n}\n.mint-spinner-fading-circle-circle.is-circle9 {\n    -webkit-transform: rotate(240deg);\n            transform: rotate(240deg)\n}\n.mint-spinner-fading-circle-circle.is-circle9::before {\n    -webkit-animation-delay: -0.4s;\n            animation-delay: -0.4s\n}\n.mint-spinner-fading-circle-circle.is-circle10 {\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg)\n}\n.mint-spinner-fading-circle-circle.is-circle10::before {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s\n}\n.mint-spinner-fading-circle-circle.is-circle11 {\n    -webkit-transform: rotate(300deg);\n            transform: rotate(300deg)\n}\n.mint-spinner-fading-circle-circle.is-circle11::before {\n    -webkit-animation-delay: -0.2s;\n            animation-delay: -0.2s\n}\n.mint-spinner-fading-circle-circle.is-circle12 {\n    -webkit-transform: rotate(330deg);\n            transform: rotate(330deg)\n}\n.mint-spinner-fading-circle-circle.is-circle12::before {\n    -webkit-animation-delay: -0.1s;\n            animation-delay: -0.1s\n}\n@-webkit-keyframes mint-fading-circle {\n    0%, 39%, 100% {\n        opacity: 0\n    }\n    40% {\n        opacity: 1\n    }\n}\n@keyframes mint-fading-circle {\n    0%, 39%, 100% {\n        opacity: 0\n    }\n    40% {\n        opacity: 1\n    }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.mint-spinner-snake {\n  -webkit-animation: mint-spinner-rotate 0.8s infinite linear;\n          animation: mint-spinner-rotate 0.8s infinite linear;\n  border: 4px solid transparent;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes mint-spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes mint-spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.mint-spinner-double-bounce {\n  position: relative;\n}\n\n.mint-spinner-double-bounce-bounce1, .mint-spinner-double-bounce-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: mint-spinner-double-bounce 2.0s infinite ease-in-out;\n          animation: mint-spinner-double-bounce 2.0s infinite ease-in-out;\n}\n\n.mint-spinner-double-bounce-bounce2 {\n  -webkit-animation-delay: -1.0s;\n          animation-delay: -1.0s;\n}\n\n@-webkit-keyframes mint-spinner-double-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0.0);\n            transform: scale(0.0);\n  }\n\n  50% {\n    -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n  }\n}\n\n@keyframes mint-spinner-double-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0.0);\n            transform: scale(0.0);\n  }\n\n  50% {\n    -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n  }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.mint-spinner-triple-bounce {}\n\n.mint-spinner-triple-bounce-bounce1, .mint-spinner-triple-bounce-bounce2, .mint-spinner-triple-bounce-bounce3 {\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: mint-spinner-triple-bounce 1.4s infinite ease-in-out both;\n          animation: mint-spinner-triple-bounce 1.4s infinite ease-in-out both;\n}\n\n.mint-spinner-triple-bounce-bounce1 {\n  -webkit-animation-delay: -0.32s;\n          animation-delay: -0.32s;\n}\n\n.mint-spinner-triple-bounce-bounce2 {\n  -webkit-animation-delay: -0.16s;\n          animation-delay: -0.16s;\n}\n\n@-webkit-keyframes mint-spinner-triple-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n  }\n}\n\n@keyframes mint-spinner-triple-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n            transform: scale(1.0);\n  }\n}\n", ""]);
	
	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(136);
	
	
	/***/ },
	
	/***/ 9:
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(50);
	
	/***/ },
	
	/***/ 38:
	/***/ function(module, exports) {
	
		var bindEvent = (function() {
		  if(document.addEventListener) {
		    return function(element, event, handler) {
		      if (element && event && handler) {
		        element.addEventListener(event, handler, false);
		      }
		    };
		  } else {
		    return function(element, event, handler) {
		      if (element && event && handler) {
		        element.attachEvent('on' + event, handler);
		      }
		    };
		  }
		})();
	
		var unbindEvent = (function() {
		  if(document.removeEventListener) {
		    return function(element, event, handler) {
		      if (element && event) {
		        element.removeEventListener(event, handler, false);
		      }
		    };
		  } else {
		    return function(element, event, handler) {
		      if (element && event) {
		        element.detachEvent('on' + event, handler);
		      }
		    };
		  }
		})();
	
		var bindOnce = function(el, event, fn) {
		  var listener = function() {
		    if (fn) {
		      fn.apply(this, arguments);
		    }
		    unbindEvent(el, event, listener);
		  };
		  bindEvent(el, event, listener);
		};
	
		module.exports = {
		  on: bindEvent,
		  off: unbindEvent,
		  once: bindOnce
		};
	
	/***/ },
	
	/***/ 136:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(137);
	
	/***/ },
	
	/***/ 137:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(138)
		__vue_script__ = __webpack_require__(140)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/picker/src/picker.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(150)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 138:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 140:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  name: 'mt-picker',
	
		  props: {
		    slots: {
		      type: Array
		    },
		    showToolbar: {
		      type: Boolean,
		      default: false
		    },
		    visibleItemCount: {
		      type: Number,
		      default: 5
		    },
		    rotateEffect: {
		      type: Boolean,
		      default: false
		    }
		  },
	
		  beforeCompile: function beforeCompile() {
		    var slots = this.slots || [];
		    this.values = [];
		    var values = this.values;
		    var valueIndexCount = 0;
		    slots.forEach(function (slot) {
		      if (!slot.divider) {
		        slot.valueIndex = valueIndexCount++;
		        values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
		      }
		    });
		  },
	
	
		  methods: {
		    getSlot: function getSlot(slotIndex) {
		      var slots = this.slots || [];
		      var count = 0;
		      var target;
		      var children = this.$children;
	
		      slots.forEach(function (slot, index) {
		        if (!slot.divider) {
		          if (slotIndex === count) {
		            target = children[index];
		          }
		          count++;
		        }
		      });
	
		      return target;
		    },
		    getSlotValue: function getSlotValue(index) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        return slot.value;
		      }
		      return null;
		    },
		    setSlotValue: function setSlotValue(index, value) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        slot.value = value;
		      }
		    },
		    getSlotValues: function getSlotValues(index) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        return slot.values;
		      }
		      return null;
		    },
		    setSlotValues: function setSlotValues(index, values) {
		      var slot = this.getSlot(index);
		      if (slot) {
		        slot.values = values;
		      }
		    },
		    getValues: function getValues() {
		      return this.values;
		    },
		    setValues: function setValues(values) {
		      var _this = this;
	
		      var slotCount = this.slotCount;
		      values = values || [];
		      if (slotCount !== values.length) {
		        throw new Error('values length is not equal slot count.');
		      }
		      values.forEach(function (value, index) {
		        _this.setSlotValue(index, value);
		      });
		    }
		  },
	
		  events: {
		    slotValueChange: function slotValueChange() {
		      this.$emit('change', this, this.values);
		    }
		  },
	
		  computed: {
		    values: function values() {
		      var slots = this.slots || [];
		      var values = [];
		      slots.forEach(function (slot) {
		        if (!slot.divider) values.push(slot.value);
		      });
	
		      return values;
		    },
		    slotCount: function slotCount() {
		      var slots = this.slots || [];
		      var result = 0;
		      slots.forEach(function (slot) {
		        if (!slot.divider) result++;
		      });
		      return result;
		    }
		  },
	
		  components: {
		    PickerSlot: __webpack_require__(141)
		  }
		};
	
	/***/ },
	
	/***/ 141:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(142)
		__vue_script__ = __webpack_require__(144)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/picker/src/picker-slot.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(149)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 142:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 144:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _vue = __webpack_require__(9);
	
		var _vue2 = _interopRequireDefault(_vue);
	
		var _draggable = __webpack_require__(145);
	
		var _draggable2 = _interopRequireDefault(_draggable);
	
		var _translate = __webpack_require__(146);
	
		var _translate2 = _interopRequireDefault(_translate);
	
		var _event = __webpack_require__(38);
	
		var _class = __webpack_require__(147);
	
		__webpack_require__(148);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		var rotateElement = function rotateElement(element, angle) {
		  if (!element) return;
		  var transformProperty = _translate2.default.transformProperty;
	
		  element.style[transformProperty] = element.style[transformProperty].replace(/rotateX\(.+?deg\)/gi, '') + (' rotateX(' + angle + 'deg)');
		};
	
		var ITEM_HEIGHT = 36;
		var VISIBLE_ITEMS_ANGLE_MAP = {
		  3: -45,
		  5: -20,
		  7: -15
		};
	
		exports.default = {
		  props: {
		    values: {
		      type: Array,
		      default: function _default() {
		        return [];
		      }
		    },
		    value: {},
		    visibleItemCount: {
		      type: Number,
		      default: 5
		    },
		    rotateEffect: {
		      type: Boolean,
		      default: false
		    },
		    divider: {
		      type: Boolean,
		      default: false
		    },
		    textAlign: {
		      type: String,
		      default: 'center'
		    },
		    flex: {},
		    className: {},
		    content: {}
		  },
	
		  data: function data() {
		    return {
		      dragging: false,
		      animationFrameId: null
		    };
		  },
	
	
		  computed: {
		    flexStyle: function flexStyle() {
		      return {
		        'flex': this.flex,
		        '-webkit-box-flex': this.flex,
		        '-moz-box-flex': this.flex,
		        '-ms-flex': this.flex
		      };
		    },
		    classNames: function classNames() {
		      var PREFIX = 'picker-slot-';
		      var resultArray = [];
	
		      if (this.rotateEffect) {
		        resultArray.push(PREFIX + 'absolute');
		      }
	
		      var textAlign = this.textAlign || 'center';
		      resultArray.push(PREFIX + textAlign);
	
		      if (this.divider) {
		        resultArray.push(PREFIX + 'divider');
		      }
	
		      if (this.className) {
		        resultArray.push(this.className);
		      }
	
		      return resultArray.join(' ');
		    },
		    contentHeight: function contentHeight() {
		      return ITEM_HEIGHT * this.visibleItemCount;
		    },
		    valueIndex: function valueIndex() {
		      return this.values.indexOf(this.value);
		    },
		    dragRange: function dragRange() {
		      var values = this.values;
		      var visibleItemCount = this.visibleItemCount;
	
		      return [-ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2)];
		    }
		  },
	
		  methods: {
		    value2Translate: function value2Translate(value) {
		      var values = this.values;
		      var valueIndex = values.indexOf(value);
		      var offset = Math.floor(this.visibleItemCount / 2);
	
		      if (valueIndex !== -1) {
		        return (valueIndex - offset) * -ITEM_HEIGHT;
		      }
		    },
		    translate2Value: function translate2Value(translate) {
		      translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT;
		      var index = -(translate - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT;
	
		      return this.values[index];
		    },
	
	
		    updateRotate: function updateRotate(currentTranslate, pickerItems) {
		      if (this.divider) return;
		      var dragRange = this.dragRange;
		      var wrapper = this.$els.wrapper;
	
		      if (!pickerItems) {
		        pickerItems = wrapper.querySelectorAll('.picker-item');
		      }
	
		      if (currentTranslate === undefined) {
		        currentTranslate = _translate2.default.getElementTranslate(wrapper).top;
		      }
	
		      var itemsFit = Math.ceil(this.visibleItemCount / 2);
		      var angleUnit = VISIBLE_ITEMS_ANGLE_MAP[this.visibleItemCount] || -20;
	
		      [].forEach.call(pickerItems, function (item, index) {
		        var itemOffsetTop = index * ITEM_HEIGHT;
		        var translateOffset = dragRange[1] - currentTranslate;
		        var itemOffset = itemOffsetTop - translateOffset;
		        var percentage = itemOffset / ITEM_HEIGHT;
	
		        var angle = angleUnit * percentage;
		        if (angle > 180) angle = 180;
		        if (angle < -180) angle = -180;
	
		        rotateElement(item, angle);
	
		        if (Math.abs(percentage) > itemsFit) {
		          (0, _class.addClass)(item, 'picker-item-far');
		        } else {
		          (0, _class.removeClass)(item, 'picker-item-far');
		        }
		      });
		    },
	
		    planUpdateRotate: function planUpdateRotate() {
		      var _this = this;
	
		      var el = this.$els.wrapper;
		      cancelAnimationFrame(this.animationFrameId);
	
		      this.animationFrameId = requestAnimationFrame(function () {
		        _this.updateRotate();
		      });
	
		      (0, _event.once)(el, _translate2.default.transitionEndProperty, function () {
		        _this.animationFrameId = null;
		        cancelAnimationFrame(_this.animationFrameId);
		      });
		    },
	
		    initEvents: function initEvents() {
		      var _this2 = this;
	
		      var el = this.$els.wrapper;
		      var dragState = {};
	
		      var velocityTranslate, prevTranslate, pickerItems;
	
		      (0, _draggable2.default)(el, {
		        start: function start(event) {
		          cancelAnimationFrame(_this2.animationFrameId);
		          _this2.animationFrameId = null;
		          dragState = {
		            range: _this2.dragRange,
		            start: new Date(),
		            startLeft: event.pageX,
		            startTop: event.pageY,
		            startTranslateTop: _translate2.default.getElementTranslate(el).top
		          };
		          pickerItems = el.querySelectorAll('.picker-item');
		        },
	
		        drag: function drag(event) {
		          _this2.dragging = true;
	
		          dragState.left = event.pageX;
		          dragState.top = event.pageY;
	
		          var deltaY = dragState.top - dragState.startTop;
		          var translate = dragState.startTranslateTop + deltaY;
	
		          _translate2.default.translateElement(el, null, translate);
	
		          velocityTranslate = translate - prevTranslate || translate;
	
		          prevTranslate = translate;
	
		          if (_this2.rotateEffect) {
		            _this2.updateRotate(prevTranslate, pickerItems);
		          }
		        },
	
		        end: function end() {
		          _this2.dragging = false;
	
		          var momentumRatio = 7;
		          var currentTranslate = _translate2.default.getElementTranslate(el).top;
		          var duration = new Date() - dragState.start;
	
		          var momentumTranslate;
		          if (duration < 300) {
		            momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
		          }
	
		          var dragRange = dragState.range;
	
		          _vue2.default.nextTick(function () {
		            var translate;
		            if (momentumTranslate) {
		              translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
		            } else {
		              translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
		            }
	
		            translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
	
		            _translate2.default.translateElement(el, null, translate);
	
		            _this2.value = _this2.translate2Value(translate);
	
		            if (_this2.rotateEffect) {
		              _this2.planUpdateRotate();
		            }
		          });
	
		          dragState = {};
		        }
		      });
		    },
		    doOnValueChange: function doOnValueChange() {
		      var value = this.value;
		      var wrapper = this.$els.wrapper;
	
		      _translate2.default.translateElement(wrapper, null, this.value2Translate(value));
		    },
		    doOnValuesChange: function doOnValuesChange() {
		      var el = this.$el;
		      var items = el.querySelectorAll('.picker-item');
		      [].forEach.call(items, function (item, index) {
		        _translate2.default.translateElement(item, null, ITEM_HEIGHT * index);
		      });
		      if (this.rotateEffect) {
		        this.planUpdateRotate();
		      }
		    }
		  },
	
		  ready: function ready() {
		    this.ready = true;
	
		    if (!this.divider) {
		      this.initEvents();
		      this.doOnValueChange();
		    }
	
		    if (this.rotateEffect) {
		      this.doOnValuesChange();
		    }
		  },
	
	
		  watch: {
		    values: function values(newVal) {
		      var _this3 = this;
	
		      if (this.valueIndex === -1) {
		        this.value = (newVal || [])[0];
		      }
		      if (this.rotateEffect) {
		        _vue2.default.nextTick(function () {
		          _this3.doOnValuesChange();
		        });
		      }
		    },
		    value: function value() {
		      this.doOnValueChange();
		      if (this.rotateEffect) {
		        this.planUpdateRotate();
		      }
		      this.$dispatch('slotValueChange', this);
		    }
		  }
		};
	
	/***/ },
	
	/***/ 145:
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		exports.default = function (element, options) {
		  var moveFn = function moveFn(event) {
		    if (options.drag) {
		      options.drag(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  };
	
		  var endFn = function endFn(event) {
		    if (!supportTouch) {
		      document.removeEventListener('mousemove', moveFn);
		      document.removeEventListener('mouseup', endFn);
		    }
		    document.onselectstart = null;
		    document.ondragstart = null;
	
		    isDragging = false;
	
		    if (options.end) {
		      options.end(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  };
	
		  element.addEventListener(supportTouch ? 'touchstart' : 'mousedown', function (event) {
		    if (isDragging) return;
		    document.onselectstart = function () {
		      return false;
		    };
		    document.ondragstart = function () {
		      return false;
		    };
	
		    if (!supportTouch) {
		      document.addEventListener('mousemove', moveFn);
		      document.addEventListener('mouseup', endFn);
		    }
		    isDragging = true;
	
		    if (options.start) {
		      event.preventDefault();
		      options.start(supportTouch ? event.changedTouches[0] || event.touches[0] : event);
		    }
		  });
	
		  if (supportTouch) {
		    element.addEventListener('touchmove', moveFn);
		    element.addEventListener('touchend', endFn);
		    element.addEventListener('touchcancel', endFn);
		  }
		};
	
		var isDragging = false;
		var supportTouch = 'ontouchstart' in window;
	
		;
	
	/***/ },
	
	/***/ 146:
	/***/ function(module, exports) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var docStyle = document.documentElement.style;
		var engine;
		var translate3d = false;
	
		if (window.opera && Object.prototype.toString.call(opera) === '[object Opera]') {
		  engine = 'presto';
		} else if ('MozAppearance' in docStyle) {
		  engine = 'gecko';
		} else if ('WebkitAppearance' in docStyle) {
		  engine = 'webkit';
		} else if (typeof navigator.cpuClass === 'string') {
		  engine = 'trident';
		}
	
		var cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];
	
		var vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O' }[engine];
	
		var helperElem = document.createElement('div');
		var perspectiveProperty = vendorPrefix + 'Perspective';
		var transformProperty = vendorPrefix + 'Transform';
		var transformStyleName = cssPrefix + 'transform';
		var transitionProperty = vendorPrefix + 'Transition';
		var transitionStyleName = cssPrefix + 'transition';
		var transitionEndProperty = vendorPrefix.toLowerCase() + 'TransitionEnd';
	
		if (helperElem.style[perspectiveProperty] !== undefined) {
		  translate3d = true;
		}
	
		var getTranslate = function getTranslate(element) {
		  var result = { left: 0, top: 0 };
		  if (element === null || element.style === null) return result;
	
		  var transform = element.style[transformProperty];
		  var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g.exec(transform);
		  if (matches) {
		    result.left = +matches[1];
		    result.top = +matches[3];
		  }
	
		  return result;
		};
	
		var translateElement = function translateElement(element, x, y) {
		  if (x === null && y === null) return;
	
		  if (element === null || element === undefined || element.style === null) return;
	
		  if (!element.style[transformProperty] && x === 0 && y === 0) return;
	
		  if (x === null || y === null) {
		    var translate = getTranslate(element);
		    if (x === null) {
		      x = translate.left;
		    }
		    if (y === null) {
		      y = translate.top;
		    }
		  }
	
		  cancelTranslateElement(element);
	
		  if (translate3d) {
		    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ') translateZ(0px)';
		  } else {
		    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ')';
		  }
		};
	
		var cancelTranslateElement = function cancelTranslateElement(element) {
		  if (element === null || element.style === null) return;
		  var transformValue = element.style[transformProperty];
		  if (transformValue) {
		    transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '');
		    element.style[transformProperty] = transformValue;
		  }
		};
	
		exports.default = {
		  transformProperty: transformProperty,
		  transformStyleName: transformStyleName,
		  transitionProperty: transitionProperty,
		  transitionStyleName: transitionStyleName,
		  transitionEndProperty: transitionEndProperty,
		  getElementTranslate: getTranslate,
		  translateElement: translateElement,
		  cancelTranslateElement: cancelTranslateElement
		};
	
	/***/ },
	
	/***/ 147:
	/***/ function(module, exports) {
	
		var trim = function (string) {
		  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
		};
	
		var hasClass = function (el, cls) {
		  if (!el || !cls) return false;
		  if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
		  if (el.classList) {
		    return el.classList.contains(cls);
		  } else {
		    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
		  }
		};
	
		var addClass = function (el, cls) {
		  if (!el) return;
		  var curClass = el.className;
		  var classes = (cls || '').split(' ');
	
		  for (var i = 0, j = classes.length; i < j; i++) {
		    var clsName = classes[i];
		    if (!clsName) continue;
	
		    if (el.classList) {
		      el.classList.add(clsName);
		    } else {
		      if (!hasClass(el, clsName)) {
		        curClass += ' ' + clsName;
		      }
		    }
		  }
		  if (!el.classList) {
		    el.className = curClass;
		  }
		};
	
		var removeClass = function (el, cls) {
		  if (!el || !cls) return;
		  var classes = cls.split(' ');
		  var curClass = ' ' + el.className + ' ';
	
		  for (var i = 0, j = classes.length; i < j; i++) {
		    var clsName = classes[i];
		    if (!clsName) continue;
	
		    if (el.classList) {
		      el.classList.remove(clsName);
		    } else {
		      if (hasClass(el, clsName)) {
		        curClass = curClass.replace(' ' + clsName + ' ', ' ');
		      }
		    }
		  }
		  if (!el.classList) {
		    el.className = trim(curClass);
		  }
		};
	
		module.exports = {
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass
		};
	
	/***/ },
	
	/***/ 148:
	/***/ function(module, exports) {
	
		/*
		 * raf.js
		 * https://github.com/ngryman/raf.js
		 *
		 * original requestAnimationFrame polyfill by Erik Möller
		 * inspired from paul_irish gist and post
		 *
		 * Copyright (c) 2013 ngryman
		 * Licensed under the MIT license.
		 */
	
		(function(window) {
			var lastTime = 0,
				vendors = ['webkit', 'moz'],
				requestAnimationFrame = window.requestAnimationFrame,
				cancelAnimationFrame = window.cancelAnimationFrame,
				i = vendors.length;
	
			// try to un-prefix existing raf
			while (--i >= 0 && !requestAnimationFrame) {
				requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
				cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'];
			}
	
			// polyfill with setTimeout fallback
			// heavily inspired from @darius gist mod: https://gist.github.com/paulirish/1579671#comment-837945
			if (!requestAnimationFrame || !cancelAnimationFrame) {
				requestAnimationFrame = function(callback) {
					var now = +new Date(), nextTime = Math.max(lastTime + 16, now);
					return setTimeout(function() {
						callback(lastTime = nextTime);
					}, nextTime - now);
				};
	
				cancelAnimationFrame = clearTimeout;
			}
	
			// export to window
			window.requestAnimationFrame = requestAnimationFrame;
			window.cancelAnimationFrame = cancelAnimationFrame;
		}(window));
	
	
	/***/ },
	
	/***/ 149:
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"picker-slot {{classNames}}\" :style=\"flexStyle\">\n  <div v-if=\"!divider\" v-el:wrapper class=\"picker-slot-wrapper\" :class=\"{ dragging: dragging }\" :style=\"{ height: contentHeight + 'px' }\">\n    <div class=\"picker-item\" v-for=\"itemValue in values\" :class=\"{ 'picker-selected': itemValue === value }\">{{ itemValue }}</div>\n  </div>\n  <div v-if=\"divider\">{{ content }}</div>\n</div>\n";
	
	/***/ },
	
	/***/ 150:
	/***/ function(module, exports) {
	
		module.exports = "\n<div class=\"picker\" :class=\"{ 'picker-3d': rotateEffect }\">\n  <div class=\"picker-toolbar\" v-if=\"showToolbar\"><slot></slot></div>\n  <div class=\"picker-items\">\n    <picker-slot v-for=\"slot in slots\" :values=\"slot.values || []\" :text-align=\"slot.textAlign || 'center'\" :visible-item-count=\"visibleItemCount\" :class-name=\"slot.className\" :flex=\"slot.flex\" :value.sync=\"values[slot.valueIndex]\" :rotate-effect=\"rotateEffect\" :divider=\"slot.divider\" :content=\"slot.content\"></picker-slot>\n    <div class=\"picker-center-highlight\"></div>\n  </div>\n</div>\n";
	
	/***/ }
	
	/******/ });

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
	/******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ({
	
	/***/ 0:
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = __webpack_require__(151);
	
	
	/***/ },
	
	/***/ 8:
	/***/ function(module, exports, __webpack_require__) {
	
		!function(e,t){ true?module.exports=t(__webpack_require__(9)):"function"==typeof define&&define.amd?define("VuePopup",["vue"],t):"object"==typeof exports?exports.VuePopup=t(require("vue")):e.VuePopup=t(e.vue)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,t,o){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/lib/",t(t.s=5)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(4),l=n(i),s=o(2),r=o(1),d=n(r);o(3);var a=1,u=[],c=function(e){if(u.indexOf(e)===-1){var t=function(e){var t=e.__vue__;if(!t){var o=e.previousSibling;o.__vue__&&(t=o.__vue__)}return t};l["default"].transition(e,{afterEnter:function(e){var o=t(e);o&&o.doAfterOpen&&o.doAfterOpen()},afterLeave:function(e){var o=t(e);o&&o.doAfterClose&&o.doAfterClose()}})}},f=function p(e){return 3===e.nodeType&&(e=e.nextElementSibling||e.nextSibling,p(e)),e};t["default"]={props:{visible:{type:Boolean,twoWay:!0,"default":!1},transition:{type:String,"default":""},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,"default":!1},lockScroll:{type:Boolean,"default":!0},modalClass:{},closeOnPressEscape:{type:Boolean,"default":!1},closeOnClickModal:{type:Boolean,"default":!1}},created:function(){this.transition&&c(this.transition)},compiled:function(){this._popupId="popup-"+a++,d["default"].register(this._popupId,this)},beforeDestroy:function(){d["default"].deregister(this._popupId),d["default"].closeModal(this._popupId)},data:function(){return{bodyOverflow:null,rendered:!1}},watch:{visible:function(e){var t=this;if(e){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,l["default"].nextTick(function(){t.open()}))}else this.close()}},methods:{open:function(e){var t=this;if(!this.rendered)return this.rendered=!0,void(this.visible=!0);var o=(0,s.merge)({},this,e);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var n=Number(o.openDelay);n>0?this._openTimer=setTimeout(function(){t._openTimer=null,t.doOpen(o)},n):this.doOpen(o)},doOpen:function(e){if(!this.willOpen||this.willOpen()){this._opening=!0,this.visible=!0;var t=f(this.$el),o=e.modal,n=e.zIndex;n&&(d["default"].zIndex=n),o&&(this._closing&&(d["default"].closeModal(this._popupId),this._closing=!1),d["default"].openModal(this._popupId,d["default"].nextZIndex(),t,e.modalClass),e.lockScroll&&(this.bodyOverflow||(this.bodyOverflow=document.body.style.overflow),document.body.style.overflow="hidden")),"static"===getComputedStyle(t).position&&(t.style.position="absolute"),o?t.style.zIndex=d["default"].nextZIndex():n&&(t.style.zIndex=n),this.onOpen&&this.onOpen(),this.transition||this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var e=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var t=Number(this.closeDelay);t>0?this._closeTimer=setTimeout(function(){e._closeTimer=null,e.doClose()},t):this.doClose()}},doClose:function(){this.visible=!1,this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&this.modal&&"hidden"!==this.bodyOverflow&&(document.body.style.overflow=this.bodyOverflow),this.transition||this.doAfterClose()},doAfterClose:function(){d["default"].closeModal(this._popupId),this._closing=!1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){var e=l.modalDom;return e||(e=document.createElement("div"),l.modalDom=e,e.addEventListener("touchmove",function(e){e.preventDefault(),e.stopPropagation()})),e},n=function(){l.doOnModalClick&&l.doOnModalClick()},i={},l={zIndex:1e3,getInstance:function(e){return i[e]},register:function(e,t){e&&t&&(i[e]=t)},deregister:function(e){e&&(i[e]=null,delete i[e])},nextZIndex:function(){return l.zIndex++},modalStack:[],doOnModalClick:function(){var e=l.modalStack[l.modalStack.length-1];if(e){var t=l.getInstance(e.id);t&&t.closeOnClickModal&&t.close()}},openModal:function(e,t,i,l){if(e&&void 0!==t){for(var s=this.modalStack,r=0,d=s.length;r<d;r++){var a=s[r];if(a.id===e)return}var u=o();if(setTimeout(function(){u.addEventListener("click",n)},300),u.classList.add("v-modal"),u.classList.add("v-modal-enter"),l){var c=l.trim().split(/\s+/);c.forEach(function(e){return u.classList.add(e)})}setTimeout(function(){u.classList.remove("v-modal-enter")},200),i&&i.parentNode&&11!==i.parentNode.nodeType?i.parentNode.appendChild(u):document.body.appendChild(u),t&&(u.style.zIndex=t),u.style.display="",this.modalStack.push({id:e,zIndex:t,modalClass:l})}},closeModal:function(e){var t=this.modalStack,i=o();if(t.length>0){var l=t[t.length-1];if(l.id===e){if(l.modalClass){var s=l.modalClass.trim().split(/\s+/);s.forEach(function(e){return i.classList.remove(e)})}t.pop(),t.length>0&&(i.style.zIndex=t[t.length-1].zIndex)}else for(var r=t.length-1;r>=0;r--)if(t[r].id===e){t.splice(r,1);break}}0===t.length&&(i.classList.add("v-modal-leave"),setTimeout(function(){0===t.length&&(i.parentNode&&i.parentNode.removeChild(i),i.style.display="none"),i.removeEventListener("click",n),i.classList.remove("v-modal-leave")},200))}};window.addEventListener("keydown",function(e){if(27===e.keyCode&&l.modalStack.length>0){var t=l.modalStack[l.modalStack.length-1];if(!t)return;var o=l.getInstance(t.id);o.closeOnPressEscape&&o.close()}}),t["default"]=l},function(e,t){"use strict";function o(e){for(var t=1,o=arguments.length;t<o;t++){var n=arguments[t];for(var i in n)if(n.hasOwnProperty(i)){var l=n[i];void 0!==l&&(e[i]=l)}}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.merge=o},function(e,t){},function(t,o){t.exports=e},function(e,t,o){e.exports=o(0)}])});
		//# sourceMappingURL=index.js.map
	
	/***/ },
	
	/***/ 9:
	/***/ function(module, exports) {
	
		module.exports = __webpack_require__(50);
	
	/***/ },
	
	/***/ 10:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 151:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		module.exports = __webpack_require__(152);
	
	/***/ },
	
	/***/ 152:
	/***/ function(module, exports, __webpack_require__) {
	
		var __vue_script__, __vue_template__
		__webpack_require__(153)
		__vue_script__ = __webpack_require__(155)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] packages/popup/src/popup.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(156)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
	
	
	/***/ },
	
	/***/ 153:
	/***/ function(module, exports) {
	
		// removed by extract-text-webpack-plugin
	
	/***/ },
	
	/***/ 155:
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
	
		var _vuePopup = __webpack_require__(8);
	
		var _vuePopup2 = _interopRequireDefault(_vuePopup);
	
		__webpack_require__(10);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
		exports.default = {
		  name: 'mt-popup',
	
		  mixins: [_vuePopup2.default],
	
		  props: {
		    modal: {
		      default: true
		    },
	
		    closeOnClickModal: {
		      default: true
		    },
	
		    lockScroll: {
		      default: false
		    },
	
		    popupTransition: {
		      type: String,
		      default: 'popup-slide'
		    },
	
		    position: {
		      type: String,
		      default: ''
		    }
		  },
	
		  compiled: function compiled() {
		    if (this.popupTransition !== 'popup-fade') {
		      this.popupTransition = 'popup-slide-' + this.position;
		    }
		  },
		  ready: function ready() {
		    if (this.visible) {
		      this.rendered = true;
		      this.open();
		    }
		  }
		};
	
	/***/ },
	
	/***/ 156:
	/***/ function(module, exports) {
	
		module.exports = "\n<div v-show=\"visible\" class=\"mint-popup\" :class=\"[position ? 'mint-popup-' + position : '']\" :transition=\"popupTransition\">\n  <slot></slot>\n</div>\n";
	
	/***/ }
	
	/******/ });

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../.0.25.0@css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../.0.25.0@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n.picker {\n  overflow: hidden;\n}\n\n.picker-toolbar {\n  height: 40px;\n}\n\n.picker-items {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0;\n  text-align: right;\n  font-size: 24px;\n  position: relative;\n}\n\n.picker-center-highlight {\n  height: 36px;\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  top: 50%;\n  margin-top: -18px;\n  pointer-events: none\n}\n\n.picker-center-highlight:before, .picker-center-highlight:after {\n  content: '';\n  position: absolute;\n  height: 1px;\n  width: 100%;\n  background-color: #eaeaea;\n  display: block;\n  z-index: 15;\n  -webkit-transform: scaleY(0.5);\n          transform: scaleY(0.5);\n}\n\n.picker-center-highlight:before {\n  left: 0;\n  top: 0;\n  bottom: auto;\n  right: auto;\n}\n\n.picker-center-highlight:after {\n  left: 0;\n  bottom: 0;\n  right: auto;\n  top: auto;\n}\n\n\n\n\n\n\n\n\n\n\n.picker-slot {\n  font-size: 18px;\n  overflow: hidden;\n  position: relative;\n  max-height: 100%\n}\n\n.picker-slot.picker-slot-left {\n  text-align: left;\n}\n\n.picker-slot.picker-slot-center {\n  text-align: center;\n}\n\n.picker-slot.picker-slot-right {\n  text-align: right;\n}\n\n.picker-slot.picker-slot-divider {\n  color: #000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center\n}\n\n.picker-slot-wrapper {\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.picker-slot-wrapper.dragging, .picker-slot-wrapper.dragging .picker-item {\n  -webkit-transition-duration: 0s;\n          transition-duration: 0s;\n}\n\n.picker-item {\n  height: 36px;\n  line-height: 36px;\n  padding: 0 10px;\n  white-space: nowrap;\n  position: relative;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #707274;\n  left: 0;\n  top: 0;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-transition-duration: .3s;\n          transition-duration: .3s;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.picker-slot-absolute .picker-item {\n  position: absolute;\n}\n\n.picker-item.picker-item-far {\n  pointer-events: none\n}\n\n.picker-item.picker-selected {\n  color: #000;\n  -webkit-transform: translate3d(0, 0, 0) rotateX(0);\n          transform: translate3d(0, 0, 0) rotateX(0);\n}\n\n.picker-3d .picker-items {\n  overflow: hidden;\n  -webkit-perspective: 700px;\n          perspective: 700px;\n}\n\n.picker-3d .picker-item, .picker-3d .picker-slot, .picker-3d .picker-slot-wrapper {\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d\n}\n\n.picker-3d .picker-slot {\n  overflow: visible\n}\n\n.picker-3d .picker-item {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out\n}\n", ""]);
	
	// exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../.0.25.0@css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../.0.25.0@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".v-modal-enter{-webkit-animation:v-modal-in .2s ease;animation:v-modal-in .2s ease}.v-modal-leave{-webkit-animation:v-modal-out .2s ease forwards;animation:v-modal-out .2s ease forwards}@-webkit-keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-in{0%{opacity:0}}@-webkit-keyframes v-modal-out{to{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000}\n/*# sourceMappingURL=popup.css.map*/\n\n\n\n\n\n\n.mint-popup {\n  position: fixed;\n  background: #fff;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.mint-popup-top {\n  top: 0;\n  right: auto;\n  bottom: auto;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n\n.mint-popup-right {\n  top: 50%;\n  right: 0;\n  bottom: auto;\n  left: auto;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n\n.mint-popup-bottom {\n  top: auto;\n  right: auto;\n  bottom: 0;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, 0, 0);\n          transform: translate3d(-50%, 0, 0);\n}\n\n.mint-popup-left {\n  top: 50%;\n  right: auto;\n  bottom: auto;\n  left: 0;\n  -webkit-transform: translate3d(0, -50%, 0);\n          transform: translate3d(0, -50%, 0);\n}\n\n.popup-slide-top-transition, .popup-slide-right-transition, .popup-slide-bottom-transition, .popup-slide-left-transition {\n  -webkit-transition: -webkit-transform .3s ease-out 100ms;\n  transition: -webkit-transform .3s ease-out 100ms;\n  transition: transform .3s ease-out 100ms;\n  transition: transform .3s ease-out 100ms, -webkit-transform .3s ease-out 100ms;\n}\n\n.popup-slide-top-enter, .popup-slide-top-leave {\n  -webkit-transform: translate3d(-50%, -100%, 0);\n          transform: translate3d(-50%, -100%, 0);\n}\n\n.popup-slide-right-enter, .popup-slide-right-leave {\n  -webkit-transform: translate3d(100%, -50%, 0);\n          transform: translate3d(100%, -50%, 0);\n}\n\n.popup-slide-bottom-enter, .popup-slide-bottom-leave {\n  -webkit-transform: translate3d(-50%, 100%, 0);\n          transform: translate3d(-50%, 100%, 0);\n}\n\n.popup-slide-left-enter, .popup-slide-left-leave {\n  -webkit-transform: translate3d(-100%, -50%, 0);\n          transform: translate3d(-100%, -50%, 0);\n}\n\n.popup-fade-transition {\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n\n.popup-fade-enter, .popup-fade-leave {\n  opacity: 0;\n}\n", ""]);
	
	// exports


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(62);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/.0.25.0@css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../node_modules/.0.25.0@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, "/* Cell Component */\n\n/* Header Component */\n\n/* Button Component */\n\n/* Tab Item Component */\n\n/* Tabbar Component */\n\n/* Navbar Component */\n\n/* Checklist Component */\n\n/* Radio Component */\n\n/* z-index */\n\n.mint-cell-swipe .mint-cell-wrapper, .mint-cell-swipe .mint-cell-left, .mint-cell-swipe .mint-cell-right {\n\n    -webkit-transition: -webkit-transform 150ms ease-in-out;\n\n    transition: -webkit-transform 150ms ease-in-out;\n\n    transition: transform 150ms ease-in-out;\n\n    transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\n}\n\n.mint-cell-swipe-buttongroup {\n\n    height: 100%;\n}\n\n.mint-cell-swipe-button {\n\n    height: 100%;\n\n    display: inline-block;\n\n    padding: 0 20px;\n\n    line-height: 48px;\n    font-size:12px;\n}\n\n.mint-cell-text{\n  font-size:14px;\n  color:#222;\n}\n.mint-cell-label{\n  transform: scale(0.9) translateX(-5.5%);\n\n}\n\n.mint-cell-value{\n  font-size:12px;\n  line-height: 16px;\n}\n\n.cell-title-icon{\n  transform: rotate(180deg);\n  -webkit-transform:rotate(180deg);\n  font-size:16px;\n  position:relative;\n  top:2px;\n  left:2px;\n}\n.mint-cell-gray{\n  background:#f5f5f5;\n}\n", ""]);
	
	// exports


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/.0.25.0@css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../../node_modules/.0.25.0@css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	
	
	// module
	exports.push([module.id, ".mint-toast{position:fixed;max-width:80%;border-radius:5px;background:rgba(0,0,0,.7);color:#fff;box-sizing:border-box;text-align:center;z-index:1000}.mint-toast.is-placebottom{bottom:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.mint-toast.is-placemiddle{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.mint-toast.is-placetop{top:50px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.mint-toast-icon{display:block;text-align:center;font-size:56px}.mint-toast-text{font-size:14px;display:block;text-align:center}.mint-toast-pop-transition{-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.mint-toast-pop-enter, .mint-toast-pop-leave{opacity:0}", ""]);
	
	// exports


/***/ },
/* 65 */,
/* 66 */,
/* 67 */
/***/ function(module, exports) {

	var __vue_script__, __vue_template__
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map