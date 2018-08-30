<template>
    <div>
        <div class="search">
        <input type="text" placeholder="输入城市名或拼音" class="search-input" v-model="keyword">
    </div>
    <div class="search-content" v-show="isSearch">
        <ul>
            <li class="search-item" v-for="(item, index) in list" :key="index" @click="handleClick(item)">{{item}}</li>
        </ul>
    </div>
    </div>
</template>

<script>
export default {
  props: {
    cities: Array
  },
  data () {
    return  {
        keyword: '',
        list: [],
        timer: null,
        isSearch: false
    }
  },
  methods: {
      handleClick (item) {
        this.$store.commit('changeCity', item)
        this.isSearch = false
        this.$router.push('/')
      }
  },
  watch: {
      keyword () {
          this.isSearch = true
          if (this.keyword == '') {
              this.isSearch = false
          }
          if (this.timer) {
              clearTimeout(this.timer)
          }
          this.timer = setTimeout(()=>{
              const result = []
              for (let i in this.cities) {
                  if (this.cities[i] == this.keyword) {
                      result.push(this.cities[i])
                  }
              }
              this.list = result
          }, 100)
      }
  }
}
</script>

<style scoped>
.search{
    height: 2.1rem;
    padding: 0 10px;
    background:  #00bcd4;
}
.search-input{
    width: 100%;
    height: 1.6rem;
    line-height: 1.8rem;
    text-align: center;
    border-radius: 4px;
    border: 0;
    outline: none;
    color:#666;
    padding:0 10px;
    box-sizing: border-box;
}
.search-content{
    position: absolute;
    top: 4.9rem;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    z-index:1;
    background: #eee;
}
.search-item{
    padding-left: .7rem;
    background: #fff;
    border-bottom: 1px solid #ccc;
    line-height: 1.62rem;
    color: #666;
    font-size: .8rem;
}
</style>
