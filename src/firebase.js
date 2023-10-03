import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDskGJ_9GGw4jK3DAllIgYUrgyjIYilDMs",
    authDomain: "linkendin-clone-2c751.firebaseapp.com",
    projectId: "linkendin-clone-2c751",
    storageBucket: "linkendin-clone-2c751.appspot.com",
    messagingSenderId: "375630338291",
    appId: "1:375630338291:web:04abfa70b4864628b07f86"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth }