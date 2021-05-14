import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
    
//   };

  var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDK7VhdnXuhS2847IunoIwMa612iz-1pd4",
  authDomain: "portfolio-fde99.firebaseapp.com",
  projectId: "portfolio-fde99",
  storageBucket: "portfolio-fde99.appspot.com",
  messagingSenderId: "149782092532",
  appId: "1:149782092532:web:1736ee3d4ec2933e491ca1",
  measurementId: "G-ZBNL7D4QL8"
  });

  var db = firebaseApp.firestore();

  export {db};