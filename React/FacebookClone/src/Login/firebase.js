import firebase from "firebase";

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyCMADNo084a9BHRwKJcwCScfKb6iRLGEYE",
    authDomain: "facebookclone-c0fe8.firebaseapp.com",
    databaseURL: "https://facebookclone-c0fe8.firebaseio.com",
    projectId: "facebookclone-c0fe8",
    storageBucket: "facebookclone-c0fe8.appspot.com",
    messagingSenderId: "254745206107",
    appId: "1:254745206107:web:5f710c57f3b02da1ac8e7e",
    measurementId: "G-KBC19LYLZD"
  });

  const auth = firebase.auth();

  export { auth };