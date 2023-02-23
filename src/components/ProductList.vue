<template>
  <div class="product-list">
    <div
      class="product-list__item"
      v-for="product in products"
      :key="product.id"
    >
      <div class="product-list__image">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="product-list__info">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="product-list__price">
          <span>¥{{ product.price.toFixed(2) }}</span>
          <el-button type="primary" @click="addToCart(product)"
            >加入购物车</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "../store/cart";
import { defineProps, ref, defineEmits } from "vue";

const props = defineProps({
  products: {
    type: Array,
    required: true,
  },
});
const emit = defineEmits(["add-to-cart"]);
const cart = useCart();

const addToCart = (product) => {
  //   cart.addItem(product);
  emit("add-to-cart", product);
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.product-list__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-list__image img {
  max-width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 16px;
}

.product-list__price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}
</style>
