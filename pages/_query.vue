<template>
  <div>
        <h1>Search for {{$route.params.query}}</h1>
        <div v-for="item in jokes" :key="item.id" >
          {{ item.value }}
        </div>
        <nuxt-link to="/">Назад</nuxt-link>
  </div>

</template>

<script>
export default {
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
      : [{value: `Only Chuck Norris know joke about ${this.search}`, id: 'No joke'}]
  },
}
</script>
