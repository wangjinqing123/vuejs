<template>
  <div class="setting">
    <header id="header" class="Bottom">
      <ul>
        <li class="Active text" v-on:click="backPrepage"><span class="back iconfont">&#xe604;</span></li>
        <li class="headCenter middleFont">
          {{head.center}}
        </li>
      </ul>
    </header>
    <div id='body'>


    </div>
    <!--  -->
    <vue-dialog v-if="dialogShow"></vue-dialog>
  </div>
</template>
<script>

import VueDialog from "../plugins/dialog.js";
Vue.use(VueDialog);
new VueDialog();




export default{

  data(){
    return {
      head:{
        center:'设置'
      },
      quitInfo:"是否退出当前账号",
      dialogShow:false
    }
  },
  methods:{
    backPrepage(){
      window.history.go(-1);
    },
    showDialog(){
      this.dialogShow = true;
    },
    hiddenDialog(){
      this.dialogShow = false;
    }
  }
}
</script>
