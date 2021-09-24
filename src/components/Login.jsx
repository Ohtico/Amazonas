import * as React from "react";
import FormControl from '@mui/material/FormControl';
import Box from "@mui/material/Box";
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const Login = () => {

    const [name, setName] = React.useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                color: 'white',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                '& > :not(style)': {
                    m: 5,
                    width: 300,
                    height: 470,
                },
            }}
        >
            <Paper
                sx={{
                    p: 2,
                    display: 'grid',
                    bgcolor: '#131921',
                    color: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <div sx={{}}>
                    <img src="https://res.cloudinary.com/ohtico/image/upload/v1632519457/amazonas/image_1_ck68q8.png" alt="logo" />
                    <Typography>Iniciar sesión</Typography>
                    <p>Dirección de correo electrónico</p>
                    <FormControl sx={{ width: '30ch', }}>
                        <OutlinedInput
                            sx={{ border: '1px solid #F0AD64', color: 'white', m: 1 }}
                            placeholder="Ingrese email"
                            value={name}
                            onChange={handleChange}

                        />
                    </FormControl>
                    <FormControl sx={{ width: '30ch' }}>
                        <OutlinedInput
                            sx={{ border: '1px solid #F0AD64', color: 'white', m: 1 }}
                            placeholder="Ingrese contraseña"
                            value={name}
                            onChange={handleChange}
                        />
                    </FormControl>
                    <div>
                        <Button variant="contained" size="small"
                            sx={{ bgcolor: '#F0AD64', color: 'black', p: 1, width: '30ch' }}
                        >
                            Continuar
                        </Button>
                    </div>
                    <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazonas.</p>
                    <p>¿Eres nuevo en Amazon?</p>
                    <div>
                        
                        <Button variant="outlined"
                        sx={{color: 'white', p: 1, width: '35ch', border: '1px solid #F0AD64' }}
                        >Crea tu cuenta de Amazonas</Button>
                    </div>
                </div>

            </Paper>
        </Box>
    );
};

export default Login;
