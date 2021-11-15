
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBjSP7eg2Jxm11Go0WAQwK1Bq2Yc93WJhk",
  authDomain: "taxi-assist.firebaseapp.com",
  projectId: "taxi-assist",
  storageBucket: "taxi-assist.appspot.com",
  messagingSenderId: "170374769780",
  appId: "1:170374769780:web:65e45dda94813bac453521",
  measurementId: "G-XWB6D66DWY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

var db = firebaseApp.firestore();

export { auth, db};
