
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBLTByi29EN1oqOLoUP493OpY91vKGps8",
    authDomain: "nxtcalendar-aafb4.firebaseapp.com",
    projectId: "nxtcalendar-aafb4",
    storageBucket: "nxtcalendar-aafb4.appspot.com",
    messagingSenderId: "692168921946",
    appId: "1:692168921946:web:3c795183af42cdc0239963",
    measurementId: "G-BQ6REY49V1"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

