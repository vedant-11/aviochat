// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyBKjFzTkTwC3baYOkLJA5jPid7zw2ko_4w",
    authDomain: "avio-dc275.firebaseapp.com",
    projectId: "avio-dc275",
    storageBucket: "avio-dc275.appspot.com",
    messagingSenderId: "829767700696",
    appId: "1:829767700696:web:36ea95420e7f4cd63ec7ad",
  })
  .auth();

// Initialize Firebase
