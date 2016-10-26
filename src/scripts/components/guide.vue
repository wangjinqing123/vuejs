<template >
  <div class="m-guide">
    <div class="swiper-contianer guide-swiper" id="guide-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in imgList">
          <img v-if="$index==3" v-bind:src="item" v-link="{path:'/index'}" alt="">
          <img v-else v-bind:src="item" alt="">
        </div>
      </div>
      <div class="swiper-pagination guide-pagination"></div>
    </div>
  </div>
</template>


<script>



export default{
  data(){
    return {
      imgList:[
        "/images/001.jpg",
        "/images/006.jpg",
        "/images/007.jpg",
        "/images/008.jpg"
      ]
    }
  },
  ready(){
    setTimeout(function(){
      new Swiper('#guide-swiper',{
        pagination:'.guide-pagination'
      });
    },1000);

  }
}
</script>
