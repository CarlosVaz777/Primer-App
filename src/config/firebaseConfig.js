// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqigxXbL9UbOsTPiSOXoVXLmph3SvvT1c",
  authDomain: "fr-chat-22b5c.firebaseapp.com",
  databaseURL: "https://fr-chat-22b5c-default-rtdb.firebaseio.com",
  projectId: "fr-chat-22b5c",
  storageBucket: "fr-chat-22b5c.appspot.com",
  messagingSenderId: "740790194538",
  appId: "1:740790194538:web:feab7fea7e8ad4c8d31513",
  measurementId: "G-K49F1WBRJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const database = getDatabase (app);

export {database};
