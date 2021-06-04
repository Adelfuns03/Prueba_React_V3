import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Bogota from './components/Bogota';
import Inicio from './components/Inicio';
import NewYork from './components/NewYork';
import Cartagena from './components/Cartagena';

function App() {
  return (
    <Router>
     <div className="Container mt-5 ">
       <div className="btn-group" >
       <Link to="/" exact className="btn btn-dark">
       Inicio
       </Link>
       <Link to="/bogota" className="btn btn-dark">
       Bogotá D.C
       </Link>
       <Link to="/cartagena" className="btn btn-dark">
       Cartagena
       </Link>
       <Link to="/newyork" className="btn btn-dark">
       New York
       </Link>
       </div>
       <hr />
       <Switch>
          <Route path="/bogota">
            <Bogota />
          </Route>
          <Route path="/cartagena">
            <Cartagena />
          </Route>
          <Route path="/newyork">
           <NewYork/>
          </Route>
          <Route path="/" exact>
            <Inicio />
          </Route>
       </Switch>
     </div>
    </Router>
  );
}

export default App;

// hr genera una linea
// switch se carga el contenido dinamico
// path se declara la ruta 
// <Route path="/" exact> se utiliza para dejar el inicio 