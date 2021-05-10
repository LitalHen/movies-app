import MoviesGallery from './component/MoviesGallery';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { HashRouter, Link, Route, Router } from 'react-router-dom';
import { Container,Row, Nav} from 'react-bootstrap';
import MovieDetails from './component/MovieDetails';
class App extends React.Component {

  render(){
  
    return(
      <Nav activeKey="/home">
        
    <HashRouter>
   
      <Container>
        
      <ul>
          <li> <Link to="/#/">Home Page </Link></li>
           <li> <Link to="/movies">Search Movies </Link></li>  
             </ul>
        </Container>
     
          <Container>
              <Route exact path= "/movie/:id">
              <MovieDetails></MovieDetails>
          </Route>
              </Container>
              <Container>
              <Route exact path= "/movies">
              <MoviesGallery> </MoviesGallery>
         </Route>
      <Route exact path= "/">
           <h1>Home Page</h1>
      </Route>
      </Container>
    </HashRouter>
    </Nav>
    )
  }


}

export default App;
