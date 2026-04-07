import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiOTui0z1VBvwj6SE-pLs0-ORKRhdwhY8", 
  authDomain: "hotellrom-database-mf.firebaseapp.com",
  projectId: "hotellrom-database-mf",
  storageBucket: "hotellrom-database-mf.appspot.com",
  messagingSenderId: "104704240349697956432",
  appId: "1:104704240349697956432:web:default"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);