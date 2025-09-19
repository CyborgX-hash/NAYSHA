import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1pe_bjtKhTKHPOA1k-SNlWReg5u62gdM",
  authDomain: "naysha-73fac.firebaseapp.com",
  projectId: "naysha-73fac",
  storageBucket: "naysha-73fac.firebasestorage.app",
  messagingSenderId: "775642299261",
  appId: "1:775642299261:web:5ca90f2d67f12844ba2a14",
  measurementId: "G-GHYZN8HS4Z",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
