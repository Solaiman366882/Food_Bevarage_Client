// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD998uhtKSVov2dzJdC1c_WIWrcaKt9fTk",
  authDomain: "brand-shop-baf20.firebaseapp.com",
  projectId: "brand-shop-baf20",
  storageBucket: "brand-shop-baf20.appspot.com",
  messagingSenderId: "149114292397",
  appId: "1:149114292397:web:b603e3a4f25fede0e39e24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;