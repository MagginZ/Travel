<template>
    <div class="header">
        <div class="header-left"><div class="iconfont icon-fanhui back-icon"></div></div>
        <div class="header-input"><span class="iconfont icon-sousuo"></span> 输入城市/景点/游玩主题</div>
        <div class="header-right" @click="handleClick">{{city}}<span class="iconfont icon-zhankai arrow-icon"></span></div>
                
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city:String
  },
  methods: {
    handleClick () {
      this.$router.push('/city')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import url('//at.alicdn.com/t/font_807286_6kvddqfqgf3.css');
@import '~styles/varibles.styl'
.header
    display:flex
    height: 2.86rem
    color:#fff
    line-height:2.86rem
    background: $bgColor
    .header-left
      width: 2.64rem
      float:left
      .back-icon
        text-align:center;
        font-size 1.4rem
    .header-input
      flex : 1
      padding-left:.5rem;
      background: #fff;
      border-radius: 0.2rem;
      margin-top: 0.5rem;
      height: 2rem;
      margin-left: 0.2rem;
      color:#ccc;
      line-height 2rem
    .header-right
      width: 4.24rem
      float:right
      text-align:center
      .arrow-icon
        font-size :.9rem
</style>
