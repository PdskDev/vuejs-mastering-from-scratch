import { createRouter, createWebHistory } from 'vue-router'

import ContactPage from '@/components/Home/ContactPage.vue'
import HomePage from '@/components/Home/HomePage.vue'
import LoginPage from '@/components/Home/LoginPage.vue'
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
      path: '/product-list',
      component: ProductList,
      name: 'productList',
    },
    {
      path: '/product',
      component: ProductDetail,
      name: 'productDetail',
    },
    {
      path: '/product/:productId/:categoryId?',
      component: ProductDetail,
      name: 'productDetailWithId',
    },
    {
      path: '/login',
      component: LoginPage,
      name: 'login',
    },
  ],
})

export default router
