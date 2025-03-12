// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs2407yJGl4rO8fi3HvOzLntOhLTYzRQE",
  authDomain: "zohaib-868cc.firebaseapp.com",
  databaseURL: "https://zohaib-868cc-default-rtdb.firebaseio.com",
  projectId: "zohaib-868cc",
  storageBucket: "zohaib-868cc.firebasestorage.app",
  messagingSenderId: "559498663124",
  appId: "1:559498663124:web:9fc1623c0acc950653d741"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const database = getFirestore(app);
// export const storage = getStorage(app);
// const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);

export { database, storage };
