<template>
<div>
    <div class="banner" @click="showGallary=true">
        <img src="http://img1.qunarzz.com/sight/p0/1807/ad/ad574bfe6c9e1ceda3.img.png_600x330_0046c90a.png" class="banner-img" alt="">
        <div class="banner-info">
            <div class="banner-title">
                成都欢乐谷(AAAA景区)
            </div>
            <div class="banner-number">
                <span class="iconfont icon-tupian banner-icon"></span>39
            </div>            
        </div>
    </div>
    <fade>
        <gallay-component :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></gallay-component>
    </fade>
</div>
</template>

<script>
import GallayComponent from '@/components/Gallary'
import Fade from '@/components/Fade'
export default {
  components: {
      GallayComponent,
      Fade
  },
  data () {
    return {
         imgs: [
            {id: '0001', imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/ed/edd5cde30ebe91d0a3.img.jpg_r_800x800_2595694d.jpg'},
            {id: '0002', imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/16/165c7022105c4bb4a3.img.jpg_r_800x800_84b951d0.jpg'},
            {id: '0003', imgUrl: 'http://img1.qunarzz.com/sight/p0/1712/27/27a3e61820223732a3.img.jpg_r_800x800_dd3b3b71.jpg'}
        ],
        showGallary: false
    }
  },
  methods: {
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped>
.banner{
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    position: relative;
}
.banner-img{
    width: 100%;
}
.banner-info{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 1.6rem;
    display: flex;
    color: #fff;
    background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
}
.banner-title{
    flex: 1;
    font-size: .8rem;
    padding:0 .9rem;
}
.banner-number{
    padding:0 1.4rem;
    line-height: 1.4rem;
    height: 1.4rem;
    border-radius: 1.2rem;
    background: rgba(0,0,0,.8);
    font-size: .75rem;
}
.banner-icon{
    font-size: .75rem;
    padding-right:.5rem;
}
</style>
