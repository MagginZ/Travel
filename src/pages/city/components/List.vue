<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                    <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item in city" :key="item" @click="handleCityClick(item)">
                         <div class="button">{{item}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="item in cities" :key="item" :ref="item">
                <div class="title border-topbottom">{{item}}</div>
                <div class="item-list">
                    <div class="item" v-for="item in city" @click="handleCityClick(item)" :key="item">{{item}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props : {
        letter: String
    },
    data () {
        return {
            cities: ['A','B','C','D','E'],
            city: ['北京', '上海' , '成都', '重庆', '广州'],
        }
    },
  mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods: {
      handleCityClick (city) {
        // this.$store.dispatch('changeCity', city)
        this.$store.commit('changeCity', city)
        this.$router.push('/')
      }
  },
  // 监听letter变化
  watch: {
    letter () {
        if (this.letter) {
            const element = this.$refs[this.letter][0] // 获取对应的区域。需要在循环中使用:ref获取城市代码
            this.scroll.scrollToElement(element) // better-scroll 提供的方法，滚动到此元素位置
        }
    }
  }
}
</script>

<style scoped>
.border-topbottom{
    border-bottom: 1px solid #ccc;
}
.list{
    position:absolute;
    top:4.9rem;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
}
.title{
    line-height: 2rem;
    background: #eee;
    padding-left: .5rem;
    font-size: 1rem;
    color: #666;
}
.button-list{
  padding:.1rem .6rem .1rem .1rem;
  overflow: hidden;
}
.button-wrapper{
    float: left;
    width: 33.33%;
    color: #666;
}
.button{
    margin: .3rem;
    text-align: center;
    padding:.2rem 0;
    border-radius: 3px;
    border: 1px solid #ccc;
}
.item-list .item{
    line-height:2rem;
    color: #666;
    padding-left: .6rem;
    border-bottom: 1px solid #ccc;
}
</style>
