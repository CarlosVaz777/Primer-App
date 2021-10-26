import React, { useEffect } from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import  Grid  from "@mui/material/Grid";
import  Button  from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { onValue, ref } from "@firebase/database";
import { database } from '../../config/firebaseConfig';



const columns = [

  {
    field: 'fullName',
    headerName: 'Nombre',
    sortable: false,
    width: 240,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'name') || ''} ${
        params.getValue(params.id, 'lastname') || ''
      }`,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 210,
  },
  {
    field: 'phone',
    headerName: 'Telefono',
    width: 210,
  },
  {
    field: 'company',
    headerName: 'Empresa',
    width: 210,
  },
];


const Customers = () => {

const [customers, setCustomers] = useState([]);

useEffect(() => {
     onValue(
       ref(database, "customers/"),
       (snapshot) => {
         const customersList = [];

         snapshot.forEach(item => {
           const customerItem = {
             id: item.key,
             ...item.val()
           };

           customersList.push(customerItem);
         });

         setCustomers(customersList);
       },
       (error) => {
         console.log(error);
      }
  );
}, []);

   return(
     <Paper 
     sx={{
         p: 3,
       }}
      >
         <Grid container spacing={3}>
          <Grid item xs={10}>
            <h3 sx={{ m: 0 }}>Clientes</h3>
         </Grid>

         <Grid item xs={2}>
          <Button variant="outlined" LinkComponent={Link} to="/clientes/agregar" startIcon={<AddCommentOutlinedIcon />}>
           Agregar
           </Button>
        </Grid>

      <Grid item xs={12}>
           
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={customers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
   
           </Grid>
        </Grid>
     </Paper>
    );
};

export default Customers;