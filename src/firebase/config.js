import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDvQq6bCUBWlckC8Gd8K2VdG9t4R74JwHo",
    authDomain: "muso-ninjas-11f09.firebaseapp.com",
    projectId: "muso-ninjas-11f09",
    storageBucket: "muso-ninjas-11f09.appspot.com",
    messagingSenderId: "698601661813",
    appId: "1:698601661813:web:9f900ddca256cb67c65f3c"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

