// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-jcd5zaXer13Kp78W1vn10M_p79Ff95o",
  authDomain: "sing-up-from.firebaseapp.com",
  projectId: "sing-up-from",
  storageBucket: "sing-up-from.appspot.com",
  messagingSenderId: "562501783016",
  appId: "1:562501783016:web:3c819a3177ef01cdff285d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app