<template>
  <div>
    <h1>Home page to Vue.js web application</h1>
    <h2>To win game, you must have socre of {{ gameStore.getWiningScore }}</h2>
    <button @click="goToContact" class="btn btn-secondary m-3">Contact Us</button>
  </div>
</template>
<script setup>
import { useGameStore } from '@/store/gameStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const gameStore = useGameStore()

function goToContact() {
  //router.push("/contact");
  router.push({ name: 'contact' })
}
</script>
