<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities" @changeCity="getCity"></city-search>
        <city-list :letter="letter"></city-list>
        <city-alphabet @change="handleGetCityInfoSucc"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      letter: '',
      cities: ['广州','上海','重庆','重庆','重庆','重庆','重庆', '成都']
    }
  },
  methods: {
    handleGetCityInfoSucc (letter) {
      this.letter = letter
    },
    getCity (city) {
      console.log(city)
    }
  }
}
</script>

<style scoped>

</style>
