<template>
  <div class="q-pa-md" style="max-width: 300px">
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
        <q-icon name="event" class="cursor-pointer" color="dark">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date v-model="date" mask="YYYY-MM-DD HH:mm" color="dark">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer" color="dark">
          <q-popup-proxy
            color="dark"
            cover
            transition-show="scale"
            transition-hide="scale"
            @hide="$emit('addToDates', dates)"
          >
            <q-time
              v-model="date"
              mask="YYYY-MM-DD HH:mm"
              format24h
              color="dark"
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
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
