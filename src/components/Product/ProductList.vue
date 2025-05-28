<template>
  <div>
    <h1>Product List</h1>
    <p>Hre is the list of products:</p>
    <ul v-for="product in products" :key="product.id">
      <li>
        <router-link :to="`/product/${product.id}`">{{ product.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>
const products = [
  { id: 1, name: 'Product #1' },
  { id: 2, name: 'Product #2' },
  { id: 3, name: 'Product #3' },
  { id: 4, name: 'Product #4' },
  { id: 5, name: 'Product #5' },
]
</script>
