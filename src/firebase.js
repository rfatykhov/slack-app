import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAquxQ0fnkGHi58pxODIW-O085l7UhmfRo",
  authDomain: "react-slack-733a1.firebaseapp.com",
  databaseURL: "https://react-slack-733a1.firebaseio.com",
  projectId: "react-slack-733a1",
  storageBucket: "react-slack-733a1.appspot.com",
  messagingSenderId: "857486707948",
  appId: "1:857486707948:web:a29553ec2e91b79046e9c9",
  measurementId: "G-JPMD6HGLRE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
