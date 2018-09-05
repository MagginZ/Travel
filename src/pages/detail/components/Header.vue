<template>
    <div>
        <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
            <div class="iconfont icon-fanhui header-abs-back"></div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
                <router-link to="/">
                    <i class="iconfont icon-fanhui header-back"></i>
                </router-link>
                景点详情
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        showAbs: true,
        opacityStyle: {
            opacity: 0
        }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)  
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {opacity}
          this.showAbs = false
      } else {
          this.showAbs = true
      }
    }
  }
}
</script>

<style scoped>
.header-abs{
    position: absolute;
    left: 1.2rem;
    top:1.2rem;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.4rem;
    background: rgba(0,0,0,.8);
    text-align: center;
    line-height: 1.8rem;
}
.header-abs-back{
    color: #fff;
    font-size: 1rem;
}
.header-fixed{
    z-index: 2;
    height: 2.86rem;
    line-height: 2.86rem;
    text-align: center;
    color:#fff;
    background: #00bcd4;
    position: fixed;
    top:0;
    right: 0;
    left: 0;
}
.header-back{
    width: 3rem;
    text-align: center;
    position: absolute;
    color:#fff;
    top:0;
    font-size: 1.4rem;
    left: 0;;
}
</style>
