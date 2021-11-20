
import Paper from "@mui/material/Paper";
import  Grid  from "@mui/material/Grid";
import  Button  from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useState } from "react";
import {ref, push } from 'firebase/database';
import { withRouter } from "react-router-dom";
import { database } from '../../config/firebaseConfig';

import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const content = (
  <div>
    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
 Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
 Sed malesuada lobortis pretium.`}
  </div>
);

const CustomersForm = (props) => {
const [customers, setCustomers] = useState ({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    company: ''
});

const handleChange = (e) =>{
    setCustomers({
    ...customers,
    [e.target.name]: e.target.value,
    });
};


const handleSudmit = (e) => {
    e.preventDefault();

    push(ref(database, "/customers"), customers)
    .then(() => {
      // Redireccionar a clientes
      props.history.push ("/clientes");
    })
    .catch((error) => {
       console.log(error);
    });
;}

    return (
        <Paper 
     sx={{
         p: 3,
       }}
      >
        
     <Root>
      <Divider>CREA UNA CUENTA</Divider>
    </Root>

    <Grid container spacing = {2} component = "form" onSubmit = {handleSudmit}
     sx = {{mt: 3, justifyContent: 'center'}}>
     
        <Grid item container xs = {12} md = {6} spacing = {2}>
             
            <Grid item xs = {12}>
            
               <TextField 
                 name = "name"
                 required
                 fullWidth
                 label = "Nombre"
                 value = {customers.name}
                 onChange = {handleChange}
                 autoFocus
               />
            </Grid>
            <Grid item xs = {12}>
               <TextField 
                 name = "lastname"
                 required
                 fullWidth
                 label = "Apellidos"
                 value = {customers.lastname}
                 onChange = {handleChange}
               />
            </Grid>
            <Grid item xs = {12}>
               <TextField 
                 name = "email"
                 type = "email"
                 required
                 fullWidth
                 label = "Email"
                 value = {customers.email}
                 onChange = {handleChange}
               />
            </Grid>
            <Grid item xs = {12}>
               <TextField 
                 name = "phone"
                 required
                 fullWidth
                 label = "Telefono"
                 value = {customers.phone}
                 onChange = {handleChange}
               />
            </Grid>
            <Grid item xs = {12}>
               <TextField 
                 name = "company"
                 required
                 fullWidth
                 label = "Empresa"
                 value = {customers.company}
                 onChange = {handleChange}
               />
            </Grid>
              <Grid item xs = {12} sx = {{m: 5, textAlign: 'center' }}>
                 <Button 
                 type = "sudmit"
                 variant="container" 
                 startIcon={<SaveOutlinedIcon />}>
                 Guardar 
                 </Button>
               </Grid>
            </Grid>
         </Grid>
      </Paper>
    );
}

export default withRouter (CustomersForm);

