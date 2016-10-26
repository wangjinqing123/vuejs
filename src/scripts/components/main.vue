<!-- v-link="{name:'detailname', params:{id:123}}" -->
<template>
  <div>
    <header id="header" class="borderBottom">
      <ul>
        <li class="Active text" v-on:click="styleSheet">{{headLeft}}</li>
        <li class="switch headCenter">
          <template v-for="item in headSwitch">
            <span
            class="switchStyle" v-bind:class="{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}" v-on:click="switchPage($index)">{{item.name}}</span>
          </template>
        </li>
        <li class="search"><span class="icon iconfont">{{{headRight}}}</span></li>
      </ul>
    </header>
    <div id="body">

      <div class="container-box commonColor">
        <div class="swiper-container index-swiper">
          <div class="swiper-wrapper">
            <div v-for="slide in swiperSildes" class="swiper-slide commonColor" id="swiperPageOne">


              <template v-if="$index==0">
                <!-- 加载框 -->
                <div v-loading="isLoading" class="loading"></div>

                <div id="w-index-scroll" class="scroll-view">
                  <div class="scroll">

                    <div class="head freshColor" v-if="slide.isFreshShow" id="fresh-head">
                      <img v-bind:src="slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
                      <span class="smallFont">下拉刷新...</span>
                    </div>

                    <div class="item commonColor borderBottom"  v-for="item in list">
                      <div class="tuijian-box smallFont">
                        <span class="tuijianren cellDeepColor" v-if="item.tuijianzhe">{{item.tuijianzhe}}</span>
                        <span class="tuijian textColor2" v-if="item.tuijian">{{item.tuijian}}</span>
                      </div>
                      <div class="title  cellDeepColor">
                        <span class="middleFont">{{item.title}}</span>
                      </div>
                      <div class="user-info">
                        <div class="user-box">
                          <img class="user-icon" v-bind:src="item.userIcon"></img>
                        </div>
                        <!-- 头像 -->
                        <div class="head-box">
                          <img class="head-img"
                           v-link="{name:'userDongtai',params:{id:item.id}}"                    v-bind:src="item.headimg"></img>
                          <span class="user-name textColor2 smallFont">{{item.username}}</span>
                        </div>
                        <div>
                          <img class="other" v-bind:src="item.xiala"></img>
                        </div>
                      </div>
                       <div v-link="{name:'userDongtai',params:{id:item.id}}"  class="image-box" v-if="item.image!=undefined">
                        <img v-bind:src="item.image"></img>
                      </div>
                      <div class="span-box" v-if="item.desc">
                        <span class="textColor3 smallFont">{{item.desc}}</span>
                      </div>
                      <div class="bottom smallFont">
                        <div class="bottom-item right">
                          <span class="time textColor2">{{item.time}}</span>
                        </div>
                        <div class="bottom-item">
                          <div class="icon zhuanfa-box">
                            <span class="zhuanfa textColor4">{{item.zhuanfaCount}}</span>
                            <img v-bind:src="item.zhuanfa"></img>
                          </div>
                          <div class="icon pinglun-box">
                            <span class="pinglun textColor4">{{item.pinglunCount}}</span>
                            <img v-bind:src="item.pinglun"></img>
                          </div>
                          <div class="icon zan-box">
                            <span class="zan textColor4">{{item.zanCount}}</span>
                            <img v-bind:src="item.zan"></img>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="foot freshColor" id="fresh-foot" v-if="slide.isLoadShow">
                      <img v-bind:src="slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
                      <span class="smallFont">上拉加载更多...</span>
                    </div>

                  </div>
                </div>
              </template>
              <template v-if="$index==1">
                <!-- 加载框 -->
                <div v-loading="isLoading2" class="loading"></div>

                <div id="w-index-scroll2" class="scroll-view">
                  <div class="scroll">

                    <div class="head freshColor" v-if="slide.isFreshShow" id="fresh-head">
                      <img v-bind:src="slide.isF==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
                      <span class="smallFont">下拉刷新...</span>
                    </div>

                    <div class="item commonColor borderBottom"  v-for="item in list2">
                      <div class="tuijian-box smallFont">
                        <span class="tuijianren cellDeepColor" v-if="item.tuijianzhe">{{item.tuijianzhe}}</span>
                        <span class="tuijian textColor2" v-if="item.tuijian">{{item.tuijian}}</span>
                      </div>
                      <div class="title  cellDeepColor">
                        <span class="middleFont">{{item.title}}</span>
                      </div>
                      <div class="user-info">
                        <div class="user-box">
                          <img class="user-icon" v-bind:src="item.userIcon"></img>
                        </div>
                        <!-- 头像 -->
                        <div class="head-box">
                          <img class="head-img" v-link="{name:'userDongtai',params:{id:item.id}}" v-bind:src="item.headimg"></img>
                          <span class="user-name textColor2 smallFont">{{item.username}}</span>
                        </div>
                        <div>
                          <img class="other" v-bind:src="item.xiala"></img>
                        </div>
                      </div>
                      <!-- 大图片 -->
                       <div class="image-box" v-link="{name:'userDongtai',params:{id:item.id}}" v-if="item.image!=undefined">
                        <img v-bind:src="item.image"></img>
                      </div>
                      <div class="span-box" v-if="item.desc">
                        <span class="textColor3 smallFont">{{item.desc}}</span>
                      </div>
                      <div class="bottom smallFont">
                        <div class="bottom-item right">
                          <span class="time textColor2">{{item.time}}</span>
                        </div>
                        <div class="bottom-item">
                          <div class="icon zhuanfa-box">
                            <span class="zhuanfa textColor4">{{item.zhuanfaCount}}</span>
                            <img v-bind:src="item.zhuanfa"></img>
                          </div>
                          <div class="icon pinglun-box">
                            <span class="pinglun textColor4">{{item.pinglunCount}}</span>
                            <img v-bind:src="item.pinglun"></img>
                          </div>
                          <div class="icon zan-box">
                            <span class="zan textColor4">{{item.zanCount}}</span>
                            <img v-bind:src="item.zan"></img>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="foot freshColor" id="fresh-foot" v-if="slide.isLoadShow">
                      <img v-bind:src="slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
                      <span class="smallFont">上拉加载更多...</span>
                    </div>

                  </div>
                </div>
              </template>

            </div>

          </div>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
