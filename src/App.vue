<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/brazil">Brazil</router-link>
    <router-link to="/login">Login/Signup</router-link>
    <router-link to="/egypt">Egypt</router-link>
    <router-link to="/france">France</router-link>
    <div class="container">
      <router-view></router-view>
    </div>
  </nav>

  <div id="app">
  <form @submit.prevent="createPost">
    <label>Title</label>
    <input type="text" v-model="title">
    <label>body</label>
    <textarea v-model="body"></textarea>
    <button type="submit"> Post </button>
  </form>
  <div v-for="(post, index) in posts" :key="index">
  <post :title="post.title" :body="post.body"></post>
  </div>
</div>

</template>

<script>
import Post from './components/PostPage.vue'

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
        title: 'Post 1',
        body: 'this is a test post'
      },
      {
        title: 'Post 2',
        body: 'this is a test'
      },
      {
        title: 'Post 3',
        body: 'this is a test post'
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
