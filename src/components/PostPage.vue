<template>
<div class="postBody">
    <h3>{{ title }}</h3>
    <p>{{ body}}</p>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String
  }
}
</script>

<style>
.postBody {
  display: flex;
  align-items: center;
}

</style>
