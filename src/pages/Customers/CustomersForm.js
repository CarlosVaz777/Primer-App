import Paper from "@mui/material/Paper";
import  Grid  from "@mui/material/Grid";
import  Button  from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { useState } from "react";

const CustomersForm = () => {
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

    console.log("Guardar");
;}

    return (
        <Paper 
     sx={{
         p: 3,
       }}
      >
     
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
                 Guardar cliente
                 </Button>
               </Grid>
            </Grid>
         </Grid>
      </Paper>
    );
}

export default CustomersForm;