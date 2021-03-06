import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { registroEmailPasswordNombre } from "../actions/actionRegister";
import { useDispatch } from "react-redux";

const Registro = () => {
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    nombre: "",
    email: "",
    pass1: "",
    pass2: "",
  });
  const { nombre, email, pass1, pass2 } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registroEmailPasswordNombre(email, pass1, nombre));
  };

  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",

        justifyContent: "center",
        "& > :not(style)": {
          m: 3,
          width: 350,
          height: 510,
        },
      }}
    >
      <form onSubmit={handleRegistro}>
        <Paper
          sx={{
            p: 2,
            display: "grid",
            bgcolor: "#131921",
            color: "white",
          }}
        >
          <div>
            <img
              src="https://res.cloudinary.com/ohtico/image/upload/v1632519457/amazonas/image_1_ck68q8.png"
              alt="logo"
            />
            <Typography>Registrate</Typography>
            <FormControl sx={{ width: "30ch" }}>
              <OutlinedInput
                sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
                placeholder="Ingrese nombre"
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl sx={{ width: "30ch" }}>
              <OutlinedInput
                sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
                placeholder="Ingrese email"
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl sx={{ width: "30ch" }}>
              <OutlinedInput
                sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
                placeholder="Ingrese contrase??a"
                type="password"
                name="pass1"
                value={pass1}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl sx={{ width: "30ch" }}>
              <OutlinedInput
                sx={{ border: "1px solid #F0AD64", color: "white", m: 1 }}
                placeholder="Repita contrase??a"
                type="password"
                name="pass2"
                value={pass2}
                onChange={handleInputChange}
              />
            </FormControl>
            <div>
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{ bgcolor: "#F0AD64", color: "black", p: 1, width: "30ch" }}
              >
                Registrarse
              </Button>

              <Button
                variant="outlined"
                sx={{ color: "white", width: "28ch", m: 1 }}
              >
                Iniciar sesi??n con{" "}
                <img
                  src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_20/v1632526094/amazonas/2000px-Google_G_Logo.svg__afs75y.png"
                  alt=""
                ></img>
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "white", width: "28ch", m: 1 }}
              >
                Iniciar sesi??n con{" "}
                <img
                  src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_20/v1632529007/amazonas/facebook-logo-3-1_fegy6m.png"
                  alt=""
                ></img>
              </Button>
            </div>
            <p>
              Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de
              Privacidad de amazonas.com.
            </p>
            <p>??Ya tienes una cuenta? </p>
            <div>
              <Link to="/auth">
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    p: 1,
                    width: "35ch",
                    border: "1px solid #F0AD64",
                  }}
                >
                  {" "}
                  Iniciar sesi??n
                </Button>
              </Link>
            </div>
          </div>
        </Paper>
      </form>
    </Box>
  );
};

export default Registro;
