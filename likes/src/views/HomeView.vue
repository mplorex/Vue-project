<template>
  <div id="app">
    <form @submit.prevent="createPost">
      <label>Title</label>
      <input type="text" v-model="title">
      <label>Body</label>
      <textarea v-model="body"></textarea>
      <button type="submit">Post</button>
    </form>
    <div v-for="(post, index) in posts" :key="index">
      <Post :title="post.title" :body="post.body"></Post>
    </div>
  </div>
</template>

<script>
import Post from '../components/Post.vue'

export default {
  name: 'App',
  components: {
    Post
  },
  data: () => ({
    title: '',
    body: '',
    posts: [
      {
        title: 'post 1',
        body: 'This is a test'
      }
    ]
  }),
  methods: {
    createPost () {
      this.posts.unshift({
        title: this.title,
        body: this.body
      })

      this.title = ''
      this.body = ''
    }
  } 
}
</script>

<style>
#app {
  color: aqua;
}
</style>
