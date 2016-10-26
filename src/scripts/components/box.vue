<template>
  <div>
    <header id="header" class="borderBottom">
      <ul>
        <li class="headCenter weight middleFont">{{head.center}}</li>
      </ul>
    </header>
    <div id='body'>

  


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
      }
    }
  },
  ready(){
    this.change(3);
  },
  methods:{

  }
}
</script>
