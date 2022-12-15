import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProductsFromFireStore = async () => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    data.push(doc.data());
    
  });
  
  return data;
};



