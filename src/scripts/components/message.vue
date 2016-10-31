<template>
  <div>
    <header id="header" class="Bottom">
      <ul>
        <li class="Active text"  v-on:click="addFriends">{{head.left}}</li>
        <li class="switch headCenter">
          <template v-for="item in head.center">
            <span
            class="switchStyle" v-bind:class="{'left':item.isLeft,'right':item.isRight,'switchStyleActive':item.isActive}" v-on:click="switchPage($index)">{{item.name}}</span>
          </template>
        </li>
        <li class="search middleFont">{{head.right}}</li>
      </ul>
    </header>
    <div id='body'>
      <div class="container-box commonColor">
        <div class="swiper-container message-swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide commonColor" id="swiperPageOne">

              <div id="message-scroll" class="scroll-view">
                <div class="scroll">

                  <div class="box-box">
                    <template v-for="item in sixinList">
                      <mt-cell-swipe
                        v-bind:title="item"
                        :right="[
                          {
                            content: '删除',
                            style: { background: 'red', color: '#fff' },

                          }
                        ]">
                          <Slot></Slot>
                        </mt-cell-swipe>
                    </template>
                  </div>

                </div>
              </div>

            </div>
            <div class="swiper-slide">
              <div id="tixing-scroll" class="scroll-view">
                <div class="scroll">

                  <div class="message-box">
                    <template v-for="item in tixingList">
                      <div class="message-cell Bottom">
                        <div class="cell-left">img</div>
                        <div class="cell-center">{{item}}</div>
                        <div class="cell-right"><i class="iconfont reverse">&#xe604;</i></div>
                      </div>
                    </template>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import "../libs/cell-swipe/style.css";

import { tabChanger } from "../vuex/actions";
import { CellSwipe } from 'mint-ui';

Vue.component(CellSwipe.name, CellSwipe);

let messageSwiper ="";
let messageScroll = "";

export default{
  vuex: {
    actions: {
      change: tabChanger
    }
  },
  data(){
    return {
      list:[],
      head:{
        left:'添加好友',
        right:'通讯录',
        center:[
          {'name':'私信',isLeft:true,isRight:false,isActive:true},
          {'name':'提醒',isLeft:false,isRight:true,isActive:false}
        ]
      },
      sixinList:["错过的七月","火柴盒官方","未关注人私信"],
      tixingList:["邀请","转发与邀请","评论","赞","新粉丝","火柴盒小助手"]
    }
  },
  ready(){
    this.change(2);
    this.scrollView();
    this.swiperView();
    this.renderFriends();
  },
  methods:{
    addFriends(){
    },
    renderFriends(){
      var self = this;
      self.$http.get('/mock/main/list.json').then((response) => {
        self.list = response.data;
        self.$nextTick(function(){
          messageScroll.refresh();
        });
      }, (response) => {
        console.log('首页数据加载出错');
      });
    },
    scrollView(){
      messageScroll = new IScroll('#message-scroll',{
        mouseWheel:true,
        click:true,
        preventDefault:false//默认事件打开,a标签的点击事件有效.
      });
    },
    swiperView(){
      var self = this;
      messageSwiper = new Swiper('.message-swiper', {
        touchRatio:0,
        onSlideChangeStart: function(swiper){
          self.switchPage(swiper.activeIndex);
        }
      });
    },
    //点击切换
    switchPage(index){
      messageSwiper.slideTo(index);
      for(let i = 0;i<this.head.center.length;i++){
        this.head.center[i].isActive = false;
        if(i==index){
          this.head.center[i].isActive = true;
        }
      }
    }
  }
}
</script>
