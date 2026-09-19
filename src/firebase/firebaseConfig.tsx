import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAP64Oe_UuDo2khG5OcAwh4Hh57xopI6Ew",
  authDomain: "auth-web-b1a94.firebaseapp.com",
  projectId: "auth-web-b1a94",
  storageBucket: "auth-web-b1a94.firebasestorage.app",
  messagingSenderId: "1092991200654",
  appId: "1:1092991200654:web:f690c97858bd2ffde5c8df"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();