import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = process.env.NODE_ENV === 'production' ? {
        apiKey: "AIzaSyDB2sIm2VKdU7hi9y2dYx9DmZrw-ak3EYs",
    authDomain: "spacious-263.firebaseapp.com",
    projectId: "spacious-263",
    storageBucket: "spacious-263.firebasestorage.app",
    messagingSenderId: "282764534399",
    appId: "1:282764534399:web:7411d1db40e30b31ae954a",
    measurementId: "G-4418DG1NYK"
} : {
        apiKey: "AIzaSyDB2sIm2VKdU7hi9y2dYx9DmZrw-ak3EYs",
    authDomain: "spacious-263.firebaseapp.com",
    projectId: "spacious-263",
    storageBucket: "spacious-263.firebasestorage.app",
    messagingSenderId: "282764534399",
    appId: "1:282764534399:web:7411d1db40e30b31ae954a",
    measurementId: "G-4418DG1NYK"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
export const analytics = () => getAnalytics(app);

export default app;