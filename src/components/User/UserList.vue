<template>
  <div>
    <h1>User List</h1>
    <div v-if="userList.users.length > 0">
      <ol>
        <li v-for="user in userList.users" :key="user.id">{{ user.name }} {{ user.email }}</li>
      </ol>
    </div>
    <div v-else>No user to display</div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

const apiUrl = 'https://jsonplaceholder.typicode.com/users'

const userList = reactive({
  users: [],
})

onMounted(async () => {
  axios.get(apiUrl).then((response) => {
    userList.users = response.data
  })

  /* await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      userList.users = data
    }) */
})
</script>
