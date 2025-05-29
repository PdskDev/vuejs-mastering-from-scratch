<template>
  <CounterWidget />
  <div class="text-center">
    <p>Let's play the game!</p>
    <h2 class="text-primary pb-3">Current Score: {{ gameStore.getScore }}</h2>
    <span class="text-primary pb-3">Max score: {{ gameStore.getHealth }}</span>
    <br />
    <span class="text-success pb-3 h3 m-4" v-if="gameStore.getScore >= 100"> You won! </span>
    <span class="text-danger pb-3 h3 m-4" v-else-if="gameStore.getScore < 0"> You lost! </span>
    <div class="row" v-if="gameStore.getScore < 100 && gameStore.getScore > 0">
      <div class="col-3 offset-1">
        <button class="form-control btn btn-success p-4" @click="incrementScore">Increment</button>
      </div>
      <div class="col-3">
        <button class="form-control btn btn-danger p-4" @click="decrementScore">Decrement</button>
      </div>
      <div class="col-3">
        <button class="form-control btn btn-warning p-4" @click="randomScore">Random</button>
      </div>
    </div>
    <div v-else class="col-3 offset-1 text-center">
      <button class="form-control btn btn-success p-4" @click="gameStore.resetScore">
        Reset Game
      </button>
    </div>
  </div>
</template>

<script setup>
import CounterWidget from '../counter/CounterWidget.vue'
import { useGameStore } from '@/store/gameStore'

const gameStore = useGameStore()

function incrementScore() {
  gameStore.setNextAttack()
}

function decrementScore() {
  gameStore.setNextDefense()
}

function randomScore() {
  Math.random() > 0.5 ? incrementScore() : decrementScore()
}
</script>
