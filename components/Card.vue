<template>
<div class="card">{{joke}}</div>
</template>

<script>
export default {
  name: "Card",
  props: {
    joke: String
  }
}
</script>

<style>
.card{
  padding: 16px;
  border: 1px solid;
  border-radius: 4px;
  font-size: 24px;
}
</style>
