import { typesArticulo } from "../types/types";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/FirebaseConfig";

export const registerArticuloP = (
  nombre,
  precio,
  ahorras,
  categoria,
  image,
  descripcion
) => {
  return (dispatch) => {
    const newArticulo = {
      nombre,
      precio,
      ahorras,
      categoria,
      image,
      descripcion,
    };
    addDoc(collection(db, "Computadores"), newArticulo)
      .then((resp) => {
        dispatch(registerArticulaSincrono(newArticulo));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const registerArticulaSincrono = (productos) => {
  return {
    type: typesArticulo.resgister,
    payload: productos,
  };
};
