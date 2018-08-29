<template>
    <ul class="list">
        <li class="item" 
        v-for="(item, index) in letters" 
        :key="index" 
        :ref="item"
        @click="handleLetterClick(item)"
        @touchmove="handleTouchMove"
         @touchstart="handleTouchStart"
         @touchend="handleTouchEnd">{{item}}</li>
    </ul>
</template>

<script>
export default {
  data () {
    return {
        cities: ['A','B','C','D','E'],
        touchStatus: false
    }
  },
  computed: {
      letters () {
          const letters = []
          for (let i in this.cities) {
              letters.push(this.cities[i])
          }
          return letters
      }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e)
    },
    handleTouchStart () {
        this.touchStatus = true
    },
    handleTouchMove (e) {
        if (this.touchStatus) {
            const startY = this.$refs['A'][0].offsetTop
            const touchY = e.touches[0].clientY-79 // 距离顶部高度
            const index = Math.floor(touchY - startY) / 20 // 字体大小
            if(index >= 0 && index < this.letters.length){
                this.$emit('change', this.letters[index])
            }
        }
    },
    handleTouchEnd () {
        this.touchStatus = false
    }
  }
}
</script>

<style scoped>
.list{
    position:absolute;
    top: 1.59rem;
    right: 0;
    bottom: 0;
    width: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.item{
    text-align: center;
    line-height: 1.3rem;
    color: #00bcd4;
}
</style>
