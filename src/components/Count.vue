<template>
  <div class="quantity-counter">
    <el-button type="text" @click="decrement" :disabled="quantity <= 1"
      >-</el-button
    >
    <span class="quantity-counter__number">{{ quantity }}</span>
    <el-button type="text" @click="increment">+</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  quantity: {
    type: Number,
    default: 0,
  },
});
const emit = defineEmits(["increment", "decrement"]);
const increment = () => {
  emit("increment");
};

const decrement = () => {
  emit("decrement");
};
</script>

<style>
.quantity-counter {
  display: flex;
  align-items: center;
}

.quantity-counter__number {
  display: inline-block;
  margin: 0 8px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 24px;
}
</style>
