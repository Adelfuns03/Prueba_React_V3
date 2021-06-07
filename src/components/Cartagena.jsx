import React from 'react'

const Cartagena = () => {

    React.useEffect(() => {

        var url = 'http://localhost:53535/api/historial';
        var data = {Ciudad: 'Cartagena', Info: 'Noticias' };
    
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
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
        const data = await fetch('http://localhost:53535/api/cartagena')  // Se transforman los datos en json
        const newyork = await data.json()
        setnoticias(newyork)
    }

    const [clima, setclima] = React.useState([])

    React.useEffect (() => {
        obtenerclima()
    }, [])

    const obtenerclima = async () => {                              
        const data = await fetch('http://localhost:53535/api/cartagena/getclima')  // Se transforman los datos en json
        const cartagenaclima = await data.json()
        setclima(cartagenaclima)
    }

    return ( 
        <div>
            <h1 className='container-fluid'>Información de Cartagena de Indias</h1>

            <ul>
                {
                     noticias.map(item => (
                        <li key={item.IDInfo}>{item.Fecha} - {item.Titulo} - {item.Autor} - {item.Descripcion}</li>
                     ))
                }
            </ul>
            <hr />
            <h1 className='container-fluid'> Clima en Cartagena de Indias </h1>
            <ul>
                {
                     clima.map(item => (
                        <li key={item.ID}>{item.Temperatura} Grados - {item.Descripcion}</li>
                     ))
                }
            </ul>

        </div>
     );
}
 
export default Cartagena;