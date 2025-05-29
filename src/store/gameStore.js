import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', () => {
  const score = ref(50)
  const maxHeath = ref(100)
  const maxAttack = ref(30)
  const maxDefense = ref(10)

  const getWiningScore = computed(() => maxHeath.value)
  const getAttack = computed(() => maxAttack.value)
  const getDefense = computed(() => maxDefense.value)
  const getScore = computed(() => score.value)

  const setNextAttack = () => {
    console.log('get next attack')
    let attack = Math.floor(Math.random() * maxAttack.value) + 1
    console.log('attack is: ', attack)
    return (score.value += attack)
  }
  const setNextDefense = () => {
    console.log('get next defense')
    let defense = Math.floor(Math.random() * maxDefense.value) + 1
    console.log('defense is: ', defense)
    return (score.value -= defense)
  }
  const resetScore = () => {
    score.value = 50
  }

  return {
    //state
    score,
    maxHeath,
    maxAttack,
    maxDefense,
    //getters
    getWiningScore,
    getAttack,
    getDefense,
    getScore,
    //actions
    setNextAttack,
    setNextDefense,
    resetScore,
  }
})
