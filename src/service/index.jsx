import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCymaVmdQTs-AMVqaqcYkwrusPPotmYb0g",
  authDomain: "e-commercech.firebaseapp.com",
  projectId: "e-commercech",
  storageBucket: "e-commercech.appspot.com",
  messagingSenderId: "608248687031",
  appId: "1:608248687031:web:7f0e2893789922ae6ee032"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db