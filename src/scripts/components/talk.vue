<!-- v-link="{name:'detailname', params:{id:123}}" -->
<template>
  <div>
    <header id="header" class="borderBottom">
      <ul>
        <li class="Active text"  v-on:click="createTalk">{{head.left}}</li>
        <li class="input headCenter">
          <input type="text" class="background2 middleFont"  :placeholder="head.center">
        </li>
        <li class="middleFont">{{head.right}}</li>
      </ul>
    </header>
    <div id="body">
      <div class="swiper-container talk-swiper">
        <div class="swiper-wrapper">
          <template v-for="item in swiperImgs">
            <div class="swiper-slide"><img v-bind:src="item.imgSrc" alt=""></div>
          </template>
        </div>
        <div class="swiper-pagination talk-pagination">
          <template v-for="item in paginationActive">
            <span class="custom-pagination" v-bind:class="{active:item.isActive}" v-on:click="swiperPage($index)"></span>
          </template>
        </div>
      </div>
      <div class="cell-body">
        <!--  -->
        <div class="swiper-container cell">
          <div class="swiper-wrapper">
            <div class="swiper-slide cellMain">main</div>
            <div class="swiper-slide cellSmall">
                <div class="item" data-swiper-parallax="-100">Slide 1</div>
                <div class="item last" data-swiper-parallax="-100">Slide 2</div>
            </div>

          </div>
        </div>
        <!--  -->
      </div>
    </div>
  </div>
</template>
<script>


//
import { tabChanger } from "../vuex/actions";
//vue-touch


export default{
  vuex: {
    actions: {
      change: tabChanger
    }
  },
  data(){
    return {
      event: '',
      head:{
        left:'创建话题',
        right:'分类',
        center:"搜索话题/昵称/ID"
      },
      swiperImgs:[],
      paginationActive:[{isActive:true},{isActive:false},{isActive:false},{isActive:false}],
      swiper:''
    }
  },
  ready(){
    var s = new Swiper('.cell',{
      freeMode:true,
      freeModeSticky:true,
      freeModeMomentumBounce:false,
      onSlideChangeEnd: function(swiper){
        console.log(swiper);
      },
      onSetTranslate:function(swiper, translate){
        console.log(translate);
      }


    });

    this.change(1);
    this.initSwiper('/mock/talk/banner.json');
  },
  methods:{
    test: function (e) {
      this.event = e.type
    },
    initSwiper(url){
      var self = this;
      this.$http.get(url).then((response)=>{
        this.swiperImgs = response.data;
        this.$nextTick(function(){
          self.swiper = new Swiper(".talk-swiper",{
            pagination:".talk-pagination",
            autoplay:4000,
            loop:true,
            autoplayDisableOnInteraction:false,
            speed:300,
            paginationType:"custom",
            paginationClickable:true,
            onSlideChangeStart:function(swiper){

              var len = self.paginationActive.length;
              var active = (swiper.activeIndex-1) % len;
              if(active==-1){
                active = len - 1;
              }
              for(var i = 0;i<len;i++){
                self.paginationActive[i].isActive = false;
                if(i == active){
                  self.paginationActive[i].isActive =true;
                }
              }
            }
          });
        })
      },(response)=>{
      })
    },
    swiperPage(index){
      this.swiper.slideTo(index+1);
    },
    createTalk(){

    }
  }
}
</script>
