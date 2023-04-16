

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Tu configuración de Firebase
  apiKey: "AIzaSyBVLxF5KRzB0VkOCUWSA2GJM-YGc-yctpk",
  authDomain: "my-music-player-f163c.firebaseapp.com",
  projectId: "my-music-player-f163c",
  storageBucket: "my-music-player-f163c.appspot.com",
  messagingSenderId: "1080779193940",
  appId: "1:1080779193940:web:a63440c32c6d778f6737c1",
  measurementId: "G-EZ64HTJ0NG"
  // ...
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const functions = getFunctions(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
const storageRef = ref(); 

export { auth, functions, storage, firestore, storageRef  };
