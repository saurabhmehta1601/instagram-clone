import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config={  
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "instagram-clone-edb9e.firebaseapp.com",
    projectId: "instagram-clone-edb9e",
    storageBucket:"instagram-clone-edb9e.appspot.com",
    messagingSenderId: "145966185027",
    appId: "1:145966185027:web:4ff6e45a7431ddbad032f6",
    measurementId: "G-RMVSNNWB7W"
}

const firebase = Firebase.initializeApp(config)
const {FieldValue} = Firebase.firestore;


export {FieldValue,firebase}