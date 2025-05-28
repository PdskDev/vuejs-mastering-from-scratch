<template>
  <div>
    <h1>Product Detail</h1>
    <div v-if="productId">
      <p>Product ID: {{ productId }}</p>
    </div>
    <div v-else>No product Id in parameter</div>
    <div v-if="categoryId">
      <p>Category ID: {{ categoryId }}</p>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const productId = route.params.productId
const categoryId = route.params.categoryId
</script>
