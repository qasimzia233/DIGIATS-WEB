import * as firebase from 'firebase'

 const  FirebaseConfig = {
  apiKey: "AIzaSyDxW71pWLVPVH-rrxo-lm6aM2hUolEt978",
  authDomain: "digiats-expo.firebaseapp.com",
  databaseURL: "https://digiats-expo.firebaseio.com",
  projectId: "digiats-expo",
  storageBucket: "digiats-expo.appspot.com",
  messagingSenderId: "474803597778",
  appId: "1:474803597778:web:14dc6f414e155ce859d80b",
  measurementId: "G-WJ77RZB67F"
};

const firebaseDb=firebase.initializeApp(FirebaseConfig)

export default firebaseDb
















