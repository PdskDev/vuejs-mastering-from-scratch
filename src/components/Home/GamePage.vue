<template>
  <CounterWidget />
  <div class="text-center">
    <p>Let's play the game!</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.score }}</h2>
    <span class="text-primary pb-3">Max score: {{ gameStore.maxHeath }}</span>
    <div class="row">
      <div class="col-3 offset-1">
        <button class="form-control btn btn-success p-4">Increment</button>
      </div>
      <div class="col-3">
        <button class="form-control btn btn-danger p-4">Decrement</button>
      </div>
      <div class="col-3">
        <button class="form-control btn btn-warning p-4">Random</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CounterWidget from '../counter/CounterWidget.vue'
import { useGameStore } from '@/store/gameStore'

const gameStore = useGameStore()
</script>
