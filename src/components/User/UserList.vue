<template>
  <div class="container p-4">
    <div v-if="userList.users.length > 0">
      <h1 class="text-success text-center">User List</h1>
      <table class="table table-striped table-light">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList.users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="alert alert-warning text-center" role="alert">No user found</div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

//const apiUrl = 'https://jsonplaceholder.typicode.com/users'
const apiLocal = 'http://localhost:3001/users'

const userList = reactive({
  users: [],
})

onMounted(async () => {
  axios.get(apiLocal).then((response) => {
    userList.users = response.data
  })

  /* await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      userList.users = data
    }) */
})
</script>
