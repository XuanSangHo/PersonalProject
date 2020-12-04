import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCLsesW26jFpovAfLsg_vvwIaDUM_8mNNo",
    authDomain: "facebook-clone-a37da.firebaseapp.com",
    databaseURL: "https://facebook-clone-a37da.firebaseio.com",
    projectId: "facebook-clone-a37da",
    storageBucket: "facebook-clone-a37da.appspot.com",
    messagingSenderId: "113651286705",
    appId: "1:113651286705:web:4d59af548fa2fb83e81890",
    measurementId: "G-8EGK8K23WW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;