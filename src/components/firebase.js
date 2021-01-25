import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2jrQ8KTNj8OUqEqTUGsh2Haz2Koit-nk",
    authDomain: "clone-4740e.firebaseapp.com",
    projectId: "clone-4740e",
    storageBucket: "clone-4740e.appspot.com",
    messagingSenderId: "731095196478",
    appId: "1:731095196478:web:85318a897d3bfc7a3c426f",
    measurementId: "G-M0XQ8PWGWZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };