import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const BarraDos = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Computadores', 'Smart Home', 'Arte y Artesania'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                        <i className="material-icons" id="car">keyboard_arrow_right</i>
                        <Divider />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Toolbar
                sx={{ backgroundColor: "#242F3E"  }}>
                <Typography
                    variant="p"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, mx: 1 }}>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}><i className="material-icons" id="car">menu</i></Button>
                            <SwipeableDrawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                                onOpen={toggleDrawer(anchor, true)}
                            >
                                {list(anchor)}
                            </SwipeableDrawer>
                        </React.Fragment>
                    ))}
                </Typography>
                <Typography
                    variant="p"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, }}>
                    Todo
                </Typography>
                <Typography
                    variant="p"
                    noWrap
                    component="div"
                    sx={{ ml: 5 }}>
                    Tarjeta de Regalos
                </Typography>
                <Typography
                    variant="p"
                    noWrap
                    component="div"
                    sx={{ mx: 4 }}>
                    Prime
                </Typography>
                <Typography
                    variant="p"
                    noWrap
                    component="div"
                    sx={{ ml: 2 }}>
                    Lo Más Vendidos
                </Typography>
            </Toolbar>
        </>
    );
}

export default BarraDos
