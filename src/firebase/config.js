// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe_oeHYGNkncPxXEsfs3fLJVsHwVtjoKI",
  authDomain: "react-cursos-f14a0.firebaseapp.com",
  projectId: "react-cursos-f14a0",
  storageBucket: "react-cursos-f14a0.appspot.com",
  messagingSenderId: "491809939636",
  appId: "1:491809939636:web:5dbe704ce96878e7e437e1"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);