import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDvRjbjq4IvNMDJVRGX_mZrkaIf5l8WjFA",
    authDomain: "photo-tagging-4d9f9.firebaseapp.com",
    projectId: "photo-tagging-4d9f9",
    storageBucket: "photo-tagging-4d9f9.appspot.com",
    messagingSenderId: "349665774573",
    appId: "1:349665774573:web:99f57e27d79d8fecdaf5e4",
    measurementId: "G-CV703E7PN9"
};

firebase.initializeApp(config)

export default firebase