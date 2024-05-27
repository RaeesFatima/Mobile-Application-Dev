import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWSmO3B_3xxOtCGv0JetvJsxSQh1cbPGg",
    authDomain: "raees-c23ac.firebaseapp.com",
    projectId: "raees-c23ac",
    storageBucket: "raees-c23ac.appspot.com",
    messagingSenderId: "524612951853",
    appId: "1:524612951853:web:2fb45b7ce6545638d9bda4",
    databaseURL:"https://raees-c23ac-default-rtdb.asia-southeast1.firebasedatabase.app",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};