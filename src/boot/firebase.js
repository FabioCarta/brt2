import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAUzaoy_HyRrshXB7HvfzaajkHsxP4n8Ig",
  authDomain: "brt2-c3c03.firebaseapp.com",
  projectId: "brt2-c3c03",
  storageBucket: "brt2-c3c03.appspot.com",
  messagingSenderId: "1092310187831",
  appId: "1:1092310187831:web:97c46f02ac362eb32e64b2",
  measurementId: "G-Y1MZ4F1WT6"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);