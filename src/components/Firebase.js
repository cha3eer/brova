import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcMb0QkBVDnQZFecHltaCWPC9cKpPAK0U",
  authDomain: "fir-438e5.firebaseapp.com",
  projectId: "fir-438e5",
  storageBucket: "fir-438e5.firebasestorage.app",
  messagingSenderId: "968117651191",
  appId: "1:968117651191:web:6b05aaaee1242ad44835f2",
  measurementId: "G-F0RH0309KW",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db };

export { auth , provider };
