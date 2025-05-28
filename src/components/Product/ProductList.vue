<template>
  <div>
    <h1>Product List</h1>
    <p>Hre is the list of products:</p>
    <ul v-for="product in products" :key="product.id">
      <li>
        <router-link
          :to="{
            name: 'productDetail',
            params: { productId: product.id, categoryId: product.category },
          }"
          >{{ product.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const products = [
  { id: 1, category: 'A', name: 'Product #1' },
  { id: 2, category: 'A', name: 'Product #2' },
  { id: 3, category: 'B', name: 'Product #3' },
  { id: 4, category: 'B', name: 'Product #4' },
  { id: 5, category: 'C', name: 'Product #5' },
  { id: 6, category: 'C', name: 'Product #6' },
]
</script>
