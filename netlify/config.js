const firebase = require("firebase")

const firebaseConfig = {
    apiKey: "AIzaSyDewvFvddU9MT7EAFaKWygUYUiS7VviYDA",
    authDomain: "randmix-e4c93.firebaseapp.com",
    projectId: "randmix-e4c93",
    storageBucket: "randmix-e4c93.appspot.com",
    messagingSenderId: "22775257232",
    appId: "1:22775257232:web:f7720e54f00d0bd6f62015"
  };

const FireBase = firebase.initializeApp(firebaseConfig);
export default Firebase;