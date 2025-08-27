import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAN_wb77xwDtsymDHS-X0R_33ZKcFRz81Y",
  authDomain: "like-button-90c68.firebaseapp.com",
  projectId: "like-button-90c68",
  storageBucket: "like-button-90c68.firebasestorage.app",
  messagingSenderId: "882993666209",
  appId: "1:882993666209:web:9946a78b249f66d634f8e0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);