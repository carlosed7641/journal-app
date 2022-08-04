// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { getEnviroments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// const {
//   VITE_APIKEY,
//   VITE_AUTHDOMAIN,
//   VITE_PROJECTID,
//   VITE_STORAGEBUCKET,
//   VITE_MESSAGINGSENDERID,
//   VITE_APPID

// } = getEnviroments();

// // Your web app's Firebase configuration

// //Producción
// const firebaseConfig = {
//   apiKey: VITE_APIKEY,
//   authDomain: VITE_AUTHDOMAIN,
//   projectId: VITE_PROJECTID,
//   storageBucket: VITE_STORAGEBUCKET,
//   messagingSenderId: VITE_MESSAGINGSENDERID,
//   appId: VITE_APPID
// };

// console.log(firebaseConfig);

//Producción
const firebaseConfig = {
  apiKey: "AIzaSyDe_oeHYGNkncPxXEsfs3fLJVsHwVtjoKI",
  authDomain: "react-cursos-f14a0.firebaseapp.com",
  projectId: "react-cursos-f14a0",
  storageBucket: "react-cursos-f14a0.appspot.com",
  messagingSenderId: "491809939636",
  appId: "1:491809939636:web:5dbe704ce96878e7e437e1"
};

//Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyDDij0E1HyL7DUFdIVzJH8GL1odEtueOTA",
//   authDomain: "pruebas-testing-79707.firebaseapp.com",
//   projectId: "pruebas-testing-79707",
//   storageBucket: "pruebas-testing-79707.appspot.com",
//   messagingSenderId: "1072828313688",
//   appId: "1:1072828313688:web:744028b216da5b526a1a2"
// }

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);