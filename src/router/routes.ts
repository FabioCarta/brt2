import { RouteRecordRaw, useRouter } from 'vue-router';
import {getAuth} from "firebase/auth";

const router = useRouter();

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('pages/AppWelcome.vue'),
  },
  {
    path: '/login',
    component: () => import('src/pages/AppLogin.vue'),
  },
  {
    path: '/welcome',
    component: () => import('src/pages/AppWelcome.vue'),
  },
  {
    path: '/register',
    component: () => import('src/components/RegisterComponent.vue'),
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'profile', component: () => import('src/pages/AppProfile.vue') },
      { path: 'work-shifts', component: () => import('pages/WorkShifts.vue') },
      { path: 'summary', component: () => import('pages/WorkSummary.vue') },
    ],
    meta: {
      requiresAuth: true,
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];



export default routes;
