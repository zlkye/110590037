// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSUG697WzaSt14EhBukkScDt4_4ehbnHs",
  authDomain: "ntut-web-by-thaksin-f5e53.firebaseapp.com",
  databaseURL: "https://ntut-web-by-thaksin-f5e53-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-web-by-thaksin-f5e53",
  storageBucket: "ntut-web-by-thaksin-f5e53.appspot.com",
  messagingSenderId: "964961319963",
  appId: "1:964961319963:web:7eea02380b0008f0524cbe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);