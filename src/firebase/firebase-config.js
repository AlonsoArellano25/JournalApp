import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAHOZI1XU4l9cheHSuHdIAzu6V3ItpXvS4",
    authDomain: "reactjs-apps-b7316.firebaseapp.com",
    projectId: "reactjs-apps-b7316",
    storageBucket: "reactjs-apps-b7316.appspot.com",
    messagingSenderId: "323713243866",
    appId: "1:323713243866:web:9d619599bf2fde1cf263e3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db,
    googleAuthProvider,
    firebase
}