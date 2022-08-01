<template>
<div class="Post">
    <h3>{{ title }}</h3>
    <p>{{ body }}</p>
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