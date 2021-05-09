import MoviesGallery from './component/MoviesGallery';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { HashRouter, Route, Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MovieDetails from './component/MovieDetails';
class App extends React.Component {

  render(){
  
    return(
      <div> 
        
                    <HashRouter>
                    <Route exact path= "/">
                    <MoviesGallery> </MoviesGallery>
                    </Route>
                    <Route exact path ="/movie/:id"> 
                    <MovieDetails></MovieDetails>
                    </Route>
                </HashRouter>
              
            <Container>
               
            </Container>

        </div>
    )
  }


}

export default App;
