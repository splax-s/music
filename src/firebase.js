import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD9g3hYauV0_w2Fvbe-gLQxdIYpKsh1dd4",
    authDomain: "khaleed-7e4fb.firebaseapp.com",
    projectId: "khaleed-7e4fb",
    storageBucket: "khaleed-7e4fb.appspot.com",
    messagingSenderId: "1093762790718",
    appId: "1:1093762790718:web:cfefd4f0d5575b6666e86f",
    measurementId: "G-BLC7J4WLQG"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();