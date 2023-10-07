// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlO3jz0tV_5i5yo5W5Xhjg-aisFF9M07U",
  authDomain: "my-db-d4fef.firebaseapp.com",
  projectId: "my-db-d4fef",
  storageBucket: "my-db-d4fef.appspot.com",
  messagingSenderId: "68962559055",
  appId: "1:68962559055:web:97852263c6b391dce9b63a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
