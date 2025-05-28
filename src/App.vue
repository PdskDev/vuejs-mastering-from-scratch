<template>
  <HeaderApp />
  <router-view></router-view>
  <FooterApp />
</template>

<script setup>
import HeaderApp from './components/Layout/HeaderApp.vue'
import FooterApp from './components/Layout/FooterApp.vue'
</script>
