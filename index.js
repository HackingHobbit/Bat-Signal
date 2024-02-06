import firebase from 'firebase/app';
import 'firebase/database';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmEcpgrXYz95vZ4z4BFyZAZH3vBiz6TxU",
  authDomain: "bat-signal-75367.firebaseapp.com",
  projectId: "bat-signal-75367",
  storageBucket: "bat-signal-75367.appspot.com",
  messagingSenderId: "597429227535",
  appId: "1:597429227535:web:34b51c472fcc9a478a537a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = firebase.database();

