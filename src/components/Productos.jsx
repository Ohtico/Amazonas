import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux'


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const Productos = () => {
    const theme = useTheme();

    const computadores = useSelector(state => state.product)
    const { product } = computadores

    // let resultados = product.filter(product => product.categoria === 'gadget')

    // console.log(resultados);


    return (

        <Box sx={{ flexGrow: 1, mt: 20 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item sx={{ display: 'flex', mt: 2 }}>xs=4</Item>
                </Grid>
                <Grid item xs={8}>

                    {
                        product.map(probando => (
                            <Card sx={{ display: 'flex', mt: 2 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 190, m: 2 }}
                                    image={probando.image[0]}
                                    alt="Live from space album cover"
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography component="div" variant="p">
                                            <strong> {probando.nombre}</strong>
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
                                        <Typography variant="h6" color="text.secondary" component="div">
                                            us${probando.precio}
                                        </Typography>
                                        <Typography variant="p" color="text.secondary" component="div">
                                            us${probando.ahorras}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary" component="div">
                                            Envio Gratis a Colombia
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Card>

                        ))

                    }



                </Grid>
            </Grid>
        </Box>

    )
}
