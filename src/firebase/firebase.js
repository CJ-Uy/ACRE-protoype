import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7yL_s3ZnjlcZ_cxLp2Sbh88udTP_cPJc",
  authDomain: "acre-e80e1.firebaseapp.com",
  projectId: "acre-e80e1",
  storageBucket: "acre-e80e1.appspot.com",
  messagingSenderId: "72158155327",
  appId: "1:72158155327:web:95ad0ee46419e019a25e8a",
  measurementId: "G-NNWDC2C9BE",
};

//initialize firebase app
const app = initializeApp(firebaseConfig);

//initialize services
const db = getFirestore(app);

export { db };
