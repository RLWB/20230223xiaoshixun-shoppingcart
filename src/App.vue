<template>
  <div class="app">
    <h1 style="text-align: center">购物车</h1>
    <header class="app__header">
      <div class="app__cart-icon" @click="showCart = !showCart">
        <el-badge :value="cartItemsCount">
          <i class="el-icon-shopping-cart"></i>
        </el-badge>
      </div>
    </header>

    <main class="app__main" v-if="!showCart">
      <product-list :products="products" @add-to-cart="addItem"></product-list>
    </main>
    <cart
      style="margin: 0 auto"
      v-else
      :items="cartItems"
      @remove-item="removeItem"
    ></cart>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCart } from "./store/cart";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";

const cart = useCart();
const products = [
  {
    id: "p1",
    image: "http://yanxuan.nosdn.127.net/583812520c68ca7995b6fac4c67ae2c7.png",
    title: "双宫茧桑蚕丝被 空调被",
    price: 29,
    description: "一级桑蚕丝，吸湿透气柔软",
  },
  {
    id: "p2",
    image: "http://yanxuan.nosdn.127.net/a196b367f23ccfd8205b6da647c62b84.png",
    title: "可水洗舒柔丝羽绒枕",
    price: 19,
    description: "超细纤维，蓬松轻盈回弹",
  },
  {
    id: "p3",
    image: "http://yanxuan.nosdn.127.net/0984c9388a2c3fd2335779da904be393.png",
    title: "色织精梳AB纱格纹空调被",
    price: 9,
    description: "加大加厚，双色精彩",
  },
];
// const cartItemsCount = ref(cart.cartItems.length);
const cartItemsCount = computed(() => cart.itemCount);
let showCart = ref(false);

const addItem = (product) => {
  cart.addItem(product);
  cartItemsCount.value = cart.cartItems.length;
};

const removeItem = (itemId) => {
  cart.removeItem(itemId);
  cartItemsCount.value = cart.cartItems.length;
};
</script>

<style>
.app {
  margin: 0 auto;
  padding: 16px;
}

.app__header {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: center;
  transform: translateX(80px) translateY(-80px);
}

.app__cart-icon {
  cursor: pointer;
}

.app__main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}
</style>
