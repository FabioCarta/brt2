<template>
  <div
    :class="{
        'justify-center': $q.screen.md || $q.screen.sm || $q.screen.xs,
      }"
    class="col-12 col-md-6 flex content-center"
  >
    <q-card :style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }">
      <q-card-section>
        <q-avatar size="103px" class="absolute-center shadow-10">
          <img src="~assets/avatar.svg" alt="avatar" />
        </q-avatar>
      </q-card-section>
      <q-card-section>
        <div class="q-pt-lg">
          <div class="col text-h6 ellipsis flex justify-center">
            <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">
              Register
            </h2>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class="q-gutter-md" @submit.prevent="register">
          <q-input label="E-Mail" type="email" v-model="email"> </q-input>

          <q-input label="Password" type="password" v-model="password"> </q-input>

          <div>
            <q-btn
              class="full-width"
              color="primary"
              label="Register now"
              type="submit"
              rounded
            ></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import {  defineComponent, ref } from 'vue';
import {  getAuth,
          createUserWithEmailAndPassword,
          sendEmailVerification,

          } from "firebase/auth";
import {  useRouter } from 'vue-router';


export default defineComponent({
  name: 'RegisterComponent',

  setup() {

    const email = ref('');
    const password = ref('');
    const auth = getAuth();
    const router = useRouter()

    const register = () => {
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          const user = getAuth().currentUser;

          const actionCodeSettings = {
            url: `https://brt2.tech/#/home/profile/`,
          };
          //const auth = getAuth();
          sendEmailVerification(user, actionCodeSettings);
          router.push('/emailverification')
          // user.sendEmailVerification(actionCodeSettings);


/*          console.log(user);
          console.log("success")
          router.push('/home/work-shifts')*/
      })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
    };


    return { register, email, password };
  },
});




</script>

<style scoped>

</style>
