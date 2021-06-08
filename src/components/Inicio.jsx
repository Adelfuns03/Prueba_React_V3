import React from 'react';
import {Button, Typography} from "@material-ui/core";



function Inicio() {
     

    return ( 
 
       <div className='container-fluid' align='center' >
            <Typography variant="h1"  gutterBottom>BIENVENIDO/A</Typography>

            <Typography variant="h4" paragraph > En esta página encontraras información acerca de 3 ciudades, las cuales son:
                Bogotá D.C - Colombia, Cartagena - Colombia y New York - Estados unidos. </Typography>

            
            <Typography variant="h5" align="left" paragraph style={{ backgroundColor: '#9e9e9e', height: '10vh' }} > 
            Para poderte desplazar encontraras en la parte superior izquierda 4 botones de color negro, 
            los cuales te llevaran a la información de la ciudad que quieres 
            consultar. </Typography>

            <Typography variant="h5" align="left" style={{ backgroundColor: '#03a9f4', height: '15vh' }} paragraph>
            Una vez que te encuentres en la sección de la ciudad que querias consultar, podras ver las noticias
            y el reporte del clima de una manera sencilla; a su vez te encontraras con 2 tipos de botones : {"  "}
            <Button variant="contained" color="primary"> Clima </Button> {"      "}  y  {"      "}
            <Button variant="contained" color="secondary"> Noticias </Button> {"     "}
            los cuales te ayudaran a observar los datos de la ciudad en formato JSON.
             </Typography>

             <Typography variant="h5" align="left" paragraph style={{ backgroundColor: '#81d4fa', height: '10vh' }} >
            Por último, podras observar que en la parte superior derecha se encuentra un botón: {"  "}
            <Button variant="contained" color="primary"> Historial </Button> {"      "}  
            el cual te servira para saber que ciudad haz consultado.
             </Typography>
           
       </div>
       

     );
}

export default Inicio;