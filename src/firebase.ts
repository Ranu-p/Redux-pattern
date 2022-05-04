
import firebase from 'firebase';
import 'firebase/messaging'
const firebaseConfig = {
  apiKey: "AIzaSyAfGJaPYddvy0-bl25yJxzHT6PYTTBNhVc",
  authDomain: "streamingweb-3409f.firebaseapp.com",
  projectId: "streamingweb-3409f",
  storageBucket: "streamingweb-3409f.appspot.com",
  messagingSenderId: "673438523518",
  appId: "1:673438523518:web:48bf27c43bea041397b82f",
  measurementId: "G-FFG0Y85R1C"
};
try{
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();

}catch(e){
console.log("=====ERROR FROM FIREBASE======")
}
export default firebase;


