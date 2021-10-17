<template>
  <div class="container">
    <nav class="nav">
      <div>
        <form @submit.prevent="search">
          <input v-model="query" type="text">
          <button>Search</button>
          <button @click="$fetch">Refresh</button>
        </form>
      </div>
    </nav>

    <Card :joke="joke"></Card>
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
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}
.nav{
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
