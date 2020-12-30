import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCp3LJSqg7VcL3uRd9_1NClYD92n5d11o8",
    authDomain: "instagram-clone-71013.firebaseapp.com",
    databaseURL: "https://instagram-clone-71013-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-71013",
    storageBucket: "instagram-clone-71013.appspot.com",
    messagingSenderId: "975639639733",
    appId: "1:975639639733:web:a5b7bdf5654e8b6f48f0fc",
    measurementId: "G-8JH9ZWCTR7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };