<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <icons></icons>
        <recommend></recommend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import Icons from './components/Icons'
import Recommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
      HomeHeader,
      HomeSwiper,
      Icons,
      Recommend
  }
}
</script>

<style>

</style>
