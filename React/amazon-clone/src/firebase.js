import firebase from "firebase";

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyAt1EgDCXnXZHgYBubVJhhN4E2HhyKIHbc",
    authDomain: "clone-9a204.firebaseapp.com",
    databaseURL: "https://clone-9a204.firebaseio.com",
    projectId: "clone-9a204",
    storageBucket: "clone-9a204.appspot.com",
    messagingSenderId: "202805360883",
    appId: "1:202805360883:web:e34ef2f6ebf0f5acefdf86",
    measurementId: "G-N79EZYWFRG"
  });


  const auth = firebase.auth();

  export { auth};