//loading 加载框
import loading from '../libs/vue-loading.js';

import commonUtil from "../utils/commonUtil.js";
//状态管理
import {isGuided} from "../vuex/actions"; //是否已经切换导航页
import { tabChanger } from "../vuex/actions"; //tabbar的切换


let mySwiper ="";
let indexScroll = "";
let indexScroll2 = "";

export default{
  //指令
  directives: {
    loading:loading
  },
  vuex: {
    actions: {
      change: tabChanger,
      isGuided:isGuided
    }
  },
  data(){
    return {
      isSwiper:true,//标记是否滑动到第二页;
      list:[], //列表数据
      list2:[], //列表数据
      headLeft:"发帖",
      headRight:"&#xe87f;",
      headSwitch:[
        {name:"好友",isLeft:true,isRight:false,isActive:true},
        {name:"欢喜",isLeft:false,isRight:true,isActive:false}
      ],
      swiperSildes:[
        {isFreshShow:false,isLoadShow:false,isF:false,isS:false},
        {isFreshShow:false,isLoadShow:false,isF:false,isS:false}
      ],
      loadHeight:35,//刷新加载的高度
      isLoading:true,//中间的加载框
      isLoading2:true//中间的加载框
    }
  },
  created(){},
  compiled(){},
  ready:function(){
    //状态管理
    this.change(0);
    this.isGuided(true);
    //IScroll
    this.scrollView();
    this.scrollView2();
    //Swiper
    this.swiperView();
    //数据渲染
    this.renderFriends(true,'/mock/main/list.json');//渲染首页面
    //下拉刷新--上拉加载
    this.scrollAction();//滚动事件绑定
  },
  computed:{
    //计算属性
  },
  methods:{
    //渲染数据,isFresh刷新/加载,路径,回调
    renderFriends:function(isFresh,url,fn){

      var self = this;
      self.$http.get(url).then((response) => {
        if(isFresh){
          self.list = response.data.concat(self.list);
        }else{
          self.list = self.list.concat(response.data);
        }
        //刷新iscroll
        self.$nextTick(function () {
          //加载框消失
          self.isLoading = false;
          commonUtil.isAllLoaded("#w-index-scroll",function(){
            indexScroll.refresh();
            if(fn){
              return fn();
            }
          });
        });

      }, (response) => {

      });
    },
    styleSheet(){
      console.log("sdf");
    },

    swiperView(){
      var self = this;
      mySwiper = new Swiper('.index-swiper', {
        onSlideChangeStart: function(swiper){
          self.switchPage(swiper.activeIndex);
        }
      });
    },
    scrollView(){
      indexScroll = new IScroll('#w-index-scroll',{
        probeType:3,
        mouseWheel:true,
        click:true,
        preventDefault:false//默认事件打开,a标签的点击事件有效.
      });
    },
    switchPage(index){
      mySwiper.slideTo(index);
      for(let i = 0;i<this.headSwitch.length;i++){
        this.headSwitch[i].isActive = false;
        if(i==index){
          this.headSwitch[i].isActive = true;
        }
      }
      //swiper是否滑动
      if(this.isSwiper){
        this.isSwiper = false;
        this.renderLike(true,'/mock/main/listLike.json');
      }
    },
    renderLike(isFresh,url,fn){
      var self = this;
      self.$http.get(url).then((response) => {
        if(isFresh){
          self.list2 = response.data.concat(self.list2);
        }else{
          self.list2 = self.list2.concat(response.data);
        }
        //刷新iscroll
        self.$nextTick(function () {
          //加载框消失
          self.isLoading2 = false;
          commonUtil.isAllLoaded("#w-index-scroll2",function(){
            indexScroll2.refresh();
            if(fn){
              return fn();
            }
          });
        });
      }, (response) => {

      });
      this.scrollLikeAction();
    },
    scrollView2(){
      indexScroll2 = new IScroll('#w-index-scroll2',{
        probeType:3,
        mouseWheel:true,//鼠标滚动支持
        click:true,
        // snap:true,
        preventDefault:false//默认事件打开,a标签的点击事件有效.
      });
    },

    scrollAction(){
      var self = this;
      var isFresh = false;//是否刷新;
      var isLoad = false;//是否加载;
      indexScroll.on('scroll',function(){
        var maxY = this.maxScrollY - this.y;

        if(this.y > self.loadHeight){
          self.swiperSildes[0].isFreshShow = true;
          setTimeout(function(){
            self.swiperSildes[0].isF = true;//变成刷新图标
          },300);
          isFresh = true;
          return;
        }
        if(maxY > self.loadHeight){
          self.swiperSildes[0].isLoadShow = true;
          self.swiperSildes[0].isS = true;//变成刷新图标
          isLoad = true;
          return;
        }
      });
      indexScroll.on('scrollEnd',function(){
        if(isFresh){
          isFresh = false;
          self.renderFriends(true,'/mock/main/fresh.json',function(){
            self.swiperSildes[0].isFreshShow = false;
            self.swiperSildes[0].isF = false;//变成箭头图标
          });
        }
        if(isLoad){
          isLoad = false;
          self.renderFriends(false,'/mock/main/load.json',function(){
            // self.swiperSildes[0].isLoadShow = false;
            // self.swiperSildes[0].isS = false;//变成箭头图标
            indexScroll.refresh();

          });
        }
      });
    },
    scrollLikeAction(){
      var self = this;
      var isFresh = false;//是否刷新;
      var isLoad = false;//是否加载;
      indexScroll2.on('scroll',function(){
        var maxY = this.maxScrollY - this.y;

        if(this.y > self.loadHeight){
          self.swiperSildes[1].isFreshShow = true;
          setTimeout(function(){
            self.swiperSildes[1].isF = true;//变成刷新图标
          },300);
          isFresh = true;
          return;
        }
        if(maxY > self.loadHeight){
          // self.swiperSildes[1].isLoadShow = true;
          // self.swiperSildes[1].isS = true;//变成刷新图标
          isLoad = true;
          return;
        }
      });
      indexScroll2.on('scrollEnd',function(){
        if(isFresh){
          isFresh = false;
          self.renderLike(true,'/mock/main/likeFresh.json',function(){
            self.swiperSildes[1].isFreshShow = false;
            self.swiperSildes[1].isF = false;//变成箭头图标
          });
        }
        if(isLoad){
          isLoad = false;
          self.renderLike(false,'/mock/main/likeLoad.json',function(){
            // self.swiperSildes[1].isLoadShow = false;
            // self.swiperSildes[1].isS = false;//变成箭头图标
            indexScroll2.refresh();
          });
        }
      });
    }
  }
}

</script>
