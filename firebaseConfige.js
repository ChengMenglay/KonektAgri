// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCXSbGEYVOnTgeuAJkCcafeeFVoCUlMFo",
  authDomain: "authkonekt.firebaseapp.com",
  projectId: "authkonekt",
  storageBucket: "authkonekt.appspot.com",
  messagingSenderId: "519217899504",
  appId: "1:519217899504:web:fe31e04a97a5e4b1bfdf35",
  measurementId: "G-ERWXN9QK7G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const userRef = collection(db, "users");

export const roomRef = collection(db, "rooms");
