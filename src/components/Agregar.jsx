import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Agregar() {
  return (
    <Box
      component="form"
      
      sx={{mt:20, display: 'flex', justifyContent: 'center', alignItems: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>
            Agregar Nuevos Articulos
        </h1>
        <div>
      <TextField sx={{mt:3}} id="outlined-basic" label="nombre" variant="outlined" />
      <TextField sx={{mt:3}} id="outlined-basic" label="precio" variant="outlined" />
      <TextField sx={{mt:3}} id="outlined-basic" label="ahorras" variant="outlined" />
      <TextField sx={{mt:3}} id="outlined-basic" label="categoria" variant="outlined" />
        </div>
        <div>
      <TextField sx={{mt:3}} id="outlined-basic" label="Descripcion Uno" variant="outlined" />
      <TextField sx={{mt:3}} id="outlined-basic" label="Descripcion Dos" variant="outlined" />
      <TextField sx={{mt:3}} id="outlined-basic" label="Descripcion Tres" variant="outlined" />
      <TextField sx={{mt:3}} id="outlined-basic" label="Descripcion Cuatro" variant="outlined" />
        </div>
        <div>
      <TextField sx={{mt:3}} id="outlined-basic" label="Imagen" variant="outlined" />
        </div>

    </Box>
  );
}