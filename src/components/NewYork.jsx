import React from 'react'
import {Button} from "@material-ui/core";

const NewYork = () => {

    React.useEffect(() => {

    var url = 'http://localhost:53535/api/historial';
    var data = {Ciudad: 'New York', Info: 'Noticias' };

    fetch(url, {
    method: 'POST', // o 'PUT'
    body: JSON.stringify(data), // los datos pueden ser `string` o {object} 
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

    }, [])

    const [noticias, setnoticias] = React.useState([])

    React.useEffect (() => {
        obtenernoticias()
    }, [])

    const obtenernoticias = async () => {                              
        const data = await fetch('http://localhost:53535/api/newyork')  // Se transforman los datos en json
        const newyork = await data.json()
        setnoticias(newyork)
    }

    const [clima, setclima] = React.useState([])

    React.useEffect (() => {
        obtenerclima()
    }, [])

    const obtenerclima = async () => {                              
        const data = await fetch('http://localhost:53535/api/newyork/getclima')  // Se transforman los datos en json
        const newyorkclima = await data.json()
        setclima(newyorkclima)
    }

    return ( 
        <div>
            <h1 className='container-fluid'>Información de New York</h1>
            <ul>
                {
                     noticias.map(item => (
                        <li key={item.IDInfo}>{item.Fecha} - {item.Titulo} - {item.Autor} - {item.Descripcion}</li>
                     ))
                }
            </ul>
            <hr />
            <h1 className='container-fluid'> Clima en New York </h1>
            <ul>
                {
                     clima.map(item => (
                        <li key={item.ID}>{item.Temperatura} Grados - {item.Descripcion}</li>
                     ))
                }
            </ul>
        <hr />
            <h1 className='container-fluid'> Información en formato JSON </h1>
            <div className="Container mt-5" align='center'>
            <Button variant="contained" color="primary" href='http://localhost:53535/api/cartagena/getclima'>
                Clima de New York</Button> {"   "}
            <Button variant="contained" color="secondary" href='http://localhost:53535/api/cartagena'>
                Noticias de New York</Button> {"   "}
            </div>
        </div>
     )
}
 
export default NewYork;