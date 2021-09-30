import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import ImageListItem from "@mui/material/ImageListItem";
import { useSelector } from "react-redux";
import ListItem from "@mui/material/ListItem";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Detalle() {
  const detalle = useSelector((state) => state.categoria);
  const { image, precio, nombre, ahorras, descripcion } = detalle.product;
  console.log(image);

  return (
    <Box sx={{ flexGrow: 1, mt: 20 }}>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          {image.map((item) => (
            <ImageListItem className="listando" key={item}>
              <img src={item} srcSet={item} alt={nombre} loading="lazy" />
            </ImageListItem>
          ))}
        </Grid>
        <Grid item xs={5}>
          <img
            className="responsive"
            src={image[0]}
            srcSet={image[0]}
            alt={nombre}
            loading="lazy"
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
          <Item className="claridad">
            <h3>
              <span className="predeterminado">${precio}</span>
            </h3>
            <span>Envio Gratis</span>
            <h5>
              Fecha Estimada de entrega: <span>3 Dias habiles</span>{" "}
            </h5>
            <h5 className="predeterminado">
              Puede que lo recibas en halloween
            </h5>
            <Button variant="contained" id="carrito" size="medium">
              <span>
                <i className="material-icons" id="br">
                  shopping_cart
                </i>
              </span>{" "}
              Agregar al Carrito
            </Button>
            <Button variant="contained" id="card" size="medium">
              <span>
                <i className="material-icons" id="br">
                  shopping_cart
                </i>
              </span>{" "}
              Agregar al Carrito
            </Button>
            <h5>Transacción segura</h5>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
