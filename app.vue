<template>
  <div class="pageheader">
    <div class="productlist">
      <h1>Product List</h1>
      <div v-for="product in productList" :key="product.id">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies">
          <div class="card__details">
            <div class="name">{{ product.name }}</div>
            <p>{{ product.detail }}</p>
            <button @click="addToCart(product)">Buy @{{ product.price }}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="productlist">
      <h1>Cart List {{ store.cartTotalLength }}</h1>
      <span>Total Price {{ store.cartTotalPrice }}</span>
      <div v-for="product in getCartProducts" :key="product.id">
        <div class="card">
          <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="Lago di Braies">
          <div class="card__details">
            <div class="name">{{ product.name }}</div>
            <div class="name">@{{ product.price }}</div>
            <p>{{ product.detail }}</p>
            <button @click="removeItemsFromCart(product.id)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCartStore } from './stores/cartStore'

export default defineComponent({

  setup() {
    const store = useCartStore()
    const productList = ref(
      [{
        "id": '0',
        "name": "hero Product",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "hero": "OMG This just came out today!",
        "image": "http://placehold.it/940x300/999/CCC"
      }, {
        "id": '1',
        "name": "Product 1",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "info": "This is the latest and greatest product from Derp corp.",
        "image": "http://placehold.it/300x300/999/CCC"
      }, {
        "id": '2',
        "name": "Product 2",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "offer": "BOGOF",
        "image": "http://placehold.it/300x300/999/CCC"
      }, {
        "id": '3',
        "name": "Product 3",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "image": "http://placehold.it/300x300/999/CCC"
      }, {
        "id": '4',
        "name": "Product 4",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "offer": "No srsly GTFO",
        "image": "http://placehold.it/300x300/999/CCC"
      }, {
        "id": '5',
        "name": "Product 5",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "image": "http://placehold.it/300x300/999/CCC"
      }, {
        "id": '6',
        "name": "Product 6",
        "detail": "Lorem ipsum dolor sit amet",
        "price": "99",
        "info": "This is the latest and greatest product from Derp corp.",
        "offer": "info with offer",
        "image": "http://placehold.it/300x300/999/CCC"
      }]
    )

    const getCartProducts: any = computed(() => {
      return store.CartItems
    })

    const removeItemsFromCart = (id: number) => {
      store.removeItem(id)
    }

    const addToCart = (product: any) => {
      console.log('add to cart', product)
      store.addToCart(product)
    }
    return { productList, store, addToCart, getCartProducts, removeItemsFromCart }
  }

})
</script>

<style scoped>
.pageheader {
  display: flex;
  flex-direction: row;
}

.productlist {
  width: 50vw;
}

body {
  background-color: #eaeff1;
  font-family: "Raleway", sans-serif;
}

img {
  width: 100%;
  border-radius: 12px;
  height: 214px;
  object-fit: cover;
}

button:focus,
button:hover {
  background-color: #0077ff;
  color: #e0efff;
}

.card {
  /* Change background color */
  background-color: white;

  /* Add border */
  border: 1px solid #bacdd8;

  /* Add space between the border and the content */
  padding: 8px;

  border-radius: 12px;
}

/* Style div elements that have class equal to tag */
.tag {
  padding: 4px 8px;
  border: 1px solid #e5eaed;

  border-radius: 50px;
  font-size: 12px;
  font-weight: 600;
  color: #788697;
}

/* Style div elements that have class equal to name */
.name {
  font-size: 24px;
  font-weight: 600;

  margin-top: 16px;
}

/* Style p element */
p {
  font-size: 14px;
  color: #7f8c9b;
  line-height: 150%;
}

/* Style button element */
button {
  border: none;
  padding: 12px 24px;
  border-radius: 50px;

  font-weight: 600;
  color: #0077ff;
  background-color: #e0efff;

  /* Button is inline-block element by default, it need to have block display for margin: 0 auto; to work */
  margin: 0 auto;
  display: block;

  /* Button is a clickable element, therefore it should have a pointer cursor */
  cursor: pointer;
}

.card__details {
  /* Add space around the details */
  padding: 16px 8px 8px 8px;
}
</style>
