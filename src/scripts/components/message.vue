<template>
  <div>
    <header id="header" class="borderBottom">
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
                  私信
                </div>
              </div>

            </div>
            <div class="swiper-slide">
              提醒
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import { tabChanger } from "../vuex/actions";
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
      }
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
        setTimeout(function(){
          messageScroll.refresh();
        },1000);

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
