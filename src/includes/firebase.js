// Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSdFlbhN6iR4AgkJCj03TPrPvt5AGrMQ4",
    authDomain: "musicplayer-be41e.firebaseapp.com",
    projectId: "musicplayer-be41e",
    storageBucket: "musicplayer-be41e.appspot.com",
    messagingSenderId: "546326252769",
    appId: "1:546326252769:web:b07204cd84ba83541e7ba0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const userCollection = db.collection("users");

export { auth, db, userCollection };
