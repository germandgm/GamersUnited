import {collection, doc, getDocs, setDoc} from 'firebase/firestore';
import {db } from '../firebaseConfig'
export const dataCollection = async () => {
    const data = [];
    const querySnapshot = await getDocs(collection(db, `products`));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
        data.push(doc.data());
    });
    return data;
  };