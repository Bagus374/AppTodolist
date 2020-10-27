import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDw9fx1pHEOBnKaHt32lw0DGRG9vmOH1Kc",
    authDomain: "app-todoist.firebaseapp.com",
    databaseURL: "https://app-todoist.firebaseio.com",
    projectId: "app-todoist",
    storageBucket: "app-todoist.appspot.com",
    messagingSenderId: "917736197318",
    appId: "1:917736197318:web:4bb3ff54807b3aba4edbc7",
});

export { firebaseConfig as firebase };