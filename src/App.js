import React,{useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Layout from './components/layout';
import Routes from './Routes';
import Ubicacion from './pages/Ubicacion';
import Mapquest from './pages/Ubicacion/Mapquest';
import Miubicacion from './pages/Ubicacion/Miubicacion';
import Busqueda from './pages/Ubicacion/Busqueda';
import { Pages } from '@mui/icons-material';


function App() {
  // component state
  const [lat, setLat] = useState('19.033333');
  const [lng, setLng] = useState('-98.183334');

  const [markers, setMarkers] = useState([]);

  //fijar el centro del mapa
  const setCenter =(lat,lng)=>{
    setLat(lat);
    setLng(lng);

    window.L.mapquest.Map.getMap('map').setView(new window.L.LatLng(lat,lng), 12);
  };
  //addMarker
  const addMarker =(lat, lng, title, subtitle) =>{
    const marker = window.L.mapquest.textMarker (
      new window.L.LatLng(lat,lng),
      {
        text: title || '',
        subtext: subtitle || '',
        position:'right',
        type:'marker',
        icon:{
          primaryColor:'#a8190f',
          secondaryColor:'#db2c2c',
          size:''
        }
      }
    )
    .addTo(window.L.mapquest.Map.getMap('map'));

    const copyMarkers = markers.slice(0);
    copyMarkers.splice(0,0, marker); //push(marker);
    setMarkers(copyMarkers);
  };

  const clearMarkers = () =>{
    markers.forEach(marker => {
      window.L.mapquest.Map.getMap('map').removeLayer(marker);
  
    });
     //limpiar state
     setMarkers([]);
  };

  return (
    <Router>
      <Layout>
      <Routes />
      </Layout>
    </Router>
  );
   
}

export default App;
