// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9o7Ha5Q3Qc9X4w4p7Oua_nLUluQ2Z85s",
  authDomain: "grabbl.firebaseapp.com",
  projectId: "grabbl", // Ensure this matches your Firestore project ID
  storageBucket: "grabbl.firebasestorage.app",
  messagingSenderId: "993650565397",
  appId: "1:993650565397:web:9d9cdabd5fb199859e491c",
  measurementId: "G-6FT6R5V639",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); // Export Firestore instance
