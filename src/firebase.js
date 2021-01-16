import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvVRz3ob56GgRzoCaGnPehw2OOA2NuqJw",
  authDomain: "e-commerce-246a8.firebaseapp.com",
  projectId: "e-commerce-246a8",
  storageBucket: "e-commerce-246a8.appspot.com",
  messagingSenderId: "123011444334",
  appId: "1:123011444334:web:b3c942eeafa57e1166807f",
  measurementId: "G-5XXEJTP2S3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };