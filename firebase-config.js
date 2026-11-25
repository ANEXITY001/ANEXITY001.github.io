// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgr_r6rbedNR5uie8URigv42r0TFu1F9U",
  authDomain: "first-project-x001.firebaseapp.com",
  projectId: "first-project-x001",
  storageBucket: "first-project-x001.firebasestorage.app",
  messagingSenderId: "158838424113",
  appId: "1:158838424113:web:551937e3634cbf57e38b10",
  measurementId: "G-Y8WWD271PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
