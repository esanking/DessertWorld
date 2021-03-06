import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/back/Login.vue'),
    },
    {
      path: '/admin',
      component: () => import('@/views/back/DashBoard.vue'),
      meta: { requiresAuth: true },
      children: [
        {
          name: 'products',
          path: '/products',
          component: () => import('@/views/back/Products.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'coupon',
          path: '/coupon',
          component: () => import('@/views/back/Coupon.vue'),
          meta: { requiresAuth: true },
        },
        {
          name: 'orderList',
          path: '/orderList',
          component: () => import('@/views/back/OrderList.vue'),
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/',
      component: () => import('@/views/frontend/HomeNavbar.vue'),
      children: [{
        name: 'home',
        path: '',
        component: () => import('@/views/frontend/Home.vue'),
      },
      {
        name: 'menumodel',
        path: '/menumodel',
        component: () => import('@/views/frontend/MenuModel.vue'),
      },
      {
        name: 'menucard',
        path: '/menucard/:orderid',
        component: () => import('@/views/frontend/MenuCard.vue'),
      },
      {
        name: 'ordercheck',
        path: '/ordercheck',
        component: () => import('@/views/frontend/OrderCheck.vue'),
      },
      {
        name: 'clientForm',
        path: '/clientForm',
        component: () => import('@/views/frontend/ClientForm.vue'),
      },
      {
        name: 'customerCheckout',
        path: '/customerCheckout/:orderId',
        component: () => import('@/views/frontend/CustomerCheckout.vue'),
      },
      {
        name: 'favoriteList',
        path: '/favoriteList',
        component: () => import('@/views/frontend/FavoriteList.vue'),
      },
      ],
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
