<template>
  <div class="q-pa-md input-width">
    <q-input
      filled
      v-model="dates"
      color="negative"
      label="Tag & Uhrzeit"
      label-color="dark"
      bg-color="primary"
      input-style="color: #000"
      @keypress.enter="$emit('addToDates', dates)"
    >
      <template v-slot:prepend>
        <q-icon name="event" color="dark"> </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer" color="dark">
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'dateTimePicker',
  emits: ['addToDates'],

  setup() {
    const dates = ref('');
    return { dates };
  },
});
</script>

<style scoped>
.input-width {
  width: fit-content;
}
</style>
