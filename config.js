import firebase from 'firebase';
require('@firebase/firestore')

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
  apiKey: "AIzaSyB3MEfCdA2yaEcu4RLbIL2fHVnnzfYRI14",
  authDomain: "booksanta-896b0.firebaseapp.com",
  projectId: "booksanta-896b0",
  storageBucket: "booksanta-896b0.appspot.com",
  messagingSenderId: "372658569746",
  appId: "1:372658569746:web:70b6710dfb364abfdccecb",
  measurementId: "G-5TYBQGWY1L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore();
