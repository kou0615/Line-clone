import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxMkgI0WS9EhIDkhkJOTlL6jeOfIN8XqA",
  authDomain: "lineclone-1212f.firebaseapp.com",
  projectId: "lineclone-1212f",
  storageBucket: "lineclone-1212f.appspot.com",
  messagingSenderId: "767189703746",
  appId: "1:767189703746:web:6a7e55549e845296eca1db",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
