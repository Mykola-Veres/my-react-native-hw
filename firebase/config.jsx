// import firebase from "firebase/app";
import * as firebase from "firebase";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIz4AtpNsD6DBrxVwGXYa_Vnkc0jHtkuY",
  authDomain: "project-test-16d62.firebaseapp.com",
  databaseURL:
    "https://project-test-16d62-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "project-test-16d62",
  storageBucket: "project-test-16d62.appspot.com",
  messagingSenderId: "931914985854",
  appId: "1:931914985854:web:3e066bbbc578ce03abc32f",
};

firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
export default firebase;
