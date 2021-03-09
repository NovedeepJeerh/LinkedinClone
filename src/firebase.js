import firebase from  "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAkultHxrw-a4WwEsKYxL3rFX3FqIR-l2Y",
    authDomain: "linkedin-clone-c71a8.firebaseapp.com",
    projectId: "linkedin-clone-c71a8",
    storageBucket: "linkedin-clone-c71a8.appspot.com",
    messagingSenderId: "514009883721",
    appId: "1:514009883721:web:ddc7754726438c48758b98"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };
