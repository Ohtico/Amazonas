import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

export const loadProduct = async (coleciones) => {
  const data = await getDocs(collection(db, coleciones));
  const ProductoList = [];

  data.forEach((hijo) => {
    ProductoList.push({
      id: hijo.id,
      ...hijo.data(),
    });
  });
  return ProductoList;
};
