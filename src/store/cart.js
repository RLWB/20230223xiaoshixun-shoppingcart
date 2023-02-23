import { defineStore } from "pinia";

export const useCart = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    itemCount() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
    totalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
  },
  actions: {
    addItem(item) {
      const existingItem = this.cartItems.find(
        (existingItem) => existingItem.id === item.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cartItems.push({
          id: item.id,
          name: item.title,
          price: item.price,
          quantity: 1,
          image: item.image,
          description: item.description,
        });
      }
    },
    removeItem(itemId) {
      const existingItemIndex = this.cartItems.findIndex(
        (existingItem) => existingItem.id === itemId
      );
      if (existingItemIndex >= 0) {
        const existingItem = this.cartItems[existingItemIndex];
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          this.cartItems.splice(existingItemIndex, 1);
        }
      }
    },
    delItem(id) {
      const existingItemIndex = this.cartItems.findIndex(
        (existingItem) => existingItem.id === id
      );
      this.cartItems.splice(existingItemIndex, 1);
    },
    clearCart() {
      console.log(123);
      console.log(this.cartItems);
      this.cartItems = [];
      console.log(this.cartItems);
    },
  },
});
