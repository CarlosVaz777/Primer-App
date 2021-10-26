import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';


export const menuItems = (
  <div>
    <ListItem to="/" component={Link}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <ListItem to="/clientes" component={Link}>
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>

    <ListItem to="/productos" component={Link}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>


  </div>
);
