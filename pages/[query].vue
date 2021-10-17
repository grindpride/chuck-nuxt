<template>
  <div>
        <h1>Search for {{$route.params.query}}</h1>
        <nuxt-link class="back" to="/">Назад</nuxt-link>
        <div class="cards">
          <Card v-for="item in jokes.result" :key="item.id" :joke="item.value"/>
        </div>
  </div>

</template>

<script setup>
const route = useRoute()
const query = route.params.query
const {data: jokes} = await useFetch(`https://api.chucknorris.io/jokes/search?query=${query}`)

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
