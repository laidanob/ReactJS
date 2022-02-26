import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBQwGeH301JP-OEhcYxDCai-s2uTtc_dTc",
  authDomain: "rabbit-store.firebaseapp.com",
  projectId: "rabbit-store",
  storageBucket: "rabbit-store.appspot.com",
  messagingSenderId: "211604948102",
  appId: "1:211604948102:web:11365884425d8b2336fd07"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

;
export {db,auth}