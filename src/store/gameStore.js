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
    let attack = Math.floor(Math.random() * this.maxAttack) + 1
    console.log('attack is: ', attack)
    return (this.score += attack)
  }
  const setNextDefense = () => {
    console.log('get next defense')
    let defense = Math.floor(Math.random() * this.maxDefense) + 1
    console.log('defense is: ', defense)
    return (this.score -= defense)
  }
  const resetScore = () => {
    this.score = 50
  }

  return {
    score,
    maxHeath,
    maxAttack,
    maxDefense,
    getWiningScore,
    getAttack,
    getDefense,
    getScore,
    setNextAttack,
    setNextDefense,
    resetScore,
  }
})
