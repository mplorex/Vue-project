 <template>
  <div class="about">
    <h1>This is an about page</h1>
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
.counter {
  font-size: 30px;
  margin: 20px;
}
.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>
