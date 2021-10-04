import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ReactImageMagnify from "react-image-magnify";
import ImageListItem from "@mui/material/ImageListItem";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { DeleteArt } from "../actions/actionProduct";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Detalle() {
  const detalle = useSelector((state) => state.categoria);
  const { image, precio, nombre, ahorras, descripcion, id } = detalle.product;
  let history = useHistory();
  const [imagen, setImagen] = React.useState(`${image[0]}`);
  const dispatch = useDispatch();

  const mostrar = (img) => {
    setImagen(img);
  };

  const handleEdit = () => {
    history.push("/agregar");
  };

  const handleDelete = (id) => {
    dispatch(DeleteArt(id));
    history.push("/");
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          {image.map((item) => (
            <ImageListItem className="listando" key={item}>
              <img
                src={item}
                onClick={() => mostrar(item)}
                srcSet={item}
                alt={nombre}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </Grid>
        <Grid item xs={5}>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: `${nombre}`,
                isFluidWidth: true,
                src: imagen,
              },
              largeImage: {
                src: imagen,
                width: 800,
                height: 1050,
              },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <h4>{nombre}</h4>
          <hr />
          <h5>
            Precio: <span className="predeterminado">US${precio}</span>
          </h5>
          <h6>
            Ahorras: <span className="predeterminado">US${ahorras}</span>
          </h6>
          <h4>Sobre este articulo</h4>
          <ul>
            {descripcion.map((text, index) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </Grid>
        <Grid item xs={2}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>
              <span className="predeterminado">US${precio}</span>
            </h3>
            <span>Envio Gratis</span>
            <h5>
              Fecha Estimada de entrega: <span>3 Dias habiles</span>{" "}
            </h5>
            <h5 className="predeterminado">
              Puede que lo recibas en halloween
            </h5>

            <button id="card" onClick={handleEdit}>
              <span>
                <i className="material-icons" id="br">
                  smart_display
                </i>
              </span>
              Editar
            </button>
            <button id="card" onClick={() => handleDelete(id)}>
              <span>
                <i className="material-icons" id="br">
                  smart_display
                </i>
              </span>
              Eliminar Articulo
            </button>
            <h5>Transacción segura</h5>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
