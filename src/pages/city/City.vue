<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
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
      letter: ''
    }
  },
  methods: {
    handleGetCityInfoSucc (letter) {
      this.letter = letter
    }
  }
}
</script>

<style scoped>

</style>
