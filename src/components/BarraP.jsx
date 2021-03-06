import React, { useEffect, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import BarraDos from "./BarraDos";
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/actionLogin";
import { useForm } from "../hooks/useForm";
import { useSelector } from "react-redux";
import { setProduct } from "../actions/actionProduct";
import { useUbicacion } from "../hooks/useUbicacion";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  color: "black",
  borderRadius: "10px",
  backgroundColor: "white",
  marginRight: theme.spacing(1),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  backgroundColor: "#F0AD64",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  height: "100%",
  position: "absolute",
  right: "0px",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

const BarraP = () => {
  const [donde, watch, setWatch] = useUbicacion();
  const handleUbic = async () => {
    setWatch(true);
    console.log(donde);
  };

  const computadores = useSelector((state) => state.categoria);
  const { product } = computadores;
  const dispatch = useDispatch();

  const [busqueda, setBusqueda] = React.useState("");

  const handleBusqueda = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    let final = product.filter((rest) =>
      rest.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    dispatch(setProduct(final));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar sx={{ backgroundColor: "#131921" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_84/v1632519457/amazonas/image_1_ck68q8.png"
              alt="logo"
            />
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, ml: 5 }}
          >
            <i className="material-icons" id="car">
              location_on
            </i>
          </Typography>

          {watch ? (
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <p>{donde}</p>
            </Typography>
          ) : (
            <Typography
              variant="p"
              noWrap
              component="div"
              className="pointer"
              sx={{ display: { xs: "none", sm: "block" } }}
              onClick={handleUbic}
            >
              Hola
              <p>Elige tu direcci??n</p>
            </Typography>
          )}

          <Box component="form">
            <Search>
              <SearchIconWrapper>
                <i className="material-icons" id="br" type="submit">
                  search
                </i>
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ "aria-label": "search" }}
                name="search"
                onChange={handleBusqueda}
              />
            </Search>
          </Box>

          <Typography
            variant="p"
            noWrap
            component="div"
            sx={{ ml: 5 }}
            className="pointer"
          >
            Cuenta
            <p onClick={() => dispatch(startLogout())}>Cerrar sesion</p>
          </Typography>
          <i className="material-icons" id="car">
            arrow_drop_down
          </i>
          <Typography variant="p" noWrap component="div" sx={{ mx: 4 }}>
            Devoluciones
            <p>Y Pedidos</p>
          </Typography>
        </Toolbar>
        <BarraDos />
      </AppBar>
    </Box>
  );
};

export default BarraP;
