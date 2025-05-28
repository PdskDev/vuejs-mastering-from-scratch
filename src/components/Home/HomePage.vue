<template>
  <div>
    <h1>Home page to Vue.js web application</h1>
    <button @click="goToContact" class="btn btn-secondary m-3">Contact Us</button>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToContact() {
  //router.push("/contact");
  router.push({ name: 'contact' })
}
</script>
