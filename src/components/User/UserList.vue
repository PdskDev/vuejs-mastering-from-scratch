<template>
  <div class="d-flex justify-content-center p-5 m-5" v-if="userList.isLoading">
    <span class="loader"></span>
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
<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  transform: rotate(45deg);
  background: #fff;
}
.loader::before {
  content: '';
  box-sizing: border-box;
  position: absolute;
  inset: 0px;
  border-radius: 50%;
  border: 24px solid #ff3d00;
  animation: prixClipFix 2s infinite linear;
}

@keyframes prixClipFix {
  0% {
    clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
  }
  25% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
  }
  75% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
  }
  100% {
    clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
  }
}
</style>
