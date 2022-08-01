<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <Div class="home">
    <main>
      <TheWelcome/>
    </main>
  </Div>
  <div id="app">
    <div v-for="(post, index) in posts" :key="index">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  data: () => ({
    posts: [
      {
        title: 'post 1',
        body: 'This is a test'
      }
    ]
  }) 
}

</script>

<style>
.home {
  min-height: 100vh;
    display: flex;
    align-items: center;
}
</style>
