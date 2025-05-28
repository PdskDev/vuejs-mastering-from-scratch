import { createRouter, createWebHistory } from 'vue-router'

import ContactPage from '@/components/Home/ContactPage.vue'
import HomePage from '@/components/Home/HomePage.vue'
import LogIn from '@/components/Authentication/LogIn.vue'
import NotFound from '@/components/Layout/NotFound.vue'
import ProductDetail from '@/components/Product/ProductDetail.vue'
import ProductList from '@/components/Product/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage,
      name: 'home',
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
      beforeEnter: (to, from) => {
        console.log('Product List Before Guard')
        console.log(to, from)
        const isAdmin = false
        if (isAdmin) {
          return true
        }
        return false
      },
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
      path: '/login',
      component: LogIn,
      name: 'login',
    },
    { path: '/:catchAll(.*)', component: NotFound, name: 'notFound' },
  ],
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
