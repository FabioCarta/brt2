<template>
  <img src="~assets/wave-haikei.svg" class="wave" alt="login-wave" />
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="~assets/login.svg" class="responsive" alt="login-image" />
    </div>
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
                Login
              </h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="login2">
            <q-input label="E-Mail" type="email" v-model="email"> </q-input>

            <q-input label="Password" type="password" v-model="password"> </q-input>
            <div>
              <q-btn
                class="full-width"
                color="primary"
                outline
                label="Login :)"
                type="submit"
                rounded
                outline-style="color: red"
              ></q-btn>

              <q-btn
                class="full-width q-mt-sm"
                color="blue"
                label="Login with Google"
                rounded
                @click="signInWithGoogle"
              ></q-btn>

              <div class="text-center q-mt-sm q-gutter-lg">
                <router-link class="text-white" to="/login"
                  >Password vergessen?</router-link
                >
                <router-link class="text-white" to="/register"
                  >Konto anlegen</router-link>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification
} from "firebase/auth";
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'AppLogin',

  setup() {

    const email = ref('');
    const password = ref('');
    const router = useRouter()

    const login = () => {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log("success")
          router.push('/home/work-shifts')
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message + "\n\nFehlerhafte Zugangsdaten, bitte erneut probieren ");
        });
    };

    const login2 = () => {
      signInWithEmailAndPassword(getAuth(), email.value, password.value)
      if(getAuth().currentUser.emailVerified){
        console.log("success")
        router.push('/home/work-shifts')
      } else {
        // console.log(error.code);
        alert("Bitte best??tige deine E-Mail-Adresse");
        const user = getAuth().currentUser;
        const actionCodeSettings = {
          url: `https://brt2.tech/#/home/profile/`,
        };
        //const auth = getAuth();
        sendEmailVerification(user, actionCodeSettings);
      }
    };

    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          console.log(result.user);
          router.push("/home/work-shifts");
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message + "\n\nFehler, bitte erneut probieren ");
        })
    };

    return { login, email, password, signInWithGoogle, login2};
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

.googleBtn{
  color: #4285F4;
}
</style>
