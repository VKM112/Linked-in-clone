// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9g5QnjMExFivxvcQurUl43kFjCAgOfQA",
  authDomain: "linked-clone-c0929.firebaseapp.com",
  projectId: "linked-clone-c0929",
  storageBucket: "linked-clone-c0929.appspot.com",
  messagingSenderId: "515865232183",
  appId: "1:515865232183:web:aebda3bfd31faca246d0b2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;
