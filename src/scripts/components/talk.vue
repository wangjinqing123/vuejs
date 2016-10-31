<template>
  <div>
    <header id="header" class="Bottom">
      <ul>
        <li class="Active text" v-on:click="createTalk">{{head.left}}</li>
        <li class="input headCenter">
          <input type="text" class="background2 middleFont" :placeholder="head.center">
        </li>
        <li class="middleFont">{{head.right}}</li>
      </ul>
    </header>
    <div id="body">

      <div id="w-talk-scroll" class="scroll-view">
        <div class="scroll">

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
            <template v-for="item in cellList">
    <!-- cell -->
              <a class="mint-cell mint-cell-swipe">
                <div class="mint-cell-left" style="transform: translate3d(-1px, 0px, 0px);">
                  <div slot="left" class="mint-cell-swipe-buttongroup">
                  </div>
                </div>
                <div class="mint-cell-wrapper mint-cell-gray Bottom">
                  <div class="mint-cell-title">
                    <span class="mint-cell-text">{{item.titleCell.title}}</span>
                  </div>
                  <div class="mint-cell-value">{{item.titleCell.more}}
                    <span class="iconfont cell-title-icon" slot="icon">&#xe604;</span>
                  </div>
                </div>
                <div class="mint-cell-right" style="transform: translate3d(0px, 0px, 0px);">
                  <div slot="right" class="mint-cell-swipe-buttongroup">
                  </div>
                </div>
              </a>
    <!-- cell -->
              <!-- <mt-cell-swipe class="d" v-bind:title="item.titleCell.title">
                <Slot>{{item.titleCell.more}}
                  <span v-if="item.titleCell.isMoreIHidden" class="iconfont cell-title-icon" slot="icon" >&#xe604;</span>
                </Slot>
              </mt-cell-swipe> -->
    <!-- cell -->
              <template v-for="item in cellConList">

                <mt-cell-swipe
                  v-bind:title="item.name"
                  v-bind:label="item.liulan"
                  v-bind:right="[
                    {
                      content: item.isGuanzhu?'取消关注':'关注',
                      style: { background: item.isGuanzhu?'#CD3333':'	#104E8B', color: '#fff' },
                    }
                  ]"
                >
                </mt-cell-swipe>
              </template>
    <!-- cell  -->
            </template>
          </div>
          <div style="height:87px;width:0px;"></div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  //
  import commonUtil from "../utils/commonUtil.js";
  import {
    tabChanger
  } from "../vuex/actions";

  import "../libs/cell-swipe/style.css";
  import "../libs/toast/style.css";
  import {
    Cell,
    CellSwipe,
    Toast
  } from 'mint-ui';
  Vue.component(Cell.name, Cell);
  Vue.component(CellSwipe.name, CellSwipe);

    //vue-touch

  export default {
    vuex: {
      actions: {
        change: tabChanger
      }
    },

    data() {
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
        cellConList:[]
      }
    },
    ready() {
      this.change(1);
      this.initSwiper('/mock/talk/banner.json');
      this.getListData();
    },
    methods: {
      guanzhu:function(){
        console.log("fsadkj")

      },
      //列表头数据
      getListData: function() {
        let self = this;
        self.$http.get("/mock/talk/headList.json").then((response) => {
          self.cellList = response.data;
          for(var i = 0;i<response.data.length;i++){
            let id = response.data[i].kindID;
            self.talkList(id);

          }
          self.$nextTick(function() {

          });
        }, (response) => {});
      },
      //列表内容数据
      talkList:function(id){
        this.$http.get("/mock/talk/talkList.json").then((response)=>{
          for(var j = 0;j<response.data.length;j++){
            if(id==response.data[j].kindID){
              this.cellConList = response.data;

              this.$nextTick(function(){
                var talkScroll = new IScroll('#w-talk-scroll',{
                  click:true,
                  probeType:1
                });
              });
            }
          }
        },()=>{});
      },
      test: function(e) {
        this.event = e.type
      },
      initSwiper(url) {
        var self = this;
        this.$http.get(url).then((response) => {

          this.swiperImgs = response.data;

          this.$nextTick(function() {
            self.swiper = new Swiper(".talk-swiper", {
              pagination: ".talk-pagination",
              autoplay: 4000,
              loop: true,
              autoplayDisableOnInteraction: false,
              speed: 300,
              paginationType: "custom",
              paginationClickable: true,
              onSlideChangeStart: function(swiper) {

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
          })
        }, (response) => {})
      },
      swiperPage(index) {
        this.swiper.slideTo(index + 1);
      },
      //创键话题
      createTalk() {}
    }

  }
</script>




<!-- .cell{
  width:100%;
  height:40px;
  line-height: 40px;
  .cell-block{
    width:100%;
    height:100%;
    color:#222;
    .item{
      margin-left:12px;
      border-bottom:1px solid #ddd;
      width:100%;
      height:100%;
    }
  }
  .small-block{
    width:20%;
    height:100%;
    color:#fff;
    text-align: center;
  }
  .big-block{
    width:25%;
    height:100%;
    color:#fff;
    text-align: center;
  }
  .primary{
    background: #436EEE;
  }
  .gray{
    background:#BABABA;
  }
  .danger{
    background:#CD3700;
  }
} -->

<!--
<div class="swiper-container cell">
  <div class="swiper-wrapper">
    <div class="swiper-slide cell-block">
      <div class="item">
        dfs
      </div>
    </div>
    <div class="swiper-slide big-block primary"><span>sfd</span></div>
    <div class="swiper-slide big-block gray "><span>fs</span></div>
  </div>
</div> -->









<!-- createCell(){
  let tempSwiper = "";
  let flag = true; // 判断是否是新一轮的滑出滑入
  var swiperArr = new Swiper('.cell',{
    slidesPerView:"auto", // 可改变slide宽高
    resistanceRatio:0, //边缘抵抗力的大小比例

    onTouchEnd:function(swiper,event){

      setTimeout(function(){
        //滑动对象不为空
        if(tempSwiper){
          //将所有的滑块收回去
          for(let i = 0;i<swiperArr.length;i++){
            swiperArr[i].slideTo(0);
          }
          //当前滑块滑出
          swiper.slideTo(1);
          //如果上一次跟本次滑动的是同一块，则收回
          if(tempSwiper == swiper && flag){
            swiper.slideTo(0);
            flag = false;
          }else{
            flag = true;
          }
        }
        //存储当前滑动的滑块
        tempSwiper = swiper;
      },0);
    },
    onTap:function(){

    }
  });

} -->
