import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyAUzaoy_HyRrshXB7HvfzaajkHsxP4n8Ig',
  authDomain: 'brt2-c3c03.firebaseapp.com',
  projectId: 'brt2-c3c03',
  storageBucket: 'brt2-c3c03.appspot.com',
  messagingSenderId: '1092310187831',
  appId: '1:1092310187831:web:97c46f02ac362eb32e64b2',
  measurementId: 'G-Y1MZ4F1WT6'
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
