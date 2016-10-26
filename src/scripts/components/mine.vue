<template>
  <div>
    <header id="header" class="borderBottom">
      <ul>
        <li class="Active text fixWidth vipColor" v-on:click="VIP">{{head.left}}</li>
        <li class="headCenter weight fixWidth bigFont">
          {{head.center}}
        </li>
        <li class="Active text fixWidth text-right" v-link="{name:'setting'}">
          {{head.right}}
        </li>
      </ul>
    </header>
    <div id="body">

      <div class="userInfo background1">
        <div class="headImgBox">
          <div></div>
          <div class = 'headImg'><img class="background3" v-bind:src="user.headImg"/></div>
          <div class="edit">
            <div>
              <img class="background1" v-bind:src="stable.editIcon"/>
              <span class="textColor4">{{stable.edit}}</span>
            </div>
          </div>
        </div>
        <div class="mine-item userName textColor2 smallFont"><span>{{user.userName}}</span></div>
        <div class="mine-item userID textColor4 smallFont"><span>ID:{{user.userID}}</span></div>
        <div class="mine-item biaoqian textColor2 smallFont"><span>{{stable.setSign}}</span></div>
        <div class="mine-item guanzhufensi smallFont">
          <div class="one smallFont">
            <span class="textColor3">{{user.guanzhu}}</span>
            <span class="textColor3">{{stable.guanzhu}}</span>
          </div>
          <div class="borderLeft middle"></div>
          <div class ="two">
            <span class="textColor3">{{user.fensi}}</span>
            <span class="textColor3">{{stable.fensi}}</span>
          </div>
        </div>
        <div class="box borderBottom">
          <div class="mine-item qiehuan border5">
            <template v-for="item in stable.innerItem">
              <div class="inner-item smallFont" v-bind:class="item.active?'qiehuan-active':''" v-on:click="changeTab($index)">
                <span class="smallFont">{{item.name}}</span>
                <img data-name="one" v-bind:src="stable.xialaImg"/>
              </div>
            </template>

          </div>
        </div>
      </div>
      <template v-for="item in stable.innerItem">
        <div v-if="(item.active && $index==0)" class="qiehuan-box">

        </div>
        <div v-if="(item.active && $index==1)" class="qiehuan-box">

        </div>
        <div v-if="(item.active && $index==2)" class="qiehuan-box">

        </div>
      </template>

    </div>
  </div>
</template>
<script>

import { tabChanger } from "../vuex/actions";
export default{
  vuex: {
    actions: {
      change: tabChanger
    }
  },
  data(){
    return {
      user:{},
      stable:{
  	    editIcon:"/images/mine/pan.png",
  	    edit:"编辑资料",
  	    setSign:"点此设置签名",
  	    guanzhu:"关注",
  	    fensi:"粉丝",
  	    innerItem:[
          {active:true,name:"话题"},
          {active:false,name:"帖子"},
          {active:false,name:"赞过的"}
        ],
  	    xialaImg:"/images/mine/xiala.png"
      },
      head:{
        left:'会员中心',
        right:'设置',
        center:"我"
      }
    }
  },
  ready(){
    this.change(4);
    this.loadUserInfo('/mock/userInfo/user001.json');
  },

  methods:{
    loadUserInfo:function(url){
      var self = this;
      self.$http.get(url).then((response)=>{
        self.user = response.data;
      },()=>{

      });
    },
    changeTab(index){
      for(let i = 0;i<this.stable.innerItem.length;i++){
        this.stable.innerItem[i].active = false;
        if(index==i){
          this.stable.innerItem[i].active = true;
        }
      }
    },
    VIP(){

    }
  }
}
</script>
