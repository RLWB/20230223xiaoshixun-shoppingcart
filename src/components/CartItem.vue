<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="item.image" :alt="item.name" />
    <div class="cart-item__info">
      <div class="cart-item__title">{{ item.name }}</div>
      <div class="cart-item__price">{{ item.price.toFixed(2) }} 元</div>
      <div class="cart-item__quantity">
        <Count
          @increment="addItem(item)"
          @decrement="removeItem(item.id)"
          :quantity="item.quantity"
        ></Count>
      </div>
    </div>
    <div class="cart-item__actions">
      <el-button type="text" icon="el-icon-delete" @click="delItem(item.id)"
        >删除</el-button
      >
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useCart } from "../store/cart";
import Count from "./Count.vue";
const { removeItem, addItem, delItem } = useCart();
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.cart-item__image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
}

.cart-item__info {
  flex: 1;
  margin-left: 8px;
}

.cart-item__title {
  font-size: 16px;
  font-weight: bold;
}

.cart-item__price {
  margin-top: 4px;
}

.cart-item__quantity {
  margin-top: 4px;
  font-size: 12px;
}

.cart-item__actions {
  margin-left: 8px;
}
</style>
