// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase } from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkrBkE_9mEx5pi2XaOnRkakwe1G5tRbxQ",
    authDomain: "ntut-web-by-108590001.firebaseapp.com",
    databaseURL: "https://ntut-web-by-108590001-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ntut-web-by-108590001",
    storageBucket: "ntut-web-by-108590001.appspot.com",
    messagingSenderId: "293746258865",
    appId: "1:293746258865:web:00c30147eb1a36c5c94390",
    measurementId: "G-GHBC5XE41S"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);