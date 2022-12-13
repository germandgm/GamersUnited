import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlUIhc7eOYGOa17uniTBqvWwD96i-_eX4",
  authDomain: "database-9d577.firebaseapp.com",
  projectId: "database-9d577",
  storageBucket: "database-9d577.appspot.com",
  messagingSenderId: "300458904577",
  appId: "1:300458904577:web:9009c318e602b96e7a4400"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

