<template>
  <div class="container-box">
    <header id="header" class="borderBottom">
      <ul>
        <li class="Active text" v-on:click="backPrepage"><span class="back iconfont">&#xe604;</span></li>
        <li class="switch headCenter middleFont">
          {{user.userName}}
        </li>
        <li><span class="more iconfont">&#xe677;</span></li>
      </ul>
    </header>
    <div id="body" class="background1">

      <div id="userDongtai-scroll" class="scroll-view">
        <div class="scroll">
          <!--  下拉刷新-->
          <div class="head freshColor" v-if="slide.isFreshShow" id="fresh-head">
            <img v-bind:src="slide.isF == false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
            <span class="smallFont">下拉刷新...</span>
          </div>
          <!-- 用户头信息 -->
          <div class="userInfo background1">
            <div class="headImgBox">
              <div class = 'headImg'><img class="background3" v-bind:src="user.headImg"/></div>
            </div>
            <div class="mine-item userName textColor2"><span class="middleFont">{{user.userName}}</span></div>
            <div class="mine-item userID textColor4">
              <i class="iconfont">&#xe689;</i>
              <span>ID:{{user.userID}}</span>
            </div>
            <ul class="gzsx smallFont" v-bind:class="{active:isGuanZhu}">
              <li v-on:click="changeGuanzhu">
                <i v-if="!isGuanZhu">{{stable.jia}}</i>
                <span>{{stable.guanzhu}}</span>
              </li>
              <li>
                <i class="iconfont">&#xe63a;</i>
                <span>{{stable.sixin}}</span>
              </li>
            </ul>
            <div class="mine-item biaoqian textColor2"><span>{{user.sign}}</span></div>

            <div class="box borderBottom">
              <div class="mine-item qiehuan border5">
                <template v-for="item in stable.innerItem">
                  <div class="inner-item" v-bind:class="item.active?'qiehuan-active':''" v-on:click="changeTab($index)">
                    <span class="smallFont">{{item.name}}</span>
                    <img data-name="one" v-bind:src="stable.xialaImg"/>
                  </div>
                </template>

              </div>
            </div>
          </div>
          <!-- 左右切换条 -->
          <template v-for="item in stable.innerItem">
            <!-- 左边 -->
            <div v-if="(item.active && $index==0)" class="qiehuan-box">
    <!-- 一条tableviewCell -->
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
    <!-- 一条tableviewCell -->
            </div>
            <!-- 右边 -->
            <div v-if="(item.active && $index==1)" class="qiehuan-box">
              bbb
            </div>
          </template>

          <div class="foot freshColor" id="fresh-foot" v-if="slide.isLoadShow">
            <img v-bind:src="slide.isS==false ? '/images/arrow.png':'/images/ajax-loader.gif'"/>
            <span class="smallFont">上拉加载更多...</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
<script>

import commonUtil from "../utils/commonUtil.js";
let scroll = "";


export default {

  data(){
    return {
      id:this.$route.params.id,
      user:{},
      isGuanZhu:false,
      stable:{
        editIcon:"/images/mine/pan.png",
        guanzhu:"关注",
        sixin:"私信",
        jia:"+",
        innerItem:[
          {active:true,name:"帖子"},
          {active:false,name:"话题"}
        ],
        xialaImg:"/images/mine/xiala.png"
      },
      list:[], //列表数据
      loadHeight:35,
      //刷新，加载图标是否显示,是否在转动
      slide:{isFreshShow:false,isLoadShow:false,isF:false,isS:false}
    }
  },
  ready:function(){
    this.scrollView();
    this.renderUserInfo(this.id);
    this.renderDetail(this.id,false);
    this.scrollAction(this.id);
    // this.test(); //测试json-server

  },
  computed:{
    App:{
      Init:function(){
          App.State(title,url);
          App.StateListen();
      },
      State:function(title,url){//无刷新改变URL
          if(window.history.pushState){
              window.history.pushState({title:title,url:url},title,url);
          }else{
              location.href=url;
          }
          document.title=title;
      },
      StateListen:function(){//监听地址
          var url=location.href.toString().split("/");

          window.addEventListener('popstate', function(e){
            if (history.state){
              var url=e.state.url;
              //根据url值进行相应操作
            }
          },false);
      }
    }
  },
  methods:{
    scrollView(){
      scroll = new IScroll('#userDongtai-scroll',{
        probeType:3,
        mouseWheel:true,
        click:true,
        preventDefault:false//默认事件打开,a标签的点击事件有效.
      });
    },
    //获取用户发表的说说
    renderDetail(id,isFresh,fn){
      var self = this;
      this.$http.get('/mock/dongtai/user'+id+'.json').then((response)=>{
        //判断是否有数据
        if(response.data.length){
          if(isFresh){
            self.list = response.data.concat(self.list);
          }else{
            self.list = self.list.concat(response.data);
          }
        }
        //刷新iscroll
        self.$nextTick(function () {
          commonUtil.isAllLoaded("#userDongtai-scroll",function(){
            scroll.refresh();
            if(fn){
              return fn();
            }
          });
        });
      },(response)=>{

      });
    },
    scrollAction(id){
      var self = this;
      var isFresh = false;//是否刷新;
      var isLoad = false;//是否加载;
      scroll.on('scroll',function(){
        var maxY = this.maxScrollY - this.y;
        //刷新
        if(this.y > self.loadHeight){
          self.slide.isFreshShow = true;
          setTimeout(function(){
            self.slide.isF = true;//变成刷新图标
          },300);
          isFresh = true;
          return;
        }
        //加载
        if(maxY > self.loadHeight){
          self.slide.isLoadShow = true;
          self.slide.isS = true;//变成刷新图标
          isLoad = true;
          return;
        }
      });
      scroll.on('scrollEnd',function(){
        //刷新操作
        if(isFresh){
          isFresh = false;
          self.renderDetail(id,true,function(){
            self.slide.isFreshShow = false;
            self.slide.isF = false;//变成箭头图标
          });
        }
        //上拉加载
        if(isLoad){
          isLoad = false;
          self.renderDetail(id,false,function(){
            // self.slide.isLoadShow = false;
            // self.slide.isS = false;//变成箭头图标
            scroll.refresh();

          });
        }
      });
    },

    //获取用户信息
    renderUserInfo(id){

      this.$http.get('/mock/userInfo/user'+id+'.json').then((response)=>{
        this.user = response.data;
        var flag=false;
        //是否存在
        if(response.data.fensiID){
          //这里是用好友的粉丝的id跟自己的id比较，稍后再修改
          for(let i = 0;i<response.data.fensiID.length;i++){
            if(id==response.data.fensiID[i]){
              flag = true;
              break;
            }
          }
          if(flag){
            isGuanZhu = true;
          }
        }
      },()=>{});
    },
    //切换帖子和话题
    changeTab(index){
      for(let i = 0;i<this.stable.innerItem.length;i++){
        this.stable.innerItem[i].active = false;
        if(index==i){
          this.stable.innerItem[i].active = true;
        }
      }
    },
    //是否关注
    changeGuanzhu(){
      this.isGuanZhu = !this.isGuanZhu;
    },
    //回到上一页
    backPrepage(){
      window.history.go(-1);
    },
    test(){
      // json-server 测试
      // json-server --watch mock.js  --port 3004.
      this.$http.get("/daili/list").then((response)=>{
        console.log(response.data);
      },()=>{});
    }
  }
}

</script>
