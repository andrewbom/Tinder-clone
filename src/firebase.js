import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmAetA_Fd3VKfoenXyCMsSoOJ6MekNi04",
  authDomain: "tinder-clone-d6931.firebaseapp.com",
  databaseURL: "https://tinder-clone-d6931.firebaseio.com",
  projectId: "tinder-clone-d6931",
  storageBucket: "tinder-clone-d6931.appspot.com",
  messagingSenderId: "569276651231",
  appId: "1:569276651231:web:b2c5ee9f82c3dde453fb6a",
  measurementId: "G-6GCV5BNNWL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
