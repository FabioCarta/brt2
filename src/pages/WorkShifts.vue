<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <q-date
        text-color="dark"
        v-model="days"
        multiple
        :today-btn="true"
        mask="dddd, DD.MM.YYYY"
      />
    </div>
    <div class="column">
      <div v-for="(day, index) in days" :key="index" class="col-1">
        <q-btn-dropdown
          :glossy="true"
          color="primary"
          :label="day"
          text-color="dark"
          class="fixed-width"
          @click="handleDropdown"
        >
          <q-list>
            <q-item
              v-for="(time, index) in times"
              :key="index"
              clickable
              v-close-popup
              @click="onItemClick(day, time)"
            >
              <q-item-section>
                <q-item-label>{{ time }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'WorkShifts',

  setup() {
    const days = ref([]);
    const times = ['06:00', '08:00', '10:00', '15:00'];

    const onItemClick = (day, time) => {
      console.log('hello');
    };

    const handleDropdown = () => {
      const dayLabel = event.target.innerHTML;
      const index = days.value.findIndex((day) => day === dayLabel);
      return index;
    };

    return { days, times, handleDropdown, onItemClick };
  },
});
</script>

<style scoped>
.fixed-width {
  width: 290px;
}
</style>
