import React from 'react'

const Cartagena = () => {

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