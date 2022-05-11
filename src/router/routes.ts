import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/AppHome.vue') },
      { path: 'profile', component: () => import('src/pages/AppProfile.vue') },
      { path: 'shifts', component: () => import('pages/WorkShifts.vue') },
      { path: 'summary', component: () => import('pages/WorkSummary.vue') },
    ],
  },
  // {
  //   path: '/home',
  //   component: () => import('pages/AppHome.vue'),
  // },
  {
    path: '/login',
    component: () => import('src/pages/AppLogin.vue'),
  },
  // {
  //   path: '/profile',
  //   component: () => import('pages/AppProfile.vue'),
  // },
  // {
  //   path: '/summary',
  //   component: () => import('pages/WorkSummary.vue'),
  // },
  // {
  //   path: '/shifts',
  //   component: () => import('pages/WorkShifts.vue'),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
