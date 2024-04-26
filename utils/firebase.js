// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGByypRQMRe5RHGimIeJI6_LgBWUBZWYg",
  authDomain: "food-store-yummy.firebaseapp.com",
  projectId: "food-store-yummy",
  storageBucket: "food-store-yummy.appspot.com",
  messagingSenderId: "677293580907",
  appId: "1:677293580907:web:7e81229e6d5ab2de10072e",
  measurementId: "G-21HS8TG0TL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
