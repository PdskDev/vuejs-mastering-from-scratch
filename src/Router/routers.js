import { createRouter, createWebHistory } from 'vue-router'

import ContactPage from '@/components/Home/ContactPage.vue'
import HomePage from '@/components/Home/HomePage.vue'
import LoginPage from '@/components/Home/LoginPage.vue'
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
      component: LoginPage,
      name: 'login',
    },
    { path: '/:catchAll(.*)', component: NotFound, name: 'notFound' },
  ],
})

export default router
