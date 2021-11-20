import React from 'react';

const Miubicacion = ({setCenter, setMarker}) =>{

    const findMe = () => {
        if (!navigator.geolocation){
            alert('El navegador no soporta geolocalización');
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) =>{
                console.log(position);
                const {latitude, longitude} = position.coords;
                if (setCenter){
                    setCenter(latitude, longitude)
                }
                if (setMarker){
                    setMarker(latitude, longitude, 'Mi ubicación',`lat:${latitude}, lng: ${longitude}`);
                }
            },
            (error)=>{
                alert('Error al obtener la ubicación'`error=${error}`);

            }
        );
    };

    return (
        <button type="button"
        className="btn btn-danger"
        onClick={findMe}>
            Mi ubicación
        </button>
    );
};

export default Miubicacion;