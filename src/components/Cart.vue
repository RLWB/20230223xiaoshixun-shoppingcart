<template>
  <div class="cart">
    <div class="cart__header">
      <div class="cart__title">购物车 ({{ itemCount }})</div>
      <el-button
        type="text"
        icon="el-icon-delete"
        class="cart__clear"
        @click="clearCart"
        >清空</el-button
      >
    </div>
    <div class="cart__body">
      <div v-if="items.length === 0" class="cart__empty">购物车为空</div>
      <template v-else>
        <cart-item
          v-for="item in items"
          :key="item.id"
          :item="item"
        ></cart-item>
      </template>
    </div>
    <div class="cart__footer">
      <div class="cart__total">总价: {{ totalPrice.toFixed(2) }} 元</div>
      <el-button type="primary" :disabled="items.length === 0"
        >去结算</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useCart } from "../store/cart";
import CartItem from "./CartItem.vue";

const { clearCart } = useCart();
const items = computed(() => useCart().cartItems);
const itemCount = computed(() => useCart().itemCount);
const totalPrice = computed(() => useCart().totalPrice);
</script>

<style scoped>
.cart {
  display: flex;
  flex-direction: column;
  width: 600px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.cart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  background-color: #f5f5f5;
}

.cart__title {
  font-size: 16px;
}

.cart__clear {
  font-size: 12px;
}

.cart__body {
  flex: 1;
  padding: 8px;
}

.cart__empty {
  text-align: center;
  color: #999;
}

.cart__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
}

.cart__total {
  font-size: 16px;
}
</style>
