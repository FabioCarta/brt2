<template>
  <q-page class="column items-center">
    <h4>Termine eintragen</h4>
    <q-card class="my-card q-px-sm column items-center">
      <h2 style="font-size: 1.6rem; font-weight: 400" class="q-mb-md q-mt-none">
        Formatbeispiele
      </h2>
      <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="green" name="check_circle" />
          </q-item-section>

          <q-item-section>
            <q-item-label>di6 do8 fr10 sa15</q-item-label>
            <q-item-label caption>mit Leerzeichen funktionierts!</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="green" name="check_circle" />
          </q-item-section>

          <q-item-section>
            <q-item-label>didofrsa10</q-item-label>
            <q-item-label caption
              >Wenn gleiche Uhrzeit, Zahl am Ende</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon color="red" name="cancel" />
          </q-item-section>

          <q-item-section>
            <q-item-label>di6do8fr10sa15</q-item-label>
            <q-item-label caption>Funktioniert nicht!</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
    <date-time-picker @add-to-dates="addToDates"></date-time-picker>
    {{ formattedDates }}
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
      const lastChar = dates.charAt(dates.length - 1);

      const days = dates.substring(0, dates.indexOf(lastChar));

      if (typeof parseInt(lastChar) === 'number' && !dates.includes(' ')) {
        const datesArray = [];
        for (let i = 0, charsLength = days.length; i < charsLength; i += 2) {
          datesArray.push(days.substring(i, i + 2).concat(lastChar));
        }
        datesArray.forEach((element) => {
          shiftsArray.value.push(element);
        });
      } else {
        const datesArray = dates.split(' ');
        datesArray.forEach((element) => {
          shiftsArray.value.push(element);
        });
      }
    };

    const formattedDates = computed(() => {
      return shiftsArray.value.map((element) => {
        const weekday = element.substring(0, 2);
        const time = element.substring(2);

        return `${
          weekday.charAt(0).toUpperCase() + weekday.slice(1)
        } - ${time} Uhr`;
      });
    });

    return { shiftsArray, addToDates, formattedDates };
  },
  components: { DateTimePicker },
});
</script>

<style scoped>
.fixed-width {
  width: 290px;
}
.my-card {
  min-width: fit-content;
  max-width: 70%;
  padding-block: 2rem;
}
</style>
