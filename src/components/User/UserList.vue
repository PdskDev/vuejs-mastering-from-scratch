<template>
  <div class="d-flex justify-content-center p-5 m-5" v-if="userList.isLoading">
    <LoaderSpinner />
  </div>
  <div class="container p-4 m-3 bg-white" v-if="!userList.isLoading">
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
    <div v-if="userList.users.length === 0" class="alert alert-warning text-center" role="alert">
      No user found
    </div>
  </div>
</template>
<script setup>
import axios from 'axios'
import { onMounted, reactive } from 'vue'

//const apiUrl = 'https://jsonplaceholder.typicode.com/users'
const apiLocal = 'http://localhost:3001/users'

const userList = reactive({
  users: [],
  isLoading: false,
})

onMounted(() => {
  loadProducts()
})

const loadProducts = () => {
  userList.isLoading = true
  axios.get(apiLocal).then((response) => {
    new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      userList.users = response.data
      userList.isLoading = false
    })
  })
}
</script>
