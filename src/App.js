import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Bogota from './components/Bogota';
import Inicio from './components/Inicio';
import NewYork from './components/NewYork';
import Cartagena from './components/Cartagena';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'
import Navbar from './components/Navbar'


function App() {
  return (

       <ThemeProvider theme={theme}>     
          <Navbar/>
            <Router>
            <div className="Container mt-3 ">
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
      </ThemeProvider>
  );
}

export default App;

// hr genera una linea
// switch se carga el contenido dinamico
// path se declara la ruta 
// <Route path="/" exact> se utiliza para dejar el inicio 