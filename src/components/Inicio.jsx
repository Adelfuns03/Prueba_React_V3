import React from 'react'
import { Button } from "@material-ui/core";


function Inicio() {

    return ( 
        <div className='container-fluid' >
            <h1>Bienvenido a la sección 
                de resultados JSON.</h1>

        <p> 
        <form className="Container mt-5" align='center'>

            <Button variant="contained" color="primary" href='http://localhost:53535/api/bogota' onClick={this.onhis}>
                Noticias de Bogotá D.C</Button> {"   "}
            <Button variant="contained" color="secondary" href='http://localhost:53535/api/cartagena' >
                Noticias de Cartagena</Button> {"   "}
            <Button variant="contained" color="outlined" href='http://localhost:53535/api/newyork'>
                Noticias de New York</Button> {"   "}
        </form>
        </p>
 
        <div className="Container mt-5" align='center'>
            <Button variant="contained" color="primary" href='http://localhost:53535/api/bogota/getclima'>
                Clima de Bogotá D.C</Button> {"   "}
            <Button variant="contained" color="secondary" href='http://localhost:53535/api/cartagena/getclima'>
                Clima de Cartagena</Button> {"   "}
            <Button variant="contained" color="outlined" href='http://localhost:53535/api/newyork/getclima'>
                Clima de New York</Button> {"   "}
        </div>


        </div>


     );
}

export default Inicio;