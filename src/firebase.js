import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAFuw0o-kBAaKpRzoGGXP9G-iuIlsMCVR8",
  authDomain: "qahtanispeaks-c7e17.firebaseapp.com",
  databaseURL: "https://qahtanispeaks-c7e17.firebaseio.com",
  projectId: "qahtanispeaks-c7e17",
  storageBucket: "qahtanispeaks-c7e17.appspot.com",
  messagingSenderId: "851080339298",
  appId: "1:851080339298:web:80338127521036a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
