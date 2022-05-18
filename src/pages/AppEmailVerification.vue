<template>
  <img src="~assets/wave-haikei.svg" class="wave" alt="login-wave" />
  <div class="row" style="height: 90vh">
    <div class="col-1 col-md-6 flex justify-center content-center">
      <img src="~assets/inbox.svg" class="responsive" alt="schedule-image" />
    </div>
    <div
      :class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }"
      class="col-12 col-md-6 flex content-center"
    >
      <q-card :style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }">
        <q-card-section>
          <h1 class="welcomeText absolute-center q-mt-auto q-pb-lg">
            Email_gesendet!
          </h1>
        </q-card-section>
        <q-card-section>
          <div class="q-pa-md row items-center">
            <h6 class="text-h6 q-my-none text-weight-small q-mb-md description-text">
              Wir haben dir eine Bestätigungs-E-Mail geschickt.
              <br><br>
              Bitte überprüfe dein Postfach und klicke den enthaltenen Link an, um deine E-Mail-Adresse zu bestätigen! <br><br>
            </h6>
              <br/><br/>

            <q-separator />
            <q-card-actions class="row justify-center full-width">
              <q-btn type="a" href="/#/login" class="self-center"   outline style="color: #ffcc00;"
                >Zurück</q-btn
              >
            </q-card-actions>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',

  setup() {
    const submitForm = () => {
      console.log('submitted');
    };

    return { submitForm };
  },
});
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
.welcomeText {
  font-family: 'Parisienne';
  stroke-linejoin: round;
  text-anchor: middle;
  fill: black;
  stroke: white;
  stroke-width: 12px;
  paint-order: stroke;
  font-size: 4rem;
  size: landscape;
}

.description-text {
  font-family: 'Signika', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.6px;
}
</style>
