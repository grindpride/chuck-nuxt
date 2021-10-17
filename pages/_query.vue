<template>
  <div>
        <h1>Search for {{$route.params.query}}</h1>
        <nuxt-link class="back" to="/">Назад</nuxt-link>
        <div class="cards">
          <Card v-for="item in jokes" :key="item.id" :joke="item.value"/>
        </div>
  </div>

</template>

<script>
import Card from "../components/Card";


export default {
  components: {Card},
  data(){
    return {
      jokes: [],
      search: ''
    }
  },
  async fetch() {
    this.search = this.$route.params.query
    const resp = await fetch(`https://api.chucknorris.io/jokes/search?query=${this.search}`)
    const jokeInfo = await resp.json()
    this.jokes = jokeInfo.result.length
      ? jokeInfo.result
      : [{value: `Only Chuck Norris knows joke about ${this.search}`, id: 'No joke'}]
  },
}
</script>
<style scoped>
.cards{
  margin-bottom: 16px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
.back{
  display: block;
  margin-bottom: 16px;
  font-size: 24px;
}
</style>
