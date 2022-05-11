import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue') },
      { path: '', component: () => import('pages/PageLogÍn.vue') },
      { path: '', component: () => import('pages/Login.vue') }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    // path: '/:catchAll(.*)*',
    path: '/login',
    component: () => import('pages/Login.vue'),
  },
];

export default routes;
