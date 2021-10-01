import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "../hooks/useForm";
import { fileUpload } from "../helpers/fileUpload";
import { useDispatch } from "react-redux";
import { registerArticuloP } from "../actions/actionArcticulo";

export default function Agregar() {
  const [img, setImg] = useState();
  const [descripciones, setDescripciones] = useState("");
  const dispatch = useDispatch();
  let imgUpload = [];
  let timeout = null;
  const [values, handleInputChange, reset] = useForm({
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
    dispatch(
      registerArticuloP(nombre, precio, ahorras, categoria, image, descripcion)
    );
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
      <h1>Agregar Nuevos Articulos</h1>

      <div>
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="nombre"
          name="nombre"
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="precio"
          name="precio"
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="ahorras"
          name="ahorras"
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="categoria"
          name="categoria"
          onChange={handleInputChange}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Descripcion Uno"
          name="descripcionU"
          onKeyUp={handleInputDes}
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Descripcion Dos"
          name="descripcionD"
          onKeyUp={handleInputDes}
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Descripcion Tres"
          name="descripcionT"
          onKeyUp={handleInputDes}
          variant="outlined"
        />
        <TextField
          sx={{ mt: 3 }}
          id="outlined-basic"
          label="Descripcion Cuatro"
          name="descripcionC"
          onKeyUp={handleInputDes}
          variant="outlined"
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
        <button id="foto" type="submit">
          <span>
            <i className="material-icons" id="br">
              cloud_upload
            </i>
          </span>
          Cargar Articulo
        </button>
      </div>
    </Box>
  );
}
