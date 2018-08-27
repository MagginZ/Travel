<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon" :key="item.id" v-for="item in page">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" :alt="item.text">
                    </div>
                    <p class="icon-desc">{{item.text}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
          loop: true
      },
      iconList: [
          {id: '001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', text: '景点门票'},
          {id: '002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png', text: '水上乐园'},
          {id: '003', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', text: '成都必游'},
          {id: '004', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png', text: '海洋馆'},
          {id: '005', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png', text: '亲子游'},
          {id: '006', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png', text: '稻城亚丁'},
          {id: '007', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', text: '一日游'},
          {id: '008', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', text: '游乐场'},
          {id: '009', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', text: '游乐场'}               
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
          const page = Math.floor(index/8)
          if(!pages[page]){
              pages[page] =[]
          }
          pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped>
.icons >>> .swiper-container{
   height: 0;
   padding-bottom: 50%;
   padding-top: 15px;
}

.icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 22%;
    padding-top: 12px;
}
.icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 22px;
    box-sizing: border-box;
    padding:0.5px;
}
.icon-img-content{
    display: block;
    margin: 0 auto;
    height: 90%;
}
.icon-desc{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 32px;
    color: #333;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
