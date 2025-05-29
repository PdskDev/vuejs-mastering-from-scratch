import { createRouter, createWebHistory } from 'vue-router'

import ContactPage from '@/components/Home/ContactPage.vue'
import GamePage from '@/components/Home/GamePage.vue'
import HomePage from '@/components/Home/HomePage.vue'
import LogIn from '@/components/Authentication/LogIn.vue'
import NoAccess from '@/components/Layout/NoAccess.vue'
import NotFound from '@/components/Layout/NotFound.vue'
import ProductDetail from '@/components/Product/ProductDetail.vue'
import ProductList from '@/components/Product/ProductList.vue'
import UserList from '@/components/User/UserList.vue'

const isAdmin = () => {
  const isAdmin = false
  if (isAdmin) {
    return true
  }
  return {
    name: 'noAccess',
  }
}

const isAuthenticated = () => {
  const isAuthenticated = true
  if (isAuthenticated) {
    return true
  }
  return false
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'home',
    },
    {
      path: '/game',
      component: GamePage,
      name: 'game-page',
    },
    {
      path: '/contact',
      component: ContactPage,
      name: 'contact',
    },
    {
      path: '/contact-us',
      redirect: { name: 'contact' },
    },
    {
      path: '/product-list',
      component: ProductList,
      name: 'productList',
      beforeEnter: [isAdmin, isAuthenticated],
    },
    {
      path: '/product',
      component: ProductDetail,
    },
    {
      path: '/product/:productId/:categoryId?',
      component: ProductDetail,
      name: 'productDetail',
      props: true,
    },
    {
      path: '/users',
      component: UserList,
      name: 'users',
    },
    {
      path: '/login',
      component: LogIn,
      name: 'login',
    },
    {
      path: '/noaccess',
      component: NoAccess,
      name: 'noAccess',
    },
    { path: '/:catchAll(.*)', component: NotFound, name: 'notFound' },
  ],
  linkActiveClass: 'active btn btn-primary',
})

router.beforeEach((to, from) => {
  console.log('Global Before Guard')
  console.log(to, from)

  const isAuthenticated = true

  if (to.name == 'home') {
    return true
  }

  if (!isAuthenticated && to.name !== 'login') {
    return { name: 'login' }
  }
  return true
})

export default router
