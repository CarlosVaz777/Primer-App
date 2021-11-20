import {Route, Switch } from 'react-router-dom';

// pages
import Customers from './pages/Customers';
import CustomersForm from './pages/Customers/CustomersForm';

import Inicio from './pages/Inicio';
import Menu from './pages/Inicio/Menu';
import Products from './pages/Products';

import Ubicacion from './pages/Ubicacion';
import Busqueda from './pages/Ubicacion/Busqueda';
import Mapquest from './pages/Ubicacion/Mapquest';
import Miubicacion from './pages/Ubicacion/Miubicacion';

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/inicio" component={Menu} />

        <Route exact path="/" component={Customers} />
        <Route exact path="/clientes" component={Customers} />
        <Route exact path="/clientes/agregar" component={CustomersForm} />

        <Route exact path="/" component={Products} />
        <Route exact path="/productos" component={Products} />

        <Route exact path="/" component={Ubicacion} />
        <Route exact path="/ubicacion" component={Busqueda} />
        <Route exact path="/ubicacion" component={Mapquest} />
        <Route exact path="/ubicacion/" component={Miubicacion} />

    </Switch>
);

export default Routes;
    