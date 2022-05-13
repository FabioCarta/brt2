<template>
  <q-page class="column items-center justify-center">
    <h2>Termine eintragen</h2>
    <h6>Beispiele von erlaubten Formaten:</h6>
    <p>mo6 di8 do15 sa10</p>
    <date-time-picker @add-to-dates="addToDates"></date-time-picker>
    {{ shiftsArray }}
  </q-page>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
import DateTimePicker from '../components/dateTimePicker.vue';

export default defineComponent({
  name: 'WorkShifts',
  setup() {
    const shiftsArray = ref([]);

    const addToDates = (dates) => {
      const datesArray = dates.split(' ');
      datesArray.forEach((element) => {
        shiftsArray.value.push(element);
      });
    };

    return { shiftsArray, addToDates };
  },
  components: { DateTimePicker },
});
</script>

<style scoped>
.fixed-width {
  width: 290px;
}
</style>
