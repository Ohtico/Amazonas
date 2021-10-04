import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategoria } from "../actions/actionProduct";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Productos = () => {
  const theme = useTheme();

  const computadores = useSelector((state) => state.product);
  const { product } = computadores;
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 2, mt: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={2} sx={{ mt: 2 }}>
          <Item>
            <h4>Envio Gratis por Amazonas</h4>
            <h5>
              <span>
                <input type="checkbox" />
              </span>
              Elegible para Envio Gratis
            </h5>
            <h3>Departamento</h3>
            <h5>Computador</h5>
            <h5>Portatil</h5>
            <h5>Pantalla</h5>
            <h5>Gadget</h5>
            <h3>Reseña del Cliente</h3>
            <div>
              <i className="material-icons" id="car">
                star
              </i>
              <i className="material-icons" id="car">
                star
              </i>
              <i className="material-icons" id="car">
                star
              </i>
              <i className="material-icons" id="car">
                star
              </i>
              <span>o mas</span>
            </div>
            <div>
              <i className="material-icons" id="car">
                star
              </i>
              <i className="material-icons" id="car">
                star
              </i>
              <i className="material-icons" id="car">
                star
              </i>
              <span>o mas</span>
            </div>
            <div>
              <i className="material-icons" id="car">
                star
              </i>
              <i className="material-icons" id="car">
                star
              </i>
              <span>o mas</span>
            </div>
            <div>
              <i className="material-icons" id="car">
                star
              </i>
              <span>o mas</span>
            </div>
          </Item>
        </Grid>
        {product.length ? (
          <Grid item xs={8}>
            {product.map((probando) => (
              <Card sx={{ display: "flex", mt: 2 }}>
                <CardMedia
                  key={probando}
                  component="img"
                  sx={{ width: 190, m: 2 }}
                  image={probando.image[0]}
                  alt={probando.nombre}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="p">
                      <Link
                        className="decoracion"
                        to="/detalle"
                        onClick={() => dispatch(setCategoria(probando))}
                      >
                        <strong> {probando.nombre}</strong>
                      </Link>
                    </Typography>
                    <div>
                      <i className="material-icons" id="car">
                        star
                      </i>
                      <i className="material-icons" id="car">
                        star
                      </i>
                      <i className="material-icons" id="car">
                        star
                      </i>
                      <i className="material-icons" id="car">
                        star
                      </i>
                      <i className="material-icons" id="car">
                        star
                      </i>
                    </div>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      component="div"
                    >
                      us${probando.precio}
                    </Typography>
                    <Typography
                      variant="p"
                      color="text.secondary"
                      component="div"
                    >
                      us${probando.ahorras}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      component="div"
                    >
                      Envio Gratis a Colombia
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Grid>
        ) : (
          <Stack sx={{ width: "80%", m:2 }} spacing={2}>
            <Alert variant="filled" severity="warning">
            No se encontraron articulos por este nombre — Prueba con otro
              nombre!
            </Alert>
            
          </Stack>
        )}
      </Grid>
    </Box>
  );
};
