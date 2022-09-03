import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {

    apiKey: "AIzaSyBR1rLney0FtBpDbe0OpHZKrqXzF9FXM-Y",
    authDomain: "upload-files-97fdd.firebaseapp.com",
    projectId: "upload-files-97fdd",
    storageBucket: "upload-files-97fdd.appspot.com",
    messagingSenderId: "1056716980772",
    appId: "1:1056716980772:web:cdd9cf363c8b0ea6f58eb1"

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
