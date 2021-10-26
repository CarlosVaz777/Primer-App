import {Route, Switch } from 'react-router-dom';


// pages
import Customers from './pages/Customers';
import CustomersForm from './pages/Customers/CustomersForm';

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Customers} />
        <Route exact path="/clientes" component={Customers} />
        <Route exact path="/clientes/agregar" component={CustomersForm} />
    </Switch>
);

export default Routes;
    