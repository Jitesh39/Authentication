import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyCPyjzdw98ByAce5D9inuiVaqYpMWDI8Qk",
  authDomain: "authentication-7f92d.firebaseapp.com",
  projectId: "authentication-7f92d",
  storageBucket: "authentication-7f92d.firebasestorage.app",
  messagingSenderId: "386907629517",
  appId: "1:386907629517:web:50110e7aacc0c212cd8684"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Export Firestore database
