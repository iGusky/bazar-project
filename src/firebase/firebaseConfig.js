import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCzLnR0q-zljovMIMAOcTZmIObERMXqG0c",
    authDomain: "bazar-react.firebaseapp.com",
    projectId: "bazar-react",
    storageBucket: "bazar-react.appspot.com",
    messagingSenderId: "1017368247390",
    appId: "1:1017368247390:web:bbb74921e2a650899ec8cf"
}

firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const storage = firebase.storage();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    storage,
    googleAuthProvider,
    firebase
}