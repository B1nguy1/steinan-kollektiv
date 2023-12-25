import { initializeApp,getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCvgamtmJmqtiHZEiJ0ZVUuFCHNTY816dI",
  authDomain: "steinan-app.firebaseapp.com",
  projectId: "steinan-app",
  storageBucket: "steinan-app.appspot.com",
  messagingSenderId: "227861202122",
  appId: "1:227861202122:web:00a2c5e118bbe955ada033",
  measurementId: "G-9CKBP293GC"
};

const firebaseApp = (getApps().length === 0 ? initializeApp(firebaseConfig): getApp());

const db = getFirestore(); 

export{firebaseApp,db};