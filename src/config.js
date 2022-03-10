import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCXEhZRF3pL6yLBimgeGhlQdj5UnDv1H1M",
  authDomain: "test-acaa7.firebaseapp.com",
  databaseURL: "https://test-acaa7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-acaa7",
  storageBucket: "test-acaa7.appspot.com",
  messagingSenderId: "1011286892343",
  appId: "1:1011286892343:web:474b76d49036e9323544b2"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export default app ;
