import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBSbIiWJCevmwLeg3VNGyNat9GsMfwd5t8",
    authDomain: "slack-clone-f0cea.firebaseapp.com",
    projectId: "slack-clone-f0cea",
    storageBucket: "slack-clone-f0cea.appspot.com",
    messagingSenderId: "578014031125",
    appId: "1:578014031125:web:99068bb8b575374642cd1c"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;