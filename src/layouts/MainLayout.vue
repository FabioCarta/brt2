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
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useQuasar } from 'quasar';

const linksList = [
  {
    title: 'Home',
    caption: '*wave*',
    icon: 'home',
    link: '#/Home',
  },
  {
    title: 'LogIn',
    caption: 'LogIn / Register',
    icon: 'key',
    link: '#/Login',
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
    link: '#/Summary',
  },
  {
    title: 'Profile',
    caption: 'Profile & Settings',
    icon: 'person',
    link: '#/Profile',
  },
  {
    title: 'Logout',
    icon: 'logout',
    link: '#/Login',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const dark = ref(true);
    const $q = useQuasar();

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
    };
  },
});
</script>
