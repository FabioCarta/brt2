<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  created() {
    this.$q.dark.set(true);
  },
  setup() {
    const router = useRouter();

    const getCurrentUser = () => {
      return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
          getAuth(),
          (user) => {
            removeListener();
            resolve(user);
          },

          reject
        )
      })
    }

/*    const getVerified = () => {
      return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
          getAuth().currentUser.emailVerified,
          (verified) => {
            removeListener();
            resolve(verified);
          },

          reject
        )
      })
    }*/


    router.beforeEach(async(to, from, next) => {
      if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
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
