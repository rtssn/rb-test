// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.React_APP_FIREBASE_API_KEY,
    authDomain: process.env.React_APP_FIREBASE_APP_DOMAIN,
    projectId: process.env.React_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.React_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.React_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.env.React_APP_FIREBASE_MESSAGE_APP_ID
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


export default app;