import firebase from 'firebase/app';
 import "firebase/firestore";
 import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAY1DF-WWluu7S5aBK6-Jv-ReY08QaaB-M",
    authDomain: "movie-booking-app-181ba.firebaseapp.com",
    projectId: "movie-booking-app-181ba",
    storageBucket: "movie-booking-app-181ba.appspot.com",
    messagingSenderId: "774560527443",
    appId: "1:774560527443:web:b451a308085bf8690982a6"

    // apiKey: "AIzaSyBmC6AO5um500v7_jQNi8w9hUXimxhZzUs",

    // authDomain: "movieapp-4a291.firebaseapp.com",

    // projectId: "movieapp-4a291",

    // storageBucket: "movieapp-4a291.appspot.com",

    // messagingSenderId: "723428238836",

    // appId: "1:723428238836:web:6b48f97dbd9d20c547c5a1"

  };



  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

 export {auth};

  export default db;
