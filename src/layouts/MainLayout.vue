<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          color="dark"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bold text-dark">
          BRT 2.0
        </q-toolbar-title>

        <p v-if="loggedIn">Eingeloggt als: {{ status.currentUser.email }}</p>

        <q-toggle
          v-model="dark"
          size="3.2rem"
          @update:model-value="switchColorScheme"
          checked-icon="dark_mode"
          color="dark"
          unchecked-icon="light_mode"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Willkommen! 👋 </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
        <EssentialLink v-if="loggedIn" v-bind="logout" @click="handleSignOut" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const linksList = [
  {
    title: 'Home',
    caption: '*wave*',
    icon: 'home',
    link: '#/home',
  },
  {
    title: 'Shifts',
    caption: 'Edit Shifts',
    icon: 'work_history',
    link: '#/home/work-shifts',
  },
  {
    title: 'Summary',
    caption: 'Yearly Summary',
    icon: 'calendar_month',
    link: '#/home/summary',
  },
  {
    title: 'Profile',
    caption: 'Profile & Settings',
    icon: 'person',
    link: '#/home/profile',
  },
];
const logout = {
  title: 'Logout',
  caption: 'goodbye',
  icon: 'logout',
  link: '#/login',
};

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const dark = ref(true);
    const $q = useQuasar();
    const status = ref(getAuth());
    const loggedIn = ref(false);
    const router = useRouter();

    let auth: any;

    onMounted(() => {
      auth = getAuth();
      console.log(auth);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          loggedIn.value = true;
        } else {
          loggedIn.value = false;
        }
      });
    });

    const handleSignOut = () => {
      signOut(auth).then(() => {
        router.push('/welcome');
      });
    };

    // function to swtich between light (false) and dark mode (true)
    const switchColorScheme = () => {
      $q.dark.toggle();
    };

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      dark,
      switchColorScheme,
      status,
      loggedIn,
      logout,
      handleSignOut,
    };
  },
});
</script>
