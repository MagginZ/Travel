<template>
    <div class="container">
        <div class="wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="item in imgs" :key="item.id"><img :src="item.imgUrl" class="gallary-img" alt=""></swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    imgs: {
      type: Array,
      default () {
          return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return{
        swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
            },
            observer: {
                observeParents: true,
                observer: true
            },
            loop: true
        }
    }
  }
}
</script>

<style scoped>
.container>>> .swiper-container{
    overflow: inherit;
}
.container{
    position: fixed;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    background: #000;
    z-index: 89;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 100%;
}
.gallary-img{
    width: 100%;

}
.swiper-pagination{
  color:#fff;
  bottom: -12rem;
}
</style>