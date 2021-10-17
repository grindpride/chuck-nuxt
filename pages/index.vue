<template>
  <div class="container">
    <nav class="nav">
      <div>
        <form @submit.prevent="search">
          <input v-model="query" type="text">
          <button>Search</button>
          <button @click="refresh">Refresh</button>
        </form>

      </div>
    </nav>
    <Card :joke="joke.value"></Card>
  </div>

</template>


<script setup>
const router = useRouter();
const {data: joke, refresh} = await useFetch('https://api.chucknorris.io/jokes/random')
const query = ref('');

const search = () => {
  router.push(query.value)
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
}

.nav {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
