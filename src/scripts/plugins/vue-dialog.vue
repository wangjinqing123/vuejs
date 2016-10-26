<template>
  <div class="m-dialog" v-if="isShow">
    <div class="yo-dialog yo-dialog-quit">
      <div class="bd">
        <p>are you sure?</p>
      </div>
      <footer class="ft">
          <button class="yo-btn yo-btn-dialog yo-btn-l" @click="close">取消</button>
          <button class="yo-btn yo-btn-dialog yo-btn-l" @close="close">确定</button>
      </footer>

    </div>
    <div class="yo-mask"></div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isShow:true
      }
    },
    methods:{
      close(){
        this.isShow = false;
      }
    }
  }
</script>
