import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoomIcon from '@mui/icons-material/Room';
import { Link } from 'react-router-dom';


export const menuItems = (
  <div>
    <ListItem to="/inicio" component={Link}>
      <ListItemIcon>
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <ListItem to="/clientes" component={Link}>
      <ListItemIcon>
        <AppRegistrationIcon />
      </ListItemIcon>
      <ListItemText primary="Registro" />
    </ListItem>

    <ListItem to="/productos" component={Link}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>

    <ListItem to="/ubicacion" component={Link}>
      <ListItemIcon>
        <RoomIcon />
      </ListItemIcon>
      <ListItemText primary="Ubicacion" />
    </ListItem>


  </div>
);
