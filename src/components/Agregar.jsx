import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useForm } from "../hooks/useForm";
import { fileUpload } from "../helpers/fileUpload";
import { useDispatch } from "react-redux";
import { registerArticuloP } from "../actions/actionArcticulo";
import { useSelector } from "react-redux";
import { EditProduct } from "../actions/actionProduct";

export default function Agregar() {
  const [img, setImg] = useState();
  const [descripciones, setDescripciones] = useState("");
  const dispatch = useDispatch();
  let imgUpload = [];
  let timeout = null;

  //editar articulos}
  let titulo1 = "Agregar Nuevos Articulos";
  let titulo2 = "Editar Este Articulos";
  const [titulo, setTitulo] = useState(titulo1);
  const detalle = useSelector((state) => state.categoria);
  const { product } = detalle;
  const [editForm, setEditForm] = useState(false);

  let identida = product.id;

  useEffect(() => {
    if (product.length === undefined) {
      setTitulo(titulo2);
      setEditForm(true);
      setValues(product);
    } else {
      console.log("Estas agregando");
    }
  }, []);

  const [values, handleInputChange, reset, setValues] = useForm({
    nombre: "",
    precio: "",
    ahorras: "",
    categoria: "",
    image: "",
    descripcion: "",
  });

  let { nombre, precio, ahorras, categoria, image, descripcion } = values;

  const uploadImg = () => {
    document.getElementById("upload").click();
  };

  const handleUpload = (e) => {
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      fileUpload(file)
        .then((resp) => {
          imgUpload.push(resp);
          setImg(imgUpload);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const handleInputDes = ({ target }) => {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => setDescripciones([...descripciones, target.value]),
      500
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    image = img;
    descripcion = descripciones;
    if (editForm) {
      // alert("editar")
      dispatch(
        EditProduct(
          nombre,
          precio,
          ahorras,
          categoria,
          image,
          descripcion,
          identida
        )
      );
    } else {
      // alert("agregar nuevo")
      dispatch(
        registerArticuloP(
          nombre,
          precio,
          ahorras,
          categoria,
          image,
          descripcion
        )
      );
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        mt: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>{titulo}</h1>

      <div>
        <textarea
          name="nombre"
          placeholder="nombre"
          value={nombre}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="precio"
          name="precio"
          value={precio}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="ahorras"
          name="ahorras"
          value={ahorras}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="categoria"
          name="categoria"
          value={categoria}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <textarea
          placeholder="Descripcion Uno"
          name="descripcion"
          defaultValue={descripcion[0]}
          onKeyUp={handleInputDes}
        />
        <textarea
          placeholder="Descripcion Dos"
          name="descripcionD"
          defaultValue={descripcion[1]}
          onKeyUp={handleInputDes}
        />
        <textarea
          placeholder="Descripcion Tres"
          name="descripcionT"
          defaultValue={descripcion[2]}
          onKeyUp={handleInputDes}
        />
        <textarea
          placeholder="Descripcion Cuatro"
          name="descripcionC"
          defaultValue={descripcion[3]}
          onKeyUp={handleInputDes}
        />
      </div>
      <div>
        <button type="button" id="foto" onClick={uploadImg}>
          <span>
            <i className="material-icons" id="br">
              attach_file
            </i>
          </span>
          Agregar Imagen
        </button>
        <input type="file" multiple id="upload" onChange={handleUpload} />

        {!editForm ? (
          <button id="foto" type="submit">
            <span>
              <i className="material-icons" id="br">
                cloud_upload
              </i>
            </span>
            Cargar Articulo
          </button>
        ) : (
          <button id="foto" type="submit">
            <span>
              <i className="material-icons" id="br">
                file_upload
              </i>
            </span>
            Actualizar Articulo
          </button>
        )}
      </div>
    </Box>
  );
}
