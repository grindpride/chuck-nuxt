<template>
  <div>
    <h1>{{ joke }}</h1>
    <button @click="$fetch">Refresh</button>
    <div>
      <form @submit.prevent="search">
        <input v-model="query" type="text">
        <button>Search</button>
      </form>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      joke: '',
      query: ''
    }
  },
  methods: {
    search() {
      this.$router.push(this.query)
    }
  },
  async fetch() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random')
    const jokeInfo = await resp.json()
    this.joke = jokeInfo.value
  },
}
</script>
