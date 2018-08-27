<template>
<div class="wrapper">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgUrl" class="swiper-img" alt=""></swiper-slide>
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
        swiperOption: {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
        },
        swiperList: [
            {id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg'},
            {id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/b0/a123fba6d7e3dd02.jpg_750x200_1425741a.jpg'},
            {id: '0003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/7e/19b06067afac3402.jpg_750x200_f613313a.jpg'}
        ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper>>> .swiper-pagination-bullet-active
        background:#fff !important 
.wrapper
    width:100%
    height:0
    overflow: hidden
    padding-bottom:26.8%
    .swiper-img
        width:100%
  
</style>
