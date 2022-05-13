<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  created() {
    this.$q.dark.set(true);
  },
  setup() {
    const router = useRouter();
    router.beforeEach((to, from, next) => {
      if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
          next();
        } else {
          alert('you dont have access');
          next('/');
        }
      } else {
        next();
      }
    });
  },
});
</script>
