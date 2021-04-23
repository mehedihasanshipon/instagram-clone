import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// import seed file
// import {seedDatabase} from '../seed'

const firebaseConfig = {
  apiKey: "AIzaSyBMRE1rND-r4kb0thPmWWH_ZU-T6Awdd7E",
  authDomain: "instagram-clone-678ed.firebaseapp.com",
  projectId: "instagram-clone-678ed",
  storageBucket: "instagram-clone-678ed.appspot.com",
  messagingSenderId: "111500965055",
  appId: "1:111500965055:web:72870ec9f2f3e7dc06020a",
};

if (firebase.apps.length === 0) {
  var Firebase = firebase.initializeApp(firebaseConfig);
}

const {FieldValue} = firebase.firestore;

// call seed function
// seedDatabase(Firebase);

export {Firebase,FieldValue}