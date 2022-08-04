<template>
  <div id="app">
    <form @submit.prevent="createPost" class="form">
      <label class="label">Title</label>
      <input type="text" v-model="title">
      <label class="label">Body</label>
      <textarea v-model="body"></textarea>
      <label class="label">Select image</label>
      <input ref="fileInput" type="file" @input="pickFile">
      <button type="submit" class="btn">Post</button>
    </form>
    <div v-for="(post, index) in posts" :key="index">
      <Post :title="post.title" :body="post.body" :image="post.image"></Post>
    </div>
    <div class="imagePreviewWrapper"
      :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage"></div>
    </div>
    <div class="formFooter">
      <button class="buttons">comments</button>
      <button class="buttons">share</button>
      <button class="buttons">save</button>
    </div>
</template>

<script>
import Post from '../components/Post.vue';

export default {
  name: 'App',
  components:{
    Post, 
  },
  
  data: () => ({
    title: '',
    body: '',
    image: '',
    posts: [
    ]
  }),
  methods: {
    selectImage () {
      this.$refs.fileInput.click()
    },
    pickFile () {
      let input = this.$refs.fileInput
      let file = input.files
      if (file && file[0]) {
        let reader = new FileReader
        reader.onload = e => {
          this.previewImage = e.target.result
        }
        reader.readAsDataURL(file[0])
        this.$emit('input', file[0])
      }
    },
    createPost () {
      this.posts.unshift({
        title: this.title,
        body: this.body,
        image: this.image,
      })
      this.title = ''
      this.body = ''
      this.image = ''
    }
  }
  
}
</script>

<style>
#app {
  color: aqua;
}
.form{
  display: flex;
  flex-direction: column;
}
.label{
  margin-top: 20px;
  font-size: 20px;
  color: blue;
}
.btn{
  margin-top: 20px;
  font-size: 15px;
}
.imagePreviewWrapper {
    width: 400px;
    height: 400px;
    display: block;
    cursor: pointer;
    margin: 0 auto 10px;
    background-size: cover;
    background-position: center center;
}
.formFooter{
  display: flex;
}
.buttons{
    width: 80px;
    height: 30px;
    border-radius: 25px;
    border-color: #289AF7;
    background-color: transparent;
    text-align: center;
    margin-left: 20px;
}
</style>
