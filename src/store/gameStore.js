import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    score: 50,
    maxHeath: 100,
    maxAttack: 30,
    maxDefense: 10,
  }),

  getters: {
    getWiningScore: (state) => state.maxHeath,
    getAttack: (state) => state.maxAttack,
    getDefense: (state) => state.maxDefense,
    getScore: (state) => state.score,
  },
  actions: {
    setNextAttack() {
      console.log('get next attack')
      let attack = Math.floor(Math.random() * this.maxAttack) + 1
      console.log('attack is: ', attack)
      return (this.score += attack)
    },
    setNextDefense() {
      console.log('get next defense')
      let defense = Math.floor(Math.random() * this.maxDefense) + 1
      console.log('defense is: ', defense)
      return (this.score -= defense)
    },
    resetScore() {
      this.score = 50
    },
  },
})
