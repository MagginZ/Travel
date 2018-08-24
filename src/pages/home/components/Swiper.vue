<template>
<div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>
            <img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img"  src="http://img1.qunarzz.com/piao/fusion/1808/b0/a123fba6d7e3dd02.jpg_750x200_1425741a.jpg" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="swiper-img"  src="http://img1.qunarzz.com/piao/fusion/1808/7e/19b06067afac3402.jpg_750x200_f613313a.jpg" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data (){
    return{
        swiperOption: {}
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper
    width:100%
    height:0
    overflow: hidden
    padding-bottom:31.25%
    .swiper-img
        width:100%
</style>
