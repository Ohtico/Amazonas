import { types } from "../types/types";
import { loadProduct } from "../helpers/loadProduct";
import { db } from "../firebase/FirebaseConfig";
import {
  deleteDoc,
  doc,
  updateDoc,
  query,
  where,
  collection,
  getDocs,
} from "@firebase/firestore";
import Swal from "sweetalert2";

export const Listar = (coleciones) => {
  return async (dispatch) => {
    const product = await loadProduct(coleciones);
    dispatch(setProduct(product));
    dispatch(setCategoria(product));
  };
};

export const setProduct = (product) => ({
  type: types.productLoad,
  payload: product,
});

export const setCategoria = (product) => ({
  type: types.productActive,
  payload: product,
});

//delete

export const DeleteArt = (id) => {
  return async (dispatch) => {
    await deleteDoc(doc(db, "Computadores", id));
    dispatch(Listar("Computadores"));
  };
};

export const EditProduct = (
  nombre,
  precio,
  ahorras,
  categoria,
  image,
  descripcion,
  identida
) => {
  return async (dispatch) => {
    //await deleteDoc(doc(db, 'Computadores', id));

    const EditArt = {
      nombre: nombre,
      precio: precio,
      ahorras: ahorras,
      categoria: categoria,
      image: image,
      descripcion: descripcion,
      id: identida,
    };

    console.log(EditArt);

    const docRef = await doc(db, "Computadores", `${identida}`);
    console.log(docRef);

    const updateTimestamp = await updateDoc(docRef, {
      nombre: nombre,
      precio: precio,
      ahorras: ahorras,
      categoria: categoria,
      image: image,
      descripcion: descripcion,
    });
  };
};

export const busquedaSimple = (search) => {
  return async (dispatch) => {
    const citiesRef = collection(db, "Computadores");
    const q = query(citiesRef, where("categoria", "==", search));

    const querySnapshot = await getDocs(q);
    let array = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      array.push(doc.data());
    });
    console.log(array);
    // console.log(querySnapshot);
    dispatch(setProduct(array));
  };
};
