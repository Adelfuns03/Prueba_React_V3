import React from 'react'

const Bogota = () => {

    const [noticias, setnoticias] = React.useState([])

    React.useEffect (() => {
        obtenernoticias()
    }, [])

    const obtenernoticias = async () => {                              
        const data = await fetch('http://localhost:53535/api/bogota')  // Se transforman los datos en json
        const newyork = await data.json()
        setnoticias(newyork)
    }

    const [clima, setclima] = React.useState([])

    React.useEffect (() => {
        obtenerclima()
    }, [])

    const obtenerclima = async () => {                              
        const data = await fetch('http://localhost:53535/api/bogota/getclima')  // Se transforman los datos en json
        const newyorkclima = await data.json()
        setclima(newyorkclima)
    }

    return ( 
        <div>
            <h1 className='container-fluid'>Información de Bogotá D.C</h1>

            <ul>
                {
                     noticias.map(item => (
                        <li key={item.IDInfo}>{item.Fecha} - {item.Titulo} - {item.Autor} - {item.Descripcion}</li>
                     ))
                }
            </ul>
            <hr />
            <h1 className='container-fluid'> Clima en Bogotá D.C </h1>
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
 
export default Bogota;