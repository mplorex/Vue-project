<template>
  <div class="about">
    <div class="counter">
      {{storeCounter.count}}
    </div>
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

const count = ref(0)

const increaseCount = () => {
  count.value++
}
const decreaseCount = () => {
  count.value--
}
</script>

<style>
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
</style>
