import { defineStore } from 'pinia'

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        cart: [],
    }),
    getters: {
        cartTotalLength(store) {
            return store.cart.length
        },
        CartItems(store) {
            return store.cart
        },
        cartTotalPrice(store) {
            return store.cart.reduce((total, item) => {
                return total + Number(item.price)
            }, 0)
        }
    },
    actions: {
        addToCart(product) {
            this.cart.push(product)
        },
        removeItem(id) {
            this.cart = this.cart.filter(p => {
                return p.id !== id
            })
        },
    },
    persist: true,
})


