
<template>
  <div class="container-box commonColor">
    <router-view transition="fade"></router-view>
    <footer id="footer" class="Top">
      <ul>
        <li v-bind:class="tabIndex == $index ? 'Active' : 'footerC'"
            v-for="item in footerData"
            v-link="{path:item.path}"
            v-on:click="changPage($index)">
          <i class="icon iconfont">{{{item.icon}}}</i>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </footer>
  </div>
</template>


<script>

import { tabChanger } from '../vuex/actions';
import { getTabindex } from '../vuex/getters';

export default {
  vuex: {
    actions: {
      change: tabChanger
    },
    getters: {
      tabIndex: getTabindex
    }
  },
  data() {
    return {
      footerData: [
        {path:'/index',icon:"&#x3433;", name:"首页"},
        {path:'/index/talk',icon:"&#xe642;",name:"话题"},
        {path:'/index/box',icon:"&#xe639;",name:"消息"},
        {path:'/index/message',icon:"&#xe6ca;",name:"盒子"},
        {path:'/index/mine',icon:"&#xe690;",name:"我"}
      ]
    }
  },
  methods: {
    changPage(i) {
      this.change(i);
    }
  }
}

</script>
