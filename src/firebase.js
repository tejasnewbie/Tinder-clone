// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyAlET-CChznEXLjINvHJKbRXP94HP_HzgM",
  authDomain: "tinder-clone-fe4e0.firebaseapp.com",
  projectId: "tinder-clone-fe4e0",
  storageBucket: "tinder-clone-fe4e0.appspot.com",
  messagingSenderId: "266393722451",
  appId: "1:266393722451:web:5c413d459b9fd999ef30a6",
  measurementId: "G-PG6W8KGFDB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
export default database