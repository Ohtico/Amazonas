import * as React from "react";
import FormControl from '@mui/material/FormControl';
import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from 'react-redux'
import { loginSincrono, loginGoogle, loginFacebook } from '../actions/actionLogin'


const Login = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset ] = useForm({

        email: '',
        password: ''
    })
    
    const {email, password} = values;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginSincrono(email, password));
    }

    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

    return (
        <Box
            sx={{
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',

                justifyContent: 'center',
                '& > :not(style)': {
                    m: 5,
                    width: 350,
                    height: 510,
                },
            }}
        >
            <form onSubmit={handleLogin}>
                <Paper
                    sx={{
                        p: 2,
                        display: 'grid',
                        bgcolor: '#131921',
                        color: 'white',
                    }}
                >
                    <div >
                        <img src="https://res.cloudinary.com/ohtico/image/upload/v1632519457/amazonas/image_1_ck68q8.png" alt="logo" />
                        <Typography>Iniciar sesión</Typography>
                        <FormControl sx={{ width: '30ch', }}>
                            <OutlinedInput
                                sx={{ border: '1px solid #F0AD64', color: 'white', m: 1 }}
                                placeholder="Ingrese email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={handleInputChange}

                            />
                        </FormControl>
                        <FormControl sx={{ width: '30ch' }}>
                            <OutlinedInput
                                sx={{ border: '1px solid #F0AD64', color: 'white', m: 1 }}
                                placeholder="Ingrese contraseña"
                                name="password"
                                type="password"
                                value={password}
                                onChange={handleInputChange}
                            />
                        </FormControl>
                        <div>
                            <Button variant="contained" size="small"
                                sx={{ bgcolor: '#F0AD64', color: 'black', p: 1, width: '30ch' }}
                            >
                                Continuar
                            </Button>

                            <Button variant="outlined"
                                sx={{ color: 'white', width: '28ch', m: 1 }}
                                onClick={handleGoogle}
                            >
                                Iniciar sesión <img src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_20/v1632526094/amazonas/2000px-Google_G_Logo.svg__afs75y.png" alt=""
                                ></img>
                            </Button>
                            <Button variant="outlined"
                                sx={{ color: 'white', width: '28ch', m: 1 }}
                                onClick={handleFacebook}
                            >
                                Iniciar sesión con <img src="https://res.cloudinary.com/ohtico/image/upload/c_scale,w_20/v1632529007/amazonas/facebook-logo-3-1_fegy6m.png" alt=""
                                ></img>
                            </Button>
                        </div>
                        <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazonas.</p>
                        <p>¿Eres nuevo en Amazonas?</p>
                        <div>
                            <Link to="/auth/registro">
                                <Button variant="outlined"
                                    sx={{ color: 'white', p: 1, width: '35ch', border: '1px solid #F0AD64' }}
                                > Crea tu cuenta de Amazonas</Button></Link>
                        </div>
                    </div>
                </Paper>
            </form>
        </Box>
    );
};

export default Login;
