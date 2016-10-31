<template>
  <div>
    <header id="header" class="Bottom">
      <ul>
        <li class="headCenter weight middleFont">{{head.center}}</li>
      </ul>
    </header>
    <div id='body'>
      <div class="box-box">
        <template v-for="item in list">
          <div class="box-cell Bottom Top">
            <div class="cell-left">img</div>
            <div class="cell-center">{{item}}</div>
            <div class="cell-right"><i class="iconfont reverse">&#xe604;</i></div>
          </div>
        </template>
      </div>
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
      head:{
        center:'盒子'
      },
      list:["火柴代表大会","声控福利站","柴扉"]
    }
  },
  ready(){
    this.change(3);
  },
  methods:{

  }
}
</script>
