import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDD9ewuFZjSa7e67ZTKXnJU7wEqJNInFGE",
  authDomain: "portfolio-sagar.firebaseapp.com",
  projectId: "portfolio-sagar",
  storageBucket: "portfolio-sagar.appspot.com",
  messagingSenderId: "273109034358",
  appId: "1:273109034358:web:b18d6530910b51a54a4657",
  measurementId: "G-ETYLSYZ117",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
